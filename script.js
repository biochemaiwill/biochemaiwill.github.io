const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const translations = {
  en: {
    metaTitle: 'Tianxiang Wu — AI × Drug Discovery',
    metaDescription: 'Tianxiang Wu — research profile in AI for drug discovery, scientific information extraction, and molecular representation learning.',
    langButton: '中文',
    langLabel: 'Switch to Chinese',
    'brand.name': 'Tianxiang Wu',
    'nav.profile': 'Profile',
    'nav.research': 'Research',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.links': 'Links',
    status: 'Researching · 2026',
    'hero.domain': 'AI × Drug Discovery',
    'hero.profile': 'Research profile',
    'hero.name.first': 'Tianxiang',
    'hero.name.last': 'Wu',
    'hero.cnName': '吴天翔',
    'hero.lede': 'Building <em>reliable scientific data systems</em> and <em>representation learning methods</em> for computational drug discovery.',
    'portrait.kicker': 'Academic profile',
    'portrait.name': 'Tianxiang Wu / 吴天翔',
    'portrait.desc': 'Computer Science undergraduate · AI for Drug Discovery',
    'portrait.badge1': 'National Scholarship',
    'portrait.badge2': 'Bioinformatics · CCF A',
    'portrait.badge3': 'Rank 2 / 96',
    'visual.topline': 'RESEARCH GRAPH / LIVE',
    'visual.title': 'Research map',
    'visual.desc': 'An abstract network linking scientific data, molecular models, protein structure and drug discovery.',
    'visual.caption': 'Evidence → Representation → Prediction',
    'graph.data1': 'SCIENTIFIC',
    'graph.data2': 'DATA',
    'graph.protein1': 'PROTEIN',
    'graph.protein2': 'STRUCTURE',
    'graph.model1': 'AI MODEL',
    'graph.model2': 'REPRESENTATION',
    'graph.drug1': 'DRUG',
    'graph.drug2': 'DISCOVERY',
    'facts.current.label': 'Current',
    'facts.current.org': 'Tsinghua AIR',
    'facts.current.value': 'Research Intern',
    'facts.education.label': 'Education',
    'facts.education.org': 'Xidian University',
    'facts.education.value': 'Computer Science',
    'facts.focus.label': 'Focus',
    'facts.focus.org': 'AI4Science',
    'facts.focus.value': 'Data · Molecules · Proteins',
    scroll: 'Scroll to research',
    'profile.kicker': 'Academic snapshot',
    'profile.heading': 'An academic profile across <em>AI for Science.</em>',
    'profile.summary': 'Computer Science undergraduate at Xidian University with research training across AIDD agents, ADMET data systems, molecular representation learning and peptide modeling.',
    'metric.gpa.label': 'GPA',
    'metric.gpa.note': 'Core average 92+',
    'metric.rank.label': 'Rank',
    'metric.rank.note': 'Track ranking',
    'metric.english.label': 'English',
    'metric.english.note': 'Literature reading',
    'metric.scholarship.label': 'Scholarship',
    'metric.scholarship.value': 'National',
    'metric.scholarship.note': '2024-2025',
    'profile.awards.kicker': 'Honors',
    'profile.awards.title': 'Scholarships & competitions',
    'profile.awards.item1': 'National Scholarship for undergraduates, 2024-2025.',
    'profile.awards.item2': 'Lenovo Scholarship, 2025-2026, the only recipient in the grade.',
    'profile.awards.item3': 'Xinghuo Cup LLM Agent track university first prize.',
    'profile.awards.item4': 'Xinghuo Cup academic A-track school preliminary special prize and first prize.',
    'profile.outputs.kicker': 'Outputs',
    'profile.outputs.title': 'Papers & manuscripts',
    'profile.outputs.item1': 'Bioinformatics paper on peptide engineering language models, accepted in a CCF A journal as second author / undergraduate lead author.',
    'profile.outputs.item2': '3D-MPG molecular pretraining manuscript submitted to AAAI 2027, a CCF A conference, as second author / undergraduate lead author.',
    'profile.outputs.item3': 'Peptide property prediction benchmark manuscript submitted to Briefings in Bioinformatics, a JCR Q1 journal.',
    'profile.broader.kicker': 'Identity & service',
    'profile.broader.title': 'Leadership, public work & arts',
    'profile.broader.item1': 'Probationary CPC member; Outstanding Communist Youth League Member Model, one of ten across the university.',
    'profile.broader.item2': 'Community second-level grid worker, with 714 hours of volunteer service across community, education and public-service activities.',
    'profile.broader.item3': 'Cambridge summer visiting program project lead, Xidian Symphony Orchestra violinist, and student committee service in class.',
    'credentials.kicker': 'Selected records',
    'credentials.title': 'Scholarships, publications, honors and campus engagement.',
    'credentials.nationalScholarship': 'National Scholarship certificate, 2024-2025.',
    'credentials.bioAccepted': 'ORCID publication record for the Bioinformatics paper.',
    'credentials.bioTitle': 'Peptide engineering language model paper, second author / undergraduate lead author.',
    'credentials.aaai': '3D-MPG manuscript submitted to AAAI 2027, CCF A conference.',
    'credentials.bib': 'Peptide property prediction benchmark manuscript submitted to Briefings in Bioinformatics.',
    'credentials.youthHonor': 'Outstanding Communist Youth League Member Model profile poster.',
    'credentials.xinghuoSpecial': 'Xinghuo Cup school-level special prize for task-adaptive molecular pretraining.',
    'credentials.xinghuoFirst': 'Xinghuo Cup university first prize / school-level first prize for an on-device AI campus application.',
    'credentials.cambridge': 'Certificate of completion from the St Edmund\'s Global Programme in Computer Science and Coding.',
    'credentials.defense': 'National Scholarship defense scene.',
    'credentials.study': 'Study and mentoring work beyond coursework.',
    'credentials.meeting': 'Student committee and campus service work.',
    'ticker.aidd': 'AI for Drug Discovery',
    'ticker.ie': 'Scientific Information Extraction',
    'ticker.admet': 'ADMET Data Infrastructure',
    'ticker.mrl': 'Molecular Representation Learning',
    'ticker.protein': 'Protein Modeling',
    'research.kicker': 'Selected research',
    'research.heading': 'From messy evidence<br>to <em>useful models.</em>',
    'research.summary': 'Current work centers on scientific data extraction, context-aware molecular modeling, and computational drug discovery.',
    'project1.type': '01 / Data agents and ADMET modeling',
    'status.ongoing': 'Ongoing',
    'project1.title': 'Patent agents and<br><em>condition-aware ADMET</em>',
    'project1.desc': 'At Tsinghua AIR ATOM Lab, building an agent-driven patent extraction and quality-control system for molecular structures, ADMET endpoints, assay conditions, values and units; extending it into a unified two-tower ADMET prediction framework.',
    'project2.type': '02 / Peptide engineering',
    'status.research': 'Research',
    'project2.title': 'Peptide language models<br><em>and property benchmarks</em>',
    'project2.desc': 'Built and trained an instruction-tuned peptide language model with LoRA, covering function description, sequence design, property prediction and optimization; related outputs include Bioinformatics (CCF A) and a Briefings in Bioinformatics submission (JCR Q1).',
    'project3.type': '03 / Molecular pretraining and agents',
    'status.exploration': 'Exploration',
    'project3.title': '3D-MPG, platforms<br><em>and PharmAgent</em>',
    'project3.desc': 'Leading or contributing to 3D molecular pretraining, a task-adaptive molecular pretraining platform, and PharmAgent workflows; 3D-MPG has been submitted to AAAI 2027, a CCF A conference.',
    'tag.llm': 'LLM Agents',
    'tag.patent': 'Patent Mining',
    'tag.quality': 'Data Quality',
    'tag.multitask': 'Multitask',
    'tag.assay': 'Assay Context',
    'tag.protein': 'Protein Modeling',
    'tag.screening': 'Virtual Screening',
    'about.kicker': 'About',
    'about.question': 'I care about one question:',
    'about.heading': 'How do we make AI systems <em>scientifically useful</em>, not just benchmark-good?',
    'about.lede': 'I am a Computer Science undergraduate at Xidian University and a research intern at the Institute for AI Industry Research (AIR), Tsinghua University.',
    'about.interests': 'My current interests include AI for Drug Discovery, patent-scale scientific information extraction, high-quality ADMET data construction, and representation learning for molecules and proteins.',
    'about.systems': 'I am especially interested in systems that connect robust data infrastructure with predictive models that remain useful outside curated benchmarks.',
    'principle1.title': 'Evidence first',
    'principle1.desc': 'Predictions should remain traceable to scientific evidence.',
    'principle2.title': 'Context matters',
    'principle2.desc': 'Model assay and experimental context, not only molecules.',
    'principle3.title': 'Quality is research',
    'principle3.desc': 'Data quality is part of the scientific method, not cleanup.',
    'experience.kicker': 'Experience',
    'experience.heading': 'Academic trajectory.',
    'experience.summary': 'Computer science → AI4Science → drug discovery.',
    'timeline.current': 'CURRENT',
    'timeline.intern.place': 'Tsinghua University · Institute for AI Industry Research',
    'timeline.intern.title': 'Research Intern',
    'timeline.intern.desc': 'AI for Drug Discovery, scientific data extraction, and autonomous research systems.',
    'timeline.undergrad': 'UNDERGRAD',
    'timeline.degree.place': 'Xidian University',
    'timeline.degree.title': 'B.Sc. · Computer Science & Technology',
    'timeline.degree.desc': 'Computer science training with a research focus on AI for scientific discovery.',
    'outputs.kicker': 'Publications & outputs',
    'outputs.heading': 'Published and submitted<br><em>research outputs.</em>',
    'outputs.desc': 'The publication record is listed directly rather than hidden behind a future-update placeholder.',
    'outputs.orcid': 'View ORCID record',
    'pub1.status': 'Published / accepted · Bioinformatics · <strong>CCF A</strong>',
    'pub1.desc': 'Second author / undergraduate lead author. The work connects instruction-tuned language modeling with peptide engineering tasks and has been accepted by Bioinformatics.',
    'pub2.status': 'Submitted · AAAI 2027 · <strong>CCF A</strong>',
    'pub2.desc': 'Second author / undergraduate lead author. The manuscript focuses on 3D molecular geometry pretraining for molecular representation learning.',
    'pub3.status': 'Submitted · Briefings in Bioinformatics · <strong>JCR Q1</strong>',
    'pub3.desc': 'Third author. The manuscript builds a systematic benchmark for peptide property prediction.',
    'contact.kicker': 'Research · Collaboration · Academic exchange',
    'contact.heading': 'Find me<br><em>online.</em>',
    'contact.github': 'Code & projects',
    'contact.orcid': 'Research identity',
    'footer.name': 'Tianxiang Wu',
    'footer.domain': 'AI × Drug Discovery',
    'footer.top': 'Back to top ↑'
  },
  zh: {
    metaTitle: '吴天翔 / Tianxiang Wu — AI × 药物发现',
    metaDescription: '吴天翔的研究主页：AI 药物发现、科学信息抽取、ADMET 数据与分子表征学习。',
    langButton: 'EN',
    langLabel: 'Switch to English',
    'brand.name': '吴天翔',
    'nav.profile': '概览',
    'nav.research': '研究',
    'nav.about': '关于',
    'nav.experience': '经历',
    'nav.links': '链接',
    status: '研究中 · 2026',
    'hero.domain': 'AI 药物发现',
    'hero.profile': '研究主页',
    'hero.name.first': '吴天翔',
    'hero.name.last': '药物发现',
    'hero.cnName': '计算机科学与技术 · AI 药物发现方向',
    'hero.lede': '构建用于计算药物发现的<em>可靠科学数据系统</em>与<em>表征学习方法</em>。',
    'portrait.kicker': '个人学术主页',
    'portrait.name': '吴天翔 / Tianxiang Wu',
    'portrait.desc': '计算机科学与技术本科生 · AI 药物发现方向',
    'portrait.badge1': '国家奖学金',
    'portrait.badge2': 'Bioinformatics · CCF A',
    'portrait.badge3': '专业方向 2 / 96',
    'visual.topline': '研究图谱 / LIVE',
    'visual.title': '研究图谱',
    'visual.desc': '连接科学数据、分子模型、蛋白结构与药物发现的抽象研究网络。',
    'visual.caption': '证据 → 表征 → 预测',
    'graph.data1': '科学',
    'graph.data2': '数据',
    'graph.protein1': '蛋白',
    'graph.protein2': '结构',
    'graph.model1': 'AI 模型',
    'graph.model2': '表征',
    'graph.drug1': '药物',
    'graph.drug2': '发现',
    'facts.current.label': '当前',
    'facts.current.org': '清华 AIR',
    'facts.current.value': '研究实习生',
    'facts.education.label': '教育',
    'facts.education.org': '西安电子科技大学',
    'facts.education.value': '计算机科学',
    'facts.focus.label': '方向',
    'facts.focus.org': 'AI for Science',
    'facts.focus.value': '数据 · 分子 · 蛋白质',
    scroll: '查看研究',
    'profile.kicker': '学术概览',
    'profile.heading': 'AI 药物发现方向的<em>本科科研档案。</em>',
    'profile.summary': '西安电子科技大学计算机科学与技术本科生，研究训练覆盖 AI 药物发现智能体、ADMET 数据系统、分子表征学习与多肽建模。',
    'metric.gpa.label': 'GPA',
    'metric.gpa.note': '核心课程均分 92+',
    'metric.rank.label': '排名',
    'metric.rank.note': '专业方向排名',
    'metric.english.label': '英语',
    'metric.english.note': '英文文献阅读',
    'metric.scholarship.label': '奖学金',
    'metric.scholarship.value': '国家奖学金',
    'metric.scholarship.note': '2024-2025',
    'profile.awards.kicker': '荣誉',
    'profile.awards.title': '奖学金与竞赛',
    'profile.awards.item1': '2024-2025 学年本科生国家奖学金。',
    'profile.awards.item2': '2025-2026 学年联想奖学金，年级唯一获奖者。',
    'profile.awards.item3': '星火杯“大模型 Agent”赛道校级一等奖。',
    'profile.awards.item4': '星火杯学术 A 类赛道院赛特等奖、一等奖。',
    'profile.outputs.kicker': '成果',
    'profile.outputs.title': '论文与稿件',
    'profile.outputs.item1': '多肽工程语言模型论文被 Bioinformatics 接收，CCF A 期刊，第二作者 / 本科生一作。',
    'profile.outputs.item2': '3D-MPG 分子预训练稿件投稿 AAAI 2027（CCF A），第二作者 / 本科生一作。',
    'profile.outputs.item3': '多肽性质预测系统性基准稿件投稿 Briefings in Bioinformatics，JCR Q1。',
    'profile.broader.kicker': '身份与服务',
    'profile.broader.title': '思想、职务与公共服务',
    'profile.broader.item1': '中共预备党员；优秀共青团员标兵，全校共十位。',
    'profile.broader.item2': '社区二级网格员，累计 714 小时志愿服务，覆盖社区、教育与公共服务活动。',
    'profile.broader.item3': '剑桥暑期访学项目负责人，西电交响乐团小提琴成员，并担任班级学习委员、心理委员等学生工作。',
    'credentials.kicker': '代表性材料',
    'credentials.title': '奖学金、论文、荣誉与校园经历。',
    'credentials.nationalScholarship': '2024-2025 学年本科生国家奖学金荣誉证书。',
    'credentials.bioAccepted': 'ORCID 公开记录：Bioinformatics 论文已发表。',
    'credentials.bioTitle': '多肽工程语言模型论文，第二作者 / 本科生一作。',
    'credentials.aaai': '3D-MPG 稿件投稿 AAAI 2027，CCF A 会议。',
    'credentials.bib': '多肽性质预测基准稿件投稿 Briefings in Bioinformatics。',
    'credentials.youthHonor': '优秀共青团员标兵宣传照。',
    'credentials.xinghuoSpecial': '星火杯院级特等奖：面向任务自适应的分子预训练平台。',
    'credentials.xinghuoFirst': '星火杯校级一等奖 / 院级一等奖：基于端侧 AI 的校园失物智能识别与管理应用。',
    'credentials.cambridge': '剑桥 St Edmund\'s Global Programme 计算机科学与编程项目结业证书。',
    'credentials.defense': '国家奖学金答辩现场。',
    'credentials.study': '课程之外的学习、交流与帮扶场景。',
    'credentials.meeting': '学生工作与校园服务场景。',
    'ticker.aidd': 'AI 药物发现',
    'ticker.ie': '科学信息抽取',
    'ticker.admet': 'ADMET 数据基础设施',
    'ticker.mrl': '分子表征学习',
    'ticker.protein': '蛋白质建模',
    'research.kicker': '代表性研究',
    'research.heading': '从混乱证据<br>到<em>可用模型。</em>',
    'research.summary': '当前工作聚焦于科学数据抽取、上下文感知的分子建模与计算药物发现。',
    'project1.type': '01 / 数据智能体与 ADMET 建模',
    'status.ongoing': '进行中',
    'project1.title': '专利抽取 Agent 与<br><em>条件感知 ADMET</em>',
    'project1.desc': '在清华 AIR ATOM Lab 推进面向专利的智能体抽取与质量控制系统，解析分子结构、ADMET endpoint、assay 条件、测量值与单位；并进一步设计面向 ADMET 的统一双塔预测框架。',
    'project2.type': '02 / 多肽工程',
    'status.research': '研究',
    'project2.title': '多肽语言模型与<br><em>性质预测基准</em>',
    'project2.desc': '负责肽指令微调大模型的结构搭建与训练实现，完成 LLaMA-2 LoRA 微调，以及功能描述、序列设计、性质预测、理化优化实验；相关成果包括 Bioinformatics（CCF A）和 Briefings in Bioinformatics 投稿（JCR Q1）。',
    'project3.type': '03 / 分子预训练与智能体',
    'status.exploration': '探索',
    'project3.title': '3D-MPG、平台<br><em>与 PharmAgent</em>',
    'project3.desc': '覆盖三维分子几何预训练、任务自适应分子预训练平台与药物研发多智能体工作流；3D-MPG 已投稿 AAAI 2027（CCF A），相关平台获星火杯院级特等奖。',
    'tag.llm': 'LLM 智能体',
    'tag.patent': '专利挖掘',
    'tag.quality': '数据质量',
    'tag.multitask': '多任务',
    'tag.assay': 'Assay 上下文',
    'tag.protein': '蛋白建模',
    'tag.screening': '虚拟筛选',
    'about.kicker': '关于',
    'about.question': '我关心一个问题：',
    'about.heading': '如何让 AI 系统<em>真正对科学有用</em>，而不只是 benchmark 表现好？',
    'about.lede': '我是西安电子科技大学计算机科学与技术专业本科生，目前在清华大学智能产业研究院（AIR）担任研究实习生。',
    'about.interests': '我的当前兴趣包括 AI 药物发现、专利尺度科学信息抽取、高质量 ADMET 数据构建，以及面向分子和蛋白质的表征学习。',
    'about.systems': '我尤其关注把稳健的数据基础设施与在精心整理 benchmark 之外仍然有用的预测模型连接起来的系统。',
    'principle1.title': '证据优先',
    'principle1.desc': '预测应能追溯到具体科学证据。',
    'principle2.title': '上下文重要',
    'principle2.desc': '不仅建模分子，也建模 assay 与实验上下文。',
    'principle3.title': '质量也是研究',
    'principle3.desc': '数据质量不是清理工作，而是科学方法的一部分。',
    'experience.kicker': '经历',
    'experience.heading': '学术轨迹。',
    'experience.summary': '计算机科学 → AI4Science → 药物发现。',
    'timeline.current': '当前',
    'timeline.intern.place': '清华大学智能产业研究院',
    'timeline.intern.title': '研究实习生',
    'timeline.intern.desc': 'AI 药物发现、科学数据抽取与自主研究系统。',
    'timeline.undergrad': '本科',
    'timeline.degree.place': '西安电子科技大学',
    'timeline.degree.title': '本科 · 计算机科学与技术',
    'timeline.degree.desc': '计算机科学训练，研究兴趣聚焦于面向科学发现的 AI。',
    'outputs.kicker': '论文与产出',
    'outputs.heading': '已发表与投稿中的<br><em>高水平研究产出。</em>',
    'outputs.desc': '这里直接列出论文与稿件状态，不再用“后续更新”弱化成果。',
    'outputs.orcid': '查看 ORCID 记录',
    'pub1.status': '已接收 / 已发表 · Bioinformatics · <strong>CCF A</strong>',
    'pub1.desc': '第二作者 / 本科生一作。工作将指令微调语言模型与多肽工程任务结合，已被 Bioinformatics 接收。',
    'pub2.status': '投稿中 · AAAI 2027 · <strong>CCF A</strong>',
    'pub2.desc': '第二作者 / 本科生一作。稿件聚焦三维分子几何预训练与分子表征学习。',
    'pub3.status': '投稿中 · Briefings in Bioinformatics · <strong>JCR Q1</strong>',
    'pub3.desc': '第三作者。稿件构建多肽性质预测的系统性基准。',
    'contact.kicker': '研究 · 合作 · 学术交流',
    'contact.heading': '在线<br><em>找到我。</em>',
    'contact.github': '代码与项目',
    'contact.orcid': '研究身份',
    'footer.name': '吴天翔',
    'footer.domain': 'AI 药物发现',
    'footer.top': '回到顶部 ↑'
  }
};

const getSavedLanguage = () => {
  try {
    return localStorage.getItem('siteLanguage');
  } catch {
    return null;
  }
};

const saveLanguage = (lang) => {
  try {
    localStorage.setItem('siteLanguage', lang);
  } catch {
    // Ignore storage failures; the language switch still works for this page view.
  }
};

const setLanguage = (lang) => {
  const activeLang = translations[lang] ? lang : 'en';
  const copy = translations[activeLang];

  document.documentElement.lang = activeLang === 'zh' ? 'zh-CN' : 'en';
  document.title = copy.metaTitle;
  document.querySelector('meta[name="description"]')?.setAttribute('content', copy.metaDescription);
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', copy.metaTitle);
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', copy.metaDescription);

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const value = copy[el.dataset.i18n];
    if (value) el.textContent = value;
  });

  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const value = copy[el.dataset.i18nHtml];
    if (value) el.innerHTML = value;
  });

  const toggle = document.querySelector('[data-lang-toggle]');
  if (toggle) {
    toggle.dataset.lang = activeLang;
    toggle.setAttribute('aria-label', copy.langLabel);
    toggle.setAttribute('aria-pressed', String(activeLang === 'zh'));
  }

  saveLanguage(activeLang);
};

const langToggle = document.querySelector('[data-lang-toggle]');
const queryLang = new URLSearchParams(window.location.search).get('lang');
const requestedLang = translations[queryLang] ? queryLang : getSavedLanguage();
setLanguage(requestedLang || 'en');
langToggle?.addEventListener('click', () => {
  const current = document.documentElement.lang === 'zh-CN' ? 'zh' : 'en';
  setLanguage(current === 'zh' ? 'en' : 'zh');
});

const header = document.querySelector('.site-header');
const onScroll = () => header?.classList.toggle('scrolled', window.scrollY > 24);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.09, rootMargin: '0px 0px -4% 0px' });

  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('visible'));
}

if (matchMedia('(pointer:fine)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const visual = document.querySelector('.visual-card');
  if (visual) {
    visual.addEventListener('mousemove', (e) => {
      const rect = visual.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      visual.style.transform = `perspective(900px) rotateX(${(-y * 3.2).toFixed(2)}deg) rotateY(${(x * 4).toFixed(2)}deg)`;
    });
    visual.addEventListener('mouseleave', () => {
      visual.style.transform = '';
    });
  }
}
