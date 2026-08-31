const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const translations = {
  en: {
    metaTitle: 'Tianxiang Wu personal homepage / wutianxiang | Xidian University · Tsinghua AIR',
    metaDescription: 'Tianxiang Wu, also searchable as Wu Tianxiang or wutianxiang, is a Computer Science undergraduate at Xidian University and a research intern at Tsinghua University Institute for AI Industry Research, working on AI for drug discovery, scientific information extraction, ADMET data and molecular representation learning.',
    langButton: '中文',
    langLabel: 'Switch to Chinese',
    'brand.name': 'Tianxiang Wu',
    'nav.profile': 'Profile',
    'nav.research': 'Research',
    'nav.about': 'About',
    'nav.outputs': 'Outputs',
    'nav.records': 'Records',
    'nav.experience': 'Experience',
    'nav.links': 'Links',
    status: 'Researching · 2026',
    'hero.domain': 'Computer Science · AI for Science',
    'hero.profile': 'Academic profile',
    'hero.name.first': 'Tianxiang',
    'hero.name.last': 'Wu',
    'hero.cnName': '吴天翔',
    'hero.searchAlias': 'Tianxiang Wu · Wu Tianxiang · wutianxiang · 吴天翔',
    'hero.lede': 'Building <em>reliable scientific data systems</em> and <em>representation learning methods</em> for computational drug discovery.',
    'portrait.kicker': 'Academic profile',
    'portrait.name': 'Tianxiang Wu / 吴天翔',
    'portrait.desc': 'Computer Science undergraduate · AI for Drug Discovery',
    'portrait.badge1': 'National Scholarship',
    'portrait.badge2': 'Bioinformatics · CCF A',
    'portrait.badge3': 'Rank 2 / 96',
    'hero.cta.research': 'View research',
    'hero.cta.outputs': 'View outputs',
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
    'mobile.kicker': 'Mobile overview',
    'mobile.title': 'Research, honors and projects at a glance',
    'mobile.rank': 'Track ranking',
    'mobile.paper': 'Published work',
    'mobile.scholarship.value': 'National',
    'mobile.scholarship': 'Scholarship',
    'mobile.service': 'Service record',
    'mobile.cta.research': 'View research projects',
    'mobile.cta.outputs': 'View papers and outputs',
    'spotlight.scholarship.kicker': 'Scholarship',
    'spotlight.scholarship.value': 'National',
    'spotlight.scholarship.note': '2024-2025 National Scholarship',
    'spotlight.paper.kicker': 'Publication',
    'spotlight.paper.value': 'CCF A',
    'spotlight.paper.note': 'Bioinformatics published paper',
    'spotlight.geometry.kicker': 'Submission',
    'spotlight.geometry.value': 'AAAI 2027',
    'spotlight.geometry.note': '3D molecular pretraining',
    'spotlight.rank.kicker': 'Academic',
    'spotlight.rank.note': 'Track ranking',
    'spotlight.service.kicker': 'Service',
    'spotlight.service.note': 'Volunteer service record',
    'spotlight.media.kicker': 'Feature',
    'spotlight.media.value': 'Media',
    'spotlight.media.note': 'College feature story',
    scroll: 'Scroll to research',
    'profile.kicker': 'Academic snapshot',
    'profile.heading': 'A profile across <em>research, honors and service.</em>',
    'profile.summary': 'Computer Science undergraduate at Xidian University with research training across AIDD agents, ADMET data systems, molecular representation learning and peptide modeling; leading a national innovation project and an NSFC General Program subproject.',
    'metric.gpa.label': 'GPA',
    'metric.gpa.note': 'Core average 92+',
    'metric.rank.label': 'Rank',
    'metric.rank.note': 'Track ranking',
    'metric.english.label': 'English',
    'metric.english.note': 'Literature reading',
    'metric.scholarship.label': 'Scholarship',
    'metric.scholarship.value': 'National',
    'metric.scholarship.note': '2024-2025',
    'impact.innovation.kicker': 'Project',
    'impact.innovation.value': 'National Innovation Program',
    'impact.innovation.note': 'Project lead',
    'impact.nsfc.kicker': 'Research',
    'impact.nsfc.value': 'NSFC General Program',
    'impact.nsfc.note': 'Subproject lead',
    'impact.pku.kicker': 'Collaboration',
    'impact.pku.value': 'Peking University Hospital of Stomatology',
    'impact.pku.note': 'Research collaboration proof',
    'impact.cambridge.kicker': 'International',
    'impact.cambridge.value': 'Cambridge visiting program',
    'impact.cambridge.note': 'Project first prize',
    'profile.awards.kicker': 'Honors',
    'profile.awards.title': 'Scholarships & competitions',
    'profile.awards.item1': '<strong class="highlight">National Scholarship</strong> for undergraduates, 2024-2025.',
    'profile.awards.item2': 'Lenovo Scholarship, 2025-2026, <strong class="highlight">the only recipient in the grade</strong>.',
    'profile.awards.item3': 'Xinghuo Cup LLM Agent track <strong class="highlight">university first prize</strong>.',
    'profile.awards.item4': 'Xinghuo Cup academic A-track school preliminary special prize and first prize.',
    'profile.outputs.kicker': 'Outputs',
    'profile.outputs.title': 'Papers & manuscripts',
    'profile.outputs.item1': 'Bioinformatics work on peptide engineering language models, published in a <strong class="highlight">CCF A</strong> journal as second author / undergraduate lead author.',
    'profile.outputs.item2': '3D-MPG molecular pretraining manuscript submitted to AAAI 2027, a <strong class="highlight">CCF A</strong> conference, as second author / undergraduate lead author.',
    'profile.outputs.item3': 'Peptide property prediction benchmark manuscript submitted to Briefings in Bioinformatics, a <strong class="highlight">JCR Q1</strong> journal.',
    'profile.broader.kicker': 'Identity & service',
    'profile.broader.title': 'Leadership, public work & arts',
    'profile.broader.item1': 'Probationary CPC member; Outstanding Communist Youth League Member Model, <strong class="highlight">one of ten across the university</strong>.',
    'profile.broader.item2': 'Community second-level grid worker, with <strong class="highlight">714 hours</strong> of volunteer service across community, education and public-service activities.',
    'profile.broader.item3': '<strong class="highlight">Cambridge University summer visiting program</strong> project lead; violinist in Xidian Symphony Orchestra, a Shaanxi high-level arts troupe and first-chair troupe of Shaanxi collegiate arts troupe.',
    'credentials.kicker': 'Selected records',
    'credentials.title': 'Scholarships, publications, honors and campus engagement',
    'credentials.nationalScholarship': 'National Scholarship, 2024-2025',
    'credentials.bioAccepted': 'ORCID detailed record for the Bioinformatics paper',
    'credentials.bioTitle': 'Peptide engineering language model work, second author / undergraduate lead author',
    'credentials.aaai': '3D-MPG manuscript submitted to AAAI 2027, CCF A conference',
    'credentials.bib': 'Peptide property prediction benchmark manuscript submitted to Briefings in Bioinformatics',
    'credentials.pkuCollaboration': 'Peking University Hospital of Stomatology collaboration proof',
    'credentials.youthHonor': 'Outstanding Communist Youth League Member Model',
    'credentials.xinghuoSpecial': 'Xinghuo Cup university first prize and college-level special prize for task-adaptive molecular pretraining',
    'credentials.lenovoScholarship': '2025 Lenovo Scholarship',
    'credentials.youthLeagueCert': 'Outstanding Communist Youth League Member, 2024-2025',
    'credentials.volunteerCert': 'Volunteer service for career-planning education work',
    'credentials.cambridgeCertificate': 'Cambridge University summer visiting program',
    'credentials.cambridgeFirstPrize': 'Cambridge visiting program first prize',
    'credentials.airForcePolitical': 'Air Force Engineering University thank-you letter for the graduate academic and cultural festival',
    'credentials.airForceGraduate': 'Air Force Engineering University performance record for the graduate academic and cultural festival',
    'credentials.defense': 'Career-planning sharing session for junior students',
    'credentials.study': 'Study, academic exchange and peer support beyond coursework',
    'credentials.meeting': 'Student committee and campus service work',
    'media.wechat.kicker': 'Public feature',
    'media.wechat.title': 'College WeChat feature',
    'media.wechat.desc': 'A college WeChat article presenting representative undergraduate work across research, academics, service and broader development',
    'media.wechat.link': 'Read on WeChat',
    'media.freshman.kicker': 'Freshman publicity',
    'media.freshman.title': 'Featured senior profile for incoming students',
    'media.freshman.desc': 'Click the card to switch between the front and back sides of the college publicity material',
    'media.freshman.link.front': 'View front side',
    'media.freshman.link.back': 'View back side',
    'life.kicker': 'Life moments',
    'life.heading': 'Research, service<br><em>and life in motion</em>',
    'life.summary': 'Research training, industry forum participation, academic sharing, international exchange and high-level orchestra performance',
    'life.researchInstitute': 'Computational Bioinformatics Institute research training',
    'life.air': 'Tsinghua AIR research internship',
    'life.orchestra': 'Xidian Symphony Orchestra performance',
    'life.tpdForum': 'TPD 2026 Forum · Shanghai',
    'arts.kicker': 'Arts record',
    'arts.title': 'Xidian Symphony Orchestra member',
    'arts.desc': 'Member of Xidian Symphony Orchestra, a Shaanxi high-level arts troupe and first-chair troupe of Shaanxi collegiate arts troupe; participated in major performances including the ICAI 2024 opening ceremony.',
    'arts.tag1': 'Shaanxi high-level arts troupe',
    'arts.tag2': 'First-chair collegiate arts troupe',
    'arts.tag3': 'ICAI 2024 opening ceremony',
    'life.careerSharing': 'Career-planning sharing session',
    'life.cambridge': 'Cambridge summer visit',
    'life.exchange': 'International academic exchange',
    'ticker.aidd': 'AI for Drug Discovery',
    'ticker.ie': 'Scientific Information Extraction',
    'ticker.admet': 'ADMET Data Infrastructure',
    'ticker.mrl': 'Molecular Representation Learning',
    'ticker.protein': 'Protein Modeling',
    'research.kicker': 'Selected research',
    'research.heading': 'From scientific data<br>to <em>drug discovery models.</em>',
    'research.summary': 'Representative work spans patent-scale data agents, condition-aware ADMET modeling, peptide engineering, 3D molecular pretraining, drug-discovery agents and protein-ligand foundation models.',
    'project1.type': '01 / Patent-scale scientific data agents',
    'status.ongoing': 'Ongoing',
    'status.applied': 'Applied',
    'status.academic': 'Academic',
    'project1.title': 'Patent extraction<br><em>and quality control</em>',
    'project1.desc': 'At Tsinghua AIR ATOM Lab, leading an agent-driven patent extraction and quality-control system for molecular structures, ADMET endpoints, assay conditions, values and units, with original evidence preserved for traceability.',
    'project2.type': '02 / Condition-aware prediction',
    'project2.title': 'Unified two-tower<br><em>ADMET modeling</em>',
    'project2.desc': 'Designing a unified two-tower ADMET prediction framework that jointly encodes molecular structure with endpoint, assay, experimental condition and unit semantics for conditional property prediction.',
    'project3.type': '03 / Peptide engineering language model',
    'status.research': 'Research',
    'project3.title': 'Instruction-tuned<br><em>peptide LLM</em>',
    'project3.desc': 'Built and trained a peptide instruction model with LLaMA-2 LoRA, covering function description, sequence design, property prediction and physicochemical optimization; published in Bioinformatics.',
    'project4.type': '04 / 3D molecular pretraining',
    'project4.title': '3D-MPG geometry<br><em>pretraining</em>',
    'project4.desc': 'Led a subproject under a National Natural Science Foundation of China General Program, introducing E(3)-equivariant heads and geometry-aware pretraining tasks for conformation generation and molecule-ligand interaction prediction; submitted to AAAI 2027.',
    'project5.type': '05 / Task-adaptive molecular platform',
    'project5.title': 'Molecular pretraining<br><em>platform</em>',
    'project5.desc': 'Built a task-adaptive molecular pretraining platform covering pretraining, fine-tuning, optimization, packaging and visualization; recognized with Xinghuo Cup university first prize and college-level special prize.',
    'project6.type': '06 / Drug-discovery agents',
    'status.exploration': 'Exploration',
    'project6.title': 'PharmAgent<br><em>research workflows</em>',
    'project6.desc': 'Working on PharmAgent, a multi-agent AI Scientist system for drug discovery with Router-Planner-Executor-Reflector collaboration, ReAct execution, replanning, memory and tool/skill integration.',
    'project7.type': '07 / Protein-ligand foundation model',
    'project7.title': 'Dual-tower<br><em>foundation model</em>',
    'project7.desc': 'Improving the sequence tower of a DrugCLIP-style protein-ligand foundation model with ESM-C representations and hyperbolic latent structure for OOD generalization across targets, scaffolds and low-data settings.',
    'project.link.outputs': 'View related outputs',
    'project.link.foundation': 'View model work',
    'project.link.paper': 'Open paper',
    'project.link.submission': 'View submission record',
    'project.link.award': 'View award record',
    'project.link.agent': 'View agent systems',
    'project.link.admet': 'View ADMET work',
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
    'outputs.desc': 'Selected published and submitted work is presented with current status, authorship role and supporting records.',
    'outputs.orcid': 'View ORCID record',
    'outputs.paperLink': 'View published paper',
    'scroll.hint': 'Drag or click arrows',
    'pub1.status': 'Published · Bioinformatics · <strong>CCF A</strong>',
    'pub1.desc': 'Second author / undergraduate lead author. The work connects instruction-tuned language modeling with peptide engineering tasks and was published in Bioinformatics.',
    'pub2.status': 'Submitted · AAAI 2027 · <strong>CCF A</strong>',
    'pub2.desc': 'Second author / undergraduate lead author. The manuscript focuses on 3D molecular geometry pretraining for molecular representation learning.',
    'pub2.action': 'View submission record',
    'pub3.status': 'Submitted · Briefings in Bioinformatics · <strong>JCR Q1</strong>',
    'pub3.desc': 'Third author. The manuscript builds a systematic benchmark for peptide property prediction.',
    'pub3.action': 'View manuscript record',
    'contact.kicker': 'Research · Collaboration · Academic exchange',
    'contact.heading': 'Find me<br><em>online.</em>',
    'contact.github': 'Code & projects',
    'contact.orcid': 'Research identity',
    'contact.qrLabel': 'Quick access',
    'contact.qrTitle': 'Scan to visit this homepage',
    'contact.copyLink': 'Copy link',
    'contact.copied': 'Copied',
    'footer.name': 'Tianxiang Wu',
    'footer.domain': 'AI × Drug Discovery',
    'footer.top': 'Back to top ↑'
  },
  zh: {
    metaTitle: '吴天翔个人主页 | Tianxiang Wu / wutianxiang | 西安电子科技大学 · 清华大学智能产业研究院',
    metaDescription: '吴天翔个人主页（Tianxiang Wu / Wu Tianxiang / wutianxiang）：西安电子科技大学计算机科学与技术本科生、清华大学智能产业研究院科研实习生，研究方向包括 AI 药物发现、科学信息抽取、ADMET 数据与分子表征学习。',
    langButton: 'EN',
    langLabel: 'Switch to English',
    'brand.name': '吴天翔',
    'nav.profile': '概览',
    'nav.research': '研究',
    'nav.about': '关于',
    'nav.outputs': '成果',
    'nav.records': '荣誉',
    'nav.experience': '经历',
    'nav.links': '链接',
    status: '研究中 · 2026',
    'hero.domain': '计算机科学 · AI for Science',
    'hero.profile': '个人学术主页',
    'hero.name.first': '吴天翔',
    'hero.name.last': 'Tianxiang Wu',
    'hero.cnName': '西安电子科技大学 · 计算机科学与技术',
    'hero.searchAlias': '吴天翔 · Tianxiang Wu · Wu Tianxiang · wutianxiang',
    'hero.lede': '构建用于计算药物发现的<em>可靠科学数据系统</em>与<em>表征学习方法</em>。',
    'portrait.kicker': '个人学术主页',
    'portrait.name': '吴天翔 / Tianxiang Wu',
    'portrait.desc': '计算机科学与技术本科生 · AI 药物发现方向',
    'portrait.badge1': '国家奖学金',
    'portrait.badge2': 'Bioinformatics · CCF A',
    'portrait.badge3': '专业方向 2 / 96',
    'hero.cta.research': '看研究项目',
    'hero.cta.outputs': '看论文成果',
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
    'facts.current.org': '清华大学智能产业研究院',
    'facts.current.value': '科研实习生',
    'facts.education.label': '教育',
    'facts.education.org': '西安电子科技大学',
    'facts.education.value': '计算机科学',
    'facts.focus.label': '方向',
    'facts.focus.org': 'AI for Science',
    'facts.focus.value': '数据 · 分子 · 蛋白质',
    'mobile.kicker': '手机版概览',
    'mobile.title': '研究、成果与经历概览',
    'mobile.rank': '专业方向排名',
    'mobile.paper': '已发表论文',
    'mobile.scholarship.value': '国家奖学金',
    'mobile.scholarship': '奖学金',
    'mobile.service': '志愿服务记录',
    'mobile.cta.research': '看研究项目',
    'mobile.cta.outputs': '看论文成果',
    'spotlight.scholarship.kicker': '奖学金',
    'spotlight.scholarship.value': '国家奖学金',
    'spotlight.scholarship.note': '2024-2025 学年本科生国家奖学金',
    'spotlight.paper.kicker': '论文',
    'spotlight.paper.value': 'CCF A',
    'spotlight.paper.note': 'Bioinformatics 已发表论文',
    'spotlight.geometry.kicker': '投稿',
    'spotlight.geometry.value': 'AAAI 2027',
    'spotlight.geometry.note': '三维分子预训练稿件',
    'spotlight.rank.kicker': '学业',
    'spotlight.rank.note': '专业方向排名',
    'spotlight.service.kicker': '服务',
    'spotlight.service.note': '累计志愿服务记录',
    'spotlight.media.kicker': '报道',
    'spotlight.media.value': '学院推文',
    'spotlight.media.note': '国奖榜样专题报道',
    scroll: '查看研究',
    'profile.kicker': '学术概览',
    'profile.heading': '本科阶段的<em>综合发展总览。</em>',
    'profile.summary': '西安电子科技大学计算机科学与技术本科生，研究训练覆盖 AI 药物发现智能体、ADMET 数据系统、分子表征学习与多肽建模；主持国家级大创项目，并担任国家自然科学基金面上项目子课题负责人。',
    'metric.gpa.label': 'GPA',
    'metric.gpa.note': '核心课程均分 92+',
    'metric.rank.label': '排名',
    'metric.rank.note': '专业方向排名',
    'metric.english.label': '英语',
    'metric.english.note': '英文文献阅读',
    'metric.scholarship.label': '奖学金',
    'metric.scholarship.value': '国家奖学金',
    'metric.scholarship.note': '2024-2025',
    'impact.innovation.kicker': '项目',
    'impact.innovation.value': '国家级大创项目',
    'impact.innovation.note': '项目负责人',
    'impact.nsfc.kicker': '科研',
    'impact.nsfc.value': '国家自然科学基金面上项目',
    'impact.nsfc.note': '子课题负责人',
    'impact.pku.kicker': '合作',
    'impact.pku.value': '北京大学口腔医院',
    'impact.pku.note': '科研合作证明',
    'impact.cambridge.kicker': '国际交流',
    'impact.cambridge.value': '剑桥大学访学',
    'impact.cambridge.note': '项目结项一等奖',
    'profile.awards.kicker': '荣誉',
    'profile.awards.title': '奖学金与竞赛',
    'profile.awards.item1': '2024-2025 学年本科生<strong class="highlight">国家奖学金</strong>。',
    'profile.awards.item2': '2025-2026 学年联想奖学金，<strong class="highlight">年级唯一</strong>获奖者。',
    'profile.awards.item3': '星火杯“大模型 Agent”赛道<strong class="highlight">校级一等奖</strong>。',
    'profile.awards.item4': '星火杯学术 A 类赛道院赛特等奖、一等奖。',
    'profile.outputs.kicker': '成果',
    'profile.outputs.title': '论文与稿件',
    'profile.outputs.item1': '多肽工程语言模型工作发表于 Bioinformatics，<strong class="highlight">CCF A</strong> 期刊，第二作者 / 本科生一作。',
    'profile.outputs.item2': '3D-MPG 分子预训练稿件投稿 AAAI 2027（<strong class="highlight">CCF A</strong>），第二作者 / 本科生一作。',
    'profile.outputs.item3': '多肽性质预测系统性基准稿件投稿 Briefings in Bioinformatics，<strong class="highlight">JCR Q1</strong>。',
    'profile.broader.kicker': '身份与服务',
    'profile.broader.title': '思想、服务与艺术实践',
    'profile.broader.item1': '<strong class="highlight">中共预备党员</strong>；连续两年优秀共青团员，获优秀共青团员标兵，<strong class="highlight">全校共十位</strong>。',
    'profile.broader.item2': '社区二级网格员，累计 <strong class="highlight">714 小时</strong>志愿服务，覆盖社区、教育与公共服务活动。',
    'profile.broader.item3': '<strong class="highlight">剑桥大学暑期访学项目</strong>负责人；加入校交响乐团（陕西省高水平艺术团、陕西省大学生艺术团首席团），参与重要文艺演出与比赛。',
    'credentials.kicker': '荣誉与记录',
    'credentials.title': '奖学金、论文、荣誉与校园经历',
    'credentials.nationalScholarship': '2024-2025 学年本科生国家奖学金',
    'credentials.bioAccepted': 'ORCID 详细记录：Bioinformatics 论文已发表',
    'credentials.bioTitle': '多肽工程语言模型工作，第二作者 / 本科生一作',
    'credentials.aaai': '3D-MPG 稿件投稿 AAAI 2027，CCF A 会议',
    'credentials.bib': '多肽性质预测基准稿件投稿 Briefings in Bioinformatics',
    'credentials.pkuCollaboration': '北京大学口腔医院科研合作证明',
    'credentials.youthHonor': '优秀共青团员标兵',
    'credentials.xinghuoSpecial': '星火杯校级一等奖、院赛特等奖：面向任务自适应的分子预训练平台',
    'credentials.lenovoScholarship': '2025联想奖学金',
    'credentials.youthLeagueCert': '2024-2025 年度优秀共青团员',
    'credentials.volunteerCert': '生涯规划教育学会志愿服务',
    'credentials.cambridgeCertificate': '剑桥大学暑期访学项目',
    'credentials.cambridgeFirstPrize': '剑桥大学访学项目结项一等奖',
    'credentials.airForcePolitical': '空军工程大学研究生学术文化节感谢信',
    'credentials.airForceGraduate': '空军工程大学研究生学术文化节参演记录',
    'credentials.defense': '向低年级同学进行生涯规划分享',
    'credentials.study': '课程之外的学习、交流与帮扶',
    'credentials.meeting': '学生工作与校园服务',
    'media.wechat.kicker': '公开报道',
    'media.wechat.title': '计科学子｜国奖榜样吴天翔',
    'media.wechat.desc': '学院微信公众号专题推文，呈现本科阶段在科研、学业、服务与综合发展方面的代表性经历',
    'media.wechat.link': '微信阅读原文',
    'media.freshman.kicker': '新生宣传',
    'media.freshman.title': '新生入学宣传优秀学长材料',
    'media.freshman.desc': '点击卡片切换正反面，展示学院面向新生宣传的优秀学长材料',
    'media.freshman.link.front': '查看正面',
    'media.freshman.link.back': '查看反面',
    'life.kicker': '综合发展',
    'life.heading': '科研、服务与<br><em>综合发展</em>',
    'life.summary': '科研实习、行业论坛交流、生涯规划分享、国际交流与高水平艺术团实践共同构成本科阶段的综合成长经历',
    'life.researchInstitute': '计算生物信息学研究所科研训练',
    'life.air': '清华大学智能产业研究院科研实习',
    'life.orchestra': '西电交响乐团演出',
    'life.tpdForum': 'TPD 2026论坛 · 上海',
    'arts.kicker': '艺术实践',
    'arts.title': '西电交响乐团成员',
    'arts.desc': '加入校交响乐团（陕西省高水平艺术团、陕西省大学生艺术团首席团），参与 ICAI2024 开幕式等重要文艺演出与比赛',
    'arts.tag1': '陕西省高水平艺术团',
    'arts.tag2': '陕西省大学生艺术团首席团',
    'arts.tag3': 'ICAI2024 开幕式',
    'life.careerSharing': '生涯规划分享',
    'life.cambridge': '剑桥大学访学',
    'life.exchange': '国际学术交流',
    'ticker.aidd': 'AI 药物发现',
    'ticker.ie': '科学信息抽取',
    'ticker.admet': 'ADMET 数据基础设施',
    'ticker.mrl': '分子表征学习',
    'ticker.protein': '蛋白质建模',
    'research.kicker': '代表性研究',
    'research.heading': '从科学数据<br>到<em>药物发现模型。</em>',
    'research.summary': '代表性研究覆盖专利尺度数据智能体、条件感知 ADMET 建模、多肽工程、三维分子预训练、药物研发智能体与蛋白-配体基础模型。',
    'project1.type': '01 / 专利尺度科学数据智能体',
    'status.ongoing': '进行中',
    'status.applied': '应用',
    'status.academic': '学术交流',
    'project1.title': '专利抽取<br><em>与质量控制</em>',
    'project1.desc': '在清华大学智能产业研究院 ATOM Lab 负责面向专利的智能体抽取与质量控制系统，解析分子结构、ADMET endpoint、assay 条件、测量值与单位，并保留原始证据与标准化结果以支持可追溯数据资源建设。',
    'project2.type': '02 / 条件感知性质预测',
    'project2.title': '统一双塔<br><em>ADMET 建模</em>',
    'project2.desc': '设计面向 ADMET 的统一双塔预测框架，将分子结构表征与 endpoint、assay、实验条件、单位等语义信息联合编码，把传统独立任务统一为条件化预测问题。',
    'project3.type': '03 / 多肽工程语言模型',
    'status.research': '研究',
    'project3.title': '指令调优<br><em>多肽 LLM</em>',
    'project3.desc': '负责肽指令微调大模型的结构搭建与训练实现，完成 LLaMA-2 LoRA 高效微调，以及功能描述、序列设计、性质预测、理化优化全流程实验；成果发表于 Bioinformatics。',
    'project4.type': '04 / 三维分子预训练',
    'project4.title': '3D-MPG 几何<br><em>预训练</em>',
    'project4.desc': '作为国家自然科学基金面上项目子课题负责人，在二维预训练模型中引入 EGNN 的 E(3) 等变头，设计分子适配打分与构象微调预训练任务，并投稿 AAAI 2027。',
    'project5.type': '05 / 任务自适应分子平台',
    'project5.title': '分子预训练<br><em>工程化平台</em>',
    'project5.desc': '负责模型预训练、微调优化、封装及可视化平台开发，构建可迭代、可扩展的任务自适应分子预训练系统；获星火杯校级一等奖和院赛特等奖。',
    'project6.type': '06 / 药物研发智能体',
    'status.exploration': '探索',
    'project6.title': 'PharmAgent<br><em>科研工作流</em>',
    'project6.desc': '参与构建面向药物研发的多智能体 AI Scientist 系统，采用 Router-Planner-Executor-Reflector 协作架构，结合 ReAct 执行、动态重规划、三级记忆与药物发现工具/Skill 集成。',
    'project7.type': '07 / 蛋白-配体基础模型',
    'project7.title': '双塔<br><em>foundation model</em>',
    'project7.desc': '基于 DrugCLIP 双塔框架改进蛋白-配体基础模型的序列塔，引入 ESM-C 蛋白表征与双曲潜空间，面向新靶点、新骨架和低样本场景提升 OOD 泛化能力。',
    'project.link.outputs': '查看相关成果',
    'project.link.foundation': '查看模型工作',
    'project.link.paper': '打开论文页面',
    'project.link.submission': '查看投稿记录',
    'project.link.award': '查看获奖记录',
    'project.link.agent': '查看智能体系统',
    'project.link.admet': '查看 ADMET 工作',
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
    'about.lede': '我是西安电子科技大学计算机科学与技术专业本科生，目前在清华大学智能产业研究院（AIR）担任科研实习生。',
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
    'timeline.intern.title': '科研实习生',
    'timeline.intern.desc': 'AI 药物发现、科学数据抽取与自主研究系统。',
    'timeline.undergrad': '本科',
    'timeline.degree.place': '西安电子科技大学',
    'timeline.degree.title': '本科 · 计算机科学与技术',
    'timeline.degree.desc': '计算机科学训练，研究兴趣聚焦于面向科学发现的 AI。',
    'outputs.kicker': '论文与产出',
    'outputs.heading': '已发表与投稿中的<br><em>高水平研究产出。</em>',
    'outputs.desc': '已发表论文与投稿中稿件列明发表状态、作者贡献及相关学术记录。',
    'outputs.orcid': '查看 ORCID 记录',
    'outputs.paperLink': '查看已发表论文',
    'scroll.hint': '拖动或点箭头查看更多',
    'pub1.status': '已发表 · Bioinformatics · <strong>CCF A</strong>',
    'pub1.desc': '第二作者 / 本科生一作。工作将指令微调语言模型与多肽工程任务结合，发表于 Bioinformatics。',
    'pub2.status': '投稿中 · AAAI 2027 · <strong>CCF A</strong>',
    'pub2.desc': '第二作者 / 本科生一作。稿件聚焦三维分子几何预训练与分子表征学习。',
    'pub2.action': '查看投稿记录',
    'pub3.status': '投稿中 · Briefings in Bioinformatics · <strong>JCR Q1</strong>',
    'pub3.desc': '第三作者。稿件构建多肽性质预测的系统性基准。',
    'pub3.action': '查看稿件记录',
    'contact.kicker': '研究 · 合作 · 学术交流',
    'contact.heading': '在线<br><em>找到我。</em>',
    'contact.github': '代码与项目',
    'contact.orcid': '研究身份',
    'contact.qrLabel': '快捷访问',
    'contact.qrTitle': '扫码访问个人主页',
    'contact.copyLink': '复制链接',
    'contact.copied': '已复制',
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

function updateMediaFlipLabels() {
  const lang = document.documentElement.lang === 'zh-CN' ? 'zh' : 'en';
  const copy = translations[lang];
  document.querySelectorAll('[data-flip-card]').forEach((card) => {
    const label = card.querySelector('.flip-trigger span');
    if (!label) return;
    label.textContent = card.classList.contains('is-flipped')
      ? copy['media.freshman.link.front']
      : copy['media.freshman.link.back'];
  });
}

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
  updateMediaFlipLabels();
};

const langToggle = document.querySelector('[data-lang-toggle]');
const queryLang = new URLSearchParams(window.location.search).get('lang');
const requestedLang = translations[queryLang] ? queryLang : getSavedLanguage();
const tickerTrack = document.querySelector('.ticker-track');
let tickerResizeTimer;
const setupTicker = () => {
  if (!tickerTrack) return;

  const groups = [...tickerTrack.querySelectorAll('.ticker-group')];
  const template = groups[0];
  if (!template) return;

  groups.slice(1).forEach((group) => group.remove());
  template.removeAttribute('aria-hidden');
  tickerTrack.style.animation = 'none';
  tickerTrack.style.transform = 'translateX(0)';

  const groupWidth = template.getBoundingClientRect().width || template.scrollWidth;
  if (!groupWidth) {
    tickerTrack.style.animation = '';
    tickerTrack.style.transform = '';
    return;
  }

  const minTrackWidth = window.innerWidth + groupWidth * 2;
  const copyCount = Math.max(4, Math.ceil(minTrackWidth / groupWidth));
  for (let i = 1; i < copyCount; i += 1) {
    const clone = template.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    tickerTrack.appendChild(clone);
  }

  tickerTrack.style.setProperty('--ticker-distance', `${groupWidth}px`);
  tickerTrack.style.animation = '';
  tickerTrack.style.transform = '';
};

setLanguage(requestedLang || 'zh');
setupTicker();
langToggle?.addEventListener('click', () => {
  const current = document.documentElement.lang === 'zh-CN' ? 'zh' : 'en';
  setLanguage(current === 'zh' ? 'en' : 'zh');
  setupTicker();
});

const copyButtons = document.querySelectorAll('[data-copy-url]');
copyButtons.forEach((button) => {
  const originalKey = button.dataset.i18n;
  const restoreLabel = () => {
    const lang = document.documentElement.lang === 'zh-CN' ? 'zh' : 'en';
    button.textContent = translations[lang][originalKey] || button.textContent;
  };

  button.addEventListener('click', async () => {
    const url = button.dataset.copyUrl;
    if (!url) return;

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(url);
      } else {
        const field = document.createElement('textarea');
        field.value = url;
        field.setAttribute('readonly', '');
        field.style.position = 'fixed';
        field.style.opacity = '0';
        document.body.appendChild(field);
        field.select();
        document.execCommand('copy');
        field.remove();
      }

      const lang = document.documentElement.lang === 'zh-CN' ? 'zh' : 'en';
      button.textContent = translations[lang]['contact.copied'];
      window.setTimeout(restoreLabel, 1400);
    } catch (error) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  });
});

document.querySelectorAll('[data-flip-card]').forEach((card) => {
  card.querySelectorAll('[data-flip-toggle]').forEach((button) => {
    button.setAttribute('aria-pressed', String(card.classList.contains('is-flipped')));
    button.addEventListener('click', () => {
      const flipped = card.classList.toggle('is-flipped');
      card.querySelectorAll('[data-flip-toggle]').forEach((control) => {
        control.setAttribute('aria-pressed', String(flipped));
      });
      updateMediaFlipLabels();
    });
  });
});
window.addEventListener('resize', () => {
  window.clearTimeout(tickerResizeTimer);
  tickerResizeTimer = window.setTimeout(setupTicker, 120);
});

const header = document.querySelector('.site-header');
const progress = document.querySelector('.scroll-progress');
const rootStyle = document.documentElement.style;
const onScroll = () => {
  header?.classList.toggle('scrolled', window.scrollY > 24);
  document.body.classList.toggle('show-mobile-nav', window.scrollY > window.innerHeight * 0.55);

  if (progress) {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = maxScroll > 0 ? Math.min(window.scrollY / maxScroll, 1) : 0;
    progress.style.transform = `scaleX(${ratio.toFixed(4)})`;
  }
};
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

if (matchMedia('(pointer:fine)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  window.addEventListener('pointermove', (event) => {
    rootStyle.setProperty('--cursor-x', `${event.clientX}px`);
    rootStyle.setProperty('--cursor-y', `${event.clientY}px`);
  }, { passive: true });
}

const revealEls = document.querySelectorAll('.reveal');
const revealIfInView = (el) => {
  const rect = el.getBoundingClientRect();
  if (rect.top < window.innerHeight * 0.96 && rect.bottom > 0) {
    el.classList.add('visible');
    return true;
  }
  return false;
};

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.09, rootMargin: '0px 0px -4% 0px' });

  revealEls.forEach((el) => {
    if (!revealIfInView(el)) observer.observe(el);
  });
} else {
  revealEls.forEach((el) => el.classList.add('visible'));
}

const navLinks = [...document.querySelectorAll('.nav a[href^="#"], .mobile-bottom-nav a[href^="#"]')];
const sectionMap = new Map(navLinks.map((link) => [link.getAttribute('href'), document.querySelector(link.getAttribute('href'))]));
const sections = [...sectionMap.entries()]
  .map(([href, section]) => ({ href, section }))
  .filter((item) => item.section)
  .sort((a, b) => (
    a.section.compareDocumentPosition(b.section) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1
  ));
let syncActiveNav = () => {};
if (navLinks.length && sections.length) {
  syncActiveNav = () => {
    const marker = window.scrollY + Math.min(260, window.innerHeight * 0.35);
    let active = sections[0];
    sections.forEach((item) => {
      if (item.section.offsetTop <= marker) active = item;
    });
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
      active = sections[sections.length - 1];
    }

    const hashMatch = sections.find((item) => item.href === window.location.hash);
    if (hashMatch) {
      const rect = hashMatch.section.getBoundingClientRect();
      if (rect.top <= Math.min(720, window.innerHeight * 0.82) && rect.bottom > 90) active = hashMatch;
    }

    navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === active.href));
  };
  syncActiveNav();
  window.addEventListener('scroll', syncActiveNav, { passive: true });
  window.addEventListener('resize', syncActiveNav);
}

const internalAnchorLinks = [...document.querySelectorAll('a[href^="#"]')];
if (internalAnchorLinks.length) {
  const prefersReducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const scrollToTarget = (target, smooth = true) => {
    const margin = parseFloat(getComputedStyle(target).scrollMarginTop) || 96;
    const top = Math.max(0, window.scrollY + target.getBoundingClientRect().top - margin);
    window.scrollTo({ top, behavior: smooth && !prefersReducedMotion ? 'smooth' : 'auto' });

    const horizontalScroller = target.closest('.credential-grid, .research-mosaic, .publication-list, .evidence-board, .life-gallery');
    if (horizontalScroller && horizontalScroller.scrollWidth > horizontalScroller.clientWidth + 8) {
      const left = Math.max(0, target.offsetLeft - (horizontalScroller.clientWidth - target.clientWidth) / 2);
      horizontalScroller.scrollTo({ left, behavior: smooth && !prefersReducedMotion ? 'smooth' : 'auto' });
    }
  };

  internalAnchorLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const hash = link.getAttribute('href');
      if (!hash || hash === '#') return;
      const target = document.querySelector(hash);
      if (!target) return;

      event.preventDefault();
      history.pushState(null, '', hash);
      scrollToTarget(target);
      syncActiveNav();
      revealEls.forEach(revealIfInView);
      [650, 1400].forEach((delay) => {
        window.setTimeout(() => {
          scrollToTarget(target, false);
          syncActiveNav();
          revealEls.forEach(revealIfInView);
        }, delay);
      });
    });
  });
}

document.documentElement.classList.add('js');

const horizontalScrollerSelector = '.credential-grid, .research-mosaic, .publication-list, .evidence-board, .life-gallery';
const horizontalScrollers = [...document.querySelectorAll(horizontalScrollerSelector)];

const setupHorizontalAffordances = () => {
  horizontalScrollers.forEach((scroller) => {
    let shell = scroller.parentElement?.classList.contains('scroll-shell') ? scroller.parentElement : null;

    if (!shell) {
      shell = document.createElement('div');
      shell.className = 'scroll-shell';
      scroller.parentNode.insertBefore(shell, scroller);
      shell.appendChild(scroller);

      const hint = document.createElement('div');
      hint.className = 'scroll-affordance';
      hint.setAttribute('aria-hidden', 'true');
      hint.innerHTML = '<span data-i18n="scroll.hint"></span><b></b>';
      shell.appendChild(hint);

      const progressRail = document.createElement('div');
      progressRail.className = 'scroll-rail';
      progressRail.setAttribute('aria-hidden', 'true');
      progressRail.innerHTML = '<i></i>';
      shell.appendChild(progressRail);

      const controls = document.createElement('div');
      controls.className = 'scroll-controls';
      controls.setAttribute('aria-hidden', 'true');
      controls.innerHTML = '<button class="scroll-button scroll-button-prev" type="button" tabindex="-1"><span></span></button><button class="scroll-button scroll-button-next" type="button" tabindex="-1"><span></span></button>';
      shell.appendChild(controls);

      hint.querySelector('[data-i18n="scroll.hint"]').textContent = translations[document.documentElement.lang === 'zh-CN' ? 'zh' : 'en']['scroll.hint'];

      controls.querySelector('.scroll-button-prev').addEventListener('click', () => {
        scroller.scrollBy({ left: -Math.max(scroller.clientWidth * 0.82, 280), behavior: 'smooth' });
      });
      controls.querySelector('.scroll-button-next').addEventListener('click', () => {
        scroller.scrollBy({ left: Math.max(scroller.clientWidth * 0.82, 280), behavior: 'smooth' });
      });
    }

    const updateState = () => {
      const maxScroll = scroller.scrollWidth - scroller.clientWidth;
      const scrollable = maxScroll > 8;
      const progressValue = scrollable ? Math.min(Math.max(scroller.scrollLeft / maxScroll, 0), 1) : 0;
      const prevButton = shell.querySelector('.scroll-button-prev');
      const nextButton = shell.querySelector('.scroll-button-next');

      shell.classList.toggle('is-scrollable', scrollable);
      shell.classList.toggle('can-scroll-left', scrollable && scroller.scrollLeft > 8);
      shell.classList.toggle('can-scroll-right', scrollable && scroller.scrollLeft < maxScroll - 8);
      shell.classList.toggle('has-been-scrolled', scrollable && scroller.scrollLeft > 24);
      shell.style.setProperty('--scroll-progress', progressValue.toFixed(4));
      scroller.classList.toggle('has-horizontal-scroll', scrollable);
      if (prevButton) prevButton.disabled = !scrollable || scroller.scrollLeft <= 8;
      if (nextButton) nextButton.disabled = !scrollable || scroller.scrollLeft >= maxScroll - 8;
    };

    updateState();
    scroller.addEventListener('scroll', updateState, { passive: true });
    window.addEventListener('resize', updateState);
    window.setTimeout(updateState, 450);
  });
};

setupHorizontalAffordances();

if (matchMedia('(pointer:fine)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const visual = document.querySelector('.portrait-card');
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

  document.querySelectorAll('.research-mosaic .project').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mx', `${x.toFixed(1)}%`);
      card.style.setProperty('--my', `${y.toFixed(1)}%`);
    });
    card.addEventListener('mouseleave', () => {
      card.style.removeProperty('--mx');
      card.style.removeProperty('--my');
    });
  });

  document.querySelectorAll('.credential-grid figure').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mx', `${x.toFixed(1)}%`);
      card.style.setProperty('--my', `${y.toFixed(1)}%`);
    });
    card.addEventListener('mouseleave', () => {
      card.style.removeProperty('--mx');
      card.style.removeProperty('--my');
    });
  });

  horizontalScrollers.forEach((scroller) => {
    let startX = 0;
    let startScroll = 0;
    let dragging = false;
    let moved = false;
    let suppressClick = false;

    scroller.addEventListener('pointerdown', (event) => {
      if (event.button !== 0 || scroller.scrollWidth <= scroller.clientWidth + 8) return;
      dragging = true;
      moved = false;
      startX = event.clientX;
      startScroll = scroller.scrollLeft;
      scroller.classList.add('is-dragging');
      scroller.setPointerCapture?.(event.pointerId);
    });

    scroller.addEventListener('pointermove', (event) => {
      if (!dragging) return;
      const delta = event.clientX - startX;
      if (Math.abs(delta) > 4) moved = true;
      scroller.scrollLeft = startScroll - delta;
    });

    const stopDrag = (event) => {
      if (!dragging) return;
      dragging = false;
      scroller.classList.remove('is-dragging');
      scroller.releasePointerCapture?.(event.pointerId);
      if (moved) {
        suppressClick = true;
        window.setTimeout(() => { suppressClick = false; }, 90);
      }
    };

    scroller.addEventListener('pointerup', stopDrag);
    scroller.addEventListener('pointercancel', stopDrag);
    scroller.addEventListener('click', (event) => {
      if (!suppressClick) return;
      event.preventDefault();
      event.stopPropagation();
    }, true);

    scroller.addEventListener('wheel', (event) => {
      const maxScroll = scroller.scrollWidth - scroller.clientWidth;
      if (maxScroll <= 8) return;

      const verticalIntent = Math.abs(event.deltaY) > Math.abs(event.deltaX);
      if (!verticalIntent) return;

      const atStart = scroller.scrollLeft <= 0;
      const atEnd = scroller.scrollLeft >= maxScroll - 1;
      if ((event.deltaY < 0 && atStart) || (event.deltaY > 0 && atEnd)) return;

      event.preventDefault();
      scroller.scrollBy({ left: event.deltaY, behavior: 'auto' });
    }, { passive: false });
  });
}

const setupImageStages = () => {
  const stageSelector = '.credential-grid a, .life-gallery a, .publication-card a, .publication-thumb';
  document.querySelectorAll(stageSelector).forEach((stage) => {
    const image = stage.querySelector('img');
    if (!image) return;

    const src = image.currentSrc || image.getAttribute('src');
    if (!src) return;

    const absoluteSrc = new URL(src, document.baseURI).href.replace(/"/g, '%22');
    stage.classList.add('image-stage');
    stage.style.setProperty('--preview-image', `url("${absoluteSrc}")`);
  });
};

setupImageStages();
window.addEventListener('load', setupImageStages);

const galleryLinks = document.querySelectorAll('.credential-grid a[href^="assets/"], .life-gallery a[href^="assets/"], .publication-card a[href^="assets/"]');
if (galleryLinks.length) {
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.setAttribute('role', 'dialog');
  lightbox.setAttribute('aria-modal', 'true');
  lightbox.innerHTML = '<button class="lightbox-close" type="button" aria-label="Close preview">×</button><img alt="" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="><div class="lightbox-caption"></div>';
  document.body.appendChild(lightbox);

  const lightboxImage = lightbox.querySelector('img');
  const lightboxCaption = lightbox.querySelector('.lightbox-caption');
  const closeLightbox = () => {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  };

  galleryLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const image = link.querySelector('img');
      if (!image) return;
      event.preventDefault();
      lightboxImage.src = link.href;
      lightboxImage.alt = image.alt || '';
      lightboxCaption.textContent = link.closest('figure, article')?.querySelector('figcaption, h3')?.textContent?.trim() || image.alt || '';
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  lightbox.querySelector('.lightbox-close')?.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) closeLightbox();
  });
  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox();
  });
}
