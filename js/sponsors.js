const translations = {
  az: {
    brandSubtitle: "Azərbaycan futbol klubu",
    backToMain: "Əsas sayta qayıt",
    heroKicker: "Tərəfdaşlar və dəstək",
    heroTitle: "Zirvə FC sponsorları",
    heroText: "Klubun inkişafını, görünürlüğünü və uzunmüddətli yolunu dəstəkləyən tərəfdaş və sponsorlarla tanış olun.",
    sectionKicker: "Klub tərəfdaşları",
    sectionTitle: "Sponsorlar",
    sectionDesc: "Klubun sponsorları və strateji tərəfdaşları.",
    footerText: "Klub sponsorlarının səhifəsi.",
    sponsorButton: "Ətraflı",
    sponsorType: "Tərəfdaşl"
  }, 
  ru: {
    brandSubtitle: "Азербайджанский футбольный клуб",
    backToMain: "Назад на основной сайт",
    heroKicker: "Партнёры и поддержка",
    heroTitle: "Спонсоры Zirvə FC",
    heroText: "Познакомьтесь с партнёрами и спонсорами, которые поддерживают развитие, узнаваемость и долгосрочный рост клуба.",
    sectionKicker: "Партнёры клуба",
    sectionTitle: "Спонсоры",
    sectionDesc: "Спонсоры и стратегические партнёры клуба.",
    footerText: "Страница спонсоров клуба.",
    sponsorButton: "Подробнее",
    sponsorType: "Партнер"
  },
  en: {
    brandSubtitle: "Azerbaijani football club",
    backToMain: "Back to main site",
    heroKicker: "Partners & Support",
    heroTitle: "Sponsors of Zirvə FC",
    heroText: "Meet the partners and sponsors who support the club’s growth, visibility and long-term development.",
    sectionKicker: "Club partners",
    sectionTitle: "Sponsors",
    sectionDesc: "Sponsors and strategic partners of the club.",
    footerText: "Club sponsors page.",
    sponsorButton: "Learn more",
    sponsorType: "Partner"
  }
};

const sponsorsData = [
  {
    name: "KAOS lounge",
    logo: "img/kaos.png",
    website: "https://www.instagram.com/kaosloungebaku?igsh=MTVndno1eGJ0dDVocA%3D%3D",
    description: {
    az: "Kaos Lounge Bakının seçilən restoranlarından biri olaraq qonaqlarına zövqlü atmosfer, keyfiyyətli mətbəx və unudulmaz istirahət təcrübəsi təqdim edir.",    
    ru: "Kaos Lounge — один из популярных ресторанов Баку, предлагающий гостям стильную атмосферу, качественную кухню и незабываемый отдых.",   
    en: "Kaos Lounge is one of Baku’s notable restaurants, offering guests a stylish atmosphere, quality cuisine and a memorable dining experience."
  }
  },
  {
    name: "ÖZ Tekstil",
    logo: "img/oztekstil.jpg",
    website: "https://www.instagram.com/oz_tekstil_?igsh=aWNlNDI0bGNoZXNs",
    description: {
      az: "Öz Tekstil Zirvə FC-nin rəsmi tərəfdaşlarından biridir və klubun tekstil məhsulları, geyim həlləri və keyfiyyətli istehsal sahəsində dəstək göstərir.",
      ru: "Öz Tekstil — один из официальных партнёров Zirvə FC, поддерживающий клуб в сфере текстильной продукции, производства одежды и качественных решений.",
      en: "Öz Tekstil is one of Zirvə FC’s official partners, supporting the club with textile products, apparel manufacturing and quality production solutions."
    }
  },
  {
    name: "DR.Milk",
    logo: "img/drmilk.jpg",
    website: "https://www.instagram.com/drmilk.az?igsh=N2Y4cjlpZXdiNnp6",
    description: {
      az: "Dr.Milk Zirvə FC-nin rəsmi tərəfdaşlarından biridir və klubu keyfiyyətli süd məhsulları, sağlam qidalanma və etibarlı istehsal dəstəyi ilə təmin edir.",
      ru: "Dr.Milk — один из официальных партнёров Zirvə FC, обеспечивающий клуб качественной молочной продукцией, поддержкой здорового питания и надёжным производством.",
      en: "Dr.Milk is one of Zirvə FC’s official partners, supporting the club with quality dairy products, healthy nutrition and reliable production support."
    }
  },
  { //Копируйте отсюда
    name: "VERIX Studio",
    logo: "img/verixlogovaf.png",
    website: "https://www.instagram.com/verix_studio?igsh=MXNueWdrM3M3MDVtcw==", //Это может быть и Инста или ТТ,  необязательно сайт
    description: {
      az: "VERIX Studio Zirvə FC-nin rəsmi tərəfdaşlarından biridir və klubun rəqəmsal görünüşü, veb həlləri və təqdimat keyfiyyətinin formalaşmasında dəstək göstərir.",
      ru: "VERIX Studio — один из официальных партнёров Zirvə FC, поддерживающий цифровое развитие клуба, веб-решения и визуальную презентацию.",
      en: "VERIX Studio is one of Zirvə FC’s official partners, supporting the club’s digital presence, web solutions and visual presentation."
    }
  }, // Чтобы добавить спонсора копируйте сверху (Я отметил откуда) и вставляете вниз и заполняете данные
];

let currentLang = "ru";
const sponsorsList = document.getElementById("sponsorsList");

function applyTranslations() {
  document.documentElement.lang = currentLang;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (translations[currentLang][key]) {
      element.textContent = translations[currentLang][key];
    }
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === currentLang);
  });

  renderSponsors();
}

function renderSponsors() {
  sponsorsList.innerHTML = "";

  sponsorsData.forEach((sponsor, index) => {
    const card = document.createElement("article");
    card.className = "sponsor-card reveal";
    card.style.transitionDelay = `${index * 0.06}s`;

    card.innerHTML = `
      <div class="sponsor-card-inner">
        <div class="sponsor-logo-wrap">
          <img src="${sponsor.logo}" alt="${sponsor.name}" class="sponsor-logo" />
        </div>

        <span class="sponsor-badge">${translations[currentLang].sponsorType}</span>
        <h3 class="sponsor-name">${sponsor.name}</h3>
        <p class="sponsor-card-text">${sponsor.description[currentLang]}</p>

        <a href="${sponsor.website}" class="sponsor-link" target="_blank" rel="noopener noreferrer">
          ${translations[currentLang].sponsorButton}
        </a>
      </div>
    `;

    sponsorsList.appendChild(card);
  });

  initRevealAnimations();
}

function initLangButtons() {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentLang = btn.dataset.lang;
      applyTranslations();
    });
  });
}

function initRevealAnimations() {
  const elements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.12 }
  );

  elements.forEach((element) => observer.observe(element));
}

function init() {
  initLangButtons();
  applyTranslations();
}

init();
