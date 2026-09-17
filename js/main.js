/**
 * PORTFOLIO JAVASCRIPT — ENG. WESAM BALALEM
 * Bilingual Arabic / English Engine, 3D Scroll-Following Mobile Mockup,
 * Live Typing Loop, Circuit Background Canvas, and Secure Admin Dashboard
 */

(function () {
  'use strict';
  // Ensure this file ONLY executes inside a client web browser (Client-Side Only)
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      module.exports = {};
    }
    return;
  }

  document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     0. BILINGUAL DICTIONARY (ARABIC & ENGLISH)
     ========================================================================== */
  const I18N = {
    ar: {
      langBtnLabel: "English",
      brandTitle: "بكالوريوس في الهندسة الكهربائية | Electrical & Web Designer",
      navHome: "الرئيسية",
      navAbout: "نبذة عني",
      navSkills: "المهارات والتخصص",
      navCv: "السيرة الذاتية (CV)",
      navProjects: "المشاريع والأعمال",
      navContact: "تواصل معي",
      navWaText: "واتساب",
      statusBadge: "متاح للمشاريع والحلول الهندسية والمنصات الذكية",
      locationBadge: "فلسطين — نابلس",
      ieeeBadge: "عضو فعال في جمعية IEEE",
      heroRole: "مهندس كهربائي | Electrical Engineer",
      heroUni: "جامعة النجاح الوطنية • نابلس 🇵🇸",
      heroSubtitle: "طالب هندسة كهربائية في جامعة النجاح • خبير طاقة شمسية ومتجددة • مصمم مواقع وخبير Vibe Coding",
      liveCardTitle: "نبذة هندسية وتنفيذية موثقة",
      liveStreamBadge: "● بث حي تفاعلي",
      btnProjects: "استكشف أبرز الأعمال والمشاريع",
      btnCv: "السيرة الذاتية (CV)",
      btnWa: "واتساب مباشر",
      stat1: "بكالوريوس هندسة كهربائية (النجاح)",
      stat2: "المدرسة الصناعية & طاقة شمسية",
      stat3: "عضوية فعالة ومشاريع ابتكارية",
      stat4: "Vibe Coding ودقة هندسية",
      aboutTag: "الرؤية والمسار الهندسي",
      aboutTitle: "شغف الهندسة الكهربائية وابتكار الويب الحديث",
      aboutDesc: "أجمع بين المعرفة العميقة في الدوائر الكهربائية والطاقة الكهروضوئية المتجددة، وبين الفن الرقمي لتصميم وبناء واجهات الويب العصرية بتقنيات الـ Vibe Coding.",
      aboutC1Title: "تأسيس وخبرة في الطاقة الشمسية (2022 – 2024)",
      aboutC1Text: "انطلقت مسيرتي من المدرسة الصناعية، حيث تعمقت عملياً في أنظمة الطاقة الشمسية الكهروضوئية (Solar PV)، تصميم الدوائر الميدانية، قياس الأحمال، وتطبيق معايير السلامة والتوزيع الكهربائي بكفاءة عالية.",
      aboutC2Title: "جامعة النجاح الوطنية (2024 – 2029)",
      aboutC2Text: "أواصل دراستي الأكاديمية للحصول على بكالوريوس الهندسة الكهربائية في جامعة النجاح الوطنية العريقة في نابلس. أركز على شبكات الطاقة الذكية، الدوائر الإلكترونية، والتحكم الآلي.",
      aboutC3Title: "عضو فعال في جمعية IEEE العالمية",
      aboutC3Text: "مشارك نشط في أنشطة فرع جمعية مهندسي الكهرباء والإلكترونيات (IEEE Student Branch) في جامعة النجاح، ومتابع لأحدث المؤتمرات، الابتكارات الهندسية، والمسابقات التقنية.",
      aboutC4Title: "تصميم المواقع و Vibe Coding المتقدم",
      aboutC4Text: "مهارة رقمية استثنائية في تحويل الأفكار إلى منصات ويب تفاعلية فائقة السرعة والجمال، باستخدام فلسفة الـ Vibe Coding التي تدمج الذكاء الاصطناعي مع التصميم الهندسي الرصين.",
      skillsTag: "المهارات والأدوات",
      skillsTitle: "الترسانة التقنية والهندسية",
      skillsDesc: "مزيج متكامل من العلوم الهندسية الصارمة والأدوات الرقمية المتقدمة.",
      skillsCat1: "الهندسة الكهربائية والطاقة المتجددة",
      skill1: "أنظمة الطاقة الشمسية الكهروضوئية (PV Solar Systems)",
      skill2: "تحليل وتصميم الدوائر الكهربائية (Circuit Analysis)",
      skill3: "برمجيات المحاكاة (MATLAB / Simulink / Proteus)",
      skill4: "حساب الأحمال والتمديدات والسلامة المهنية",
      skillsCat2: "تصميم وتطوير المواقع (Vibe Coding)",
      skill5: "Vibe Coding & AI-Driven Development",
      skill6: "تصميم واجهات المستخدم العصرية (Modern UI/UX Design)",
      skill7: "HTML5, Advanced CSS3, JavaScript التفاعلي",
      skill8: "تجاوب الشاشات والأداء السريع (Responsive & Speed Optimization)",
      cvZoomText: "انقر للمعاينة بملء الشاشة",
      cvBtnPreview: "معاينة الـ CV الرسمي (English)",
      cvBtnDownload: "طباعة وحفظ كـ PDF",
      cvNote: "💡 يمكنك تحديث ملف السيرة الذاتية بسهولة في أي وقت مستقبلاً.",
      cvLoc: "فلسطين • نابلس",
      cvDegreeTag: "🎓 التعليم الأكاديمي",
      cvDegreeTitle: "بكالوريوس في الهندسة الكهربائية",
      cvDegreeDesc: "جامعة النجاح الوطنية — دراسة تخصصية متعمقة في الدوائر، أنظمة القدرة، التحكم الآلي والشبكات الكهربائية.",
      cvSolarTag: "☀️ الطاقة المتجددة",
      cvSolarTitle: "المدرسة الصناعية & طاقة شمسية",
      cvSolarDesc: "تأسيس مهني وخبرة عملية في تصميم وتركيب محطات الطاقة الشمسية وحسابات الأحمال وأنظمة التحويل.",
      cvIeeeTag: "🏆 منظمة عالمية",
      cvIeeeTitle: "عضو فعال في جمعية IEEE",
      cvIeeeDesc: "فرع جامعة النجاح الطلابية، مشاركة في الندوات الهندسية والفعاليات التقنية ومواكبة معايير الهندسة الدولية.",
      cvWebTag: "💻 خبرة تصميم المواقع",
      cvWebTitle: "تصميم وبناء المنصات والمواقع",
      cvWebDesc: "ابتكار واجهات مستخدم مذهلة، تطبيقات متجاوبة وسريعة، وإتقان تقنيات الـ Vibe Coding المعاصرة.",
      cvEmailLabel: "✉️ البريد المعتمد: ",
      cvWaLabel: "واتساب: ",
      projectsTag: "معرض الأعمال",
      projectsTitle: "مشاريع هندسية وتصاميم مواقع مبتكرة",
      projectsDesc: "مختارات من النماذج الهندسية في الطاقة الشمسية والكهرباء ومنصات الويب المبنية بأسلوب Vibe Coding.",
      filterAll: "جميع المشاريع",
      filterSolar: "طاقة متجددة وشمسية",
      filterElectrical: "هندسة كهربائية ودوائر",
      filterWeb: "تصميم مواقع و Vibe Coding",
      p1Tag: "☀️ طاقة شمسية",
      p1Status: "محاكاة وتصميم معتمد",
      p1Title: "تصميم نظام طاقة شمسية هجين (Hybrid Solar System)",
      p1Desc: "دراسة وحسابات متكاملة لربط الألواح الكهروضوئية مع بطاريات الليثيوم والشبكة المحلية لتقليل استهلاك الطاقة بنسبة 70%.",
      p1Link: "طلب دراسة مماثلة ←",
      p2Tag: "💻 Vibe Coding",
      p2Status: "منصة تفاعلية حية",
      p2Title: "منصة بورتفوليو هندسية تفاعلية بـ 3D Parallax",
      p2Desc: "بناء واجهة بورتفوليو فائقة السرعة مع مجسمات تفاعلية للأجهزة ثلاثية الأبعاد وخلفية شبكات الدوائر المتحركة.",
      p2Link: "معاينة الواجهة الحالية ↑",
      p3Tag: "⚡ دوائر وتحكم",
      p3Status: "محاكاة رقمية",
      p3Title: "دائرة قياس وحماية كهربائية للجهد والتيار الزائد",
      p3Desc: "تصميم دائرة إلكترونية لحماية الأجهزة الحساسة من تذبذبات التيار مع فصل تلقائي وإشارات ضوئية وصوتية ذكية.",
      p3Link: "استفسر عن المشروع ←",
      p4Tag: "🏆 IEEE Event",
      p4Status: "مشاركة فاعلة",
      p4Title: "مبادرة كفاءة الطاقة وترشيد الاستهلاك المنزلي",
      p4Desc: "تقديم حلول هندسية تطبيقية لتحسين معامل القدرة (Power Factor) وتخفيض فاقد الطاقة في التمديدات السكنية والتجارية.",
      p4Link: "تواصل للنقاش ←",
      contactTag: "ابدأ المحادثة الآن",
      contactTitle: "تواصل مع المهندس وسام بلالم",
      contactDesc: "سواء كنت تبحث عن استشارة في أنظمة الطاقة الشمسية والكهربائية، أو ترغب في تصميم موقع ويب احترافي، أنا جاهز لخدمتك بأعلى جودة.",
      contactWaLabel: "واتساب مباشر (سريع الرد)",
      contactWaHint: "انقر لفتح الدردشة الفورية ⚡",
      contactEmailLabel: "البريد الإلكتروني المعتمد",
      contactEmailHint: "متاح للتعاون والفرص المهنية 📩",
      contactLocLabel: "الموقع الجغرافي",
      contactLocValue: "فلسطين — نابلس",
      contactLocHint: "جامعة النجاح الوطنية 🇵🇸",
      contactLinkedinLabel: "حساب LinkedIn الرسمي",
      contactLinkedinHint: "تواصل مهنياً عبر شبكة الأعمال 🌐",
      contactGithubLabel: "مستودع الأكواد (GitHub)",
      contactGithubHint: "استكشف المشاريع والأكواد البرمجية ⚡",
      formTitle: "إرسال رسالة مباشرة للمهندس",
      formActive: "جاهز للاستقبال",
      lblName: "الاسم الكريم",
      phName: "اكتب اسمك هنا...",
      lblContact: "رقم الهاتف أو البريد الإلكتروني",
      phContact: "للتواصل والرد عليك...",
      lblType: "نوع الموضوع أو المشروع",
      optSolar: "مشروع أنظمة طاقة شمسية ومتجددة",
      optWeb: "تصميم وتطوير موقع إلكتروني (Vibe Coding)",
      optEe: "استشارة في الهندسة الكهربائية والدوائر",
      optIeee: "تعاون أكاديمي أو أنشطة IEEE",
      optOther: "أخرى",
      lblMsg: "تفاصيل الرسالة",
      phMsg: "اكتب تفاصيل استفسارك أو مشروعك هنا...",
      btnSubmit: "إرسال الرسالة عبر الواتساب فوراً",
      footerTagline: "طالب هندسة كهربائية في جامعة النجاح الوطنية • خبير طاقة شمسية • مصمم مواقع و Vibe Coding",
      footerCopy: "جميع الحقوق محفوظة — المهندس وسام بلالم (Eng. Wesam Balalem) • فلسطين، نابلس.",
      footerPride: "صنع بكل فخر وشغف هندسي 🇵🇸",
      typingPhrases: [
        "طالب بكالوريوس في الهندسة الكهربائية بجامعة النجاح الوطنية، ومصمم مواقع محترف متخصص في الطاقة الشمسية المتجددة، تقنيات الـ Vibe Coding، والأنظمة الكهربائية والدوائر الذكية في فلسطين والشرق الأوسط.",
        "عضو فعال في جمعية مهندسي الكهرباء والإلكترونيات (IEEE) — أدمج الدقة الهندسية للدوائر والتحكم مع الإبداع الرقمي في بناء الواجهات التفاعلية فائقة الأداء.",
        "تأسيس عملي رصين من المدرسة الصناعية (2022–2024) في الطاقة الكهروضوئية، ومواصلة التميز الأكاديمي بجامعة النجاح (2024–2029) لتطوير حلول طاقة مستدامة.",
        "خبير ومطور Vibe Coding — تحويل الأفكار المعقدة إلى منصات ويب زجاجية عصرية سريعة ومتجاوبة مع أحدث المعايير العالمية."
      ]
    },
    en: {
      langBtnLabel: "العربية",
      brandTitle: "B.Sc. in Electrical Engineering | Web Designer & Vibe Coder",
      navHome: "Home",
      navAbout: "About Me",
      navSkills: "Skills & Matrix",
      navCv: "Curriculum Vitae",
      navProjects: "Featured Projects",
      navContact: "Contact",
      navWaText: "WhatsApp",
      statusBadge: "Available for Engineering Projects & Smart Solutions",
      locationBadge: "Palestine — Nablus",
      ieeeBadge: "Active Member, IEEE Society",
      heroRole: "Electrical Engineer",
      heroUni: "An-Najah National University • Nablus 🇵🇸",
      heroSubtitle: "Electrical Engineering Student at An-Najah • Solar Energy Specialist • Web Designer & Vibe Coder",
      liveCardTitle: "Verified Engineering & Executive Summary",
      liveStreamBadge: "● Live Interactive Stream",
      btnProjects: "Explore Featured Works & Projects",
      btnCv: "Curriculum Vitae (CV)",
      btnWa: "Direct WhatsApp",
      stat1: "B.Sc. Electrical Engineering (An-Najah)",
      stat2: "Industrial School & Solar PV",
      stat3: "Active Membership & Innovations",
      stat4: "Vibe Coding & Precision",
      aboutTag: "Vision & Engineering Pathway",
      aboutTitle: "Passion for Electrical Engineering & Modern Web Innovation",
      aboutDesc: "Fusing rigorous expertise in electrical circuits and solar PV systems with digital artistry in crafting modern, ultra-fast web interfaces using Vibe Coding.",
      aboutC1Title: "Solar PV Foundation & Experience (2022 – 2024)",
      aboutC1Text: "My journey began at the Industrial Vocational School, gaining extensive practical mastery in Solar PV systems, field circuit design, load calculations, and electrical distribution safety standards.",
      aboutC2Title: "An-Najah National University (2024 – 2029)",
      aboutC2Text: "Pursuing my B.Sc. in Electrical Engineering at the prestigious An-Najah National University in Nablus, specializing in smart grids, electronic circuits, and automated industrial control.",
      aboutC3Title: "Active Member in Global IEEE Society",
      aboutC3Text: "Active participant in the IEEE Student Branch at An-Najah University, engaging in engineering conferences, technical innovation workshops, and international competitions.",
      aboutC4Title: "Web Design & Advanced Vibe Coding",
      aboutC4Text: "Exceptional digital craftsmanship turning complex concepts into high-speed, interactive web platforms via Vibe Coding—uniting AI agility with engineering precision.",
      skillsTag: "Skills & Toolset",
      skillsTitle: "Technical & Engineering Arsenal",
      skillsDesc: "A comprehensive blend of rigorous electrical sciences and next-generation digital tools.",
      skillsCat1: "Electrical Engineering & Renewable Energy",
      skill1: "Photovoltaic Solar Systems (PV Systems)",
      skill2: "Electrical Circuit Analysis & Design",
      skill3: "Simulation Software (MATLAB / Simulink / Proteus)",
      skill4: "Load Calculation, Cabling & Electrical Safety",
      skillsCat2: "Web Design & Development (Vibe Coding)",
      skill5: "Vibe Coding & AI-Driven Development",
      skill6: "Modern UI/UX Design & Glassmorphism",
      skill7: "HTML5, Advanced CSS3, Interactive JavaScript",
      skill8: "Responsive Layouts & Speed Tuning",
      cvZoomText: "Click for Fullscreen Preview",
      cvBtnPreview: "Preview Official CV (English)",
      cvBtnDownload: "Print & Save to PDF",
      cvNote: "💡 CV credentials and documents can be updated anytime.",
      cvLoc: "Palestine • Nablus",
      cvDegreeTag: "🎓 Academic Education",
      cvDegreeTitle: "B.Sc. in Electrical Engineering",
      cvDegreeDesc: "An-Najah National University — in-depth study in circuits, power systems, automated control, and electrical grids.",
      cvSolarTag: "☀️ Renewable Energy",
      cvSolarTitle: "Industrial School & Solar Energy",
      cvSolarDesc: "Vocational foundation and field expertise in designing and commissioning solar plants, load calculations, and power inverters.",
      cvIeeeTag: "🏆 Global Organization",
      cvIeeeTitle: "Active Member in IEEE Society",
      cvIeeeDesc: "An-Najah Student Branch, participating in technical workshops, conferences, and adhering to global engineering standards.",
      cvWebTag: "💻 Web Design Expertise",
      cvWebTitle: "Modern Web Design & Digital Architecture",
      cvWebDesc: "Crafting striking user interfaces, ultra-responsive platforms, and mastering modern Vibe Coding techniques.",
      cvEmailLabel: "✉️ Official Email: ",
      cvWaLabel: "WhatsApp: ",
      projectsTag: "Featured Showcase",
      projectsTitle: "Engineering Projects & Modern Web Works",
      projectsDesc: "Curated selection of engineering prototypes in solar energy, electronics, and Vibe Coding web platforms.",
      filterAll: "All Projects",
      filterSolar: "Solar & Clean Energy",
      filterElectrical: "Electrical & Circuits",
      filterWeb: "Web Design & Vibe Coding",
      p1Tag: "☀️ Solar PV",
      p1Status: "Verified Simulation & Design",
      p1Title: "Hybrid Solar PV System Design",
      p1Desc: "Comprehensive engineering calculations integrating PV panels, lithium battery banks, and grid sync to reduce energy consumption by 70%.",
      p1Link: "Request Similar Study →",
      p2Tag: "💻 Vibe Coding",
      p2Status: "Live Interactive Platform",
      p2Title: "Interactive 3D Engineering Portfolio",
      p2Desc: "High-speed engineering portfolio with dynamic 3D mockups, interactive circuits canvas, and dark glassmorphic aesthetics.",
      p2Link: "Preview Current View ↑",
      p3Tag: "⚡ Circuits & Control",
      p3Status: "Digital Simulation",
      p3Title: "Overvoltage & Overcurrent Protection Circuit",
      p3Desc: "Electronic protection system guarding sensitive loads against power surges with automatic disconnect and smart alert indicators.",
      p3Link: "Inquire About Project →",
      p4Tag: "🏆 IEEE Event",
      p4Status: "Active Participation",
      p4Title: "Energy Efficiency & Conservation Initiative",
      p4Desc: "Applied engineering solutions to enhance Power Factor and curb transmission losses in residential and commercial installations.",
      p4Link: "Discuss Project →",
      contactTag: "Start a Conversation",
      contactTitle: "Connect with Eng. Wesam Balalem",
      contactDesc: "Whether you need consultation in solar PV systems, electrical circuits, or a sleek custom website, I'm ready to collaborate.",
      contactWaLabel: "Direct WhatsApp (Instant Reply)",
      contactWaHint: "Click to open chat immediately ⚡",
      contactEmailLabel: "Official Email Address",
      contactEmailHint: "Available for collaborations & inquiries 📩",
      contactLocLabel: "Location",
      contactLocValue: "Palestine — Nablus",
      contactLocHint: "An-Najah National University 🇵🇸",
      contactLinkedinLabel: "Official LinkedIn Profile",
      contactLinkedinHint: "Connect professionally on LinkedIn 🌐",
      contactGithubLabel: "GitHub Code Repository",
      contactGithubHint: "Explore repositories & open-source code ⚡",
      formTitle: "Send Direct Message to Wesam",
      formActive: "Active & Ready",
      lblName: "Your Full Name",
      phName: "Enter your name...",
      lblContact: "Phone Number or Email Address",
      phContact: "How to reach you...",
      lblType: "Project / Subject Type",
      optSolar: "Solar PV & Renewable Energy Project",
      optWeb: "Web Design & Development (Vibe Coding)",
      optEe: "Electrical Engineering & Circuit Consultation",
      optIeee: "Academic or IEEE Collaboration",
      optOther: "Other Inquiries",
      lblMsg: "Message Details",
      phMsg: "Briefly describe your project or inquiry...",
      btnSubmit: "Send Message via WhatsApp Immediately",
      footerTagline: "Electrical Engineering Student at An-Najah • Solar Energy Specialist • Web Designer & Vibe Coder",
      footerCopy: "All rights reserved — Eng. Wesam Balalem • Palestine, Nablus.",
      footerPride: "Engineered with Passion & Pride 🇵🇸",
      typingPhrases: [
        "B.Sc. Electrical Engineering Student at An-Najah National University, professional web designer specializing in renewable solar energy, Vibe Coding, and smart circuit systems in Palestine and MENA.",
        "Active IEEE Member — fusing rigorous electrical circuit design and automated control with cutting-edge UI engineering for ultra-performance platforms.",
        "Solid vocational foundation from the Industrial School (2022–2024) in Solar PV, pursuing academic excellence at An-Najah (2024–2029) to pioneer sustainable green energy.",
        "Vibe Coding Specialist — crafting futuristic glassmorphic web architectures that are lightning-fast, reactive, and compliant with modern global standards."
      ]
    }
  };

  /* ==========================================================================
     1. SITE CONFIGURATION STORE (DYNAMIC ADMIN DATA)
     ========================================================================== */
  const DEFAULT_CONFIG = {
    nameAr: "المهندس وسام بلالم",
    nameEn: "Eng. Wesam Balalem",
    subtitle: "طالب هندسة كهربائية في جامعة النجاح • خبير طاقة شمسية ومتجددة • مصمم مواقع وخبير Vibe Coding",
    statusBadge: "متاح للمشاريع والحلول الهندسية والمنصات الذكية",
    waNumber: "972593865751",
    email: "hishamwesam13@gmail.com",
    location: "فلسطين — نابلس",
    linkedin: "https://www.linkedin.com/in/WesamBalalem",
    github: "https://github.com/hishamwesam13",
    najahYears: "2024 – 2029",
    industrialYears: "2022 – 2024",
    najahDesc: "جامعة النجاح الوطنية — دراسة تخصصية متعمقة في الدوائر، أنظمة القدرة، التحكم الآلي والشبكات الكهربائية.",
    industrialDesc: "تأسيس مهني وخبرة عملية في تصميم وتركيب محطات الطاقة الشمسية وحسابات الأحمال وأنظمة التحويل.",
    p1Title: "تصميم نظام طاقة شمسية هجين (Hybrid Solar System)",
    p1Desc: "دراسة وحسابات متكاملة لربط الألواح الكهروضوئية مع بطاريات الليثيوم والشبكة المحلية لتقليل استهلاك الطاقة بنسبة 70%.",
    p2Title: "منصة بورتفوليو هندسية تفاعلية بـ 3D Parallax",
    p2Desc: "بناء واجهة بورتفوليو فائقة السرعة مع مجسمات تفاعلية للأجهزة ثلاثية الأبعاد وخلفية شبكات الدوائر المتحركة."
  };

  function loadConfig() {
    try {
      const saved = localStorage.getItem('wesam_portfolio_config');
      if (saved) return Object.assign({}, DEFAULT_CONFIG, JSON.parse(saved));
    } catch (e) {
      console.warn('Could not read config from storage', e);
    }
    return Object.assign({}, DEFAULT_CONFIG);
  }

  let siteConfig = loadConfig();

  // Current Language State (Default: ar)
  let currentLang = localStorage.getItem('wesam_portfolio_lang') || 'ar';

  // Apply Language to the Entire DOM
  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('wesam_portfolio_lang', lang);

    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';

    const t = I18N[lang] || I18N.ar;

    // Toggle button label
    const langLabelEl = document.getElementById('langLabel');
    if (langLabelEl) langLabelEl.textContent = t.langBtnLabel;

    // Brand Meta
    const brandTitleEl = document.querySelector('.brand-title');
    if (brandTitleEl) brandTitleEl.textContent = t.brandTitle;

    // Navbar Links
    const navLinkEls = document.querySelectorAll('.nav-links .nav-link');
    if (navLinkEls.length >= 6) {
      navLinkEls[0].textContent = t.navHome;
      navLinkEls[1].textContent = t.navAbout;
      navLinkEls[2].textContent = t.navSkills;
      navLinkEls[3].textContent = t.navCv;
      navLinkEls[4].textContent = t.navProjects;
      navLinkEls[5].textContent = t.navContact;
    }

    const waNavText = document.querySelector('.wa-nav-text');
    if (waNavText) waNavText.textContent = t.navWaText;

    // Badges Row
    const statusBadgeEl = document.querySelector('.badge-status span:last-child');
    if (statusBadgeEl) statusBadgeEl.textContent = t.statusBadge;

    const locBadgeEl = document.querySelector('.badge-location span:last-child');
    if (locBadgeEl) locBadgeEl.textContent = t.locationBadge;

    const ieeeBadgeEl = document.querySelector('.badge-ieee span:last-child');
    if (ieeeBadgeEl) ieeeBadgeEl.textContent = t.ieeeBadge;

    // Hero Role & Uni
    const heroRoleEl = document.querySelector('.hero-profile-role');
    if (heroRoleEl) heroRoleEl.textContent = t.heroRole;

    const heroUniEl = document.querySelector('.hero-profile-uni');
    if (heroUniEl) heroUniEl.textContent = t.heroUni;

    const heroSubEl = document.querySelector('.hero-subtitle');
    if (heroSubEl) heroSubEl.textContent = t.heroSubtitle;

    // Live Typing Card Header
    const liveTitleEl = document.querySelector('.live-title span:last-child');
    if (liveTitleEl) liveTitleEl.textContent = t.liveCardTitle;

    const liveBadgeEl = document.querySelector('.live-stream-badge');
    if (liveBadgeEl) liveBadgeEl.textContent = t.liveStreamBadge;

    // Hero Buttons
    const heroBtnProj = document.querySelector('.hero-buttons .btn-primary span:first-child');
    if (heroBtnProj) heroBtnProj.textContent = t.btnProjects;

    const heroBtnCv = document.querySelector('.btn-group-secondary .btn-glass:first-child span:last-child');
    if (heroBtnCv) heroBtnCv.textContent = t.btnCv;

    const heroBtnWa = document.querySelector('.btn-group-secondary .btn-wa span:last-child');
    if (heroBtnWa) heroBtnWa.textContent = t.btnWa;

    // Hero Stats
    const statLabels = document.querySelectorAll('.hero-stats-grid .stat-label');
    if (statLabels.length >= 4) {
      statLabels[0].textContent = t.stat1;
      statLabels[1].textContent = t.stat2;
      statLabels[2].textContent = t.stat3;
      statLabels[3].textContent = t.stat4;
    }

    // About Section
    const aboutTagEl = document.querySelector('#about .section-tag span:last-child');
    if (aboutTagEl) aboutTagEl.textContent = t.aboutTag;

    const aboutTitleEl = document.querySelector('#about .section-title');
    if (aboutTitleEl) aboutTitleEl.textContent = t.aboutTitle;

    const aboutDescEl = document.querySelector('#about .section-desc');
    if (aboutDescEl) aboutDescEl.textContent = t.aboutDesc;

    const aboutCards = document.querySelectorAll('.about-grid .about-card');
    if (aboutCards.length >= 4) {
      const c1Title = aboutCards[0].querySelector('.about-card-title');
      const c1Text = aboutCards[0].querySelector('.about-card-text');
      if (c1Title) c1Title.textContent = t.aboutC1Title;
      if (c1Text) c1Text.textContent = t.aboutC1Text;

      const c2Title = aboutCards[1].querySelector('.about-card-title');
      const c2Text = aboutCards[1].querySelector('.about-card-text');
      if (c2Title) c2Title.textContent = t.aboutC2Title;
      if (c2Text) c2Text.textContent = t.aboutC2Text;

      const c3Title = aboutCards[2].querySelector('.about-card-title');
      const c3Text = aboutCards[2].querySelector('.about-card-text');
      if (c3Title) c3Title.textContent = t.aboutC3Title;
      if (c3Text) c3Text.textContent = t.aboutC3Text;

      const c4Title = aboutCards[3].querySelector('.about-card-title');
      const c4Text = aboutCards[3].querySelector('.about-card-text');
      if (c4Title) c4Title.textContent = t.aboutC4Title;
      if (c4Text) c4Text.textContent = t.aboutC4Text;
    }

    // Skills Section
    const skillsTagEl = document.querySelector('#skills .section-tag span:last-child');
    if (skillsTagEl) skillsTagEl.textContent = t.skillsTag;

    const skillsTitleEl = document.querySelector('#skills .section-title');
    if (skillsTitleEl) skillsTitleEl.textContent = t.skillsTitle;

    const skillsDescEl = document.querySelector('#skills .section-desc');
    if (skillsDescEl) skillsDescEl.textContent = t.skillsDesc;

    const catTitles = document.querySelectorAll('.skill-category .category-title');
    if (catTitles.length >= 2) {
      catTitles[0].textContent = t.skillsCat1;
      catTitles[1].textContent = t.skillsCat2;
    }

    const skillInfoNames = document.querySelectorAll('.skill-bar-item .skill-info span:first-child');
    if (skillInfoNames.length >= 8) {
      skillInfoNames[0].textContent = t.skill1;
      skillInfoNames[1].textContent = t.skill2;
      skillInfoNames[2].textContent = t.skill3;
      skillInfoNames[3].textContent = t.skill4;
      skillInfoNames[4].textContent = t.skill5;
      skillInfoNames[5].textContent = t.skill6;
      skillInfoNames[6].textContent = t.skill7;
      skillInfoNames[7].textContent = t.skill8;
    }

    // CV Section
    const zoomTextEl = document.querySelector('.cv-hover-overlay .zoom-text');
    if (zoomTextEl) zoomTextEl.textContent = t.cvZoomText;

    const btnCvPreview = document.querySelector('.btn-cv-preview span:first-child');
    if (btnCvPreview) btnCvPreview.textContent = t.cvBtnPreview;

    const btnCvDownload = document.querySelector('.btn-cv-download span:first-child');
    if (btnCvDownload) btnCvDownload.textContent = t.cvBtnDownload;

    const cvNoteEl = document.querySelector('.cv-note-edit');
    if (cvNoteEl) cvNoteEl.textContent = t.cvNote;

    const cvLocEl = document.querySelector('.cv-loc-badge span');
    if (cvLocEl) cvLocEl.textContent = t.cvLoc;

    const cvPersonSub = document.querySelector('.cv-person-sub');
    if (cvPersonSub) cvPersonSub.textContent = t.heroSubtitle;

    const cvBoxes = document.querySelectorAll('.cv-feature-box');
    if (cvBoxes.length >= 4) {
      // Box 1
      cvBoxes[0].querySelector('.box-tag').textContent = t.cvDegreeTag;
      cvBoxes[0].querySelector('.box-title').textContent = t.cvDegreeTitle;
      cvBoxes[0].querySelector('.box-desc').textContent = t.cvDegreeDesc;
      // Box 2
      cvBoxes[1].querySelector('.box-tag').textContent = t.cvSolarTag;
      cvBoxes[1].querySelector('.box-title').textContent = t.cvSolarTitle;
      cvBoxes[1].querySelector('.box-desc').textContent = t.cvSolarDesc;
      // Box 3
      cvBoxes[2].querySelector('.box-tag').textContent = t.cvIeeeTag;
      cvBoxes[2].querySelector('.box-title').textContent = t.cvIeeeTitle;
      cvBoxes[2].querySelector('.box-desc').textContent = t.cvIeeeDesc;
      // Box 4
      cvBoxes[3].querySelector('.box-tag').textContent = t.cvWebTag;
      cvBoxes[3].querySelector('.box-title').textContent = t.cvWebTitle;
      cvBoxes[3].querySelector('.box-desc').textContent = t.cvWebDesc;
    }

    const cvEmailLabel = document.querySelector('.cv-email-info span:first-child');
    if (cvEmailLabel) cvEmailLabel.textContent = t.cvEmailLabel;

    const cvWaLabel = document.querySelector('.btn-wa-chip span:first-child');
    if (cvWaLabel) cvWaLabel.textContent = t.cvWaLabel;

    // Projects Section
    const projTagEl = document.querySelector('#projects .section-tag span:last-child');
    if (projTagEl) projTagEl.textContent = t.projectsTag;

    const projTitleEl = document.querySelector('#projects .section-title');
    if (projTitleEl) projTitleEl.textContent = t.projectsTitle;

    const projDescEl = document.querySelector('#projects .section-desc');
    if (projDescEl) projDescEl.textContent = t.projectsDesc;

    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
      const f = btn.getAttribute('data-filter');
      if (f === 'all') btn.textContent = t.filterAll;
      else if (f === 'solar') btn.textContent = t.filterSolar;
      else if (f === 'electrical') btn.textContent = t.filterElectrical;
      else if (f === 'web') btn.textContent = t.filterWeb;
    });

    const pCards = document.querySelectorAll('.projects-grid .project-card');
    if (pCards.length >= 4) {
      // P1
      const p1Tag = pCards[0].querySelector('.preview-tag');
      const p1Status = pCards[0].querySelector('.preview-status');
      const p1Title = pCards[0].querySelector('.project-title');
      const p1Desc = pCards[0].querySelector('.project-desc');
      const p1Link = pCards[0].querySelector('.project-link');
      if (p1Tag) p1Tag.textContent = t.p1Tag;
      if (p1Status) p1Status.textContent = t.p1Status;
      if (p1Title) p1Title.textContent = (lang === 'ar') ? siteConfig.p1Title : t.p1Title;
      if (p1Desc) p1Desc.textContent = (lang === 'ar') ? siteConfig.p1Desc : t.p1Desc;
      if (p1Link) p1Link.textContent = t.p1Link;

      // P2
      const p2Tag = pCards[1].querySelector('.preview-tag');
      const p2Status = pCards[1].querySelector('.preview-status');
      const p2Title = pCards[1].querySelector('.project-title');
      const p2Desc = pCards[1].querySelector('.project-desc');
      const p2Link = pCards[1].querySelector('.project-link');
      if (p2Tag) p2Tag.textContent = t.p2Tag;
      if (p2Status) p2Status.textContent = t.p2Status;
      if (p2Title) p2Title.textContent = (lang === 'ar') ? siteConfig.p2Title : t.p2Title;
      if (p2Desc) p2Desc.textContent = (lang === 'ar') ? siteConfig.p2Desc : t.p2Desc;
      if (p2Link) p2Link.textContent = t.p2Link;

      // P3
      const p3Tag = pCards[2].querySelector('.preview-tag');
      const p3Status = pCards[2].querySelector('.preview-status');
      const p3Title = pCards[2].querySelector('.project-title');
      const p3Desc = pCards[2].querySelector('.project-desc');
      const p3Link = pCards[2].querySelector('.project-link');
      if (p3Tag) p3Tag.textContent = t.p3Tag;
      if (p3Status) p3Status.textContent = t.p3Status;
      if (p3Title) p3Title.textContent = t.p3Title;
      if (p3Desc) p3Desc.textContent = t.p3Desc;
      if (p3Link) p3Link.textContent = t.p3Link;

      // P4
      const p4Tag = pCards[3].querySelector('.preview-tag');
      const p4Status = pCards[3].querySelector('.preview-status');
      const p4Title = pCards[3].querySelector('.project-title');
      const p4Desc = pCards[3].querySelector('.project-desc');
      const p4Link = pCards[3].querySelector('.project-link');
      if (p4Tag) p4Tag.textContent = t.p4Tag;
      if (p4Status) p4Status.textContent = t.p4Status;
      if (p4Title) p4Title.textContent = t.p4Title;
      if (p4Desc) p4Desc.textContent = t.p4Desc;
      if (p4Link) p4Link.textContent = t.p4Link;
    }

    // Contact Section
    const contactTagEl = document.querySelector('#contact .section-tag span:last-child');
    if (contactTagEl) contactTagEl.textContent = t.contactTag;

    const contactTitleEl = document.querySelector('#contact .section-title');
    if (contactTitleEl) contactTitleEl.textContent = t.contactTitle;

    const contactDescEl = document.querySelector('#contact .section-desc');
    if (contactDescEl) contactDescEl.textContent = t.contactDesc;

    const contactBoxes = document.querySelectorAll('.contact-info-col .contact-box');
    if (contactBoxes.length >= 3) {
      // WA Box
      contactBoxes[0].querySelector('.box-label').textContent = t.contactWaLabel;
      contactBoxes[0].querySelector('.box-hint').textContent = t.contactWaHint;
      // Email Box
      contactBoxes[1].querySelector('.box-label').textContent = t.contactEmailLabel;
      contactBoxes[1].querySelector('.box-hint').textContent = t.contactEmailHint;
      // Loc Box
      contactBoxes[2].querySelector('.box-label').textContent = t.contactLocLabel;
      contactBoxes[2].querySelector('.box-value').textContent = t.contactLocValue;
      contactBoxes[2].querySelector('.box-hint').textContent = t.contactLocHint;
    }

    const lblLinkedin = document.getElementById('lblLinkedin');
    if (lblLinkedin) lblLinkedin.textContent = t.contactLinkedinLabel;
    const hintLinkedin = document.getElementById('hintLinkedin');
    if (hintLinkedin) hintLinkedin.textContent = t.contactLinkedinHint;

    const lblGithub = document.getElementById('lblGithub');
    if (lblGithub) lblGithub.textContent = t.contactGithubLabel;
    const hintGithub = document.getElementById('hintGithub');
    if (hintGithub) hintGithub.textContent = t.contactGithubHint;

    // Contact Form
    const formTitleEl = document.querySelector('.form-title-row .form-title');
    if (formTitleEl) formTitleEl.textContent = t.formTitle;

    const formBadgeEl = document.querySelector('.badge-active-dot');
    if (formBadgeEl) {
      formBadgeEl.innerHTML = `<span class="ping-dot-emerald"></span> ${t.formActive}`;
    }

    const lblNameEl = document.querySelector('label[for="senderName"]');
    if (lblNameEl) lblNameEl.textContent = t.lblName;
    const inpNameEl = document.getElementById('senderName');
    if (inpNameEl) inpNameEl.placeholder = t.phName;

    const lblContactEl = document.querySelector('label[for="senderContact"]');
    if (lblContactEl) lblContactEl.textContent = t.lblContact;
    const inpContactEl = document.getElementById('senderContact');
    if (inpContactEl) inpContactEl.placeholder = t.phContact;

    const lblTypeEl = document.querySelector('label[for="projectType"]');
    if (lblTypeEl) lblTypeEl.textContent = t.lblType;

    const selType = document.getElementById('projectType');
    if (selType && selType.options.length >= 5) {
      selType.options[0].textContent = t.optSolar;
      selType.options[1].textContent = t.optWeb;
      selType.options[2].textContent = t.optEe;
      selType.options[3].textContent = t.optIeee;
      selType.options[4].textContent = t.optOther;
    }

    const lblMsgEl = document.querySelector('label[for="senderMsg"]');
    if (lblMsgEl) lblMsgEl.textContent = t.lblMsg;
    const inpMsgEl = document.getElementById('senderMsg');
    if (inpMsgEl) inpMsgEl.placeholder = t.phMsg;

    const btnSubmitEl = document.getElementById('submitFormBtn');
    if (btnSubmitEl) {
      btnSubmitEl.innerHTML = `<span>${t.btnSubmit}</span><span>🚀</span>`;
    }

    // Footer
    const footTaglineEl = document.querySelector('.footer-tagline');
    if (footTaglineEl) footTaglineEl.textContent = t.footerTagline;

    const footLinks = document.querySelectorAll('.footer-links a');
    if (footLinks.length >= 6) {
      footLinks[0].textContent = t.navHome;
      footLinks[1].textContent = t.navAbout;
      footLinks[2].textContent = t.navSkills;
      footLinks[3].textContent = t.navCv;
      footLinks[4].textContent = t.navProjects;
      footLinks[5].textContent = t.navContact;
    }

    const copyEl = document.querySelector('.copyright');
    if (copyEl) {
      copyEl.innerHTML = `© <span id="currentYear">${new Date().getFullYear()}</span> ${t.footerCopy}`;
    }

    const prideEl = document.querySelector('.palestine-pride');
    if (prideEl) prideEl.textContent = t.footerPride;

    // Update Interactive Web Showcase deck language
    if (typeof window.updateShowcaseDeck === 'function') {
      window.updateShowcaseDeck(activeSiteIndex);
    }

    // Reset typewriter with correct language phrases
    resetTypewriterForLanguage(lang);
  }

  // Language Toggle Button Click Handler (Single Click switches both ways)
  const langToggleBtn = document.getElementById('langToggle');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const nextLang = (currentLang === 'ar') ? 'en' : 'ar';
      applyLanguage(nextLang);
    });
  }

  /* ==========================================================================
     2. LIVE INTERACTIVE TYPING EFFECT (BILINGUAL)
     ========================================================================== */
  const typewriterElement = document.getElementById('typewriterContent');
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 35;
  let typeTimeoutId = null;

  function getCurrentPhrases() {
    const t = I18N[currentLang] || I18N.ar;
    return t.typingPhrases;
  }

  function resetTypewriterForLanguage(lang) {
    if (typeTimeoutId) clearTimeout(typeTimeoutId);
    charIndex = 0;
    isDeleting = false;
    phraseIndex = 0;
    if (typewriterElement) typewriterElement.textContent = '';
    typeLoop();
  }

  function typeLoop() {
    if (!typewriterElement) return;

    const currentPhrases = getCurrentPhrases();
    if (phraseIndex >= currentPhrases.length) phraseIndex = 0;
    const currentPhrase = currentPhrases[phraseIndex];

    if (isDeleting) {
      typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 16;
    } else {
      typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 32;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      typingSpeed = 2800;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % currentPhrases.length;
      typingSpeed = 450;
    }

    typeTimeoutId = setTimeout(typeLoop, typingSpeed);
  }

  // Initial language application (Loads saved or default 'ar')
  applyLanguage(currentLang);

  /* ==========================================================================
     3. 3D FLOATING DEVICES (TABLET ANCHORED, PHONE FOLLOWS ON SCROLL)
     ========================================================================== */
  const tablet = document.getElementById('deviceTablet');
  const phone = document.getElementById('devicePhone');
  const phoneClock = document.getElementById('phoneClock');

  function updatePhoneClock() {
    if (!phoneClock) return;
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const mins = String(now.getMinutes()).padStart(2, '0');
    phoneClock.textContent = `${hours}:${mins}`;
  }
  updatePhoneClock();
  setInterval(updatePhoneClock, 60000);

  // Physics-based Continuous 60/120fps Animation Loop
  let currentPhoneY = 0;
  let targetPhoneY = 0;
  let currentTiltX = 10;
  let currentTiltY = -14;
  let currentTiltZ = 0;
  let phoneVelocity = 0;

  function animateDevices() {
    const scrollY = window.scrollY;
    const isMobile = window.innerWidth <= 900;
    const sideScreen = document.getElementById('heroSideScreen');
    const sideScreenTop = sideScreen ? sideScreen.offsetTop : 0;

    // 1. Tablet motion: "ينزل ويطلع شوي" on ALL devices (Mobile, Tablet, Laptop, PC)
    if (tablet) {
      const tabletY = Math.sin(scrollY * 0.004) * 14 + (scrollY * 0.1);
      const tabletRotY = 16 - Math.sin(scrollY * 0.003) * 6;
      const tabletRotX = 8 + Math.cos(scrollY * 0.003) * 5;
      tablet.style.transform = `translate3d(0, ${tabletY}px, 0) rotateY(${tabletRotY}deg) rotateX(${tabletRotX}deg) translateZ(30px)`;
    }

    // 2. Phone motion: "ينزل معي بالسكرول" on ALL devices
    if (phone) {
      if (isMobile) {
        // Mobile: smoothly descends with scroll inside the side screen frame
        const mobileScroll = Math.max(0, scrollY - (sideScreenTop - 100));
        const targetMobileY = Math.min(55, mobileScroll * 0.25);
        const diff = targetMobileY - currentPhoneY;
        currentPhoneY += diff * 0.082;
        phoneVelocity = diff;

        const tiltX = 10 + Math.max(-10, Math.min(14, phoneVelocity * 0.15));
        const tiltY = -12 + Math.sin(currentPhoneY * 0.04) * 4;

        phone.style.transform = `translate3d(0, ${currentPhoneY}px, 0) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(40px) scale(0.88)`;
      } else {
        // Desktop: full glide down in side column alongside content
        const startOffset = Math.max(0, sideScreenTop - 40);
        const relativeScroll = Math.max(0, scrollY - startOffset);
        targetPhoneY = relativeScroll * 0.94;
        
        // Fluid spring lerp (0.082 damping factor for zero jitter)
        const diff = targetPhoneY - currentPhoneY;
        currentPhoneY += diff * 0.082;
        phoneVelocity = diff;

        const targetTiltX = 10 + Math.max(-12, Math.min(16, phoneVelocity * 0.1));
        const targetTiltY = -14 + Math.sin(currentPhoneY * 0.0022) * 6;
        const targetTiltZ = Math.max(-5, Math.min(5, -phoneVelocity * 0.035));

        currentTiltX += (targetTiltX - currentTiltX) * 0.1;
        currentTiltY += (targetTiltY - currentTiltY) * 0.1;
        currentTiltZ += (targetTiltZ - currentTiltZ) * 0.1;

        phone.style.transform = `translate3d(0, ${currentPhoneY}px, 0) rotateX(${currentTiltX}deg) rotateY(${currentTiltY}deg) rotateZ(${currentTiltZ}deg) translateZ(60px)`;
      }
    }

    requestAnimationFrame(animateDevices);
  }

  // Start continuous loop
  requestAnimationFrame(animateDevices);

  /* ==========================================================================
     3. ELECTRICAL & SOLAR PCB CIRCUIT CANVAS
     ========================================================================== */
  const canvas = document.getElementById('circuitCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initCircuits();
    });

    const nodes = [];
    const pulses = [];
    const nodeCount = Math.min(Math.floor((width * height) / 38000), 45);

    class CircuitNode {
      constructor(x, y) {
        this.x = x || Math.random() * width;
        this.y = y || Math.random() * height;
        this.radius = Math.random() * 2.5 + 1.5;
        this.isSolar = Math.random() > 0.65;
        this.color = this.isSolar ? '#ffb703' : '#00f2fe';
        this.pulsePhase = Math.random() * Math.PI * 2;
        this.connections = [];
      }

      draw() {
        this.pulsePhase += 0.03;
        const glow = Math.sin(this.pulsePhase) * 0.5 + 0.5;

        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius + glow * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 8 + glow * 8;
        ctx.fill();
        ctx.restore();
      }
    }

    class Pulse {
      constructor(fromNode, toNode, isSolar) {
        this.from = fromNode;
        this.to = toNode;
        this.progress = 0;
        this.speed = Math.random() * 0.008 + 0.006;
        this.isSolar = isSolar;
      }

      update() {
        this.progress += this.speed;
        return this.progress < 1;
      }

      draw() {
        const px = this.from.x + (this.to.x - this.from.x) * this.progress;
        const py = this.from.y + (this.to.y - this.from.y) * this.progress;

        ctx.save();
        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = this.isSolar ? '#ffd166' : '#ffffff';
        ctx.shadowColor = this.isSolar ? '#ffb703' : '#00f2fe';
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.restore();
      }
    }

    function initCircuits() {
      nodes.length = 0;
      for (let i = 0; i < nodeCount; i++) {
        nodes.push(new CircuitNode());
      }

      for (let i = 0; i < nodes.length; i++) {
        nodes[i].connections = [];
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            nodes[i].connections.push(nodes[j]);
          }
        }
      }
    }
    initCircuits();

    setInterval(() => {
      if (nodes.length > 0 && pulses.length < 25) {
        const randomNode = nodes[Math.floor(Math.random() * nodes.length)];
        if (randomNode.connections.length > 0) {
          const target = randomNode.connections[Math.floor(Math.random() * randomNode.connections.length)];
          pulses.push(new Pulse(randomNode, target, randomNode.isSolar));
        }
      }
    }, 280);

    function animateCanvas() {
      ctx.clearRect(0, 0, width, height);

      ctx.lineWidth = 0.8;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = 0; j < a.connections.length; j++) {
          const b = a.connections[j];
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          const midX = (a.x + b.x) / 2;
          ctx.lineTo(midX, a.y);
          ctx.lineTo(midX, b.y);
          ctx.lineTo(b.x, b.y);

          ctx.strokeStyle = a.isSolar 
            ? 'rgba(255, 183, 3, 0.12)' 
            : 'rgba(0, 242, 254, 0.1)';
          ctx.stroke();
        }
      }

      for (let i = 0; i < nodes.length; i++) {
        nodes[i].draw();
      }

      for (let i = pulses.length - 1; i >= 0; i--) {
        const pulse = pulses[i];
        if (pulse.update()) {
          pulse.draw();
        } else {
          pulses.splice(i, 1);
        }
      }

      requestAnimationFrame(animateCanvas);
    }
    animateCanvas();
  }

  /* ==========================================================================
     4. CV FULLSCREEN MODAL HANDLERS
     ========================================================================== */
  const cvModal = document.getElementById('cvModal');
  const openCvModalBtn = document.getElementById('openCvModalBtn');
  const previewCvBtn = document.getElementById('previewCvBtn');
  const closeCvModalBtn = document.getElementById('closeCvModalBtn');
  const cvModalBackdrop = document.getElementById('cvModalBackdrop');

  function openCvModal() {
    if (!cvModal) return;
    cvModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeCvModal() {
    if (!cvModal) return;
    cvModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (openCvModalBtn) openCvModalBtn.addEventListener('click', openCvModal);
  if (previewCvBtn) previewCvBtn.addEventListener('click', openCvModal);
  if (closeCvModalBtn) closeCvModalBtn.addEventListener('click', closeCvModal);
  if (cvModalBackdrop) cvModalBackdrop.addEventListener('click', closeCvModal);

  /* ==========================================================================
     4.5. INTERACTIVE MULTI-DEVICE WEB ARCHITECTURE DECK
     ========================================================================== */
  const showcaseSites = [
    {
      id: "baron",
      key: "F1",
      name: "البارون للأزياء الرجالية",
      nameEn: "Al-Baron Men's Fashion",
      shortName: "البارون للأزياء",
      shortNameEn: "Al-Baron Fashion",
      url: "https://al-baron-dyek.vercel.app/",
      displayUrl: "al-baron-dyek.vercel.app",
      tag: "أزياء رجالية رسمية • فاخرة",
      tagEn: "Luxury Men's Formal Wear",
      captionTitle: "أناقة بلا حدود مع البارون",
      captionTitleEn: "Limitless Elegance with Al-Baron",
      captionSub: "⭐ تشكيلة راقية من البدلات الرجالية والعصرية",
      captionSubEn: "⭐ Premium tailored Italian formal suits",
      badgeText: "أقمشة صوف إيطالية 100%",
      badgeTextEn: "100% Italian Wool Fabrics",
      color: "#eab308",
      bgGlow: "rgba(234, 179, 8, 0.18)",
      desktopImg: "showcase/baron-desktop.png",
      mobileImg: "showcase/baron-mobile.png",
      desc: "تشكيلة راقية من البدلات الرجالية والعصرية المصممة بعناية فائقة لتمنحك حضوراً يفيض بالثقة والهيبة في كل مناسبة.",
      descEn: "Premium collection of tailored luxury suits and formal wear engineered for confidence, prestige, and distinguished presence.",
      mobileEngine: "📱 Luxury Checkout Engine",
      mobileCity: "● تفصيل حسب القياس • شحن فوري"
    },
    {
      id: "balalem",
      key: "F2",
      name: "الولاء لستائر Balalemco",
      nameEn: "Balalemco Luxury Curtains",
      shortName: "ستائر Balalemco",
      shortNameEn: "Balalemco Curtains",
      url: "https://balalem-co.vercel.app/",
      displayUrl: "balalem-co.vercel.app",
      tag: "أناقة منسدلة بلمسة مَلَكيّة",
      tagEn: "Royal Drapery & Smart Sizing",
      captionTitle: "أناقة منسدلة تُعيد تعريف مساحتك",
      captionTitleEn: "Draped Elegance Redefining Your Space",
      captionSub: "⭐ تصميم وتفصيل أرقى ستائر وبرادي الفلل والمنازل",
      captionSubEn: "⭐ Bespoke royal curtains & smart window meters",
      badgeText: "خامات وأقمشة عالمية فاخرة",
      badgeTextEn: "World-Class Royal Fabrics",
      color: "#00f2fe",
      bgGlow: "rgba(0, 242, 254, 0.18)",
      desktopImg: "showcase/balalem-desktop.png",
      mobileImg: "showcase/balalem-mobile.png",
      desc: "تصميم وتفصيل أرقى ستائر وبرادي المنازل والفلل العصرية بأجود خامات الأقمشة العالمية مع حاسبة مقاسات ذكية وتوصيل مباشر لكافة مدن فلسطين.",
      descEn: "High-end bespoke curtain and drapery design platform featuring custom fabric curation, smart room calculators, and nationwide logistics.",
      mobileEngine: "📱 Smart Fabric & Sizing Engine",
      mobileCity: "● فلسطين 🇵🇸 القدس والضفة والداخل"
    },
    {
      id: "clickcash",
      key: "F3",
      name: "كليك كاشير (Click Cash)",
      nameEn: "Click Cash POS & Cloud Inventory",
      shortName: "كليك كاشير",
      shortNameEn: "Click Cash POS",
      url: "https://click-cash5.vercel.app/",
      displayUrl: "click-cash5.vercel.app",
      tag: "منظومة نقاط البيع والمحاسبة الذكية",
      tagEn: "Smart Cloud POS & CRM System",
      captionTitle: "منظومة كليك كاشير السحابية الذكية",
      captionTitleEn: "Click Cash Smart Cloud POS & CRM",
      captionSub: "⭐ إدارة المخزون، المنتجات، المبيعات والأرباح بدقة فائقة",
      captionSubEn: "⭐ High-speed point of sale, inventory & analytics",
      badgeText: "سحابية 100% وسرعة فائقة",
      badgeTextEn: "100% Cloud & Ultra Fast",
      color: "#10b981",
      bgGlow: "rgba(16, 185, 129, 0.18)",
      desktopImg: "showcase/clickcash-desktop.png",
      mobileImg: "showcase/clickcash-mobile.png",
      desc: "منظومة سحابية متكاملة لنقاط البيع وإدارة المخزون والمحاسبة التجارية، تتبع دقيق للمبيعات والأرباح مع واجهة تشغيل فائقة السرعة.",
      descEn: "Enterprise-grade cloud Point-of-Sale (POS) and inventory control system with real-time analytics, CRM tracking, and sub-second checkout.",
      mobileEngine: "📱 Mobile POS & Stock Scanner",
      mobileCity: "● نظام محاسبي سحابي فوري ⚡"
    }
  ];

  let activeSiteIndex = 0;

  function updateShowcaseDeck(index) {
    if (index < 0 || index >= showcaseSites.length) return;
    activeSiteIndex = index;
    const site = showcaseSites[index];
    const isEn = (currentLang === 'en');

    // Update Channel Buttons
    const channelBtns = document.querySelectorAll('.deck-channel-btn');
    channelBtns.forEach((btn, i) => {
      if (i === index) {
        btn.classList.add('active');
        btn.style.background = `linear-gradient(145deg, ${site.bgGlow}, rgba(5, 10, 20, 0.95))`;
        btn.style.borderColor = site.color;
        btn.style.boxShadow = `0 0 25px ${site.bgGlow}, inset 0 0 12px ${site.bgGlow}`;
      } else {
        btn.classList.remove('active');
        btn.style.background = '';
        btn.style.borderColor = '';
        btn.style.boxShadow = '';
      }
    });

    // Elements
    const deckLaunchBtn = document.getElementById('deckLaunchBtn');
    const deckDisplayLink = document.getElementById('deckDisplayLink');
    const deckTabletLink = document.getElementById('deckTabletLink');
    const deckUrlText = document.getElementById('deckUrlText');
    const deckCategoryBadge = document.getElementById('deckCategoryBadge');
    const deckBrandHeader = document.getElementById('deckBrandHeader');
    const deckDesktopImg = document.getElementById('deckDesktopImg');
    const deckPhoneImg = document.getElementById('deckPhoneImg');
    const deckTabletImg = document.getElementById('deckTabletImg');
    const deckInfoName = document.getElementById('deckInfoName');
    const deckInfoDesc = document.getElementById('deckInfoDesc');
    const deckCaptionTitle = document.getElementById('deckCaptionTitle');
    const deckCaptionSub = document.getElementById('deckCaptionSub');
    const deckCaptionBadge = document.getElementById('deckCaptionBadge');
    const deckPhoneEngine = document.getElementById('deckPhoneEngine');
    const deckPhoneLoc = document.getElementById('deckPhoneLoc');
    const deckTabletFooter = document.getElementById('deckTabletFooter');

    // Update links
    if (deckLaunchBtn) deckLaunchBtn.href = site.url;
    if (deckDisplayLink) deckDisplayLink.href = site.url;
    if (deckTabletLink) deckTabletLink.href = site.url;
    if (deckUrlText) deckUrlText.textContent = site.url;

    // Update texts with i18n
    if (deckCategoryBadge) deckCategoryBadge.textContent = isEn ? site.tagEn : site.tag;
    if (deckBrandHeader) deckBrandHeader.textContent = isEn ? site.shortNameEn : site.shortName;
    if (deckInfoName) deckInfoName.textContent = isEn ? site.shortNameEn : site.shortName;
    if (deckInfoDesc) deckInfoDesc.textContent = isEn ? site.descEn : site.desc;
    if (deckCaptionTitle) deckCaptionTitle.textContent = isEn ? site.captionTitleEn : site.captionTitle;
    if (deckCaptionSub) deckCaptionSub.textContent = isEn ? site.captionSubEn : site.captionSub;
    if (deckCaptionBadge) {
      deckCaptionBadge.innerHTML = `<span>${isEn ? site.badgeTextEn : site.badgeText}</span>`;
      deckCaptionBadge.style.color = site.color;
    }
    if (deckPhoneEngine) deckPhoneEngine.textContent = site.mobileEngine;
    if (deckPhoneLoc) deckPhoneLoc.textContent = site.mobileCity;
    if (deckTabletFooter) deckTabletFooter.textContent = site.displayUrl;

    // Smooth image transition
    const imgsToFade = [deckDesktopImg, deckPhoneImg, deckTabletImg];
    imgsToFade.forEach(img => {
      if (img) img.style.opacity = '0.3';
    });

    setTimeout(() => {
      if (deckDesktopImg) deckDesktopImg.src = site.desktopImg;
      if (deckPhoneImg) deckPhoneImg.src = site.mobileImg;
      if (deckTabletImg) deckTabletImg.src = site.desktopImg;

      imgsToFade.forEach(img => {
        if (img) img.style.opacity = '1';
      });
    }, 180);
  }

  // Bind click handlers for F1, F2, F3
  const channelBtns = document.querySelectorAll('.deck-channel-btn');
  channelBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      updateShowcaseDeck(idx);
    });
  });

  // Expose to window for language switch updates
  window.updateShowcaseDeck = updateShowcaseDeck;

  /* ==========================================================================
     5. PROJECT CATEGORY FILTERING
     ========================================================================== */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.transition = 'opacity 0.4s ease';
            card.style.opacity = '1';
          }, 20);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  /* ==========================================================================
     6. CONTACT FORM & DIRECT WHATSAPP SUBMIT
     ========================================================================== */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('senderName').value.trim();
      const contact = document.getElementById('senderContact').value.trim();
      const projectType = document.getElementById('projectType').value;
      const msg = document.getElementById('senderMsg').value.trim();

      const fullMessage = 
        `⚡ رسالة جديدة من موقع البورتفوليو:\n` +
        `👤 الاسم: ${name}\n` +
        `📞 وسيلة الاتصال: ${contact}\n` +
        `📌 نوع المشروع: ${projectType}\n` +
        `📝 التفاصيل: ${msg}`;

      const waUrl = `https://wa.me/${siteConfig.waNumber}?text=${encodeURIComponent(fullMessage)}`;
      
      window.open(waUrl, '_blank');
      contactForm.reset();
    });
  }

  /* ==========================================================================
     7. THEME TOGGLE (DARK / LIGHT)
     ========================================================================== */
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('wesam_theme', theme);
    if (themeIcon) {
      themeIcon.textContent = theme === 'light' ? '🌙' : '☀️';
    }
  }

  const savedTheme = localStorage.getItem('wesam_theme') || 'dark';
  setTheme(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      setTheme(currentTheme === 'light' ? 'dark' : 'light');
    });
  }

  /* ==========================================================================
     8. MOBILE MENU TOGGLE & ACTIVE SPY
     ========================================================================== */
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.querySelector('.nav-links');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('show-mobile');
    });

    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('show-mobile');
      });
    });
  }

  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPosition = window.scrollY + 200;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPosition >= top && scrollPosition < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    if (currentId) {
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentId}`) {
          link.classList.add('active');
        }
      });
    }
  });

  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ==========================================================================
     9. ADMIN DASHBOARD & EDIT SYSTEM (AUTHORIZED EMAIL: hishamwesam13@gmail.com)
     ========================================================================== */
  const AUTHORIZED_ADMIN_EMAIL = "hishamwesam13@gmail.com";
  const DEFAULT_ADMIN_PASS = "Wesam@0593865751";
  localStorage.setItem('wesam_admin_pass', DEFAULT_ADMIN_PASS);

  const adminTopBar = document.getElementById('adminTopBar');
  const adminLoginModal = document.getElementById('adminLoginModal');
  const adminDashboardModal = document.getElementById('adminDashboardModal');
  const adminLoginTriggerBtn = document.getElementById('adminLoginTriggerBtn');
  const openAdminPanelBtn = document.getElementById('openAdminPanelBtn');
  const closeAdminLoginBtn = document.getElementById('closeAdminLoginBtn');
  const closeAdminDashboardBtn = document.getElementById('closeAdminDashboardBtn');
  const adminLoginForm = document.getElementById('adminLoginForm');
  const adminLoginError = document.getElementById('adminLoginError');
  const adminLogoutBtn = document.getElementById('adminLogoutBtn');

  // Secret Admin Access Check
  const urlParams = new URLSearchParams(window.location.search);
  const isSecretAdminUrl = urlParams.has('admin') || urlParams.has('edit') || urlParams.get('mode') === 'wesam';

  // Check login state (remember on device)
  let isAdminLoggedIn = localStorage.getItem('wesam_admin_logged_in') === 'true';

  function updateAdminUi() {
    if (isAdminLoggedIn) {
      if (adminTopBar) adminTopBar.style.display = 'block';
      document.body.style.paddingTop = '40px';
    } else {
      if (adminTopBar) adminTopBar.style.display = 'none';
      document.body.style.paddingTop = '0px';
    }
  }
  updateAdminUi();

  // If URL has ?admin=true, automatically open dashboard or prompt
  if (isSecretAdminUrl) {
    setTimeout(() => {
      if (isAdminLoggedIn) {
        openAdminDashboard();
      } else {
        openAdminLogin();
      }
    }, 400);
  }

  // Secret 3-Click on Palestine Flag in Navbar to open Admin (بدون أي تلميحات)
  const palestineTrigger = document.getElementById('palestineSecretTrigger');
  let flagClickCount = 0;
  let flagClickTimer = null;
  if (palestineTrigger) {
    palestineTrigger.addEventListener('click', (e) => {
      flagClickCount++;
      if (flagClickCount === 3) {
        flagClickCount = 0;
        clearTimeout(flagClickTimer);
        openAdminLogin();
      } else {
        clearTimeout(flagClickTimer);
        flagClickTimer = setTimeout(() => { flagClickCount = 0; }, 800);
      }
    });
  }

  // Keyboard shortcut: Alt + W (Wesam) or Alt + A
  document.addEventListener('keydown', (e) => {
    if ((e.altKey && (e.key === 'w' || e.key === 'W' || e.key === 'ص')) ||
        (e.altKey && (e.key === 'a' || e.key === 'A' || e.key === 'ش')) || 
        (e.ctrlKey && e.shiftKey && (e.key === 'A' || e.key === 'a' || e.key === 'W' || e.key === 'w'))) {
      e.preventDefault();
      openAdminLogin();
    }
    if (e.key === 'Escape') {
      closeAdminLogin();
      closeAdminDashboard();
    }
  });

  // Populate Admin Form Fields with current config
  function populateAdminForm() {
    const fields = {
      cfg_nameAr: siteConfig.nameAr,
      cfg_nameEn: siteConfig.nameEn,
      cfg_subtitle: siteConfig.subtitle,
      cfg_statusBadge: siteConfig.statusBadge,
      cfg_waNumber: siteConfig.waNumber,
      cfg_email: siteConfig.email,
      cfg_location: siteConfig.location,
      cfg_linkedin: siteConfig.linkedin || '',
      cfg_github: siteConfig.github || '',
      cfg_najahYears: siteConfig.najahYears,
      cfg_industrialYears: siteConfig.industrialYears,
      cfg_najahDesc: siteConfig.najahDesc,
      cfg_industrialDesc: siteConfig.industrialDesc,
      cfg_p1Title: siteConfig.p1Title,
      cfg_p1Desc: siteConfig.p1Desc,
      cfg_p2Title: siteConfig.p2Title,
      cfg_p2Desc: siteConfig.p2Desc,
      cfg_phrase1: siteConfig.typingPhrases[0] || '',
      cfg_phrase2: siteConfig.typingPhrases[1] || '',
      cfg_phrase3: siteConfig.typingPhrases[2] || '',
      cfg_phrase4: siteConfig.typingPhrases[3] || ''
    };

    for (const [id, val] of Object.entries(fields)) {
      const el = document.getElementById(id);
      if (el) el.value = val;
    }
  }

  // Open Admin Login
  function openAdminLogin() {
    if (isAdminLoggedIn) {
      openAdminDashboard();
      return;
    }
    if (adminLoginModal) {
      adminLoginModal.classList.add('active');
      document.body.style.overflow = 'hidden';
      if (adminLoginError) adminLoginError.style.display = 'none';
    }
  }

  function closeAdminLogin() {
    if (adminLoginModal) {
      adminLoginModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // Open Admin Dashboard
  function openAdminDashboard() {
    populateAdminForm();
    if (adminDashboardModal) {
      adminDashboardModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeAdminDashboard() {
    if (adminDashboardModal) {
      adminDashboardModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (closeAdminLoginBtn) closeAdminLoginBtn.addEventListener('click', closeAdminLogin);
  if (openAdminPanelBtn) openAdminPanelBtn.addEventListener('click', openAdminDashboard);
  if (closeAdminDashboardBtn) closeAdminDashboardBtn.addEventListener('click', closeAdminDashboard);

  // Handle Login Submit
  if (adminLoginForm) {
    adminLoginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const enteredEmail = document.getElementById('adminEmailInput').value.trim().toLowerCase();
      const enteredPass = document.getElementById('adminPassInput').value.trim();

      const savedPass = localStorage.getItem('wesam_admin_pass') || DEFAULT_ADMIN_PASS;

      if (enteredEmail === AUTHORIZED_ADMIN_EMAIL.toLowerCase() && enteredPass === savedPass) {
        isAdminLoggedIn = true;
        localStorage.setItem('wesam_admin_logged_in', 'true');
        closeAdminLogin();
        updateAdminUi();
        openAdminDashboard();
      } else {
        if (adminLoginError) {
          adminLoginError.textContent = "عفواً، البريد الإلكتروني أو كلمة المرور غير صحيحة. يرجى التأكد والمحاولة مجدداً.";
          adminLoginError.style.display = 'block';
        }
      }
    });
  }

  // Handle Logout
  if (adminLogoutBtn) {
    adminLogoutBtn.addEventListener('click', () => {
      isAdminLoggedIn = false;
      localStorage.removeItem('wesam_admin_logged_in');
      updateAdminUi();
      closeAdminDashboard();
      alert("تم تسجيل الخروج بنجاح من لوحة الإدارة.");
    });
  }

  // Dashboard Tab Switching
  const adminTabBtns = document.querySelectorAll('.admin-tab-btn');
  adminTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      adminTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const targetId = btn.getAttribute('data-tab');
      document.querySelectorAll('.admin-tab-content').forEach(c => c.classList.remove('active'));
      const targetContent = document.getElementById(targetId);
      if (targetContent) targetContent.classList.add('active');
    });
  });

  // Save Config Changes
  function saveAdminChanges() {
    siteConfig.nameAr = document.getElementById('cfg_nameAr').value.trim();
    siteConfig.nameEn = document.getElementById('cfg_nameEn').value.trim();
    siteConfig.subtitle = document.getElementById('cfg_subtitle').value.trim();
    siteConfig.statusBadge = document.getElementById('cfg_statusBadge').value.trim();
    siteConfig.waNumber = document.getElementById('cfg_waNumber').value.trim().replace(/\+/g, '');
    siteConfig.email = document.getElementById('cfg_email').value.trim();
    siteConfig.location = document.getElementById('cfg_location').value.trim();
    siteConfig.linkedin = document.getElementById('cfg_linkedin').value.trim();
    siteConfig.github = document.getElementById('cfg_github').value.trim();
    siteConfig.najahYears = document.getElementById('cfg_najahYears').value.trim();
    siteConfig.industrialYears = document.getElementById('cfg_industrialYears').value.trim();
    siteConfig.najahDesc = document.getElementById('cfg_najahDesc').value.trim();
    siteConfig.industrialDesc = document.getElementById('cfg_industrialDesc').value.trim();
    siteConfig.p1Title = document.getElementById('cfg_p1Title').value.trim();
    siteConfig.p1Desc = document.getElementById('cfg_p1Desc').value.trim();
    siteConfig.p2Title = document.getElementById('cfg_p2Title').value.trim();
    siteConfig.p2Desc = document.getElementById('cfg_p2Desc').value.trim();

    const p1 = document.getElementById('cfg_phrase1').value.trim();
    const p2 = document.getElementById('cfg_phrase2').value.trim();
    const p3 = document.getElementById('cfg_phrase3').value.trim();
    const p4 = document.getElementById('cfg_phrase4').value.trim();

    siteConfig.typingPhrases = [p1, p2, p3, p4].filter(p => p.length > 0);

    // Save to localStorage
    localStorage.setItem('wesam_portfolio_config', JSON.stringify(siteConfig));

    // Re-apply to DOM immediately
    applyConfigToDom();

    // Restart typing loop with new phrases
    clearTimeout(typeTimeoutId);
    charIndex = 0;
    phraseIndex = 0;
    isDeleting = false;
    typeLoop();

    alert("✨ تم حفظ كافة التعديلات وتطبيقها بنجاح على الموقع فورياً!");
    closeAdminDashboard();
  }

  const saveBtn1 = document.getElementById('saveAllAdminChangesBtn');
  const saveBtn2 = document.getElementById('saveAllAdminChangesBtnBottom');
  if (saveBtn1) saveBtn1.addEventListener('click', saveAdminChanges);
  if (saveBtn2) saveBtn2.addEventListener('click', saveAdminChanges);

  // Download Config JSON
  const downloadConfigBtn = document.getElementById('downloadConfigBtn');
  if (downloadConfigBtn) {
    downloadConfigBtn.addEventListener('click', () => {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(siteConfig, null, 2));
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", "wesam_portfolio_config.json");
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
    });
  }

  // Reset to Defaults
  const resetDefaultsBtn = document.getElementById('resetDefaultsBtn');
  if (resetDefaultsBtn) {
    resetDefaultsBtn.addEventListener('click', () => {
      if (confirm("هل أنت متأكد من رغبتك في استعادة الإعدادات الأصلية الافتراضية للموقع؟")) {
        localStorage.removeItem('wesam_portfolio_config');
        siteConfig = Object.assign({}, DEFAULT_CONFIG);
        applyConfigToDom();
        populateAdminForm();
        alert("تمت استعادة الإعدادات الأصلية بنجاح.");
      }
    });
  }

  // Support URL hash scroll on load
  if (window.location.hash) {
    setTimeout(() => {
      const target = document.querySelector(window.location.hash);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }, 400);
  }

});

})();
