const QUESTIONS = [
  // ── SECTION 1: Value Delivery System ────────────────────────────────────────
  {
    id: 1, section_en: "Value Delivery System", section_uk: "Система постачання цінності",
    en: { question: "A project team is tasked with a 6-month effort to create a specific software module for a new banking application. This effort is best described as:",
      options: [{ letter:"A", text:"Operation", correct:false },{ letter:"B", text:"Project", correct:true },{ letter:"C", text:"Program", correct:false },{ letter:"D", text:"Portfolio", correct:false }] },
    uk: { question: "Команді проекту доручено протягом 6 місяців створити конкретний програмний модуль для нового банківського додатка. Цю діяльність найкраще описати як:",
      options: [{ letter:"A", text:"Операційна діяльність", correct:false },{ letter:"B", text:"Проект", correct:true },{ letter:"C", text:"Програма", correct:false },{ letter:"D", text:"Портфель", correct:false }] }
  },
  {
    id: 2, section_en: "Value Delivery System", section_uk: "Система постачання цінності",
    en: { question: "A project manager focuses on the benefits and worth realized by the customer after the software has been implemented. This focus refers to:",
      options: [{ letter:"A", text:"Deliverable", correct:false },{ letter:"B", text:"Product", correct:false },{ letter:"C", text:"Outcome", correct:true },{ letter:"D", text:"Artifact", correct:false }] },
    uk: { question: "Керівник проекту зосереджується на вигодах та корисності, отриманих замовником після впровадження програмного забезпечення. Цей фокус стосується:",
      options: [{ letter:"A", text:"Доробок", correct:false },{ letter:"B", text:"Продукт", correct:false },{ letter:"C", text:"Кінцевий результат", correct:true },{ letter:"D", text:"Артефакт", correct:false }] }
  },
  {
    id: 3, section_en: "Value Delivery System", section_uk: "Система постачання цінності",
    en: { question: "An organization manages a group of related projects and subsidiary programs to achieve benefits that would not be available if they were managed individually. This is a:",
      options: [{ letter:"A", text:"Portfolio", correct:false },{ letter:"B", text:"Program", correct:true },{ letter:"C", text:"System", correct:false },{ letter:"D", text:"Value Stream", correct:false }] },
    uk: { question: "Організація управляє групою пов'язаних проектів та підпорядкованих програм для досягнення вигід, які були б недоступні при індивідуальному управлінні ними. Це:",
      options: [{ letter:"A", text:"Портфель", correct:false },{ letter:"B", text:"Програма", correct:true },{ letter:"C", text:"Система", correct:false },{ letter:"D", text:"Потік цінності", correct:false }] }
  },
  {
    id: 4, section_en: "Value Delivery System", section_uk: "Система постачання цінності",
    en: { question: "High-level strategic objectives are achieved by managing projects, programs, and operations as a group. According to Section 1.2, this group is called a:",
      options: [{ letter:"A", text:"Portfolio", correct:true },{ letter:"B", text:"Governance", correct:false },{ letter:"C", text:"Enterprise", correct:false },{ letter:"D", text:"Product Lifecycle", correct:false }] },
    uk: { question: "Високорівневі стратегічні цілі досягаються шляхом управління проектами, програмами та операціями як групою. Згідно з Розділом 1.2, така група називається:",
      options: [{ letter:"A", text:"Портфель", correct:true },{ letter:"B", text:"Врядування", correct:false },{ letter:"C", text:"Підприємство", correct:false },{ letter:"D", text:"Життєвий цикл продукту", correct:false }] }
  },
  {
    id: 5, section_en: "Value Delivery System", section_uk: "Система постачання цінності",
    en: { question: "According to Figure 2-1, which component is responsible for the ongoing activities that support and influence portfolios, programs, and projects?",
      options: [{ letter:"A", text:"Subsidiary Portfolio", correct:false },{ letter:"B", text:"Program Management", correct:false },{ letter:"C", text:"Operations", correct:true },{ letter:"D", text:"Value System", correct:false }] },
    uk: { question: "Згідно з Рисунком 2-1, який компонент відповідає за поточну діяльність, що підтримує та впливає на портфелі, програми та проекти?",
      options: [{ letter:"A", text:"Підпорядкований портфель", correct:false },{ letter:"B", text:"Управління програмою", correct:false },{ letter:"C", text:"Операційна діяльність", correct:true },{ letter:"D", text:"Система цінностей", correct:false }] }
  },
  {
    id: 6, section_en: "Value Delivery System", section_uk: "Система постачання цінності",
    en: { question: "In the information flow (Figure 2-3), what specifically flows from Senior Leadership to Portfolios?",
      options: [{ letter:"A", text:"Strategy", correct:true },{ letter:"B", text:"Deliverables", correct:false },{ letter:"C", text:"Performance reports", correct:false },{ letter:"D", text:"Modification advice", correct:false }] },
    uk: { question: "В інформаційному потоці (Рисунок 2-3), що конкретно надходить від вищого керівництва до портфелів?",
      options: [{ letter:"A", text:"Стратегія", correct:true },{ letter:"B", text:"Доробки", correct:false },{ letter:"C", text:"Звіти про виконання", correct:false },{ letter:"D", text:"Поради щодо модифікації", correct:false }] }
  },
  {
    id: 7, section_en: "Value Delivery System", section_uk: "Система постачання цінності",
    en: { question: "According to Figure 2-3, what does the 'Operations' component provide back to 'Programs and Projects' to ensure continuous improvement?",
      options: [{ letter:"A", text:"Strategic goals", correct:false },{ letter:"B", text:"Information regarding updates, fixes, and modifications", correct:true },{ letter:"C", text:"Funding and resources", correct:false },{ letter:"D", text:"Portfolio assessment", correct:false }] },
    uk: { question: "Згідно з Рисунком 2-3, що компонент 'Операційна діяльність' надає назад 'Програмам та проектам' для забезпечення постійного вдосконалення?",
      options: [{ letter:"A", text:"Стратегічні цілі", correct:false },{ letter:"B", text:"Інформація щодо оновлень, виправлень та модифікацій", correct:true },{ letter:"C", text:"Фінансування та ресурси", correct:false },{ letter:"D", text:"Оцінка портфелю", correct:false }] }
  },
  {
    id: 8, section_en: "Value Delivery System", section_uk: "Система постачання цінності",
    en: { question: "Which term is defined as the 'worth, importance, or usefulness of something' as perceived by different stakeholders?",
      options: [{ letter:"A", text:"Profit", correct:false },{ letter:"B", text:"Outcome", correct:false },{ letter:"C", text:"Value", correct:true },{ letter:"D", text:"Product", correct:false }] },
    uk: { question: "Який термін визначається як 'вартість, важливість чи корисність чогось', як її сприймають різні стейкхолдери?",
      options: [{ letter:"A", text:"Прибуток", correct:false },{ letter:"B", text:"Кінцевий результат", correct:false },{ letter:"C", text:"Цінність", correct:true },{ letter:"D", text:"Продукт", correct:false }] }
  },
  {
    id: 9, section_en: "Value Delivery System", section_uk: "Система постачання цінності",
    en: { question: "A team creates a quantifiable artifact that serves as a component of a larger system. This artifact is a:",
      options: [{ letter:"A", text:"Benefit", correct:false },{ letter:"B", text:"Outcome", correct:false },{ letter:"C", text:"Product", correct:true },{ letter:"D", text:"Portfolio", correct:false }] },
    uk: { question: "Команда створює артефакт, що піддається кількісному оцінюванню й слугує компонентом більшої системи. Цей артефакт є:",
      options: [{ letter:"A", text:"Вигода", correct:false },{ letter:"B", text:"Кінцевий результат", correct:false },{ letter:"C", text:"Продукт", correct:true },{ letter:"D", text:"Портфель", correct:false }] }
  },
  {
    id: 10, section_en: "Value Delivery System", section_uk: "Система постачання цінності",
    en: { question: "A function in the project involves promoting the project and communicating the organization's vision to the team. This is the function of:",
      options: [{ letter:"A", text:"Project Work", correct:false },{ letter:"B", text:"Providing Resources and Direction", correct:true },{ letter:"C", text:"Applying Expertise", correct:false },{ letter:"D", text:"Governance Support", correct:false }] },
    uk: { question: "Функція в проекті передбачає просування проекту та донесення бачення організації до команди. Це функція:",
      options: [{ letter:"A", text:"Проектна робота", correct:false },{ letter:"B", text:"Надання ресурсів та спрямування", correct:true },{ letter:"C", text:"Застосування експертизи", correct:false },{ letter:"D", text:"Підтримка врядування", correct:false }] }
  },
  {
    id: 11, section_en: "Value Delivery System", section_uk: "Система постачання цінності",
    en: { question: "A specialist provides industry-specific knowledge and advice to the project team. Which function from Section 2.3 is being performed?",
      options: [{ letter:"A", text:"Facilitation and Support", correct:false },{ letter:"B", text:"Oversight and Coordination", correct:false },{ letter:"C", text:"Applying Expertise", correct:true },{ letter:"D", text:"Providing Business Direction", correct:false }] },
    uk: { question: "Спеціаліст надає галузеві знання та поради команді проекту. Яка функція з Розділу 2.3 виконується?",
      options: [{ letter:"A", text:"Сприяння та підтримка", correct:false },{ letter:"B", text:"Нагляд та координація", correct:false },{ letter:"C", text:"Застосування експертизи", correct:true },{ letter:"D", text:"Надання ділової спрямованості", correct:false }] }
  },
  {
    id: 12, section_en: "Value Delivery System", section_uk: "Система постачання цінності",
    en: { question: "A project manager is evaluating the 'Organizational culture, structure, and governance' of the company. This is an example of:",
      options: [{ letter:"A", text:"Internal Environment", correct:true },{ letter:"B", text:"External Environment", correct:false },{ letter:"C", text:"Process Assets", correct:false },{ letter:"D", text:"Market Conditions", correct:false }] },
    uk: { question: "Керівник проекту оцінює 'Організаційну культуру, структуру та врядування' компанії. Це приклад:",
      options: [{ letter:"A", text:"Внутрішнього середовища", correct:true },{ letter:"B", text:"Зовнішнього середовища", correct:false },{ letter:"C", text:"Активів процесів", correct:false },{ letter:"D", text:"Ринкових умов", correct:false }] }
  },
  {
    id: 13, section_en: "Value Delivery System", section_uk: "Система постачання цінності",
    en: { question: "'Market conditions' and 'Regulatory environment' are factors that influence the project from the:",
      options: [{ letter:"A", text:"Internal Environment", correct:false },{ letter:"B", text:"External Environment", correct:true },{ letter:"C", text:"Organizational Knowledge Assets", correct:false },{ letter:"D", text:"Governance Documentation", correct:false }] },
    uk: { question: "'Ринкові умови' та 'Нормативне середовище' — це фактори, що впливають на проект з боку:",
      options: [{ letter:"A", text:"Внутрішнього середовища", correct:false },{ letter:"B", text:"Зовнішнього середовища", correct:true },{ letter:"C", text:"Активів знань організації", correct:false },{ letter:"D", text:"Документації з врядування", correct:false }] }
  },
  {
    id: 14, section_en: "Value Delivery System", section_uk: "Система постачання цінності",
    en: { question: "According to Section 2.5, when a program manages a full life cycle of a product to directly manage benefits, it is:",
      options: [{ letter:"A", text:"Portfolio management", correct:false },{ letter:"B", text:"Operational management", correct:false },{ letter:"C", text:"Product management within a program", correct:true },{ letter:"D", text:"Project-based delivery", correct:false }] },
    uk: { question: "Згідно з Розділом 2.5, коли програма управляє повним життєвим циклом продукту для безпосереднього управління вигодами, це:",
      options: [{ letter:"A", text:"Управління портфелем", correct:false },{ letter:"B", text:"Операційне управління", correct:false },{ letter:"C", text:"Управління продуктом в межах програми", correct:true },{ letter:"D", text:"Постачання на основі проекту", correct:false }] }
  },
  {
    id: 15, section_en: "Value Delivery System", section_uk: "Система постачання цінності",
    en: { question: "What is the primary role of the 'Governance System' as it functions alongside the 'Value Delivery System'?",
      options: [{ letter:"A", text:"Creating deliverables", correct:false },{ letter:"B", text:"Managing issues and supporting decision-making", correct:true },{ letter:"C", text:"Hiring project staff", correct:false },{ letter:"D", text:"Performing data backups", correct:false }] },
    uk: { question: "Яка основна роль 'Системи врядування', оскільки вона функціонує разом із 'Системою постачання цінності'?",
      options: [{ letter:"A", text:"Створення доробок", correct:false },{ letter:"B", text:"Управління проблемами та підтримка прийняття рішень", correct:true },{ letter:"C", text:"Наймання персоналу проекту", correct:false },{ letter:"D", text:"Виконання резервного копіювання даних", correct:false }] }
  },
  {
    id: 16, section_en: "Value Delivery System", section_uk: "Система постачання цінності",
    en: { question: "Which project function is responsible for 'encourage project team member participation, collaboration, and shared ownership'?",
      options: [{ letter:"A", text:"Applying Expertise", correct:false },{ letter:"B", text:"Performing Work", correct:false },{ letter:"C", text:"Facilitation and Support", correct:true },{ letter:"D", text:"Providing Business Direction", correct:false }] },
    uk: { question: "Яка функція проекту відповідає за 'заохочення членів команди проекту до участі, співпраці та спільної відповідальності'?",
      options: [{ letter:"A", text:"Застосування експертизи", correct:false },{ letter:"B", text:"Виконання робіт", correct:false },{ letter:"C", text:"Сприяння та підтримка", correct:true },{ letter:"D", text:"Надання ділової спрямованості", correct:false }] }
  },
  {
    id: 17, section_en: "Value Delivery System", section_uk: "Система постачання цінності",
    en: { question: "A set of internal 'Process Assets' used by a project manager includes:",
      options: [{ letter:"A", text:"Tools, methodologies, and templates", correct:true },{ letter:"B", text:"Competitive analysis", correct:false },{ letter:"C", text:"National laws", correct:false },{ letter:"D", text:"Market brand recognition", correct:false }] },
    uk: { question: "Набір внутрішніх 'Активів процесів', які використовує керівник проекту, включає:",
      options: [{ letter:"A", text:"Інструменти, методології та шаблони", correct:true },{ letter:"B", text:"Аналіз конкурентів", correct:false },{ letter:"C", text:"Національні закони", correct:false },{ letter:"D", text:"Впізнаваність бренду на ринку", correct:false }] }
  },
  {
    id: 18, section_en: "Value Delivery System", section_uk: "Система постачання цінності",
    en: { question: "According to Figure 2-2, the 'Value Delivery System' is directly contained within the:",
      options: [{ letter:"A", text:"External Environment", correct:false },{ letter:"B", text:"Internal Environment", correct:true },{ letter:"C", text:"Operations Department", correct:false },{ letter:"D", text:"Portfolio Management Office", correct:false }] },
    uk: { question: "Згідно з Рисунком 2-2, 'Система постачання цінності' безпосередньо міститься в межах:",
      options: [{ letter:"A", text:"Зовнішнього середовища", correct:false },{ letter:"B", text:"Внутрішнього середовища", correct:true },{ letter:"C", text:"Департаменту операцій", correct:false },{ letter:"D", text:"Офісу управління портфелем", correct:false }] }
  },
  {
    id: 19, section_en: "Value Delivery System", section_uk: "Система постачання цінності",
    en: { question: "Which document provides the formal 'application of knowledge, skills, tools, and techniques to project activities' definition?",
      options: [{ letter:"A", text:"Business Case", correct:false },{ letter:"B", text:"Project Charter", correct:false },{ letter:"C", text:"PMBOK® Guide Definition of Project Management", correct:true },{ letter:"D", text:"Scope Statement", correct:false }] },
    uk: { question: "Який документ надає формальне визначення 'застосування знань, умінь, інструментів та методів до операцій проекту'?",
      options: [{ letter:"A", text:"Бізнес-кейс", correct:false },{ letter:"B", text:"Статут проекту", correct:false },{ letter:"C", text:"Визначення управління проєктами в Настанові PMBOK®", correct:true },{ letter:"D", text:"Опис обсягу", correct:false }] }
  },
  {
    id: 20, section_en: "Value Delivery System", section_uk: "Система постачання цінності",
    en: { question: "A project team delivers a new automated billing system. The system itself is the (1), while the reduction in billing errors is the (2).",
      options: [{ letter:"A", text:"(1) Outcome, (2) Deliverable", correct:false },{ letter:"B", text:"(1) Deliverable, (2) Outcome", correct:true },{ letter:"C", text:"(1) Product, (2) Strategy", correct:false },{ letter:"D", text:"(1) Value, (2) Benefit", correct:false }] },
    uk: { question: "Команда проекту постачає нову автоматизовану систему виставлення рахунків. Сама система — це (1), а скорочення помилок виставлення рахунків — це (2).",
      options: [{ letter:"A", text:"(1) Кінцевий результат, (2) Доробок", correct:false },{ letter:"B", text:"(1) Доробок, (2) Кінцевий результат", correct:true },{ letter:"C", text:"(1) Продукт, (2) Стратегія", correct:false },{ letter:"D", text:"(1) Цінність, (2) Вигода", correct:false }] }
  },

  // ── SECTION 2: 12 PM Principles ─────────────────────────────────────────────
  {
    id: 21, section_en: "12 PM Principles", section_uk: "12 Принципів управління проєктами",
    en: { question: "A project manager ensures all financial records are accurate and follows both legal requirements and organizational policies. Which principle is being demonstrated?",
      options: [{ letter:"A", text:"Leadership", correct:false },{ letter:"B", text:"Stewardship", correct:true },{ letter:"C", text:"Quality", correct:false },{ letter:"D", text:"Risk", correct:false }] },
    uk: { question: "Керівник проекту забезпечує точність усіх фінансових записів і дотримується як вимог законодавства, так і політик організації. Який принцип демонструється?",
      options: [{ letter:"A", text:"Лідерство", correct:false },{ letter:"B", text:"Розпорядництво", correct:true },{ letter:"C", text:"Якість", correct:false },{ letter:"D", text:"Ризики", correct:false }] }
  },
  {
    id: 22, section_en: "12 PM Principles", section_uk: "12 Принципів управління проєктами",
    en: { question: "The four key characteristics of 'Stewardship' according to Section 3.1 are:",
      options: [{ letter:"A", text:"Integrity, Care, Trustworthiness, Compliance", correct:true },{ letter:"B", text:"Responsibility, Respect, Fairness, Honesty", correct:false },{ letter:"C", text:"Scope, Schedule, Cost, Quality", correct:false },{ letter:"D", text:"Vision, Mission, Values, Beliefs", correct:false }] },
    uk: { question: "Чотирма ключовими характеристиками 'Розпорядництва' згідно з Розділом 3.1 є:",
      options: [{ letter:"A", text:"Порядність, турбота, надійність, відповідність", correct:true },{ letter:"B", text:"Відповідальність, повага, справедливість, чесність", correct:false },{ letter:"C", text:"Обсяг, розклад, вартість, якість", correct:false },{ letter:"D", text:"Бачення, місія, цінності, переконання", correct:false }] }
  },
  {
    id: 23, section_en: "12 PM Principles", section_uk: "12 Принципів управління проєктами",
    en: { question: "A team creates 'Team agreements' to establish behavioral norms and foster a positive culture. This aligns with which principle?",
      options: [{ letter:"A", text:"Stakeholders", correct:false },{ letter:"B", text:"Team", correct:true },{ letter:"C", text:"Systems Thinking", correct:false },{ letter:"D", text:"Complexity", correct:false }] },
    uk: { question: "Команда створює 'Командні угоди' для встановлення поведінкових норм та формування позитивної культури. Це узгоджується з яким принципом?",
      options: [{ letter:"A", text:"Стейкхолдери", correct:false },{ letter:"B", text:"Команда", correct:true },{ letter:"C", text:"Системне мислення", correct:false },{ letter:"D", text:"Складність", correct:false }] }
  },
  {
    id: 24, section_en: "12 PM Principles", section_uk: "12 Принципів управління проєктами",
    en: { question: "A project manager proactively identifies and analyzes the interests and needs of people affected by the project. This is the core of:",
      options: [{ letter:"A", text:"Team Collaboration", correct:false },{ letter:"B", text:"Stewardship", correct:false },{ letter:"C", text:"Stakeholder Engagement", correct:true },{ letter:"D", text:"Change Management", correct:false }] },
    uk: { question: "Керівник проекту проактивно виявляє та аналізує інтереси та потреби людей, на яких впливає проект. Це є основою:",
      options: [{ letter:"A", text:"Командної співпраці", correct:false },{ letter:"B", text:"Розпорядництва", correct:false },{ letter:"C", text:"Залучення стейкхолдерів", correct:true },{ letter:"D", text:"Управління змінами", correct:false }] }
  },
  {
    id: 25, section_en: "12 PM Principles", section_uk: "12 Принципів управління проєктами",
    en: { question: "A project meets all its technical requirements and stays within budget, but it fails to meet the strategic objectives outlined in the business case. Which principle was neglected?",
      options: [{ letter:"A", text:"Stewardship", correct:false },{ letter:"B", text:"Value", correct:true },{ letter:"C", text:"Quality", correct:false },{ letter:"D", text:"Risk", correct:false }] },
    uk: { question: "Проект відповідає всім технічним вимогам і залишається в межах бюджету, але не досягає стратегічних цілей, викладених у бізнес-кейсі. Яким принципом знехтували?",
      options: [{ letter:"A", text:"Розпорядництво", correct:false },{ letter:"B", text:"Цінність", correct:true },{ letter:"C", text:"Якість", correct:false },{ letter:"D", text:"Ризики", correct:false }] }
  },
  {
    id: 26, section_en: "12 PM Principles", section_uk: "12 Принципів управління проєктами",
    en: { question: "When a project manager considers how a change in the procurement schedule might affect the final product integration and the end-user experience, they are applying:",
      options: [{ letter:"A", text:"Tailoring", correct:false },{ letter:"B", text:"Leadership", correct:false },{ letter:"C", text:"Systems Thinking", correct:true },{ letter:"D", text:"Adaptability", correct:false }] },
    uk: { question: "Коли керівник проекту розглядає, як зміна в розкладі закупівель може вплинути на інтеграцію кінцевого продукту та досвід кінцевого користувача, він застосовує:",
      options: [{ letter:"A", text:"Припасовування", correct:false },{ letter:"B", text:"Лідерство", correct:false },{ letter:"C", text:"Системне мислення", correct:true },{ letter:"D", text:"Адаптивність", correct:false }] }
  },
  {
    id: 27, section_en: "12 PM Principles", section_uk: "12 Принципів управління проєктами",
    en: { question: "A junior team member notices a potential quality issue and motivates others to address it immediately. This demonstrates that:",
      options: [{ letter:"A", text:"The project manager is failing", correct:false },{ letter:"B", text:"Leadership behavior can be demonstrated by any team member", correct:true },{ letter:"C", text:"Quality control is automated", correct:false },{ letter:"D", text:"Stewardship is limited to management", correct:false }] },
    uk: { question: "Молодший член команди помічає потенційну проблему з якістю та мотивує інших негайно її вирішити. Це демонструє, що:",
      options: [{ letter:"A", text:"Керівник проекту не справляється", correct:false },{ letter:"B", text:"Лідерську поведінку може проявляти будь-який член команди", correct:true },{ letter:"C", text:"Контроль якості автоматизований", correct:false },{ letter:"D", text:"Розпорядництво обмежене керівництвом", correct:false }] }
  },
  {
    id: 28, section_en: "12 PM Principles", section_uk: "12 Принципів управління проєктами",
    en: { question: "A project manager is forced to use a heavy, predictive methodology for a small, low-risk, innovative project, leading to unnecessary bureaucracy. This violates which principle?",
      options: [{ letter:"A", text:"Complexity", correct:false },{ letter:"B", text:"Tailoring", correct:true },{ letter:"C", text:"Resilience", correct:false },{ letter:"D", text:"Stewardship", correct:false }] },
    uk: { question: "Керівника проекту змушують використовувати важку предиктивну методологію для малого інноваційного проекту з низьким рівнем ризику, що призводить до зайвої бюрократії. Який принцип це порушує?",
      options: [{ letter:"A", text:"Складність", correct:false },{ letter:"B", text:"Припасовування", correct:true },{ letter:"C", text:"Стійкість", correct:false },{ letter:"D", text:"Розпорядництво", correct:false }] }
  },
  {
    id: 29, section_en: "12 PM Principles", section_uk: "12 Принципів управління проєктами",
    en: { question: "Ensuring that project deliverables meet the 'fitness for use' and satisfy the stated requirements is the essence of:",
      options: [{ letter:"A", text:"Value", correct:false },{ letter:"B", text:"Quality", correct:true },{ letter:"C", text:"Change", correct:false },{ letter:"D", text:"Team", correct:false }] },
    uk: { question: "Забезпечення того, щоб доробки проекту відповідали 'придатності до використання' та задовольняли встановлені вимоги, є сутністю:",
      options: [{ letter:"A", text:"Цінність", correct:false },{ letter:"B", text:"Якість", correct:true },{ letter:"C", text:"Зміни", correct:false },{ letter:"D", text:"Команда", correct:false }] }
  },
  {
    id: 30, section_en: "12 PM Principles", section_uk: "12 Принципів управління проєктами",
    en: { question: "A project manager uses modeling and scenario planning to anticipate how various components of the project might interact. This helps in:",
      options: [{ letter:"A", text:"Navigating complexity", correct:true },{ letter:"B", text:"Reducing the budget", correct:false },{ letter:"C", text:"Avoiding stakeholders", correct:false },{ letter:"D", text:"Formalizing stewardship", correct:false }] },
    uk: { question: "Керівник проекту використовує моделювання та планування сценаріїв, щоб передбачити, як можуть взаємодіяти різні компоненти проекту. Це допомагає у:",
      options: [{ letter:"A", text:"Подоланні складності", correct:true },{ letter:"B", text:"Скорочення бюджету", correct:false },{ letter:"C", text:"Уникнення стейкхолдерів", correct:false },{ letter:"D", text:"Формалізація розпорядництва", correct:false }] }
  },
  {
    id: 31, section_en: "12 PM Principles", section_uk: "12 Принципів управління проєктами",
    en: { question: "In response to a high-impact threat, the team decides to optimize their response by focusing on both threats and opportunities. This is related to:",
      options: [{ letter:"A", text:"Quality", correct:false },{ letter:"B", text:"Risk", correct:true },{ letter:"C", text:"Complexity", correct:false },{ letter:"D", text:"Leadership", correct:false }] },
    uk: { question: "У відповідь на загрозу з високим рівнем впливу команда вирішує оптимізувати своє реагування, зосередившись як на загрозах, так і на можливостях. Це пов'язано з:",
      options: [{ letter:"A", text:"Якість", correct:false },{ letter:"B", text:"Ризиками", correct:true },{ letter:"C", text:"Складність", correct:false },{ letter:"D", text:"Лідерством", correct:false }] }
  },
  {
    id: 32, section_en: "12 PM Principles", section_uk: "12 Принципів управління проєктами",
    en: { question: "A team remains effective despite losing a key supplier and quickly finds an alternative solution. This ability is known as:",
      options: [{ letter:"A", text:"Systems Thinking", correct:false },{ letter:"B", text:"Stewardship", correct:false },{ letter:"C", text:"Adaptability and Resilience", correct:true },{ letter:"D", text:"Tailoring", correct:false }] },
    uk: { question: "Команда залишається ефективною, незважаючи на втрату ключового постачальника, і швидко знаходить альтернативне рішення. Ця здатність відома як:",
      options: [{ letter:"A", text:"Системне мислення", correct:false },{ letter:"B", text:"Розпорядництво", correct:false },{ letter:"C", text:"Адаптивність та стійкість", correct:true },{ letter:"D", text:"Припасовування", correct:false }] }
  },
  {
    id: 33, section_en: "12 PM Principles", section_uk: "12 Принципів управління проєктами",
    en: { question: "A project manager works with the organization to help employees transition from old processes to the new system delivered by the project. This aligns with:",
      options: [{ letter:"A", text:"Enabling change to achieve the envisioned future state", correct:true },{ letter:"B", text:"Stewardship", correct:false },{ letter:"C", text:"Value delivery", correct:false },{ letter:"D", text:"Risk optimization", correct:false }] },
    uk: { question: "Керівник проекту працює з організацією, щоб допомогти працівникам перейти від старих процесів до нової системи, поставленої проектом. Це узгоджується з:",
      options: [{ letter:"A", text:"Уможливленням змін для досягнення передбаченого майбутнього стану", correct:true },{ letter:"B", text:"Розпорядництвом", correct:false },{ letter:"C", text:"Постачанням цінності", correct:false },{ letter:"D", text:"Оптимізацією ризиків", correct:false }] }
  },
  {
    id: 34, section_en: "12 PM Principles", section_uk: "12 Принципів управління проєктами",
    en: { question: "Stewardship involves 'Integrity,' which specifically means:",
      options: [{ letter:"A", text:"Behaving honestly and ethically in all interactions", correct:true },{ letter:"B", text:"Following the project schedule strictly", correct:false },{ letter:"C", text:"Maximizing financial profit at any cost", correct:false },{ letter:"D", text:"Protecting the project manager's authority", correct:false }] },
    uk: { question: "Розпорядництво включає 'Порядність', що конкретно означає:",
      options: [{ letter:"A", text:"Чесну та етичну поведінку в усіх взаємодіях", correct:true },{ letter:"B", text:"Суворе дотримання розкладу проекту", correct:false },{ letter:"C", text:"Максимізація фінансового прибутку за будь-яку ціну", correct:false },{ letter:"D", text:"Захист повноважень керівника проекту", correct:false }] }
  },
  {
    id: 35, section_en: "12 PM Principles", section_uk: "12 Принципів управління проєктами",
    en: { question: "The 'Business Case' provides the economic justification and strategic alignment necessary for which principle?",
      options: [{ letter:"A", text:"Complexity", correct:false },{ letter:"B", text:"Team", correct:false },{ letter:"C", text:"Value", correct:true },{ letter:"D", text:"Quality", correct:false }] },
    uk: { question: "'Бізнес-кейс' надає економічне обґрунтування та стратегічне узгодження, необхідні для якого принципу?",
      options: [{ letter:"A", text:"Складність", correct:false },{ letter:"B", text:"Команда", correct:false },{ letter:"C", text:"Цінність", correct:true },{ letter:"D", text:"Якість", correct:false }] }
  },
  {
    id: 36, section_en: "12 PM Principles", section_uk: "12 Принципів управління проєктами",
    en: { question: "According to Principle 3.2, 'Accountability' differs from 'Responsibilities' because:",
      options: [{ letter:"A", text:"Accountability can be shared", correct:false },{ letter:"B", text:"Accountability is being answerable for an outcome and cannot be shared", correct:true },{ letter:"C", text:"Responsibilities cannot be shared", correct:false },{ letter:"D", text:"Accountability only applies to the sponsor", correct:false }] },
    uk: { question: "Згідно з Принципом 3.2, 'Відповідальність' (Accountability) відрізняється від 'Обов'язків' (Responsibilities) тим, що:",
      options: [{ letter:"A", text:"Відповідальність (Accountability) можна розділити", correct:false },{ letter:"B", text:"Відповідальність (Accountability) — це стан бути підзвітним за кінцевий результат, і її не можна розділити", correct:true },{ letter:"C", text:"Обов'язки не можна розділити", correct:false },{ letter:"D", text:"Відповідальність (Accountability) стосується лише спонсора", correct:false }] }
  },
  {
    id: 37, section_en: "12 PM Principles", section_uk: "12 Принципів управління проєктами",
    en: { question: "What is the right to make decisions and use resources within a project called?",
      options: [{ letter:"A", text:"Responsibility", correct:false },{ letter:"B", text:"Accountability", correct:false },{ letter:"C", text:"Authority", correct:true },{ letter:"D", text:"Compliance", correct:false }] },
    uk: { question: "Як називається право приймати рішення та використовувати ресурси в межах проекту?",
      options: [{ letter:"A", text:"Обов'язок", correct:false },{ letter:"B", text:"Відповідальність", correct:false },{ letter:"C", text:"Повноваження", correct:true },{ letter:"D", text:"Відповідність", correct:false }] }
  },
  {
    id: 38, section_en: "12 PM Principles", section_uk: "12 Принципів управління проєктами",
    en: { question: "'Care' in stewardship refers to the 'diligent oversight' of:",
      options: [{ letter:"A", text:"External market conditions", correct:false },{ letter:"B", text:"Organizational matters and resources", correct:true },{ letter:"C", text:"Competitor strategies", correct:false },{ letter:"D", text:"Personal hobbies of the team", correct:false }] },
    uk: { question: "'Турбота' в розпорядництві відноситься до 'ретельного нагляду' за:",
      options: [{ letter:"A", text:"Зовнішніми ринковими умовами", correct:false },{ letter:"B", text:"Організаційними питаннями та ресурсами", correct:true },{ letter:"C", text:"Стратегіями конкурентів", correct:false },{ letter:"D", text:"Хобі команди", correct:false }] }
  },
  {
    id: 39, section_en: "12 PM Principles", section_uk: "12 Принципів управління проєктами",
    en: { question: "Respectful engagement with team members includes:",
      options: [{ letter:"A", text:"Fair treatment and access to opportunities", correct:true },{ letter:"B", text:"Ignoring non-performing members", correct:false },{ letter:"C", text:"Strict hierarchical control", correct:false },{ letter:"D", text:"Shared legal liability", correct:false }] },
    uk: { question: "Шанобливе залучення членів команди включає:",
      options: [{ letter:"A", text:"Справедливе ставлення та доступ до можливостей", correct:true },{ letter:"B", text:"Ігнорування членів, які не працюють", correct:false },{ letter:"C", text:"Суворий ієрархічний контроль", correct:false },{ letter:"D", text:"Спільна юридична відповідальність", correct:false }] }
  },
  {
    id: 40, section_en: "12 PM Principles", section_uk: "12 Принципів управління проєктами",
    en: { question: "A project manager who acts as a 'Steward' is expected to consider:",
      options: [{ letter:"A", text:"Only the short-term profits", correct:false },{ letter:"B", text:"Financial, social, and environmental impacts", correct:true },{ letter:"C", text:"Only the internal organizational politics", correct:false },{ letter:"D", text:"Strictly the technical specifications", correct:false }] },
    uk: { question: "Від керівника проекту, який діє як 'Розпорядник', очікується врахування:",
      options: [{ letter:"A", text:"Лише короткострокових прибутків", correct:false },{ letter:"B", text:"Фінансових, соціальних та екологічних впливів", correct:true },{ letter:"C", text:"Лише внутрішньої організаційної політики", correct:false },{ letter:"D", text:"Виключно технічних специфікацій", correct:false }] }
  },

  // ── SECTION 3: 8 Performance Domains ────────────────────────────────────────
  {
    id: 41, section_en: "8 Performance Domains", section_uk: "8 Сфер виконання проєктів",
    en: { question: "A project manager is analyzing the power, interest, and influence of various groups. Which performance domain is the focus?",
      options: [{ letter:"A", text:"Stakeholders", correct:true },{ letter:"B", text:"Team", correct:false },{ letter:"C", text:"Delivery", correct:false },{ letter:"D", text:"Planning", correct:false }] },
    uk: { question: "Керівник проекту аналізує владу, інтерес та вплив різних груп. На якій сфері виконання зосереджена увага?",
      options: [{ letter:"A", text:"Стейкхолдери", correct:true },{ letter:"B", text:"Команда", correct:false },{ letter:"C", text:"Постачання", correct:false },{ letter:"D", text:"Планування", correct:false }] }
  },
  {
    id: 42, section_en: "8 Performance Domains", section_uk: "8 Сфер виконання проєктів",
    en: { question: "In the 'Team' performance domain, success is checked by confirming:",
      options: [{ letter:"A", text:"The lowest possible cost", correct:false },{ letter:"B", text:"Shared ownership and a high-performing team", correct:true },{ letter:"C", text:"Use of a predictive lifecycle", correct:false },{ letter:"D", text:"Minimal communication with stakeholders", correct:false }] },
    uk: { question: "У сфері виконання 'Команда' успіх перевіряється підтвердженням:",
      options: [{ letter:"A", text:"Найнижчої можливої вартості", correct:false },{ letter:"B", text:"Спільної відповідальності та високопродуктивної команди", correct:true },{ letter:"C", text:"Використання предиктивного життєвого циклу", correct:false },{ letter:"D", text:"Мінімальної комунікації зі стейкхолдерами", correct:false }] }
  },
  {
    id: 43, section_en: "8 Performance Domains", section_uk: "8 Сфер виконання проєктів",
    en: { question: "Which domain includes the decision to use an 'Adaptive' approach because the requirements are likely to change frequently?",
      options: [{ letter:"A", text:"Project Work", correct:false },{ letter:"B", text:"Development Approach and Life Cycle", correct:true },{ letter:"C", text:"Uncertainty", correct:false },{ letter:"D", text:"Measurement", correct:false }] },
    uk: { question: "Яка сфера включає рішення використовувати 'Адаптивний' підхід через те, що вимоги, ймовірно, часто змінюватимуться?",
      options: [{ letter:"A", text:"Проектна робота", correct:false },{ letter:"B", text:"Підхід до розробки та життєвий цикл", correct:true },{ letter:"C", text:"Невизначеність", correct:false },{ letter:"D", text:"Вимірювання", correct:false }] }
  },
  {
    id: 44, section_en: "8 Performance Domains", section_uk: "8 Сфер виконання проєктів",
    en: { question: "According to Table 2-6, a successful 'Planning' domain outcome is:",
      options: [{ letter:"A", text:"A fixed, unchangeable schedule", correct:false },{ letter:"B", text:"A holistic and coordinated approach to delivering the outcomes", correct:true },{ letter:"C", text:"High number of status meetings", correct:false },{ letter:"D", text:"No deviations from the initial plan", correct:false }] },
    uk: { question: "Згідно з Таблицею 2-6, успішним результатом сфери 'Планування' є:",
      options: [{ letter:"A", text:"Фіксований розклад, що не підлягає змінам", correct:false },{ letter:"B", text:"Цілісний та скоординований підхід до постачання кінцевих результатів", correct:true },{ letter:"C", text:"Велика кількість статусних нарад", correct:false },{ letter:"D", text:"Відсутність відхилень від початкового плану", correct:false }] }
  },
  {
    id: 45, section_en: "8 Performance Domains", section_uk: "8 Сфер виконання проєктів",
    en: { question: "Managing physical resources and procurement activities is part of which domain?",
      options: [{ letter:"A", text:"Delivery", correct:false },{ letter:"B", text:"Planning", correct:false },{ letter:"C", text:"Project Work", correct:true },{ letter:"D", text:"Uncertainty", correct:false }] },
    uk: { question: "Управління фізичними ресурсами та діяльність із закупівель є частиною якої сфери?",
      options: [{ letter:"A", text:"Постачання", correct:false },{ letter:"B", text:"Планування", correct:false },{ letter:"C", text:"Проектна робота", correct:true },{ letter:"D", text:"Невизначеність", correct:false }] }
  },
  {
    id: 46, section_en: "8 Performance Domains", section_uk: "8 Сфер виконання проєктів",
    en: { question: "The 'Delivery' domain ensures that the project produces the intended:",
      options: [{ letter:"A", text:"Scope and quality requirements", correct:true },{ letter:"B", text:"Budget increases", correct:false },{ letter:"C", text:"Staffing plans", correct:false },{ letter:"D", text:"Organizational charts", correct:false }] },
    uk: { question: "Сфера 'Постачання' забезпечує виробництво проектом передбачених:",
      options: [{ letter:"A", text:"Вимог до обсягу та якості", correct:true },{ letter:"B", text:"Збільшення бюджету", correct:false },{ letter:"C", text:"Планів персоналу", correct:false },{ letter:"D", text:"Організаційних діаграм", correct:false }] }
  },
  {
    id: 47, section_en: "8 Performance Domains", section_uk: "8 Сфер виконання проєктів",
    en: { question: "A project manager uses an 'Information Dashboard' to assess performance and make data-driven decisions. This is an activity in:",
      options: [{ letter:"A", text:"Team Domain", correct:false },{ letter:"B", text:"Uncertainty Domain", correct:false },{ letter:"C", text:"Measurement Domain", correct:true },{ letter:"D", text:"Planning Domain", correct:false }] },
    uk: { question: "Керівник проекту використовує 'Інформаційне табло' для оцінки ефективності та прийняття рішень на основі даних. Це діяльність у:",
      options: [{ letter:"A", text:"Сфері 'Команда'", correct:false },{ letter:"B", text:"Сфері 'Невизначеність'", correct:false },{ letter:"C", text:"Сфері 'Вимірювання'", correct:true },{ letter:"D", text:"Сфері 'Планування'", correct:false }] }
  },
  {
    id: 48, section_en: "8 Performance Domains", section_uk: "8 Сфер виконання проєктів",
    en: { question: "According to Table 2-10, the 'Uncertainty' domain is successful if:",
      options: [{ letter:"A", text:"All risks were eliminated", correct:false },{ letter:"B", text:"Delivery is made possible by responding to the changing environment", correct:true },{ letter:"C", text:"The project plan never changed", correct:false },{ letter:"D", text:"No contingencies were used", correct:false }] },
    uk: { question: "Згідно з Таблицею 2-10, сфера 'Невизначеність' є успішною, якщо:",
      options: [{ letter:"A", text:"Усі ризики було усунено", correct:false },{ letter:"B", text:"Постачання стає можливим завдяки реагуванню на мінливе середовище", correct:true },{ letter:"C", text:"План проекту ніколи не змінювався", correct:false },{ letter:"D", text:"Резерви на непередбачені обставини не використовувалися", correct:false }] }
  },
  {
    id: 49, section_en: "8 Performance Domains", section_uk: "8 Сфер виконання проєктів",
    en: { question: "An 'Adaptive' approach (Figure 2-11) is most appropriate when:",
      options: [{ letter:"A", text:"The project has a fixed price and scope", correct:false },{ letter:"B", text:"Requirements are subject to high uncertainty and change", correct:true },{ letter:"C", text:"The organization has no experience", correct:false },{ letter:"D", text:"The lifecycle is purely sequential", correct:false }] },
    uk: { question: "'Адаптивний' підхід (Рисунок 2-11) найбільш доцільний, коли:",
      options: [{ letter:"A", text:"Проект має фіксовану ціну та обсяг", correct:false },{ letter:"B", text:"Вимоги підлягають високій невизначеності та змінам", correct:true },{ letter:"C", text:"Організація не має досвіду", correct:false },{ letter:"D", text:"Життєвий цикл є суто послідовним", correct:false }] }
  },
  {
    id: 50, section_en: "8 Performance Domains", section_uk: "8 Сфер виконання проєктів",
    en: { question: "'Cadence' in the Development Approach domain refers to:",
      options: [{ letter:"A", text:"The total cost of resources", correct:false },{ letter:"B", text:"The timing and frequency of project deliverables", correct:true },{ letter:"C", text:"The speed of the project manager", correct:false },{ letter:"D", text:"The number of team members", correct:false }] },
    uk: { question: "'Каденція' у сфері 'Підхід до розробки' відноситься до:",
      options: [{ letter:"A", text:"Загальної вартості ресурсів", correct:false },{ letter:"B", text:"Термінів та частоти надання доробок проекту", correct:true },{ letter:"C", text:"Швидкості керівника проекту", correct:false },{ letter:"D", text:"Кількості членів команди", correct:false }] }
  },
  {
    id: 51, section_en: "8 Performance Domains", section_uk: "8 Сфер виконання проєктів",
    en: { question: "To check if the 'Stakeholder' domain is effective, the project manager looks for:",
      options: [{ letter:"A", text:"Productive working relationships and stakeholder satisfaction", correct:true },{ letter:"B", text:"The number of emails sent", correct:false },{ letter:"C", text:"A complete list of all citizens", correct:false },{ letter:"D", text:"Approval from every single person", correct:false }] },
    uk: { question: "Щоб перевірити, чи ефективна сфера 'Стейкхолдери', керівник проекту шукає:",
      options: [{ letter:"A", text:"Продуктивні робочі відносини та задоволеність стейкхолдерів", correct:true },{ letter:"B", text:"Кількість надісланих електронних листів", correct:false },{ letter:"C", text:"Повний список усіх громадян", correct:false },{ letter:"D", text:"Схвалення від кожної окремої людини", correct:false }] }
  },
  {
    id: 52, section_en: "8 Performance Domains", section_uk: "8 Сфер виконання проєктів",
    en: { question: "High-performing teams are an outcome of which domain?",
      options: [{ letter:"A", text:"Planning", correct:false },{ letter:"B", text:"Team", correct:true },{ letter:"C", text:"Measurement", correct:false },{ letter:"D", text:"Project Work", correct:false }] },
    uk: { question: "Високопродуктивні команди є результатом якої сфери?",
      options: [{ letter:"A", text:"Планування", correct:false },{ letter:"B", text:"Команда", correct:true },{ letter:"C", text:"Вимірювання", correct:false },{ letter:"D", text:"Проектна робота", correct:false }] }
  },
  {
    id: 53, section_en: "8 Performance Domains", section_uk: "8 Сфер виконання проєктів",
    en: { question: "A 'Hybrid' approach combines which types of delivery?",
      options: [{ letter:"A", text:"Predictive and Adaptive", correct:true },{ letter:"B", text:"Manual and Automated", correct:false },{ letter:"C", text:"Internal and External", correct:false },{ letter:"D", text:"Financial and Technical", correct:false }] },
    uk: { question: "'Гібридний' підхід поєднує які типи постачання?",
      options: [{ letter:"A", text:"Предиктивне та адаптивне", correct:true },{ letter:"B", text:"Ручне та автоматизоване", correct:false },{ letter:"C", text:"Внутрішнє та зовнішнє", correct:false },{ letter:"D", text:"Фінансове та технічне", correct:false }] }
  },
  {
    id: 54, section_en: "8 Performance Domains", section_uk: "8 Сфер виконання проєктів",
    en: { question: "The 'Cost of Change' curve (Figure 2-22) indicates that finding a defect during testing is:",
      options: [{ letter:"A", text:"Cheaper than finding it during design", correct:false },{ letter:"B", text:"More expensive than finding it during design", correct:true },{ letter:"C", text:"Exactly the same cost", correct:false },{ letter:"D", text:"Free if using agile", correct:false }] },
    uk: { question: "Крива 'Вартість змін' (Рисунок 2-22) вказує на те, що виявлення дефекту під час тестування є:",
      options: [{ letter:"A", text:"Дешевшим, ніж виявлення під час проектування", correct:false },{ letter:"B", text:"Дорожчим, ніж виявлення під час проектування", correct:true },{ letter:"C", text:"Має таку саму вартість", correct:false },{ letter:"D", text:"Безкоштовним у разі використання agile", correct:false }] }
  },
  {
    id: 55, section_en: "8 Performance Domains", section_uk: "8 Сфер виконання проєктів",
    en: { question: "In the 'Measurement' domain, 'Accuracy' is defined as:",
      options: [{ letter:"A", text:"The closeness of a measurement to the actual value", correct:true },{ letter:"B", text:"The consistency of repeated measurements", correct:false },{ letter:"C", text:"The speed of the reporting", correct:false },{ letter:"D", text:"The length of the project charter", correct:false }] },
    uk: { question: "У сфері 'Вимірювання' 'Влучність' (Accuracy) визначається як:",
      options: [{ letter:"A", text:"Близькість вимірювання до фактичного значення", correct:true },{ letter:"B", text:"Послідовність повторюваних вимірювань", correct:false },{ letter:"C", text:"Швидкість звітування", correct:false },{ letter:"D", text:"Довжина статуту проекту", correct:false }] }
  },
  {
    id: 56, section_en: "8 Performance Domains", section_uk: "8 Сфер виконання проєктів",
    en: { question: "Effective 'Project Work' includes 'Learning throughout the project.' This involves:",
      options: [{ letter:"A", text:"Deleting old records", correct:false },{ letter:"B", text:"Knowledge sharing and retrospectives", correct:true },{ letter:"C", text:"Hiring only senior experts", correct:false },{ letter:"D", text:"Avoiding any mistakes", correct:false }] },
    uk: { question: "Ефективна 'Проектна робота' включає 'Навчання протягом проекту'. Це передбачає:",
      options: [{ letter:"A", text:"Видалення старих записів", correct:false },{ letter:"B", text:"Обмін знаннями та ретроспективи", correct:true },{ letter:"C", text:"Наймання лише старших експертів", correct:false },{ letter:"D", text:"Уникнення будь-яких помилок", correct:false }] }
  },
  {
    id: 57, section_en: "8 Performance Domains", section_uk: "8 Сфер виконання проєктів",
    en: { question: "When checking 'Delivery' domain results, 'Quality' means:",
      options: [{ letter:"A", text:"Requirements are met and stakeholders are satisfied", correct:true },{ letter:"B", text:"The most expensive materials were used", correct:false },{ letter:"C", text:"The project finished under budget", correct:false },{ letter:"D", text:"No changes were made to the scope", correct:false }] },
    uk: { question: "При перевірці результатів сфери 'Постачання', 'Якість' означає:",
      options: [{ letter:"A", text:"Вимоги виконані, а стейкхолдери задоволені", correct:true },{ letter:"B", text:"Використано найдорожчі матеріали", correct:false },{ letter:"C", text:"Проект завершено з економією бюджету", correct:false },{ letter:"D", text:"До обсягу не вносилося жодних змін", correct:false }] }
  },
  {
    id: 58, section_en: "8 Performance Domains", section_uk: "8 Сфер виконання проєктів",
    en: { question: "'Ambiguity' in the Uncertainty domain is caused by:",
      options: [{ letter:"A", text:"Fast internet", correct:false },{ letter:"B", text:"Lack of clarity or multiple interpretations", correct:true },{ letter:"C", text:"High budget", correct:false },{ letter:"D", text:"Too many team members", correct:false }] },
    uk: { question: "'Неоднозначність' у сфері Невизначеності спричинена:",
      options: [{ letter:"A", text:"Швидким інтернетом", correct:false },{ letter:"B", text:"Браком ясності або наявністю кількох інтерпретацій", correct:true },{ letter:"C", text:"Високим бюджетом", correct:false },{ letter:"D", text:"Завеликою кількістю членів команди", correct:false }] }
  },
  {
    id: 59, section_en: "8 Performance Domains", section_uk: "8 Сфер виконання проєктів",
    en: { question: "According to Figure 2-15, if results are 'Clustered but far from the target,' this is:",
      options: [{ letter:"A", text:"High precision, low accuracy", correct:true },{ letter:"B", text:"High accuracy, low precision", correct:false },{ letter:"C", text:"Low accuracy, low precision", correct:false },{ letter:"D", text:"High accuracy, high precision", correct:false }] },
    uk: { question: "Згідно з Рисунком 2-15, якщо результати 'згруповані, але далеко від цілі', це:",
      options: [{ letter:"A", text:"Висока прецизійність, низька влучність", correct:true },{ letter:"B", text:"Висока влучність, низька прецизійність", correct:false },{ letter:"C", text:"Низька влучність, низька прецизійність", correct:false },{ letter:"D", text:"Висока влучність, висока прецизійність", correct:false }] }
  },
  {
    id: 60, section_en: "8 Performance Domains", section_uk: "8 Сфер виконання проєктів",
    en: { question: "The primary focus of the 'Planning' domain is:",
      options: [{ letter:"A", text:"Organizing and coordinating the work throughout the project", correct:true },{ letter:"B", text:"Finalizing the project budget", correct:false },{ letter:"C", text:"Closing out all contracts", correct:false },{ letter:"D", text:"Choosing the project manager", correct:false }] },
    uk: { question: "Основним фокусом сфери 'Планування' є:",
      options: [{ letter:"A", text:"Організація та координація роботи впродовж усього проекту", correct:true },{ letter:"B", text:"Остаточне затвердження бюджету проекту", correct:false },{ letter:"C", text:"Закриття всіх контрактів", correct:false },{ letter:"D", text:"Вибір керівника проекту", correct:false }] }
  },

  // ── SECTION 4: Tailoring ─────────────────────────────────────────────────────
  {
    id: 61, section_en: "Tailoring", section_uk: "Припасовування",
    en: { question: "Why is tailoring necessary in project management?",
      options: [{ letter:"A", text:"To follow the PMBOK® Guide exactly", correct:false },{ letter:"B", text:"Because each project is unique and \"one size does not fit all\"", correct:true },{ letter:"C", text:"To increase the number of processes", correct:false },{ letter:"D", text:"To simplify the project manager's job", correct:false }] },
    uk: { question: "Чому припасовування є необхідним в управлінні проектами?",
      options: [{ letter:"A", text:"Для точного дотримання Настанови PMBOK®", correct:false },{ letter:"B", text:"Тому що кожен проект унікальний і «один розмір не підходить усім»", correct:true },{ letter:"C", text:"Для збільшення кількості процесів", correct:false },{ letter:"D", text:"Для спрощення роботи керівника проекту", correct:false }] }
  },
  {
    id: 62, section_en: "Tailoring", section_uk: "Припасовування",
    en: { question: "What is the very first step in the 'Tailoring Process' (Section 3.4)?",
      options: [{ letter:"A", text:"Select initial development approach", correct:true },{ letter:"B", text:"Tailor for the organization", correct:false },{ letter:"C", text:"Tailor for the project", correct:false },{ letter:"D", text:"Continuous improvement", correct:false }] },
    uk: { question: "Яким є перший крок у 'Процесі припасовування' (Розділ 3.4)?",
      options: [{ letter:"A", text:"Обрати початковий підхід до розробки", correct:true },{ letter:"B", text:"Припасуйте до організації", correct:false },{ letter:"C", text:"Припасуйте до проекту", correct:false },{ letter:"D", text:"Постійне вдосконалення", correct:false }] }
  },
  {
    id: 63, section_en: "Tailoring", section_uk: "Припасовування",
    en: { question: "When 'Tailoring for the Organization' (Step 2), what does the project manager consider?",
      options: [{ letter:"A", text:"The specific technical tasks", correct:false },{ letter:"B", text:"Organizational requirements and standard processes", correct:true },{ letter:"C", text:"The weather at the project site", correct:false },{ letter:"D", text:"The individual team members' skills", correct:false }] },
    uk: { question: "При 'Припасовуванні до організації' (Крок 2), що враховує керівник проекту?",
      options: [{ letter:"A", text:"Конкретні технічні завдання", correct:false },{ letter:"B", text:"Організаційні вимоги та стандартні процеси", correct:true },{ letter:"C", text:"Погоду на місці реалізації проекту", correct:false },{ letter:"D", text:"Навички окремих членів команди", correct:false }] }
  },
  {
    id: 64, section_en: "Tailoring", section_uk: "Припасовування",
    en: { question: "'Tailoring for the Project' (Step 3) involves adjusting the approach based on:",
      options: [{ letter:"A", text:"Size, criticality, and complexity of the project", correct:true },{ letter:"B", text:"The CEO's preferences", correct:false },{ letter:"C", text:"The organization's mission statement", correct:false },{ letter:"D", text:"The previous project's failures", correct:false }] },
    uk: { question: "'Припасовування до проекту' (Крок 3) передбачає коригування підходу на основі:",
      options: [{ letter:"A", text:"Розміру, критичності та складності проекту", correct:true },{ letter:"B", text:"Уподобань генерального директора", correct:false },{ letter:"C", text:"Місії організації", correct:false },{ letter:"D", text:"Невдач попереднього проекту", correct:false }] }
  },
  {
    id: 65, section_en: "Tailoring", section_uk: "Припасовування",
    en: { question: "What should be tailored in a project?",
      options: [{ letter:"A", text:"Only the tools", correct:false },{ letter:"B", text:"Only the lifecycle", correct:false },{ letter:"C", text:"Processes, engagement, tools, methods, and artifacts", correct:true },{ letter:"D", text:"Only the budget", correct:false }] },
    uk: { question: "Що слід пристосовувати в проекті?",
      options: [{ letter:"A", text:"Лише інструменти", correct:false },{ letter:"B", text:"Лише життєвий цикл", correct:false },{ letter:"C", text:"Процеси, залучення, інструменти, методи та артефакти", correct:true },{ letter:"D", text:"Лише бюджет", correct:false }] }
  },
  {
    id: 66, section_en: "Tailoring", section_uk: "Припасовування",
    en: { question: "The 'Continuous Improvement' step in tailoring ensures:",
      options: [{ letter:"A", text:"The approach remains effective as the project evolves", correct:true },{ letter:"B", text:"The project plan is never changed", correct:false },{ letter:"C", text:"The team is fired if they fail", correct:false },{ letter:"D", text:"The budget is increased every month", correct:false }] },
    uk: { question: "Крок 'Постійне вдосконалення' у припасовуванні забезпечує:",
      options: [{ letter:"A", text:"Підхід залишається ефективним у міру розвитку проекту", correct:true },{ letter:"B", text:"План проекту ніколи не змінюється", correct:false },{ letter:"C", text:"Звільнення команди у разі невдачі", correct:false },{ letter:"D", text:"Щомісячне збільшення бюджету", correct:false }] }
  },
  {
    id: 67, section_en: "Tailoring", section_uk: "Припасовування",
    en: { question: "Tailoring the 'Stakeholder' domain might involve:",
      options: [{ letter:"A", text:"Adjusting engagement strategies based on the number and diversity of stakeholders", correct:true },{ letter:"B", text:"Excluding stakeholders who disagree", correct:false },{ letter:"C", text:"Sending more emails to everyone", correct:false },{ letter:"D", text:"Reducing stakeholder involvement", correct:false }] },
    uk: { question: "Припасовування сфери 'Стейкхолдери' може передбачати:",
      options: [{ letter:"A", text:"Коригування стратегій залучення залежно від кількості та різноманітності стейкхолдерів", correct:true },{ letter:"B", text:"Виключення стейкхолдерів, які не згодні", correct:false },{ letter:"C", text:"Надсилання більшої кількості листів усім", correct:false },{ letter:"D", text:"Зменшення залучення стейкхолдерів", correct:false }] }
  },
  {
    id: 68, section_en: "Tailoring", section_uk: "Припасовування",
    en: { question: "When tailoring the 'Team' domain, a project manager considers:",
      options: [{ letter:"A", text:"The team's favorite food", correct:false },{ letter:"B", text:"Team size, geographic distribution, and skill levels", correct:true },{ letter:"C", text:"Personal social media accounts", correct:false },{ letter:"D", text:"The team's home addresses", correct:false }] },
    uk: { question: "При припасовуванні сфери 'Команда' керівник проекту враховує:",
      options: [{ letter:"A", text:"Улюблену їжу команди", correct:false },{ letter:"B", text:"Розмір команди, географічний розподіл та рівні кваліфікації", correct:true },{ letter:"C", text:"Особисті акаунти в соціальних мережах", correct:false },{ letter:"D", text:"Домашні адреси членів команди", correct:false }] }
  },
  {
    id: 69, section_en: "Tailoring", section_uk: "Припасовування",
    en: { question: "Tailoring for 'Uncertainty' involves:",
      options: [{ letter:"A", text:"Matching the risk management effort to the level of project risk", correct:true },{ letter:"B", text:"Ignoring all low-level risks", correct:false },{ letter:"C", text:"Using only qualitative analysis", correct:false },{ letter:"D", text:"Increasing the insurance budget", correct:false }] },
    uk: { question: "Припасовування для 'Невизначеності' передбачає:",
      options: [{ letter:"A", text:"Узгодження зусиль з управління ризиками з рівнем ризику проекту", correct:true },{ letter:"B", text:"Ігнорування всіх дрібних ризиків", correct:false },{ letter:"C", text:"Використання лише якісного аналізу", correct:false },{ letter:"D", text:"Збільшення бюджету на страхування", correct:false }] }
  },
  {
    id: 70, section_en: "Tailoring", section_uk: "Припасовування",
    en: { question: "A project manager uses 'Diagnostic' tools (Section 3.6) to:",
      options: [{ letter:"A", text:"Identify where the project approach needs adjustment", correct:true },{ letter:"B", text:"Check the team's medical health", correct:false },{ letter:"C", text:"Calculate the exact ROI", correct:false },{ letter:"D", text:"Fix broken equipment", correct:false }] },
    uk: { question: "Керівник проекту використовує інструменти 'Діагностики' (Розділ 3.6), щоб:",
      options: [{ letter:"A", text:"Визначити, де підхід до проекту потребує коригування", correct:true },{ letter:"B", text:"Перевірити стан здоров'я команди", correct:false },{ letter:"C", text:"Розраховувати точний показник ROI", correct:false },{ letter:"D", text:"Полагодити зламане обладнання", correct:false }] }
  },
  {
    id: 71, section_en: "Tailoring", section_uk: "Припасовування",
    en: { question: "Benefit of tailoring includes:",
      options: [{ letter:"A", text:"More documentation", correct:false },{ letter:"B", text:"Improved efficiency and relevance of project activities", correct:true },{ letter:"C", text:"Guaranteed project success", correct:false },{ letter:"D", text:"Longer project schedules", correct:false }] },
    uk: { question: "Перевага припасовування включає:",
      options: [{ letter:"A", text:"Більше документації", correct:false },{ letter:"B", text:"Покращена ефективність та актуальність проектної діяльності", correct:true },{ letter:"C", text:"Гарантований успіх проекту", correct:false },{ letter:"D", text:"Довші розклади проекту", correct:false }] }
  },
  {
    id: 72, section_en: "Tailoring", section_uk: "Припасовування",
    en: { question: "'Tailoring the processes' specifically means:",
      options: [{ letter:"A", text:"Adding, modifying, or removing steps in a process", correct:true },{ letter:"B", text:"Making everyone work faster", correct:false },{ letter:"C", text:"Following ISO standards only", correct:false },{ letter:"D", text:"Outsourcing all tasks", correct:false }] },
    uk: { question: "'Припасовування процесів' конкретно означає:",
      options: [{ letter:"A", text:"Додавання, модифікація або видалення кроків у процесі", correct:true },{ letter:"B", text:"Змушення всіх працювати швидше", correct:false },{ letter:"C", text:"Дотримання лише стандартів ISO", correct:false },{ letter:"D", text:"Аутсорсинг усіх завдань", correct:false }] }
  },
  {
    id: 73, section_en: "Tailoring", section_uk: "Припасовування",
    en: { question: "Tailoring for the 'Planning' domain might adjust:",
      options: [{ letter:"A", text:"The level of detail and duration of planning cycles", correct:true },{ letter:"B", text:"The font used in the plan", correct:false },{ letter:"C", text:"The project manager's salary", correct:false },{ letter:"D", text:"The office location", correct:false }] },
    uk: { question: "Припасовування для сфери 'Планування' може коригувати:",
      options: [{ letter:"A", text:"Рівень деталізації та тривалість циклів планування", correct:true },{ letter:"B", text:"Шрифт, що використовується в плані", correct:false },{ letter:"C", text:"Зарплату керівника проекту", correct:false },{ letter:"D", text:"Розташування офісу", correct:false }] }
  },
  {
    id: 74, section_en: "Tailoring", section_uk: "Припасовування",
    en: { question: "Factors for tailoring (Figure 3-4) include:",
      options: [{ letter:"A", text:"Organizational factors and project factors", correct:true },{ letter:"B", text:"Competitive factors and global trends", correct:false },{ letter:"C", text:"Weather factors and social media", correct:false },{ letter:"D", text:"Personal factors and hobbies", correct:false }] },
    uk: { question: "Фактори для припасовування (Рисунок 3-4) включають:",
      options: [{ letter:"A", text:"Організаційні фактори та фактори проекту", correct:true },{ letter:"B", text:"Фактори конкуренції та глобальні тренди", correct:false },{ letter:"C", text:"Фактори погоди та соціальні мережі", correct:false },{ letter:"D", text:"Особисті фактори та хобі", correct:false }] }
  },
  {
    id: 75, section_en: "Tailoring", section_uk: "Припасовування",
    en: { question: "Tailoring the 'Delivery' domain involves defining:",
      options: [{ letter:"A", text:"What quality and value mean for the specific project", correct:true },{ letter:"B", text:"The fastest shipping method", correct:false },{ letter:"C", text:"The lowest possible price", correct:false },{ letter:"D", text:"The number of delivery trucks", correct:false }] },
    uk: { question: "Припасовування сфери 'Постачання' передбачає визначення:",
      options: [{ letter:"A", text:"Що означають якість та цінність для конкретного проекту", correct:true },{ letter:"B", text:"Найшвидшого методу доставки", correct:false },{ letter:"C", text:"Найнижчої можливої ціни", correct:false },{ letter:"D", text:"Кількості вантажівок для доставки", correct:false }] }
  },
  {
    id: 76, section_en: "Tailoring", section_uk: "Припасовування",
    en: { question: "Who is responsible for the tailoring of the project approach?",
      options: [{ letter:"A", text:"The organization's CEO", correct:false },{ letter:"B", text:"The project manager and the project team", correct:true },{ letter:"C", text:"Only the project sponsor", correct:false },{ letter:"D", text:"The external customer", correct:false }] },
    uk: { question: "Хто несе відповідальність за припасовування підходу до проекту?",
      options: [{ letter:"A", text:"Генеральний директор організації", correct:false },{ letter:"B", text:"Керівник проекту та команда проекту", correct:true },{ letter:"C", text:"Лише спонсор проекту", correct:false },{ letter:"D", text:"Зовнішній замовник", correct:false }] }
  },
  {
    id: 77, section_en: "Tailoring", section_uk: "Припасовування",
    en: { question: "Tailoring 'methods and artifacts' ensures that the team:",
      options: [{ letter:"A", text:"Uses every template available", correct:false },{ letter:"B", text:"Uses the most appropriate tools for the work", correct:true },{ letter:"C", text:"Stops using any documents", correct:false },{ letter:"D", text:"Creates new tools every day", correct:false }] },
    uk: { question: "Припасовування 'методів та артефактів' гарантує, що команда:",
      options: [{ letter:"A", text:"Використовує кожен доступний шаблон", correct:false },{ letter:"B", text:"Використовує найбільш відповідні інструменти для роботи", correct:true },{ letter:"C", text:"Припиняє використовувати будь-які документи", correct:false },{ letter:"D", text:"Створює нові інструменти щодня", correct:false }] }
  },
  {
    id: 78, section_en: "Tailoring", section_uk: "Припасовування",
    en: { question: "Tailoring 'engagement' refers to:",
      options: [{ letter:"A", text:"How the team interacts with stakeholders throughout the project", correct:true },{ letter:"B", text:"The hiring of new employees", correct:false },{ letter:"C", text:"Contract negotiations with vendors", correct:false },{ letter:"D", text:"Organizing social events", correct:false }] },
    uk: { question: "Припасовування 'залучення' стосується:",
      options: [{ letter:"A", text:"Того, як команда взаємодіє зі стейкхолдерами протягом проекту", correct:true },{ letter:"B", text:"Найму нових працівників", correct:false },{ letter:"C", text:"Переговорів щодо контрактів з постачальниками", correct:false },{ letter:"D", text:"Організації соціальних заходів", correct:false }] }
  },
  {
    id: 79, section_en: "Tailoring", section_uk: "Припасовування",
    en: { question: "Tailoring is described as:",
      options: [{ letter:"A", text:"A one-time activity at the start", correct:false },{ letter:"B", text:"A continuous process during the project", correct:true },{ letter:"C", text:"A software tool", correct:false },{ letter:"D", text:"A mandatory legal requirement", correct:false }] },
    uk: { question: "Припасовування описується як:",
      options: [{ letter:"A", text:"Одноразова дія на старті", correct:false },{ letter:"B", text:"Постійний процес під час проекту", correct:true },{ letter:"C", text:"Програмний інструмент", correct:false },{ letter:"D", text:"Обов'язкова юридична вимога", correct:false }] }
  },
  {
    id: 80, section_en: "Tailoring", section_uk: "Припасовування",
    en: { question: "According to Section 3.7, tailoring aims to maximize:",
      options: [{ letter:"A", text:"The number of deliverables", correct:false },{ letter:"B", text:"Value and performance while managing constraints", correct:true },{ letter:"C", text:"The project manager's authority", correct:false },{ letter:"D", text:"The use of organizational resources", correct:false }] },
    uk: { question: "Згідно з Розділом 3.7, припасовування спрямоване на максимізацію:",
      options: [{ letter:"A", text:"Кількості доробок", correct:false },{ letter:"B", text:"Цінності та ефективності при управлінні обмеженнями", correct:true },{ letter:"C", text:"Повноважень керівника проекту", correct:false },{ letter:"D", text:"Використання організаційних ресурсів", correct:false }] }
  },

  // ── SECTION 5: Models, Methods, and Artifacts ────────────────────────────────
  {
    id: 81, section_en: "Models, Methods & Artifacts", section_uk: "Моделі, методи та артефакти",
    en: { question: "A project manager uses a 'thinking framework to explain a process or phenomenon.' This is a:",
      options: [{ letter:"A", text:"Method", correct:false },{ letter:"B", text:"Artifact", correct:false },{ letter:"C", text:"Model", correct:true },{ letter:"D", text:"Logic", correct:false }] },
    uk: { question: "Керівник проекту використовує 'схему мислення для пояснення процесу або явища'. Це:",
      options: [{ letter:"A", text:"Метод", correct:false },{ letter:"B", text:"Артефакт", correct:false },{ letter:"C", text:"Модель", correct:true },{ letter:"D", text:"Логіка", correct:false }] }
  },
  {
    id: 82, section_en: "Models, Methods & Artifacts", section_uk: "Моделі, методи та артефакти",
    en: { question: "In the 'Team' Performance Domain, which model type is most useful for understanding member needs?",
      options: [{ letter:"A", text:"Change Models", correct:false },{ letter:"B", text:"Complexity Models", correct:false },{ letter:"C", text:"Motivation Models", correct:true },{ letter:"D", text:"Communication Models", correct:false }] },
    uk: { question: "У сфері виконання 'Команда' який тип моделей є найкориснішим для розуміння потреб її членів?",
      options: [{ letter:"A", text:"Моделі змін", correct:false },{ letter:"B", text:"Моделі складності", correct:false },{ letter:"C", text:"Моделі мотивації", correct:true },{ letter:"D", text:"Моделі комунікації", correct:false }] }
  },
  {
    id: 83, section_en: "Models, Methods & Artifacts", section_uk: "Моделі, методи та артефакти",
    en: { question: "Which model helps a project manager adapt their style based on the team's competence and commitment?",
      options: [{ letter:"A", text:"Situational Leadership Models", correct:true },{ letter:"B", text:"Motivation Models", correct:false },{ letter:"C", text:"Change Models", correct:false },{ letter:"D", text:"Conflict Models", correct:false }] },
    uk: { question: "Яка модель допомагає керівнику проекту адаптувати свій стиль на основі компетентності та відданості команди?",
      options: [{ letter:"A", text:"Моделі ситуаційного лідерства", correct:true },{ letter:"B", text:"Моделі мотивації", correct:false },{ letter:"C", text:"Моделі змін", correct:false },{ letter:"D", text:"Моделі конфліктів", correct:false }] }
  },
  {
    id: 84, section_en: "Models, Methods & Artifacts", section_uk: "Моделі, методи та артефакти",
    en: { question: "Models for 'Change' (Section 4.2.4) are primarily used for:",
      options: [{ letter:"A", text:"Managing the transition from current state to future state", correct:true },{ letter:"B", text:"Tracking software code changes", correct:false },{ letter:"C", text:"Calculating budget variances", correct:false },{ letter:"D", text:"Swapping team members", correct:false }] },
    uk: { question: "Моделі 'Змін' (Розділ 4.2.4) насамперед використовуються для:",
      options: [{ letter:"A", text:"Управління переходом від поточного стану до майбутнього", correct:true },{ letter:"B", text:"Відстеження змін у програмному коді", correct:false },{ letter:"C", text:"Розрахунку відхилень бюджету", correct:false },{ letter:"D", text:"Заміни членів команди", correct:false }] }
  },
  {
    id: 85, section_en: "Models, Methods & Artifacts", section_uk: "Моделі, методи та артефакти",
    en: { question: "A 'Method' (Section 4.4) is defined as a:",
      options: [{ letter:"A", text:"Means for achieving an outcome or result", correct:true },{ letter:"B", text:"Physical deliverable", correct:false },{ letter:"C", text:"Legal contract", correct:false },{ letter:"D", text:"Software application", correct:false }] },
    uk: { question: "'Метод' (Розділ 4.4) визначається як:",
      options: [{ letter:"A", text:"Засіб для досягнення кінцевого результату", correct:true },{ letter:"B", text:"Фізичний доробок", correct:false },{ letter:"C", text:"Юридичний контракт", correct:false },{ letter:"D", text:"Програмний додаток", correct:false }] }
  },
  {
    id: 86, section_en: "Models, Methods & Artifacts", section_uk: "Моделі, методи та артефакти",
    en: { question: "Which method is used to determine the cost, effort, or duration of a task?",
      options: [{ letter:"A", text:"Data Gathering", correct:false },{ letter:"B", text:"Estimating", correct:true },{ letter:"C", text:"Meetings", correct:false },{ letter:"D", text:"Auditing", correct:false }] },
    uk: { question: "Який метод використовується для визначення вартості, зусиль або тривалості завдання?",
      options: [{ letter:"A", text:"Збір даних", correct:false },{ letter:"B", text:"Оцінювання", correct:true },{ letter:"C", text:"Наради", correct:false },{ letter:"D", text:"Аудит", correct:false }] }
  },
  {
    id: 87, section_en: "Models, Methods & Artifacts", section_uk: "Моделі, методи та артефакти",
    en: { question: "'Retrospectives' and 'Stand-ups' are examples of which method category?",
      options: [{ letter:"A", text:"Data Analysis", correct:false },{ letter:"B", text:"Estimating", correct:false },{ letter:"C", text:"Meetings and Events", correct:true },{ letter:"D", text:"Governance", correct:false }] },
    uk: { question: "'Ретроспективи' та 'стендапи' є прикладами якої категорії методів?",
      options: [{ letter:"A", text:"Аналіз даних", correct:false },{ letter:"B", text:"Оцінювання", correct:false },{ letter:"C", text:"Наради та події", correct:true },{ letter:"D", text:"Врядування", correct:false }] }
  },
  {
    id: 88, section_en: "Models, Methods & Artifacts", section_uk: "Моделі, методи та артефакти",
    en: { question: "An 'Artifact' in PMBOK® 7 is a:",
      options: [{ letter:"A", text:"Template, document, or deliverable", correct:true },{ letter:"B", text:"Team member", correct:false },{ letter:"C", text:"Historical ruin", correct:false },{ letter:"D", text:"Method of communication", correct:false }] },
    uk: { question: "'Артефакт' у PMBOK® 7 — це:",
      options: [{ letter:"A", text:"Шаблон, документ або доробок", correct:true },{ letter:"B", text:"Член команди", correct:false },{ letter:"C", text:"Історична руїна", correct:false },{ letter:"D", text:"Метод комунікації", correct:false }] }
  },
  {
    id: 89, section_en: "Models, Methods & Artifacts", section_uk: "Моделі, методи та артефакти",
    en: { question: "A 'Business Case' is classified as which type of artifact?",
      options: [{ letter:"A", text:"Strategy Artifact", correct:true },{ letter:"B", text:"Plan Artifact", correct:false },{ letter:"C", text:"Report Artifact", correct:false },{ letter:"D", text:"Log Artifact", correct:false }] },
    uk: { question: "'Бізнес-кейс' класифікується як який тип артефактів?",
      options: [{ letter:"A", text:"Артефакт стратегії", correct:true },{ letter:"B", text:"Артефакт плану", correct:false },{ letter:"C", text:"Артефакт звіту", correct:false },{ letter:"D", text:"Артефакт журналу", correct:false }] }
  },
  {
    id: 90, section_en: "Models, Methods & Artifacts", section_uk: "Моделі, методи та артефакти",
    en: { question: "Which artifact is a 'formally authorized document that allows the project to start'?",
      options: [{ letter:"A", text:"Scope Statement", correct:false },{ letter:"B", text:"Project Charter", correct:true },{ letter:"C", text:"Business Case", correct:false },{ letter:"D", text:"Team Charter", correct:false }] },
    uk: { question: "Який артефакт є 'формально затвердженим документом, що дозволяє розпочати проект'?",
      options: [{ letter:"A", text:"Опис обсягу", correct:false },{ letter:"B", text:"Статут проекту", correct:true },{ letter:"C", text:"Бізнес-кейс", correct:false },{ letter:"D", text:"Статут команди", correct:false }] }
  },
  {
    id: 91, section_en: "Models, Methods & Artifacts", section_uk: "Моделі, методи та артефакти",
    en: { question: "A 'Risk Register' belongs to which category of artifacts?",
      options: [{ letter:"A", text:"Strategy Artifacts", correct:false },{ letter:"B", text:"Logs and Registers", correct:true },{ letter:"C", text:"Hierarchy Charts", correct:false },{ letter:"D", text:"Agreements", correct:false }] },
    uk: { question: "'Реєстр ризиків' належить до якої категорії артефактів?",
      options: [{ letter:"A", text:"Артефакти стратегії", correct:false },{ letter:"B", text:"Журнали та реєстри", correct:true },{ letter:"C", text:"Ієрархічні діаграми", correct:false },{ letter:"D", text:"Угоди", correct:false }] }
  },
  {
    id: 92, section_en: "Models, Methods & Artifacts", section_uk: "Моделі, методи та артефакти",
    en: { question: "The 'WBS' (Work Breakdown Structure) is an example of a:",
      options: [{ letter:"A", text:"Report", correct:false },{ letter:"B", text:"Log", correct:false },{ letter:"C", text:"Hierarchy Chart", correct:true },{ letter:"D", text:"Strategy", correct:false }] },
    uk: { question: "'WBS' (ієрархічна структура робіт) є прикладом:",
      options: [{ letter:"A", text:"Звіту", correct:false },{ letter:"B", text:"Журналу", correct:false },{ letter:"C", text:"Ієрархічної діаграми", correct:true },{ letter:"D", text:"Стратегії", correct:false }] }
  },
  {
    id: 93, section_en: "Models, Methods & Artifacts", section_uk: "Моделі, методи та артефакти",
    en: { question: "Artifacts like 'Burn charts' are used for:",
      options: [{ letter:"A", text:"Visualizing data and progress", correct:true },{ letter:"B", text:"Storing legal contracts", correct:false },{ letter:"C", text:"Writing emails", correct:false },{ letter:"D", text:"Hiring vendors", correct:false }] },
    uk: { question: "Артефакти, такі як 'Діаграми згорання', використовуються для:",
      options: [{ letter:"A", text:"Візуалізації даних та прогресу", correct:true },{ letter:"B", text:"Зберігання юридичних контрактів", correct:false },{ letter:"C", text:"Написання електронних листів", correct:false },{ letter:"D", text:"Найму постачальників", correct:false }] }
  },
  {
    id: 94, section_en: "Models, Methods & Artifacts", section_uk: "Моделі, методи та артефакти",
    en: { question: "Which artifact category includes 'Memorandums of Understanding (MOU)'?",
      options: [{ letter:"A", text:"Reports", correct:false },{ letter:"B", text:"Strategy", correct:false },{ letter:"C", text:"Agreements and Contracts", correct:true },{ letter:"D", text:"Visual Data", correct:false }] },
    uk: { question: "Яка категорія артефактів включає 'Меморандуми про взаєморозуміння (MOU)'?",
      options: [{ letter:"A", text:"Звіти", correct:false },{ letter:"B", text:"Стратегія", correct:false },{ letter:"C", text:"Угоди та контракти", correct:true },{ letter:"D", text:"Візуальні дані", correct:false }] }
  },
  {
    id: 95, section_en: "Models, Methods & Artifacts", section_uk: "Моделі, методи та артефакти",
    en: { question: "According to Table 4-3, which domain is the 'Risk Register' primarily associated with?",
      options: [{ letter:"A", text:"Team", correct:false },{ letter:"B", text:"Uncertainty", correct:true },{ letter:"C", text:"Planning", correct:false },{ letter:"D", text:"Delivery", correct:false }] },
    uk: { question: "Згідно з Таблицею 4-3, з якою сферою насамперед пов'язаний 'Реєстр ризиків'?",
      options: [{ letter:"A", text:"Команда", correct:false },{ letter:"B", text:"Невизначеність", correct:true },{ letter:"C", text:"Планування", correct:false },{ letter:"D", text:"Постачання", correct:false }] }
  },
  {
    id: 96, section_en: "Models, Methods & Artifacts", section_uk: "Моделі, методи та артефакти",
    en: { question: "'Earned Value Analysis' is a method used for:",
      options: [{ letter:"A", text:"Analyzing data to determine project health", correct:true },{ letter:"B", text:"Estimating task duration", correct:false },{ letter:"C", text:"Hiring team members", correct:false },{ letter:"D", text:"Creating a logo", correct:false }] },
    uk: { question: "'Аналіз здобутої цінності' — це метод, що використовується для:",
      options: [{ letter:"A", text:"Аналізу даних для визначення стану проекту", correct:true },{ letter:"B", text:"Оцінки тривалості завдань", correct:false },{ letter:"C", text:"Найму членів команди", correct:false },{ letter:"D", text:"Створення логотипу", correct:false }] }
  },
  {
    id: 97, section_en: "Models, Methods & Artifacts", section_uk: "Моделі, методи та артефакти",
    en: { question: "Motivation models like Maslow's Hierarchy are primarily applied in which domain?",
      options: [{ letter:"A", text:"Stakeholders", correct:false },{ letter:"B", text:"Team", correct:true },{ letter:"C", text:"Measurement", correct:false },{ letter:"D", text:"Planning", correct:false }] },
    uk: { question: "Моделі мотивації, такі як ієрархія Маслоу, насамперед застосовуються в якій сфері?",
      options: [{ letter:"A", text:"Стейкхолдери", correct:false },{ letter:"B", text:"Команда", correct:true },{ letter:"C", text:"Вимірювання", correct:false },{ letter:"D", text:"Планування", correct:false }] }
  },
  {
    id: 98, section_en: "Models, Methods & Artifacts", section_uk: "Моделі, методи та артефакти",
    en: { question: "Complexity models are used when:",
      options: [{ letter:"A", text:"The project has many interrelated and moving parts", correct:true },{ letter:"B", text:"The project is very simple", correct:false },{ letter:"C", text:"There are only two stakeholders", correct:false },{ letter:"D", text:"The budget is fixed", correct:false }] },
    uk: { question: "Моделі складності використовуються, коли:",
      options: [{ letter:"A", text:"Проект має багато взаємопов'язаних рухомих частин", correct:true },{ letter:"B", text:"Проект дуже простий", correct:false },{ letter:"C", text:"Є лише два стейкхолдери", correct:false },{ letter:"D", text:"Бюджет фіксований", correct:false }] }
  },
  {
    id: 99, section_en: "Models, Methods & Artifacts", section_uk: "Моделі, методи та артефакти",
    en: { question: "Which artifact shows the 'planned work versus actual work' visually?",
      options: [{ letter:"A", text:"Risk Register", correct:false },{ letter:"B", text:"Stakeholder Map", correct:false },{ letter:"C", text:"Burn chart", correct:true },{ letter:"D", text:"Business Case", correct:false }] },
    uk: { question: "Який артефакт візуально показує 'заплановану роботу порівняно з фактичною'?",
      options: [{ letter:"A", text:"Реєстр ризиків", correct:false },{ letter:"B", text:"Карта стейкхолдерів", correct:false },{ letter:"C", text:"Діаграма згорання", correct:true },{ letter:"D", text:"Бізнес-кейс", correct:false }] }
  },
  {
    id: 100, section_en: "Models, Methods & Artifacts", section_uk: "Моделі, методи та артефакти",
    en: { question: "Table 4-3 in Section 4 helps the project manager to:",
      options: [{ letter:"A", text:"Map artifacts to the performance domains they support", correct:true },{ letter:"B", text:"Find the exit in the office", correct:false },{ letter:"C", text:"Calculate the team's payroll", correct:false },{ letter:"D", text:"Order new office furniture", correct:false }] },
    uk: { question: "Таблиця 4-3 у Розділі 4 допомагає керівнику проекту:",
      options: [{ letter:"A", text:"Співвіднести артефакти зі сферами виконання, які вони підтримують", correct:true },{ letter:"B", text:"Знайти вихід з офісу", correct:false },{ letter:"C", text:"Розраховувати заробітну плату команди", correct:false },{ letter:"D", text:"Замовити нові офісні меблі", correct:false }] }
  }
];
