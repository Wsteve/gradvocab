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
  renderHome();
  renderNav();
  setupEventListeners();
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
  document.querySelector('.btn-close-popup')?.addEventListener('click', closeWordPopup);
  document.querySelector('.word-popup-overlay')?.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeWordPopup();
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
    document.querySelector('.view-home').classList.add('active');
    renderContinueStudying();
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

  // Render slideshow
  renderSlideshow(index);

  // Content
  const contentDiv = document.querySelector('.reader-content');
  contentDiv.innerHTML = article.paragraphs.map(para => {
    return `<p>${highlightWords(para, articleWords)}</p>`;
  }).join('');

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
      showWordPopup(idx, index);
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
      showWordPopup(idx, index);
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

// --- Word Popup ---
function showWordPopup(wordIndex, articleIndex) {
  const word = WORDS[wordIndex];
  const overlay = document.querySelector('.word-popup-overlay');
  overlay.classList.add('active');

  document.querySelector('.popup-word').textContent = word.word;
  document.querySelector('.popup-syllables').textContent = `✦ ${word.syllables}`;
  document.querySelector('.popup-phonetic').textContent = word.phonetic;
  document.querySelector('.popup-meaning').textContent = `🇨🇳 ${word.meaning}`;

  // Find sentence from article
  const article = ARTICLES[articleIndex];
  let sentence = '';
  for (const para of article.paragraphs) {
    const regex = new RegExp('\\b' + word.word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'i');
    if (regex.test(para)) {
      sentence = para.replace(regex, `**${word.word}**`);
      // Trim to around 100 chars
      const matchIndex = sentence.indexOf(`**${word.word}**`);
      const start = Math.max(0, matchIndex - 50);
      const end = Math.min(sentence.length, matchIndex + word.word.length + 60);
      let excerpt = sentence.substring(start, end);
      if (start > 0) excerpt = '...' + excerpt;
      if (end < sentence.length) excerpt = excerpt + '...';
      sentence = excerpt;
      break;
    }
  }

  // Show etymology info
  renderEtymology(word, wordIndex);

  document.querySelector('.popup-sentence').innerHTML = sentence
    ? `📖 ${sentence}`
    : '📖 来自本文例句';

  // Speak button
  const speakBtn = document.querySelector('.btn-speak');
  const newBtn = speakBtn.cloneNode(true);
  speakBtn.parentNode.replaceChild(newBtn, speakBtn);

  newBtn.addEventListener('click', () => {
    speakWord(word.word);
  });

  // Mark as learned
  if (!learnedWords.has(wordIndex)) {
    toggleLearned(wordIndex);
    // Update the UI
    renderArticle(articleIndex);
    updateProgress();
  }
}

function closeWordPopup() {
  document.querySelector('.word-popup-overlay').classList.remove('active');
}

// --- Speak (Web Speech API) ---
function speakWord(word) {
  if (!window.speechSynthesis) {
    alert('您的浏览器不支持语音功能，请使用 Chrome 或 Safari。');
    return;
  }

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = 'en-US';
  utterance.rate = 0.85;
  utterance.pitch = 1;
  utterance.volume = 1;

  // Try to find a good English voice
  const voices = window.speechSynthesis.getVoices();
  const englishVoice = voices.find(v => v.lang.startsWith('en-US') && v.name.includes('Google'))
    || voices.find(v => v.lang.startsWith('en-US'))
    || voices.find(v => v.lang.startsWith('en'));

  if (englishVoice) {
    utterance.voice = englishVoice;
  }

  window.speechSynthesis.speak(utterance);
}

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
  document.querySelector('.fc-syllables').textContent = word.syllables;
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
    learnedBtn.textContent = '✅ 已掌握';
    learnedBtn.classList.add('is-learned');
  } else {
    learnedBtn.textContent = '✅ 标记已掌握';
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
  stage.innerHTML = '<button class="flashcard-nav-btn prev" title="上一个 (←)">←</button>' +
    '<div class="flashcard-card" id="flashcard-card">' +
    '<div class="flashcard-inner">' +
    '<div class="flashcard-front"><div class="fc-word"></div><div class="fc-syllables"></div><div class="fc-phonetic"></div><div class="fc-hint">点击或按 Space 翻转</div></div>' +
    '<div class="flashcard-back"><div class="fc-meaning"></div><div class="fc-etymology"></div><div class="fc-sentence"></div></div>' +
    '</div></div>' +
    '<button class="flashcard-nav-btn next" title="下一个 (→)">→</button>';
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
  renderFlashcard();
  updateProgress();
  updateStreak();
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
    card.addEventListener('click', flipFlashcard);
  }
  var prevBtn = document.querySelector('.flashcard-stage .prev');
  var nextBtn = document.querySelector('.flashcard-stage .next');
  if (prevBtn && !prevBtn._bound) { prevBtn._bound = true; prevBtn.addEventListener('click', function() { navigateFlashcard(-1); }); }
  if (nextBtn && !nextBtn._bound) { nextBtn._bound = true; nextBtn.addEventListener('click', function() { navigateFlashcard(1); }); }
  var learnedBtn = document.getElementById('flashcard-learned-btn');
  if (learnedBtn && !learnedBtn._bound) { learnedBtn._bound = true; learnedBtn.addEventListener('click', toggleFlashcardLearned); }
  var speakBtn = document.getElementById('flashcard-speak-btn');
  if (speakBtn && !speakBtn._bound) { speakBtn._bound = true; speakBtn.addEventListener('click', speakCurrentFlashcard); }
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
        + '<div class="ety-syl-part">' + p.syl + '</div>'
        + '<div class="ety-syl-ipa">' + (p.ipa || '') + '</div>'
        + latinHint
        + '<span class="ety-syl-lang ' + langClass + '">' + langLabel + '</span>'
        + '<div class="ety-syl-note">' + (p.note || '') + '</div>'
        + '</div>';
    }).join('');
  }

  if (storyEl && ety.story) {
    storyEl.innerHTML = '<div class="ety-story-label">📚 词源小故事</div>' + ety.story;
  } else if (storyEl) {
    storyEl.innerHTML = '';
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
