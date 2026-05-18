const translations = {
  az: {
    brandSubtitle: "Azərbaycan futbol klubu",
    backToMain: "Əsas sayta qayıt",
    heroKicker: "Rəhbərlik və idarəetmə",
    heroTitle: "Zirvə FC rəsmi nümayəndələri",
    heroText: "Klubun inkişaf istiqamətini, idarəetməni, marketinqi və idman strukturunu formalaşdıran şəxslərlə tanış olun.",
    footerText: "Klub idarəçiliyinin rəsmi səhifəsi.",

    roleLabel: "Vəzifə",
    expLabel: "Təcrübə",
    focusLabel: "İstiqamət"
  },
  ru: {
    brandSubtitle: "Азербайджанский футбольный клуб",
    backToMain: "Назад на основной сайт",
    heroKicker: "Руководство и управление",
    heroTitle: "Официальные представители Zirvə FC",
    heroText: "Познакомьтесь с людьми, которые формируют направление клуба, управление, маркетинг и спортивную структуру.",
    footerText: "Официальная страница руководства клуба.",

    roleLabel: "Должность",
    expLabel: "Стаж",
    focusLabel: "Направление"
  },
  en: {
    brandSubtitle: "Azerbaijani football club",
    backToMain: "Back to main site",
    heroKicker: "Leadership & Management",
    heroTitle: "Official representatives of Zirvə FC",
    heroText: "Meet the people shaping the club’s direction, management, marketing and sporting structure.",
    footerText: "Official club management page.",

    roleLabel: "Role",
    expLabel: "Experience",
    focusLabel: "Focus"
  }
};

const officialsData = [
  {
    key: "rufat",
    name: "Cabbarov Rufat",
    role: {
      az: "Klub meneceri",
      ru: "Клубный менеджер",
      en: "Club Manager"
    },
    experience: {
      az: "8+ il",
      ru: "8+ лет",
      en: "8+ years"
    },
    focus: {
      az: "İdarəetmə və koordinasiya",
      ru: "Управление и координация",
      en: "Management & coordination"
    },
    description: {
      az: "Cabbarov Rufat klubun gündəlik idarəetmə prosesinə, daxili koordinasiyaya və strukturun sabit işləməsinə cavabdehdir. O, komanda daxilində kommunikasiya axınını nəzarətdə saxlayır, təşkilati məsələlərin operativ həllində iştirak edir və klubun funksional ritmini qorumaqda əsas fiqurlardan biridir.",
      ru: "Cabbarov Rufat отвечает за ежедневное управление клубом, внутреннюю координацию и стабильную работу структуры. Он контролирует коммуникационные процессы внутри команды, участвует в оперативном решении организационных вопросов и является одной из ключевых фигур в поддержании рабочего ритма клуба.",
      en: "Cabbarov Rufat is responsible for the club’s daily management, internal coordination and structural stability. He oversees communication flow within the organization, supports operational decision-making and plays a key role in maintaining the club’s working rhythm."
    },
    photo: "img/RufatC.jpeg"
  },
  {
    key: "ramil",
    name: "Valiyev Ramil",
    role: {
      az: "Prezident",
      ru: "Президент",
      en: "President"
    },
    experience: {
      az: "12+ il",
      ru: "12+ лет",
      en: "12+ years"
    },
    focus: {
      az: "Klub vizyonu",
      ru: "Видение клуба",
      en: "Club vision"
    },
    description: {
      az: "Valiyev Ramil klubun strateji vizyonuna rəhbərlik edir və Zirvə FC-nin uzunmüddətli inkişaf xəttini müəyyənləşdirir. Onun rəhbərliyi altında klub idarəetmə sabitliyi, idman keyfiyyəti və institusional inkişaf arasında balans qurmağa çalışır.",
      ru: "Valiyev Ramil руководит стратегическим видением клуба и определяет долгосрочное направление развития Zirvə FC. Под его руководством клуб стремится выстраивать баланс между управленческой стабильностью, спортивным качеством и институциональным ростом.",
      en: "Valiyev Ramil leads the club’s strategic vision and defines the long-term direction of Zirvə FC. Under his leadership, the club aims to balance administrative stability, sporting quality and institutional growth."
    },
    photo: "img/ramilV.jpeg"
  },
];

let currentLang = "ru";

const officialsList = document.getElementById("officialsList");

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

  renderOfficials();
}

function renderOfficials() {
  officialsList.innerHTML = "";

  officialsData.forEach((official, index) => {
    const section = document.createElement("section");
    section.className = "official-full";

    section.innerHTML = `
      <div class="container">
        <div class="official-grid reveal" style="transition-delay:${index * 0.06}s">
          <div class="official-media-wrap">
            <div class="official-media">
              <img src="${official.photo}" alt="${official.name}" class="official-photo" />
            </div>
          </div>

          <div class="official-content">
            <span class="official-role">${official.role[currentLang]}</span>
            <h2 class="official-name">${official.name}</h2>
            <p class="official-subline">${official.description[currentLang].split(". ")[0]}.</p>

            <div class="official-info-grid">
              <div class="official-info-card">
                <small>${translations[currentLang].roleLabel}</small>
                <strong>${official.role[currentLang]}</strong>
              </div>

              <div class="official-info-card">
                <small>${translations[currentLang].expLabel}</small>
                <strong>${official.experience[currentLang]}</strong>
              </div>

              <div class="official-info-card">
                <small>${translations[currentLang].focusLabel}</small>
                <strong>${official.focus[currentLang]}</strong>
              </div>
            </div>

            <p class="official-description">${official.description[currentLang]}</p>
          </div>
        </div>
      </div>
    `;

    officialsList.appendChild(section);
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