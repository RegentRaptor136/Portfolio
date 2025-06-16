let currentLang = "ru";

const t = {
  ru: {
    title: "Макар Лошицкий — Веб-разработчик",
    name: "Макар Лошицкий",
    subtitle: "Веб-разработчик",
    "about-title": "Обо мне",
    "about-text":
      "Привет! Я — Макар Лошицкий, веб-разработчик. Создаю адаптивные сайты на HTML, CSS и JavaScript.",
    "contacts-title": "Контакты",
    email: "📧 Email: losickijmakar136@gmail.com",
    github:
      '💼 GitHub: <a href="https://github.com/RegentRaptor136">RegentRaptor136</a>',
    telegram: "📱 Telegram: @KrRaptor",
    "projects-title": "Мои работы",
    "card1-title": "Landing Page",
    "card1-desc": "Современный лендинг для бизнеса.",
    "card2-title": "Сайт-визитка",
    "card2-desc": "Личный сайт с информацией обо мне.",
    "card3-title": "Портфолио",
    "card3-desc": "Коллекция моих лучших работ.",
    "card4-title": "Приложение",
    "card4-desc": "Интерактивный проект на JS.",
  },
  en: {
    title: "Makar Loshitskiy — Web Developer",
    name: "Makar Loshitskiy",
    subtitle: "Web Developer",
    "about-title": "About Me",
    "about-text":
      "Hi! I’m Makar Loshitskiy, a web developer. I build adaptive websites using HTML, CSS and JavaScript.",
    "contacts-title": "Contacts",
    email: "📧 Email: losickijmakar136@gmail.com",
    github:
      '💼 GitHub: <a href="https://github.com/RegentRaptor136">RegentRaptor136</a>',
    telegram: "📱 Telegram: @KrRaptor",
    "projects-title": "My Projects",
    "card1-title": "Landing Page",
    "card1-desc": "Modern landing page for business.",
    "card2-title": "Visit Card",
    "card2-desc": "Personal site with info about me.",
    "card3-title": "Portfolio",
    "card3-desc": "Collection of my best work.",
    "card4-title": "App",
    "card4-desc": "Interactive JavaScript project.",
  },
};

function switchLang() {
  currentLang = currentLang === "ru" ? "en" : "ru";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.innerHTML = t[currentLang][key];
  });
}
