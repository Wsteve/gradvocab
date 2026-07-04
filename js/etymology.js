// ============================================================
// Graduate Vocabulary - Etymological Data
// Syllable-level Latin/French origins + pronunciation stories
// ============================================================

const ETYMOLOGY = {
  "hypothesis": {
    "origin": "希腊语 → 拉丁语 → 英语",
    "breakdown": "hypo- (在...之下) + thesis (放置、命题)",
    "parts": [
      {
        "syl": "hy-",
        "ipa": "/haɪ/",
        "latinIPA": "/hiː/",
        "lang": "希腊语",
        "note": "来自希腊语 hypo- '在...之下'，拉丁化后成为科学术语前缀"
      },
      {
        "syl": "poth",
        "ipa": "/ˈpɒθ/",
        "latinIPA": "/-pɔθ-/",
        "lang": "希腊语",
        "note": "词根 the- 的重读变体，意为'放置、命题'"
      },
      {
        "syl": "e-",
        "ipa": "/ə/",
        "latinIPA": "/e/",
        "lang": "拉丁语",
        "note": "连接元音，拉丁语中转写为 -e-"
      },
      {
        "syl": "sis",
        "ipa": "/sɪs/",
        "latinIPA": "/-sis/",
        "lang": "希腊→拉丁",
        "note": "希腊语抽象名词后缀 -σις，经拉丁语 -sis 进入英语"
      }
    ],
    "story": "古希腊哲学家柏拉图最早使用 hypothesis 一词，字面义为'放在下面的东西'——即论证的基础假设。在拉丁语中拼写为 hypothesis，16世纪进入英语科技文献。"
  },
  "gene": {
    "origin": "希腊语 → 德语 → 英语",
    "breakdown": "gen- (出生、产生) + -e",
    "parts": [
      {
        "syl": "gene",
        "ipa": "/dʒiːn/",
        "latinIPA": "/ɡene/",
        "lang": "希腊→拉丁",
        "note": "来自希腊语 genos '种族、出生'，拉丁语 genus。1909年丹麦植物学家约翰森创造"
      },
      {
        "syl": "—",
        "ipa": "—",
        "latinIPA": "—",
        "lang": "德语",
        "note": "德语 Gen 直接借用，英语 gene 保留拼写。注意拉丁语读 /ɡe-/，英语读 /dʒiːn/"
      }
    ],
    "story": "gene 由丹麦植物学家 Wilhelm Johannsen 于1909年创造，源于希腊语 genos '出生、种族'。拉丁语中 genus 表示'种类'，法语则演变为 gène。英语发音/dʒiːn/受法语影响。"
  },
  "inherit": {
    "origin": "拉丁语 in- + heres (继承人)",
    "breakdown": "in- (进入) + her- (继承) + -it (动词后缀)",
    "parts": [
      {
        "syl": "in-",
        "ipa": "/ɪn/",
        "latinIPA": "/in/",
        "lang": "拉丁语",
        "note": "拉丁语前缀 in- '进入、使'，此处无实际语义"
      },
      {
        "syl": "her-",
        "ipa": "/ˈher/",
        "latinIPA": "/her/",
        "lang": "拉丁语",
        "note": "拉丁语 heres '继承人'，词根 her- '继承'"
      },
      {
        "syl": "it",
        "ipa": "/ɪt/",
        "latinIPA": "/it/",
        "lang": "拉丁语",
        "note": "拉丁语动词后缀 -ire，英语演变为 -it"
      }
    ],
    "story": "inherit 直接来自古法语 enheriter，最终源于拉丁语 inhereditare '使成为继承人'。拉丁语 heres（继承人）与希腊语 kheros '孤儿'同源，反映了继承权在古代社会的重要性。"
  },
  "dominant": {
    "origin": "拉丁语 dominus (主人)",
    "breakdown": "domin- (主人) + -ant (形容词后缀)",
    "parts": [
      {
        "syl": "dom-",
        "ipa": "/ˈdɒm/",
        "latinIPA": "/ˈdom/",
        "lang": "拉丁语",
        "note": "拉丁语 dominus '主人、领主'，词根 dom- '统治'"
      },
      {
        "syl": "i-",
        "ipa": "/ə/",
        "latinIPA": "/i/",
        "lang": "拉丁语",
        "note": "连接元音"
      },
      {
        "syl": "nant",
        "ipa": "/nənt/",
        "latinIPA": "/nant/",
        "lang": "法语→英语",
        "note": "拉丁语 -antem 形容词后缀，经法语 -ant 进入英语"
      }
    ],
    "story": "dominant 源自拉丁语 dominari '统治'，与域名 domain、主宰 dominate 同源。拉丁语 dominus '主人'也演变为西班牙语 don、意大利语 donno 等尊称。法语 influence 将其引入英语作为科学术语。"
  },
  "mutation": {
    "origin": "拉丁语 mutare (改变)",
    "breakdown": "mut- (改变) + -ation (名词后缀)",
    "parts": [
      {
        "syl": "mu-",
        "ipa": "/mjuː/",
        "latinIPA": "/muː/",
        "lang": "拉丁语",
        "note": "拉丁语 mutare '改变'，与英语 mutual '相互的'同源"
      },
      {
        "syl": "ta-",
        "ipa": "/ˈteɪ/",
        "latinIPA": "/ta/",
        "lang": "拉丁→法语",
        "note": "拉丁语 -atus 后缀经法语 -ation 演变为英语读音"
      },
      {
        "syl": "tion",
        "ipa": "/ʃn/",
        "latinIPA": "/tio/",
        "lang": "拉丁→法语",
        "note": "拉丁语 -tio 名词后缀，法语中读作 /sjɔ̃/，英语简化为 /ʃn/"
      }
    ],
    "story": "mutation 源自拉丁语 mutare '改变'。在罗马法中 mutatio 指'变更'，中世纪末期进入生物学领域。拉丁语 mutare 与英语 mutable '易变的'、mutual '相互的'为同根词。"
  },
  "evolution": {
    "origin": "拉丁语 evolvere (展开)",
    "breakdown": "e- (向外) + volv- (卷) + -ution (名词后缀)",
    "parts": [
      {
        "syl": "e-",
        "ipa": "/ˌiː/",
        "latinIPA": "/eː/",
        "lang": "拉丁语",
        "note": "拉丁语前缀 ex- '向外'，在卷舌音前简化为 e-"
      },
      {
        "syl": "vo-",
        "ipa": "/və/",
        "latinIPA": "/wo/",
        "lang": "拉丁语",
        "note": "拉丁语 volvere '卷、滚'，与英语 volume '卷册'同源"
      },
      {
        "syl": "lu-",
        "ipa": "/ˈluː/",
        "latinIPA": "/luː/",
        "lang": "拉丁→法语",
        "note": "分词词干 volut- 的拉丁化形式"
      },
      {
        "syl": "tion",
        "ipa": "/ʃn/",
        "latinIPA": "/tio/",
        "lang": "拉丁→法语",
        "note": "拉丁语 -tio 名词后缀，法语 -tion 影响英语读音"
      }
    ],
    "story": "evolution 字面义为'展开'，如同展开一卷书。拉丁语 evolvere = e- (向外) + volvere (卷)。达尔文1859年《物种起源》中赋予生物学含义。法语 évolution 影响了英语拼写。"
  },
  "trait": {
    "origin": "拉丁语 tractus (拉、特征) → 法语",
    "breakdown": "tract- (拉) → trait",
    "parts": [
      {
        "syl": "trait",
        "ipa": "/treɪt/",
        "latinIPA": "/trakt/",
        "lang": "法语→英语",
        "note": "源自拉丁语 tractus '拉、绘制出的线条'，古法语进展为 trait '特征'"
      }
    ],
    "story": "trait 的词源故事很有趣：拉丁语 tractus '拉'（英语 tractor '拖拉机'同源）→ '画出的线条' → '面部特征' → 现代英语'特点'。法语发音 /tʁɛ/ 影响了英语元音。"
  },
  "chromosome": {
    "origin": "希腊语 chroma (颜色) + soma (身体)",
    "breakdown": "chrom- (颜色) + -o- + -some (身体)",
    "parts": [
      {
        "syl": "chro-",
        "ipa": "/ˈkrəʊ/",
        "latinIPA": "/kroː/",
        "lang": "希腊→拉丁",
        "note": "希腊语 chroma '颜色'，拉丁化转写为 chrom-。ch 读 /k/ 来自希腊字母 χ"
      },
      {
        "syl": "mo-",
        "ipa": "/mə/",
        "latinIPA": "/mo/",
        "lang": "拉丁语",
        "note": "连接元音 -o-，常见于希腊语复合词"
      },
      {
        "syl": "some",
        "ipa": "/səʊm/",
        "latinIPA": "/soma/",
        "lang": "希腊→拉丁",
        "note": "希腊语 soma '身体'，拉丁化转写。因易被碱性染料染色而得名"
      }
    ],
    "story": "chromosome 由德国科学家1888年创造：chroma (颜色) + soma (身体) = '染色身体'，因这些结构容易被碱性染料染色。希腊语 chroma 也是英语 chromatic '色彩的'的词源。"
  },
  "replicate": {
    "origin": "拉丁语 re- + plicare (折叠)",
    "breakdown": "re- (再次) + plic- (折叠) + -ate (动词后缀)",
    "parts": [
      {
        "syl": "rep-",
        "ipa": "/ˈrep/",
        "latinIPA": "/rep/",
        "lang": "拉丁语",
        "note": "拉丁语前缀 re- '再次、重新'"
      },
      {
        "syl": "li-",
        "ipa": "/lɪ/",
        "latinIPA": "/li/",
        "lang": "拉丁语",
        "note": "拉丁语 plicare '折叠'的变体 pli-"
      },
      {
        "syl": "cate",
        "ipa": "/keɪt/",
        "latinIPA": "/kate/",
        "lang": "拉丁→英语",
        "note": "拉丁语 -atus 过去分词后缀，英语 -ate 动词化"
      }
    ],
    "story": "replicate 字面义为'再次折叠'→ '复制、复现'。拉丁语 plicare '折叠'派生词极多：apply (朝向+折叠)、comply (一起+折叠)、imply (进入+折叠)。古法语的 -pliier 形式影响了英语拼写。"
  },
  "sequence": {
    "origin": "拉丁语 sequi (跟随)",
    "breakdown": "sequ- (跟随) + -ence (名词后缀)",
    "parts": [
      {
        "syl": "se-",
        "ipa": "/ˈsiː/",
        "latinIPA": "/seː/",
        "lang": "拉丁语",
        "note": "拉丁语 sequi '跟随'的变体 sequ-"
      },
      {
        "syl": "quence",
        "ipa": "/kwəns/",
        "latinIPA": "/kwentia/",
        "lang": "拉丁→法语",
        "note": "拉丁语 -entia 名词后缀，法语 -ence 进入英语"
      }
    ],
    "story": "sequence 源自拉丁语 sequi '跟随'。同根词包括：consequence (一起+跟随)、subsequent (在下面+跟随)、execute (向外+跟随)。法语 influence 使其拼写为 -ence 而非拉丁语的 -entia。"
  },
  "genetic": {
    "origin": "希腊语 genesis (起源) + -ic (形容词后缀)",
    "breakdown": "gen- (出生) + -etic (形容词后缀)",
    "parts": [
      {
        "syl": "ge-",
        "ipa": "/dʒə/",
        "latinIPA": "/ɡe/",
        "lang": "希腊→拉丁",
        "note": "希腊语 genesis '起源、诞生'的缩写词干。注意拉丁语读 /ɡe/，英语受法语影响读 /dʒ/"
      },
      {
        "syl": "net-",
        "ipa": "/ˈnet/",
        "latinIPA": "/net/",
        "lang": "拉丁→希腊",
        "note": "词根 -net- 来自 genesis 的拉丁化形式"
      },
      {
        "syl": "ic",
        "ipa": "/ɪk/",
        "latinIPA": "/ikus/",
        "lang": "拉丁→英语",
        "note": "拉丁语 -icus 形容词后缀 '与...相关的'"
      }
    ],
    "story": "genetic 与 gene 同源，都来自希腊语 genesis '起源、诞生'。genetic 由英国遗传学家贝特森1905年创造，作为 genetics（遗传学）的形容词形式。"
  },
  "variation": {
    "origin": "拉丁语 variare (变化)",
    "breakdown": "vari- (变化) + -ation (名词后缀)",
    "parts": [
      {
        "syl": "var-",
        "ipa": "/ˌveər/",
        "latinIPA": "/war/",
        "lang": "拉丁语",
        "note": "拉丁语 varius '多变的'，英语 various 同源。注意拉丁语读 /w/，英语读 /v/"
      },
      {
        "syl": "i-",
        "ipa": "/ɪ/",
        "latinIPA": "/i/",
        "lang": "拉丁语",
        "note": "连接元音"
      },
      {
        "syl": "a-",
        "ipa": "/ˈeɪ/",
        "latinIPA": "/aː/",
        "lang": "拉丁→法语",
        "note": "拉丁语 -atus 经法语 -ation"
      }
    ],
    "story": "variation 源自拉丁语 varius '多变的'，同源词 vary '变化'、various '多样的'、variety '多样性'。拉丁语 varius 可能与 Gothic 语 *warians '骗子'同源，体现'变化'与'欺骗'的历史关联。"
  },
  "species": {
    "origin": "拉丁语 specere (看)",
    "breakdown": "spec- (看) + -ies (名词后缀)",
    "parts": [
      {
        "syl": "spe-",
        "ipa": "/ˈspiː/",
        "latinIPA": "/speː/",
        "lang": "拉丁语",
        "note": "拉丁语 specere '看、观察'，本义为'被看到的东西'即'种类'"
      },
      {
        "syl": "cies",
        "ipa": "/ʃiːz/",
        "latinIPA": "/kies/",
        "lang": "拉丁→英语",
        "note": "拉丁语 -ies 名词后缀。注意英语读 /ʃiːz/，古典拉丁语读 /kies/"
      }
    ],
    "story": "species 字面义为'外观、看到的样子'→ '种类'。与英语 spy '间谍'、spectacle '景象'、speculate '推测'同根。林奈在《自然系统》中使用 species 作为生物分类基本单位。"
  },
  "genome": {
    "origin": "gene + chromosome 的合成词",
    "breakdown": "gen- (基因) + -ome (整体)",
    "parts": [
      {
        "syl": "ge-",
        "ipa": "/ˈdʒiː/",
        "latinIPA": "/ɡe/",
        "lang": "希腊→英",
        "note": "来自 gene '基因'的前半部分"
      },
      {
        "syl": "nome",
        "ipa": "/nəʊm/",
        "latinIPA": "/noma/",
        "lang": "希腊→科学",
        "note": "来自 chromosome '染色体'的后半部分 -some，改为 -nome 以匹配希腊语 -noma '整体'"
      }
    ],
    "story": "genome 是1920年创造的现代合成词：gene (基因) + chromosome (染色体) 的尾部的组合。仿照拉丁语中的 -noma '整体'，表示'基因组的全体'。"
  },
  "hereditary": {
    "origin": "拉丁语 hereditas (继承)",
    "breakdown": "hered- (继承) + -itary (形容词后缀)",
    "parts": [
      {
        "syl": "he-",
        "ipa": "/hə/",
        "latinIPA": "/heː/",
        "lang": "拉丁语",
        "note": "拉丁语 heres '继承人'的词干"
      },
      {
        "syl": "red-",
        "ipa": "/ˈred/",
        "latinIPA": "/red/",
        "lang": "拉丁语",
        "note": "拉丁语 hered- 在英语中的保留，与 inherit 同源"
      },
      {
        "syl": "i-",
        "ipa": "/ɪ/",
        "latinIPA": "/i/",
        "lang": "拉丁→法语",
        "note": "连接元音"
      },
      {
        "syl": "ta-ry",
        "ipa": "/tri/",
        "latinIPA": "/tarius/",
        "lang": "拉丁→法语",
        "note": "拉丁语 -tarius 经法语 -taire → 英语 -tary"
      }
    ],
    "story": "hereditary 源自拉丁语 hereditas '继承'，与 inherit 同源。拉丁语 heres '继承人'在罗马法中极为重要，后进入遗传学领域描述性状传递。"
  },
  "density": {
    "origin": "拉丁语 densus",
    "breakdown": "dens- + -ity",
    "parts": [
      {
        "syl": "den-",
        "ipa": "/ˈden/",
        "latinIPA": "/dens/",
        "lang": "拉丁",
        "note": "拉丁 densus '稠密的'"
      },
      {
        "syl": "si-",
        "ipa": "/sə/",
        "latinIPA": "/si/",
        "lang": "拉丁→法",
        "note": "连接音"
      },
      {
        "syl": "ty",
        "ipa": "/ti/",
        "latinIPA": "/tas/",
        "lang": "拉丁→法",
        "note": "-tas → -té → -ty"
      }
    ],
    "story": "dense 的抽象名词，指'密集的程度'。"
  },
  "adapt": {
    "origin": "拉丁语 ad- (朝向) + aptare (适合)",
    "breakdown": "ad- (朝向) + apt- (适合)",
    "parts": [
      {
        "syl": "a-",
        "ipa": "/ə/",
        "latinIPA": "/ad/",
        "lang": "拉丁→法语",
        "note": "拉丁语前缀 ad- '朝向'，法语中 d 脱落"
      },
      {
        "syl": "dapt",
        "ipa": "/ˈdæpt/",
        "latinIPA": "/dapt/",
        "lang": "拉丁→英",
        "note": "拉丁语 aptare '使适合'，英语 apt '恰当的'同源"
      }
    ],
    "story": "adapt 源自拉丁语 adaptare = ad- (朝向) + aptare (使适合)。aptare 来自 aptus '适合的'。法语 adapter 是英语的直接来源，拉丁语 aptus 也与梵语 apnoti '到达'同源，体现'到达合适位置'的意象。"
  },
  "survival": {
    "origin": "拉丁语 super- (超过) + vivere (活着)",
    "breakdown": "sur- (超过) + viv- (活着) + -al",
    "parts": [
      {
        "syl": "sur-",
        "ipa": "/sə/",
        "latinIPA": "/super/",
        "lang": "拉丁→法语",
        "note": "拉丁语 super '超过'在法语中变为 sur-"
      },
      {
        "syl": "viv-",
        "ipa": "/ˈvaɪv/",
        "latinIPA": "/wiw/",
        "lang": "拉丁→法语",
        "note": "拉丁语 vivere '活着'，英语 vivid '生动的'、revive '复活'同源"
      },
      {
        "syl": "al",
        "ipa": "/əl/",
        "latinIPA": "/alis/",
        "lang": "拉丁→法语",
        "note": "拉丁语 -alis 形容词后缀，用作名词"
      }
    ],
    "story": "survival 字面义'活得比...更久'。达尔文'适者生存'的短语 survival of the fittest 使这个词成为进化论的核心术语。拉丁语 vivere '活着'与英语 quick '快的'古义'活的'同源。"
  },
  "generation": {
    "origin": "拉丁语 generare (产生)",
    "breakdown": "gen- (产生) + -eration (名词)",
    "parts": [
      {
        "syl": "gen-",
        "ipa": "/ˌdʒen/",
        "latinIPA": "/ɡen/",
        "lang": "拉丁语",
        "note": "拉丁语 genus '种族、出生'，与 gene '基因'同源"
      },
      {
        "syl": "er-",
        "ipa": "/ə/",
        "latinIPA": "/er/",
        "lang": "拉丁语",
        "note": "拉丁语动词后缀"
      },
      {
        "syl": "a-",
        "ipa": "/ˈreɪ/",
        "latinIPA": "/raː/",
        "lang": "拉丁→法语",
        "note": "拉丁语 -atus 分词后缀"
      },
      {
        "syl": "tion",
        "ipa": "/ʃn/",
        "latinIPA": "/tio/",
        "lang": "拉丁→法语",
        "note": "拉丁语 -tio → 法语 -tion"
      }
    ],
    "story": "generation 字面义'产生、生殖'→ '一代人'。从'生孩子'到'一代人'的语义扩展在所有印欧语言中都很常见。法语 génération 在16世纪进入英语，最初仅用于生物学语境。"
  },
  "mutate": {
    "origin": "拉丁语 mutare (改变)",
    "breakdown": "mut- (改变) + -ate (动词)",
    "parts": [
      {
        "syl": "mu-",
        "ipa": "/mjuː/",
        "latinIPA": "/muː/",
        "lang": "拉丁语",
        "note": "拉丁语 mutare '改变、交换'"
      },
      {
        "syl": "tate",
        "ipa": "/teɪt/",
        "latinIPA": "/tatus/",
        "lang": "拉丁→英",
        "note": "拉丁语 -atus 动词过去分词后缀"
      }
    ],
    "story": "mutate 与 mutation '突变'同根，但 mutate 是19世纪的回构词（从 mutation 逆向派生）。拉丁语 mutare '改变'也产生了 mutual '相互的'（字面义'交换的'）。"
  },
  "diversify": {
    "origin": "拉丁语 diversus (不同的)",
    "breakdown": "di- (分开) + vers- (转) + -ify",
    "parts": [
      {
        "syl": "di-",
        "ipa": "/daɪ/",
        "latinIPA": "/diː/",
        "lang": "拉丁语",
        "note": "拉丁语前缀 dis- '分开、分散'"
      },
      {
        "syl": "ver-",
        "ipa": "/ˈvɜː/",
        "latinIPA": "/wer/",
        "lang": "拉丁→法语",
        "note": "拉丁语 vertere '转动'的过去分词 versus。英语 versus '对阵'原意'朝向对方'"
      },
      {
        "syl": "si-",
        "ipa": "/sɪ/",
        "latinIPA": "/si/",
        "lang": "拉丁→法语",
        "note": "versus 的变体"
      },
      {
        "syl": "fy",
        "ipa": "/faɪ/",
        "latinIPA": "/fikare/",
        "lang": "拉丁→法语",
        "note": "拉丁语 -ficare '使...化'，英语 -ify"
      }
    ],
    "story": "diversify 字面义'使转向不同方向'。拉丁语 vertere '转动'产生的词汇：conversation '对话'(一起转动)、adverse '逆境的'(转向反对方向)、reverse '颠倒的'(转回来)。"
  },
  "organism": {
    "origin": "希腊语 organon (工具) + 拉丁语 -ismus",
    "breakdown": "organ- (器官) + -ism (系统)",
    "parts": [
      {
        "syl": "or-",
        "ipa": "/ˈɔː/",
        "latinIPA": "/or/",
        "lang": "希腊→拉丁",
        "note": "希腊语 organon '工具、器官'，拉丁化转写。英语 organ '器官'同源"
      },
      {
        "syl": "gan-",
        "ipa": "/ɡə/",
        "latinIPA": "/ɡan/",
        "lang": "希腊→拉丁",
        "note": "希腊语 -ganon 工具后缀"
      },
      {
        "syl": "ism",
        "ipa": "/ɪzəm/",
        "latinIPA": "/ismus/",
        "lang": "拉丁→希腊",
        "note": "希腊语 -ismos 抽象名词后缀，拉丁化 -ismus"
      }
    ],
    "story": "organism 字面义'由器官组成的生命体'。希腊语 organon '工具'也产生了 organ '器官'、orchestra '管弦乐队'（原指古希腊剧场的舞蹈区域）。法语 organisme 影响了英语拼写。"
  },
  "reproduce": {
    "origin": "拉丁语 re- (再次) + producere (生产)",
    "breakdown": "re- (再次) + pro- (向前) + duc- (引导)",
    "parts": [
      {
        "syl": "re-",
        "ipa": "/ˌriː/",
        "latinIPA": "/reː/",
        "lang": "拉丁语",
        "note": "拉丁语前缀 re- '再次'"
      },
      {
        "syl": "pro-",
        "ipa": "/prə/",
        "latinIPA": "/proː/",
        "lang": "拉丁语",
        "note": "拉丁语前缀 pro- '向前、在前面'"
      },
      {
        "syl": "duce",
        "ipa": "/ˈdjuːs/",
        "latinIPA": "/dukere/",
        "lang": "拉丁→英",
        "note": "拉丁语 ducere '引导、带领'。同源词：conduct '引导'、introduce '引入'"
      }
    ],
    "story": "reproduce 字面义'再次生产'→ 繁殖。拉丁语 ducere '引导'是最富生产力的词根之一：education '教育'(引出)、reduce '减少'(带回)、produce '生产'(向前引)。"
  },
  "adaptive": {
    "origin": "拉丁语 ad- (朝向) + aptare (适合)",
    "breakdown": "ad- (朝向) + apt- (适合) + -ive (形容词)",
    "parts": [
      {
        "syl": "a-",
        "ipa": "/ə/",
        "latinIPA": "/ad/",
        "lang": "拉丁→法语",
        "note": "拉丁语 ad- 经法语变为 a-"
      },
      {
        "syl": "dap-",
        "ipa": "/ˈdæp/",
        "latinIPA": "/dap/",
        "lang": "拉丁语",
        "note": "拉丁语 aptare '使适合'"
      },
      {
        "syl": "tive",
        "ipa": "/tɪv/",
        "latinIPA": "/tiwus/",
        "lang": "拉丁→法语",
        "note": "拉丁语 -tivus → 法语 -tif/-tive → 英语"
      }
    ],
    "story": "adaptive 是 adapt 的形容词形式。生物学家用 adaptive trait '适应性特征'来描述那些帮助生物在特定环境中生存的特征。"
  },
  "innate": {
    "origin": "拉丁语 in- (在...里) + nasci (出生)",
    "breakdown": "in- (在里) + nat- (出生) + -e",
    "parts": [
      {
        "syl": "in-",
        "ipa": "/ɪ/",
        "latinIPA": "/in/",
        "lang": "拉丁语",
        "note": "拉丁语前缀 in- '在...里'"
      },
      {
        "syl": "nate",
        "ipa": "/ˈneɪt/",
        "latinIPA": "/natus/",
        "lang": "拉丁→英",
        "note": "拉丁语 nasci '出生'的过去分词 natus。同源词：native '本地的'、nature '自然'"
      }
    ],
    "story": "innate 字面义'生来就在里面的'。拉丁语 nasci '出生'产生了丰富的派生词：nation '民族'(同一出生地的人)、naive '天真的'(刚出生→不谙世事的)。"
  },
  "offspring": {
    "origin": "古英语 of (从) + springan (跳)",
    "breakdown": "off- (从) + spring (跳)",
    "parts": [
      {
        "syl": "off-",
        "ipa": "/ˈɒf/",
        "latinIPA": "/of/",
        "lang": "日耳曼",
        "note": "古英语 of '从...离开'，与德语 ab '从'同源"
      },
      {
        "syl": "spring",
        "ipa": "/sprɪŋ/",
        "latinIPA": "/spring/",
        "lang": "日耳曼",
        "note": "古英语 springan '跳跃、喷涌而出'，比喻'后代如新芽般涌现'"
      }
    ],
    "story": "offspring 是纯日耳曼词，字面义'跳出来的人'。与拉丁语 descendere '下来'的比喻不同，日耳曼人用'跳出'的生动意象来描述后代。英语 spring '春天'也是万物'跳出'的季节。"
  },
  "mechanism": {
    "origin": "希腊语 mekhane (机器) + 拉丁语 -ismus",
    "breakdown": "mechan- (机器) + -ism (系统)",
    "parts": [
      {
        "syl": "me-",
        "ipa": "/ˈmek/",
        "latinIPA": "/me/",
        "lang": "希腊→拉丁",
        "note": "希腊语 mekhane '机器、装置'，拉丁化转写。英语 machine '机器'同源"
      },
      {
        "syl": "chan-",
        "ipa": "/kə/",
        "latinIPA": "/ka/",
        "lang": "希腊→拉丁",
        "note": "希腊语 -khane 后缀"
      },
      {
        "syl": "ism",
        "ipa": "/nɪzəm/",
        "latinIPA": "/nismus/",
        "lang": "拉丁→希腊",
        "note": "希腊语 -ismos → 拉丁语 -ismus → 英语 -ism"
      }
    ],
    "story": "mechanism 源自希腊语 mekhane '机器'，与 machinery '机械'同源。希腊语 mekhane 也与 might '力量'同源——早期的机械本质上是'力量的放大'。"
  },
  "evolve": {
    "origin": "拉丁语 e- (向外) + volvere (卷)",
    "breakdown": "e- (向外) + volv- (卷)",
    "parts": [
      {
        "syl": "e-",
        "ipa": "/i/",
        "latinIPA": "/eː/",
        "lang": "拉丁语",
        "note": "拉丁语前缀 ex- '向外'，在 v 前简化为 e-"
      },
      {
        "syl": "volve",
        "ipa": "/ˈvɒlv/",
        "latinIPA": "/wolwe/",
        "lang": "拉丁→英",
        "note": "拉丁语 volvere '卷、滚'。同源词：revolve '旋转'、involve '卷入'"
      }
    ],
    "story": "evolve 字面义'展开卷起的东西'。达尔文在他的笔记中反复使用 evolved 来结束《物种起源》——最后一句话以'There is grandeur in this view of life... have been and are being evolved'结尾。"
  },
  "thrive": {
    "origin": "古诺尔斯语 thrifask (兴旺)",
    "breakdown": "thriv- (兴旺) + -e",
    "parts": [
      {
        "syl": "thrive",
        "ipa": "/θraɪv/",
        "latinIPA": "/θriw/",
        "lang": "古诺尔斯→英",
        "note": "古诺尔斯语 thrifask '兴旺、繁荣'，经中古英语进入现代英语。与英语 thrift '节俭'同源"
      }
    ],
    "story": "thrive 是少数源自古诺尔斯语（维京语言）的核心词汇。维京人 thrifask 意为'抓住机会'→'获得成功'。同源词 thrive 和 thrift 在英语中分别走向了'繁荣'和'节俭'两义。"
  },
  "habitat": {
    "origin": "拉丁语 habitare (居住)",
    "breakdown": "habit- (居住) + -at (名词)",
    "parts": [
      {
        "syl": "hab-",
        "ipa": "/ˈhæb/",
        "latinIPA": "/hab/",
        "lang": "拉丁语",
        "note": "拉丁语 habere '有、拥有'的重复动词形态 habitare '居住'"
      },
      {
        "syl": "i-",
        "ipa": "/ɪ/",
        "latinIPA": "/i/",
        "lang": "拉丁→法语",
        "note": "连接元音"
      },
      {
        "syl": "tat",
        "ipa": "/tæt/",
        "latinIPA": "/tat/",
        "lang": "拉丁→英",
        "note": "拉丁语 -tatus 分词后缀"
      }
    ],
    "story": "habitat 字面义'被居住的地方'。拉丁语 habere '拥有'派生极广：habit '习惯'(反复拥有的行为)、inhabit '居住于'、habitable '可居住的'。"
  },
  "niche": {
    "origin": "拉丁语 nidus (巢) → 法语 niche",
    "breakdown": "niche (壁龛)",
    "parts": [
      {
        "syl": "niche",
        "ipa": "/niːʃ/",
        "latinIPA": "/nidus/",
        "lang": "拉丁→法语",
        "note": "拉丁语 nidus '巢'（英语 nest 同源）→ 法语 niche '壁龛'（墙壁上的凹洞）→ 自然选择中的'生态位'"
      }
    ],
    "story": "niche 的词源很美妙：拉丁语 nidus '鸟巢'（与英语 nest 同源）→ 法语 niche '墙上壁龛'（像鸟巢一样的凹处）。生态学家借用这个法语词描述物种在生态系统中的'特定位置'。"
  },
  "marine": {
    "origin": "拉丁语 mare (海)",
    "breakdown": "mar- (海) + -ine (形容词)",
    "parts": [
      {
        "syl": "ma-",
        "ipa": "/mə/",
        "latinIPA": "/maː/",
        "lang": "拉丁语",
        "note": "拉丁语 mare '海洋'。英语 mermaid '美人鱼'（海+少女）也来自 mare"
      },
      {
        "syl": "rine",
        "ipa": "/ˈriːn/",
        "latinIPA": "/rinus/",
        "lang": "拉丁→法语",
        "note": "拉丁语 -inus 形容词后缀，经法语 -in → 英语 -ine"
      }
    ],
    "story": "marine 直接来自拉丁语 mare '海'。mare 与英语 moor '沼泽'、mere '湖'同源——都表示'水域'。法语 influence：法语 marin/ marine 保留了拉丁语的阳性/阴性区别。"
  },
  "depth": {
    "origin": "古英语 deop (深) + -th (名词)",
    "breakdown": "deep (深) + -th (名词后缀)",
    "parts": [
      {
        "syl": "depth",
        "ipa": "/depθ/",
        "latinIPA": "/depθ/",
        "lang": "日耳曼",
        "note": "古英语 deop '深的'（英语 deep）+ -thu 名词后缀（英语 -th）"
      }
    ],
    "story": "depth 是日耳曼本土词，与古高地德语 tiefida 同源。拉丁语 profundus (深处) 虽然同义，但 depth 保留了日耳曼语的直接性。英语中 -th 后缀构成抽象名词：length、width、strength。"
  },
  "pressure": {
    "origin": "拉丁语 pressare (压)",
    "breakdown": "press- (压) + -ure (名词)",
    "parts": [
      {
        "syl": "press-",
        "ipa": "/ˈpreʃ/",
        "latinIPA": "/pres/",
        "lang": "拉丁→法语",
        "note": "拉丁语 premere '压'的重复动词 pressare '反复压'。英语 press '压'同源"
      },
      {
        "syl": "ure",
        "ipa": "/ə/",
        "latinIPA": "/ura/",
        "lang": "拉丁→法语",
        "note": "拉丁语 -ura 名词后缀，法语 -ure"
      }
    ],
    "story": "pressure 字面义'被压的状态'。拉丁语 premere '压'产生：impress '印刻'(压入)、express '表达'(压出来)、depress '压抑'(往下压)。法语 influence：pression '压力'影响英语发音。"
  },
  "current": {
    "origin": "拉丁语 currere (跑)",
    "breakdown": "curr- (跑) + -ent (形容词)",
    "parts": [
      {
        "syl": "cur-",
        "ipa": "/ˈkʌr/",
        "latinIPA": "/kur/",
        "lang": "拉丁语",
        "note": "拉丁语 currere '跑'。英语 course '课程'、cursor '光标'同源"
      },
      {
        "syl": "rent",
        "ipa": "/ənt/",
        "latinIPA": "/rent/",
        "lang": "拉丁→法语",
        "note": "拉丁语 -ens/-entis 现在分词后缀，法语 -ent"
      }
    ],
    "story": "current 字面义'正在跑的'。拉丁语 currere 是派生能力最强的词根之一：courier '信使'(跑的人)、currency '货币'(流通的东西)、curriculum '课程'(赛程→学习历程)。"
  },
  "tide": {
    "origin": "古英语 tid (时间)",
    "breakdown": "tid- (时间)",
    "parts": [
      {
        "syl": "tide",
        "ipa": "/taɪd/",
        "latinIPA": "/tide/",
        "lang": "日耳曼",
        "note": "古英语 tid '时间、季节'。与德语 Zeit '时间'同源。潮汐的涨落与时间规律相关"
      }
    ],
    "story": "tide 的词源是'时间'——因为潮汐的涨落严格遵循时间规律。英语中 'time' 和 'tide' 在古英语中是同源词。祝酒词 '祝你涨潮'(good tide) 后来演变为 'good time'。"
  },
  "sediment": {
    "origin": "拉丁语 sedere (坐)",
    "breakdown": "sed- (坐) + -ment (名词)",
    "parts": [
      {
        "syl": "sed-",
        "ipa": "/ˈsed/",
        "latinIPA": "/sed/",
        "lang": "拉丁语",
        "note": "拉丁语 sedere '坐、沉淀'。英语 sit '坐'同源"
      },
      {
        "syl": "i-",
        "ipa": "/ɪ/",
        "latinIPA": "/i/",
        "lang": "拉丁→法语",
        "note": "连接元音"
      },
      {
        "syl": "ment",
        "ipa": "/mənt/",
        "latinIPA": "/mentum/",
        "lang": "拉丁→法语",
        "note": "拉丁语 -mentum 名词后缀，法语 -ment"
      }
    ],
    "story": "sediment 字面义'坐下来(沉淀)的东西'。拉丁语 sedere '坐'衍生大量词汇：sediment '沉淀物'、sedate '镇定的'、president '总统'(在前面坐着的人)。"
  },
  "coral": {
    "origin": "希腊语 korallion → 拉丁语 corallium",
    "breakdown": "cor- (小石子) + -al",
    "parts": [
      {
        "syl": "cor-",
        "ipa": "/ˈkɒr/",
        "latinIPA": "/kor/",
        "lang": "希腊→拉丁",
        "note": "希腊语 korallion '珊瑚'，拉丁化 corallium。与希腊语 kore '少女'无关"
      },
      {
        "syl": "al",
        "ipa": "/əl/",
        "latinIPA": "/al/",
        "lang": "希腊→拉丁",
        "note": "拉丁语 -alium 中性名词后缀"
      }
    ],
    "story": "coral 的词源可能来自闪米特语——古希伯来语 goral '小石子'。古希腊人用 korallion 指代红珊瑚。中世纪拉丁语 corallium 经法语 corail 进入英语。珊瑚曾被当作护身符佩戴。"
  },
  "migrate": {
    "origin": "拉丁语 migrare (移动、迁徙)",
    "breakdown": "migr- (迁徙) + -ate (动词)",
    "parts": [
      {
        "syl": "mi-",
        "ipa": "/maɪ/",
        "latinIPA": "/miː/",
        "lang": "拉丁语",
        "note": "拉丁语 migrare '迁徙、搬家'，同源词：immigrate '移入'、emigrate '移出'"
      },
      {
        "syl": "grate",
        "ipa": "/ˈɡreɪt/",
        "latinIPA": "/gratus/",
        "lang": "拉丁→英",
        "note": "拉丁语 -atus 动词后缀"
      }
    ],
    "story": "migrate 源自拉丁语 migrare '从一个地方搬到另一个地方'。罗马人的 migratio 最初指'全家搬迁'。法语 migrer 影响英语拼写。鸟类迁徙的观察在古代就已被记录。"
  },
  "symbiotic": {
    "origin": "希腊语 syn- (一起) + bios (生命)",
    "breakdown": "syn- (一起) + bi- (生命) + -tic",
    "parts": [
      {
        "syl": "sym-",
        "ipa": "/ˌsɪm/",
        "latinIPA": "/sym/",
        "lang": "希腊→拉丁",
        "note": "希腊语前缀 syn- '一起'，在唇音前变为 sym-"
      },
      {
        "syl": "bi-",
        "ipa": "/baɪ/",
        "latinIPA": "/biː/",
        "lang": "希腊→拉丁",
        "note": "希腊语 bios '生命'，英语 biology '生物学'同源"
      },
      {
        "syl": "ot-ic",
        "ipa": "/ˈɒtɪk/",
        "latinIPA": "/otikus/",
        "lang": "希腊→拉丁",
        "note": "希腊语 -otikos → 拉丁语 -oticus 形容词后缀"
      }
    ],
    "story": "symbiotic 字面义'生活在一起的'。1879年德国真菌学家德巴里创造'共生'概念。希腊语 bios '生命'与拉丁语 vivus '活的'同源——分别代表了两种印欧语系的分支。"
  },
  "trench": {
    "origin": "拉丁语 truncare (切) → 法语 tranche",
    "breakdown": "trench (切、挖)",
    "parts": [
      {
        "syl": "trench",
        "ipa": "/trentʃ/",
        "latinIPA": "/trunk/",
        "lang": "拉丁→法",
        "note": "拉丁语 truncare '切掉' → 法语 tranche '切片' → 英语 trench '沟渠(挖出来的)'"
      }
    ],
    "story": "trench 通过拉丁语 truncare '切掉'与 truncheon '警棍'(切掉的一段)相关。法语 influence 显著：法语动词 trancher '切开'赋予英语 trench 以'挖掘'的含义。"
  },
  "zone": {
    "origin": "希腊语 zone (带子)",
    "breakdown": "zon- (带子) + -e",
    "parts": [
      {
        "syl": "zone",
        "ipa": "/zəʊn/",
        "latinIPA": "/zoneː/",
        "lang": "希腊→拉丁",
        "note": "希腊语 zone '腰带、带子' → 拉丁语 zona '地带、区域'。本义'环绕的带子'"
      }
    ],
    "story": "zone 的字面义是'腰带'。古希腊人将地球分为 klimata '倾斜区'，而拉丁人用 zona 来描述这些'环绕地球的带子'。最终，zone 从'腰带'演变为'区域'。"
  },
  "abyss": {
    "origin": "希腊语 a- (无) + byssos (底)",
    "breakdown": "a- (无) + byss- (底)",
    "parts": [
      {
        "syl": "a-",
        "ipa": "/ə/",
        "latinIPA": "/aː/",
        "lang": "希腊语",
        "note": "希腊语否定前缀 a- '无、不'，英语 atheist '无神论者'同源"
      },
      {
        "syl": "byss",
        "ipa": "/ˈbɪs/",
        "latinIPA": "/bys/",
        "lang": "希腊语",
        "note": "希腊语 byssos '底部、深处'"
      }
    ],
    "story": "abyss 字面义'没有底的地方'。希腊语 a- (无) + byssos (底)。《圣经》拉丁语译本用 abyssus 翻译'无底坑'。现代海洋学借用此词指代 4000米以下的深海区。"
  },
  "circulation": {
    "origin": "拉丁语 circulus (小圆圈)",
    "breakdown": "circul- (圆圈) + -ation (名词)",
    "parts": [
      {
        "syl": "cir-",
        "ipa": "/ˌsɜː/",
        "latinIPA": "/kir/",
        "lang": "拉丁语",
        "note": "拉丁语 circus '圆圈'→ circulus '小圆圈'。英语 circle '圆'同源"
      },
      {
        "syl": "cu-",
        "ipa": "/kjə/",
        "latinIPA": "/ku/",
        "lang": "拉丁→法语",
        "note": "circulus 的变体"
      },
      {
        "syl": "la-",
        "ipa": "/ˈleɪ/",
        "latinIPA": "/laː/",
        "lang": "拉丁→法语",
        "note": "拉丁语 -atus 分词后缀"
      },
      {
        "syl": "tion",
        "ipa": "/ʃn/",
        "latinIPA": "/tio/",
        "lang": "拉丁→法语",
        "note": "拉丁语 -tio → 法语 -tion"
      }
    ],
    "story": "circulation 字面义'绕小圈流动'。哈维1628年在《心血运动论》中描述了血液循环——这是现代医学的里程碑。拉丁语 circulus (英语 circle 同源)构成了这个核心概念。"
  },
  "stratum": {
    "origin": "拉丁语 sternere (铺开)",
    "breakdown": "strat- (铺) + -um (中性名词)",
    "parts": [
      {
        "syl": "stra-",
        "ipa": "/ˈstrɑː/",
        "latinIPA": "/stra/",
        "lang": "拉丁语",
        "note": "拉丁语 sternere '铺开、伸展'，与英语 straw '稻草'(铺在地上的)同源"
      },
      {
        "syl": "tum",
        "ipa": "/təm/",
        "latinIPA": "/tum/",
        "lang": "拉丁→英",
        "note": "拉丁语 -um 中性名词单数主格后缀"
      }
    ],
    "story": "stratum 源自拉丁语 sternere '铺开'。地质学用 stratum 描述'地层'就像地面上铺开的层。同源词：stratify '分层'、prostrate '俯卧'(向前铺开)、street '街道'(铺好的路)。"
  },
  "oceanic": {
    "origin": "希腊语 Okeanos (大洋神)",
    "breakdown": "ocean- (海洋) + -ic (形容词)",
    "parts": [
      {
        "syl": "o-",
        "ipa": "/ˌəʊ/",
        "latinIPA": "/oː/",
        "lang": "希腊→拉丁",
        "note": "希腊神话中的大洋之神 Okeanos，拉丁化转写为 oceanus"
      },
      {
        "syl": "cean-",
        "ipa": "/ʃi/",
        "latinIPA": "/ke/",
        "lang": "希腊→拉丁->法",
        "note": "经法语 océan 进入英语，发音受法语影响"
      },
      {
        "syl": "ic",
        "ipa": "/ɪk/",
        "latinIPA": "/ikus/",
        "lang": "拉丁→英",
        "note": "拉丁语 -icus 形容词后缀"
      }
    ],
    "story": "oceanic 源自希腊神话中环绕大地的巨川之神 Okeanos。古希腊人认为地球被一条巨大的河流包围，Okeanos 就是这条河的神格化。拉丁语 oceanus 经法语 océan 进入英语。"
  },
  "virus": {
    "origin": "拉丁语 virus (毒液)",
    "breakdown": "vir- (毒) + -us (名词)",
    "parts": [
      {
        "syl": "vi-",
        "ipa": "/ˈvaɪ/",
        "latinIPA": "/wiː/",
        "lang": "拉丁语",
        "note": "拉丁语 virus '毒液、黏液'"
      }
    ],
    "story": "virus 在古拉丁语意为'snake venom 蛇毒'，文艺复兴前泛指'有毒物质'。"
  },
  "immune": {
    "origin": "拉丁语 in- (不) + munus (义务)",
    "breakdown": "im- (不) + mun- (义务) + -e",
    "parts": [
      {
        "syl": "im-",
        "ipa": "/ɪ/",
        "latinIPA": "/im/",
        "lang": "拉丁语",
        "note": "否定前缀 im- '不'"
      },
      {
        "syl": "mune",
        "ipa": "/ˈmjuːn/",
        "latinIPA": "/mun/",
        "lang": "拉丁语",
        "note": "拉丁语 munus '公共服务、义务'"
      }
    ],
    "story": "immune 字面义'免于义务的'。古罗马用 immunis 描述'特权阶级'，现代医学术语借用为'免疫'。"
  },
  "infection": {
    "origin": "拉丁语 in- (进入) + facere (做)",
    "breakdown": "in- (进入) + fect- (做) + -ion",
    "parts": [
      {
        "syl": "in-",
        "ipa": "/ɪn/",
        "latinIPA": "/in/",
        "lang": "拉丁语",
        "note": "拉丁语前缀 in- '进入'"
      },
      {
        "syl": "fec-",
        "ipa": "/ˈfek/",
        "latinIPA": "/fek/",
        "lang": "拉丁语",
        "note": "拉丁语 facere '做'的过去分词 fectus"
      },
      {
        "syl": "tion",
        "ipa": "/ʃn/",
        "latinIPA": "/tio/",
        "lang": "拉丁→法语",
        "note": "拉丁语 -tio → 法语 -tion"
      }
    ],
    "story": "infection 字面义'被注入体内的东西'。同源词: affect、effect、perfect 都与拉丁语 facere '做'相关。"
  },
  "antibody": {
    "origin": "希腊语 anti- (反) + 英语 body",
    "breakdown": "anti- (反) + body (身体)",
    "parts": [
      {
        "syl": "an-",
        "ipa": "/ˈæn/",
        "latinIPA": "/ant/",
        "lang": "希腊语",
        "note": "希腊语 anti- '对抗'"
      },
      {
        "syl": "ti-",
        "ipa": "/tɪ/",
        "latinIPA": "/ti/",
        "lang": "希腊→拉丁",
        "note": "连接音"
      },
      {
        "syl": "body",
        "ipa": "/bɒdi/",
        "latinIPA": "/bodi/",
        "lang": "日耳曼",
        "note": "古英语 bodig '身体'"
      }
    ],
    "story": "antibody 是现代合成词: 希腊语 anti- (对抗) + 英语 body (身体)，指'对抗病原体的免疫蛋白'。"
  },
  "vaccine": {
    "origin": "拉丁语 vacca (母牛)",
    "breakdown": "vacc- (牛) + -ine (形容词)",
    "parts": [
      {
        "syl": "vac-",
        "ipa": "/ˈvæk/",
        "latinIPA": "/wak/",
        "lang": "拉丁语",
        "note": "拉丁语 vacca '母牛'"
      },
      {
        "syl": "cine",
        "ipa": "/siːn/",
        "latinIPA": "/kinus/",
        "lang": "拉丁→法→英",
        "note": "拉丁语 -inus → 法语 -in"
      }
    ],
    "story": "vaccine 的故事很奇妙: 1796年琴纳发现挤牛奶女工感染牛痘后不患天花。vacca 是拉丁语'母牛'。"
  },
  "pathogen": {
    "origin": "希腊语 pathos (痛苦) + gene (产生)",
    "breakdown": "patho- (病) + gen (产生)",
    "parts": [
      {
        "syl": "path-",
        "ipa": "/ˈpæθ/",
        "latinIPA": "/paθ/",
        "lang": "希腊语",
        "note": "希腊语 pathos '痛苦、疾病'"
      },
      {
        "syl": "o-",
        "ipa": "/ə/",
        "latinIPA": "/o/",
        "lang": "希腊→拉丁",
        "note": "连接元音"
      },
      {
        "syl": "gen",
        "ipa": "/dʒən/",
        "latinIPA": "/ɡen/",
        "lang": "希腊→拉丁",
        "note": "希腊语 genes '产生'"
      }
    ],
    "story": "pathogen 字面义'产生疾病的东西'。同源词: sympathy (共同感受)、apathy (没感觉)。"
  },
  "epidemic": {
    "origin": "希腊语 epi- (在...上) + demos (人民)",
    "breakdown": "epi- (遍及) + dem- (人民) + -ic",
    "parts": [
      {
        "syl": "ep-",
        "ipa": "/ˌep/",
        "latinIPA": "/ep/",
        "lang": "希腊→拉丁",
        "note": "希腊语前缀 epi- '在...之上、遍及'"
      },
      {
        "syl": "i-",
        "ipa": "/ɪ/",
        "latinIPA": "/i/",
        "lang": "希腊→拉丁",
        "note": "连接元音"
      },
      {
        "syl": "dem-",
        "ipa": "/ˈdem/",
        "latinIPA": "/dem/",
        "lang": "希腊语",
        "note": "希腊语 demos '人民'，英语 democracy 同源"
      },
      {
        "syl": "ic",
        "ipa": "/ɪk/",
        "latinIPA": "/ikus/",
        "lang": "拉丁→英",
        "note": "拉丁语 -icus 形容词后缀"
      }
    ],
    "story": "epidemic 字面义'遍及人民的'。与 endemic (地方性的)相对——demos '人民'是共同词根。"
  },
  "resistance": {
    "origin": "拉丁语 re- (向后) + sistere (站立)",
    "breakdown": "re- (向后) + sist- (站立) + -ance",
    "parts": [
      {
        "syl": "re-",
        "ipa": "/rɪ/",
        "latinIPA": "/reː/",
        "lang": "拉丁语",
        "note": "拉丁语前缀 re- '向后、对抗'"
      },
      {
        "syl": "sist-",
        "ipa": "/ˈzɪst/",
        "latinIPA": "/sist/",
        "lang": "拉丁→法语",
        "note": "拉丁语 sistere '使之站立'"
      },
      {
        "syl": "ance",
        "ipa": "/əns/",
        "latinIPA": "/antia/",
        "lang": "拉丁→法语",
        "note": "拉丁语 -antia → 法语 -ance"
      }
    ],
    "story": "resistance 字面义'向后站立'→ 抗拒。法语 Resistance (二战法国抵抗运动)使该词具有重大历史意义。"
  },
  "recover": {
    "origin": "拉丁语 re- (再次) + capere (抓取)",
    "breakdown": "re- (再次) + cover (获得)",
    "parts": [
      {
        "syl": "re-",
        "ipa": "/rɪ/",
        "latinIPA": "/reː/",
        "lang": "拉丁语",
        "note": "拉丁语前缀 re- '再次'"
      },
      {
        "syl": "cov-",
        "ipa": "/ˈkʌv/",
        "latinIPA": "/kup/",
        "lang": "拉丁→法语",
        "note": "拉丁语 capere '抓取' → 法语 recovrer"
      }
    ],
    "story": "recover 字面义'重新抓取'→ 恢复健康。同源词: capture、conceive、deceive 都来自拉丁语 capere '抓取'。"
  },
  "immunity": {
    "origin": "拉丁语 in- (不) + munus (义务)",
    "breakdown": "im- (不) + mun- (义务) + -ity",
    "parts": [
      {
        "syl": "im-",
        "ipa": "/ɪ/",
        "latinIPA": "/im/",
        "lang": "拉丁语",
        "note": "否定前缀 in- → im-"
      },
      {
        "syl": "mu-",
        "ipa": "/ˈmjuː/",
        "latinIPA": "/muː/",
        "lang": "拉丁🔤",
        "note": "拉丁语 munus '义务'"
      },
      {
        "syl": "ni-ty",
        "ipa": "/nəti/",
        "latinIPA": "/nitas/",
        "lang": "拉丁→法语",
        "note": "拉丁语 -itas → 法语 -ité"
      }
    ],
    "story": "immunity 在古罗马指'免除法律义务的特权'。现代医学借用该词描述身体'免除疾病'的状态。"
  },
  "cellular": {
    "origin": "拉丁语 cella (小房间)",
    "breakdown": "cell- (房间) + -ular (形容词)",
    "parts": [
      {
        "syl": "cell-",
        "ipa": "/ˈsel/",
        "latinIPA": "/kell/",
        "lang": "拉丁语",
        "note": "拉丁语 cella '小房间'。虎克1665年用 cell 指代细胞"
      },
      {
        "syl": "u-",
        "ipa": "/jə/",
        "latinIPA": "/u/",
        "lang": "拉丁语",
        "note": "连接元音"
      },
      {
        "syl": "lar",
        "ipa": "/lə/",
        "latinIPA": "/laris/",
        "lang": "拉丁→英",
        "note": "拉丁语 -aris 形容词后缀"
      }
    ],
    "story": "cellular 字面义'像小房间一样的'。虎克用显微镜观察软木时看到一个个'小房间'，创造了生物学 cell 一词。"
  },
  "outbreak": {
    "origin": "英语 out (外) + break (打破)",
    "breakdown": "out- (出去) + break (破裂)",
    "parts": [
      {
        "syl": "out-",
        "ipa": "/ˈaʊt/",
        "latinIPA": "/ut/",
        "lang": "日耳曼",
        "note": "古英语 ut '向外'"
      },
      {
        "syl": "break",
        "ipa": "/breɪk/",
        "latinIPA": "/brek/",
        "lang": "日耳曼",
        "note": "古英语 brecan '打破'"
      }
    ],
    "story": "outbreak 是日耳曼复合词，字面义'破裂而出'。18世纪开始专指疾病'爆发'。"
  },
  "diagnose": {
    "origin": "希腊语 dia- (通过) + gignoskein (知道)",
    "breakdown": "dia- (通过) + gn- (知道)",
    "parts": [
      {
        "syl": "di-",
        "ipa": "/ˌdaɪ/",
        "latinIPA": "/di/",
        "lang": "希腊→拉丁",
        "note": "希腊语前缀 dia- '通过'"
      },
      {
        "syl": "ag-",
        "ipa": "/ə/",
        "latinIPA": "/a/",
        "lang": "希腊→拉丁",
        "note": "连接音"
      },
      {
        "syl": "nose",
        "ipa": "/ˈnəʊz/",
        "latinIPA": "/noː/",
        "lang": "希腊→拉丁",
        "note": "希腊语 gnōsis '认识'，英语 know 同源"
      }
    ],
    "story": "diagnose 字面义'彻底了解'。同源词: prognosis (预先知道)、agnostic (不知道)。医生诊断就是'透彻认识'病情。"
  },
  "therapy": {
    "origin": "希腊语 therapeia (治疗)",
    "breakdown": "therap- (治疗) + -y (名词)",
    "parts": [
      {
        "syl": "ther-",
        "ipa": "/ˈθer/",
        "latinIPA": "/θer/",
        "lang": "希腊语",
        "note": "希腊语 therapeia '照料、治疗'"
      },
      {
        "syl": "a-py",
        "ipa": "/əpi/",
        "latinIPA": "/apia/",
        "lang": "希腊→拉丁",
        "note": "希腊语 -eia 抽象名词后缀"
      }
    ],
    "story": "therapy 源自希腊语 therapeia '照料'。同源词: theraps '仆人'——最初指被照料的状态。"
  },
  "chronic": {
    "origin": "希腊语 chronos (时间)",
    "breakdown": "chron- (时间) + -ic (形容词)",
    "parts": [
      {
        "syl": "chron-",
        "ipa": "/ˈkrɒn/",
        "latinIPA": "/kron/",
        "lang": "希腊→拉丁",
        "note": "希腊语 chronos '时间'。英语 chronology 同源"
      },
      {
        "syl": "ic",
        "ipa": "/ɪk/",
        "latinIPA": "/ikus/",
        "lang": "拉丁→英",
        "note": "拉丁语 -icus 形容词后缀"
      }
    ],
    "story": "chronic 字面义'与时间相关的'。希腊神话中 Chronos 是时间之神。慢性病 vs 急性病展现了时间与健康的关系。"
  },
  "algorithm": {
    "origin": "阿拉伯语 al-Khwarizmi",
    "breakdown": "al- (冠词) + Khwarizmi (人名)",
    "parts": [
      {
        "syl": "al-",
        "ipa": "/ˈæl/",
        "latinIPA": "/al/",
        "lang": "阿拉伯语",
        "note": "阿拉伯语定冠词 al- '这个'"
      },
      {
        "syl": "go-",
        "ipa": "/ɡə/",
        "latinIPA": "/ɡo/",
        "lang": "阿拉伯→拉丁",
        "note": "数学家的名字 al-Khwarizmi 拉丁化为 algorithmi"
      },
      {
        "syl": "rithm",
        "ipa": "/rɪðəm/",
        "latinIPA": "/rithm/",
        "lang": "拉丁→希腊",
        "note": "后期被误关联到希腊语 arithmos '数字'，拼写变为 algorithm"
      }
    ],
    "story": "algorithm 来自9世纪波斯数学家 al-Khwarizmi 的名字。后与希腊语 arithmos (数字)混淆，演变为 algorithm。"
  },
  "artificial": {
    "origin": "拉丁语 ars (技艺) + facere (做)",
    "breakdown": "art- (技艺) + -i- + fic- (做) + -ial",
    "parts": [
      {
        "syl": "ar-",
        "ipa": "/ˌɑː/",
        "latinIPA": "/ar/",
        "lang": "拉丁语",
        "note": "拉丁语 ars '技艺'"
      },
      {
        "syl": "ti-",
        "ipa": "/tɪ/",
        "latinIPA": "/ti/",
        "lang": "拉丁→法语",
        "note": "连接音，法语 -tificiel"
      },
      {
        "syl": "fi-",
        "ipa": "/ˈfɪʃ/",
        "latinIPA": "/fik/",
        "lang": "拉丁→法语",
        "note": "拉丁语 facere '做'的变体，法语变为 /ʃ/"
      },
      {
        "syl": "cial",
        "ipa": "/əl/",
        "latinIPA": "/kialis/",
        "lang": "拉丁→法语",
        "note": "拉丁语 -ialis 经法语 -iel"
      }
    ],
    "story": "artificial 字面义'用技艺制作的'。Artificial Intelligence 这个短语在1956年达特茅斯会议上正式诞生。"
  },
  "intelligence": {
    "origin": "拉丁语 intel- (之间) + legere (选择)",
    "breakdown": "intel- (之间) + lig- (选择) + -ence",
    "parts": [
      {
        "syl": "in-",
        "ipa": "/ɪn/",
        "latinIPA": "/in/",
        "lang": "拉丁语",
        "note": "拉丁语 inter- 在 l 前变为 intel-"
      },
      {
        "syl": "tel-",
        "ipa": "/ˈtel/",
        "latinIPA": "/tel/",
        "lang": "拉丁语",
        "note": "词根 legere '选择'的变体"
      },
      {
        "syl": "li-",
        "ipa": "/lɪ/",
        "latinIPA": "/li/",
        "lang": "拉丁→法语",
        "note": "经法语变为 -ligence"
      },
      {
        "syl": "gence",
        "ipa": "/dʒəns/",
        "latinIPA": "/ɡentia/",
        "lang": "拉丁→法语",
        "note": "拉丁语 -gentia → 法语 -gence"
      }
    ],
    "story": "intelligence 字面义'在事物间选择的能力'。同源词: lecture、collect、elect 都与 legere '选择'有关。"
  },
  "pattern": {
    "origin": "拉丁语 patronus (保护者)",
    "breakdown": "patr- (父亲) + -on → pattern",
    "parts": [
      {
        "syl": "pat-",
        "ipa": "/ˈpæt/",
        "latinIPA": "/pat/",
        "lang": "拉丁→法语",
        "note": "拉丁语 pater '父亲' → patronus '样板'"
      },
      {
        "syl": "tern",
        "ipa": "/tən/",
        "latinIPA": "/tron/",
        "lang": "拉丁→法→英",
        "note": "法语 patron 分化为 pattern (模式) 和 patron (赞助人)"
      }
    ],
    "story": "pattern 和 patron 同源: 拉丁语 patronus '保护人' → 法语 patron '样板', 引申为'重复出现的模式'。"
  },
  "recognition": {
    "origin": "拉丁语 re- (再次) + cognoscere (知道)",
    "breakdown": "re- (再次) + co- (一起) + gnos- (知道)",
    "parts": [
      {
        "syl": "re-",
        "ipa": "/ˌrek/",
        "latinIPA": "/reː/",
        "lang": "拉丁语",
        "note": "拉丁语前缀 re- '再次'"
      },
      {
        "syl": "cog-",
        "ipa": "/kɒɡ/",
        "latinIPA": "/koɡ/",
        "lang": "拉丁语",
        "note": "co- + gnoscere '知道'"
      },
      {
        "syl": "ni-",
        "ipa": "/ˈnɪ/",
        "latinIPA": "/ni/",
        "lang": "拉丁→法语",
        "note": "词根 gnos- 经法语变为 -nit-"
      },
      {
        "syl": "tion",
        "ipa": "/ʃn/",
        "latinIPA": "/tio/",
        "lang": "拉丁→法语",
        "note": "拉丁语 -tio → 法语 -tion"
      }
    ],
    "story": "recognition 字面义'再次知道'。认出一个模式就是'再次知道了'它——与 cognitive 同源。"
  },
  "data": {
    "origin": "拉丁语 dare (给) 的过去分词",
    "breakdown": "dat- (给出) + -a (复数)",
    "parts": [
      {
        "syl": "da-",
        "ipa": "/ˈdeɪ/",
        "latinIPA": "/daː/",
        "lang": "拉丁语",
        "note": "拉丁语 dare '给'的中性过去分词"
      },
      {
        "syl": "ta",
        "ipa": "/tə/",
        "latinIPA": "/ta/",
        "lang": "拉丁语",
        "note": "拉丁语单数 datum → 复数 data '被给出的信息'"
      }
    ],
    "story": "data 是拉丁语 dare '给'的过去分词 datum 的复数形式。同源词: date (罗马人'给出'的日期)、donate (捐赠)。"
  },
  "machine": {
    "origin": "希腊语 mekhane → 拉丁语 machina",
    "breakdown": "mach- (机器) + -ine",
    "parts": [
      {
        "syl": "ma-",
        "ipa": "/mə/",
        "latinIPA": "/ma/",
        "lang": "希腊→拉丁",
        "note": "希腊语 mekhane '工具'的拉丁化"
      },
      {
        "syl": "chine",
        "ipa": "/ˈʃiːn/",
        "latinIPA": "/kina/",
        "lang": "拉丁→法语",
        "note": "法语 influence: 拉丁 /k/ → 法语 /ʃ/"
      }
    ],
    "story": "machine 经法语进入英语，发音大转变: 拉丁 machina /makina/ → 法语 /maʃin/ → 英语 /məʃiːn/。"
  },
  "neural": {
    "origin": "希腊语 neuron (神经)",
    "breakdown": "neur- (神经) + -al (形容词)",
    "parts": [
      {
        "syl": "neu-",
        "ipa": "/ˈnjʊə/",
        "latinIPA": "/neu/",
        "lang": "希腊→拉丁",
        "note": "希腊语 neuron '神经'，科学前缀 neuro-"
      },
      {
        "syl": "ral",
        "ipa": "/rəl/",
        "latinIPA": "/ralis/",
        "lang": "拉丁→英",
        "note": "拉丁语 -alis 形容词后缀"
      }
    ],
    "story": "neural 是 neuron 的形容词。AI 中'神经网络'借用生物术语描述模拟大脑神经元连接的算法。"
  },
  "network": {
    "origin": "英语 net (网) + work (工作)",
    "breakdown": "net- (网) + work (系统)",
    "parts": [
      {
        "syl": "net-",
        "ipa": "/ˈnet/",
        "latinIPA": "/net/",
        "lang": "日耳曼",
        "note": "古英语 net '网'"
      },
      {
        "syl": "work",
        "ipa": "/wɜːk/",
        "latinIPA": "/werk/",
        "lang": "日耳曼",
        "note": "古英语 weorc '工作'，与希腊语 ergon 同源"
      }
    ],
    "story": "network 是日耳曼复合词。1839年铁路系统首次用 network 描述互联轨道，后成为计算机核心术语。"
  },
  "classify": {
    "origin": "拉丁语 classis (类别) + -fy (使)",
    "breakdown": "class- (类别) + -i- + -fy (使成为)",
    "parts": [
      {
        "syl": "class-",
        "ipa": "/ˈklæs/",
        "latinIPA": "/klas/",
        "lang": "拉丁语",
        "note": "拉丁语 classis '类别、等级'"
      },
      {
        "syl": "i-",
        "ipa": "/ɪ/",
        "latinIPA": "/i/",
        "lang": "拉丁→法语",
        "note": "连接元音"
      },
      {
        "syl": "fy",
        "ipa": "/faɪ/",
        "latinIPA": "/fikare/",
        "lang": "拉丁→法语",
        "note": "拉丁语 -ficare '使...化' → 法语 -fier"
      }
    ],
    "story": "classify 字面义'使成为类别'。林奈1735年生物分类系统使该词成为科学核心概念。"
  },
  "optimize": {
    "origin": "拉丁语 optimus (最好的)",
    "breakdown": "optim- (最好) + -ize (使成为)",
    "parts": [
      {
        "syl": "op-",
        "ipa": "/ˈɒp/",
        "latinIPA": "/op/",
        "lang": "拉丁语",
        "note": "拉丁语 optimus '最好的'"
      },
      {
        "syl": "ti-",
        "ipa": "/tɪ/",
        "latinIPA": "/ti/",
        "lang": "拉丁→法语",
        "note": "连接音"
      },
      {
        "syl": "mize",
        "ipa": "/maɪz/",
        "latinIPA": "/mizare/",
        "lang": "希腊→拉丁",
        "note": "希腊语 -izein → 拉丁语 -izare → 英语 -ize"
      }
    ],
    "story": "optimize 字面义'使之达到最好'。拉丁语 optimus 不规则三级: bonus → melior → optimus。"
  },
  "train": {
    "origin": "拉丁语 trahere (拉) → 法语 trainer",
    "breakdown": "train- (拖、拉)",
    "parts": [
      {
        "syl": "train",
        "ipa": "/treɪn/",
        "latinIPA": "/trakt/",
        "lang": "拉丁→法→英",
        "note": "拉丁语 trahere '拉' → 法语 trainer '拖'"
      }
    ],
    "story": "train 的词源是'拉': 火车拉动车厢，训练引导学习者。同源词: tract、trail、trace 都来自拉丁语 trahere。"
  },
  "model": {
    "origin": "拉丁语 modulus (小尺度)",
    "breakdown": "mod- (尺度) + -el (小型)",
    "parts": [
      {
        "syl": "mod-",
        "ipa": "/ˈmɒd/",
        "latinIPA": "/mod/",
        "lang": "拉丁语",
        "note": "拉丁语 modus '尺度'"
      },
      {
        "syl": "el",
        "ipa": "/əl/",
        "latinIPA": "/ulus/",
        "lang": "拉丁→法语",
        "note": "拉丁语 -ulus 小型化后缀，法语 -el"
      }
    ],
    "story": "model 字面义'小型复制品'。同源词: modern (符合当下尺度)、moderate (保持在尺度内)。"
  },
  "simulate": {
    "origin": "拉丁语 similis (相似的)",
    "breakdown": "simil- (相似) + -ate (动词)",
    "parts": [
      {
        "syl": "sim-",
        "ipa": "/ˈsɪm/",
        "latinIPA": "/sim/",
        "lang": "拉丁语",
        "note": "拉丁语 similis '相似的'"
      },
      {
        "syl": "u-",
        "ipa": "/jʊ/",
        "latinIPA": "/u/",
        "lang": "拉丁→法语",
        "note": "连接音"
      },
      {
        "syl": "late",
        "ipa": "/leɪt/",
        "latinIPA": "/latus/",
        "lang": "拉丁→英",
        "note": "拉丁语 -atus 动词后缀"
      }
    ],
    "story": "simulate 字面义'使之相似'。同源词: similar、simile、simultaneous 都来自 similis '相似'。"
  },
  "iteration": {
    "origin": "拉丁语 iterum (再次)",
    "breakdown": "iter- (再次) + -ation (名词)",
    "parts": [
      {
        "syl": "it-",
        "ipa": "/ˌɪt/",
        "latinIPA": "/it/",
        "lang": "拉丁语",
        "note": "拉丁语副词 iterum '再次'"
      },
      {
        "syl": "er-",
        "ipa": "/ə/",
        "latinIPA": "/er/",
        "lang": "拉丁→法语",
        "note": "法语添加 -er-"
      },
      {
        "syl": "a-",
        "ipa": "/ˈreɪ/",
        "latinIPA": "/raː/",
        "lang": "拉丁→法语",
        "note": "拉丁语 -atus → 法语 -ation"
      },
      {
        "syl": "tion",
        "ipa": "/ʃn/",
        "latinIPA": "/tio/",
        "lang": "拉丁→法语",
        "note": "拉丁语 -tio → 法语 -tion"
      }
    ],
    "story": "iteration 字面义'重复做'。与递归(recursion)相对的核心算法概念。拉丁语 iterum 与 itidem '同样地'相关。"
  },
  "psychology": {
    "origin": "希腊语 psyche (灵魂) + logos (言语)",
    "breakdown": "psych- (灵魂) + -o- + -logy (学说)",
    "parts": [
      {
        "syl": "psy-",
        "ipa": "/saɪ/",
        "latinIPA": "/psyː/",
        "lang": "希腊→拉丁",
        "note": "希腊语 psyche '灵魂、呼吸'。ps 代表希腊字母 ψ"
      },
      {
        "syl": "chol-",
        "ipa": "/ˈkɒl/",
        "latinIPA": "/ko/",
        "lang": "希腊→拉丁",
        "note": "希腊语 -ologia 中的连接成分"
      },
      {
        "syl": "o-gy",
        "ipa": "/ədʒi/",
        "latinIPA": "/ologia/",
        "lang": "希腊→拉丁",
        "note": "希腊语 logos '言语' → -logia '学科'"
      }
    ],
    "story": "psychology 字面义'灵魂的研究'。希腊语 psyche 原意为'呼吸'，与英语 breath 同源。"
  },
  "consciousness": {
    "origin": "拉丁语 con- (一起) + scire (知道)",
    "breakdown": "con- (一起) + sci- (知道) + -ous + -ness",
    "parts": [
      {
        "syl": "con-",
        "ipa": "/ˈkɒn/",
        "latinIPA": "/kon/",
        "lang": "拉丁语",
        "note": "拉丁语前缀 con- '一起'"
      },
      {
        "syl": "scious-",
        "ipa": "/ʃəs/",
        "latinIPA": "/skius/",
        "lang": "拉丁→法语",
        "note": "拉丁语 scire '知道'，法语 /sk/ → /ʃ/"
      },
      {
        "syl": "ness",
        "ipa": "/nəs/",
        "latinIPA": "/nitas/",
        "lang": "日耳曼",
        "note": "古英语抽象名词后缀 -nes"
      }
    ],
    "story": "consciousness 字面义'共同知道'。同源词: science (知道的状态)、omniscient (全部知道)。"
  },
  "focus": {
    "origin": "拉丁语 focus (壁炉)",
    "breakdown": "focus (炉火 → 中心)",
    "parts": [
      {
        "syl": "fo-",
        "ipa": "/ˈfəʊ/",
        "latinIPA": "/fo/",
        "lang": "拉丁语",
        "note": "拉丁语 focus '壁炉'——古罗马家庭的中心"
      },
      {
        "syl": "cus",
        "ipa": "/kəs/",
        "latinIPA": "/kus/",
        "lang": "拉丁语",
        "note": "拉丁语 -us 名词单数主格后缀"
      }
    ],
    "story": "focus 拉丁语原意为'壁炉'。从'焦点'(光线汇聚点)到'专注'，经历了漫长的语义演变。法语 foyer (壁炉、家)是同样的意象。"
  },
  "emotion": {
    "origin": "拉丁语 e- (向外) + movere (移动)",
    "breakdown": "e- (向外) + mot- (移动) + -ion",
    "parts": [
      {
        "syl": "e-",
        "ipa": "/ɪ/",
        "latinIPA": "/eː/",
        "lang": "拉丁语",
        "note": "拉丁语前缀 ex- → e- '向外'"
      },
      {
        "syl": "mo-",
        "ipa": "/ˈməʊ/",
        "latinIPA": "/moː/",
        "lang": "拉丁→法语",
        "note": "拉丁语 movere '移动'的过去分词 motus"
      },
      {
        "syl": "tion",
        "ipa": "/ʃn/",
        "latinIPA": "/tio/",
        "lang": "拉丁→法语",
        "note": "拉丁语 -tio → 法语 -tion"
      }
    ],
    "story": "emotion 字面义'向外移动的能量'。情感驱动行为——'情绪'和'移动'共享同一个拉丁词根 movere。"
  },
  "motivation": {
    "origin": "拉丁语 motivus (推动的)",
    "breakdown": "mot- (移动) + -iv- + -ation",
    "parts": [
      {
        "syl": "mo-",
        "ipa": "/ˌməʊ/",
        "latinIPA": "/moː/",
        "lang": "拉丁→法语",
        "note": "拉丁语 movere '移动'的过去分词"
      },
      {
        "syl": "ti-",
        "ipa": "/tɪ/",
        "latinIPA": "/ti/",
        "lang": "拉丁→法语",
        "note": "拉丁语 -ivus 形容词后缀"
      },
      {
        "syl": "va-",
        "ipa": "/ˈveɪ/",
        "latinIPA": "/waː/",
        "lang": "拉丁→法语",
        "note": "拉丁语 -atus → 法语 -ation"
      },
      {
        "syl": "tion",
        "ipa": "/ʃn/",
        "latinIPA": "/tio/",
        "lang": "法语",
        "note": "拉丁语 -tio → 法语 -tion"
      }
    ],
    "story": "motivation 与 emotion 共享 movere '移动'。动机是'推动行动的内在力量'，就是'推动自己去行动'。"
  },
  "resilience": {
    "origin": "拉丁语 re- (向后) + salire (跳)",
    "breakdown": "re- (向后) + sili- (跳) + -ence",
    "parts": [
      {
        "syl": "re-",
        "ipa": "/rɪ/",
        "latinIPA": "/reː/",
        "lang": "拉丁语",
        "note": "拉丁语前缀 re- '向后'"
      },
      {
        "syl": "sil-",
        "ipa": "/ˈzɪl/",
        "latinIPA": "/sil/",
        "lang": "拉丁→法语",
        "note": "拉丁语 salire '跳跃'"
      },
      {
        "syl": "i-ence",
        "ipa": "/iəns/",
        "latinIPA": "/ientia/",
        "lang": "拉丁→法语",
        "note": "拉丁语 -ientia → 法语 -ience"
      }
    ],
    "story": "resilience 字面义'向后弹跳'。物理上描述材料恢复原状的能力，心理学描述人从逆境中'反弹'——像弹簧一样。"
  },
  "discipline": {
    "origin": "拉丁语 discipulus (学生)",
    "breakdown": "discip- (学习) + -line (名词)",
    "parts": [
      {
        "syl": "dis-",
        "ipa": "/ˈdɪs/",
        "latinIPA": "/dis/",
        "lang": "拉丁语",
        "note": "拉丁语 discere '学习'的派生"
      },
      {
        "syl": "ci-",
        "ipa": "/sə/",
        "latinIPA": "/ki/",
        "lang": "拉丁→法语",
        "note": "法语简化 -ipulus → -ipl-"
      },
      {
        "syl": "pline",
        "ipa": "/plɪn/",
        "latinIPA": "/plina/",
        "lang": "拉丁→法→英",
        "note": "拉丁语 -plina 名词后缀"
      }
    ],
    "story": "discipline 原指'学习的领域'。'纪律'来自'学生需遵守的规则'。同源词: disciple '门徒' (学习者)。"
  },
  "visualize": {
    "origin": "拉丁语 videre (看见)",
    "breakdown": "vis- (看见) + -u- + -al- + -ize",
    "parts": [
      {
        "syl": "vis-",
        "ipa": "/ˈvɪʒ/",
        "latinIPA": "/wis/",
        "lang": "拉丁→法语",
        "note": "拉丁语 videre '看见'的过去分词 visus。法语使 /s/ → /ʒ/"
      },
      {
        "syl": "u-",
        "ipa": "/u/",
        "latinIPA": "/u/",
        "lang": "拉丁→法语",
        "note": "连接音"
      },
      {
        "syl": "al-",
        "ipa": "/əl/",
        "latinIPA": "/alis/",
        "lang": "拉丁→法语",
        "note": "拉丁语 -alis 形容词后缀"
      },
      {
        "syl": "ize",
        "ipa": "/aɪz/",
        "latinIPA": "/izare/",
        "lang": "希腊→拉丁",
        "note": "希腊语 -izein → 拉丁语 -izare"
      }
    ],
    "story": "visualize 字面义'使能看到'。同源词: video (我看见)、vision、advise (使别人看到)、revise (再看一次)。"
  },
  "mindset": {
    "origin": "英语 mind (思维) + set (设定)",
    "breakdown": "mind (心智) + set (固定)",
    "parts": [
      {
        "syl": "mind",
        "ipa": "/ˈmaɪnd/",
        "latinIPA": "/mind/",
        "lang": "日耳曼",
        "note": "古英语 gemynd '思维'，与拉丁语 mens 同源"
      },
      {
        "syl": "set",
        "ipa": "/set/",
        "latinIPA": "/set/",
        "lang": "日耳曼",
        "note": "古英语 settan '放置、固定'"
      }
    ],
    "story": "mindset 是现代复合词。心理学家卡罗尔·德韦克通过 growth mindset (成长型思维) vs fixed mindset (固定型思维)使该词广为人知。"
  },
  "anxiety": {
    "origin": "拉丁语 angere (勒紧)",
    "breakdown": "anx- (勒紧) + -iety (名词)",
    "parts": [
      {
        "syl": "anx-",
        "ipa": "/æŋ/",
        "latinIPA": "/ank/",
        "lang": "拉丁语",
        "note": "拉丁语 angere '勒紧、使痛苦'"
      },
      {
        "syl": "i-ety",
        "ipa": "/ˈzaɪəti/",
        "latinIPA": "/ieːtas/",
        "lang": "拉丁→法语",
        "note": "拉丁语 -etas → 法语 -iété"
      }
    ],
    "story": "anxiety 字面义'被勒紧的感觉'。同源词: anger (愤怒)、anguish (痛苦)、angina (心绞痛)都源于'紧缩'的身体感。"
  },
  "confidence": {
    "origin": "拉丁语 con- (一起) + fides (信任)",
    "breakdown": "con- (完全) + fid- (信任) + -ence",
    "parts": [
      {
        "syl": "con-",
        "ipa": "/ˈkɒn/",
        "latinIPA": "/kon/",
        "lang": "拉丁语",
        "note": "拉丁语前缀 con- '完全'"
      },
      {
        "syl": "fi-",
        "ipa": "/fɪ/",
        "latinIPA": "/fi/",
        "lang": "拉丁→法语",
        "note": "拉丁语 fides '信任'，英语 faith 同源"
      },
      {
        "syl": "dence",
        "ipa": "/dəns/",
        "latinIPA": "/dentia/",
        "lang": "拉丁→法语",
        "note": "拉丁语 -entia → 法语 -ence"
      }
    ],
    "story": "confidence 字面义'完全的信任'。同源词: fidelity (忠诚)、fiduciary (受托人)、confide (倾诉信任)。"
  },
  "peak": {
    "origin": "凯尔特→英语",
    "breakdown": "peak (尖峰)",
    "parts": [
      {
        "syl": "peak",
        "ipa": "/piːk/",
        "latinIPA": "/pik/",
        "lang": "凯尔特→英",
        "note": "可能来自凯尔特语，与 pike '矛尖'相关"
      }
    ],
    "story": "peak 可能来自凯尔特语→中古英语 pike '矛尖'。法语 pic (山峰)也可能影响了语义发展。"
  },
  "performance": {
    "origin": "古法语 par- (完成) + fournir (提供)",
    "breakdown": "per- (完全) + form- (形式) + -ance",
    "parts": [
      {
        "syl": "per-",
        "ipa": "/pə/",
        "latinIPA": "/per/",
        "lang": "拉丁→法语",
        "note": "拉丁语 per- '完全'"
      },
      {
        "syl": "form-",
        "ipa": "/ˈfɔːm/",
        "latinIPA": "/form/",
        "lang": "拉丁→法语",
        "note": "拉丁语 forma '形式'"
      },
      {
        "syl": "ance",
        "ipa": "/əns/",
        "latinIPA": "/antia/",
        "lang": "拉丁→法语",
        "note": "拉丁语 -antia → 法语 -ance"
      }
    ],
    "story": "performance 字面义'彻底完成形式的行动'。舞台表演和体育表现共享同一词汇——都要求完美的形式呈现。"
  },
  "achieve": {
    "origin": "古法语 a- (朝向) + chief (头)",
    "breakdown": "a- (朝向) + chiev- (头→完成)",
    "parts": [
      {
        "syl": "a-",
        "ipa": "/ə/",
        "latinIPA": "/ad/",
        "lang": "拉丁→法语",
        "note": "拉丁语 ad- 在法语中简化为 a-"
      },
      {
        "syl": "chieve",
        "ipa": "/ˈtʃiːv/",
        "latinIPA": "/kaput/",
        "lang": "拉丁→法→英",
        "note": "拉丁语 caput '头' → 法语 chef → achieve '到达终点'"
      }
    ],
    "story": "achieve 来自拉丁语 caput '头'。古法语 achever '完成'的本义是'到达头部(终点)'。同源词: chief、captain、capital。"
  },
  "potential": {
    "origin": "拉丁语 potentia (力量)",
    "breakdown": "pot- (力量) + -ent + -ial",
    "parts": [
      {
        "syl": "po-",
        "ipa": "/pə/",
        "latinIPA": "/po/",
        "lang": "拉丁→法",
        "note": "拉丁语 posse '能够'的现在分词"
      },
      {
        "syl": "ten-",
        "ipa": "/ˈten/",
        "latinIPA": "/ten/",
        "lang": "拉丁→法语",
        "note": "potent- 的变体"
      },
      {
        "syl": "tial",
        "ipa": "/ʃl/",
        "latinIPA": "/tialis/",
        "lang": "拉丁→法语",
        "note": "拉丁语 -tialis → 法语 -tiel"
      }
    ],
    "story": "potential 字面义'力量的状态'。拉丁语 posse '能够'也是 power 的词源。同源词: possible (能够是)、posse (有力量的一群人)。"
  },
  "gravity": {
    "origin": "拉丁语 gravis",
    "breakdown": "grav- + -ity",
    "parts": [
      {
        "syl": "grav-",
        "ipa": "/ˈɡræv/",
        "latinIPA": "/ɡraw/",
        "lang": "拉丁",
        "note": "拉丁语 gravis '重的'"
      },
      {
        "syl": "i-",
        "ipa": "/ə/",
        "latinIPA": "/i/",
        "lang": "拉丁",
        "note": "连接元音"
      },
      {
        "syl": "ty",
        "ipa": "/ti/",
        "latinIPA": "/tas/",
        "lang": "拉丁→法",
        "note": "-tas → -té → -ty"
      }
    ],
    "story": "牛顿用拉丁语 gravitas 命名万有引力。"
  },
  "collapse": {
    "origin": "拉丁语 collabi",
    "breakdown": "col- + laps- + e",
    "parts": [
      {
        "syl": "col-",
        "ipa": "/kə/",
        "latinIPA": "/kol/",
        "lang": "拉丁",
        "note": "com- 在 l 前同化为 col-"
      },
      {
        "syl": "lapse",
        "ipa": "/ˈlæps/",
        "latinIPA": "/lapsus/",
        "lang": "拉丁→法",
        "note": "拉丁 labi '滑倒'的分词 lapsus"
      }
    ],
    "story": "collapse = col- (一起) + labi (滑倒)→'一起倒下'。"
  },
  "dense": {
    "origin": "拉丁语 densus",
    "breakdown": "densus",
    "parts": [
      {
        "syl": "dense",
        "ipa": "/dens/",
        "latinIPA": "/densus/",
        "lang": "拉丁→法",
        "note": "拉丁 densus '稠密的'，经法语 dense 进入英语"
      }
    ],
    "story": "与希腊语 dasys '稠密的'同源。"
  },
  "infinite": {
    "origin": "拉丁语 in- + finis",
    "breakdown": "in- + fin- + -ite",
    "parts": [
      {
        "syl": "in-",
        "ipa": "/ˈɪn/",
        "latinIPA": "/in/",
        "lang": "拉丁",
        "note": "否定前缀 in- '不'"
      },
      {
        "syl": "fi-",
        "ipa": "/fə/",
        "latinIPA": "/fi/",
        "lang": "拉丁",
        "note": "拉丁 finis '边界'"
      },
      {
        "syl": "nite",
        "ipa": "/nət/",
        "latinIPA": "/nitus/",
        "lang": "拉丁→法",
        "note": "-itus → -ité"
      }
    ],
    "story": "中世纪末经院哲学才精确表达'无限'概念。"
  },
  "dimension": {
    "origin": "拉丁语 dimensio",
    "breakdown": "di- + mens- + -ion",
    "parts": [
      {
        "syl": "di-",
        "ipa": "/daɪ/",
        "latinIPA": "/diː/",
        "lang": "拉丁",
        "note": "dis- '分开'"
      },
      {
        "syl": "men-",
        "ipa": "/ˈmen/",
        "latinIPA": "/mens/",
        "lang": "拉丁",
        "note": "拉丁 metiri '测量'"
      },
      {
        "syl": "sion",
        "ipa": "/ʃn/",
        "latinIPA": "/sio/",
        "lang": "法语",
        "note": "-sio → -sion"
      }
    ],
    "story": "同源词: measure, meter, metric。"
  },
  "emit": {
    "origin": "拉丁语 e- + mittere",
    "breakdown": "e- + mit-",
    "parts": [
      {
        "syl": "e-",
        "ipa": "/i/",
        "latinIPA": "/eː/",
        "lang": "拉丁",
        "note": "ex- → e- '向外'"
      },
      {
        "syl": "mit",
        "ipa": "/ˈmɪt/",
        "latinIPA": "/mitt/",
        "lang": "拉丁",
        "note": "拉丁 mittere '发送'. transmit, commit 同根"
      }
    ],
    "story": "法语 émettre 影响中古英语拼写。"
  },
  "radiation": {
    "origin": "拉丁语 radius",
    "breakdown": "radi- + -ation",
    "parts": [
      {
        "syl": "ra-",
        "ipa": "/ˌreɪ/",
        "latinIPA": "/raː/",
        "lang": "拉丁",
        "note": "拉丁 radius '光线、轮辐'"
      },
      {
        "syl": "di-",
        "ipa": "/dɪ/",
        "latinIPA": "/di/",
        "lang": "拉丁",
        "note": "radius 变体"
      },
      {
        "syl": "a-",
        "ipa": "/ˈeɪ/",
        "latinIPA": "/aː/",
        "lang": "拉丁→法",
        "note": "-atus → -ation"
      },
      {
        "syl": "tion",
        "ipa": "/ʃn/",
        "latinIPA": "/tio/",
        "lang": "拉丁→法",
        "note": "-tio → -tion"
      }
    ],
    "story": "1898年居里发现镭后获得放射性含义。"
  },
  "absorb": {
    "origin": "拉丁语 ab- + sorbere",
    "breakdown": "ab- + sorb-",
    "parts": [
      {
        "syl": "ab-",
        "ipa": "/əb/",
        "latinIPA": "/ab/",
        "lang": "拉丁",
        "note": "ab- '离开'"
      },
      {
        "syl": "sorb",
        "ipa": "/ˈzɔːb/",
        "latinIPA": "/sorbeo/",
        "lang": "拉丁→法",
        "note": "拉丁 sorbere '吸入'，法语影响 /s/→/z/"
      }
    ],
    "story": "absorb 字面义'从外吸走'。法语 absorber 同时表示'全神贯注'。"
  },
  "cosmic": {
    "origin": "希腊语 kosmos",
    "breakdown": "cosm- + -ic",
    "parts": [
      {
        "syl": "cos-",
        "ipa": "/ˈkɒz/",
        "latinIPA": "/kos/",
        "lang": "希腊→拉丁",
        "note": "希腊 kosmos '宇宙、秩序'"
      },
      {
        "syl": "mic",
        "ipa": "/mɪk/",
        "latinIPA": "/mikus/",
        "lang": "希腊→拉丁",
        "note": "-ikos → -icus"
      }
    ],
    "story": "毕达哥拉斯首次用 kosmos 指代'宇宙'(秩序的完美体现)。"
  },
  "phenomenon": {
    "origin": "希腊语 phainesthai",
    "breakdown": "phen- + -omenon",
    "parts": [
      {
        "syl": "phe-",
        "ipa": "/fə/",
        "latinIPA": "/fe/",
        "lang": "希腊→拉丁",
        "note": "希腊 phainein '显现'"
      },
      {
        "syl": "nom-",
        "ipa": "/ˈnɒm/",
        "latinIPA": "/nom/",
        "lang": "希腊",
        "note": "词根 -nom-"
      },
      {
        "syl": "e-",
        "ipa": "/ə/",
        "latinIPA": "/e/",
        "lang": "拉丁",
        "note": "连接元音"
      },
      {
        "syl": "non",
        "ipa": "/nɒn/",
        "latinIPA": "/non/",
        "lang": "希腊→英",
        "note": "中性分词后缀 -omenon"
      }
    ],
    "story": "柏拉图区分现象(显现的东西)与本质(真实的存有)。"
  },
  "velocity": {
    "origin": "拉丁语 velox",
    "breakdown": "veloc- + -ity",
    "parts": [
      {
        "syl": "ve-",
        "ipa": "/və/",
        "latinIPA": "/weː/",
        "lang": "拉丁",
        "note": "拉丁 velox '快速的'"
      },
      {
        "syl": "loc-",
        "ipa": "/ˈlɒs/",
        "latinIPA": "/lok/",
        "lang": "拉丁",
        "note": "词根 -loc-"
      },
      {
        "syl": "i-",
        "ipa": "/ə/",
        "latinIPA": "/i/",
        "lang": "拉丁→法",
        "note": "连接元音"
      },
      {
        "syl": "ty",
        "ipa": "/ti/",
        "latinIPA": "/tas/",
        "lang": "拉丁→法",
        "note": "-tas → -té → -ty"
      }
    ],
    "story": "物理学标准术语，区别于日常用 speed。"
  },
  "orbit": {
    "origin": "拉丁语 orbis",
    "breakdown": "orb- + -it",
    "parts": [
      {
        "syl": "or-",
        "ipa": "/ˈɔː/",
        "latinIPA": "/or/",
        "lang": "拉丁",
        "note": "拉丁 orbis '圆圈、环'"
      },
      {
        "syl": "bit",
        "ipa": "/bɪt/",
        "latinIPA": "/bit/",
        "lang": "拉丁",
        "note": "-ita 小型化后缀'小圆圈'"
      }
    ],
    "story": "拉丁语 orbita 原指'车辙'。开普勒1609年用来描述行星轨道。"
  },
  "contract": {
    "origin": "拉丁语 con- + trahere",
    "breakdown": "con- + tract-",
    "parts": [
      {
        "syl": "con-",
        "ipa": "/kən/",
        "latinIPA": "/kon/",
        "lang": "拉丁",
        "note": "con- '一起'"
      },
      {
        "syl": "tract",
        "ipa": "/ˈtrækt/",
        "latinIPA": "/trakt/",
        "lang": "拉丁",
        "note": "拉丁 trahere '拉'的分词 tractus"
      }
    ],
    "story": "字面义'拉到一起': 收缩是粒子被拉近；合同是将双方拉到一起。"
  },
  "expand": {
    "origin": "拉丁语 ex- + pandere",
    "breakdown": "ex- + pand-",
    "parts": [
      {
        "syl": "ex-",
        "ipa": "/ɪk/",
        "latinIPA": "/eks/",
        "lang": "拉丁",
        "note": "ex- '向外'"
      },
      {
        "syl": "pand",
        "ipa": "/ˈspænd/",
        "latinIPA": "/spand/",
        "lang": "拉丁",
        "note": "拉丁 pandere '伸展'。span, spread 同源"
      }
    ],
    "story": "expand 字面义'向外展开'。"
  },
  "neuron": {
    "origin": "希腊语 neuron",
    "breakdown": "neur- + -on",
    "parts": [
      {
        "syl": "neu-",
        "ipa": "/ˈnjʊə/",
        "latinIPA": "/neu/",
        "lang": "希腊→拉丁",
        "note": "希腊 neuron '神经、筋腱'"
      },
      {
        "syl": "ron",
        "ipa": "/rɒn/",
        "latinIPA": "/ron/",
        "lang": "希腊→英",
        "note": "希腊中性后缀 -on"
      }
    ],
    "story": "希腊语原意为'筋腱'。希波克拉底学派用来描述'神经'。"
  },
  "synapse": {
    "origin": "希腊语 syn- + haptein",
    "breakdown": "syn- + hapt- + e",
    "parts": [
      {
        "syl": "syn-",
        "ipa": "/ˈsaɪn/",
        "latinIPA": "/syn/",
        "lang": "希腊→拉丁",
        "note": "希腊前缀 syn- '一起'"
      },
      {
        "syl": "apse",
        "ipa": "/æps/",
        "latinIPA": "/apte/",
        "lang": "希腊→英",
        "note": "希腊 haptein '连接'"
      }
    ],
    "story": "谢灵顿1897年创造，字面义'连接点'(神经元之间的微小间隙)。"
  },
  "cortex": {
    "origin": "拉丁语 cortex",
    "breakdown": "cort- + -ex",
    "parts": [
      {
        "syl": "cor-",
        "ipa": "/ˈkɔː/",
        "latinIPA": "/kor/",
        "lang": "拉丁",
        "note": "拉丁 cortex '树皮'"
      },
      {
        "syl": "tex",
        "ipa": "/teks/",
        "latinIPA": "/teks/",
        "lang": "拉丁",
        "note": "拉丁名词后缀 -ex"
      }
    ],
    "story": "大脑皮层像树皮一样包裹着内部结构。"
  },
  "cognitive": {
    "origin": "拉丁语 cognoscere",
    "breakdown": "co- + gnos- + -itive",
    "parts": [
      {
        "syl": "cog-",
        "ipa": "/ˈkɒɡ/",
        "latinIPA": "/koɡ/",
        "lang": "拉丁",
        "note": "co- + gnoscere '知道'"
      },
      {
        "syl": "ni-",
        "ipa": "/nə/",
        "latinIPA": "/ni/",
        "lang": "拉丁",
        "note": "gnos- 变体 -nit-"
      },
      {
        "syl": "tive",
        "ipa": "/tɪv/",
        "latinIPA": "/tiwus/",
        "lang": "拉丁→法",
        "note": "-tivus → -tif"
      }
    ],
    "story": "同根: recognize (认出), ignore (不知道), diagnosis (诊断)。"
  },
  "perception": {
    "origin": "拉丁语 per- + capere",
    "breakdown": "per- + cept- + -ion",
    "parts": [
      {
        "syl": "per-",
        "ipa": "/pə/",
        "latinIPA": "/per/",
        "lang": "拉丁",
        "note": "per- '通过'"
      },
      {
        "syl": "cep-",
        "ipa": "/ˈsep/",
        "latinIPA": "/kep/",
        "lang": "拉丁→法",
        "note": "拉丁 capere 的分词 captus → 法语 cept-"
      }
    ],
    "story": "字面义'通过感官抓取'。capere 是英语最高产词根之一。"
  },
  "stimulus": {
    "origin": "拉丁语 stimulus",
    "breakdown": "stimul- + -us",
    "parts": [
      {
        "syl": "stim-",
        "ipa": "/ˈstɪm/",
        "latinIPA": "/stim/",
        "lang": "拉丁",
        "note": "拉丁 stimulus '刺棒、赶牛棍'"
      },
      {
        "syl": "u-",
        "ipa": "/jə/",
        "latinIPA": "/u/",
        "lang": "拉丁",
        "note": "连接元音"
      },
      {
        "syl": "lus",
        "ipa": "/ləs/",
        "latinIPA": "/lus/",
        "lang": "拉丁",
        "note": "-us 阳性名词主格后缀"
      }
    ],
    "story": "巴甫洛夫用 stimuli 描述引起条件反射的信号。"
  },
  "response": {
    "origin": "拉丁语 re- + spondere",
    "breakdown": "re- + spons- + e",
    "parts": [
      {
        "syl": "re-",
        "ipa": "/rɪ/",
        "latinIPA": "/reː/",
        "lang": "拉丁",
        "note": "re- '回应'"
      },
      {
        "syl": "sponse",
        "ipa": "/ˈspɒns/",
        "latinIPA": "/sponsus/",
        "lang": "拉丁→法",
        "note": "拉丁 spondere '承诺'的分词 sponsus"
      }
    ],
    "story": "源自 respondere '以誓言回应承诺'。"
  },
  "reflex": {
    "origin": "拉丁语 re- + flectere",
    "breakdown": "re- + flex-",
    "parts": [
      {
        "syl": "re-",
        "ipa": "/ˈriː/",
        "latinIPA": "/reː/",
        "lang": "拉丁",
        "note": "re- '向后'"
      },
      {
        "syl": "flex",
        "ipa": "/fleks/",
        "latinIPA": "/fleks/",
        "lang": "拉丁",
        "note": "拉丁 flectere '弯曲'的分词 flexus"
      }
    ],
    "story": "reflex 字面义'向后弯曲'→ 对外部刺激的自动反应。"
  },
  "plasticity": {
    "origin": "希腊语 plastikos",
    "breakdown": "plast- + -icity",
    "parts": [
      {
        "syl": "plas-",
        "ipa": "/plæ/",
        "latinIPA": "/plas/",
        "lang": "希腊→拉丁",
        "note": "希腊 plassein '塑造'"
      },
      {
        "syl": "tic-",
        "ipa": "/ˈstɪs/",
        "latinIPA": "/stik/",
        "lang": "希腊→拉丁",
        "note": "-ikos"
      },
      {
        "syl": "i-ty",
        "ipa": "/əti/",
        "latinIPA": "/itas/",
        "lang": "拉丁→法",
        "note": "-itas → -ité → -ity"
      }
    ],
    "story": "与 plastic 同源。神经科学借用来描述大脑'可塑性'。"
  },
  "hemisphere": {
    "origin": "希腊语 hemi- + sphaira",
    "breakdown": "hemi- + sphere",
    "parts": [
      {
        "syl": "hem-",
        "ipa": "/ˈhem/",
        "latinIPA": "/hemi/",
        "lang": "希腊",
        "note": "希腊 hemi- '一半'"
      },
      {
        "syl": "i-",
        "ipa": "/ɪ/",
        "latinIPA": "/i/",
        "lang": "希腊→拉丁",
        "note": "连接元音"
      },
      {
        "syl": "sphere",
        "ipa": "/sfɪə/",
        "latinIPA": "/sfera/",
        "lang": "希腊→拉丁",
        "note": "希腊 sphaira '球'"
      }
    ],
    "story": "大脑分为左右两个半球。"
  },
  "coordinate": {
    "origin": "拉丁语 co- + ordinare",
    "breakdown": "co- + ordin- + -ate",
    "parts": [
      {
        "syl": "co-",
        "ipa": "/kəʊ/",
        "latinIPA": "/koː/",
        "lang": "拉丁",
        "note": "co- '一起'"
      },
      {
        "syl": "or-",
        "ipa": "/ˈɔː/",
        "latinIPA": "/or/",
        "lang": "拉丁",
        "note": "拉丁 ordo '秩序'"
      },
      {
        "syl": "di-",
        "ipa": "/dɪ/",
        "latinIPA": "/di/",
        "lang": "拉丁",
        "note": "ordin- 中间"
      },
      {
        "syl": "nate",
        "ipa": "/neɪt/",
        "latinIPA": "/natus/",
        "lang": "拉丁→英",
        "note": "-atus 后缀"
      }
    ],
    "story": "coordinate 字面义'一起安排秩序'。"
  },
  "impulse": {
    "origin": "拉丁语 in- + pellere",
    "breakdown": "im- + puls- + e",
    "parts": [
      {
        "syl": "im-",
        "ipa": "/ˈɪm/",
        "latinIPA": "/im/",
        "lang": "拉丁",
        "note": "in- → im- '进入'"
      },
      {
        "syl": "pulse",
        "ipa": "/pʌls/",
        "latinIPA": "/pulsus/",
        "lang": "拉丁",
        "note": "拉丁 pellere '推'的分词 pulsus"
      }
    ],
    "story": "impulse 字面义'向内推'→ 内在的推动力。"
  },
  "sensory": {
    "origin": "拉丁语 sensus",
    "breakdown": "sens- + -ory",
    "parts": [
      {
        "syl": "sen-",
        "ipa": "/ˈsen/",
        "latinIPA": "/sens/",
        "lang": "拉丁",
        "note": "拉丁 sentire '感觉'的分词 sensus"
      },
      {
        "syl": "so-ry",
        "ipa": "/səri/",
        "latinIPA": "/sorius/",
        "lang": "拉丁→法",
        "note": "-orius → -oire → -ory"
      }
    ],
    "story": "与 sense, sentiment, sentence (本义'看法')同源。"
  },
  "motor": {
    "origin": "拉丁语 movere",
    "breakdown": "mot- + -or",
    "parts": [
      {
        "syl": "mo-",
        "ipa": "/ˈməʊ/",
        "latinIPA": "/moː/",
        "lang": "拉丁",
        "note": "拉丁 movere '移动'的分词 motus"
      },
      {
        "syl": "tor",
        "ipa": "/tə/",
        "latinIPA": "/tor/",
        "lang": "拉丁",
        "note": "-or '做...的东西'"
      }
    ],
    "story": "motor 字面义'使移动的东西'。同源: motion, move, mobile。"
  },
  "integration": {
    "origin": "拉丁语 integrare",
    "breakdown": "in- + teg- + -ration",
    "parts": [
      {
        "syl": "in-",
        "ipa": "/ˌɪn/",
        "latinIPA": "/in/",
        "lang": "拉丁",
        "note": "否定 in- '不'"
      },
      {
        "syl": "te-",
        "ipa": "/tɪ/",
        "latinIPA": "/te/",
        "lang": "拉丁",
        "note": "拉丁 tangere '触摸'的变体 teg-"
      },
      {
        "syl": "gra-",
        "ipa": "/ˈɡreɪ/",
        "latinIPA": "/ɡra/",
        "lang": "拉丁→法",
        "note": "法语 -grare"
      },
      {
        "syl": "tion",
        "ipa": "/ʃn/",
        "latinIPA": "/tio/",
        "lang": "拉丁→法",
        "note": "-tio → -tion"
      }
    ],
    "story": "源自 integer '完整的'(未被碰触的)。同源: integer, integrity。"
  },
  "sustainable": {
    "origin": "拉丁语 sus- + tenere",
    "breakdown": "sus- + tain- + -able",
    "parts": [
      {
        "syl": "sus-",
        "ipa": "/sə/",
        "latinIPA": "/sus/",
        "lang": "拉丁",
        "note": "sub- 在 t 前同化为 sus-"
      },
      {
        "syl": "tain-",
        "ipa": "/ˈsteɪn/",
        "latinIPA": "/ten/",
        "lang": "拉丁→法",
        "note": "拉丁 tenere → 法语 tenir"
      },
      {
        "syl": "a-ble",
        "ipa": "/əbl/",
        "latinIPA": "/abilis/",
        "lang": "拉丁→法",
        "note": "-abilis → -able"
      }
    ],
    "story": "字面义'能维持的'。同源: contain, maintain, retain。"
  },
  "ecosystem": {
    "origin": "希腊语 oikos + system",
    "breakdown": "eco- + system",
    "parts": [
      {
        "syl": "e-",
        "ipa": "/ˈiː/",
        "latinIPA": "/eː/",
        "lang": "希腊→拉丁",
        "note": "希腊 oikos '房屋、住所'"
      },
      {
        "syl": "co-",
        "ipa": "/kəʊ/",
        "latinIPA": "/koː/",
        "lang": "希腊→拉丁",
        "note": "连接元音"
      },
      {
        "syl": "sys-",
        "ipa": "/ˈsɪs/",
        "latinIPA": "/sis/",
        "lang": "希腊→拉丁",
        "note": "希腊 systema '组合'"
      }
    ],
    "story": "1935年创造的新词: oikos (家) + system (系统)。同源: economy, ecology。"
  },
  "emission": {
    "origin": "拉丁语 e- + mittere",
    "breakdown": "e- + miss- + -ion",
    "parts": [
      {
        "syl": "e-",
        "ipa": "/i/",
        "latinIPA": "/eː/",
        "lang": "拉丁",
        "note": "e- '向外'"
      },
      {
        "syl": "mis-",
        "ipa": "/ˈmɪʃ/",
        "latinIPA": "/mis/",
        "lang": "拉丁→法",
        "note": "mittere 的分词 missus"
      },
      {
        "syl": "sion",
        "ipa": "/ʃn/",
        "latinIPA": "/sio/",
        "lang": "拉丁→法",
        "note": "-sio → -sion"
      }
    ],
    "story": "同根: mission, missile, message 都与'发送'有关。"
  },
  "carbon": {
    "origin": "拉丁语 carbo",
    "breakdown": "carb- + -on",
    "parts": [
      {
        "syl": "car-",
        "ipa": "/ˈkɑː/",
        "latinIPA": "/kar/",
        "lang": "拉丁",
        "note": "拉丁 carbo '煤炭'"
      },
      {
        "syl": "bon",
        "ipa": "/bən/",
        "latinIPA": "/bo/",
        "lang": "拉丁→法",
        "note": "-o → 法语 -one → 英语 -on"
      }
    ],
    "story": "元素命名中最古老的之一，反映人类对炭的远古认知。"
  },
  "renewable": {
    "origin": "拉丁语 re- + novus / 英语 new",
    "breakdown": "re- + new + -able",
    "parts": [
      {
        "syl": "re-",
        "ipa": "/rɪ/",
        "latinIPA": "/reː/",
        "lang": "拉丁→英",
        "note": "re- '再次'"
      },
      {
        "syl": "new-",
        "ipa": "/ˈnjuː/",
        "latinIPA": "/nowus/",
        "lang": "英<-拉丁",
        "note": "拉丁 novus '新'→ 英语 new"
      },
      {
        "syl": "a-ble",
        "ipa": "/əbl/",
        "latinIPA": "/abilis/",
        "lang": "拉丁→法",
        "note": "-abilis → -able"
      }
    ],
    "story": "日耳曼-拉丁混合词: re- (拉丁) + new (日耳曼) + -able (拉丁)。"
  },
  "conservation": {
    "origin": "拉丁语 con- + servare",
    "breakdown": "con- + serv- + -ation",
    "parts": [
      {
        "syl": "con-",
        "ipa": "/ˌkɒn/",
        "latinIPA": "/kon/",
        "lang": "拉丁",
        "note": "con- '一起'"
      },
      {
        "syl": "ser-",
        "ipa": "/sə/",
        "latinIPA": "/ser/",
        "lang": "拉丁",
        "note": "拉丁 servare '保存'"
      },
      {
        "syl": "va-",
        "ipa": "/ˈveɪ/",
        "latinIPA": "/wa/",
        "lang": "拉丁→法",
        "note": "-atus → -ation"
      }
    ],
    "story": "同源: observe, preserve, reserve 都来自 servare '保持'。"
  },
  "biodiversity": {
    "origin": "希腊语 bios + 拉丁语 diversitas",
    "breakdown": "bio- + diversity",
    "parts": [
      {
        "syl": "bi-",
        "ipa": "/ˌbaɪ/",
        "latinIPA": "/biː/",
        "lang": "希腊→拉丁",
        "note": "希腊 bios '生命'"
      },
      {
        "syl": "o-",
        "ipa": "/əʊ/",
        "latinIPA": "/oː/",
        "lang": "希腊",
        "note": "连接元音"
      },
      {
        "syl": "di-",
        "ipa": "/daɪ/",
        "latinIPA": "/diː/",
        "lang": "拉丁",
        "note": "dis- '分开'"
      },
      {
        "syl": "ver-si-ty",
        "ipa": "/ˈvɜːsəti/",
        "latinIPA": "/wertas/",
        "lang": "拉丁→法",
        "note": "vertere '转动'→ 法语 diversité"
      }
    ],
    "story": "1988年创造的希腊-拉丁混合词。"
  },
  "pollution": {
    "origin": "拉丁语 polluere",
    "breakdown": "pol- + lu- + -tion",
    "parts": [
      {
        "syl": "pol-",
        "ipa": "/pə/",
        "latinIPA": "/pol/",
        "lang": "拉丁",
        "note": "前缀 per- 的变体"
      },
      {
        "syl": "lu-",
        "ipa": "/ˈluː/",
        "latinIPA": "/luː/",
        "lang": "拉丁",
        "note": "拉丁 luere '弄脏'"
      },
      {
        "syl": "tion",
        "ipa": "/ʃn/",
        "latinIPA": "/tio/",
        "lang": "拉丁→法",
        "note": "-tio → -tion"
      }
    ],
    "story": "pollution 源自拉丁语 polluere '弄脏、玷污'。"
  },
  "climate": {
    "origin": "希腊语 klima",
    "breakdown": "clim- + -ate",
    "parts": [
      {
        "syl": "cli-",
        "ipa": "/ˈklaɪ/",
        "latinIPA": "/kliː/",
        "lang": "希腊→拉丁",
        "note": "希腊 klima '倾斜'"
      },
      {
        "syl": "mate",
        "ipa": "/mət/",
        "latinIPA": "/matus/",
        "lang": "拉丁→法",
        "note": "-ma → 拉丁 -ma → 法语 -me"
      }
    ],
    "story": "本义'倾斜'——古人认为气候取决于太阳照射的倾斜角度。"
  },
  "adaptation": {
    "origin": "拉丁语 ad- + aptare",
    "breakdown": "ad- + apt- + -ation",
    "parts": [
      {
        "syl": "ad-",
        "ipa": "/ˌæd/",
        "latinIPA": "/ad/",
        "lang": "拉丁",
        "note": "ad- '朝向'"
      },
      {
        "syl": "ap-",
        "ipa": "/æp/",
        "latinIPA": "/ap/",
        "lang": "拉丁",
        "note": "拉丁 aptus '适合的'"
      },
      {
        "syl": "ta-",
        "ipa": "/ˈteɪ/",
        "latinIPA": "/ta/",
        "lang": "拉丁→法",
        "note": "-tatio → -tion"
      }
    ],
    "story": "达尔文借用 adaptation 描述生物适应环境的过程。"
  },
  "mitigation": {
    "origin": "拉丁语 mitigare",
    "breakdown": "mit- + -igation",
    "parts": [
      {
        "syl": "mit-",
        "ipa": "/ˌmɪt/",
        "latinIPA": "/mit/",
        "lang": "拉丁",
        "note": "拉丁 mitis '温和的'"
      },
      {
        "syl": "i-",
        "ipa": "/ɪ/",
        "latinIPA": "/i/",
        "lang": "拉丁",
        "note": "连接元音"
      },
      {
        "syl": "ga-",
        "ipa": "/ˈɡeɪ/",
        "latinIPA": "/ɡa/",
        "lang": "拉丁→法",
        "note": "-igare 动词后缀"
      },
      {
        "syl": "tion",
        "ipa": "/ʃn/",
        "latinIPA": "/tio/",
        "lang": "拉丁→法",
        "note": "-tio → -tion"
      }
    ],
    "story": "mitis 与英语 mild '温和的'同源。"
  },
  "resource": {
    "origin": "拉丁语 re- + surgere",
    "breakdown": "re- + source",
    "parts": [
      {
        "syl": "re-",
        "ipa": "/rɪ/",
        "latinIPA": "/reː/",
        "lang": "拉丁",
        "note": "re- '再次'"
      },
      {
        "syl": "source",
        "ipa": "/ˈzɔːs/",
        "latinIPA": "/sursus/",
        "lang": "拉丁→法",
        "note": "拉丁 surgere '升起'→ 法语 source '泉源'"
      }
    ],
    "story": "字面义'能反复涌出的东西'→ 资源。"
  },
  "recycle": {
    "origin": "拉丁语 re- + cyclus",
    "breakdown": "re- + cycle",
    "parts": [
      {
        "syl": "re-",
        "ipa": "/ˌriː/",
        "latinIPA": "/reː/",
        "lang": "拉丁→英",
        "note": "re- '再次'"
      },
      {
        "syl": "cy-",
        "ipa": "/ˈsaɪ/",
        "latinIPA": "/kyː/",
        "lang": "希腊→拉丁",
        "note": "希腊 kyklos '圆环'"
      },
      {
        "syl": "cle",
        "ipa": "/kl/",
        "latinIPA": "/kle/",
        "lang": "希腊→拉丁",
        "note": "-klos → -culus"
      }
    ],
    "story": "20世纪70年代环保运动使之成为日常词汇。"
  },
  "environmental": {
    "origin": "古法语 environner",
    "breakdown": "en- + viron + -mental",
    "parts": [
      {
        "syl": "en-",
        "ipa": "/ɪn/",
        "latinIPA": "/in/",
        "lang": "法语",
        "note": "古法语 en- '在...里'"
      },
      {
        "syl": "vi-",
        "ipa": "/ˌvaɪ/",
        "latinIPA": "/wi/",
        "lang": "法语",
        "note": "viron '周围'"
      },
      {
        "syl": "ron-",
        "ipa": "/rən/",
        "latinIPA": "/ron/",
        "lang": "法语",
        "note": "中性后缀"
      },
      {
        "syl": "men-tal",
        "ipa": "/ˈmentl/",
        "latinIPA": "/mentalis/",
        "lang": "拉丁→法",
        "note": "-mentalis"
      }
    ],
    "story": "源自古法语 environner '环绕'，最终来自希腊语 gyros '圆环'。"
  },
  "footprint": {
    "origin": "英语 foot + print",
    "breakdown": "foot + print",
    "parts": [
      {
        "syl": "foot",
        "ipa": "/ˈfʊt/",
        "latinIPA": "/fot/",
        "lang": "日耳曼",
        "note": "古英语 fot '脚'，与拉丁 ped- 同源"
      },
      {
        "syl": "print",
        "ipa": "/prɪnt/",
        "latinIPA": "/printa/",
        "lang": "拉丁→法→英",
        "note": "拉丁 premere '压'→ 法语 preindre → 英语 print"
      }
    ],
    "story": "碳足迹是2000年代环保运动创造的新比喻义。"
  },
  "quantum": {
    "origin": "拉丁语 quantus",
    "breakdown": "quant- + -um",
    "parts": [
      {
        "syl": "quan-",
        "ipa": "/ˈkwɒn/",
        "latinIPA": "/kwant/",
        "lang": "拉丁",
        "note": "拉丁 quantus '多少'"
      },
      {
        "syl": "tum",
        "ipa": "/təm/",
        "latinIPA": "/tum/",
        "lang": "拉丁",
        "note": "-um 中性主格后缀"
      }
    ],
    "story": "1900年普朗克借用拉丁语 quantum 表示'最小能量单位'。"
  },
  "particle": {
    "origin": "拉丁语 particula",
    "breakdown": "part- + -icle",
    "parts": [
      {
        "syl": "par-",
        "ipa": "/ˈpɑː/",
        "latinIPA": "/part/",
        "lang": "拉丁",
        "note": "拉丁 pars '部分'"
      },
      {
        "syl": "ti-",
        "ipa": "/tɪ/",
        "latinIPA": "/ti/",
        "lang": "拉丁→法",
        "note": "-ticula 小型后缀"
      },
      {
        "syl": "cle",
        "ipa": "/kl/",
        "latinIPA": "/kula/",
        "lang": "拉丁→法",
        "note": "-cula → -cule → -cle"
      }
    ],
    "story": "= pars (部分) + -cula (小型后缀)→小部分。"
  },
  "measurement": {
    "origin": "拉丁语 mensura",
    "breakdown": "measur- + -ment",
    "parts": [
      {
        "syl": "meas-",
        "ipa": "/ˈmeʒ/",
        "latinIPA": "/men/",
        "lang": "拉丁→法",
        "note": "拉丁 mensura。法语 /ʒ/ 影响英语"
      },
      {
        "syl": "ure-",
        "ipa": "/ə/",
        "latinIPA": "/ura/",
        "lang": "拉丁→法",
        "note": "-ura → -ure"
      },
      {
        "syl": "ment",
        "ipa": "/mənt/",
        "latinIPA": "/mentum/",
        "lang": "拉丁→法",
        "note": "-mentum → -ment"
      }
    ],
    "story": "与 meter, dimension 同源。"
  },
  "probability": {
    "origin": "拉丁语 probare",
    "breakdown": "prob- + -ability",
    "parts": [
      {
        "syl": "prob-",
        "ipa": "/ˌprɒb/",
        "latinIPA": "/prob/",
        "lang": "拉丁",
        "note": "拉丁 probus '好的'"
      },
      {
        "syl": "a-",
        "ipa": "/ə/",
        "latinIPA": "/a/",
        "lang": "拉丁→法",
        "note": "连接元音"
      },
      {
        "syl": "bil-",
        "ipa": "/ˈbɪl/",
        "latinIPA": "/bil/",
        "lang": "拉丁→法",
        "note": "-ibilitas → -abilité"
      },
      {
        "syl": "i-ty",
        "ipa": "/əti/",
        "latinIPA": "/itas/",
        "lang": "拉丁→法",
        "note": "-itas → -ité → -ity"
      }
    ],
    "story": "概率论源于17世纪帕斯卡和费马的通信。"
  },
  "observe": {
    "origin": "拉丁语 ob- + servare",
    "breakdown": "ob- + serv- + e",
    "parts": [
      {
        "syl": "ob-",
        "ipa": "/əb/",
        "latinIPA": "/ob/",
        "lang": "拉丁",
        "note": "ob- '朝向'"
      },
      {
        "syl": "serve",
        "ipa": "/ˈzɜːv/",
        "latinIPA": "/serwe/",
        "lang": "拉丁→法",
        "note": "拉丁 servare '保持'，法语 /z/ 影响英语"
      }
    ],
    "story": "字面义'朝向某物保持专注'。同源: conserve, preserve。"
  },
  "predict": {
    "origin": "拉丁语 prae- + dicere",
    "breakdown": "pre- + dict-",
    "parts": [
      {
        "syl": "pre-",
        "ipa": "/prɪ/",
        "latinIPA": "/preː/",
        "lang": "拉丁",
        "note": "prae- '在前'"
      },
      {
        "syl": "dict",
        "ipa": "/ˈdɪkt/",
        "latinIPA": "/dik/",
        "lang": "拉丁",
        "note": "拉丁 dicere '说'的分词 dictus"
      }
    ],
    "story": "字面义'提前说'。同源: dictionary, dictate。"
  },
  "analyze": {
    "origin": "希腊语 analyein",
    "breakdown": "ana- + ly- + -ze",
    "parts": [
      {
        "syl": "an-",
        "ipa": "/ˈæn/",
        "latinIPA": "/ana/",
        "lang": "希腊→拉丁",
        "note": "希腊 ana- '向上、完全'"
      },
      {
        "syl": "a-",
        "ipa": "/ə/",
        "latinIPA": "/a/",
        "lang": "希腊→拉丁",
        "note": "连接元音"
      },
      {
        "syl": "lyze",
        "ipa": "/laɪz/",
        "latinIPA": "/lyː/",
        "lang": "希腊→拉丁",
        "note": "希腊 lyein '解开'"
      }
    ],
    "story": "字面义'完全解开'——把复杂整体拆解为简单部分。"
  },
  "statistic": {
    "origin": "拉丁语 status + 希腊 -istikos",
    "breakdown": "stat- + -istic",
    "parts": [
      {
        "syl": "sta-",
        "ipa": "/stə/",
        "latinIPA": "/sta/",
        "lang": "拉丁→意",
        "note": "拉丁 status '状况'"
      },
      {
        "syl": "tis-",
        "ipa": "/ˈtɪs/",
        "latinIPA": "/tis/",
        "lang": "德国→英",
        "note": "Statistik 来自意大利 '政治家'"
      },
      {
        "syl": "tic",
        "ipa": "/tɪk/",
        "latinIPA": "/tikus/",
        "lang": "拉丁→英",
        "note": "希腊 -tikos"
      }
    ],
    "story": "源自意大利语 statista '政治家'——最初指国家数据收集。"
  },
  "variance": {
    "origin": "拉丁语 variare",
    "breakdown": "vari- + -ance",
    "parts": [
      {
        "syl": "var-",
        "ipa": "/ˈveər/",
        "latinIPA": "/war/",
        "lang": "拉丁",
        "note": "拉丁 varius '多变的'"
      },
      {
        "syl": "i-",
        "ipa": "/ɪ/",
        "latinIPA": "/i/",
        "lang": "拉丁",
        "note": "连接元音"
      },
      {
        "syl": "ance",
        "ipa": "/əns/",
        "latinIPA": "/antia/",
        "lang": "拉丁→法",
        "note": "-antia → -ance"
      }
    ],
    "story": "统计学中指'数据点与平均值的差异'。"
  },
  "distribution": {
    "origin": "拉丁语 dis- + tribuere",
    "breakdown": "dis- + tribut- + -ion",
    "parts": [
      {
        "syl": "dis-",
        "ipa": "/ˌdɪs/",
        "latinIPA": "/dis/",
        "lang": "拉丁",
        "note": "dis- '分开'"
      },
      {
        "syl": "tri-",
        "ipa": "/trɪ/",
        "latinIPA": "/tri/",
        "lang": "拉丁",
        "note": "拉丁 tribuere '分配'"
      },
      {
        "syl": "bu-",
        "ipa": "/ˈbjuː/",
        "latinIPA": "/bu/",
        "lang": "拉丁→法",
        "note": "变体"
      },
      {
        "syl": "tion",
        "ipa": "/ʃn/",
        "latinIPA": "/tio/",
        "lang": "拉丁→法",
        "note": "-tio → -tion"
      }
    ],
    "story": "古罗马按部落(tribe)分配资源。"
  },
  "correlation": {
    "origin": "拉丁语 co- + relatio",
    "breakdown": "cor- + relat- + -ion",
    "parts": [
      {
        "syl": "cor-",
        "ipa": "/ˌkɒr/",
        "latinIPA": "/kor/",
        "lang": "拉丁",
        "note": "co- 在 r 前同化为 cor-"
      },
      {
        "syl": "re-",
        "ipa": "/rə/",
        "latinIPA": "/re/",
        "lang": "拉丁",
        "note": "re- '回'"
      },
      {
        "syl": "la-",
        "ipa": "/ˈleɪ/",
        "latinIPA": "/la/",
        "lang": "拉丁→法",
        "note": "latum '携带'"
      },
      {
        "syl": "tion",
        "ipa": "/ʃn/",
        "latinIPA": "/tio/",
        "lang": "法语",
        "note": "-tio → -tion"
      }
    ],
    "story": "高尔顿引入统计学。co- 强调'互相'的关系。"
  },
  "regression": {
    "origin": "拉丁语 re- + gressus",
    "breakdown": "re- + gress- + -ion",
    "parts": [
      {
        "syl": "re-",
        "ipa": "/rɪ/",
        "latinIPA": "/reː/",
        "lang": "拉丁",
        "note": "re- '向后'"
      },
      {
        "syl": "gres-",
        "ipa": "/ˈɡreʃ/",
        "latinIPA": "/ɡres/",
        "lang": "拉丁→法",
        "note": "拉丁 gradi '走'的分词 gressus"
      },
      {
        "syl": "sion",
        "ipa": "/ʃn/",
        "latinIPA": "/sio/",
        "lang": "拉丁→法",
        "note": "-sio → -sion"
      }
    ],
    "story": "高尔顿1885年发现极端特征的后代会'回归'平均值。"
  },
  "parameter": {
    "origin": "希腊语 para- + metron",
    "breakdown": "para- + meter",
    "parts": [
      {
        "syl": "pa-",
        "ipa": "/pə/",
        "latinIPA": "/pa/",
        "lang": "希腊→拉丁",
        "note": "希腊 para- '旁边'"
      },
      {
        "syl": "ram-",
        "ipa": "/ˈræm/",
        "latinIPA": "/ram/",
        "lang": "希腊→拉丁",
        "note": "希腊 metron '测量'"
      },
      {
        "syl": "e-ter",
        "ipa": "/ɪtə/",
        "latinIPA": "/eter/",
        "lang": "希腊→拉丁",
        "note": "-er 施动者后缀"
      }
    ],
    "story": "字面义'协助测量的东西'。在数学中指'辅助变量'。"
  },
  "precision": {
    "origin": "拉丁语 prae- + caedere",
    "breakdown": "pre- + cis- + -ion",
    "parts": [
      {
        "syl": "pre-",
        "ipa": "/prɪ/",
        "latinIPA": "/preː/",
        "lang": "拉丁",
        "note": "prae- '在前'"
      },
      {
        "syl": "ci-",
        "ipa": "/ˈsɪʒ/",
        "latinIPA": "/ki/",
        "lang": "拉丁→法",
        "note": "拉丁 caedere '切'的分词 cisus，法语 /k/→/ʒ/"
      },
      {
        "syl": "sion",
        "ipa": "/ʒn/",
        "latinIPA": "/sio/",
        "lang": "拉丁→法",
        "note": "-sio → -sion"
      }
    ],
    "story": "字面义'预先切割'→ 精确。同源: decide, suicide, scissors。"
  },
  "calibrate": {
    "origin": "阿拉伯语 → 拉丁语 calibra",
    "breakdown": "calibr- + -ate",
    "parts": [
      {
        "syl": "cal-",
        "ipa": "/ˈkæl/",
        "latinIPA": "/kal/",
        "lang": "阿拉伯→拉丁",
        "note": "阿拉伯语 qalib '模具'→ 拉丁 calibra"
      },
      {
        "syl": "i-",
        "ipa": "/ɪ/",
        "latinIPA": "/i/",
        "lang": "拉丁→意",
        "note": "连接元音"
      },
      {
        "syl": "brate",
        "ipa": "/breɪt/",
        "latinIPA": "/bratus/",
        "lang": "拉丁→英",
        "note": "-bra → -brate"
      }
    ],
    "story": "从阿拉伯语 qalib 经西班牙语、法语进入英语。见证跨文明传播。"
  }
};
