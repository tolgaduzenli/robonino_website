export const locales = ["en", "tr"] as const;
export type Locale = (typeof locales)[number];

export const dictionary = {
  en: {
    nav: {
      studyInUK: "Study in UK",
      roboticsCoding: "Robotics & Coding",
      corporateEvents: "Corporate Events",
      aboutUs: "About Us",
      contact: "Contact",
      applyNow: "Apply Now",
    },
    home: {
      hero: {
        title: "Education, Technology & International Experiences",
        subtitle:
          "Helping children, families and professionals grow through learning, creativity and global experiences.",
        ctaStudyUK: "Study in UK",
        ctaRobotics: "Robotics & Coding",
        ctaCorporate: "Corporate Events",
      },
      services: {
        label: "Our Expertise",
        title: "Premium Learning Pillars",
        items: [
          {
            title: "Study English in the UK",
            features: ["School placement", "Summer schools", "Exam preparation"],
            cta: "Learn More",
          },
          {
            title: "Robotics & Coding for Kids",
            features: ["Robotics workshops", "STEM clubs", "Innovation camps"],
            cta: "Learn More",
          },
          {
            title: "Corporate & Social Events",
            features: ["Team building", "Robotics challenges", "Event production"],
            cta: "Learn More",
          },
        ],
      },
      why: {
        label: "Global Trust",
        title: "The Robonino Difference",
        description:
          "We bridge the gap between cultures and technologies, ensuring every student and professional finds their path to success with local expertise and global reach.",
        features: [
          {
            title: "UK-Based Local Support",
            description:
              "Direct presence in the UK ensures hands-on support for all students and events.",
          },
          {
            title: "Child Safety First",
            description:
              "Strict UK safeguarding standards applied to every program we offer.",
          },
          {
            title: "Bilingual Communication",
            description:
              "Full TR/EN support to ensure clear communication for Turkish families.",
          },
        ],
      },
      destinations: {
        title: "Explore Top Destinations",
        subtitle: "Choose from the most prestigious education hubs in the UK.",
        cities: [
          { name: "London", tagline: "World Capital of Education" },
          { name: "Oxford", tagline: "Traditional Excellence" },
          { name: "Cambridge", tagline: "The Spirit of Innovation" },
          { name: "Brighton", tagline: "Creative Coastal Living" },
        ],
      },
      testimonials: {
        title: "Voice of Our Community",
        items: [
          {
            quote:
              "Robonino's team in London made my son's first summer school experience incredibly safe and exciting. The bilingual support was a lifesaver.",
            name: "Arzu K.",
            role: "Parent",
          },
          {
            quote:
              "The robotics workshop was unlike anything I've seen before. We built actual AI systems while practicing English in Cambridge. Amazing!",
            name: "Can M.",
            role: "STEM Student",
          },
          {
            quote:
              "Organizing our annual leadership retreat with Robonino brought a fresh technological edge to our team building. Seamless execution.",
            name: "Deniz Y.",
            role: "HR Director",
          },
        ],
      },
      faq: {
        label: "Support",
        title: "Frequently Asked Questions",
        items: [
          {
            question: "What age groups do you serve?",
            answer:
              "Our programs are designed for children aged 7 to 18, with specific curriculum tracks for primary, secondary, and pre-university students.",
          },
          {
            question: "Are the programs certified?",
            answer:
              "Yes, all our English and STEM programs follow UK-standard educational frameworks and participants receive completion certificates recognized by our partner institutions.",
          },
          {
            question: "Do you offer online classes?",
            answer:
              "While our core strength is immersive in-person experiences in the UK, we offer specialized online coding and robotics prep courses throughout the year.",
          },
          {
            question: "How can I register for a trial?",
            answer:
              "You can book a free 15-minute consultation through our 'Book Consultation' button to discuss your child's needs and schedule a trial workshop.",
          },
          {
            question: "Is there bilingual support available?",
            answer:
              "Absolutely. We provide full TR/EN bilingual support to ensure clear communication between families and our educational staff in the UK.",
          },
          {
            question: "What safety standards do you follow?",
            answer:
              "We adhere strictly to UK Safeguarding and Child Protection standards, ensuring all staff are vetted and students are in a secure learning environment.",
          },
        ],
      },
      cta: {
        title: "Start Your International Learning Journey",
        subtitle:
          "Our experts are ready to guide you through every step of your UK education or robotics adventure.",
        contact: "Contact Us",
        book: "Book Consultation",
      },
    },
    studyInUK: {
      hero: {
        badge: "Academic Excellence",
        title: "Our Partner UK Schools",
        description:
          "We collaborate with the most prestigious educational institutions in the United Kingdom to provide world-class opportunities for our students. From historic boarding schools to innovative modern academies.",
        badges: [
          { icon: "verified", label: "British Council Certified" },
          { icon: "account_balance", label: "100+ Partnerships" },
        ],
      },
      schools: {
        label: "Our Network",
        title: "Accredited Institutions",
        description:
          "Browse our curated list of leading UK educational partners specializing in STEM, Arts, and Humanities.",
        filterLabel: "Filter by type:",
        filters: ["All Schools", "Boarding Schools", "STEM Focus", "Summer Schools"],
        items: [
          {
            icon: "school",
            name: "School Name 1",
            description:
              "Renowned for its excellence in science and technology, offering state-of-the-art laboratory facilities and a legacy of academic distinction in London.",
            location: "London, UK",
            cta: "View Details",
          },
          {
            icon: "history_edu",
            name: "School Name 2",
            description:
              "A prestigious institution with over 200 years of history, focusing on holistic development and providing a gateway to the world's top universities.",
            location: "Oxford, UK",
            cta: "View Details",
          },
        ],
        ctaCard: {
          title: "Can't find the right school?",
          description:
            "Our expert consultants can help you find a bespoke match based on your academic goals and career aspirations.",
          button: "Consult an Expert",
        },
      },
      partnership: {
        title: "Unparalleled Placement Success",
        description:
          "Our placement success rate is over 98% for Turkish students seeking UK entry. We handle the entire application ecosystem from start to finish.",
        statValue: "98%",
        statLabel: "Entry Rate",
        statDescription: "Into chosen first-preference institutions across the UK.",
      },
    },
    robotics: {
      hero: {
        badge: "Future Ready Skills",
        title: "Empowering Future Innovators through Robotics & Coding",
        description:
          "Hands-on STEM education programs for children aged 4-18, powered by the world-renowned Young Engineers methodology.",
        primaryCta: "Join a Workshop",
        secondaryCta: "Book a Free Trial",
      },
      programs: {
        label: "Our Curriculum",
        title: "Our Educational Programs",
        filters: {
          all: "All Ages",
          preschool: "Preschool (4-6)",
          primary: "Primary (6-12)",
          teens: "Teens (12+)",
        },
        items: [
          {
            icon: "child_care",
            category: "preschool",
            title: "Algo Buddy",
            age: "Age 4-6 | 45-60 Mins",
            description:
              "Early childhood coding without screens. Focuses on logic, spatial awareness, and problem-solving through play.",
            cta: "Learn More",
          },
          {
            icon: "construction",
            category: "preschool",
            title: "Big Builders",
            age: "Age 4-6 | 45-60 Mins",
            description:
              "Introduction to basic engineering principles. Kids build motorized models and explore mechanics.",
            cta: "Learn More",
          },
          {
            icon: "extension",
            category: "primary",
            title: "Bricks Challenge",
            age: "Age 6-12 | 75-90 Mins",
            description:
              "Our flagship program using LEGO to teach complex engineering concepts, physics, and classical mechanics.",
            cta: "Learn More",
          },
          {
            icon: "computer",
            category: "primary",
            title: "AlgoPlay",
            age: "Age 7-12 | 75-90 Mins",
            description:
              "Tangible coding experience where children use 'coding blocks' to command robots, bridging physical and digital.",
            cta: "Learn More",
          },
          {
            icon: "code",
            category: "teens",
            title: "Robotics",
            age: "Age 12+ | 90 Mins",
            description:
              "Advanced mechanical engineering and programming with professional-grade kits. Preparation for global competitions.",
            cta: "Learn More",
          },
          {
            icon: "terminal",
            category: "teens",
            title: "AlgoC",
            age: "Age 12+ | 90 Mins",
            description:
              "Transition from visual blocks to text-based coding languages like Python and C++, focused on real-world applications.",
            cta: "Learn More",
          },
        ],
      },
      spiral: {
        label: "Our Methodology",
        title: "The Spiral Method™",
        description:
          "Our unique educational philosophy ensures that children don't just \"finish\" a topic. They revisit concepts through increasingly complex challenges, reinforcing their knowledge while building confidence.",
        points: [
          {
            icon: "sync",
            title: "Constant Reiteration",
            description: "Core STEM principles are revisited in every module to ensure mastery.",
          },
          {
            icon: "trending_up",
            title: "Increasing Complexity",
            description:
              "Students progress from simple mechanical models to complex autonomous robotics.",
          },
          {
            icon: "celebration",
            title: "Fun through Learning",
            description:
              "We call it \"Edutainment\" — children are so engaged they don't realize they're learning engineering.",
          },
        ],
      },
      franchise: {
        badge: "Global Standard",
        title: "Certified Young Engineers Franchise",
        description:
          "Robonino is proud to be an authorized franchise of e² Young Engineers, bringing a world-class, award-winning STEM curriculum that has reached over 4 million children in 50+ countries to our local students.",
        logos: ["STEM.org", "LEGO®", "Young Engineers"],
      },
      cta: {
        title: "Ready to build the future?",
        description:
          "Schedule a free trial lesson or visit our workshop to see the magic of robotics in action.",
        primaryCta: "Book a Free Trial",
        secondaryCta: "Contact Us on WhatsApp",
      },
    },
    corporate: {
      hero: {
        badge: "Robonino PRO Workshops",
        title: "Ignite Innovation Through Play",
        description:
          "Transform your team with our world-class 'PRO' robotics workshops and creative team-building activities designed for modern organizations.",
        primaryCta: "Plan Your Team Event",
        secondaryCta: "Contact Us for a Quote",
        glassCard: { label: "Next-Gen Training", sublabel: "Hands-on STEM experience" },
      },
      proExperience: {
        title: "The PRO Experience",
        description:
          "The PRO activity is a premium offering designed specifically for high-performance organizations. In this program, participants construct our exclusive mechanical models, bridging the gap between abstract innovation and tangible engineering.",
        features: [
          {
            icon: "settings",
            title: "Exclusive Models",
            description: "Build complex, motorized mechanisms available only to our corporate partners.",
          },
          {
            icon: "groups",
            title: "Elite Facilitation",
            description: "Guided by expert instructors who understand corporate dynamics and team growth.",
          },
        ],
      },
      whyRobotics: {
        title: "Why Robotics for Teams?",
        description:
          "We use technical challenges to unlock human potential and foster cultural transformation within your workplace.",
        items: [
          {
            icon: "lightbulb",
            title: "Innovation Mindset",
            description:
              "Encourage out-of-the-box thinking as teams navigate the trial-and-error process of mechanical engineering and coding logic.",
          },
          {
            icon: "forum",
            title: "Communication",
            description:
              "Break down silos through structured, hands-on collaborative tasks that require precise verbal coordination.",
          },
          {
            icon: "psychology",
            title: "Problem Solving",
            description:
              "Real-world engineering hurdles that mimic business challenges, requiring analytical resilience.",
          },
          {
            icon: "leaderboard",
            title: "Leadership",
            description:
              "Natural leaders emerge during technical assembly, allowing management to observe team roles in a low-stakes, high-engagement setting.",
          },
        ],
        feature: {
          title: "Future-Proof Your Culture",
          description:
            "Integrating technology and teamwork isn't just about fun; it's about building a culture that thrives on change and digital transformation.",
          checklist: ["Increased Employee Engagement", "Hands-on Digital Literacy"],
        },
      },
      workshopFormats: {
        title: "Seamless Execution",
        description:
          "We've streamlined the logistics so you can focus entirely on the experience. Our instructors turn any office space into an innovation hub.",
        items: [
          {
            icon: "home_work",
            title: "On-Site Delivery",
            description: "We come to your office, coworking space, or chosen event venue.",
          },
          {
            icon: "inventory",
            title: "Full Kit Supply",
            description: "We provide all building blocks, tablets, software, and motors.",
          },
          {
            icon: "schedule",
            title: "120-Minute Sprints",
            description: "Optimal duration to maximize engagement without disrupting the workday.",
          },
          {
            icon: "verified_user",
            title: "Expert Leads",
            description: "Certified Robonino instructors facilitate the entire journey.",
          },
        ],
      },
      flexible: {
        title: "Flexible for All Organizations",
        description:
          "Whether you are a 10-person startup or a multinational corporation, our workshops are scalable to meet your team's specific goals.",
        chips: [
          { icon: "rocket", label: "Agile Startups" },
          { icon: "business", label: "Global Enterprises" },
          { icon: "school", label: "Educational Boards" },
          { icon: "volunteer_activism", label: "Non-Profit Retreats" },
        ],
      },
      cta: {
        title: "Ready to transform your team?",
        description:
          "Our bookings for the next quarter are filling up fast. Get in touch today to secure a spot for your team's next breakthrough experience.",
        primaryCta: "Plan Your Team Event",
        secondaryCta: "Contact Us for a Quote",
        note: "Typical response time: Under 4 hours",
      },
    },
    about: {
      hero: {
        badge: "About Our Vision",
        titlePrefix: "Bridging Education and ",
        titleHighlight: "Innovation",
        titleSuffix: " for the Next Generation.",
        description:
          "We are a global bridge connecting ambitious students with world-class UK education and empowering young minds through advanced STEM methodologies.",
        primaryCta: "Our Programs",
        secondaryCta: "Contact Us",
      },
      missionVision: {
        vision: {
          icon: "public",
          title: "International Vision",
          description:
            "To become the premier gateway for Turkish students to access elite British educational institutions, fostering a generation of global leaders equipped with cross-cultural fluency and academic excellence.",
          cta: "Discover UK Consultancy",
        },
        stem: {
          icon: "precision_manufacturing",
          title: "STEM Leadership",
          description:
            "Leading the Young Engineers franchise to revolutionize STEM education through hands-on learning and technological intuition.",
        },
        stats: [
          { value: "500+", label: "Students Placed" },
          { value: "12", label: "UK Partners" },
          { value: "100%", label: "Success Rate" },
          { value: "20+", label: "STEM Programs" },
        ],
      },
      story: {
        title: "Our Story",
        paragraphs: [
          "Robonino was born from a simple yet powerful observation: the educational methodologies used in the world's most successful economies could be localized to empower students everywhere.",
          "We started as a small bridge between Turkey and the UK's prestigious boarding schools. Today, we've evolved into an integrated educational hub, blending the academic rigor of British consultancy with the innovative spirit of global STEM initiatives. We bring world-class methodologies directly to local classrooms, ensuring no student is left behind in the digital age.",
        ],
        quote: "Excellence is not an act, but a habit that we instill in every student we guide.",
      },
      values: {
        title: "Our Core Values",
        items: [
          {
            icon: "lightbulb",
            title: "Innovation",
            description: "Pushing boundaries in STEM and educational technology.",
          },
          {
            icon: "verified_user",
            title: "Trust",
            description: "Building lasting relationships with parents and schools.",
          },
          {
            icon: "language",
            title: "Global",
            description: "Broadening horizons through international education.",
          },
          {
            icon: "star",
            title: "Excellence",
            description: "Maintaining the highest standards in every service.",
          },
        ],
      },
      franchise: {
        badge: "Partnership",
        title: "Franchise & STEM Excellence",
        description:
          "In partnership with Young Engineers, we bring an award-winning STEM curriculum to the region. Utilizing LEGO® Education kits and our proprietary spiral learning method, we make complex scientific principles intuitive and fun.",
        bullets: [
          "Hands-on Mechanical Engineering",
          "Software & Coding Integration",
          "Entrepreneurial Mindset Training",
        ],
        button: "Partner With Us",
        certifiedLabel: "Certified Franchise",
        certifiedSublabel: "European Standards",
      },
      cta: {
        title: "Ready to Shape the Future?",
        description:
          "Whether you are looking for UK educational consultancy or world-class STEM programs for your school, Robonino is here to lead the way.",
        primaryCta: "Join Our Journey",
        secondaryCta: "View Our Programs",
      },
    },
    contact: {
      hero: {
        badge: "Get in Touch",
        title: "Let's Start Your Journey",
        description:
          "Whether you're aiming for a UK degree, exploring STEM for your child, or looking for corporate excellence, our team is here to guide you.",
      },
      info: {
        items: [
          {
            icon: "location_on",
            title: "Istanbul Office",
            lines: ["Levent Loft, Büyükdere Cd. No: 201", "Levent, Istanbul, Turkey"],
          },
          {
            icon: "mail",
            title: "Email Us",
            lines: ["info@robonino.com"],
            note: "Response within 24 hours",
          },
          {
            icon: "phone_iphone",
            title: "Contact & WhatsApp",
            lines: ["+90 (212) 555 0000"],
            whatsapp: "Chat on WhatsApp",
          },
        ],
        mapLabel: "Open in Google Maps",
      },
      form: {
        name: { label: "Full Name", placeholder: "John Doe" },
        email: { label: "Email Address", placeholder: "john@example.com" },
        phone: { label: "Phone Number", placeholder: "+90" },
        interest: {
          label: "Interest Type",
          options: ["Study in UK", "Robotics & Coding", "Corporate Events", "Other Enquiry"],
        },
        message: { label: "Message", placeholder: "How can we help you?" },
        submit: "Send Message",
      },
      specialized: {
        title: "Looking for specialized training?",
        description:
          "Our corporate STEM programs are designed to upskill teams with 21st-century robotics and coding expertise.",
        button: "Download Brochure",
      },
    },
    footer: {
      description:
        "Empowering growth through world-class UK education and innovative robotics programming.",
      programsTitle: "Programs",
      programs: ["UK Schools", "STEM Programs", "Corporate Hub"],
      companyTitle: "Company",
      company: ["About Us", "Contact"],
      getHelpTitle: "Get Help",
      whatsapp: "WhatsApp Support",
      copyright: "© 2024 Robonino International Education. All rights reserved.",
    },
  },
  tr: {
    nav: {
      studyInUK: "İngiltere'de Eğitim",
      roboticsCoding: "Robotik ve Kodlama",
      corporateEvents: "Kurumsal Etkinlikler",
      aboutUs: "Hakkımızda",
      contact: "İletişim",
      applyNow: "Başvur",
    },
    home: {
      hero: {
        title: "Eğitim, Teknoloji ve Uluslararası Deneyimler",
        subtitle:
          "Kültürler ve teknolojiler arasında köprü kurarak, her öğrencinin ve profesyonelin yerel uzmanlık ve küresel erişimle başarıya giden yolunu bulmasını sağlıyoruz.",
        ctaStudyUK: "İngiltere'de Eğitim",
        ctaRobotics: "Robotik ve Kodlama",
        ctaCorporate: "Kurumsal Etkinlikler",
      },
      services: {
        label: "Uzmanlık Alanımız",
        title: "Premium Öğrenme Sütunları",
        items: [
          {
            title: "İngiltere'de İngilizce Eğitimi",
            features: ["Okul yerleştirme", "Yaz okulları", "Sınava hazırlık"],
            cta: "Danışmanlık Alın",
          },
          {
            title: "Çocuklar İçin Robotik ve Kodlama",
            features: ["Robotik atölyeleri", "STEM kulüpleri", "İnovasyon kampları"],
            cta: "Danışmanlık Alın",
          },
          {
            title: "Kurumsal ve Sosyal Etkinlikler",
            features: ["Takım çalışması", "Robotik yarışmalar", "Etkinlik prodüksiyonu"],
            cta: "Danışmanlık Alın",
          },
        ],
      },
      why: {
        label: "Küresel Güven",
        title: "Robonino Farkı",
        description:
          "Kültürler ve teknolojiler arasında köprü kurarak, her öğrencinin ve profesyonelin yerel uzmanlık ve küresel erişimle başarıya giden yolunu bulmasını sağlıyoruz.",
        features: [
          {
            title: "İngiltere Merkezli Yerel Destek",
            description:
              "İngiltere'deki doğrudan varlığımız, tüm öğrenciler ve etkinlikler için birebir destek sağlar.",
          },
          {
            title: "Çocuk Güvenliği Önceliğimiz",
            description:
              "Sunduğumuz her programda katı İngiltere çocuk koruma standartları uygulanır.",
          },
          {
            title: "Çift Dilli İletişim",
            description:
              "Türk aileler için net iletişim sağlamak amacıyla tam TR/EN desteği.",
          },
        ],
      },
      destinations: {
        title: "En Popüler Destinasyonları Keşfedin",
        subtitle: "İngiltere'nin en prestijli eğitim merkezleri arasından seçiminizi yapın.",
        cities: [
          { name: "Londra", tagline: "Eğitimin Dünya Başkenti" },
          { name: "Oxford", tagline: "Geleneksel Mükemmellik" },
          { name: "Cambridge", tagline: "İnovasyon Ruhu" },
          { name: "Brighton", tagline: "Yaratıcı Kıyı Yaşamı" },
        ],
      },
      testimonials: {
        title: "Topluluğumuzun Sesi",
        items: [
          {
            quote:
              "Robonino'nun Londra'daki ekibi oğlumun ilk yaz okulu deneyimini inanılmaz derecede güvenli ve heyecan verici kıldı. Çift dilli destek bir can kurtarandı.",
            name: "Arzu K.",
            role: "Veli",
          },
          {
            quote:
              "Robotik atölyesi daha önce gördüğüm hiçbir şeye benzemiyordu. Cambridge'de İngilizce pratiği yaparken gerçek yapay zeka sistemleri inşa ettik. Harikaydı!",
            name: "Can M.",
            role: "STEM Öğrencisi",
          },
          {
            quote:
              "Yıllık liderlik kampımızı Robonino ile organize etmek, ekip çalışmamıza taze bir teknolojik bakış açısı getirdi. Kusursuz bir uygulama.",
            name: "Deniz Y.",
            role: "İK Direktörü",
          },
        ],
      },
      faq: {
        label: "Bilgi Merkezi",
        title: "Sıkça Sorulan Sorular",
        items: [
          {
            question: "İngiltere'de eğitim için yaş sınırı var mı?",
            answer:
              "Yaz okullarımız genellikle 8-17 yaş arası öğrencilere yöneliktir. Ancak üniversite hazırlık ve kurumsal eğitim programlarımız için yaş sınırları programın içeriğine göre değişiklik göstermektedir.",
          },
          {
            question: "Robotik atölyeleri için ön bilgi gerekiyor mu?",
            answer:
              "Hayır, başlangıç seviyesindeki atölyelerimiz için herhangi bir ön teknik bilgi gerekmemektedir. Uzman eğitmenlerimiz temelden başlayarak ileri seviyeye kadar rehberlik etmektedir.",
          },
          {
            question: "Kayıt süreci nasıl işliyor?",
            answer:
              "\"Bize Ulaşın\" butonu veya WhatsApp hattımız üzerinden ilk görüşmeyi başlatabilirsiniz. Danışmanlarımız sizin için en uygun programı belirledikten sonra gerekli evrak ve vize süreçlerinde tam destek sağlamaktadır.",
          },
          {
            question: "Eğitimler sırasında Türkçe destek sağlanıyor mu?",
            answer:
              "Evet, İngiltere merkezli ekibimiz çift dilli (Türkçe/İngilizce) destek sunarak hem öğrencilerin hem de ailelerin tüm süreçte kendilerini güvende hissetmelerini sağlar.",
          },
          {
            question: "Programlar sertifikalı mı?",
            answer:
              "Evet, tüm İngilizce ve STEM programlarımız İngiltere standartlarındaki eğitim çerçevelerini takip eder ve katılımcılar partner kurumlarımız tarafından tanınan bitirme sertifikaları alır.",
          },
          {
            question: "Online dersler sunuyor musunuz?",
            answer:
              "Temel gücümüz İngiltere'deki yüz yüze deneyimler olsa da, yıl boyunca özel online kodlama ve robotik hazırlık kursları sunuyoruz.",
          },
        ],
      },
      cta: {
        title: "Uluslararası Öğrenme Yolculuğunuza Başlayın",
        subtitle:
          "Uzmanlarımız, İngiltere eğitimi veya robotik maceranızın her adımında size rehberlik etmeye hazır.",
        contact: "Bize Ulaşın",
        book: "Danışmanlık Alın",
      },
    },
    studyInUK: {
      hero: {
        badge: "Akademik Başarı",
        title: "Ortak İngiltere Okullarımız",
        description:
          "İngiltere'deki en prestijli eğitim kurumlarıyla iş birliği yaparak öğrencilerimize tarihi yatılı okullardan yenilikçi modern akademilere kadar dünya standartlarında fırsatlar sunuyoruz.",
        badges: [
          { icon: "verified", label: "British Council Sertifikalı" },
          { icon: "account_balance", label: "100+ Ortaklık" },
        ],
      },
      schools: {
        label: "Ağımız",
        title: "Akredite Kurumlar",
        description:
          "Sanat, teknoloji ve beşeri bilimler alanlarında uzmanlaşmış, önde gelen İngiltere eğitim ortaklarımızın küratörlüğünü yaptığı listeye göz atın.",
        filterLabel: "Türe göre filtrele:",
        filters: ["Tüm Okullar", "Yatılı Okullar", "STEM Odaklı", "Yaz Okulları"],
        items: [
          {
            icon: "school",
            name: "Okul Adı 1",
            description:
              "Bilim ve teknoloji alanındaki üstünlüğüyle tanınan, Londra'da son teknoloji laboratuvar imkanları sunan köklü bir akademik kurum.",
            location: "Londra, İngiltere",
            cta: "Detayları Gör",
          },
          {
            icon: "history_edu",
            name: "Okul Adı 2",
            description:
              "200 yılı aşan tarihiyle bütünsel gelişime odaklanan ve dünyanın en iyi üniversitelerine açılan bir kapı olan saygın bir kurum.",
            location: "Oxford, İngiltere",
            cta: "Detayları Gör",
          },
        ],
        ctaCard: {
          title: "Aradığınız okulu bulamadınız mı?",
          description:
            "Uzman danışmanlarımız akademik hedeflerinize ve kariyer beklentilerinize göre size özel bir eşleştirme yapabilir.",
          button: "Uzmana Danışın",
        },
      },
      partnership: {
        title: "Eşsiz Yerleştirme Başarısı",
        description:
          "İngiltere'ye giriş arayan Türk öğrenciler için yerleştirme başarı oranımız %98'in üzerinde. Başvuru sürecinin tamamını baştan sona biz yönetiyoruz.",
        statValue: "%98",
        statLabel: "Kabul Oranı",
        statDescription: "İngiltere'deki ilk tercih kurumlara kabul.",
      },
    },
    robotics: {
      hero: {
        badge: "Geleceğe Hazır Beceriler",
        title: "Robotik ve Kodlama ile Geleceğin Yenilikçilerini Güçlendiriyoruz",
        description:
          "Dünyaca ünlü Young Engineers metodolojisiyle desteklenen, 4-18 yaş arası çocuklar için uygulamalı STEM eğitim programları.",
        primaryCta: "Bir Atölyeye Katılın",
        secondaryCta: "Ücretsiz Deneme Dersi Alın",
      },
      programs: {
        label: "Müfredatımız",
        title: "Eğitim Programlarımız",
        filters: {
          all: "Tüm Yaşlar",
          preschool: "Okul Öncesi (4-6)",
          primary: "İlkokul (6-12)",
          teens: "Gençler (12+)",
        },
        items: [
          {
            icon: "child_care",
            category: "preschool",
            title: "Algo Buddy",
            age: "4-6 Yaş | 45-60 Dakika",
            description:
              "Ekran kullanmadan erken çocukluk kodlaması. Oyun yoluyla mantık, mekansal farkındalık ve problem çözmeye odaklanır.",
            cta: "Daha Fazla Bilgi",
          },
          {
            icon: "construction",
            category: "preschool",
            title: "Big Builders",
            age: "4-6 Yaş | 45-60 Dakika",
            description:
              "Temel mühendislik prensiplerine giriş. Çocuklar motorlu modeller inşa eder ve mekaniği keşfeder.",
            cta: "Daha Fazla Bilgi",
          },
          {
            icon: "extension",
            category: "primary",
            title: "Bricks Challenge",
            age: "6-12 Yaş | 75-90 Dakika",
            description:
              "Karmaşık mühendislik kavramlarını, fiziği ve klasik mekaniği LEGO ile öğreten amiral gemisi programımız.",
            cta: "Daha Fazla Bilgi",
          },
          {
            icon: "computer",
            category: "primary",
            title: "AlgoPlay",
            age: "7-12 Yaş | 75-90 Dakika",
            description:
              "Çocukların robotlara komut vermek için 'kodlama bloklarını' kullandığı, fiziksel ve dijital dünyalar arasında köprü kuran somut bir kodlama deneyimi.",
            cta: "Daha Fazla Bilgi",
          },
          {
            icon: "code",
            category: "teens",
            title: "Robotik",
            age: "12+ Yaş | 90 Dakika",
            description:
              "Profesyonel düzey kitlerle ileri mekanik mühendislik ve programlama. Küresel yarışmalara hazırlık.",
            cta: "Daha Fazla Bilgi",
          },
          {
            icon: "terminal",
            category: "teens",
            title: "AlgoC",
            age: "12+ Yaş | 90 Dakika",
            description:
              "Görsel bloklardan Python ve C++ gibi metin tabanlı kodlama dillerine geçiş; gerçek dünya uygulamalarına odaklanır.",
            cta: "Daha Fazla Bilgi",
          },
        ],
      },
      spiral: {
        label: "Metodolojimiz",
        title: "Spiral Metot™",
        description:
          "Eşsiz eğitim felsefemiz, çocukların bir konuyu sadece 'bitirmesini' değil, giderek karmaşıklaşan zorluklarla kavramları tekrar ele almasını sağlar; bu da bilgilerini güçlendirirken özgüvenlerini artırır.",
        points: [
          {
            icon: "sync",
            title: "Sürekli Tekrar",
            description: "Temel STEM ilkeleri, ustalığı sağlamak için her modülde yeniden ele alınır.",
          },
          {
            icon: "trending_up",
            title: "Artan Karmaşıklık",
            description: "Öğrenciler basit mekanik modellerden karmaşık otonom robotiğe doğru ilerler.",
          },
          {
            icon: "celebration",
            title: "Öğrenirken Eğlenme",
            description:
              "Buna 'Edutainment' diyoruz — çocuklar kendilerini işin içine kaptırırlar ve mühendislik öğrendiklerinin farkına bile varmazlar.",
          },
        ],
      },
      franchise: {
        badge: "Küresel Standart",
        title: "Sertifikalı Young Engineers Franchise'ı",
        description:
          "Robonino, e² Young Engineers'ın yetkili franchise'ı olmaktan gurur duyar; 50'den fazla ülkede 4 milyondan fazla çocuğa ulaşmış, ödüllü ve dünya standartlarındaki STEM müfredatını yerel öğrencilerimize sunuyoruz.",
        logos: ["STEM.org", "LEGO®", "Young Engineers"],
      },
      cta: {
        title: "Geleceği inşa etmeye hazır mısınız?",
        description:
          "Robotik büyüsünü iş başında görmek için ücretsiz bir deneme dersi planlayın veya atölyemizi ziyaret edin.",
        primaryCta: "Ücretsiz Deneme Dersi Alın",
        secondaryCta: "WhatsApp'tan Bize Ulaşın",
      },
    },
    corporate: {
      hero: {
        badge: "Robonino PRO Atölyeleri",
        title: "Oyun Yoluyla İnovasyonu Ateşleyin",
        description:
          "Modern organizasyonlar için tasarlanmış dünya standartlarındaki 'PRO' robotik atölyelerimiz ve yaratıcı ekip oluşturma etkinlikleriyle ekibinizi dönüştürün.",
        primaryCta: "Ekip Etkinliğinizi Planlayın",
        secondaryCta: "Teklif İçin Bize Ulaşın",
        glassCard: { label: "Yeni Nesil Eğitim", sublabel: "Uygulamalı STEM deneyimi" },
      },
      proExperience: {
        title: "PRO Deneyimi",
        description:
          "PRO etkinliği, yüksek performanslı organizasyonlar için özel olarak tasarlanmış premium bir hizmettir. Bu programda katılımcılar, soyut inovasyon ile somut mühendislik arasındaki boşluğu dolduran özel mekanik modellerimizi inşa eder.",
        features: [
          {
            icon: "settings",
            title: "Özel Modeller",
            description: "Sadece kurumsal ortaklarımıza özel, karmaşık ve motorlu mekanizmalar inşa edin.",
          },
          {
            icon: "groups",
            title: "Elit Kolaylaştırma",
            description: "Kurumsal dinamikleri ve ekip gelişimini anlayan uzman eğitmenler eşliğinde.",
          },
        ],
      },
      whyRobotics: {
        title: "Ekipler İçin Neden Robotik?",
        description:
          "İnsan potansiyelini açığa çıkarmak ve iş yerinizde kültürel dönüşümü teşvik etmek için teknik zorlukları kullanıyoruz.",
        items: [
          {
            icon: "lightbulb",
            title: "İnovasyon Zihniyeti",
            description:
              "Ekipler mekanik mühendislik ve kodlama mantığının deneme-yanılma sürecinde ilerlerken kalıpların dışında düşünmeyi teşvik eder.",
          },
          {
            icon: "forum",
            title: "İletişim",
            description:
              "Hassas sözlü koordinasyon gerektiren yapılandırılmış, uygulamalı işbirlikçi görevlerle departmanlar arası engelleri kaldırır.",
          },
          {
            icon: "psychology",
            title: "Problem Çözme",
            description:
              "İş dünyasındaki zorlukları taklit eden, analitik direnç gerektiren gerçek mühendislik engelleri.",
          },
          {
            icon: "leaderboard",
            title: "Liderlik",
            description:
              "Teknik montaj sırasında doğal liderler ortaya çıkar; yönetim, ekip rollerini düşük riskli, yüksek katılımlı bir ortamda gözlemleyebilir.",
          },
        ],
        feature: {
          title: "Kültürünüzü Geleceğe Hazırlayın",
          description:
            "Teknoloji ve ekip çalışmasını entegre etmek sadece eğlenceyle ilgili değildir; değişime ve dijital dönüşüme dayanan bir kültür inşa etmekle ilgilidir.",
          checklist: ["Artan Çalışan Bağlılığı", "Uygulamalı Dijital Okuryazarlık"],
        },
      },
      workshopFormats: {
        title: "Kusursuz Uygulama",
        description:
          "Lojistiği sizin için kolaylaştırdık, böylece tamamen deneyime odaklanabilirsiniz. Eğitmenlerimiz her ofis alanını bir inovasyon merkezine dönüştürür.",
        items: [
          {
            icon: "home_work",
            title: "Yerinde Teslimat",
            description: "Ofisinize, ortak çalışma alanınıza veya seçtiğiniz etkinlik mekanına geliyoruz.",
          },
          {
            icon: "inventory",
            title: "Tam Kit Tedariği",
            description: "Tüm yapı bloklarını, tabletleri, yazılımları ve motorları biz sağlıyoruz.",
          },
          {
            icon: "schedule",
            title: "120 Dakikalık Seanslar",
            description: "İş gününü kesintiye uğratmadan katılımı en üst düzeye çıkaran ideal süre.",
          },
          {
            icon: "verified_user",
            title: "Uzman Eğitmenler",
            description: "Sertifikalı Robonino eğitmenleri tüm süreci kolaylaştırır.",
          },
        ],
      },
      flexible: {
        title: "Tüm Organizasyonlar İçin Esnek",
        description:
          "10 kişilik bir girişim olun ya da çok uluslu bir şirket, atölyelerimiz ekibinizin özel hedeflerine göre ölçeklenebilir.",
        chips: [
          { icon: "rocket", label: "Çevik Girişimler" },
          { icon: "business", label: "Küresel İşletmeler" },
          { icon: "school", label: "Eğitim Kurumları" },
          { icon: "volunteer_activism", label: "Kâr Amacı Gütmeyen Kuruluşlar" },
        ],
      },
      cta: {
        title: "Ekibinizi dönüştürmeye hazır mısınız?",
        description:
          "Gelecek çeyrek için rezervasyonlarımız hızla doluyor. Ekibinizin bir sonraki çığır açan deneyimi için yerinizi ayırtmak için bugün bize ulaşın.",
        primaryCta: "Ekip Etkinliğinizi Planlayın",
        secondaryCta: "Teklif İçin Bize Ulaşın",
        note: "Ortalama yanıt süresi: 4 saatten az",
      },
    },
    about: {
      hero: {
        badge: "Vizyonumuz Hakkında",
        titlePrefix: "Yeni Nesil İçin Eğitim ve ",
        titleHighlight: "İnovasyonu",
        titleSuffix: " Birleştiriyoruz.",
        description:
          "Hedefleri büyük öğrencileri dünya standartlarındaki İngiltere eğitimine bağlayan küresel bir köprüyüz ve genç beyinleri ileri STEM metodolojileriyle güçlendiriyoruz.",
        primaryCta: "Programlarımız",
        secondaryCta: "Bize Ulaşın",
      },
      missionVision: {
        vision: {
          icon: "public",
          title: "Uluslararası Vizyon",
          description:
            "Türk öğrencilerin seçkin İngiliz eğitim kurumlarına erişimi için önde gelen kapı olmak ve kültürler arası akıcılık ile akademik mükemmellikle donanmış bir küresel liderler nesli yetiştirmek.",
          cta: "İngiltere Danışmanlığını Keşfedin",
        },
        stem: {
          icon: "precision_manufacturing",
          title: "STEM Liderliği",
          description:
            "Uygulamalı öğrenme ve teknolojik sezgi yoluyla STEM eğitiminde devrim yaratmak için Young Engineers franchise'ına liderlik ediyoruz.",
        },
        stats: [
          { value: "500+", label: "Yerleştirilen Öğrenci" },
          { value: "12", label: "İngiltere Ortağı" },
          { value: "%100", label: "Başarı Oranı" },
          { value: "20+", label: "STEM Programı" },
        ],
      },
      story: {
        title: "Hikayemiz",
        paragraphs: [
          "Robonino, basit ama güçlü bir gözlemden doğdu: dünyanın en başarılı ekonomilerinde kullanılan eğitim metodolojileri, her yerdeki öğrencileri güçlendirmek için yerelleştirilebilirdi.",
          "Türkiye ile İngiltere'nin prestijli yatılı okulları arasında küçük bir köprü olarak başladık. Bugün, İngiliz danışmanlığının akademik titizliğini küresel STEM girişimlerinin yenilikçi ruhuyla birleştiren bütünleşik bir eğitim merkezine dönüştük. Dünya standartlarındaki metodolojileri doğrudan yerel sınıflara taşıyarak, dijital çağda hiçbir öğrencinin geride kalmamasını sağlıyoruz.",
        ],
        quote: "Mükemmellik bir eylem değil, yol gösterdiğimiz her öğrenciye aşıladığımız bir alışkanlıktır.",
      },
      values: {
        title: "Temel Değerlerimiz",
        items: [
          {
            icon: "lightbulb",
            title: "İnovasyon",
            description: "STEM ve eğitim teknolojisinde sınırları zorlamak.",
          },
          {
            icon: "verified_user",
            title: "Güven",
            description: "Ailelerle ve okullarla kalıcı ilişkiler kurmak.",
          },
          {
            icon: "language",
            title: "Küresellik",
            description: "Uluslararası eğitim yoluyla ufukları genişletmek.",
          },
          {
            icon: "star",
            title: "Mükemmellik",
            description: "Her hizmette en yüksek standartları korumak.",
          },
        ],
      },
      franchise: {
        badge: "Ortaklık",
        title: "Franchise ve STEM Mükemmelliği",
        description:
          "Young Engineers ile ortaklığımız sayesinde bölgeye ödüllü bir STEM müfredatı sunuyoruz. LEGO® Education setlerini ve kendi spiral öğrenme metodumuzu kullanarak karmaşık bilimsel ilkeleri sezgisel ve eğlenceli hale getiriyoruz.",
        bullets: [
          "Uygulamalı Mekanik Mühendislik",
          "Yazılım ve Kodlama Entegrasyonu",
          "Girişimci Zihniyet Eğitimi",
        ],
        button: "Bizimle Ortak Olun",
        certifiedLabel: "Sertifikalı Franchise",
        certifiedSublabel: "Avrupa Standartları",
      },
      cta: {
        title: "Geleceği Şekillendirmeye Hazır mısınız?",
        description:
          "İster İngiltere eğitim danışmanlığı ister okulunuz için dünya standartlarında STEM programları arıyor olun, Robonino size yol göstermek için burada.",
        primaryCta: "Yolculuğumuza Katılın",
        secondaryCta: "Programlarımızı İnceleyin",
      },
    },
    contact: {
      hero: {
        badge: "Bize Ulaşın",
        title: "Yolculuğunuza Birlikte Başlayalım",
        description:
          "İngiltere'de bir derece hedefliyor, çocuğunuz için STEM seçenekleri arıyor veya kurumsal mükemmellik istiyor olun; ekibimiz size yol göstermek için burada.",
      },
      info: {
        items: [
          {
            icon: "location_on",
            title: "İstanbul Ofisi",
            lines: ["Levent Loft, Büyükdere Cd. No: 201", "Levent, İstanbul, Türkiye"],
          },
          {
            icon: "mail",
            title: "Bize Yazın",
            lines: ["info@robonino.com"],
            note: "24 saat içinde yanıt",
          },
          {
            icon: "phone_iphone",
            title: "Telefon ve WhatsApp",
            lines: ["+90 (212) 555 0000"],
            whatsapp: "WhatsApp'tan Yazın",
          },
        ],
        mapLabel: "Google Haritalar'da Aç",
      },
      form: {
        name: { label: "Ad Soyad", placeholder: "Ahmet Yılmaz" },
        email: { label: "E-posta Adresi", placeholder: "ornek@robonino.com" },
        phone: { label: "Telefon Numarası", placeholder: "+90 5XX XXX XX XX" },
        interest: {
          label: "İlgi Alanı",
          options: ["İngiltere'de Eğitim", "Robotik ve Kodlama", "Kurumsal Etkinlikler", "Diğer"],
        },
        message: { label: "Mesaj", placeholder: "Size nasıl yardımcı olabiliriz?" },
        submit: "Mesaj Gönder",
      },
      specialized: {
        title: "Özel eğitim mi arıyorsunuz?",
        description:
          "Kurumsal STEM programlarımız, ekipleri 21. yüzyıl robotik ve kodlama uzmanlığıyla donatmak için tasarlanmıştır.",
        button: "Broşürü İndirin",
      },
    },
    footer: {
      description:
        "Dünya standartlarında İngiltere eğitimi ve yenilikçi robotik programlama yoluyla gelişimi destekliyoruz.",
      programsTitle: "Programlar",
      programs: ["İngiltere Okulları", "STEM Programları", "Kurumsal Merkez"],
      companyTitle: "Şirket",
      company: ["Hakkımızda", "İletişim"],
      getHelpTitle: "Yardım Alın",
      whatsapp: "WhatsApp Desteği",
      copyright: "© 2024 Robonino Uluslararası Eğitim. Tüm hakları saklıdır.",
    },
  },
} satisfies Record<Locale, unknown>;

export type Dictionary = typeof dictionary.en;
