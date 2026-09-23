
const EN = {
  nav_about:"About", nav_stack:"Stack", nav_projects:"Projects", nav_edu:"Education", nav_contact:"Contact",
  role:"Software Engineering Student · Java Back-end Focus · C# & Unity in progress",
  hero_desc:"Software Engineering student at CEUB, building a solid foundation in Java, OOP and best practices, exploring game development with C# and Unity, with a long-term focus on Artificial Intelligence.",
  status:"Available for internship", cv:"Download résumé",
  about_title:"About me",
  about_1:"I'm a <strong>Software Engineering student at CEUB</strong> (2026–2029) in Brasília, Brazil. My mission is to build robust Java back-end solutions using engineering best practices, version control and problem solving.",
  about_2:"I'm passionate about technology and looking for a <strong>Java internship or junior role</strong>. I'm also learning <strong>C# and Unity</strong> to build games, and see <strong>Artificial Intelligence</strong> as a long-term direction.",
  about_3:"Outside programming, I take part in a <strong>social project</strong> with my mother on DF-140, supporting local children.",
  l_edu:"Education", l_loc:"Location", l_eng:"English", eng:"Basic (A2)",
  stack_title:"Tech Stack",
  sk_java:"Object-Oriented Programming (OOP): classes, inheritance, encapsulation and polymorphism. Current main focus.",
  sk_cs:"Learning the language and its syntax, OOP in C#, and writing simple programs. Foundation for Unity.",
  sk_unity:"Learning the engine: scenes, GameObjects, components and C# scripts to build 2D game prototypes.",
  sk_py:"Scripts, programming logic and Alura courses. Foundation for the AI path.",
  sk_web:"Basics of web structure and styling, like this portfolio.",
  sk_js:"Basic logic and syntax for simple web interactions.",
  sk_sql:"Queries and manipulation of relational databases.",
  sk_git:"Version control in my daily workflow. Alura certified.",
  sk_ide:"Development environments, integrated terminal and extensions.",
  lv_dev:"in progress", lv_basic:"basic", lv_mid:"basic/intermediate", lv_comf:"comfortable", lv_learn:"learning",
  proj_title:"Projects",
  r1_t:"Vehicle rental system", r1_d:"Vehicle rental and registration system.",
  r2_t:"Hangman game", r2_d:"Word-based hangman game built in Java.",
  r3_t:"CPF validator", r3_d:"Brazilian CPF validator in Java, applying programming logic.",
  r4_t:"First Java application (Alura)", r4_d:"First Java application, built during the Alura course.",
  r5_t:"Logistics & inventory in OOP", r5_d:"Stock control system in Python with product registration, ratings and availability status. OOP study project.",
  p4_t:"Social project — DF-140", p4_d:"Supporting, together with my mother, a project for children in need in the region.",
  repos:"See all repositories",
  edu_title:"Education & Goals",
  c1:"Software Engineering", c2:"Programming Logic", c5:"Java Back-end Career Path",
  ongoing:"in progress", done:"completed",
  g1:"Master Java + OOP at an advanced level", g2:"Deepen Data Structures", g3:"Practice SQL in real projects",
  g6:"Finish my first Unity game (C#)", g4:"Land my first Java internship", g5:"Improve technical English",
  contact_title:"Contact", foot:"Fueled by curiosity, coffee and Java"
};

(function () {
  var nodes = Array.prototype.slice.call(document.querySelectorAll("[data-i18n]"));
  var PT = nodes.map(function (n) { return n.innerHTML; });
  var btn = document.getElementById("langBtn");
  var lang = "pt";
  try { lang = localStorage.getItem("lang") || "pt"; } catch (e) {}

  function toast(t) {
    var old = document.querySelector(".toast"); if (old) old.remove();
    var d = document.createElement("div");
    d.className = "toast"; d.textContent = t;
    document.body.appendChild(d);
    setTimeout(function () { d.classList.add("out"); }, 1400);
    setTimeout(function () { d.remove(); }, 1900);
  }

  function setLang(l, silent) {
    lang = l;
    nodes.forEach(function (n, i) {
      var k = n.getAttribute("data-i18n");
      n.innerHTML = (l === "en" && EN[k]) ? EN[k] : PT[i];
    });
    document.documentElement.lang = l === "en" ? "en" : "pt-BR";
    var s = btn.querySelectorAll("[data-lang]");
    for (var i = 0; i < s.length; i++) {
      s[i].classList.toggle("on", s[i].getAttribute("data-lang") === l);
    }
    try { localStorage.setItem("lang", l); } catch (e) {}
    if (!silent) toast(l === "en" ? "Language: English" : "Idioma: Português");
  }

  btn.addEventListener("click", function () {
    setLang(lang === "pt" ? "en" : "pt");
  });

  /* animação de entrada + barras de skill */
  var els = document.querySelectorAll("section, .sk, .card, .goals");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("on-view"); io.unobserve(e.target); }
      });
    }, { threshold: 0.15 });
    els.forEach(function (e) { e.classList.add("reveal"); io.observe(e); });
  } else {
    els.forEach(function (e) { e.classList.add("on-view"); });
  }

  setLang(lang, true);
  window.__langOk = true;
})();