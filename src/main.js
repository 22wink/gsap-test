gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Draggable);

const heroTagsEl = document.querySelector(".hero__tags");
const heroSloganEl = document.querySelector(".hero__slogan");
const heroGeometries = document.querySelectorAll(".hero__geometry");
const tabsTimeline = document.querySelectorAll('.timeline .tab');
const timelineList = document.getElementById("timelineList");
const projectTabs = document.querySelectorAll('.projects .tab');
const projectGrid = document.getElementById("projectGrid");
const roleTags = document.querySelectorAll(".role-tag");
const roleDesc = document.querySelector(".role-tag__desc");
const rings = document.querySelectorAll(".ring");
const testimonialsDots = document.querySelector(".testimonial__dots");
const testimonialText = document.querySelector(".testimonial__text");
const testimonialAuthor = document.querySelector(".testimonial__author");
const btnTop = document.querySelector(".btn-top");
const modal = document.querySelector(".project-modal");
const modalBackdrop = document.querySelector(".project-modal__backdrop");
const modalContent = document.querySelector(".project-modal__content");
const modalBody = document.querySelector(".project-modal__body");
const modalClose = document.querySelector(".project-modal__close");
const contactForm = document.querySelector(".contact__form");

const heroTagsText = [
  "资深前端工程师 | 7 年动态体验构建经验",
  "交互设计爱好者 | 兼修视觉与动效语言",
  "技术博主 | 分享前端架构与体验策略"
];

const timelineData = {
  work: [
    {
      company: "ARK Lab · 前端体验组",
      role: "前端技术负责人",
      period: "2022 - 至今",
      location: "上海",
      duties: [
        "搭建跨端设计系统，覆盖 Web / 小程序 / H5",
        "制定性能治理规范，打造指标看板",
        "主导互动营销项目，带队 8 人"
      ],
      results: [
        "动态体验组件库复用率 87%",
        "核心页面 LCP 优化 38%",
        "年度 GMV 增长 21%"
      ]
    },
    {
      company: "FUTURE Mobility",
      role: "资深前端工程师",
      period: "2019 - 2022",
      location: "杭州",
      duties: [
        "负责车联网管理后台迭代",
        "搭建数据可视化方案",
        "联合 UED 制定交互规范"
      ],
      results: [
        "可视化性能提升 45 fps → 58 fps",
        "界面一致性缺陷下降 63%",
        "多端开发效率提升 30%"
      ]
    },
    {
      company: "Sense Studio",
      role: "前端工程师",
      period: "2017 - 2019",
      location: "北京",
      duties: [
        "参与互动展览 WebGL 项目",
        "探索 GSAP + Three.js 动效",
        "为客户交付定制化展示站点"
      ],
      results: [
        "展览项目满意度 4.9 / 5",
        "项目交付时间缩短 25%",
        "动态脚本复用率 70%"
      ]
    }
  ],
  education: [
    {
      company: "同济大学",
      role: "数字媒体技术 · 本科",
      period: "2013 - 2017",
      location: "上海",
      duties: [
        "核心课程：人机交互 / 计算机图形学 / 设计心理",
        "毕业设计：基于 WebGL 的沉浸式交互体验",
        "学生科技协会前端负责人"
      ],
      results: [
        "GPA 3.6 / 4.0",
        "国家奖学金 × 2",
        "微软 Imagine Cup 全国三等奖"
      ]
    }
  ]
};

const projectData = [
  {
    title: "Narrative Resume",
    category: "personal",
    type: "个人项目",
    stack: ["GSAP", "Three.js", "WebGL"],
    cover:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    description: "从零构建动态叙事简历系统，联动动效与内容编排。",
    result: "平均停留时长 3.2 min / 招聘方转化率 +42%",
    links: [
      { label: "访问", url: "#" },
      { label: "源码", url: "#" }
    ]
  },
  {
    title: "OmniCommerce OS",
    category: "work",
    type: "工作项目",
    stack: ["React", "Redux", "GSAP"],
    cover:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    description: "为新零售客户构建一站式运营中台，支持多业态。",
    result: "订单处理效率 +58% / 首屏时间 1.2s",
    links: [{ label: "案例", url: "#" }]
  },
  {
    title: "Motion Kit",
    category: "oss",
    type: "开源库",
    stack: ["GSAP", "Vite", "TypeScript"],
    cover:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    description: "封装 24 组苹果风动效，可拓展复用。",
    result: "GitHub Star 2.1k / 被 60+ 团队采用",
    links: [
      { label: "GitHub", url: "#" },
      { label: "文档", url: "#" }
    ]
  },
  {
    title: "Sense Gallery",
    category: "design",
    type: "设计作品",
    stack: ["Figma", "Principle"],
    cover:
      "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?auto=format&fit=crop&w=800&q=80",
    description: "为艺术展览打造沉浸式互动体验，强调叙事节奏。",
    result: "线下展区体验评分 4.8 / 5",
    links: [{ label: "查看", url: "#" }]
  }
];

const radarData = [
  { label: "责任心", value: 85 },
  { label: "沟通", value: 92 },
  { label: "团队协作", value: 88 },
  { label: "解决问题", value: 90 },
  { label: "学习能力", value: 95 }
];

const testimonials = [
  {
    text:
      "晨曦在复杂业务中保持设计敏感度与工程严谨度，能快速输出可落地的动效方案。",
    author: "王艺 · ARK Lab 产品副总监"
  },
  {
    text:
      "他推动的性能治理体系让团队真正以指标对齐目标，是值得信赖的前端负责人。",
    author: "陈路 · FUTURE Mobility 技术总监"
  },
  {
    text:
      "项目中最打动我的是他对细节的执着，任何交互动效都能找到业务价值。",
    author: "周珂 · IXDC 评审"
  }
];

const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });

heroTimeline
  .from(".hero__eyebrow", { opacity: 0, y: 20, duration: 0.6 })
  .from(".hero__name", { opacity: 0, yPercent: 10, duration: 1 }, "-=0.3")
  .from(heroSloganEl, { opacity: 0, y: 20, duration: 0.8 }, "-=0.4")
  .from(".hero__meta span", { opacity: 0, y: 16, stagger: 0.1, duration: 0.6 }, "-=0.6")
  .from(".hero__scroll-line", { scaleY: 0, duration: 1 }, "-=0.4");

function typeHeroTags(index = 0) {
  const text = heroTagsText[index];
  const chars = text.split("");
  heroTagsEl.textContent = "";
  const tl = gsap.timeline({
    onComplete: () => {
      gsap.delayedCall(1.2, () => typeHeroTags((index + 1) % heroTagsText.length));
    }
  });

  chars.forEach((char, i) => {
    tl.to(heroTagsEl, {
      duration: 0.04,
      onStart: () => (heroTagsEl.textContent += char)
    });
  });
}

typeHeroTags();

window.addEventListener("mousemove", (e) => {
  const { innerWidth, innerHeight } = window;
  const x = (e.clientX / innerWidth - 0.5) * 30;
  const y = (e.clientY / innerHeight - 0.5) * 30;
  heroGeometries.forEach((geo, idx) => {
    gsap.to(geo, { x: x * (idx === 0 ? 1 : -1), y: y, duration: 0.6 });
  });
});

gsap.to(".hero__scroll-line", {
  scaleY: 0,
  repeat: -1,
  yoyo: true,
  duration: 1.5,
  ease: "power2.inOut"
});

function initOverviewAnimations() {
  gsap.to(".overview__avatar", {
    filter: "blur(0px)",
    scale: 1,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".overview__avatar",
      start: "top 70%"
    }
  });

  ScrollTrigger.batch(".info-card", {
    start: "top 80%",
    onEnter: (batch) =>
      gsap.from(batch, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out"
      })
  });

  gsap.utils.toArray(".skill-line").forEach((line) => {
    const bar = line.querySelector(".skill-line__bar span");
    const level = line.dataset.level;
    gsap.to(bar, {
      width: `${level}%`,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: line,
        start: "top 80%",
        once: true
      }
    });
  });
}

function renderTimeline(type) {
  timelineList.innerHTML = "";
  timelineData[type].forEach((item) => {
    const wrapper = document.createElement("article");
    wrapper.classList.add("timeline-item");
    wrapper.innerHTML = `
      <div class="timeline-item__meta">
        <span>${item.period}</span>
        <span>${item.location}</span>
      </div>
      <h3>${item.company} · ${item.role}</h3>
      <ul>
        ${item.duties.map((duty) => `<li>${duty}</li>`).join("")}
      </ul>
      <ul>
        ${item.results.map((result) => `<li>${result}</li>`).join("")}
      </ul>
    `;
    timelineList.appendChild(wrapper);
  });

  ScrollTrigger.refresh();

  gsap.from(".timeline-item", {
    opacity: 0,
    x: 60,
    duration: 0.8,
    stagger: 0.12,
    scrollTrigger: {
      trigger: ".timeline__content",
      start: "top 70%"
    }
  });
}

tabsTimeline.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabsTimeline.forEach((t) => t.classList.remove("is-active"));
    tab.classList.add("is-active");
    renderTimeline(tab.dataset.target);
  });
});

renderTimeline("work");

function renderProjects(category = "personal") {
  projectGrid.innerHTML = "";
  const filtered = projectData.filter((item) => item.category === category);
  filtered.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.innerHTML = `
      <div class="project-card__cover" style="background-image:url('${project.cover}')"></div>
      <div class="project-card__body">
        <span class="project-card__type">${project.type}</span>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-card__tags">
          ${project.stack.map((tag) => `<span>${tag}</span>`).join("")}
        </div>
        <small>${project.result}</small>
        <button data-project='${encodeURIComponent(
          JSON.stringify(project)
        )}'>了解更多</button>
      </div>
    `;
    projectGrid.appendChild(card);
  });

  ScrollTrigger.refresh();

  gsap.from(".project-card", {
    opacity: 0,
    y: 30,
    duration: 0.6,
    stagger: 0.08,
    scrollTrigger: {
      trigger: ".project__grid",
      start: "top 80%"
    }
  });
}

projectTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    projectTabs.forEach((t) => t.classList.remove("is-active"));
    tab.classList.add("is-active");
    renderProjects(tab.dataset.category);
  });
});

renderProjects();

roleTags.forEach((tag, index) => {
  tag.addEventListener("click", () => {
    roleTags.forEach((btn) => btn.classList.remove("is-active"));
    tag.classList.add("is-active");
    gsap.to(roleDesc, {
      height: "auto",
      duration: 0.4,
      ease: "power2.out",
      onStart: () => {
        roleDesc.textContent = tag.dataset.desc;
      }
    });
  });
  if (index === 0) tag.click();
});

rings.forEach((ring) => {
  const value = ring.dataset.value;
  const progress = ring.querySelector(".ring__progress");
  const circumference = 327;
  gsap.to(progress, {
    strokeDashoffset: circumference - (circumference * value) / 100,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ring,
      start: "top 80%",
      once: true
    }
  });
});

function renderRadar() {
  const svg = document.querySelector(".radar__chart");
  const grid = svg.querySelector(".radar__grid");
  const shape = svg.querySelector(".radar__shape");
  const labels = document.querySelector(".radar__labels");
  labels.innerHTML = "";

  const center = 150;
  const radius = 120;
  const angleStep = (Math.PI * 2) / radarData.length;

  const gridPoints = [];
  const shapePoints = [];

  radarData.forEach((item, index) => {
    const angle = angleStep * index - Math.PI / 2;
    const xGrid = center + Math.cos(angle) * radius;
    const yGrid = center + Math.sin(angle) * radius;
    gridPoints.push(`${xGrid},${yGrid}`);

    const valueRadius = (radius * item.value) / 100;
    const xValue = center + Math.cos(angle) * valueRadius;
    const yValue = center + Math.sin(angle) * valueRadius;
    shapePoints.push(`${xValue},${yValue}`);

    const label = document.createElement("li");
    label.textContent = `${item.label} · ${item.value}`;
    labels.appendChild(label);
  });

  grid.setAttribute("points", gridPoints.join(" "));
  shape.setAttribute("points", gridPoints.join(" "));

  gsap.to(shape, {
    attr: { points: shapePoints.join(" ") },
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".radar",
      start: "top 80%",
      once: true
    }
  });
}

renderRadar();

let testimonialIndex = 0;
let testimonialLoop;

function renderTestimonial(index = 0) {
  testimonialText.textContent = testimonials[index].text;
  testimonialAuthor.textContent = testimonials[index].author;
  [...testimonialsDots.children].forEach((dot, idx) => {
    dot.classList.toggle("is-active", idx === index);
  });
}

function startTestimonialLoop() {
  testimonialLoop = gsap.to({}, {
    repeat: -1,
    repeatDelay: 2.4,
    onRepeat: () => {
      testimonialIndex = (testimonialIndex + 1) % testimonials.length;
      renderTestimonial(testimonialIndex);
    }
  });
}

function setupTestimonials() {
  testimonials.forEach((_item, idx) => {
    const dot = document.createElement("button");
    dot.addEventListener("click", () => {
      testimonialIndex = idx;
      renderTestimonial(idx);
      testimonialLoop.restart(true);
    });
    testimonialsDots.appendChild(dot);
  });
  renderTestimonial();
  startTestimonialLoop();

  Draggable.create(".testimonial", {
    type: "x",
    bounds: { minX: -80, maxX: 80 },
    onDragEnd: function () {
      if (this.x < -40) {
        testimonialIndex = (testimonialIndex + 1) % testimonials.length;
      } else if (this.x > 40) {
        testimonialIndex =
          (testimonialIndex - 1 + testimonials.length) % testimonials.length;
      }
      renderTestimonial(testimonialIndex);
      testimonialLoop.restart(true);
      gsap.to(this.target, { x: 0, duration: 0.4, ease: "power2.out" });
    }
  });
}

setupTestimonials();

function openModal(project) {
  modal.classList.add("is-open");
  modalBody.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <p>${project.result}</p>
    <div>
      ${project.links
        .map((link) => `<a href="${link.url}" target="_blank">${link.label}</a>`)
        .join(" · ")}
    </div>
  `;

  gsap.to(modalBackdrop, { opacity: 1, duration: 0.4 });
  gsap.to(modalContent, { opacity: 1, scale: 1, duration: 0.4, ease: "power3.out" });
}

function closeModal() {
  gsap.to(modalBackdrop, { opacity: 0, duration: 0.3 });
  gsap.to(modalContent, {
    opacity: 0,
    scale: 0.95,
    duration: 0.3,
    ease: "power3.in",
    onComplete: () => modal.classList.remove("is-open")
  });
}

projectGrid.addEventListener("click", (e) => {
  if (e.target.matches("button[data-project]")) {
    const data = JSON.parse(decodeURIComponent(e.target.dataset.project));
    openModal(data);
  }
});

modalClose.addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", closeModal);

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const button = contactForm.querySelector(".btn-submit");
  const originalText = button.textContent;
  gsap.to(button, {
    duration: 0.6,
    ease: "power2.inOut",
    rotation: 3,
    scale: 0.98,
    onStart: () => (button.textContent = "发送中...")
  });
  setTimeout(() => {
    button.textContent = "已发送";
    button.style.background = "#34C759";
    contactForm.reset();
    setTimeout(() => {
      button.textContent = originalText;
      button.style.background = "var(--accent)";
    }, 2000);
  }, 1200);
});

window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight) {
    btnTop.classList.add("is-visible");
  } else {
    btnTop.classList.remove("is-visible");
  }
});

btnTop.addEventListener("click", () => {
  gsap.to(window, { scrollTo: 0, duration: 1, ease: "power3.inOut" });
});

initOverviewAnimations();
