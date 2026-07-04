// ============================================================
// 研究生英语单词 · 10篇融合科学杂志 × 篮球新闻的阅读文章
// 150个核心词汇 · IPA音标 · 音节标注 · 中英对照
// ============================================================

const WORDS = [
  // ----- Article 1: 基因与运动天赋 (0-14) -----
  { word: "hypothesis",    phonetic: "/haɪˈpɒθəsɪs/",     syllables: "hy·poth·e·sis",     meaning: "假设，假说" },
  { word: "gene",          phonetic: "/dʒiːn/",            syllables: "gene",               meaning: "基因" },
  { word: "inherit",       phonetic: "/ɪnˈherɪt/",         syllables: "in·her·it",          meaning: "继承；遗传" },
  { word: "dominant",      phonetic: "/ˈdɒmɪnənt/",       syllables: "dom·i·nant",          meaning: "显性的；占主导地位的" },
  { word: "mutation",      phonetic: "/mjuːˈteɪʃn/",      syllables: "mu·ta·tion",          meaning: "突变" },
  { word: "evolution",     phonetic: "/ˌiːvəˈluːʃn/",     syllables: "ev·o·lu·tion",        meaning: "进化；演变" },
  { word: "trait",         phonetic: "/treɪt/",            syllables: "trait",               meaning: "特征，特点" },
  { word: "chromosome",    phonetic: "/ˈkrəʊməsəʊm/",     syllables: "chro·mo·some",        meaning: "染色体" },
  { word: "replicate",     phonetic: "/ˈreplɪkeɪt/",      syllables: "rep·li·cate",         meaning: "复制" },
  { word: "sequence",      phonetic: "/ˈsiːkwəns/",       syllables: "se·quence",           meaning: "序列；顺序" },
  { word: "genetic",       phonetic: "/dʒəˈnetɪk/",       syllables: "ge·net·ic",           meaning: "基因的；遗传的" },
  { word: "variation",     phonetic: "/ˌveərɪˈeɪʃn/",     syllables: "var·i·a·tion",        meaning: "变异；变化" },
  { word: "species",       phonetic: "/ˈspiːʃiːz/",       syllables: "spe·cies",            meaning: "物种" },
  { word: "genome",        phonetic: "/ˈdʒiːnəʊm/",       syllables: "ge·nome",             meaning: "基因组" },
  { word: "hereditary",    phonetic: "/həˈredɪtri/",      syllables: "he·red·i·tar·y",     meaning: "遗传的；世袭的" },

  // ----- Article 2: 黑洞与防守压迫 (15-29) -----
  { word: "gravity",       phonetic: "/ˈɡrævəti/",        syllables: "grav·i·ty",          meaning: "重力；引力" },
  { word: "collapse",      phonetic: "/kəˈlæps/",         syllables: "col·lapse",           meaning: "坍塌；崩溃" },
  { word: "dense",         phonetic: "/dens/",             syllables: "dense",               meaning: "密集的；稠密的" },
  { word: "infinite",      phonetic: "/ˈɪnfɪnət/",        syllables: "in·fi·nite",          meaning: "无限的" },
  { word: "dimension",     phonetic: "/daɪˈmenʃn/",       syllables: "di·men·sion",         meaning: "维度；方面" },
  { word: "emit",          phonetic: "/iˈmɪt/",            syllables: "e·mit",               meaning: "发出；发射" },
  { word: "radiation",     phonetic: "/ˌreɪdiˈeɪʃn/",     syllables: "ra·di·a·tion",        meaning: "辐射" },
  { word: "absorb",        phonetic: "/əbˈzɔːb/",         syllables: "ab·sorb",             meaning: "吸收" },
  { word: "cosmic",        phonetic: "/ˈkɒzmɪk/",         syllables: "cos·mic",             meaning: "宇宙的" },
  { word: "phenomenon",    phonetic: "/fəˈnɒmɪnən/",     syllables: "phe·nom·e·non",       meaning: "现象" },
  { word: "velocity",      phonetic: "/vəˈlɒsəti/",       syllables: "ve·loc·i·ty",         meaning: "速度；速率" },
  { word: "orbit",         phonetic: "/ˈɔːbɪt/",          syllables: "or·bit",              meaning: "轨道；环绕" },
  { word: "density",       phonetic: "/ˈdensəti/",        syllables: "den·si·ty",           meaning: "密度" },
  { word: "contract",      phonetic: "/kənˈtrækt/",       syllables: "con·tract",           meaning: "收缩；合同" },
  { word: "expand",        phonetic: "/ɪkˈspænd/",        syllables: "ex·pand",             meaning: "膨胀；扩展" },

  // ----- Article 3: 神经科学与球场视野 (30-44) -----
  { word: "neuron",        phonetic: "/ˈnjʊərɒn/",        syllables: "neu·ron",             meaning: "神经元" },
  { word: "synapse",       phonetic: "/ˈsaɪnæps/",        syllables: "syn·apse",            meaning: "突触" },
  { word: "cortex",        phonetic: "/ˈkɔːteks/",        syllables: "cor·tex",             meaning: "皮层" },
  { word: "cognitive",     phonetic: "/ˈkɒɡnətɪv/",      syllables: "cog·ni·tive",         meaning: "认知的" },
  { word: "perception",    phonetic: "/pəˈsepʃn/",        syllables: "per·cep·tion",        meaning: "感知；认知" },
  { word: "stimulus",      phonetic: "/ˈstɪmjələs/",      syllables: "stim·u·lus",          meaning: "刺激" },
  { word: "response",      phonetic: "/rɪˈspɒns/",        syllables: "re·sponse",           meaning: "反应；回应" },
  { word: "reflex",        phonetic: "/ˈriːfleks/",       syllables: "re·flex",             meaning: "反射；本能反应" },
  { word: "plasticity",    phonetic: "/plæˈstɪsəti/",     syllables: "plas·tic·i·ty",       meaning: "可塑性" },
  { word: "hemisphere",    phonetic: "/ˈhemɪsfɪə/",       syllables: "hem·i·sphere",        meaning: "半球" },
  { word: "coordinate",    phonetic: "/kəʊˈɔːdɪneɪt/",   syllables: "co·or·di·nate",       meaning: "协调；坐标" },
  { word: "impulse",       phonetic: "/ˈɪmpʌls/",         syllables: "im·pulse",            meaning: "冲动；脉冲" },
  { word: "sensory",       phonetic: "/ˈsensəri/",        syllables: "sen·so·ry",           meaning: "感觉的；感官的" },
  { word: "motor",         phonetic: "/ˈməʊtə/",          syllables: "mo·tor",              meaning: "运动的；发动机" },
  { word: "integration",   phonetic: "/ˌɪntɪˈɡreɪʃn/",   syllables: "in·te·gra·tion",       meaning: "整合；融合" },

  // ----- Article 4: 绿色场馆与气候韧性 (45-59) -----
  { word: "sustainable",   phonetic: "/səˈsteɪnəbl/",    syllables: "sus·tain·a·ble",      meaning: "可持续的" },
  { word: "ecosystem",     phonetic: "/ˈiːkəʊsɪstəm/",   syllables: "e·co·sys·tem",         meaning: "生态系统" },
  { word: "emission",      phonetic: "/iˈmɪʃn/",          syllables: "e·mis·sion",          meaning: "排放" },
  { word: "carbon",        phonetic: "/ˈkɑːbən/",         syllables: "car·bon",             meaning: "碳" },
  { word: "renewable",     phonetic: "/rɪˈnjuːəbl/",      syllables: "re·new·a·ble",        meaning: "可再生的" },
  { word: "conservation",  phonetic: "/ˌkɒnsəˈveɪʃn/",   syllables: "con·ser·va·tion",      meaning: "保护（自然资源）" },
  { word: "biodiversity",  phonetic: "/ˌbaɪəʊdaɪˈvɜːsəti/", syllables: "bi·o·di·ver·si·ty", meaning: "生物多样性" },
  { word: "pollution",     phonetic: "/pəˈluːʃn/",        syllables: "pol·lu·tion",         meaning: "污染" },
  { word: "climate",       phonetic: "/ˈklaɪmət/",        syllables: "cli·mate",            meaning: "气候" },
  { word: "adaptation",    phonetic: "/ˌædæpˈteɪʃn/",    syllables: "ad·ap·ta·tion",        meaning: "适应；改编" },
  { word: "mitigation",    phonetic: "/ˌmɪtɪˈɡeɪʃn/",    syllables: "mit·i·ga·tion",        meaning: "缓解；减轻" },
  { word: "resource",      phonetic: "/rɪˈzɔːs/",         syllables: "re·source",           meaning: "资源" },
  { word: "recycle",       phonetic: "/ˌriːˈsaɪkl/",      syllables: "re·cy·cle",           meaning: "回收利用" },
  { word: "environmental", phonetic: "/ɪnˌvaɪrənˈmentl/", syllables: "en·vi·ron·men·tal",   meaning: "环境的" },
  { word: "footprint",     phonetic: "/ˈfʊtprɪnt/",       syllables: "foot·print",          meaning: "足迹；碳排放足迹" },

  // ----- Article 5: 量子分析与精准投篮 (60-74) -----
  { word: "quantum",       phonetic: "/ˈkwɒntəm/",        syllables: "quan·tum",            meaning: "量子" },
  { word: "particle",      phonetic: "/ˈpɑːtɪkl/",        syllables: "par·ti·cle",          meaning: "粒子" },
  { word: "measurement",   phonetic: "/ˈmeʒəmənt/",       syllables: "meas·ure·ment",       meaning: "测量；衡量" },
  { word: "probability",   phonetic: "/ˌprɒbəˈbɪləti/",   syllables: "prob·a·bil·i·ty",     meaning: "概率" },
  { word: "observe",       phonetic: "/əbˈzɜːv/",         syllables: "ob·serve",            meaning: "观察；观测" },
  { word: "predict",       phonetic: "/prɪˈdɪkt/",         syllables: "pre·dict",            meaning: "预测" },
  { word: "analyze",       phonetic: "/ˈænəlaɪz/",        syllables: "an·a·lyze",           meaning: "分析" },
  { word: "statistic",     phonetic: "/stəˈtɪstɪk/",      syllables: "sta·tis·tic",         meaning: "统计；统计数据" },
  { word: "variance",      phonetic: "/ˈveəriəns/",       syllables: "var·i·ance",          meaning: "方差；差异" },
  { word: "distribution",  phonetic: "/ˌdɪstrɪˈbjuːʃn/",  syllables: "dis·tri·bu·tion",     meaning: "分布；分配" },
  { word: "correlation",   phonetic: "/ˌkɒrəˈleɪʃn/",    syllables: "cor·re·la·tion",       meaning: "相关性" },
  { word: "regression",    phonetic: "/rɪˈɡreʃn/",        syllables: "re·gres·sion",        meaning: "回归；倒退" },
  { word: "parameter",     phonetic: "/pəˈræmɪtə/",       syllables: "pa·ram·e·ter",        meaning: "参数" },
  { word: "precision",     phonetic: "/prɪˈsɪʒn/",        syllables: "pre·ci·sion",         meaning: "精确；精度" },
  { word: "calibrate",     phonetic: "/ˈkælɪbreɪt/",      syllables: "cal·i·brate",         meaning: "校准；标定" },

  // ----- Article 6: 进化与现代篮球适应 (75-89) -----
  { word: "adapt",         phonetic: "/əˈdæpt/",           syllables: "a·dapt",              meaning: "适应" },
  { word: "survival",      phonetic: "/səˈvaɪvl/",        syllables: "sur·viv·al",          meaning: "生存" },
  { word: "generation",    phonetic: "/ˌdʒenəˈreɪʃn/",    syllables: "gen·er·a·tion",       meaning: "代；一代人" },
  { word: "mutate",        phonetic: "/mjuːˈteɪt/",       syllables: "mu·tate",             meaning: "突变；变异" },
  { word: "diversify",     phonetic: "/daɪˈvɜːsɪfaɪ/",    syllables: "di·ver·si·fy",        meaning: "多样化" },
  { word: "organism",      phonetic: "/ˈɔːɡənɪzəm/",      syllables: "or·gan·ism",          meaning: "生物体；有机体" },
  { word: "reproduce",     phonetic: "/ˌriːprəˈdjuːs/",   syllables: "re·pro·duce",         meaning: "繁殖；再生产" },
  { word: "adaptive",      phonetic: "/əˈdæptɪv/",        syllables: "a·dap·tive",          meaning: "适应的；有适应性的" },
  { word: "innate",        phonetic: "/ɪˈneɪt/",           syllables: "in·nate",             meaning: "天生的；固有的" },
  { word: "offspring",     phonetic: "/ˈɒfsprɪŋ/",        syllables: "off·spring",          meaning: "后代" },
  { word: "mechanism",     phonetic: "/ˈmekənɪzəm/",      syllables: "mech·a·nism",         meaning: "机制；机理" },
  { word: "evolve",        phonetic: "/iˈvɒlv/",           syllables: "e·volve",             meaning: "进化；演变" },
  { word: "thrive",        phonetic: "/θraɪv/",            syllables: "thrive",              meaning: "茁壮成长；繁荣" },
  { word: "habitat",       phonetic: "/ˈhæbɪtæt/",        syllables: "hab·i·tat",           meaning: "栖息地" },
  { word: "niche",         phonetic: "/niːʃ/",             syllables: "niche",               meaning: "生态位；利基" },

  // ----- Article 7: 深海与团队协作 (90-104) -----
  { word: "marine",        phonetic: "/məˈriːn/",         syllables: "ma·rine",             meaning: "海洋的" },
  { word: "depth",         phonetic: "/depθ/",             syllables: "depth",               meaning: "深度" },
  { word: "pressure",      phonetic: "/ˈpreʃə/",           syllables: "pres·sure",           meaning: "压力；压强" },
  { word: "current",       phonetic: "/ˈkʌrənt/",         syllables: "cur·rent",            meaning: "水流；当前的" },
  { word: "tide",          phonetic: "/taɪd/",             syllables: "tide",                meaning: "潮汐；潮流" },
  { word: "sediment",      phonetic: "/ˈsedɪmənt/",       syllables: "sed·i·ment",          meaning: "沉积物" },
  { word: "coral",         phonetic: "/ˈkɒrəl/",          syllables: "cor·al",              meaning: "珊瑚" },
  { word: "migrate",       phonetic: "/maɪˈɡreɪt/",       syllables: "mi·grate",            meaning: "迁徙；迁移" },
  { word: "symbiotic",     phonetic: "/ˌsɪmbaɪˈɒtɪk/",   syllables: "sym·bi·ot·ic",        meaning: "共生的" },
  { word: "trench",        phonetic: "/trentʃ/",           syllables: "trench",              meaning: "海沟；沟渠" },
  { word: "zone",          phonetic: "/zəʊn/",             syllables: "zone",                meaning: "区域；地带" },
  { word: "abyss",         phonetic: "/əˈbɪs/",           syllables: "a·byss",              meaning: "深渊" },
  { word: "circulation",   phonetic: "/ˌsɜːkjəˈleɪʃn/",   syllables: "cir·cu·la·tion",      meaning: "循环；流通" },
  { word: "stratum",       phonetic: "/ˈstrɑːtəm/",       syllables: "stra·tum",            meaning: "层；地层" },
  { word: "oceanic",       phonetic: "/ˌəʊʃiˈænɪk/",      syllables: "o·ce·an·ic",          meaning: "海洋的；大洋的" },

  // ----- Article 8: 病毒式复出与免疫 (105-119) -----
  { word: "virus",         phonetic: "/ˈvaɪrəs/",         syllables: "vi·rus",              meaning: "病毒" },
  { word: "immune",        phonetic: "/ɪˈmjuːn/",         syllables: "im·mune",             meaning: "免疫的" },
  { word: "infection",     phonetic: "/ɪnˈfekʃn/",        syllables: "in·fec·tion",         meaning: "感染" },
  { word: "antibody",      phonetic: "/ˈæntɪbɒdi/",       syllables: "an·ti·bod·y",         meaning: "抗体" },
  { word: "vaccine",       phonetic: "/ˈvæksiːn/",        syllables: "vac·cine",            meaning: "疫苗" },
  { word: "pathogen",      phonetic: "/ˈpæθədʒən/",       syllables: "path·o·gen",          meaning: "病原体" },
  { word: "epidemic",      phonetic: "/ˌepɪˈdemɪk/",      syllables: "ep·i·dem·ic",         meaning: "流行病；流行的" },
  { word: "resistance",    phonetic: "/rɪˈzɪstəns/",       syllables: "re·sist·ance",        meaning: "抵抗；抵抗力" },
  { word: "recover",       phonetic: "/rɪˈkʌvə/",         syllables: "re·cov·er",           meaning: "恢复；康复" },
  { word: "immunity",      phonetic: "/ɪˈmjuːnəti/",      syllables: "im·mu·ni·ty",         meaning: "免疫力" },
  { word: "cellular",      phonetic: "/ˈseljələ/",        syllables: "cel·lu·lar",          meaning: "细胞的" },
  { word: "outbreak",      phonetic: "/ˈaʊtbreɪk/",       syllables: "out·break",           meaning: "爆发" },
  { word: "diagnose",      phonetic: "/ˈdaɪəɡnəʊz/",      syllables: "di·ag·nose",          meaning: "诊断" },
  { word: "therapy",       phonetic: "/ˈθerəpi/",         syllables: "ther·a·py",           meaning: "治疗；疗法" },
  { word: "chronic",       phonetic: "/ˈkrɒnɪk/",         syllables: "chron·ic",            meaning: "慢性的；长期的" },

  // ----- Article 9: AI球探与模式识别 (120-134) -----
  { word: "algorithm",     phonetic: "/ˈælɡərɪðəm/",      syllables: "al·go·rithm",         meaning: "算法" },
  { word: "artificial",    phonetic: "/ˌɑːtɪˈfɪʃl/",      syllables: "ar·ti·fi·cial",       meaning: "人工的；人造的" },
  { word: "intelligence",  phonetic: "/ɪnˈtelɪdʒəns/",    syllables: "in·tel·li·gence",     meaning: "智力；智能" },
  { word: "pattern",       phonetic: "/ˈpætn/",            syllables: "pat·tern",            meaning: "模式；图案" },
  { word: "recognition",   phonetic: "/ˌrekəɡˈnɪʃn/",     syllables: "rec·og·ni·tion",      meaning: "识别；认可" },
  { word: "data",          phonetic: "/ˈdeɪtə/",           syllables: "da·ta",               meaning: "数据" },
  { word: "machine",       phonetic: "/məˈʃiːn/",         syllables: "ma·chine",            meaning: "机器；机械" },
  { word: "neural",        phonetic: "/ˈnjʊərəl/",        syllables: "neu·ral",             meaning: "神经的；神经系统的" },
  { word: "network",       phonetic: "/ˈnetwɜːk/",        syllables: "net·work",            meaning: "网络" },
  { word: "classify",      phonetic: "/ˈklæsɪfaɪ/",       syllables: "clas·si·fy",          meaning: "分类" },
  { word: "optimize",      phonetic: "/ˈɒptɪmaɪz/",       syllables: "op·ti·mize",          meaning: "优化" },
  { word: "train",         phonetic: "/treɪn/",            syllables: "train",               meaning: "训练；培训" },
  { word: "model",         phonetic: "/ˈmɒdl/",            syllables: "mod·el",              meaning: "模型；模特" },
  { word: "simulate",      phonetic: "/ˈsɪmjuleɪt/",      syllables: "sim·u·late",          meaning: "模拟" },
  { word: "iteration",     phonetic: "/ˌɪtəˈreɪʃn/",      syllables: "it·er·a·tion",        meaning: "迭代" },

  // ----- Article 10: 冠军心流的心理学 (135-149) -----
  { word: "psychology",    phonetic: "/saɪˈkɒlədʒi/",     syllables: "psy·chol·o·gy",       meaning: "心理学" },
  { word: "consciousness", phonetic: "/ˈkɒnʃəsnəs/",      syllables: "con·scious·ness",     meaning: "意识；知觉" },
  { word: "focus",         phonetic: "/ˈfəʊkəs/",         syllables: "fo·cus",              meaning: "专注；焦点" },
  { word: "emotion",       phonetic: "/ɪˈməʊʃn/",         syllables: "e·mo·tion",           meaning: "情绪；情感" },
  { word: "motivation",    phonetic: "/ˌməʊtɪˈveɪʃn/",    syllables: "mo·ti·va·tion",       meaning: "动机；动力" },
  { word: "resilience",    phonetic: "/rɪˈzɪliəns/",      syllables: "re·sil·i·ence",       meaning: "韧性；恢复力" },
  { word: "discipline",    phonetic: "/ˈdɪsəplɪn/",       syllables: "dis·ci·pline",        meaning: "纪律；学科" },
  { word: "visualize",     phonetic: "/ˈvɪʒuəlaɪz/",      syllables: "vi·su·al·ize",        meaning: "想象；可视化" },
  { word: "mindset",       phonetic: "/ˈmaɪndset/",       syllables: "mind·set",            meaning: "心态；思维模式" },
  { word: "anxiety",       phonetic: "/æŋˈzaɪəti/",       syllables: "an·xi·e·ty",          meaning: "焦虑" },
  { word: "confidence",    phonetic: "/ˈkɒnfɪdəns/",      syllables: "con·fi·dence",        meaning: "自信；信心" },
  { word: "peak",          phonetic: "/piːk/",             syllables: "peak",                meaning: "顶峰；巅峰" },
  { word: "performance",   phonetic: "/pəˈfɔːməns/",      syllables: "per·for·mance",       meaning: "表现；性能" },
  { word: "achieve",       phonetic: "/əˈtʃiːv/",         syllables: "a·chieve",            meaning: "实现；达到" },
  { word: "potential",     phonetic: "/pəˈtenʃl/",        syllables: "po·ten·tial",         meaning: "潜力；潜在的" }
];

// Article-level word groups (index ranges in WORDS array)
const WORD_GROUPS = [
  { start: 0, end: 14 },   // Article 1
  { start: 15, end: 29 },  // Article 2
  { start: 30, end: 44 },  // Article 3
  { start: 45, end: 59 },  // Article 4
  { start: 60, end: 74 },  // Article 5
  { start: 75, end: 89 },  // Article 6
  { start: 90, end: 104 }, // Article 7
  { start: 105, end: 119 },// Article 8
  { start: 120, end: 134 },// Article 9
  { start: 135, end: 149 } // Article 10
];
// ============================================================
// 10篇融合科学杂志 × 篮球新闻的英语文章
// ============================================================

const ARTICLES = [
  {
    id: 1,
    title: "The Genetic Blueprint of Basketball Greatness",
    cnTitle: "基因蓝图与篮球天赋",
    intro: "为什么有些人天生就是篮球天才？从基因的角度探索运动天赋的奥秘。",    slides: [
      {
      "icon": "🧬",
      "title": "你的基因决定了运动天赋的基础",
      "subtitle": "DNA: The Blueprint of Athleticism"
      },
      {
      "icon": "🏀",
      "title": "优秀运动员的基因组中包含特殊序列",
      "subtitle": "Elite Athletes Have Unique Genetic Sequences"
      },
      {
      "icon": "🔬",
      "title": "某些基因突变让运动员跳得更高、跑得更快",
      "subtitle": "Genetic Mutations Create Athletic Advantages"
      },
      {
      "icon": "💪",
      "title": "基因提供基础，训练释放全部潜能",
      "subtitle": "Nature + Nurture = Basketball Legend"
      }
      ],

    paragraphs: [
      "For years, scientists made a bold **hypothesis**: athletic excellence is not just about hard work — it runs in your **genes**. This idea has led to a fascinating exploration of human **genetic** potential. Every athlete **inherits** a unique set of **traits** from their parents, and some of those traits can be **dominant** — meaning they show up no matter what.",
      "Take LeBron James, for example. His **genome** contains a specific **sequence** of DNA that helps explain his extraordinary physique. Scientists have studied the **chromosome** structure of elite athletes and found certain **mutations** that give them an edge. These **variations** in the human **species** help explain why some players can jump higher or run faster.",
      "But **evolution** doesn't stop. The human body continues to **evolve** and **replicate** its best qualities. Coaches now understand that while genetics provides the foundation, training can unlock the full **hereditary** potential in every player. The combination of natural talent and hard work is what creates basketball legends."
    ],
    paragraphsCN: [
      "多年来，科学家们提出了一个大胆的**假设**：运动天赋不仅仅关乎努力训练——它还藏在你的**基因**里。这个想法引发了对人类**遗传**潜力的一次迷人探索。每个运动员都从父母那里**继承**了一套独特的**特征**，其中一些特征是**显性的**——也就是说无论如何都会表现出来。",
      "以勒布朗·詹姆斯为例。他的**基因组**中包含了一段特定的DNA**序列**，这有助于解释他超凡的体格。科学家们研究了精英运动员的**染色体**结构，发现了某些让他们占据优势的**突变**。人类**物种**中的这些**变异**，有助于解释为什么有些球员跳得更高、跑得更快。",
      "但**进化**从未停止。人体持续变化并**复制**其最优品质。教练们如今明白，虽然基因提供了基础，但训练能够释放每个球员全部的**遗传**潜力。天赋与勤奋的结合，才是造就篮球传奇的关键。"
    ],
    wordRange: { start: 0, end: 14 },
    scienceLabel: "🔬 基因科学",
    sportsLabel: "🏀 篮球天赋",
    latinPoem: {"verse": "Natura in minimis maxima est. — Cicero", "verseHTML":
       "<em>Natura in minimis maxima est.</em><br><span style='font-size:13px;color:var(--text-muted)'>— Cicero, <em>De Natura Deorum</em></span>", "translation": "自然在最小的事物中最为伟大。", "connection": "基因(gene)正是这个理念的完美体现——微小的双螺旋结构决定了生命的全部蓝图。拉丁语 natura 与英语 nature 同源。", "word": "gene"}
  },
  {
    id: 2,
    title: "Defensive Black Holes: The Gravity of Great Defense",
    cnTitle: "防守黑洞：伟大防守的引力",
    intro: "好的防守就像黑洞——它吸收一切，让对手无路可逃。",    slides: [
      {
      "icon": "🌌",
      "title": "质量巨大的恒星向内坍缩，形成超强引力",
      "subtitle": "A Star Collapses into Infinite Gravity"
      },
      {
      "icon": "🛡️",
      "title": "优秀防守者吸收一切进攻，让对手无路可逃",
      "subtitle": "Defense That Absorbs All Offensive Movement"
      },
      {
      "icon": "🔁",
      "title": "防守影响力像辐射一样扩散到每个角落",
      "subtitle": "Defensive Radiation Covers the Whole Court"
      },
      {
      "icon": "🔒",
      "title": "扩大防守覆盖范围同时保持完美站位",
      "subtitle": "The Science of Lockdown Defense"
      }
      ],

    paragraphs: [
      "In astrophysics, a black hole is a region where **gravity** is so strong that nothing can escape. It forms when a massive star begins to **collapse** under its own weight, becoming incredibly **dense**. The **density** reaches such extreme levels that space and time **contract** into a single point of **infinite** **dimension**.",
      "Now imagine that as a basketball defender. A great defender doesn't just guard one player — they **absorb** all offensive movement, **emit** constant pressure, and control every **orbit** on the court. Like a **cosmic** **phenomenon**, their presence changes the game. Players moving at high **velocity** toward the basket suddenly find themselves trapped.",
      "The defensive **radiation** spreads across the entire court, affecting every opponent. When a defender learns to **expand** their coverage area while maintaining perfect positioning, they become a true \"defensive black hole.\" This is the science of lockdown defense — a **phenomenon** that every championship team needs."
    ],
    paragraphsCN: [
      "在天体物理学中，黑洞是一个**引力**极强的区域，没有任何东西能够逃脱。它形成于一颗大质量恒星在自身重量下开始**坍塌**，变得极其**密集**。**密度**达到如此极端的水平，以至于空间和时间**收缩**成一个具有**无限****维度**的奇点。",
      "现在把它想象成一名篮球防守者。一名优秀的防守者不仅仅盯防一个球员——他们**吸收**所有的进攻移动，**发出**持续的压力，并控制着球场上的每一条**轨道**。就像一种**宇宙****现象**，他们的存在改变了比赛。以高**速度**冲向篮筐的球员会突然发现自己被牢牢困住。",
      "防守的**辐射**遍布整个球场，影响着每一个对手。当一名防守者学会**扩展**自己的覆盖范围同时保持完美站位时，他们就成为了真正的「防守黑洞」。这就是封锁式防守的科学——一个每个冠军球队都需要的**现象**。"
    ],
    wordRange: { start: 15, end: 29 },
    scienceLabel: "🌌 天体物理",
    sportsLabel: "🏀 防守战术",
    latinPoem: {"verse": "Gravitas sine viribus nihil valet. — Seneca", "verseHTML":
       "<em>Gravitas sine viribus nihil valet.</em><br><span style='font-size:13px;color:var(--text-muted)'>— Seneca, <em>Epistulae</em></span>", "translation": "没有力量的重量毫无价值。", "connection": "拉丁语 gravitas (重量、庄重) 正是 gravity (引力) 的词根。塞涅卡的这句格言告诉我们：真正的防守不仅靠体重的压迫(gravitas)，更需要力量(vires)的支撑。", "word": "gravity"}
  },
  {
    id: 3,
    title: "Neural Pathways and Court Vision",
    cnTitle: "神经通路与球场视野",
    intro: "顶级控卫的大脑是如何工作的？神经科学揭示球场上的瞬间决策。",    slides: [
      {
      "icon": "🧠",
      "title": "控卫做一次传球，大脑中数千个神经元同时放电",
      "subtitle": "Thousands of Neurons Fire for One Pass"
      },
      {
      "icon": "👁️",
      "title": "大脑处理视觉信息，在毫秒间做出应对",
      "subtitle": "Visual Perception Processed in Milliseconds"
      },
      {
      "icon": "🔄",
      "title": "通过训练改变大脑结构，看到别人看不到的传球",
      "subtitle": "Neuroplasticity Creates Elite Court Vision"
      },
      {
      "icon": "🎯",
      "title": "两个半球的完美协调，创造球场魔法",
      "subtitle": "Perfect Hemisphere Coordination"
      }
      ],

    paragraphs: [
      "Every time a point guard makes a pass, thousands of **neurons** fire in their brain. These **neural** signals travel across **synapses** — the tiny gaps between brain cells — at lightning speed. The **cortex**, especially the visual **hemisphere**, processes **sensory** information from the eyes and ears, creating a real-time map of the court.",
      "This is **cognitive** science in action. A player's **perception** of the game is shaped by years of practice. When a defender approaches, the brain sends an **impulse** through the **motor** system, triggering a **reflex** pass or a quick **response**. The **stimulus** of movement on the court is processed in milliseconds.",
      "What separates great players from good ones is **plasticity** — the brain's ability to rewire itself. Through constant training, the **integration** of visual data and motor skills becomes seamless. The two **hemispheres** of the brain **coordinate** perfectly, allowing the player to see passes that others simply cannot."
    ],
    paragraphsCN: [
      "每当一名控球后卫传出一球，他们大脑中就有数千个**神经元**在放电。这些**神经**信号以闪电般的速度穿过**突触**——脑细胞之间的微小间隙。**皮层**，尤其是视觉**半球**，处理来自眼睛和耳朵的**感觉**信息，创建出一张实时的球场地图。",
      "这就是实践中的**认知**科学。球员对比赛的**感知**是由多年的训练塑造的。当防守者逼近时，大脑会通过**运动**系统发送一个**脉冲**，触发一个**反射**传球或快速**反应**。球场上移动的**刺激**在毫秒之间被处理完成。",
      "将伟大球员与优秀球员区分开来的是**可塑性**——大脑自我重塑的能力。通过持续的训练，视觉数据与运动技能的**整合**变得无缝衔接。大脑的两个**半球**完美**协调**，让球员能够看到别人根本无法看到的传球路线。"
    ],
    wordRange: { start: 30, end: 44 },
    scienceLabel: "🧠 神经科学",
    sportsLabel: "🏀 球场智慧",
    latinPoem: {"verse": "Mens sana in corpore sano. — Iuvenalis", "verseHTML":
       "<em>Orandum est ut sit mens sana in corpore sano.</em><br><span style='font-size:13px;color:var(--text-muted)'>— Iuvenalis, <em>Satirae</em></span>", "translation": "应祈祷在健康的身体中拥有一颗健康的心灵。", "connection": "拉丁语 mens (心灵、智力) 与英语 mental、mind 同源。球场上完美的传球不仅需要健康的身体(corpus)，更需要敏锐的心灵(mens)和精准的感知(perceptio)。", "word": "cognitive"}
  },
  {
    id: 4,
    title: "The Green Arena: Sustainability in Sports",
    cnTitle: "绿色球场：体育的可持续发展",
    intro: "篮球场馆如何应对气候变化的挑战？环保正在改变体育产业。",    slides: [
      {
      "icon": "🌍",
      "title": "大型体育赛事的碳排放量惊人",
      "subtitle": "The Environmental Impact of Major Sports"
      },
      {
      "icon": "☀️",
      "title": "NBA场馆安装太阳能板，使用清洁能源",
      "subtitle": "Solar Panels Power Basketball Arenas"
      },
      {
      "icon": "♻️",
      "title": "从电力到食品包装，每个资源都精细管理",
      "subtitle": "Every Resource Is Carefully Managed"
      },
      {
      "icon": "🌱",
      "title": "篮球证明环保和体育可以完美并行",
      "subtitle": "Sustainability and Sports Go Hand in Hand"
      }
      ],

    paragraphs: [
      "Modern basketball arenas are undergoing a remarkable transformation. The **environmental** impact of sports has become a pressing concern, and teams are racing to reduce their **carbon** **footprint**. From solar panels to water **conservation** systems, the **sustainable** revolution has reached the NBA.",
      "The **ecosystem** of a major sports event involves thousands of people, and **emission** levels can be significant. Teams now use **renewable** energy sources and advanced **recycle** programs. Every **resource** — from electricity to food packaging — is carefully managed. **Pollution** is being reduced through innovative **mitigation** strategies.",
      "**Climate** change demands **adaptation** at every level. Arenas are designed to withstand extreme weather, while **biodiversity** projects around stadiums help restore local environments. The goal is to create a **sustainable** model that other industries can follow. Basketball is proving that sports and **environmental** responsibility can go hand in hand."
    ],
    paragraphsCN: [
      "现代篮球场馆正在经历一场非凡的变革。体育对**环境**的影响已成为一个紧迫的问题，各支球队正在竞相减少他们的**碳****足迹**。从太阳能板到节水**保护**系统，**可持续**的革命已经来到了NBA。",
      "一场大型体育赛事的**生态系统**涉及成千上万的人，**排放**水平可能相当显著。球队现在使用**可再生**能源和先进的**回收利用**项目。每一种**资源**——从电力到食品包装——都经过了精心管理。通过创新的**缓解**策略，**污染**正在被减少。",
      "**气候**变化要求每个层面都做出**适应**。场馆被设计成能够承受极端天气，而场馆周围的**生物多样性**项目有助于恢复当地环境。目标是创造一个**可持续**的模式，让其他行业可以效仿。篮球正在证明，体育与**环境**责任可以并行不悖。"
    ],
    wordRange: { start: 45, end: 59 },
    scienceLabel: "🌍 环境科学",
    sportsLabel: "🏀 绿色体育",
    latinPoem: {"verse": "Terra mater omnium nostrum est. — Vergilius", "verseHTML":
       "<em>Tellus mater omnium nostrum est.</em><br><span style='font-size:13px;color:var(--text-muted)'>— Vergilius, <em>Georgica</em></span>", "translation": "大地是我们所有人的母亲。", "connection": "拉丁语 tellus/terra (大地) 与环境(environment)的概念密不可分。维吉尔的这句诗提醒我们：地球不仅是我们的栖息地(habitat)，更是需要可持续(sustainable)守护的母亲。", "word": "sustainable"}
  },
  {
    id: 5,
    title: "Quantum Analytics and the Perfect Shot",
    cnTitle: "量子分析与完美投篮",
    intro: "数据分析如何改变投篮训练？用科学方法找到最精准的出手。",    slides: [
      {
      "icon": "🔬",
      "title": "在量子世界，观察行为本身会改变结果",
      "subtitle": "Observation Changes the Outcome"
      },
      {
      "icon": "📊",
      "title": "每次投篮都是一个概率事件",
      "subtitle": "Every Shot Is a Particle of Probability"
      },
      {
      "icon": "📐",
      "title": "从出手角度到弧线高度，每个参数都可测量优化",
      "subtitle": "Calibrate Every Parameter for Perfection"
      },
      {
      "icon": "🎯",
      "title": "用数据精度打造新时代射手",
      "subtitle": "Science + Instinct = Perfect Shooting"
      }
      ],

    paragraphs: [
      "The philosophy of **quantum** physics teaches us that the act of **observation** changes the outcome. In basketball, every shot is a **particle** of **probability** — it either goes in or it doesn't. But through careful **measurement** and **analysis**, we can **predict** success rates with remarkable **precision**.",
      "Sports **statistics** have evolved into a sophisticated science. **Variance** in shooting percentages can be explained by **distribution** of shot locations and **correlation** with defensive pressure. **Regression** models help **calibrate** training programs for maximum effectiveness. Every **parameter** — from release angle to arc height — can be measured and optimized.",
      "Modern trainers use these insights to help players **analyze** their own shooting mechanics. By understanding the **statistics** behind each shot, players can make smarter decisions on the court. The combination of **quantum** thinking and data **precision** is creating a new generation of shooters who shoot not just with instinct, but with science."
    ],
    paragraphsCN: [
      "**量子**物理学的哲学告诉我们，**观察**的行为会改变结果。在篮球中，每一次投篮都是一个**概率**的**粒子**——要么进，要么不进。但通过精心的**测量**和**分析**，我们可以以出色的**精度**来**预测**成功率。",
      "体育**统计**已经演变成一门精密的科学。投篮命中率的**方差**可以通过投篮位置的**分布**以及与防守压力的**相关性**来解释。**回归**模型帮助**校准**训练计划以达到最大效果。每一个**参数**——从出手角度到弧线高度——都可以被测量和优化。",
      "现代训练师利用这些洞察帮助球员**分析**自己的投篮机制。通过理解每一次投篮背后的**统计**数据，球员可以在球场上做出更聪明的决策。**量子**思维与数据**精度**的结合，正在创造出一代不仅凭直觉、更凭科学投篮的新射手。"
    ],
    wordRange: { start: 60, end: 74 },
    scienceLabel: "🔬 物理学",
    sportsLabel: "🏀 数据分析",
    latinPoem: {"verse": "Mensura omnium rerum est. — Protagoras (Latinized)", "verseHTML":
       "<em>Homo mensura omnium rerum est.</em><br><span style='font-size:13px;color:var(--text-muted)'>— Protagoras, per Platonem</span>", "translation": "人是万物的尺度。", "connection": "拉丁语 mensura (测量、尺度) 与 measurement、dimension 同源。这句古老的拉丁格言与量子力学的核心思想惊人地一致——观测(observatio)改变被观测的对象。", "word": "measurement"}
  },
  {
    id: 6,
    title: "Evolutionary Adaptation and the Modern Player",
    cnTitle: "进化适应与现代球员",
    intro: "篮球运动在不断进化，球员们也在不断适应新的比赛方式。",    slides: [
      {
      "icon": "🧬",
      "title": "不适应新打法的球员面临生存挑战",
      "subtitle": "Natural Selection in the NBA"
      },
      {
      "icon": "🔄",
      "title": "大个子必须投三分，后卫必须防守多个位置",
      "subtitle": "Skills Must Diversify to Survive"
      },
      {
      "icon": "🌱",
      "title": "球员为了在新体系中茁壮成长而进化",
      "subtitle": "Players Evolve to Thrive in New Systems"
      },
      {
      "icon": "🏀",
      "title": "每个球员在自己的生态位中找到成功",
      "subtitle": "Every Player Finds Their Niche"
      }
      ],

    paragraphs: [
      "Charles Darwin's theory of **evolution** by natural **selection** applies perfectly to basketball. Players who cannot **adapt** to new playing styles face a **survival** challenge in the league. The **mechanism** of basketball **evolution** has transformed the game across **generations** — from big, slow centers to fast, versatile athletes.",
      "The modern game requires players to **diversify** their skills. A big man must now shoot threes; a guard must defend multiple positions. This is **adaptive** behavior at its finest. Players **evolve** their games to **thrive** in new systems. What was once considered a **mutation** in playing style is now the new standard.",
      "Coaches **reproduce** successful systems and pass them to the next **generation** of players. While some skills are **innate**, most can be developed through practice. The **offspring** of basketball ideas — new plays, new strategies — create new **habitats** where different types of players can succeed. Every player finds their **niche** in the evolving ecosystem of the game."
    ],
    paragraphsCN: [
      "达尔文的自然选择驱动的**进化**论完美适用于篮球运动。无法**适应**新打法的球员将在联盟中面临**生存**挑战。篮球**进化**的**机制**跨越一代又一代人改变了这项运动——从高大笨重的中锋转变为快速全能的全能战士。",
      "现代比赛要求球员将自身技能**多样化**。大个子如今必须投三分；后卫必须防守多个位置。这就是最极致的**适应**行为。球员为在新体系中**茁壮成长**而**进化**自己的比赛风格。曾被视为打法**突变**的东西，如今成了新标准。",
      "教练们**复制**成功的体系并将其传递给下一代球员。虽然有些技能是**天生的**，但大多数可以通过后天训练培养。篮球思想的**后代**——新战术、新策略——创造出全新的**栖息地**，让不同类型的球员都能获得成功。每位球员都在比赛不断演变的生态系统中找到属于自己的**生态位**。"
    ],
    wordRange: { start: 75, end: 89 },
    scienceLabel: "🧬 进化论",
    sportsLabel: "🏀 篮球演变",
    latinPoem: {"verse": "Tempora mutantur, nos et mutamur in illis. — Ovidius", "verseHTML":
       "<em>Tempora mutantur, nos et mutamur in illis.</em><br><span style='font-size:13px;color:var(--text-muted)'>— Ovidius, <em>Metamorphoses</em> (sententia vulgaris)</span>", "translation": "时代在变迁，我们也在其中改变。", "connection": "拉丁语 mutare (改变) 与 mutate、mutation 同源。奥维德在《变形记》中讲述了万物变化的永恒真理——就像篮球运动一样，不适应(adaptare)就意味着被淘汰。", "word": "adapt"}
  },
  {
    id: 7,
    title: "Ocean Depths and Team Dynamics",
    cnTitle: "深海奥秘与团队协作",
    intro: "就像海洋的不同深度层，一支球队也需要不同角色的球员。",    slides: [
      {
      "icon": "🌊",
      "title": "海洋分为不同深度层，每层压力和环境截然不同",
      "subtitle": "The Ocean Has Many Different Layers"
      },
      {
      "icon": "⛹️",
      "title": "控卫在浅滩观察全局，大个子在深海游弋",
      "subtitle": "Different Players, Different Zones"
      },
      {
      "icon": "🤝",
      "title": "最强的共生关系创造胜利篮球",
      "subtitle": "Symbiotic Relationships Win Games"
      },
      {
      "icon": "🌟",
      "title": "最好的团队像健康海洋：多样、平衡、互联",
      "subtitle": "Diverse, Balanced, Deeply Interconnected"
      }
      ],

    paragraphs: [
      "The **oceanic** world is divided into different **zones**, each with its own **pressure** and **depth**. In the shallow **stratum**, sunlight reaches the **coral** reefs, where **symbiotic** relationships between species create rich **biodiversity**. Descend into the midnight **zone**, and you enter the **abyss** — a world of extreme **pressure** and darkness.",
      "A basketball team works the same way. Point guards operate in the shallows, seeing the entire **circulation** of the game. Big men **migrate** through the paint like deep-sea **currents**. The **tide** of the game shifts constantly, and each player must understand their **zone** on the court. **Sediment** builds up over time — habits, chemistry, trust.",
      "The most successful teams are like healthy **marine** ecosystems: diverse, balanced, and deeply interconnected. Every **organism** on the team has a role, and the strongest **symbiotic** relationships create winning basketball. Understanding team **dynamics** is like exploring the ocean — you need to appreciate every layer."
    ],
    paragraphsCN: [
      "**海洋**世界被划分为不同的**区域**，每个区域都有其独特的**压力**和**深度**。在浅水层，阳光穿透**珊瑚**礁，物种间的**共生**关系创造出丰富的生物多样性。下降到午夜区域，便坠入**深渊**——一个充满极端压力与永恒黑暗的世界。",
      "一支篮球队的运作方式如出一辙。控球后卫在浅水区活动，统观比赛的全局**循环**。内线大个子像深海**水流**一般在禁区中**迁徙**游弋。比赛的**潮汐**瞬息万变，每位球员都必须理解自己在球场上的**区域**。**沉积物**随时间日积月累——习惯、默契、信任。",
      "最成功的球队宛如健康的**海洋**生态系统：多元、平衡、深度互联。球队中的每个生物体都有其不可替代的角色，而最强的**共生**关系铸就了胜利篮球。理解团队动力学就如同探索海洋——你需要欣赏每一个层次。"
    ],
    wordRange: { start: 90, end: 104 },
    scienceLabel: "🌊 海洋学",
    sportsLabel: "🏀 团队协作",
    latinPoem: {"verse": "Mare profundum et infinitum est. — Seneca", "verseHTML":
       "<em>Mare profundum et infinitum est.</em><br><span style='font-size:13px;color:var(--text-muted)'>— Seneca, <em>Naturales Quaestiones</em></span>", "translation": "海洋深邃而无限。", "connection": "拉丁语 mare (海) 是 marine、maritime 的词根。profundum (深处) 与 depth、profound 同源。塞涅卡用这句话描述海洋的深不可测，正如一支优秀球队的战术深度(depth)永无止境。", "word": "depth"}
  },
  {
    id: 8,
    title: "Viral Comebacks and Team Immunity",
    cnTitle: "病毒式复出与团队免疫",
    intro: "从病毒学到篮球：一支球队如何在逆境中重建「免疫力」？",    slides: [
      {
      "icon": "🦠",
      "title": "失利习惯和冲突像病原体一样在更衣室扩散",
      "subtitle": "Negative Habits Spread Like Pathogens"
      },
      {
      "icon": "🛡️",
      "title": "冠军球队对负面影响有极强的抵抗力",
      "subtitle": "Championship Teams Build Strong Immunity"
      },
      {
      "icon": "💉",
      "title": "经验积累是对未来挫折的最佳疫苗",
      "subtitle": "Experience Is the Best Vaccine"
      },
      {
      "icon": "📈",
      "title": "自信的爆发力和消极一样快能传播",
      "subtitle": "Confidence Outbreaks Spread Fast"
      }
      ],

    paragraphs: [
      "Just as a **virus** invades a host, adversity can attack a team. An **infection** of losing habits or a **pathogen** of conflict can spread quickly through a locker room. But great teams build **immunity** — a collective **resistance** to negative influences. The **immune** system of a championship team is remarkably strong.",
      "When a star player suffers a **chronic** injury, the entire team must adapt. Doctors **diagnose** the problem, prescribe **therapy**, and develop a recovery plan. **Antibodies** in medicine are like a team's defensive schemes — they recognize threats and neutralize them. A **vaccine** against future setbacks comes from experience and preparation.",
      "The greatest comebacks in basketball history are like fighting an **epidemic** of doubt. Teams **recover** through systematic effort, strengthening their **cellular** structure — every player, every coach, every staff member. An **outbreak** of confidence can spread just as fast as one of negativity. The lesson: build your **immunity** before you need it."
    ],
    paragraphsCN: [
      "正如**病毒**入侵宿主，逆境同样会攻击一支球队。失败习惯的**感染**或内部冲突的**病原体**能在更衣室里迅速蔓延。但伟大的球队会建立起**免疫力**——一种对负面影响的集体**抵抗力**。冠军球队的**免疫**系统异常强大。",
      "当一名球星遭遇**慢性**伤病，整支球队都必须调整适应。医生**诊断**问题，开具**治疗**方案，制定康复计划。医学中的**抗体**就好比球队的防守体系——它们识别威胁并将其中和。对抗未来挫折的**疫苗**，来自于经验与充分准备。",
      "篮球史上最伟大的逆转，犹如对抗一场弥漫全队的怀疑**流行病**。球队通过系统性的努力一步步**恢复**，不断强化自身的细胞结构——每一名球员、每一位教练、每一个工作人员。信心的**爆发**可以和消极情绪一样迅速蔓延。启示只有一条：在你需要它之前，先建立起你的**免疫力**。"
    ],
    wordRange: { start: 105, end: 119 },
    scienceLabel: "🦠 病毒学",
    sportsLabel: "🏀 逆境复出",
    latinPoem: {"verse": "Post tenebras spero lucem. — Vulgata", "verseHTML":
       "<em>Post tenebras spero lucem.</em><br><span style='font-size:13px;color:var(--text-muted)'>— Liber Iob (Vulgata Latina)</span>", "translation": "黑暗之后，我期盼光明。", "connection": "拉丁语 tenebrae (黑暗) 与英语的'暗喻'无关，但这里传达的是最质朴的真理。recover (恢复) 和 resistance (抵抗) 是对逆境最好的回应——像约伯一样，在黑暗之后重获光明。", "word": "recover"}
  },
  {
    id: 9,
    title: "Artificial Intelligence and the Future of Scouting",
    cnTitle: "人工智能与球探的未来",
    intro: "AI 正在改变球队寻找天才的方式。算法能发现人类球探看不到的东西。",    slides: [
      {
      "icon": "🤖",
      "title": "AI算法处理海量数据，识别人类看不到的模式",
      "subtitle": "Machine Learning Sees What Humans Miss"
      },
      {
      "icon": "🧠",
      "title": "神经网络模仿人脑，用数百个参数分类球员",
      "subtitle": "Neural Networks Classify Every Player"
      },
      {
      "icon": "📹",
      "title": "AI系统从无数比赛视频中学习识别天赋",
      "subtitle": "AI Trains on Thousands of Game Videos"
      },
      {
      "icon": "🔮",
      "title": "人类洞察力与机器智能的完美结合",
      "subtitle": "Human Insight + Machine Intelligence"
      }
      ],

    paragraphs: [
      "**Artificial** **intelligence** is revolutionizing how teams discover talent. **Machine** learning **algorithms** process vast amounts of **data** to identify **patterns** that human scouts might miss. **Neural** **networks** — modeled after the human brain — **classify** players by hundreds of different **parameters**.",
      "These AI systems **train** on thousands of game videos, learning to recognize subtle **patterns** in player movement and decision-making. The **recognition** of potential in young athletes has become more **precise** than ever. Teams **simulate** different game scenarios to **optimize** their draft strategies.",
      "The goal is not to replace human judgment but to enhance it. After each **iteration** of analysis, the AI **model** becomes smarter. Coaches can now **predict** a player's development trajectory with unprecedented accuracy. The future of **intelligence** in sports is a partnership between human insight and machine **intelligence**."
    ],
    paragraphsCN: [
      "**人工****智能**正在彻底颠覆球队发现人才的方式。**机器**学习**算法**处理海量**数据**，识别出人类球探可能忽略的**模式**。**神经****网络**——模仿人脑构建而成——通过数百个**参数**对球员进行**分类**。",
      "这些AI系统通过数千段比赛视频进行**训练**，学会捕捉球员动作和决策中那些微妙的**模式**。对年轻运动员潜力的**识别**比以往任何时候都更加精准。球队**模拟**不同的比赛场景以**优化**选秀策略。",
      "目标不是取代人类判断，而是增强它。经过每一次分析的**迭代**，AI**模型**都变得更加智能。教练如今可以以前所未有的准确性来**预测**球员的发展轨迹。体育**智能**的未来，是人类洞察力与机器**智能**的合作共赢。"
    ],
    wordRange: { start: 120, end: 134 },
    scienceLabel: "🤖 人工智能",
    sportsLabel: "🏀 球探技术",
    latinPoem: {"verse": "Scientia potentia est. — Bacon (echoing Latin tradition)", "verseHTML":
       "<em>Scientia potentia est.</em><br><span style='font-size:13px;color:var(--text-muted)'>— Francis Bacon, <em>Meditationes Sacrae</em> (ex traditione Latina)</span>", "translation": "知识就是力量。", "connection": "拉丁语 scientia (知识、知道) 与 science、consciousness 同源。在 AI 时代，知识不仅来自人类智慧(intelligentia)，也来自机器(machina)的数据分析和模式(pattern)识别。", "word": "intelligence"}
  },
  {
    id: 10,
    title: "The Psychology of Championship Flow",
    cnTitle: "冠军心流的心理学",
    intro: "为什么有些球员在关键时刻总能发挥最佳水平？心理学的答案。",    slides: [
      {
      "icon": "🧠",
      "title": "心流状态：高度专注，一切变得毫不费力",
      "subtitle": "Flow: Effortless Peak Performance"
      },
      {
      "icon": "💪",
      "title": "韧性是所有冠军心态的基石",
      "subtitle": "Resilience Is the Foundation of Greatness"
      },
      {
      "icon": "🎯",
      "title": "在心里预演成功，建立不可动摇的自信",
      "subtitle": "Visualize Success, Build Unshakeable Confidence"
      },
      {
      "icon": "⛰️",
      "title": "心态是运动员身上最重要的肌肉",
      "subtitle": "The Mind Is the Strongest Muscle"
      }
      ],

    paragraphs: [
      "The **psychology** of peak **performance** reveals a fascinating state called \"flow.\" When a player enters this state of heightened **consciousness**, everything feels effortless. **Focus** becomes absolute, **emotion** is channeled into positive energy, and **motivation** reaches its highest level. This is where champions are made.",
      "**Resilience** is the foundation of a championship **mindset**. Players with strong mental **discipline** can overcome **anxiety** and self-doubt. They **visualize** success before it happens, building unshakeable **confidence**. The ability to **achieve** greatness under pressure separates legends from average players.",
      "To reach your **peak**, you must believe in your **potential** and work systematically toward your goals. **Psychology** teaches us that the mind is the most powerful muscle in an athlete's body. With the right **mindset**, anything is **achievable**. The science of **motivation** reminds us: greatness is not a gift — it is a choice."
    ],
    paragraphsCN: [
      "巅峰**表现**的**心理学**揭示了一种令人着迷的状态，名为“心流”。当球员进入这种高度**意识**状态时，一切都变得毫不费力。**专注**变得绝对，**情绪**被引导为正向能量，**动机**攀升至最高水平。这就是冠军诞生的地方。",
      "**韧性**是冠军**心态**的基石。拥有强大心理**纪律**的球员能够克服**焦虑**与自我怀疑。他们在成功到来之前就在心中**想象**它，从而建立起不可动摇的**自信**。在重压之下仍能**实现**伟大的能力，正是传奇与普通球员的分水岭。",
      "要抵达你的**巅峰**，就必须相信自身的**潜力**，并系统性地朝着目标迈进。**心理学**告诉我们，大脑是运动员身体中最强大的肌肉。拥有正确的**心态**，一切皆**可实现**。**动机**科学提醒我们：伟大不是一种天赋——而是一种选择。"
    ],
    wordRange: { start: 135, end: 149 },
    scienceLabel: "🧠 心理学",
    sportsLabel: "🏀 冠军心态",
    latinPoem: {"verse": "Nosce te ipsum. — Cicero (Greek origin, Latinized)", "verseHTML":
       "<em>Nosce te ipsum.</em><br><span style='font-size:13px;color:var(--text-muted)'>— Cicero ad templum Apollinis Delphici (Γνῶθι σεαυτόν)</span>", "translation": "认识你自己。", "connection": "拉丁语 cognoscere (知道、认识) 与 cognition 同源。德尔斐神庙上的这句铭文是心理学(psychologia)最古老的宣言——认识自己的心灵(animus)，才能达到巅峰(apex)表现。", "word": "psychology"}
  }
];
