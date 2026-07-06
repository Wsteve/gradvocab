// ============================================================
// Graduate Vocabulary Reader - Application Logic
// ============================================================

// --- State ---
let currentView = 'home';
let currentArticle = null;
let learnedWords = new Set(JSON.parse(localStorage.getItem('learnedWords') || '[]'));
let completedArticles = new Set(JSON.parse(localStorage.getItem('completedArticles') || '[]'));
let currentFilter = 'all';

// --- DOM Ready ---
document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  // Start with first article (or last read) instead of card grid
  var lastIdx = localStorage.getItem('lastArticleIndex');
  var startIdx = lastIdx !== null ? parseInt(lastIdx) : 0;
  currentArticle = startIdx;
  renderArticle(startIdx);
  document.querySelector('.view-article').classList.add('active');
  document.querySelector('.nav-tab[data-view="home"]').classList.add('active');
  renderNav();
  setupEventListeners();
  updateProgress();
  updateStreak();
}

// --- Navigation ---
function setupEventListeners() {
  // Nav tabs
  document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const view = tab.dataset.view;
      switchView(view);
    });
  });

  // Logo click -> home
  document.querySelector('.header-left').addEventListener('click', () => {
    switchView('home');
  });

  // Back button
  document.querySelector('.back-btn')?.addEventListener('click', () => {
    switchView('home');
  });

  // Close popup
  document.querySelector('.btn-close-popup')?.addEventListener('click', function(e) {
    e.stopPropagation();
    closeWordPopup();
  });
  document.querySelector('.word-popup-overlay')?.addEventListener('click', function(e) {
    if (!e.target.closest('.word-popup') && !e.target.closest('.syl-popup')) {
      closeWordPopup();
    }
  });

  // Sidebar close
  document.querySelector('.sidebar-close')?.addEventListener('click', function() {
    document.getElementById('word-sidebar').classList.remove('active');
  });

  // Universal click-to-speak: click any word in English column to hear it
  document.addEventListener('click', function(e) {
    // Only in English paragraphs (not in sidebar, popups, or nav)
    if (e.target.closest('.word-sidebar') || e.target.closest('.word-popup') ||
        e.target.closest('.syl-popup') || e.target.closest('.app-header') ||
        e.target.closest('button') || e.target.closest('select') ||
        e.target.closest('input') || e.target.closest('.sb-root-card')) return;

    // Don't double-speak vocab words
    if (e.target.classList.contains('vocab-word') || e.target.closest('.vocab-word')) return;

    // Get the word under click using caret range (cross-browser)
    var range;
    if (document.caretRangeFromPoint) {
      range = document.caretRangeFromPoint(e.clientX, e.clientY);
    } else if (document.caretPositionFromPoint) {
      var pos = document.caretPositionFromPoint(e.clientX, e.clientY);
      if (pos) {
        range = document.createRange();
        range.setStart(pos.offsetNode, pos.offset);
        range.setEnd(pos.offsetNode, pos.offset);
      }
    }
    if (!range || !range.startContainer) return;

    var textNode = range.startContainer;
    if (textNode.nodeType !== 3) return;

    var offset = range.startOffset;
    var text = textNode.textContent;
    var start = offset, end = offset;
    while (start > 0 && /[a-zA-Z]/.test(text[start - 1])) start--;
    while (end < text.length && /[a-zA-Z]/.test(text[end])) end++;

    var word = text.substring(start, end).trim();
    if (word.length >= 2 && /^[a-zA-Z]+$/.test(word)) {
      speakWord(word);
    }
  });

  // Scroll to top
  const scrollBtn = document.querySelector('.scroll-top');
  window.addEventListener('scroll', () => {
    scrollBtn.classList.toggle('visible', window.scrollY > 400);
  });
  scrollBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function switchView(view, articleId) {
  currentView = view;

  // Track activity
  if (view === 'article' && articleId !== undefined) {
    localStorage.setItem('lastArticleIndex', articleId);
  }
  localStorage.setItem('lastInteractionDate', new Date().toISOString().split('T')[0]);

  document.querySelectorAll('.view-home, .view-article, .view-words, .view-flashcards, .view-plan').forEach(el => {
    el.classList.remove('active');
  });

  document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.view === view);
  });

  if (view === 'home') {
    // Home = show article reader (last read or first)
    var lastIdx = localStorage.getItem('lastArticleIndex');
    var articleIdx = lastIdx !== null ? parseInt(lastIdx) : 0;
    currentArticle = articleIdx;
    renderArticle(articleIdx);
    document.querySelector('.view-article').classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else if (view === 'article' && articleId !== undefined) {
    // Stop previous slideshow autoplay
    document.querySelectorAll('.slideshow-play-btn').forEach(btn => {
      if (btn) btn.textContent = '▶';
    });
    slideAutoPlay = false;
    Object.values(slideIntervals).forEach(t => clearInterval(t));
    slideIntervals = {};
    currentArticle = articleId;
    renderArticle(articleId);
    document.querySelector('.view-article').classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else if (view === 'flashcards') {
    document.querySelector('.view-flashcards').classList.add('active');
    initFlashcards();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else if (view === 'words') {
    document.querySelector('.view-words').classList.add('active');
    renderWordList();
    setupDownloadButtons();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else if (view === 'plan') {
    document.querySelector('.view-plan').classList.add('active');
    renderStudyPlan();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  updateProgress();
  updateStreak();
}

// --- Render Home ---
function renderHome() {
  const grid = document.querySelector('.article-grid');
  grid.innerHTML = '';

  ARTICLES.forEach((article, index) => {
    const card = document.createElement('div');
    card.className = 'article-card fade-in';
    card.style.animationDelay = `${index * 0.04}s`;

    const wordCount = WORD_GROUPS[index].end - WORD_GROUPS[index].start + 1;
    const isCompleted = completedArticles.has(index);
    const learnedCount = countLearnedInArticle(index);

    card.innerHTML = `
      <div class="article-card-number">${article.id}</div>
      <div class="card-labels">
        <span class="card-label sci">${article.scienceLabel}</span>
        <span class="card-label spt">${article.sportsLabel}</span>
        ${isCompleted ? '<span class="card-label" style="background:rgba(52,211,153,0.15);color:var(--accent-green)">✓ 已学完</span>' : ''}
      </div>
      <h2>${article.title}</h2>
      <div class="cn-title">${article.cnTitle}</div>
      <div class="card-intro">${article.intro}</div>
      <div class="card-meta">
        <span>📖 ${wordCount} 个单词</span>
        <span>📝 ${learnedCount}/${wordCount}</span>
      </div>
    `;

    card.addEventListener('click', () => {
      switchView('article', index);
    });

    grid.appendChild(card);
  });
}

// --- Render Article ---
function renderArticle(index) {
  const article = ARTICLES[index];
  const group = WORD_GROUPS[index];
  const articleWords = WORDS.slice(group.start, group.end + 1);

  // Header
  document.querySelector('.reader-title').textContent = article.title;
  document.querySelector('.reader-cn-title').textContent = article.cnTitle;
  document.querySelector('.reader-labels').innerHTML = `
    <span class="card-label sci">${article.scienceLabel}</span>
    <span class="card-label spt">${article.sportsLabel}</span>
  `;
  document.querySelector('.reader-word-count').textContent = `📖 ${articleWords.length} 个核心单词`;

  // Update back button to show article selector
  var backBtn = document.querySelector('.back-btn');
  if (backBtn) {
    backBtn.innerHTML = '← 文章 ' + (index + 1) + ' / ' + ARTICLES.length;
    backBtn.style.pointerEvents = 'none';
    backBtn.style.opacity = '0.6';
  }

  // Content - bilingual layout
  const contentDiv = document.querySelector('.reader-content');

  // Column headers with navigation between them
  var headersHTML = '<div class="reader-column-headers">' +
    '<div class="col-header">🇬🇧 English</div>' +
    '<div class="col-header">🇨🇳 中文</div>' +
    '</div>' +
    '<div class="article-nav-row">' +
      '<button class="article-nav-btn prev-article" ' + (index === 0 ? 'disabled' : '') + '>← 上一篇</button>' +
      '<span class="article-nav-info">' + article.cnTitle + '</span>' +
      '<button class="article-nav-btn read-aloud-btn" title="朗读全文">🔊 全文朗读</button>' +
      '<button class="article-nav-btn voice-toggle" title="切换发音人">🎙️ <span class="voice-label">VOA</span></button>' +
      '<button class="article-nav-btn next-article" ' + (index >= ARTICLES.length - 1 ? 'disabled' : '') + '>下一篇 →</button>' +
    '</div>';

  // Paragraph pairs
  var paragraphsCN = article.paragraphsCN || [];
  var pairsHTML = article.paragraphs.map(function(para, i) {
    var cnText = paragraphsCN[i] || '';
    // Convert **text** to <strong class="cn-vocab">text</strong>
    var cnHTML = cnText.replace(/\*\*(.+?)\*\*/g, '<strong class="cn-vocab">$1</strong>');
    return '<div class="para-pair">' +
      '<p class="en-para" data-para="' + i + '">' + highlightWords(para, articleWords) +
        '<span class="para-speak" title="朗读本段">🔊</span></p>' +
      '<p class="cn-para">' + cnHTML + '</p>' +
      '</div>';
  }).join('');

  contentDiv.innerHTML = headersHTML + pairsHTML;

  // Init voice toggle
  setTimeout(initVoiceToggle, 100);

  // Latin poetry section
  renderLatinPoem(index);

  // Word chips
  const wordListDiv = document.querySelector('.article-word-list');
  wordListDiv.innerHTML = articleWords.map((w, i) => {
    const isLearned = learnedWords.has(group.start + i);
    return `<div class="article-word-chip" data-word-index="${group.start + i}" style="${isLearned ? 'border-left:3px solid var(--accent-green)' : ''}">
      <span class="chip-syllables">${w.syllables}</span>
      <span>${w.word}</span>
      <span class="chip-speak">🔊</span>
    </div>`;
  }).join('');

  // Add click handlers for word chips
  document.querySelectorAll('.article-word-chip').forEach(chip => {
    chip.addEventListener('click', (e) => {
      const idx = parseInt(chip.dataset.wordIndex);
      showWordSidebar(idx);
      speakWord(WORDS[idx].word);  // Auto-pronounce
    });

    const speakBtn = chip.querySelector('.chip-speak');
    speakBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const idx = parseInt(chip.dataset.wordIndex);
      speakWord(WORDS[idx].word);
    });
  });

  // Add click handlers for highlighted words in text
  document.querySelectorAll('.vocab-word').forEach(el => {
    el.addEventListener('click', (e) => {
      const idx = parseInt(el.dataset.wordIndex);
      showWordSidebar(idx);           // Show in upper-right panel
      speakWord(WORDS[idx].word);     // Auto-pronounce
      highlightCNMatch(el);            // Cross-highlight CN word
    });
  });

  // Mark complete button
  const btnContainer = document.querySelector('.article-word-section .btn-container');
  if (btnContainer) {
    btnContainer.innerHTML = completedArticles.has(index)
      ? '<button class="btn-complete" style="background:var(--accent-green);color:#fff;padding:10px 20px;border:none;border-radius:8px;font-size:14px;font-weight:600;cursor:pointer">✓ 已完成本课</button>'
      : '<button class="btn-complete" style="background:var(--accent-blue);color:#fff;padding:10px 20px;border:none;border-radius:8px;font-size:14px;font-weight:600;cursor:pointer">✓ 标记为已学完</button>';

    document.querySelector('.btn-complete').addEventListener('click', () => {
      toggleArticleComplete(index);
    });
  }

  // Article navigation buttons
  var prevBtn = document.querySelector('.prev-article');
  var nextBtn = document.querySelector('.next-article');
  if (prevBtn) {
    prevBtn.addEventListener('click', function() {
      if (index > 0) switchView('article', index - 1);
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', function() {
      if (index < ARTICLES.length - 1) switchView('article', index + 1);
    });
  }

  // Read aloud button
  var readBtn = document.querySelector('.read-aloud-btn');
  if (readBtn) {
    readBtn.addEventListener('click', function() {
      var isReading = this.dataset.reading === 'true';
      if (isReading) {
        stopReading();
      } else {
        startReading(index);
      }
    });
  }

  // Paragraph speaker icons
  document.querySelectorAll('.para-speak').forEach(function(icon) {
    icon.addEventListener('click', function(e) {
      e.stopPropagation();
      var paraEl = this.closest('.en-para');
      if (paraEl) speakParagraph(paraEl.textContent.replace('🔊', '').trim());
    });
  });

  // Double-click on paragraph → read sentence at click position
  document.querySelectorAll('.en-para').forEach(function(para) {
    para.addEventListener('dblclick', function(e) {
      e.stopPropagation();
      var sentence = getSentenceAtPoint(e.clientX, e.clientY);
      if (sentence) speakParagraph(sentence);
    });
  });
}

function highlightWords(text, articleWords) {
  // Sort words by length descending to match longer words first
  const sorted = [...articleWords].sort((a, b) => b.word.length - a.word.length);

  let result = text;
  sorted.forEach((w, i) => {
    const globalIndex = WORDS.indexOf(w);
    const regex = new RegExp('\\b(' + w.word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')\\b', 'gi');
    result = result.replace(regex, (match) => {
      return `<span class="vocab-word" data-word-index="${globalIndex}">${match}</span>`;
    });
  });
  return result;
}

// Cross-highlight: when clicking EN word, highlight matching CN word
function highlightCNMatch(enElement) {
  // Remove all previous CN highlights
  document.querySelectorAll('.cn-vocab.active').forEach(function(el) {
    el.classList.remove('active');
  });

  // Find which vocab-word this is within its paragraph
  var paraEl = enElement.closest('.en-para');
  if (!paraEl) return;

  var allEnWords = paraEl.querySelectorAll('.vocab-word');
  var wordIndex = -1;
  for (var i = 0; i < allEnWords.length; i++) {
    if (allEnWords[i] === enElement) { wordIndex = i; break; }
  }
  if (wordIndex < 0) return;

  // Find the matching CN word in the same para-pair
  var pairEl = enElement.closest('.para-pair');
  if (!pairEl) return;

  var allCnWords = pairEl.querySelectorAll('.cn-vocab');
  if (wordIndex < allCnWords.length) {
    allCnWords[wordIndex].classList.add('active');
    // Scroll CN word into view if needed
    allCnWords[wordIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

// Word → emoji mapping based on meaning
var WORD_EMOJI = {
  hypothesis: '💡', gene: '🧬', inherit: '👨‍👦', dominant: '👑', mutation: '🦎',
  evolution: '🔄', trait: '🏷️', chromosome: '🧶', replicate: '📋', sequence: '🔗',
  genetic: '🧬', variation: '🎨', species: '🐾', genome: '📜', hereditary: '🏰',
  gravity: '🌍', collapse: '💥', dense: '🪨', infinite: '♾️', dimension: '📐',
  emit: '📡', radiation: '☢️', absorb: '🧽', cosmic: '🌌', phenomenon: '✨',
  velocity: '💨', orbit: '💫', density: '⚖️', contract: '📉', expand: '📈',
  neuron: '🧠', synapse: '⚡', cortex: '🧠', cognitive: '🤔', perception: '👁️',
  stimulus: '🔔', response: '↩️', reflex: '🦵', plasticity: '🧘', hemisphere: '🌓',
  coordinate: '🎯', impulse: '💥', sensory: '👂', motor: '🏃', integration: '🧩',
  sustainable: '🌱', ecosystem: '🌳', emission: '💨', carbon: '🖤', renewable: '☀️',
  conservation: '🛡️', biodiversity: '🦋', pollution: '🏭', climate: '🌡️', adaptation: '🦎',
  mitigation: '🩹', resource: '💎', recycle: '♻️', environmental: '🌍', footprint: '👣',
  quantum: '⚛️', particle: '🔵', measurement: '📏', probability: '🎲', observe: '🔬',
  predict: '🔮', analyze: '🔍', statistic: '📊', variance: '📈', distribution: '📦',
  correlation: '🔗', regression: '↩️', parameter: '🎛️', precision: '🎯', calibrate: '⚙️',
  adapt: '🦎', survival: '🏕️', generation: '👶', mutate: '🧬', diversify: '🌈',
  organism: '🦠', reproduce: '🐣', adaptive: '🔧', innate: '🧬', offspring: '🐤',
  mechanism: '⚙️', evolve: '📈', thrive: '🌺', habitat: '🏠', niche: '🧩',
  marine: '🌊', depth: '📏', pressure: '🏋️', current: '🌊', tide: '🌊',
  sediment: '🪨', coral: '🪸', migrate: '🦅', symbiotic: '🤝', trench: '🕳️',
  zone: '🗺️', abyss: '🌑', circulation: '🔄', stratum: '📚', oceanic: '🌊',
  virus: '🦠', immune: '🛡️', infection: '🦠', antibody: '💉', vaccine: '💉',
  pathogen: '🦠', epidemic: '📈', resistance: '🏋️', recover: '🏥', immunity: '🛡️',
  cellular: '🔬', outbreak: '💥', diagnose: '🩺', therapy: '💊', chronic: '⏳',
  algorithm: '🤖', artificial: '🏗️', intelligence: '🧠', pattern: '🔍', recognition: '👁️',
  data: '📊', machine: '⚙️', neural: '🧠', network: '🕸️', classify: '🏷️',
  optimize: '⚡', train: '🏋️', model: '🗿', simulate: '🎮', iteration: '🔁',
  psychology: '🧠', consciousness: '💭', focus: '🎯', emotion: '😊', motivation: '🔥',
  resilience: '💪', discipline: '⚔️', visualize: '🎨', mindset: '🧠', anxiety: '😰',
  confidence: '🦁', peak: '⛰️', performance: '🏆', achieve: '🥇', potential: '🌱'
};

function showWordSidebar(wordIndex) {
  var sidebar = document.getElementById('word-sidebar');
  if (!sidebar) return;

  var word = WORDS[wordIndex];
  var ety = typeof ETYMOLOGY !== 'undefined' ? ETYMOLOGY[word.word] : null;

  // ── Top: Emoji + Word + Ancient Origin ──
  sidebar.querySelector('.sb-emoji').textContent = WORD_EMOJI[word.word] || '📖';
  sidebar.querySelector('.sb-word').textContent = word.word;
  sidebar.querySelector('.sb-phonetic').textContent = word.phonetic;
  sidebar.querySelector('.sb-origin').textContent = ety
    ? (ety.origin || '') + (ety.story ? ' — ' + ety.story.substring(0, 80) : '')
    : '';

  // ── Middle: Root Breakdown ──
  var rootsContainer = sidebar.querySelector('.sb-roots');
  if (ety && ety.parts) {
    rootsContainer.innerHTML = ety.parts.map(function(p) {
      var langClass = (p.lang || '').indexOf('希腊') >= 0 ? 'greek'
        : (p.lang || '').indexOf('法') >= 0 ? 'french'
        : (p.lang || '').indexOf('英') >= 0 ? 'eng'
        : 'latin';
      var langShort = (p.lang || '').indexOf('希腊') >= 0 ? '希'
        : (p.lang || '').indexOf('法') >= 0 ? '法'
        : (p.lang || '').indexOf('英') >= 0 ? '英'
        : '拉';
      return '<div class="sb-root-card" data-syl="' + p.syl.replace(/"/g, '&quot;') + '">' +
        '<div class="sb-root-syl">' + p.syl + '</div>' +
        '<div class="sb-root-ipa">' + (p.ipa || '') + '</div>' +
        '<span class="sb-root-lang ' + langClass + '">' + langShort + '</span>' +
        '<div class="sb-root-note">' + (p.note ? p.note.substring(0, 30) : '') + '</div>' +
        '</div>';
    }).join('');

    setTimeout(function() {
      rootsContainer.querySelectorAll('.sb-root-card').forEach(function(card) {
        card.addEventListener('click', function(e) {
          e.stopPropagation();
          var syl = this.dataset.syl;
          var cleanSyl = syl.replace(/[·\-]/g, '').trim();
          if (cleanSyl) speakWord(cleanSyl);
          var partData = ety.parts.find(function(p) { return p.syl === syl; });
          showSylPopup(this, syl, partData);
        });
      });
    }, 30);
  } else {
    rootsContainer.innerHTML = '<div style="font-size:13px;color:var(--text-muted);padding:4px 16px">' +
      word.syllables.split('·').map(function(s) {
        return '<span style="display:inline-block;margin:2px 4px;padding:2px 8px;background:var(--bg-hover);border-radius:4px;color:var(--accent-amber);font-weight:600">' + s + '</span>';
      }).join('') + '</div>';
  }

  // ── Bottom: Phrases ──
  var phrasesContainer = sidebar.querySelector('.sb-phrases');
  var phrases = (ety && ety.phrases) ? ety.phrases : [];
  if (phrases.length > 0) {
    phrasesContainer.innerHTML = phrases.map(function(p) {
      return '<div class="sb-phrase-item">' +
        '<div class="sb-phrase-en">' + p.en.replace(new RegExp('\\b' + word.word + '\\b', 'gi'), '<strong>' + word.word + '</strong>') + '</div>' +
        '<div class="sb-phrase-zh">' + p.zh + '</div>' +
        '</div>';
    }).join('');
  } else {
    // Fallback: show the word in a simple sentence context
    var sentence = findWordSentence(word);
    phrasesContainer.innerHTML = '<div class="sb-phrase-item">' +
      '<div class="sb-phrase-en">' + (sentence || word.word) + '</div>' +
      '<div class="sb-phrase-zh">' + word.meaning + '</div>' +
      '</div>';
  }

  // Speak button
  var speakBtn = sidebar.querySelector('.sidebar-speak-all');
  var newSpeak = speakBtn.cloneNode(true);
  speakBtn.parentNode.replaceChild(newSpeak, speakBtn);
  newSpeak.addEventListener('click', function() { speakWord(word.word); });

  // Show
  sidebar.classList.add('active');
}

// --- Word Popup ---
var popupCloseTimer = null;

function showWordPopup(wordIndex, articleIndex, clickEvent) {
  const word = WORDS[wordIndex];
  const popup = document.querySelector('.word-popup');
  const overlay = document.querySelector('.word-popup-overlay');

  // Clear any pending close timer
  if (popupCloseTimer) { clearTimeout(popupCloseTimer); popupCloseTimer = null; }

  // Fill compact content
  popup.querySelector('.popup-word').textContent = word.word;
  popup.querySelector('.popup-syllables').textContent = word.syllables;
  popup.querySelector('.popup-phonetic').textContent = word.phonetic;
  popup.querySelector('.popup-meaning').textContent = word.meaning;

  // Find sentence from article
  var article = ARTICLES[articleIndex];
  var sentence = '';
  for (var pi = 0; pi < article.paragraphs.length; pi++) {
    var para = article.paragraphs[pi];
    var regex = new RegExp('\\b' + word.word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'i');
    if (regex.test(para)) {
      sentence = para.replace(regex, '**' + word.word + '**');
      var matchIndex = sentence.indexOf('**' + word.word + '**');
      var start = Math.max(0, matchIndex - 30);
      var end = Math.min(sentence.length, matchIndex + word.word.length + 50);
      var excerpt = sentence.substring(start, end);
      if (start > 0) excerpt = '...' + excerpt;
      if (end < sentence.length) excerpt = excerpt + '...';
      sentence = excerpt;
      break;
    }
  }

  popup.querySelector('.popup-sentence').innerHTML = sentence
    ? sentence.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    : '';

  // Etymology (compact)
  renderEtymology(word, wordIndex);

  // Speak button
  var speakBtn = popup.querySelector('.btn-speak');
  var newSpeak = speakBtn.cloneNode(true);
  speakBtn.parentNode.replaceChild(newSpeak, speakBtn);
  newSpeak.addEventListener('click', function() { speakWord(word.word); });

  // Position near the clicked element
  positionPopupNear(clickEvent);

  // Show
  overlay.classList.add('active');
  popup.classList.add('active');

  // Mark as learned
  if (!learnedWords.has(wordIndex)) {
    toggleLearned(wordIndex);
    renderArticle(articleIndex);
    updateProgress();
  }
}

function positionPopupNear(clickEvent) {
  var popup = document.querySelector('.word-popup');
  if (!popup) return;

  // Default: center-top
  var left = (window.innerWidth - 500) / 2;
  var top = 80;

  if (clickEvent && clickEvent.target) {
    var rect = clickEvent.target.getBoundingClientRect();
    var pw = Math.min(500, window.innerWidth - 20);
    left = rect.left + (rect.width / 2) - (pw / 2);
    top = rect.bottom + 8;

    // Keep in viewport
    if (left < 10) left = 10;
    if (left + pw > window.innerWidth - 10) left = window.innerWidth - pw - 10;
    if (top + 200 > window.innerHeight) top = rect.top - 210;
    if (top < 10) top = 10;
  }

  popup.style.left = left + 'px';
  popup.style.top = top + 'px';
  popup.style.maxWidth = '500px';
}

function closeWordPopup() {
  document.querySelector('.word-popup-overlay').classList.remove('active');
  document.querySelector('.word-popup').classList.remove('active');
}

// ============================================================
// Voice Engine — BBC (UK) / VOA (US) male/female
// ============================================================

var voiceMode = localStorage.getItem('voiceMode') || 'voa-male'; // voa-male | voa-female | bbc-male | bbc-female

var VOICE_MODES = [
  { id: 'voa-male',   label: 'VOA ♂', lang: 'en-US', gender: 'male',   rate: 0.90, desc: 'VOA 美音男声' },
  { id: 'voa-female', label: 'VOA ♀', lang: 'en-US', gender: 'female', rate: 0.95, desc: 'VOA 美音女声' },
  { id: 'bbc-male',   label: 'BBC ♂', lang: 'en-GB', gender: 'male',   rate: 0.85, desc: 'BBC 英音男声' },
  { id: 'bbc-female', label: 'BBC ♀', lang: 'en-GB', gender: 'female', rate: 0.90, desc: 'BBC 英音女声' },
];

function getVoiceConfig() {
  return VOICE_MODES.find(function(m) { return m.id === voiceMode; }) || VOICE_MODES[0];
}

function findBestVoice(lang, gender) {
  var voices = window.speechSynthesis.getVoices();
  if (voices.length === 0) return null;

  // Score each voice: exact match > partial match > fallback
  var scored = voices.map(function(v) {
    var score = 0;
    var vl = v.lang.toLowerCase();
    var vn = v.name.toLowerCase();

    // Language match
    if (vl === lang) score += 100;
    else if (vl.startsWith(lang.split('-')[0])) score += 50;
    else if (vl.startsWith('en')) score += 20;

    // Gender match (heuristic: female voices often have "female" or feminine names)
    var isFemale = vn.indexOf('female') >= 0 || vn.indexOf('woman') >= 0 ||
                   vn.indexOf('samantha') >= 0 || vn.indexOf('lisa') >= 0 ||
                   vn.indexOf('karen') >= 0 || vn.indexOf('moira') >= 0 ||
                   vn.indexOf('fiona') >= 0 || vn.indexOf('susan') >= 0 ||
                   vn.indexOf('zira') >= 0 || vn.indexOf('veena') >= 0;
    if (gender === 'female' && isFemale) score += 30;
    else if (gender === 'male' && !isFemale) score += 30;

    // Prefer Google/System voices (higher quality)
    if (vn.indexOf('google') >= 0) score += 40;
    else if (vn.indexOf('microsoft') >= 0) score += 20;
    else if (vn.indexOf('apple') >= 0) score += 15;

    // Prefer "natural" or "premium" or "wavenet" voices
    if (vn.indexOf('natural') >= 0 || vn.indexOf('premium') >= 0 || vn.indexOf('wavenet') >= 0) score += 25;

    return { voice: v, score: score };
  });

  scored.sort(function(a, b) { return b.score - a.score; });
  return scored[0] && scored[0].score > 0 ? scored[0].voice : null;
}

function speakWord(word) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();

  var config = getVoiceConfig();
  var u = new SpeechSynthesisUtterance(word);
  u.lang = config.lang;
  u.rate = config.rate;
  u.pitch = 1;
  u.volume = 1;

  var voice = findBestVoice(config.lang, config.gender);
  if (voice) u.voice = voice;

  window.speechSynthesis.speak(u);
}

function cycleVoice() {
  var idx = VOICE_MODES.findIndex(function(m) { return m.id === voiceMode; });
  idx = (idx + 1) % VOICE_MODES.length;
  voiceMode = VOICE_MODES[idx].id;
  localStorage.setItem('voiceMode', voiceMode);
  updateVoiceLabel();
}

function updateVoiceLabel() {
  var config = getVoiceConfig();
  var label = document.querySelector('.voice-label');
  if (label) label.textContent = config.label;
}

function initVoiceToggle() {
  updateVoiceLabel();
  var btn = document.querySelector('.voice-toggle');
  if (btn && !btn._voiceBound) {
    btn._voiceBound = true;
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      cycleVoice();
      // Speak a sample word so user hears the voice change
      speakWord('English');
    });
  }
}

// --- Speak (Web Speech API) OLD - replaced above ---

// --- Word List View ---
function renderWordList(filter) {
  const container = document.querySelector('.word-list');
  const filterBar = document.querySelector('.word-filter-bar');

  // Create filter buttons
  filterBar.innerHTML = `
    <button class="filter-btn ${currentFilter === 'all' ? 'active' : ''}" data-filter="all">全部 (${WORDS.length})</button>
    <button class="filter-btn ${currentFilter === 'learned' ? 'active' : ''}" data-filter="learned">已掌握 (${learnedWords.size})</button>
    <button class="filter-btn ${currentFilter === 'unlearned' ? 'active' : ''}" data-filter="unlearned">待学习 (${WORDS.length - learnedWords.size})</button>
  `;

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentFilter = btn.dataset.filter;
      renderWordList(currentFilter);
    });
  });

  // Filter words
  let filteredWords = WORDS.map((w, i) => ({ ...w, index: i }));

  if (currentFilter === 'learned') {
    filteredWords = filteredWords.filter(w => learnedWords.has(w.index));
  } else if (currentFilter === 'unlearned') {
    filteredWords = filteredWords.filter(w => !learnedWords.has(w.index));
  }

  container.innerHTML = '';

  if (filteredWords.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">🎉</div>
        <h3>太棒了！所有单词都学完了</h3>
        <p>开始复习或阅读下一篇文章吧</p>
      </div>
    `;
    return;
  }

  filteredWords.forEach(w => {
    const item = document.createElement('div');
    item.className = `word-item ${learnedWords.has(w.index) ? 'learned' : ''}`;
    item.innerHTML = `
      <div class="word-item-main">
        <div class="word-item-word">${w.word}</div>
        <div class="word-item-phonetic">${w.phonetic} · ${w.syllables}</div>
        <div class="word-item-meaning">${w.meaning}</div>
      </div>
      <button class="word-item-speak">🔊</button>
    `;

    item.addEventListener('click', () => {
      speakWord(w.word);
    });

    const speakBtn = item.querySelector('.word-item-speak');
    speakBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      speakWord(w.word);
    });

    container.appendChild(item);
  });

  updateProgress();
}

// --- Progress & State ---
function toggleLearned(wordIndex) {
  if (learnedWords.has(wordIndex)) {
    learnedWords.delete(wordIndex);
  } else {
    learnedWords.add(wordIndex);
  }
  localStorage.setItem('learnedWords', JSON.stringify([...learnedWords]));
  updateProgress();
}

function toggleArticleComplete(index) {
  if (completedArticles.has(index)) {
    completedArticles.delete(index);
  } else {
    completedArticles.add(index);
  }
  localStorage.setItem('completedArticles', JSON.stringify([...completedArticles]));
  renderArticle(index);
  renderHome();
  updateProgress();
}

function countLearnedInArticle(articleIndex) {
  const group = WORD_GROUPS[articleIndex];
  let count = 0;
  for (let i = group.start; i <= group.end; i++) {
    if (learnedWords.has(i)) count++;
  }
  return count;
}

function updateProgress() {
  const total = WORDS.length;
  const learned = learnedWords.size;
  const pct = total > 0 ? Math.round((learned / total) * 100) : 0;

  document.querySelector('.progress-fill').style.width = `${pct}%`;
  document.querySelector('.header-progress span').textContent = `${learned}/${total}`;

  // Update stats bar if visible
  const statsBar = document.querySelector('.stats-bar');
  if (statsBar) {
    statsBar.innerHTML = `
      <div class="stat-item">📚 总单词: <strong>${total}</strong></div>
      <div class="stat-item">✅ 已掌握: <strong>${learned}</strong></div>
      <div class="stat-item">📊 进度: <strong>${pct}%</strong></div>
      <div class="stat-item">🎯 待学习: <strong>${total - learned}</strong></div>
    `;
  }
}

function renderNav() {
  updateProgress();
  updateStreak();
}


// ============================================================
// Flashcard System
// ============================================================

var flashcardState = {
  index: parseInt(localStorage.getItem('flashcardIndex') || '0'),
  mode: localStorage.getItem('flashcardMode') || 'sequential',
  filter: localStorage.getItem('flashcardFilter') || 'all',
  autoSpeak: localStorage.getItem('flashcardAutoSpeak') !== 'false',
  isFlipped: false,
  cardList: []
};

function initFlashcards() {
  flashcardState.mode = localStorage.getItem('flashcardMode') || 'sequential';
  flashcardState.filter = localStorage.getItem('flashcardFilter') || 'all';
  flashcardState.autoSpeak = localStorage.getItem('flashcardAutoSpeak') !== 'false';
  flashcardState.cardList = buildFlashcardList();
  flashcardState.index = Math.min(flashcardState.index, flashcardState.cardList.length - 1);
  if (flashcardState.index < 0) flashcardState.index = 0;
  document.getElementById('flashcard-filter').value = flashcardState.filter;
  document.getElementById('auto-speak').checked = flashcardState.autoSpeak;
  document.querySelectorAll('.mode-btn').forEach(function(btn) {
    btn.classList.toggle('active', btn.dataset.mode === flashcardState.mode);
  });
  flashcardState.isFlipped = false;
  document.getElementById('flashcard-card').classList.remove('flipped');
  renderFlashcard();
  setupFlashcardEvents();
}

function buildFlashcardList() {
  var filter = flashcardState.filter;
  var list = [];
  if (filter === 'all') {
    list = WORDS.map(function(w, i) { return i; });
  } else if (filter === 'unlearned') {
    WORDS.forEach(function(w, i) { if (!learnedWords.has(i)) list.push(i); });
  } else if (filter === 'learned') {
    WORDS.forEach(function(w, i) { if (learnedWords.has(i)) list.push(i); });
  } else if (filter.indexOf('article-') === 0) {
    var articleIdx = parseInt(filter.split('-')[1]);
    if (articleIdx >= 0 && articleIdx < WORD_GROUPS.length) {
      var group = WORD_GROUPS[articleIdx];
      for (var i = group.start; i <= group.end; i++) list.push(i);
    }
  }
  if (flashcardState.mode === 'random') list = shuffleArray(list);
  return list;
}

function shuffleArray(arr) {
  var a = arr.slice();
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
  }
  return a;
}

function renderSyllables(word) {
  if (!word || !word.syllables) return '';
  return word.syllables.split('·').map(function(syl) {
    return '<span class="fc-syllable" data-syl="' + syl.replace(/"/g, '&quot;') + '">' + syl + '</span>';
  }).join('<span class="fc-sep">·</span>');
}

function speakSyllable(syl) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  var config = getVoiceConfig();
  var u = new SpeechSynthesisUtterance(syl);
  u.lang = config.lang;
  u.rate = config.rate * 0.5;
  u.pitch = 1;
  var voice = findBestVoice(config.lang, config.gender);
  if (voice) u.voice = voice;
  window.speechSynthesis.speak(u);
}

function renderFlashcard() {
  var list = flashcardState.cardList;
  var idx = flashcardState.index;
  if (list.length === 0) {
    document.querySelector('.flashcard-stage').innerHTML = '<div class="flashcard-empty"><div class="flashcard-empty-icon">🎉</div><h3>没有单词</h3><p>当前筛选条件下没有单词，请切换筛选</p></div>';
    document.getElementById('flashcard-counter').textContent = '0 / 0';
    updateFlashcardProgress();
    return;
  }
  ensureFlashcardStage();
  var wordIdx = list[idx];
  var word = WORDS[wordIdx];
  var isLearned = learnedWords.has(wordIdx);
  document.querySelector('.fc-word').textContent = word.word;
  document.querySelector('.fc-syllables').innerHTML = renderSyllables(word);
  document.querySelector('.fc-phonetic').textContent = word.phonetic;
  document.querySelector('.fc-meaning').textContent = word.meaning;
  var ety = typeof ETYMOLOGY !== 'undefined' ? ETYMOLOGY[word.word] : null;
  var etyEl = document.querySelector('.fc-etymology');
  if (ety && ety.story) {
    etyEl.textContent = '📜 ' + ety.story.substring(0, 100) + (ety.story.length > 100 ? '...' : '');
    etyEl.style.display = 'block';
  } else if (ety && ety.origin) {
    etyEl.textContent = '🌍 ' + ety.origin;
    etyEl.style.display = 'block';
  } else {
    etyEl.style.display = 'none';
  }
  var sentenceEl = document.querySelector('.fc-sentence');
  var sentence = findWordSentence(word);
  sentenceEl.innerHTML = sentence ? '📖 ' + sentence : '';
  sentenceEl.style.display = sentence ? 'block' : 'none';
  document.getElementById('flashcard-counter').textContent = (idx + 1) + ' / ' + list.length;
  var learnedBtn = document.getElementById('flashcard-learned-btn');
  if (isLearned) {
    learnedBtn.textContent = '💾 已保存';
    learnedBtn.classList.add('is-learned');
  } else {
    learnedBtn.textContent = '💾 保存';
    learnedBtn.classList.remove('is-learned');
  }
  updateFlashcardProgress();
  localStorage.setItem('flashcardIndex', flashcardState.index);
  localStorage.setItem('flashcardMode', flashcardState.mode);
  localStorage.setItem('flashcardFilter', flashcardState.filter);
}

function ensureFlashcardStage() {
  var stage = document.querySelector('.flashcard-stage');
  if (stage.querySelector('.flashcard-card')) return;
  stage.innerHTML =
    '<div class="flashcard-card" id="flashcard-card">' +
    '<div class="flashcard-inner">' +
    '<div class="flashcard-front"><div class="fc-word"></div><div class="fc-syllables"></div><div class="fc-phonetic"></div><div class="fc-hint">点击或按 Space 翻转</div></div>' +
    '<div class="flashcard-back"><div class="fc-meaning"></div><div class="fc-etymology"></div><div class="fc-sentence"></div></div>' +
    '</div></div>';
}

function findWordSentence(word) {
  for (var a = 0; a < ARTICLES.length; a++) {
    var article = ARTICLES[a];
    for (var p = 0; p < article.paragraphs.length; p++) {
      var para = article.paragraphs[p];
      var regex = new RegExp('\\b' + word.word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'i');
      if (regex.test(para)) {
        var matchIndex = para.search(regex);
        var start = Math.max(0, matchIndex - 40);
        var end = Math.min(para.length, matchIndex + word.word.length + 60);
        var excerpt = para.substring(start, end);
        if (start > 0) excerpt = '...' + excerpt;
        if (end < para.length) excerpt = excerpt + '...';
        return excerpt;
      }
    }
  }
  return null;
}

function flipFlashcard() {
  var card = document.getElementById('flashcard-card');
  flashcardState.isFlipped = !flashcardState.isFlipped;
  card.classList.toggle('flipped', flashcardState.isFlipped);
  if (flashcardState.isFlipped && flashcardState.autoSpeak) {
    var list = flashcardState.cardList;
    var word = WORDS[list[flashcardState.index]];
    speakWord(word.word);
  }
}

function navigateFlashcard(direction) {
  var list = flashcardState.cardList;
  if (list.length === 0) return;
  flashcardState.index += direction;
  if (flashcardState.index < 0) flashcardState.index = list.length - 1;
  if (flashcardState.index >= list.length) flashcardState.index = 0;
  flashcardState.isFlipped = false;
  document.getElementById('flashcard-card').classList.remove('flipped');
  renderFlashcard();
  localStorage.setItem('flashcardIndex', flashcardState.index);
}

function speakCurrentFlashcard() {
  var list = flashcardState.cardList;
  if (list.length === 0) return;
  var word = WORDS[list[flashcardState.index]];
  speakWord(word.word);
}

function toggleFlashcardLearned() {
  var list = flashcardState.cardList;
  if (list.length === 0) return;
  var wordIdx = list[flashcardState.index];
  toggleLearned(wordIdx);
  updateProgress();
  updateStreak();
  // Auto-advance to next card
  navigateFlashcard(1);
}

function updateFlashcardProgress() {
  var list = flashcardState.cardList;
  var total = list.length;
  var learned = 0;
  list.forEach(function(wi) { if (learnedWords.has(wi)) learned++; });
  var pct = total > 0 ? Math.round((learned / total) * 100) : 0;
  var fill = document.getElementById('flashcard-progress-fill');
  var text = document.getElementById('flashcard-progress-text');
  if (fill) fill.style.width = pct + '%';
  if (text) text.textContent = learned + '/' + total + ' 已掌握';
}

function setupFlashcardVoiceUI() {
  var isBBC = voiceMode.indexOf('bbc') === 0;
  document.querySelectorAll('.voice-btn').forEach(function(btn) {
    if (btn.dataset.voice === 'bbc') {
      btn.classList.toggle('active-bbc', isBBC);
    } else {
      btn.classList.toggle('active-voa', !isBBC);
    }
  });

  document.querySelectorAll('.voice-btn').forEach(function(btn) {
    if (btn._voiceBound) return;
    btn._voiceBound = true;
    btn.addEventListener('click', function() {
      var voice = this.dataset.voice;
      document.querySelectorAll('.voice-btn').forEach(function(b) {
        b.classList.remove('active-bbc', 'active-voa');
      });
      if (voice === 'bbc') {
        this.classList.add('active-bbc');
        voiceMode = 'bbc-female';
      } else {
        this.classList.add('active-voa');
        voiceMode = 'voa-female';
      }
      localStorage.setItem('voiceMode', voiceMode);
      speakCurrentFlashcard();
    });
  });
}

function setupFlashcardEvents() {
  var filterSelect = document.getElementById('flashcard-filter');
  if (filterSelect && !filterSelect._bound) {
    filterSelect._bound = true;
    filterSelect.addEventListener('change', function() {
      flashcardState.filter = this.value;
      flashcardState.index = 0;
      flashcardState.isFlipped = false;
      flashcardState.cardList = buildFlashcardList();
      document.getElementById('flashcard-card').classList.remove('flipped');
      renderFlashcard();
      localStorage.setItem('flashcardFilter', flashcardState.filter);
    });
  }
  document.querySelectorAll('.mode-btn').forEach(function(btn) {
    if (btn._bound) return;
    btn._bound = true;
    btn.addEventListener('click', function() {
      document.querySelectorAll('.mode-btn').forEach(function(b) { b.classList.remove('active'); });
      this.classList.add('active');
      flashcardState.mode = this.dataset.mode;
      flashcardState.index = 0;
      flashcardState.isFlipped = false;
      flashcardState.cardList = buildFlashcardList();
      document.getElementById('flashcard-card').classList.remove('flipped');
      renderFlashcard();
      localStorage.setItem('flashcardMode', flashcardState.mode);
    });
  });
  var autoSpeakCb = document.getElementById('auto-speak');
  if (autoSpeakCb && !autoSpeakCb._bound) {
    autoSpeakCb._bound = true;
    autoSpeakCb.addEventListener('change', function() {
      flashcardState.autoSpeak = this.checked;
      localStorage.setItem('flashcardAutoSpeak', this.checked ? 'true' : 'false');
    });
  }
  var card = document.getElementById('flashcard-card');
  if (card && !card._bound) {
    card._bound = true;
    // Syllable/word click delegation (before flip handler to intercept)
    card.addEventListener('click', function(e) {
      var sylEl = e.target.closest('.fc-syllable');
      if (sylEl) {
        e.stopImmediatePropagation();
        var syl = sylEl.dataset.syl;
        if (syl) speakSyllable(syl);
        return;
      }
      if (e.target.closest('.fc-word')) {
        e.stopImmediatePropagation();
        speakCurrentFlashcard();
        return;
      }
    });
    card.addEventListener('click', flipFlashcard);
  }
  var prevBtn = document.querySelector('.flashcard-bottom-nav .prev');
  var nextBtn = document.querySelector('.flashcard-bottom-nav .next');
  if (prevBtn && !prevBtn._bound) { prevBtn._bound = true; prevBtn.addEventListener('click', function() { navigateFlashcard(-1); }); }
  if (nextBtn && !nextBtn._bound) { nextBtn._bound = true; nextBtn.addEventListener('click', function() { navigateFlashcard(1); }); }
  var learnedBtn = document.getElementById('flashcard-learned-btn');
  if (learnedBtn && !learnedBtn._bound) { learnedBtn._bound = true; learnedBtn.addEventListener('click', toggleFlashcardLearned); }
  var speakBtn = document.getElementById('flashcard-speak-btn');
  if (speakBtn && !speakBtn._bound) { speakBtn._bound = true; speakBtn.addEventListener('click', speakCurrentFlashcard); }

  setupFlashcardVoiceUI();
}


// ============================================================
// Download Word Lists
// ============================================================

function setupDownloadButtons() {
  document.querySelectorAll('.download-btn').forEach(function(btn) {
    if (btn._bound) return;
    btn._bound = true;
    btn.addEventListener('click', function() {
      downloadWordList(this.dataset.format);
    });
  });
}

function downloadWordList(format) {
  var content = '', filename = '', mimeType = 'text/plain;charset=utf-8';
  if (format === 'memo') {
    content = WORDS.map(function(w) { return w.word + '\t' + w.phonetic + '\t' + w.meaning; }).join('\n');
    filename = 'grad-vocab-memo.txt';
  } else if (format === 'anki-simple') {
    content = 'Word,Phonetic,Meaning\n' + WORDS.map(function(w) {
      return '"' + w.word + '","' + w.phonetic + '","' + w.meaning + '"';
    }).join('\n');
    filename = 'grad-vocab-anki-simple.csv';
    mimeType = 'text/csv;charset=utf-8';
  } else if (format === 'anki-full') {
    var rows = WORDS.map(function(w, i) {
      var ety = typeof ETYMOLOGY !== 'undefined' ? ETYMOLOGY[w.word] : null;
      var etyText = ety ? (ety.origin || '') + ' | ' + (ety.story || '').substring(0, 60) : '';
      var articles = [];
      WORD_GROUPS.forEach(function(g, gi) { if (i >= g.start && i <= g.end) articles.push('Article ' + (gi + 1)); });
      return '"' + w.word + '","' + w.phonetic + '","' + w.syllables + '","' + w.meaning + '","' + etyText.replace(/"/g, '""') + '","' + articles.join('; ') + '"';
    });
    content = 'Word,Phonetic,Syllables,Meaning,Etymology,Articles\n' + rows.join('\n');
    filename = 'grad-vocab-anki-full.csv';
    mimeType = 'text/csv;charset=utf-8';
  }
  var blob = new Blob(['\ufeff' + content], { type: mimeType });
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url; a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}


// ============================================================
// Study Plan
// ============================================================

var studyStartDate = localStorage.getItem('studyStartDate') || null;
var studyDayChecks = JSON.parse(localStorage.getItem('studyDayChecks') || '{}');

var STUDY_PLAN = [];
(function buildStudyPlan() {
  try {
  for (var phase = 0; phase < 3; phase++) {
    for (var day = 0; day < 10; day++) {
      var dayNum = phase * 10 + day + 1;
      var articleIdx = day;
      var article = typeof ARTICLES !== 'undefined' && articleIdx < ARTICLES.length ? ARTICLES[articleIdx] : null;
      var items = [];
      if (phase === 0) {
        items.push({ text: '学习 ' + (article ? article.cnTitle : '新单词'), link: articleIdx, type: 'article' });
        items.push({ text: '闪卡复习前5天单词', link: null, type: 'flashcard' });
        items.push({ text: '朗读文章一遍', link: articleIdx, type: 'article' });
      } else if (phase === 1) {
        items.push({ text: '精读 ' + (article ? article.cnTitle : '文章'), link: articleIdx, type: 'article' });
        items.push({ text: '闪卡复习全部已学单词', link: null, type: 'flashcard' });
        items.push({ text: '默写本课15个单词', link: articleIdx, type: 'article' });
        items.push({ text: '分析长难句结构', link: articleIdx, type: 'article' });
      } else {
        items.push({ text: '速读 ' + (article ? article.cnTitle : '文章'), link: articleIdx, type: 'article' });
        items.push({ text: '闪卡随机模式测试', link: null, type: 'flashcard' });
        items.push({ text: '真题同源阅读训练', link: articleIdx, type: 'article' });
        items.push({ text: '总结本课词根词缀', link: articleIdx, type: 'article' });
        items.push({ text: '全150词综合闪卡', link: null, type: 'flashcard' });
      }
      STUDY_PLAN.push({ day: dayNum, phase: phase, items: items });
    }
  }
  } catch(e) {
    console.warn('Study plan generation failed, falling back to empty plan:', e.message);
  }
})();

function renderStudyPlan() {
  var setupEl = document.getElementById('plan-setup');
  var phasesEl = document.getElementById('plan-phases');
  if (!studyStartDate) {
    setupEl.style.display = 'block';
    phasesEl.style.display = 'none';
    setupStartButton();
  } else {
    setupEl.style.display = 'none';
    phasesEl.style.display = 'flex';
    renderPlanDays();
  }
}

function setupStartButton() {
  var btn = document.getElementById('plan-start-today');
  if (btn && !btn._bound) {
    btn._bound = true;
    btn.addEventListener('click', function() {
      studyStartDate = new Date().toISOString().split('T')[0];
      localStorage.setItem('studyStartDate', studyStartDate);
      studyDayChecks = {};
      localStorage.setItem('studyDayChecks', '{}');
      renderStudyPlan();
      updateStreak();
    });
  }
}

function renderPlanDays() {
  var today = new Date();
  var todayStr = today.toISOString().split('T')[0];
  var startDate = new Date(studyStartDate + 'T00:00:00');
  var diffTime = today.getTime() - startDate.getTime();
  var currentDay = Math.max(1, Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1);
  [0, 1, 2].forEach(function(phase) {
    var container = document.getElementById('phase' + (phase + 1) + '-days');
    if (!container) return;
    container.innerHTML = '';
    STUDY_PLAN.filter(function(d) { return d.phase === phase; }).forEach(function(planDay) {
      var dayDiv = document.createElement('div');
      dayDiv.className = 'plan-day';
      var dayDate = new Date(startDate.getTime() + (planDay.day - 1) * 24 * 60 * 60 * 1000);
      var dateStr = dayDate.toISOString().split('T')[0];
      var isToday = dateStr === todayStr;
      if (isToday) dayDiv.classList.add('today');
      var checks = studyDayChecks[planDay.day] || [];
      var allDone = planDay.items.length > 0 && checks.length >= planDay.items.length;
      dayDiv.innerHTML = '<div class="plan-day-header">' +
        '<span class="plan-day-num">Day ' + planDay.day + '</span>' +
        '<span class="plan-day-date">' + dateStr + '</span>' +
        (isToday ? '<span class="plan-day-tag today-tag">今天</span>' : '') +
        (allDone ? '<span class="plan-day-tag done-tag">✓ 完成</span>' : '') +
        '</div><ul class="plan-day-items">' +
        planDay.items.map(function(item, i) {
          var isChecked = checks.indexOf(i) >= 0;
          return '<li class="plan-day-item' + (isChecked ? ' done' : '') + '" data-day="' + planDay.day + '" data-item="' + i + '">' +
            '<input type="checkbox"' + (isChecked ? ' checked' : '') + '><span>' + item.text + '</span></li>';
        }).join('') + '</ul>' +
        (planDay.items[0] && planDay.items[0].link !== null
          ? '<a class="plan-day-link" data-link-type="' + (planDay.items[0].type || 'article') + '" data-link-id="' + planDay.items[0].link + '">📖 跳转到对应文章</a>'
          : '<a class="plan-day-link" data-link-type="flashcard" data-link-id="">🎴 开始闪卡复习</a>');
      container.appendChild(dayDiv);
    });
    container.querySelectorAll('.plan-day-item').forEach(function(item) {
      item.addEventListener('click', function() {
        var day = parseInt(this.dataset.day);
        var itemIdx = parseInt(this.dataset.item);
        var checkbox = this.querySelector('input[type="checkbox"]');
        checkbox.checked = !checkbox.checked;
        this.classList.toggle('done', checkbox.checked);
        if (!studyDayChecks[day]) studyDayChecks[day] = [];
        var idx = studyDayChecks[day].indexOf(itemIdx);
        if (checkbox.checked && idx < 0) studyDayChecks[day].push(itemIdx);
        else if (!checkbox.checked && idx >= 0) studyDayChecks[day].splice(idx, 1);
        localStorage.setItem('studyDayChecks', JSON.stringify(studyDayChecks));
        updateStreak();
        renderPlanDays();
      });
    });
    container.querySelectorAll('.plan-day-link').forEach(function(link) {
      link.addEventListener('click', function() {
        var linkType = this.dataset.linkType;
        var linkId = this.dataset.linkId;
        if (linkType === 'article' && linkId !== '') switchView('article', parseInt(linkId));
        else if (linkType === 'flashcard') switchView('flashcards');
      });
    });
  });
}


// ============================================================
// Streak Counter & Continue Studying
// ============================================================

function updateStreak() {
  var streakEl = document.querySelector('.streak-counter');
  if (!streakEl) return;
  var startDate = studyStartDate || localStorage.getItem('studyStartDate');
  if (!startDate) { streakEl.textContent = '🔥 0 天'; return; }
  var start = new Date(startDate + 'T00:00:00');
  var today = new Date();
  today.setHours(0, 0, 0, 0);
  var diffDays = Math.floor((today.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;
  diffDays = Math.max(0, diffDays);
  var streak = Math.min(diffDays, 30);
  streakEl.textContent = '🔥 ' + streak + ' 天';
}

function renderContinueStudying() {
  var container = document.querySelector('.continue-studying');
  if (!container) return;
  var lastArticleIdx = localStorage.getItem('lastArticleIndex');
  var lastFlashcardIdx = localStorage.getItem('flashcardIndex');
  container.classList.remove('visible');
  container.innerHTML = '';
  var hasActivity = lastArticleIdx !== null || (lastFlashcardIdx !== null && lastFlashcardIdx !== '0');
  if (!hasActivity) {
    container.classList.add('visible');
    container.innerHTML = '<div class="cs-info"><div class="cs-icon">📋</div><div class="cs-text"><h3>开始你的学习之旅</h3><p>30天计划 · 150个核心词汇 · 10篇科学文章</p></div></div>' +
      '<div class="cs-actions"><button class="cs-btn cs-btn-primary go-plan">📅 查看学习计划</button><button class="cs-btn cs-btn-secondary go-flashcard">🎴 开始闪卡</button></div>';
  } else {
    container.classList.add('visible');
    var lastArticle = lastArticleIdx !== null ? ARTICLES[parseInt(lastArticleIdx)] : null;
    container.innerHTML = '<div class="cs-info"><div class="cs-icon">📖</div><div class="cs-text"><h3>继续学习</h3><p>' + (lastArticle ? '上次阅读：' + lastArticle.cnTitle : '继续闪卡复习') + '</p></div></div>' +
      '<div class="cs-actions">' + (lastArticle ? '<button class="cs-btn cs-btn-primary go-article">📖 继续阅读</button>' : '') +
      '<button class="cs-btn cs-btn-secondary go-flashcard">🎴 闪卡模式</button></div>';
  }
  var goPlanBtn = container.querySelector('.go-plan');
  var goFlashcardBtn = container.querySelector('.go-flashcard');
  var goArticleBtn = container.querySelector('.go-article');
  if (goPlanBtn) goPlanBtn.addEventListener('click', function() { switchView('plan'); });
  if (goFlashcardBtn) goFlashcardBtn.addEventListener('click', function() { switchView('flashcards'); });
  if (goArticleBtn) goArticleBtn.addEventListener('click', function() {
    if (lastArticleIdx !== null) switchView('article', parseInt(lastArticleIdx));
  });
}


// --- Keyboard shortcuts ---
document.addEventListener('keydown', (e) => {
  // Don't capture when typing in inputs
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') {
    return;
  }

  if (e.key === 'Escape') {
    closeWordPopup();
  }
  if (e.key === 'h' && !e.ctrlKey && !e.metaKey) {
    switchView('home');
  }

  // Flashcard keyboard shortcuts
  if (currentView === 'flashcards') {
    if (e.key === ' ' || e.code === 'Space') {
      e.preventDefault();
      flipFlashcard();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      navigateFlashcard(-1);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      navigateFlashcard(1);
    } else if (e.key === 's' || e.key === 'S') {
      e.preventDefault();
      speakCurrentFlashcard();
    }
  }
});


// ============================================================
// Latin Poetry Rendering
// ============================================================

function renderLatinPoem(articleIndex) {
  var article = ARTICLES[articleIndex];
  var poem = article.latinPoem;
  var container = document.getElementById('reader-latin');

  if (!poem || !container) {
    if (container) container.style.display = 'none';
    return;
  }

  container.style.display = 'block';

  var verseEl = document.getElementById('latin-verse');
  var transEl = document.getElementById('latin-translation');
  var connEl = document.getElementById('latin-connection');

  if (verseEl) verseEl.innerHTML = poem.verseHTML || poem.verse;
  var cnFlag = String.fromCodePoint(0x1F1E8, 0x1F1F3);
  if (transEl) transEl.textContent = cnFlag + ' ' + (poem.translation || '');
  if (connEl) {
    var word = poem.word || '';
    var bulb = String.fromCodePoint(0x1F4A1);
    connEl.innerHTML = bulb + ' 单词关联: <strong>' + word + '</strong> — ' + (poem.connection || '');
  }
}
// ============================================================
// Etymology Rendering
// ============================================================

function renderEtymology(word, wordIndex) {
  var ety = typeof ETYMOLOGY !== 'undefined' ? ETYMOLOGY[word.word] : null;
  var originEl = document.querySelector('.ety-origin');
  var breakdownEl = document.querySelector('.ety-breakdown');
  var syllablesEl = document.querySelector('.ety-syllables');
  var storyEl = document.querySelector('.ety-story');

  if (!ety) {
    var container = document.querySelector('.popup-etymology');
    if (container) container.style.display = 'none';
    return;
  }

  var container = document.querySelector('.popup-etymology');
  if (container) container.style.display = 'block';

  if (originEl && ety.origin) {
    originEl.textContent = '🌍 ' + ety.origin;
  } else if (originEl) {
    originEl.textContent = '';
  }

  if (breakdownEl && ety.breakdown) {
    breakdownEl.innerHTML = '🔍 结构分析：' + ety.breakdown;
  } else if (breakdownEl) {
    breakdownEl.innerHTML = '';
  }

  if (syllablesEl && ety.parts) {
    syllablesEl.innerHTML = ety.parts.map(function(p) {
      var langClass = (p.lang === '拉丁' || p.lang === '拉丁语') ? 'latin'
        : (p.lang === '希腊' || p.lang === '希腊语') ? 'greek'
        : (p.lang === '法语' || p.lang === '法') ? 'french'
        : (p.lang === '英语' || p.lang === '英') ? 'english'
        : 'latin';
      var langLabel = (p.lang === '拉丁' || p.lang === '拉丁语') ? 'LA'
        : (p.lang === '希腊' || p.lang === '希腊语') ? 'GR'
        : (p.lang === '法语' || p.lang === '法') ? 'FR'
        : (p.lang === '英语' || p.lang === '英') ? 'EN'
        : 'LA';
      var latinHint = p.latinIPA ? '<div class="latin-pronounce-hint">🏹 拉丁: ' + p.latinIPA + '</div>' : '';
      return '<div class="ety-syl-card">'
        + '<div class="ety-syl-part">' + p.syl + ' <button class="syl-speak-btn" data-syl="' + p.syl.replace(/"/g, '&quot;') + '" title="听音节发音">🔊</button></div>'
        + '<div class="ety-syl-ipa">' + (p.ipa || '') + '</div>'
        + latinHint
        + '<span class="ety-syl-lang ' + langClass + '">' + langLabel + '</span>'
        + '<div class="ety-syl-note">' + (p.note || '') + '</div>'
        + '</div>';
    }).join('');

    // Add click handlers for syllable speak buttons
    setTimeout(function() {
      document.querySelectorAll('.syl-speak-btn').forEach(function(btn) {
        btn.addEventListener('click', function(e) {
          e.stopPropagation();
          e.preventDefault();
          var syl = this.dataset.syl;
          // Find the matching part data
          var partData = ety.parts.find(function(p) { return p.syl === syl; });
          // Remove dots and hyphens, keep the core syllable text
          var cleanSyl = syl.replace(/[·\-]/g, '').trim();
          if (cleanSyl) speakWord(cleanSyl);
          // Show multi-language popup
          showSylPopup(this, syl, partData);
        });
      });
    }, 50);
  }

  if (storyEl && ety.story) {
    storyEl.innerHTML = '<div class="ety-story-label">📚 词源小故事</div>' + ety.story;
  } else if (storyEl) {
    storyEl.innerHTML = '';
  }
}

// ============================================================
// Syllable Multi-Language Popup
// ============================================================

// Root glosses lookup: common Greek/Latin roots → multi-language meanings
var ROOT_GLOSSES = {
  // Prefixes
  "hypo":   { latin: "sub- (下)",        french: "hypo- (sous)",        chinese: "在...之下",       spanish: "hipo- (bajo)" },
  "hyper":  { latin: "super- (上)",      french: "hyper- (sur)",        chinese: "在...之上，过度",  spanish: "hiper- (sobre)" },
  "sub":    { latin: "sub- (下)",        french: "sous-",               chinese: "在...之下",       spanish: "sub- (bajo)" },
  "super":  { latin: "super- (上)",      french: "sur-",                chinese: "在...之上，超级",  spanish: "super- (sobre)" },
  "pre":    { latin: "prae- (前)",       french: "pré- (avant)",        chinese: "在...之前，预",    spanish: "pre- (antes)" },
  "re":     { latin: "re- (再次、回)",    french: "re- (de nouveau)",    chinese: "再次，返回",       spanish: "re- (de nuevo)" },
  "con":    { latin: "con- (一起)",       french: "con- (avec)",         chinese: "共同，一起",       spanish: "con- (con)" },
  "dis":    { latin: "dis- (分开)",       french: "dé- (séparer)",       chinese: "分开，否定",       spanish: "des- (separar)" },
  "ex":     { latin: "ex- (向外)",        french: "ex- (hors de)",       chinese: "向外，出",         spanish: "ex- (fuera)" },
  "in":     { latin: "in- (进入/不)",     french: "in- (dans/pas)",      chinese: "进入，不",         spanish: "in- (en/no)" },
  "ad":     { latin: "ad- (朝向)",        french: "a- (vers)",           chinese: "朝向，附加",       spanish: "a- (hacia)" },
  "trans":  { latin: "trans- (跨越)",     french: "trans- (à travers)",  chinese: "跨越，转变",       spanish: "trans- (a través)" },
  "inter":  { latin: "inter- (之间)",     french: "entre-",              chinese: "在...之间",       spanish: "inter- (entre)" },
  "per":    { latin: "per- (通过)",       french: "par- (à travers)",    chinese: "通过，彻底",       spanish: "per- (por)" },
  "pro":    { latin: "pro- (向前)",       french: "pro- (en avant)",     chinese: "向前，支持",       spanish: "pro- (adelante)" },

  // Roots
  "thes":   { latin: "thesis (放置)",     french: "thèse",               chinese: "放置，命题",       spanish: "tesis" },
  "gen":    { latin: "genus (起源、种类)", french: "gène",               chinese: "起源，基因，产生",  spanish: "gen (origen)" },
  "graph":  { latin: "graphia (书写)",    french: "graphe",              chinese: "书写，记录",       spanish: "grafía (escritura)" },
  "log":    { latin: "logia (学说)",      french: "logie",               chinese: "学说，言语",       spanish: "logía (estudio)" },
  "bio":    { latin: "vita (生命)",       french: "bio (vie)",           chinese: "生命，生物",       spanish: "bio (vida)" },
  "geo":    { latin: "terra (地球)",      french: "géo (terre)",         chinese: "地球，土地",       spanish: "geo (tierra)" },
  "chron":  { latin: "tempus (时间)",     french: "chrono (temps)",      chinese: "时间",            spanish: "crono (tiempo)" },
  "path":   { latin: "passio (感受、病)",  french: "patho (souffrance)",  chinese: "感受，疾病",       spanish: "pato (enfermedad)" },
  "psych":  { latin: "anima (灵魂、心智)", french: "psyché (âme)",        chinese: "心灵，精神",       spanish: "psique (alma)" },
  "morph":  { latin: "forma (形态)",      french: "morphe (forme)",      chinese: "形态，形状",       spanish: "morfo (forma)" },
  "phon":   { latin: "sonus (声音)",      french: "phone (son)",         chinese: "声音",            spanish: "fono (sonido)" },
  "scope":  { latin: "spectare (看)",     french: "scope (voir)",        chinese: "看，观察",         spanish: "scopio (mirar)" },
  "meter":  { latin: "mensura (测量)",    french: "mètre (mesure)",      chinese: "测量，计量",       spanish: "metro (medida)" },
  "nym":    { latin: "nomen (名称)",      french: "nyme (nom)",          chinese: "名称，字",         spanish: "nimo (nombre)" },
  "sphere": { latin: "sphaera (球)",      french: "sphère (boule)",      chinese: "球，球体",         spanish: "esfera (bola)" },
  "tract":  { latin: "trahere (拉)",      french: "tracter (tirer)",     chinese: "拉，牵引",         spanish: "traer (tirar)" },
  "struct": { latin: "struere (建造)",    french: "structure (bâtir)",   chinese: "建造，结构",       spanish: "structura (construir)" },
  "dict":   { latin: "dicere (说)",       french: "dire",                chinese: "说，宣告",         spanish: "decir" },
  "script": { latin: "scribere (写)",     french: "écrire",              chinese: "写",              spanish: "escribir" },
  "vid":    { latin: "videre (看)",       french: "voir",                chinese: "看",              spanish: "ver" },
  "voc":    { latin: "vocare (呼唤)",     french: "voix (voix)",         chinese: "声音，呼唤",       spanish: "voz (llamar)" },
  "cap":    { latin: "capere (拿取)",     french: "capturer (prendre)",  chinese: "拿，取，抓",       spanish: "capturar (tomar)" },
  "fac":    { latin: "facere (做)",       french: "faire",               chinese: "做，制造",         spanish: "hacer" },
  "mit":    { latin: "mittere (发送)",    french: "mettre (envoyer)",    chinese: "发送，放出",       spanish: "meter (enviar)" },
  "port":   { latin: "portare (携带)",    french: "porter",              chinese: "携带，搬运",       spanish: "portar (llevar)" },
  "rupt":   { latin: "rumpere (打破)",    french: "rompre (casser)",     chinese: "打破，断裂",       spanish: "romper" },
  "sect":   { latin: "secare (切割)",     french: "section (couper)",    chinese: "切割",            spanish: "seccionar (cortar)" },
  "sens":   { latin: "sentire (感觉)",    french: "sentir",              chinese: "感觉，感知",       spanish: "sentir" },
  "spec":   { latin: "specere (看)",      french: "spectacle (regarder)", chinese: "看，观察",         spanish: "espectar (mirar)" },
  "tend":   { latin: "tendere (伸展)",    french: "tendre (étirer)",     chinese: "伸展，倾向",       spanish: "tender (estirar)" },
  "ven":    { latin: "venire (来)",       french: "venir",               chinese: "来，到达",         spanish: "venir" },
  "vert":   { latin: "vertere (转)",      french: "verser (tourner)",    chinese: "转动，转变",       spanish: "verter (girar)" },

  // Suffixes
  "tion":   { latin: "-tio (名词化)",      french: "-tion",               chinese: "动作/状态（名词）", spanish: "-ción" },
  "sis":    { latin: "-sis (过程/状态)",   french: "-se",                 chinese: "过程，状态",       spanish: "-sis" },
  "ic":     { latin: "-icus (属于...的)",  french: "-ique",               chinese: "...的（形容词）",   spanish: "-ico" },
  "al":     { latin: "-alis (关于...的)",  french: "-al",                 chinese: "关于...的",        spanish: "-al" },
  "ive":    { latin: "-ivus (倾向...的)",  french: "-if/-ive",            chinese: "有...倾向的",      spanish: "-ivo" },
  "ate":    { latin: "-atus (使...化)",    french: "-er",                 chinese: "使...化（动词）",   spanish: "-ar" },
  "ment":   { latin: "-mentum (结果/手段)", french: "-ment",              chinese: "结果，手段",       spanish: "-mento" },
  "ance":   { latin: "-antia (状态)",      french: "-ance",               chinese: "状态，性质",       spanish: "-ancia" },
  "ure":    { latin: "-ura (结果)",        french: "-ure",                chinese: "结果，动作",       spanish: "-ura" },
  "ity":    { latin: "-itas (性质)",       french: "-ité",                chinese: "性质，状态",       spanish: "-idad" },
  "ous":    { latin: "-osus (充满...的)",  french: "-eux/-euse",          chinese: "充满...的",        spanish: "-oso" },
  "ize":    { latin: "-izare (使...化)",   french: "-iser",               chinese: "使...化",          spanish: "-izar" },
  "ist":    { latin: "-ista (...的人)",    french: "-iste",               chinese: "...的人/专家",     spanish: "-ista" },
  "ism":    { latin: "-ismus (...主义)",   french: "-isme",               chinese: "...主义/学说",     spanish: "-ismo" },
};

function findRootGloss(syl) {
  // Clean the syllable: remove dots, hyphens, trailing hyphens
  var clean = syl.replace(/[·\-]/g, '').toLowerCase();
  // Try exact match first
  if (ROOT_GLOSSES[clean]) return ROOT_GLOSSES[clean];
  // Try removing trailing letters (handle declensions)
  var short = clean.replace(/[aeiou]s?$/, '').replace(/[aeiou]m?$/, '');
  if (short.length >= 2 && ROOT_GLOSSES[short]) return ROOT_GLOSSES[short];
  // Try prefix match (root at start)
  for (var key in ROOT_GLOSSES) {
    if (clean.indexOf(key) === 0 && key.length >= 3) return ROOT_GLOSSES[key];
  }
  return null;
}

function showSylPopup(btnElement, syl, partData) {
  var popup = document.getElementById('syl-popup');
  if (!popup) return;

  // Fill data
  popup.querySelector('.syl-popup-text').textContent = syl;
  popup.querySelector('.syl-popup-ipa').textContent = partData ? (partData.ipa || '') : '';
  popup.querySelector('.syl-popup-note').textContent = partData ? (partData.note || '') : '';

  // Look up glosses
  var gloss = findRootGloss(syl);
  var langRows = popup.querySelectorAll('.syl-lang-val');

  // English: show IPA/syllable description
  langRows[0].textContent = partData ? (partData.ipa || syl) : syl;

  if (gloss) {
    langRows[1].textContent = gloss.latin || '';
    langRows[2].textContent = gloss.french || '';
    langRows[3].textContent = gloss.chinese || '';
    langRows[4].textContent = gloss.spanish || '';
  } else if (partData) {
    // Fallback: use language tag + Latin IPA
    langRows[1].textContent = partData.latinIPA || (partData.lang.indexOf('拉丁') >= 0 ? '(拉丁词源)' : '');
    langRows[2].textContent = partData.lang.indexOf('法') >= 0 ? '(法语词源)' : '';
    langRows[3].textContent = partData.note ? partData.note.substring(0, 40) : '';
    langRows[4].textContent = '';
  }

  // Position near the button
  var rect = btnElement.getBoundingClientRect();
  var popupW = 260;
  var left = Math.min(rect.left + (rect.width / 2) - (popupW / 2), window.innerWidth - popupW - 10);
  left = Math.max(left, 10);
  var top = rect.bottom + 10;
  if (top + 280 > window.innerHeight) {
    top = rect.top - 290;
  }

  popup.style.left = left + 'px';
  popup.style.top = top + 'px';
  popup.classList.add('active');

  // Close on outside click
  setTimeout(function() {
    function closeSyl(e) {
      if (!popup.contains(e.target)) {
        popup.classList.remove('active');
        document.removeEventListener('click', closeSyl);
      }
    }
    document.addEventListener('click', closeSyl);
  }, 10);

  // Close button
  var closeBtn = popup.querySelector('.syl-popup-close');
  if (closeBtn && !closeBtn._bound) {
    closeBtn._bound = true;
    closeBtn.addEventListener('click', function() {
      popup.classList.remove('active');
    });
  }
}

// ============================================================
// Full Article Read-Aloud
// ============================================================

var readAloudState = {
  active: false,
  currentPara: 0,
  paragraphs: [],
  articleIndex: 0
};

function startReading(articleIndex) {
  if (!window.speechSynthesis) {
    alert('您的浏览器不支持语音朗读，请使用 Chrome 或 Safari。');
    return;
  }

  readAloudState.active = true;
  readAloudState.currentPara = 0;
  readAloudState.articleIndex = articleIndex;
  readAloudState.paragraphs = ARTICLES[articleIndex].paragraphs;

  var btn = document.querySelector('.read-aloud-btn');
  if (btn) {
    btn.dataset.reading = 'true';
    btn.textContent = '⏹ 停止朗读';
    btn.style.background = 'var(--accent-rose)';
    btn.style.color = '#fff';
    btn.style.borderColor = 'var(--accent-rose)';
  }

  // Highlight first paragraph
  highlightReadingPara(0);
  speakNextParagraph();
}

function speakNextParagraph() {
  if (!readAloudState.active) return;

  var idx = readAloudState.currentPara;
  if (idx >= readAloudState.paragraphs.length) {
    stopReading();
    return;
  }

  // Strip HTML tags and vocab markers
  var text = readAloudState.paragraphs[idx].replace(/\*\*/g, '').replace(/<[^>]+>/g, '');
  highlightReadingPara(idx);

  var config = getVoiceConfig();
  var utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = config.lang;
  utterance.rate = config.rate;
  utterance.pitch = 1;
  var voice = findBestVoice(config.lang, config.gender);
  if (voice) utterance.voice = voice;

  utterance.onend = function() {
    readAloudState.currentPara++;
    if (readAloudState.active) speakNextParagraph();
  };

  utterance.onerror = function() {
    readAloudState.currentPara++;
    if (readAloudState.active) speakNextParagraph();
  };

  window.speechSynthesis.speak(utterance);
}

function highlightReadingPara(idx) {
  // Remove previous highlights
  document.querySelectorAll('.en-para.reading').forEach(function(el) {
    el.classList.remove('reading');
  });

  var paras = document.querySelectorAll('.en-para');
  if (paras[idx]) {
    paras[idx].classList.add('reading');
    paras[idx].scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

// Speak a single paragraph or sentence
function speakParagraph(text) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  var clean = text.replace(/\*\*/g, '').replace(/<[^>]+>/g, '').trim();
  if (!clean) return;
  var config = getVoiceConfig();
  var u = new SpeechSynthesisUtterance(clean);
  u.lang = config.lang;
  u.rate = config.rate;
  var voice = findBestVoice(config.lang, config.gender);
  if (voice) u.voice = voice;
  window.speechSynthesis.speak(u);
}

// Extract the sentence at a given screen position
function getSentenceAtPoint(x, y) {
  var range;
  if (document.caretRangeFromPoint) {
    range = document.caretRangeFromPoint(x, y);
  } else if (document.caretPositionFromPoint) {
    var pos = document.caretPositionFromPoint(x, y);
    if (pos) { range = document.createRange(); range.setStart(pos.offsetNode, pos.offset); range.collapse(true); }
  }
  if (!range || !range.startContainer || range.startContainer.nodeType !== 3) return null;

  var text = range.startContainer.textContent;
  var offset = range.startOffset;

  // Find sentence boundaries (. ! ? followed by space or end)
  var start = offset, end = offset;
  while (start > 0) {
    start--;
    if (/[.!?]/.test(text[start]) && (start + 1 >= text.length || /\s/.test(text[start + 1]))) {
      start++; break;
    }
  }
  while (end < text.length) {
    if (/[.!?]/.test(text[end]) && (end + 1 >= text.length || /\s/.test(text[end + 1]))) {
      end++; break;
    }
    end++;
  }
  return text.substring(start, end).trim();
}

function stopReading() {
  readAloudState.active = false;
  if (window.speechSynthesis) window.speechSynthesis.cancel();

  document.querySelectorAll('.en-para.reading').forEach(function(el) {
    el.classList.remove('reading');
  });

  var btn = document.querySelector('.read-aloud-btn');
  if (btn) {
    btn.dataset.reading = 'false';
    btn.textContent = '🔊 全文朗读';
    btn.style.background = '';
    btn.style.color = '';
    btn.style.borderColor = '';
  }
}

// Pre-load voices
if (window.speechSynthesis) {
  window.speechSynthesis.getVoices();
  window.speechSynthesis.onvoiceschanged = () => {
    window.speechSynthesis.getVoices();
  };
}


// ============================================================
// Slideshow Component
// ============================================================

let slideTimer = null;
let slideAutoPlay = true;
let slideIntervals = {};

function renderSlideshow(articleIndex) {
  const article = ARTICLES[articleIndex];
  if (!article.slides || article.slides.length === 0) return;

  const track = document.getElementById('slideshow-track');
  const dotsContainer = document.getElementById('slideshow-dots');
  if (!track || !dotsContainer) return;

  // Clear previous timer
  if (slideIntervals[articleIndex]) {
    clearInterval(slideIntervals[articleIndex]);
    delete slideIntervals[articleIndex];
  }

  // Build slides
  track.innerHTML = article.slides.map((slide, i) => `
    <div class="slide ${i === 0 ? 'active' : ''}" data-slide="${i}">
      ${slide.icon ? `<div class="slide-icon">${slide.icon}</div>` : ''}
      <div class="slide-title">${slide.title || ''}</div>
      ${slide.subtitle ? `<div class="slide-subtitle">${slide.subtitle}</div>` : ''}
    </div>
  `).join('');

  // Build dots
  dotsContainer.innerHTML = article.slides.map((_, i) => `
    <button class="slideshow-dot ${i === 0 ? 'active' : ''}" data-slide="${i}" aria-label="Go to slide ${i + 1}"></button>
  `).join('');

  // Add slide counter to first slide
  const firstSlide = track.querySelector('.slide');
  if (firstSlide && !firstSlide.querySelector('.slide-counter')) {
    const counter = document.createElement('div');
    counter.className = 'slide-counter';
    counter.textContent = `1 / ${article.slides.length}`;
    track.appendChild(counter);
  }

  // Add navigation arrows
  if (!track.querySelector('.slideshow-nav')) {
    const prevBtn = document.createElement('button');
    prevBtn.className = 'slideshow-nav prev';
    prevBtn.innerHTML = '‹';
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navigateSlide(articleIndex, -1);
    });

    const nextBtn = document.createElement('button');
    nextBtn.className = 'slideshow-nav next';
    nextBtn.innerHTML = '›';
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navigateSlide(articleIndex, 1);
    });

    track.appendChild(prevBtn);
    track.appendChild(nextBtn);
  }

  // Add play/pause button
  if (!track.querySelector('.slideshow-controls')) {
    const controls = document.createElement('div');
    controls.className = 'slideshow-controls';
    controls.innerHTML = `<button class="slideshow-play-btn" title="自动播放">⏸</button>`;
    track.appendChild(controls);

    controls.querySelector('.slideshow-play-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      toggleAutoPlay(articleIndex);
    });
  }

  // Add click handlers for dots
  dotsContainer.querySelectorAll('.slideshow-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.dataset.slide);
      goToSlide(articleIndex, idx);
    });
  });

  // Start auto-play
  slideAutoPlay = true;
  startAutoPlay(articleIndex);
}

function goToSlide(articleIndex, targetIndex) {
  const article = ARTICLES[articleIndex];
  if (!article.slides) return;

  const track = document.getElementById('slideshow-track');
  if (!track) return;

  const slides = track.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.slideshow-dot');
  const counter = track.querySelector('.slide-counter');

  // Validate index
  const currentIndex = Array.from(slides).findIndex(s => s.classList.contains('active'));
  if (currentIndex === targetIndex) return;
  if (targetIndex < 0) targetIndex = article.slides.length - 1;
  if (targetIndex >= article.slides.length) targetIndex = 0;

  // Determine direction
  const direction = targetIndex > currentIndex ? 1 : -1;

  // Animate current slide out
  slides.forEach(s => s.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));

  // Animate new slide in
  slides[targetIndex].classList.add('active');
  dots[targetIndex]?.classList.add('active');

  // Update counter
  if (counter) {
    counter.textContent = `${targetIndex + 1} / ${article.slides.length}`;
  }
}

function navigateSlide(articleIndex, direction) {
  const track = document.getElementById('slideshow-track');
  if (!track) return;

  const slides = track.querySelectorAll('.slide');
  const currentIndex = Array.from(slides).findIndex(s => s.classList.contains('active'));
  goToSlide(articleIndex, currentIndex + direction);
}

function startAutoPlay(articleIndex) {
  if (slideIntervals[articleIndex]) {
    clearInterval(slideIntervals[articleIndex]);
  }

  slideIntervals[articleIndex] = setInterval(() => {
    if (!slideAutoPlay) return;

    const track = document.getElementById('slideshow-track');
    if (!track) return;

    // Check if this article's slideshow is visible
    const container = track.closest('.slideshow-container');
    if (!container || container.offsetParent === null) return;

    const slides = track.querySelectorAll('.slide');
    const currentIndex = Array.from(slides).findIndex(s => s.classList.contains('active'));
    goToSlide(articleIndex, currentIndex + 1);
  }, 4000);
}

function toggleAutoPlay(articleIndex) {
  slideAutoPlay = !slideAutoPlay;
  const btn = document.querySelector('.slideshow-play-btn');
  if (btn) {
    btn.textContent = slideAutoPlay ? '⏸' : '▶';
    btn.title = slideAutoPlay ? '暂停' : '播放';
  }

  if (slideAutoPlay) {
    // Reset interval
    if (slideIntervals[articleIndex]) {
      clearInterval(slideIntervals[articleIndex]);
    }
    startAutoPlay(articleIndex);
  } else {
    if (slideIntervals[articleIndex]) {
      clearInterval(slideIntervals[articleIndex]);
      delete slideIntervals[articleIndex];
    }
  }
}
