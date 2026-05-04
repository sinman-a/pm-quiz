const QUESTIONS = [
  // ── SECTION 1: Value Delivery System ────────────────────────────────────────
  {
    id: 1, section_en: "Value Delivery System", section_uk: "Система постачання цінності",
    en: { question: "A senior executive shares a new corporate strategy aimed at increasing market share. In the value delivery system, which component is primarily responsible for translating this strategy into desired outcomes and benefits?",
      options: [{ letter:"A", text:"Operations", correct:false },{ letter:"B", text:"Portfolios", correct:true },{ letter:"C", text:"Individual projects", correct:false },{ letter:"D", text:"Project Management Office (PMO)", correct:false }] },
    uk: { question: "Вищий керівник ділиться новою корпоративною стратегією, спрямованою на збільшення частки ринку. У системі постачання цінності, який компонент несе основну відповідальність за перетворення цієї стратегії на бажані кінцеві результати та вигоди?",
      options: [{ letter:"A", text:"Операційна діяльність", correct:false },{ letter:"B", text:"Портфелі", correct:true },{ letter:"C", text:"Окремі проєкти", correct:false },{ letter:"D", text:"Офіс управління проєктами (PMO)", correct:false }] }
  },
  {
    id: 2, section_en: "Value Delivery System", section_uk: "Система постачання цінності",
    en: { question: "During a project review, a manager focuses on the actual benefits realized by the customers rather than just the completed software modules. This focus is an example of prioritizing:",
      options: [{ letter:"A", text:"Outputs", correct:false },{ letter:"B", text:"Artifacts", correct:false },{ letter:"C", text:"Outcomes", correct:true },{ letter:"D", text:"Project tasks", correct:false }] },
    uk: { question: "Під час огляду проєкту менеджер зосереджується на фактичних вигодах, отриманих замовниками, а не лише на завершених модулях програмного забезпечення. Цей фокус є прикладом пріоритезації:",
      options: [{ letter:"A", text:"Доробок", correct:false },{ letter:"B", text:"Артефактів", correct:false },{ letter:"C", text:"Кінцевих результатів", correct:true },{ letter:"D", text:"Завдань проєкту", correct:false }] }
  },
  {
    id: 3, section_en: "Value Delivery System", section_uk: "Система постачання цінності",
    en: { question: "Strategic information flows from senior leadership to portfolios. What information typically flows back from operations to programs and projects to support continuous improvement?",
      options: [{ letter:"A", text:"Funding approvals and budget limits.", correct:false },{ letter:"B", text:"Desired business value and strategic goals.", correct:false },{ letter:"C", text:"Information on updates, fixes, and modifications.", correct:true },{ letter:"D", text:"Performance assessments of the portfolio.", correct:false }] },
    uk: { question: "Стратегічна інформація передається від вищого керівництва до портфелів. Яка інформація зазвичай повертається від операційної діяльності до програм та проєктів для підтримки постійного вдосконалення?",
      options: [{ letter:"A", text:"Затвердження фінансування та бюджетні ліміти.", correct:false },{ letter:"B", text:"Бажана бізнес-цінність та стратегічні цілі.", correct:false },{ letter:"C", text:"Інформація щодо оновлень, виправлень та модифікацій.", correct:true },{ letter:"D", text:"Оцінки виконання портфеля.", correct:false }] }
  },
  {
    id: 4, section_en: "Value Delivery System", section_uk: "Система постачання цінності",
    en: { question: "A project team is producing a unique product. Within the value delivery system, what do programs and projects provide to the \"Operations\" component?",
      options: [{ letter:"A", text:"Strategic direction and vision.", correct:false },{ letter:"B", text:"Portfolio performance assessments.", correct:false },{ letter:"C", text:"Outputs with support and maintenance information.", correct:true },{ letter:"D", text:"Business objectives and desired outcomes.", correct:false }] },
    uk: { question: "Команда проєкту створює унікальний продукт. У системі постачання цінності, що саме програми та проєкти надають компоненту \"Операційна діяльність\"?",
      options: [{ letter:"A", text:"Стратегічний напрям та бачення.", correct:false },{ letter:"B", text:"Оцінки виконання портфеля.", correct:false },{ letter:"C", text:"Доробки з інформацією щодо підтримки та обслуговування.", correct:true },{ letter:"D", text:"Бізнес-цілі та бажані кінцеві результати.", correct:false }] }
  },
  {
    id: 5, section_en: "Value Delivery System", section_uk: "Система постачання цінності",
    en: { question: "An organization is evaluating its internal environment. Which of the following is considered an internal environmental factor that influences the value delivery system?",
      options: [{ letter:"A", text:"Organizational culture, structure, and governance.", correct:true },{ letter:"B", text:"Market conditions and competitor actions.", correct:false },{ letter:"C", text:"National regulatory requirements.", correct:false },{ letter:"D", text:"Financial considerations such as exchange rates.", correct:false }] },
    uk: { question: "Організація оцінює своє внутрішнє середовище. Що з наведеного вважається фактором внутрішнього середовища, який впливає на систему постачання цінності?",
      options: [{ letter:"A", text:"Організаційна культура, структура та врядування.", correct:true },{ letter:"B", text:"Ринкові умови та дії конкурентів.", correct:false },{ letter:"C", text:"Національні нормативні вимоги.", correct:false },{ letter:"D", text:"Фінансові міркування, такі як курси валют.", correct:false }] }
  },
  {
    id: 6, section_en: "Value Delivery System", section_uk: "Система постачання цінності",
    en: { question: "A portfolio manager receives a report indicating that a major program is no longer aligned with the updated organizational strategy. What should the portfolio manager provide to the program?",
      options: [{ letter:"A", text:"A new technical specification for the product.", correct:false },{ letter:"B", text:"A list of completed project outputs.", correct:false },{ letter:"C", text:"Updated desired outcomes and strategic alignment.", correct:true },{ letter:"D", text:"Information on operational fixes.", correct:false }] },
    uk: { question: "Менеджер портфеля отримує звіт, який вказує на те, що велика програма більше не відповідає оновленій стратегії організації. Що менеджер портфеля має надати цій програмі?",
      options: [{ letter:"A", text:"Нову технічну специфікацію продукту.", correct:false },{ letter:"B", text:"Список завершених доробок проєкту.", correct:false },{ letter:"C", text:"Оновлені бажані кінцеві результати та стратегічну відповідність.", correct:true },{ letter:"D", text:"Інформацію про операційні виправлення.", correct:false }] }
  },
  {
    id: 7, section_en: "Value Delivery System", section_uk: "Система постачання цінності",
    en: { question: "Which function in the value delivery system is primarily responsible for providing a structure for decision-making and resolving issues that the project team cannot handle alone?",
      options: [{ letter:"A", text:"Technical experts.", correct:false },{ letter:"B", text:"End users.", correct:false },{ letter:"C", text:"Governance and resource providers.", correct:true },{ letter:"D", text:"Project operations staff.", correct:false }] },
    uk: { question: "Яка функція в системі постачання цінності несе основну відповідальність за забезпечення структури для ухвалення рішень та вирішення проблем, з якими команда проєкту не може впоратися самостійно?",
      options: [{ letter:"A", text:"Технічні експерти.", correct:false },{ letter:"B", text:"Кінцеві користувачі.", correct:false },{ letter:"C", text:"Врядування та надавачі ресурсів.", correct:true },{ letter:"D", text:"Операційний персонал проєкту.", correct:false }] }
  },
  {
    id: 8, section_en: "Value Delivery System", section_uk: "Система постачання цінності",
    en: { question: "A project manager is concerned about how external factors like inflation and interest rates will affect the project budget. These factors belong to which environment?",
      options: [{ letter:"A", text:"Internal environment.", correct:false },{ letter:"B", text:"External environment.", correct:true },{ letter:"C", text:"Organizational process assets.", correct:false },{ letter:"D", text:"Internal governance structure.", correct:false }] },
    uk: { question: "Керівник проєкту стурбований тим, як зовнішні фактори, такі як інфляція та відсоткові ставки, вплинуть на бюджет проєкту. Ці фактори належать до якого середовища?",
      options: [{ letter:"A", text:"Внутрішнє середовище.", correct:false },{ letter:"B", text:"Зовнішнє середовище.", correct:true },{ letter:"C", text:"Активи процесів організації.", correct:false },{ letter:"D", text:"Внутрішня структура врядування.", correct:false }] }
  },
  {
    id: 9, section_en: "Value Delivery System", section_uk: "Система постачання цінності",
    en: { question: "What defines \"Value\" in the context of the standard for project management?",
      options: [{ letter:"A", text:"The total revenue generated by the project outputs.", correct:false },{ letter:"B", text:"The worth, importance, or usefulness of something as perceived by stakeholders.", correct:true },{ letter:"C", text:"The strict adherence to the project schedule and budget.", correct:false },{ letter:"D", text:"The number of artifacts produced during the project lifecycle.", correct:false }] },
    uk: { question: "Що визначає \"Цінність\" у контексті стандарту з управління проєктами?",
      options: [{ letter:"A", text:"Загальний дохід, отриманий від доробок проєкту.", correct:false },{ letter:"B", text:"Вартість, важливість чи корисність чогось, як це сприймається стейкхолдерами.", correct:true },{ letter:"C", text:"Суворе дотримання розкладу та бюджету проєкту.", correct:false },{ letter:"D", text:"Кількість артефактів, створених протягом життєвого циклу проєкту.", correct:false }] }
  },
  {
    id: 10, section_en: "Value Delivery System", section_uk: "Система постачання цінності",
    en: { question: "In a value delivery system, how is information about the success of the organizational strategy typically communicated to senior leadership?",
      options: [{ letter:"A", text:"Through outcomes, benefits, and value performance analysis.", correct:true },{ letter:"B", text:"Via daily project status reports from team members.", correct:false },{ letter:"C", text:"By reviewing technical product specifications.", correct:false },{ letter:"D", text:"Through the logs of operational maintenance.", correct:false }] },
    uk: { question: "У системі постачання цінності, як інформація про успіх стратегії організації зазвичай передається вищому керівництву?",
      options: [{ letter:"A", text:"Через аналіз кінцевих результатів, вигід та ефективності цінності.", correct:true },{ letter:"B", text:"Через щоденні звіти про стан проєкту від членів команди.", correct:false },{ letter:"C", text:"Шляхом перегляду технічних специфікацій продукту.", correct:false },{ letter:"D", text:"Через журнали операційного технічного обслуговування.", correct:false }] }
  },
  {
    id: 11, section_en: "Value Delivery System", section_uk: "Система постачання цінності",
    en: { question: "A government agency initiates a project to reduce traffic congestion. The resulting new traffic management system is the:",
      options: [{ letter:"A", text:"Output", correct:true },{ letter:"B", text:"Outcome", correct:false },{ letter:"C", text:"Portfolio", correct:false },{ letter:"D", text:"Strategy", correct:false }] },
    uk: { question: "Державна установа ініціює проєкт зі зменшення заторів на дорогах. Створена нова система управління дорожнім рухом — це:",
      options: [{ letter:"A", text:"Доробок", correct:true },{ letter:"B", text:"Кінцевий результат", correct:false },{ letter:"C", text:"Портфель", correct:false },{ letter:"D", text:"Стратегія", correct:false }] }
  },
  {
    id: 12, section_en: "Value Delivery System", section_uk: "Система постачання цінності",
    en: { question: "Following the launch of the traffic management system, the actual reduction in average travel time for citizens is the:",
      options: [{ letter:"A", text:"Output", correct:false },{ letter:"B", text:"Outcome", correct:true },{ letter:"C", text:"Artifact", correct:false },{ letter:"D", text:"Governance", correct:false }] },
    uk: { question: "Після запуску системи управління дорожнім рухом, фактичне скорочення середнього часу в дорозі для громадян — це:",
      options: [{ letter:"A", text:"Доробок", correct:false },{ letter:"B", text:"Кінцевий результат", correct:true },{ letter:"C", text:"Артефакт", correct:false },{ letter:"D", text:"Врядування", correct:false }] }
  },
  {
    id: 13, section_en: "Value Delivery System", section_uk: "Система постачання цінності",
    en: { question: "Which component of the value delivery system is defined as a temporary endeavor to create a unique product, service, or result?",
      options: [{ letter:"A", text:"Program", correct:false },{ letter:"B", text:"Portfolio", correct:false },{ letter:"C", text:"Project", correct:true },{ letter:"D", text:"Operation", correct:false }] },
    uk: { question: "Який компонент системи постачання цінності визначається як тимчасова діяльність, спрямована на створення унікального продукту, послуги або результату?",
      options: [{ letter:"A", text:"Програма", correct:false },{ letter:"B", text:"Портфель", correct:false },{ letter:"C", text:"Проєкт", correct:true },{ letter:"D", text:"Операція", correct:false }] }
  },
  {
    id: 14, section_en: "Value Delivery System", section_uk: "Система постачання цінності",
    en: { question: "An organization manages a group of related projects and subsidiary programs to achieve benefits that are not available from managing them individually. This is a:",
      options: [{ letter:"A", text:"Portfolio", correct:false },{ letter:"B", text:"Program", correct:true },{ letter:"C", text:"Product", correct:false },{ letter:"D", text:"System", correct:false }] },
    uk: { question: "Організація управляє групою пов'язаних проєктів та підпорядкованих програм для досягнення вигід, які недоступні при індивідуальному управлінні ними. Це:",
      options: [{ letter:"A", text:"Портфель", correct:false },{ letter:"B", text:"Програма", correct:true },{ letter:"C", text:"Продукт", correct:false },{ letter:"D", text:"Система", correct:false }] }
  },
  {
    id: 15, section_en: "Value Delivery System", section_uk: "Система постачання цінності",
    en: { question: "Who is responsible for providing the project team with the authority to use organizational resources and resolving high-level obstacles?",
      options: [{ letter:"A", text:"The End User", correct:false },{ letter:"B", text:"The Sponsor", correct:true },{ letter:"C", text:"The Project Lead", correct:false },{ letter:"D", text:"The Technical Expert", correct:false }] },
    uk: { question: "Хто відповідає за надання команді проєкту повноважень на використання ресурсів організації та вирішення перешкод високого рівня?",
      options: [{ letter:"A", text:"Кінцевий користувач", correct:false },{ letter:"B", text:"Спонсор", correct:true },{ letter:"C", text:"Керівник проєкту", correct:false },{ letter:"D", text:"Технічний експерт", correct:false }] }
  },
  {
    id: 16, section_en: "Value Delivery System", section_uk: "Система постачання цінності",
    en: { question: "A project is developing a new medical device. The \"End User\" function in this project is primarily concerned with:",
      options: [{ letter:"A", text:"Providing the project's financial funding.", correct:false },{ letter:"B", text:"Directly interacting with the project's outputs to gain value.", correct:true },{ letter:"C", text:"Managing the project team's daily tasks.", correct:false },{ letter:"D", text:"Aligning the project with the corporate portfolio.", correct:false }] },
    uk: { question: "Проєкт розробляє новий медичний пристрій. Функція \"Кінцевий користувач\" у цьому проєкті насамперед стосується:",
      options: [{ letter:"A", text:"Забезпечення фінансового фінансування проєкту.", correct:false },{ letter:"B", text:"Безпосередньої взаємодії з доробками проєкту для отримання цінності.", correct:true },{ letter:"C", text:"Управління щоденними завданнями команди проєкту.", correct:false },{ letter:"D", text:"Узгодження проєкту з корпоративним портфелем.", correct:false }] }
  },
  {
    id: 17, section_en: "Value Delivery System", section_uk: "Система постачання цінності",
    en: { question: "Which of the following describes the flow of information regarding \"Portfolio Performance\"?",
      options: [{ letter:"A", text:"From Operations to Programs.", correct:false },{ letter:"B", text:"From Portfolios to Senior Leadership.", correct:true },{ letter:"C", text:"From Senior Leadership to Projects directly.", correct:false },{ letter:"D", text:"From Projects to Operations.", correct:false }] },
    uk: { question: "Що з наведеного описує потік інформації щодо \"Ефективності портфеля\"?",
      options: [{ letter:"A", text:"Від Операційної діяльності до Програм.", correct:false },{ letter:"B", text:"Від Портфелів до Вищого керівництва.", correct:true },{ letter:"C", text:"Від Вищого керівництва безпосередньо до Проєктів.", correct:false },{ letter:"D", text:"Від Проєктів до Операційної діяльності.", correct:false }] }
  },
  {
    id: 18, section_en: "Value Delivery System", section_uk: "Система постачання цінності",
    en: { question: "A project team is working in a highly regulated industry. The team must follow specific legal standards. This is an example of the project operating within:",
      options: [{ letter:"A", text:"Internal environment only.", correct:false },{ letter:"B", text:"External environmental factors.", correct:true },{ letter:"C", text:"Project management processes.", correct:false },{ letter:"D", text:"Organizational process assets.", correct:false }] },
    uk: { question: "Команда проєкту працює в суворо регульованій галузі. Команда повинна дотримуватися певних правових стандартів. Це приклад роботи проєкту в межах:",
      options: [{ letter:"A", text:"Тільки внутрішнього середовища.", correct:false },{ letter:"B", text:"Факторів зовнішнього середовища.", correct:true },{ letter:"C", text:"Процесів управління проєктами.", correct:false },{ letter:"D", text:"Активів процесів організації.", correct:false }] }
  },
  {
    id: 19, section_en: "Value Delivery System", section_uk: "Система постачання цінності",
    en: { question: "In the value delivery model, what is the primary role of \"Operations\"?",
      options: [{ letter:"A", text:"To perform recurring activities that support the ongoing business.", correct:true },{ letter:"B", text:"To create unique, temporary results.", correct:false },{ letter:"C", text:"To define the organizational strategy.", correct:false },{ letter:"D", text:"To manage all project risks.", correct:false }] },
    uk: { question: "У моделі постачання цінності, яка основна роль \"Операційної діяльності\"?",
      options: [{ letter:"A", text:"Виконання повторюваних дій, що підтримують поточний бізнес.", correct:true },{ letter:"B", text:"Створення унікальних тимчасових результатів.", correct:false },{ letter:"C", text:"Визначення стратегії організації.", correct:false },{ letter:"D", text:"Управління всіма ризиками проєкту.", correct:false }] }
  },
  {
    id: 20, section_en: "Value Delivery System", section_uk: "Система постачання цінності",
    en: { question: "How does a system of governance interact with the value delivery system?",
      options: [{ letter:"A", text:"It replaces the need for project managers.", correct:false },{ letter:"B", text:"It provides the framework for decision-making and oversight.", correct:true },{ letter:"C", text:"It focuses only on technical product quality.", correct:false },{ letter:"D", text:"It prevents any changes to the project strategy.", correct:false }] },
    uk: { question: "Як система врядування взаємодіє з системою постачання цінності?",
      options: [{ letter:"A", text:"Вона замінює потребу в керівниках проєктів.", correct:false },{ letter:"B", text:"Вона забезпечує основу для ухвалення рішень та нагляду.", correct:true },{ letter:"C", text:"Вона фокусується лише на технічній якості продукту.", correct:false },{ letter:"D", text:"Вона запобігає будь-яким змінам стратегії проєкту.", correct:false }] }
  },

  // ── SECTION 2: Principles & Ethics ──────────────────────────────────────────
  {
    id: 21, section_en: "Principles & Ethics", section_uk: "Принципи та Цінності",
    en: { question: "A project manager discovers a conflict of interest that could influence their decision-making. According to the principle of \"Stewardship\" and the value of \"Honesty,\" what should they do?",
      options: [{ letter:"A", text:"Proceed with the project but keep the conflict secret to avoid delays.", correct:false },{ letter:"B", text:"Proactively disclose the conflict and seek guidance from governance.", correct:true },{ letter:"C", text:"Delegate the decision to a team member without explaining why.", correct:false },{ letter:"D", text:"Ignore the conflict if it doesn't directly violate any laws.", correct:false }] },
    uk: { question: "Керівник проєкту виявляє конфлікт інтересів, який може вплинути на ухвалення рішень. Відповідно до принципу \"Розпорядництва\" та цінності \"Чесність\", що він має зробити?",
      options: [{ letter:"A", text:"Продовжувати роботу над проєктом, але тримати конфлікт у таємниці, щоб уникнути затримок.", correct:false },{ letter:"B", text:"Проактивно розкрити конфлікт та звернутися за порадою до врядування.", correct:true },{ letter:"C", text:"Делегувати рішення члену команди без пояснення причин.", correct:false },{ letter:"D", text:"Ігнорувати конфлікт, якщо він безпосередньо не порушує жодних законів.", correct:false }] }
  },
  {
    id: 22, section_en: "Principles & Ethics", section_uk: "Принципи та Цінності",
    en: { question: "A team is working on a complex project with several unknown variables. Which principle encourages them to look at the project as a holistic entity with interacting components?",
      options: [{ letter:"A", text:"Stewardship", correct:false },{ letter:"B", text:"Systems Thinking", correct:true },{ letter:"C", text:"Complexity", correct:false },{ letter:"D", text:"Adaptability", correct:false }] },
    uk: { question: "Команда працює над складним проєктом із кількома невідомими змінними. Який принцип заохочує їх розглядати проєкт як цілісну сутність із взаємодіючими компонентами?",
      options: [{ letter:"A", text:"Розпорядництво", correct:false },{ letter:"B", text:"Системне мислення", correct:true },{ letter:"C", text:"Складність", correct:false },{ letter:"D", text:"Адаптивність", correct:false }] }
  },
  {
    id: 23, section_en: "Principles & Ethics", section_uk: "Принципи та Цінності",
    en: { question: "During a resource allocation meeting, a manager ensures that all project opportunities are distributed based on merit and professional need, rather than personal favorites. This applies the ethical value of:",
      options: [{ letter:"A", text:"Responsibility", correct:false },{ letter:"B", text:"Respect", correct:false },{ letter:"C", text:"Fairness", correct:true },{ letter:"D", text:"Honesty", correct:false }] },
    uk: { question: "Під час наради з розподілу ресурсів менеджер забезпечує розподіл проєктних можливостей на основі заслуг та професійних потреб, а не особистих симпатій. Це застосовує етичну цінність:",
      options: [{ letter:"A", text:"Відповідальність", correct:false },{ letter:"B", text:"Повага", correct:false },{ letter:"C", text:"Справедливість", correct:true },{ letter:"D", text:"Чесність", correct:false }] }
  },
  {
    id: 24, section_en: "Principles & Ethics", section_uk: "Принципи та Цінності",
    en: { question: "To be a \"diligent, respectful, and caring steward,\" a project team must:",
      options: [{ letter:"A", text:"Act with integrity, care, and trustworthiness while following guidelines.", correct:true },{ letter:"B", text:"Focus exclusively on the financial returns of the project.", correct:false },{ letter:"C", text:"Minimize communication with stakeholders to speed up tasks.", correct:false },{ letter:"D", text:"Ignore external environmental impacts to protect the project budget.", correct:false }] },
    uk: { question: "Щоб бути \"старанним, шанобливим та турботливим розпорядником\", команда проєкту повинна:",
      options: [{ letter:"A", text:"Діяти порядно, дбайливо та надійно, дотримуючись інструкцій.", correct:true },{ letter:"B", text:"Зосереджуватися виключно на фінансовій віддачі проєкту.", correct:false },{ letter:"C", text:"Мінімізувати комунікацію зі стейкхолдерами для прискорення завдань.", correct:false },{ letter:"D", text:"Ігнорувати зовнішні впливи на середовище для захисту бюджету проєкту.", correct:false }] }
  },
  {
    id: 25, section_en: "Principles & Ethics", section_uk: "Принципи та Цінності",
    en: { question: "Which principle emphasizes that leadership behavior is not limited to the project manager but can be demonstrated by any team member?",
      options: [{ letter:"A", text:"Team", correct:false },{ letter:"B", text:"Leadership", correct:true },{ letter:"C", text:"Stakeholders", correct:false },{ letter:"D", text:"Change", correct:false }] },
    uk: { question: "Який принцип наголошує на тому, що лідерська поведінка не обмежується лише керівником проєкту, а може бути проявлена будь-ким із членів команди?",
      options: [{ letter:"A", text:"Команда", correct:false },{ letter:"B", text:"Лідерство", correct:true },{ letter:"C", text:"Стейкхолдери", correct:false },{ letter:"D", text:"Зміна", correct:false }] }
  },
  {
    id: 26, section_en: "Principles & Ethics", section_uk: "Принципи та Цінності",
    en: { question: "A project manager admits to a reporting error that underestimated the project's costs. This demonstrates the ethical value of:",
      options: [{ letter:"A", text:"Responsibility", correct:true },{ letter:"B", text:"Fairness", correct:false },{ letter:"C", text:"Respect", correct:false },{ letter:"D", text:"Tailoring", correct:false }] },
    uk: { question: "Керівник проєкту визнає помилку у звітності, через яку витрати проєкту були недооцінені. Це демонструє етичну цінність:",
      options: [{ letter:"A", text:"Відповідальність", correct:true },{ letter:"B", text:"Справедливість", correct:false },{ letter:"C", text:"Повага", correct:false },{ letter:"D", text:"Припасування", correct:false }] }
  },
  {
    id: 27, section_en: "Principles & Ethics", section_uk: "Принципи та Цінності",
    en: { question: "The principle \"Focus on Value\" means that the project team should:",
      options: [{ letter:"A", text:"Only worry about completing the project scope on time.", correct:false },{ letter:"B", text:"Continually evaluate alignment with business objectives and benefits.", correct:true },{ letter:"C", text:"Prioritize technical excellence over customer requirements.", correct:false },{ letter:"D", text:"Avoid changing the project plan even if market conditions shift.", correct:false }] },
    uk: { question: "Принцип \"Зосереджуватись на цінності\" означає, що команда проєкту має:",
      options: [{ letter:"A", text:"Турбуватися лише про своєчасне виконання обсягу проєкту.", correct:false },{ letter:"B", text:"Постійно оцінювати відповідність бізнес-цілям та вигодам.", correct:true },{ letter:"C", text:"Віддавати пріоритет технічній досконалості над вимогами замовника.", correct:false },{ letter:"D", text:"Уникати зміни плану проєкту, навіть якщо ринкові умови змінюються.", correct:false }] }
  },
  {
    id: 28, section_en: "Principles & Ethics", section_uk: "Принципи та Цінності",
    en: { question: "When a project team creates a \"collaborative team environment,\" they are:",
      options: [{ letter:"A", text:"Implementing a strict hierarchical reporting structure.", correct:false },{ letter:"B", text:"Using team agreements and structures to support synergy.", correct:true },{ letter:"C", text:"Discouraging individual learning to maintain focus.", correct:false },{ letter:"D", text:"Letting everyone work in isolation to avoid conflicts.", correct:false }] },
    uk: { question: "Коли команда проєкту створює \"середовище для співпраці\", вона:",
      options: [{ letter:"A", text:"Впроваджує сувору ієрархічну структуру звітності.", correct:false },{ letter:"B", text:"Використовує командні угоди та структури для підтримки синергії.", correct:true },{ letter:"C", text:"Перешкоджає індивідуальному навчанню для підтримки фокусу.", correct:false },{ letter:"D", text:"Дозволяє кожному працювати ізольовано для уникнення конфліктів.", correct:false }] }
  },
  {
    id: 29, section_en: "Principles & Ethics", section_uk: "Принципи та Цінності",
    en: { question: "According to the principles, effective stakeholder engagement is vital because stakeholders:",
      options: [{ letter:"A", text:"Are always the ones providing the project resources.", correct:false },{ letter:"B", text:"Influence project performance, outcomes, and success factors.", correct:true },{ letter:"C", text:"Should manage the daily technical work of the project team.", correct:false },{ letter:"D", text:"Must approve every single task in the project schedule.", correct:false }] },
    uk: { question: "Згідно з принципами, ефективне залучення стейкхолдерів є життєво важливим, оскільки стейкхолдери:",
      options: [{ letter:"A", text:"Завжди є тими, хто надає ресурси проєкту.", correct:false },{ letter:"B", text:"Впливають на продуктивність, кінцеві результати та фактори успіху проєкту.", correct:true },{ letter:"C", text:"Мають управляти щоденною технічною роботою команди проєкту.", correct:false },{ letter:"D", text:"Повинні затверджувати кожне окреме завдання в розкладі проєкту.", correct:false }] }
  },
  {
    id: 30, section_en: "Principles & Ethics", section_uk: "Принципи та Цінності",
    en: { question: "A project manager listens to diverse viewpoints before making a decision, ensuring all voices are heard. This reflects the ethical value of:",
      options: [{ letter:"A", text:"Honesty", correct:false },{ letter:"B", text:"Responsibility", correct:false },{ letter:"C", text:"Respect", correct:true },{ letter:"D", text:"Stewardship", correct:false }] },
    uk: { question: "Керівник проєкту вислуховує різні точки зору перед ухваленням рішення, забезпечуючи врахування всіх голосів. Це відображає етичну цінність:",
      options: [{ letter:"A", text:"Чесність", correct:false },{ letter:"B", text:"Відповідальність", correct:false },{ letter:"C", text:"Повага", correct:true },{ letter:"D", text:"Розпорядництво", correct:false }] }
  },
  {
    id: 31, section_en: "Principles & Ethics", section_uk: "Принципи та Цінності",
    en: { question: "The principle of \"Tailoring\" requires the team to adjust the approach based on:",
      options: [{ letter:"A", text:"Only the latest industry trends.", correct:false },{ letter:"B", text:"The unique context, objectives, and environment of the project.", correct:true },{ letter:"C", text:"The Project Manager's personal management style.", correct:false },{ letter:"D", text:"The minimum number of artifacts required by the PMO.", correct:false }] },
    uk: { question: "Принцип \"Припасування\" вимагає від команди коригувати підхід на основі:",
      options: [{ letter:"A", text:"Лише останніх галузевих тенденцій.", correct:false },{ letter:"B", text:"Унікального контексту, цілей та середовища проєкту.", correct:true },{ letter:"C", text:"Особистого стилю управління керівника проєкту.", correct:false },{ letter:"D", text:"Мінімальної кількості артефактів, що вимагаються PMO.", correct:false }] }
  },
  {
    id: 32, section_en: "Principles & Ethics", section_uk: "Принципи та Цінності",
    en: { question: "\"Build quality into processes and outputs\" means quality should be:",
      options: [{ letter:"A", text:"Inspected only at the final delivery stage.", correct:false },{ letter:"B", text:"Integrated throughout the project to meet stakeholder requirements.", correct:true },{ letter:"C", text:"Defined by the team without consulting the customer.", correct:false },{ letter:"D", text:"Sacrificed if the project schedule is at risk.", correct:false }] },
    uk: { question: "\"Вбудовувати якість у процеси та доробки\" означає, що якість має бути:",
      options: [{ letter:"A", text:"Перевірена лише на стадії фінального постачання.", correct:false },{ letter:"B", text:"Інтегрована впродовж усього проєкту для відповідності вимогам стейкхолдерів.", correct:true },{ letter:"C", text:"Визначена командою без консультацій із замовником.", correct:false },{ letter:"D", text:"Принесена в жертву, якщо розклад проєкту під загрозою.", correct:false }] }
  },
  {
    id: 33, section_en: "Principles & Ethics", section_uk: "Принципи та Цінності",
    en: { question: "How should a project team \"Navigate Complexity\"?",
      options: [{ letter:"A", text:"By using knowledge, experience, and learning to address dynamic interactions.", correct:true },{ letter:"B", text:"By simplifying the project scope until all complexity is removed.", correct:false },{ letter:"C", text:"By following a rigid plan that ignores external changes.", correct:false },{ letter:"D", text:"By delegating all complex tasks to external consultants.", correct:false }] },
    uk: { question: "Як команда проєкту має \"Долати складність\"?",
      options: [{ letter:"A", text:"Використовуючи знання, досвід та навчання для реагування на динамічні взаємодії.", correct:true },{ letter:"B", text:"Шляхом спрощення обсягу проєкту до повного усунення складності.", correct:false },{ letter:"C", text:"Дотримуючись жорсткого плану, що ігнорує зовнішні зміни.", correct:false },{ letter:"D", text:"Делегуючи всі складні завдання зовнішнім консультантам.", correct:false }] }
  },
  {
    id: 34, section_en: "Principles & Ethics", section_uk: "Принципи та Цінності",
    en: { question: "To \"Optimize Risk Responses,\" the team must continually:",
      options: [{ letter:"A", text:"Avoid all activities that carry any potential risk.", correct:false },{ letter:"B", text:"Evaluate and respond to both threats and opportunities.", correct:true },{ letter:"C", text:"Focus only on high-impact negative risks.", correct:false },{ letter:"D", text:"Create a risk register once at the start of the project.", correct:false }] },
    uk: { question: "Щоб \"Оптимізовувати реагування на ризики\", команда має постійно:",
      options: [{ letter:"A", text:"Уникати будь-якої діяльності, що несе потенційний ризик.", correct:false },{ letter:"B", text:"Оцінювати та реагувати як на загрози, так і на можливості.", correct:true },{ letter:"C", text:"Зосереджуватися лише на негативних ризиках із високим рівнем впливу.", correct:false },{ letter:"D", text:"Створювати реєстр ризиків один раз на початку проєкту.", correct:false }] }
  },
  {
    id: 35, section_en: "Principles & Ethics", section_uk: "Принципи та Цінності",
    en: { question: "\"Embrace Adaptability and Resilience\" allows the project team to:",
      options: [{ letter:"A", text:"Recover from setbacks and adjust to changing circumstances.", correct:true },{ letter:"B", text:"Prevent any changes to the project's initial scope.", correct:false },{ letter:"C", text:"Minimize the frequency of stakeholder meetings.", correct:false },{ letter:"D", text:"Use only predictive life cycles for all projects.", correct:false }] },
    uk: { question: "\"Обирати адаптивність та стійкість\" дозволяє команді проєкту:",
      options: [{ letter:"A", text:"Відновлюватися після невдач та адаптуватися до мінливих обставин.", correct:true },{ letter:"B", text:"Запобігати будь-яким змінам початкового обсягу проєкту.", correct:false },{ letter:"C", text:"Мінімізувати частоту нарад зі стейкхолдерами.", correct:false },{ letter:"D", text:"Використовувати лише предиктивні життєві цикли для всіх проєктів.", correct:false }] }
  },
  {
    id: 36, section_en: "Principles & Ethics", section_uk: "Принципи та Цінності",
    en: { question: "The principle \"Enable Change to Achieve the Envisioned Future State\" involves:",
      options: [{ letter:"A", text:"Changing the project manager whenever an issue arises.", correct:false },{ letter:"B", text:"Helping individuals and the organization transition to new ways of working.", correct:true },{ letter:"C", text:"Automatically approving all change requests from stakeholders.", correct:false },{ letter:"D", text:"Reducing the focus on long-term project outcomes.", correct:false }] },
    uk: { question: "Принцип \"Уможливлювати зміни для досягнення передбаченого майбутнього стану\" передбачає:",
      options: [{ letter:"A", text:"Зміну керівника проєкту щоразу, коли виникає проблема.", correct:false },{ letter:"B", text:"Допомогу людям та організації в переході до нових методів роботи.", correct:true },{ letter:"C", text:"Автоматичне затвердження всіх запитів на зміни від стейкхолдерів.", correct:false },{ letter:"D", text:"Зменшення уваги до довгострокових результатів проєкту.", correct:false }] }
  },
  {
    id: 37, section_en: "Principles & Ethics", section_uk: "Принципи та Цінності",
    en: { question: "Systems thinking requires project teams to recognize that:",
      options: [{ letter:"A", text:"Every project task is completely independent.", correct:false },{ letter:"B", text:"A project is a system of interdependent and interacting activities.", correct:true },{ letter:"C", text:"Only external factors can cause system failures.", correct:false },{ letter:"D", text:"The project plan is the most important component of the system.", correct:false }] },
    uk: { question: "Системне мислення вимагає від команд проєкту визнати, що:",
      options: [{ letter:"A", text:"Кожне завдання проєкту є абсолютно незалежним.", correct:false },{ letter:"B", text:"Проєкт — це система взаємозалежних та взаємодіючих видів діяльності.", correct:true },{ letter:"C", text:"Лише зовнішні фактори можуть спричинити системні збої.", correct:false },{ letter:"D", text:"План проєкту є найважливішим компонентом системи.", correct:false }] }
  },
  {
    id: 38, section_en: "Principles & Ethics", section_uk: "Принципи та Цінності",
    en: { question: "A project leader who motivates and coaches team members rather than just issuing commands is demonstrating:",
      options: [{ letter:"A", text:"Effective leadership behavior.", correct:true },{ letter:"B", text:"Lack of control over the project.", correct:false },{ letter:"C", text:"Adherence to strict stewardship rules.", correct:false },{ letter:"D", text:"Inability to manage technical tasks.", correct:false }] },
    uk: { question: "Керівник проєкту, який мотивує та навчає членів команди, а не просто віддає накази, демонструє:",
      options: [{ letter:"A", text:"Ефективну лідерську поведінку.", correct:true },{ letter:"B", text:"Брак контролю над проєктом.", correct:false },{ letter:"C", text:"Дотримання суворих правил розпорядництва.", correct:false },{ letter:"D", text:"Нездатність управляти технічними завданнями.", correct:false }] }
  },
  {
    id: 39, section_en: "Principles & Ethics", section_uk: "Принципи та Цінності",
    en: { question: "Respect in project management includes which of the following?",
      options: [{ letter:"A", text:"Prioritizing the needs of the most powerful stakeholders.", correct:false },{ letter:"B", text:"Valuing diverse perspectives and cultural differences.", correct:true },{ letter:"C", text:"Avoiding difficult conversations with team members.", correct:false },{ letter:"D", text:"Following all instructions from senior management without question.", correct:false }] },
    uk: { question: "Повага в управлінні проєктами включає що з наведеного?",
      options: [{ letter:"A", text:"Пріоритезацію потреб найвпливовіших стейкхолдерів.", correct:false },{ letter:"B", text:"Цінування різних точок зору та культурних відмінностей.", correct:true },{ letter:"C", text:"Уникнення складних розмов із членами команди.", correct:false },{ letter:"D", text:"Беззаперечне виконання всіх вказівок вищого керівництва.", correct:false }] }
  },
  {
    id: 40, section_en: "Principles & Ethics", section_uk: "Принципи та Цінності",
    en: { question: "Integrity as a component of Stewardship means:",
      options: [{ letter:"A", text:"Acting honestly and ethically in all interactions.", correct:true },{ letter:"B", text:"Ensuring the project is completed at the lowest cost.", correct:false },{ letter:"C", text:"Protecting the project manager from legal liability.", correct:false },{ letter:"D", text:"Always agreeing with the project sponsor.", correct:false }] },
    uk: { question: "Порядність як компонент розпорядництва означає:",
      options: [{ letter:"A", text:"Чесні та етичні дії в усіх взаємодіях.", correct:true },{ letter:"B", text:"Забезпечення завершення проєкту за найнижчою ціною.", correct:false },{ letter:"C", text:"Захист керівника проєкту від юридичної відповідальності.", correct:false },{ letter:"D", text:"Постійну згоду зі спонсором проєкту.", correct:false }] }
  },

  // ── SECTION 3: Performance Domains ──────────────────────────────────────────
  {
    id: 41, section_en: "Performance Domains", section_uk: "Сфери виконання",
    en: { question: "A project manager is identifying all people and groups that may be affected by the project results. This activity belongs to which performance domain?",
      options: [{ letter:"A", text:"Team", correct:false },{ letter:"B", text:"Stakeholders", correct:true },{ letter:"C", text:"Uncertainty", correct:false },{ letter:"D", text:"Project Work", correct:false }] },
    uk: { question: "Керівник проєкту визначає всіх людей та групи, на яких можуть вплинути результати проєкту. Ця діяльність належить до якої сфери виконання?",
      options: [{ letter:"A", text:"Команда", correct:false },{ letter:"B", text:"Стейкхолдери", correct:true },{ letter:"C", text:"Невизначеність", correct:false },{ letter:"D", text:"Проєктна робота", correct:false }] }
  },
  {
    id: 42, section_en: "Performance Domains", section_uk: "Сфери виконання",
    en: { question: "The \"Team\" performance domain focuses on which of the following?",
      options: [{ letter:"A", text:"Defining the project's technical architecture.", correct:false },{ letter:"B", text:"Fostering a high-performing culture and leadership skills.", correct:true },{ letter:"C", text:"Managing procurement contracts with vendors.", correct:false },{ letter:"D", text:"Tracking the project's financial budget.", correct:false }] },
    uk: { question: "Сфера виконання \"Команда\" фокусується на чому з наведеного?",
      options: [{ letter:"A", text:"Визначенні технічної архітектури проєкту.", correct:false },{ letter:"B", text:"Сприянні культурі високої продуктивності та лідерським навичкам.", correct:true },{ letter:"C", text:"Управлінні контрактами на закупівлю з постачальниками.", correct:false },{ letter:"D", text:"Відстеженні фінансового бюджету проєкту.", correct:false }] }
  },
  {
    id: 43, section_en: "Performance Domains", section_uk: "Сфери виконання",
    en: { question: "Which domain addresses the choice between a predictive, adaptive, or hybrid development approach?",
      options: [{ letter:"A", text:"Development Approach and Life Cycle", correct:true },{ letter:"B", text:"Planning", correct:false },{ letter:"C", text:"Delivery", correct:false },{ letter:"D", text:"Project Work", correct:false }] },
    uk: { question: "Яка сфера розглядає вибір між предиктивним, адаптивним або гібридним підходом до розробки?",
      options: [{ letter:"A", text:"Підхід до розробки та життєвий цикл", correct:true },{ letter:"B", text:"Планування", correct:false },{ letter:"C", text:"Постачання", correct:false },{ letter:"D", text:"Проєктна робота", correct:false }] }
  },
  {
    id: 44, section_en: "Performance Domains", section_uk: "Сфери виконання",
    en: { question: "A project team is constantly updating their work estimates and schedules as more information becomes available. This is a key activity in which domain?",
      options: [{ letter:"A", text:"Measurement", correct:false },{ letter:"B", text:"Planning", correct:true },{ letter:"C", text:"Stakeholders", correct:false },{ letter:"D", text:"Uncertainty", correct:false }] },
    uk: { question: "Команда проєкту постійно оновлює свої оцінки робіт та розклади в міру надходження нової інформації. Це ключова діяльність у якій сфері?",
      options: [{ letter:"A", text:"Вимірювання", correct:false },{ letter:"B", text:"Планування", correct:true },{ letter:"C", text:"Стейкхолдери", correct:false },{ letter:"D", text:"Невизначеність", correct:false }] }
  },
  {
    id: 45, section_en: "Performance Domains", section_uk: "Сфери виконання",
    en: { question: "The \"Project Work\" performance domain is primarily concerned with:",
      options: [{ letter:"A", text:"Finalizing the project scope.", correct:false },{ letter:"B", text:"Managing physical resources and project processes.", correct:true },{ letter:"C", text:"Selecting the team's leadership style.", correct:false },{ letter:"D", text:"Defining the definition of done.", correct:false }] },
    uk: { question: "Сфера виконання \"Проєктна робота\" насамперед стосується:",
      options: [{ letter:"A", text:"Фіналізації обсягу проєкту.", correct:false },{ letter:"B", text:"Управління фізичними ресурсами та процесами проєкту.", correct:true },{ letter:"C", text:"Вибору стилю лідерства команди.", correct:false },{ letter:"D", text:"Визначення критеріїв готовності (DoD).", correct:false }] }
  },
  {
    id: 46, section_en: "Performance Domains", section_uk: "Сфери виконання",
    en: { question: "Which performance domain is focused on delivering the scope and quality that the project was commissioned to provide?",
      options: [{ letter:"A", text:"Project Work", correct:false },{ letter:"B", text:"Delivery", correct:true },{ letter:"C", text:"Measurement", correct:false },{ letter:"D", text:"Team", correct:false }] },
    uk: { question: "Яка сфера виконання зосереджена на наданні обсягу та якості, для забезпечення яких було створено проєкт?",
      options: [{ letter:"A", text:"Проєктна робота", correct:false },{ letter:"B", text:"Постачання", correct:true },{ letter:"C", text:"Вимірювання", correct:false },{ letter:"D", text:"Команда", correct:false }] }
  },
  {
    id: 47, section_en: "Performance Domains", section_uk: "Сфери виконання",
    en: { question: "A project manager uses dashboards to track key performance indicators (KPIs) and determine if the project is meeting its objectives. This belongs to:",
      options: [{ letter:"A", text:"Planning", correct:false },{ letter:"B", text:"Measurement", correct:true },{ letter:"C", text:"Uncertainty", correct:false },{ letter:"D", text:"Delivery", correct:false }] },
    uk: { question: "Керівник проєкту використовує аналітичні панелі для відстеження ключових показників ефективності (KPI) та визначення того, чи відповідає проєкт своїм цілям. Це належить до:",
      options: [{ letter:"A", text:"Планування", correct:false },{ letter:"B", text:"Вимірювання", correct:true },{ letter:"C", text:"Невизначеність", correct:false },{ letter:"D", text:"Постачання", correct:false }] }
  },
  {
    id: 48, section_en: "Performance Domains", section_uk: "Сфери виконання",
    en: { question: "The \"Uncertainty\" performance domain addresses which aspects of a project?",
      options: [{ letter:"A", text:"Risk, ambiguity, and volatility.", correct:true },{ letter:"B", text:"Fixed requirements and budgets.", correct:false },{ letter:"C", text:"Team member recruitment and training.", correct:false },{ letter:"D", text:"Historical data and project archives.", correct:false }] },
    uk: { question: "Сфера виконання \"Невизначеність\" розглядає які аспекти проєкту?",
      options: [{ letter:"A", text:"Ризик, неоднозначність та волатильність.", correct:true },{ letter:"B", text:"Фіксовані вимоги та бюджети.", correct:false },{ letter:"C", text:"Набір та навчання членів команди.", correct:false },{ letter:"D", text:"Історичні дані та архіви проєкту.", correct:false }] }
  },
  {
    id: 49, section_en: "Performance Domains", section_uk: "Сфери виконання",
    en: { question: "When a significant variance is discovered in the \"Measurement\" domain, how does it interact with the \"Planning\" domain?",
      options: [{ letter:"A", text:"It terminates the planning process immediately.", correct:false },{ letter:"B", text:"It triggers a review and potential adjustment of the project plans.", correct:true },{ letter:"C", text:"It requires the team to switch to a predictive approach.", correct:false },{ letter:"D", text:"It has no impact on planning once the baseline is set.", correct:false }] },
    uk: { question: "Коли у сфері \"Вимірювання\" виявляється суттєве відхилення, як це взаємодіє зі сферою \"Планування\"?",
      options: [{ letter:"A", text:"Це негайно припиняє процес планування.", correct:false },{ letter:"B", text:"Це ініціює перегляд та можливе коригування планів проєкту.", correct:true },{ letter:"C", text:"Це вимагає від команди переходу до предиктивного підходу.", correct:false },{ letter:"D", text:"Це не має впливу на планування після встановлення базового плану.", correct:false }] }
  },
  {
    id: 50, section_en: "Performance Domains", section_uk: "Сфери виконання",
    en: { question: "In the \"Stakeholders\" domain, a key outcome is:",
      options: [{ letter:"A", text:"A completed project charter.", correct:false },{ letter:"B", text:"Productive working relationships with stakeholders.", correct:true },{ letter:"C", text:"A signed procurement contract.", correct:false },{ letter:"D", text:"A detailed work breakdown structure.", correct:false }] },
    uk: { question: "У сфері \"Стейкхолдери\" ключовим результатом є:",
      options: [{ letter:"A", text:"Завершений статут проєкту.", correct:false },{ letter:"B", text:"Продуктивні робочі взаємини зі стейкхолдерами.", correct:true },{ letter:"C", text:"Підписаний контракт на закупівлю.", correct:false },{ letter:"D", text:"Детальна ієрархічна структура робіт.", correct:false }] }
  },
  {
    id: 51, section_en: "Performance Domains", section_uk: "Сфери виконання",
    en: { question: "How does the \"Development Approach and Life Cycle\" domain interact with \"Delivery\"?",
      options: [{ letter:"A", text:"It determines the cadence and methods for delivering project results.", correct:true },{ letter:"B", text:"It defines the team's organizational structure.", correct:false },{ letter:"C", text:"It identifies the project's external risks.", correct:false },{ letter:"D", text:"It calculates the project's earned value.", correct:false }] },
    uk: { question: "Як сфера \"Підхід до розробки та життєвий цикл\" взаємодіє з \"Постачанням\"?",
      options: [{ letter:"A", text:"Вона визначає каденцію та методи постачання результатів проєкту.", correct:true },{ letter:"B", text:"Вона визначає організаційну структуру команди.", correct:false },{ letter:"C", text:"Вона ідентифікує зовнішні ризики проєкту.", correct:false },{ letter:"D", text:"Вона розраховує здобуту цінність проєкту.", correct:false }] }
  },
  {
    id: 52, section_en: "Performance Domains", section_uk: "Сфери виконання",
    en: { question: "Continuous learning and improvement throughout the project is a focus of which domain?",
      options: [{ letter:"A", text:"Stakeholders", correct:false },{ letter:"B", text:"Planning", correct:false },{ letter:"C", text:"Project Work", correct:true },{ letter:"D", text:"Delivery", correct:false }] },
    uk: { question: "Безперервне навчання та вдосконалення впродовж усього проєкту є фокусом якої сфери?",
      options: [{ letter:"A", text:"Стейкхолдери", correct:false },{ letter:"B", text:"Планування", correct:false },{ letter:"C", text:"Проєктна робота", correct:true },{ letter:"D", text:"Постачання", correct:false }] }
  },
  {
    id: 53, section_en: "Performance Domains", section_uk: "Сфери виконання",
    en: { question: "Success in the \"Delivery\" domain is ultimately measured by:",
      options: [{ letter:"A", text:"The amount of documentation produced.", correct:false },{ letter:"B", text:"The realization of business value and desired outcomes.", correct:true },{ letter:"C", text:"Sticking to the initial project plan without any changes.", correct:false },{ letter:"D", text:"The total number of hours worked by the team.", correct:false }] },
    uk: { question: "Успіх у сфері \"Постачання\" зрештою вимірюється:",
      options: [{ letter:"A", text:"Кількістю створеної документації.", correct:false },{ letter:"B", text:"Реалізацією бізнес-цінності та бажаних кінцевих результатів.", correct:true },{ letter:"C", text:"Дотриманням початкового плану проєкту без жодних змін.", correct:false },{ letter:"D", text:"Загальною кількістю годин, відпрацьованих командою.", correct:false }] }
  },
  {
    id: 54, section_en: "Performance Domains", section_uk: "Сфери виконання",
    en: { question: "\"Ambiguity\" in a project refers to:",
      options: [{ letter:"A", text:"A state of uncertainty where multiple meanings or outcomes are possible.", correct:true },{ letter:"B", text:"A clear and detailed project schedule.", correct:false },{ letter:"C", text:"A disagreement between two team members.", correct:false },{ letter:"D", text:"A lack of financial resources.", correct:false }] },
    uk: { question: "\"Неоднозначність\" у проєкті стосується:",
      options: [{ letter:"A", text:"Стану невизначеності, коли можливі кілька значень або кінцевих результатів.", correct:true },{ letter:"B", text:"Чіткого та детального розкладу проєкту.", correct:false },{ letter:"C", text:"Розбіжності між двома членами команди.", correct:false },{ letter:"D", text:"Браку фінансових ресурсів.", correct:false }] }
  },
  {
    id: 55, section_en: "Performance Domains", section_uk: "Сфери виконання",
    en: { question: "In the \"Team\" domain, a \"high-performing culture\" is characterized by:",
      options: [{ letter:"A", text:"Individual accountability without team collaboration.", correct:false },{ letter:"B", text:"Shared responsibility and trust among members.", correct:true },{ letter:"C", text:"A focus on completing tasks as quickly as possible.", correct:false },{ letter:"D", text:"Rigid adherence to the project manager's commands.", correct:false }] },
    uk: { question: "У сфері \"Команда\" \"культура високої продуктивності\" характеризується:",
      options: [{ letter:"A", text:"Індивідуальною підзвітністю без співпраці в команді.", correct:false },{ letter:"B", text:"Спільною відповідальністю та довірою між учасниками.", correct:true },{ letter:"C", text:"Фокусом на якнайшвидшому виконанні завдань.", correct:false },{ letter:"D", text:"Жорстким дотриманням наказів керівника проєкту.", correct:false }] }
  },
  {
    id: 56, section_en: "Performance Domains", section_uk: "Сфери виконання",
    en: { question: "Which of the following influences the choice of a development approach?",
      options: [{ letter:"A", text:"Product complexity, innovation levels, and stakeholder needs.", correct:true },{ letter:"B", text:"The size of the project office's physical space.", correct:false },{ letter:"C", text:"The project manager's previous experience in a different industry.", correct:false },{ letter:"D", text:"The number of artifacts used in the planning domain.", correct:false }] },
    uk: { question: "Що з наведеного впливає на вибір підходу до розробки?",
      options: [{ letter:"A", text:"Складність продукту, рівень інновацій та потреби стейкхолдерів.", correct:true },{ letter:"B", text:"Розмір фізичного простору офісу проєкту.", correct:false },{ letter:"C", text:"Попередній досвід керівника проєкту в іншій галузі.", correct:false },{ letter:"D", text:"Кількість артефактів, що використовуються у сфері планування.", correct:false }] }
  },
  {
    id: 57, section_en: "Performance Domains", section_uk: "Сфери виконання",
    en: { question: "The \"Measurement\" domain provides the necessary data for:",
      options: [{ letter:"A", text:"Hiring new team members.", correct:false },{ letter:"B", text:"Evaluating project performance and taking corrective actions.", correct:true },{ letter:"C", text:"Creating the initial project charter.", correct:false },{ letter:"D", text:"Defining the organization's strategic vision.", correct:false }] },
    uk: { question: "Сфера \"Вимірювання\" забезпечує необхідні дані для:",
      options: [{ letter:"A", text:"Наймання нових членів команди.", correct:false },{ letter:"B", text:"Оцінки виконання проєкту та вжиття коригувальних заходів.", correct:true },{ letter:"C", text:"Створення початкового статуту проєкту.", correct:false },{ letter:"D", text:"Визначення стратегічного бачення організації.", correct:false }] }
  },
  {
    id: 58, section_en: "Performance Domains", section_uk: "Сфери виконання",
    en: { question: "\"Volatility\" in the context of the Uncertainty domain means:",
      options: [{ letter:"A", text:"Rapid and unpredictable change in the environment.", correct:true },{ letter:"B", text:"A stable and predictable project schedule.", correct:false },{ letter:"C", text:"A lack of clarity regarding stakeholder requirements.", correct:false },{ letter:"D", text:"The total budget available for the project.", correct:false }] },
    uk: { question: "\"Волатильність\" у контексті сфери \"Невизначеність\" означає:",
      options: [{ letter:"A", text:"Швидкі та непередбачувані зміни в середовищі.", correct:true },{ letter:"B", text:"Стабільний та передбачуваний розклад проєкту.", correct:false },{ letter:"C", text:"Брак ясності щодо вимог стейкхолдерів.", correct:false },{ letter:"D", text:"Загальний бюджет, доступний для проєкту.", correct:false }] }
  },
  {
    id: 59, section_en: "Performance Domains", section_uk: "Сфери виконання",
    en: { question: "A project manager observes that external vendors are consistently late with deliverables. According to the interaction between \"Project Work\" and \"Delivery\" domains, what is the best approach?",
      options: [{ letter:"A", text:"Stop all project work until the vendors deliver.", correct:false },{ letter:"B", text:"Manage the vendor relationship and adjust the delivery schedule.", correct:true },{ letter:"C", text:"Ignore the delays and focus on internal tasks.", correct:false },{ letter:"D", text:"Increase the project budget to pay for faster delivery.", correct:false }] },
    uk: { question: "Керівник проєкту зауважує, що зовнішні постачальники постійно затримують доробки. Згідно з взаємодією між сферами \"Проєктна робота\" та \"Постачання\", який підхід є найкращим?",
      options: [{ letter:"A", text:"Припинити всю роботу над проєктом, поки постачальники не нададуть доробки.", correct:false },{ letter:"B", text:"Керувати взаєминами з постачальником та скоригувати графік постачання.", correct:true },{ letter:"C", text:"Ігнорувати затримки та зосередитися на внутрішніх завданнях.", correct:false },{ letter:"D", text:"Збільшити бюджет проєкту для оплати прискореного постачання.", correct:false }] }
  },
  {
    id: 60, section_en: "Performance Domains", section_uk: "Сфери виконання",
    en: { question: "Which domain is responsible for creating a structure that guides the team throughout the project lifecycle?",
      options: [{ letter:"A", text:"Stakeholders", correct:false },{ letter:"B", text:"Measurement", correct:false },{ letter:"C", text:"Planning", correct:true },{ letter:"D", text:"Uncertainty", correct:false }] },
    uk: { question: "Яка сфера відповідає за створення структури, яка скеровує команду протягом усього життєвого циклу проєкту?",
      options: [{ letter:"A", text:"Стейкхолдери", correct:false },{ letter:"B", text:"Вимірювання", correct:false },{ letter:"C", text:"Планування", correct:true },{ letter:"D", text:"Невизначеність", correct:false }] }
  },

  // ── SECTION 4: Tailoring ─────────────────────────────────────────────────────
  {
    id: 61, section_en: "Tailoring", section_uk: "Припасування",
    en: { question: "A project manager is starting a small internal project with a team that has worked together for years. Why should they still perform \"Tailoring\"?",
      options: [{ letter:"A", text:"To increase the complexity of the project.", correct:false },{ letter:"B", text:"To ensure the processes are efficient and suit the specific project context.", correct:true },{ letter:"C", text:"To follow the PMBOK Guide exactly as written.", correct:false },{ letter:"D", text:"To justify a larger project management budget.", correct:false }] },
    uk: { question: "Керівник проєкту розпочинає невеликий внутрішній проєкт із командою, яка працює разом роками. Чому їм все одно слід виконати \"Припасування\"?",
      options: [{ letter:"A", text:"Щоб збільшити складність проєкту.", correct:false },{ letter:"B", text:"Для забезпечення ефективності процесів та їх відповідності специфічному контексту проєкту.", correct:true },{ letter:"C", text:"Щоб слідувати Настанові PMBOK точно так, як там написано.", correct:false },{ letter:"D", text:"Щоб обґрунтувати більший бюджет на управління проєктом.", correct:false }] }
  },
  {
    id: 62, section_en: "Tailoring", section_uk: "Припасування",
    en: { question: "What components of a project management approach are typically tailored?",
      options: [{ letter:"A", text:"Only the project charter and budget.", correct:false },{ letter:"B", text:"Processes, methods, artifacts, and life cycle phases.", correct:true },{ letter:"C", text:"The organization's core strategic objectives.", correct:false },{ letter:"D", text:"The national laws and regulations of the country.", correct:false }] },
    uk: { question: "Які компоненти підходу до управління проєктом зазвичай підлягають припасуванню?",
      options: [{ letter:"A", text:"Лише статут та бюджет проєкту.", correct:false },{ letter:"B", text:"Процеси, методи, артефакти та фази життєвого циклу.", correct:true },{ letter:"C", text:"Основні стратегічні цілі організації.", correct:false },{ letter:"D", text:"Національні закони та нормативні акти країни.", correct:false }] }
  },
  {
    id: 63, section_en: "Tailoring", section_uk: "Припасування",
    en: { question: "Which factor should be considered when tailoring the \"Development Approach\"?",
      options: [{ letter:"A", text:"Innovation levels, requirements certainty, and risk profile.", correct:true },{ letter:"B", text:"The office layout and the type of furniture used.", correct:false },{ letter:"C", text:"The personal hobbies of the project team members.", correct:false },{ letter:"D", text:"The number of printers available in the organization.", correct:false }] },
    uk: { question: "Який фактор слід враховувати при припасуванні \"Підходу до розробки\"?",
      options: [{ letter:"A", text:"Рівень інновацій, визначеність вимог та профіль ризику.", correct:true },{ letter:"B", text:"Планування офісу та тип меблів, що використовуються.", correct:false },{ letter:"C", text:"Особисті хобі членів команди проєкту.", correct:false },{ letter:"D", text:"Кількість принтерів, наявних в організації.", correct:false }] }
  },
  {
    id: 64, section_en: "Tailoring", section_uk: "Припасування",
    en: { question: "Tailoring should be viewed as:",
      options: [{ letter:"A", text:"A one-time event at the beginning of the project.", correct:false },{ letter:"B", text:"An ongoing, iterative process throughout the project.", correct:true },{ letter:"C", text:"A task that only the Project Management Office (PMO) can perform.", correct:false },{ letter:"D", text:"A way to avoid following organizational policies.", correct:false }] },
    uk: { question: "Припасування слід розглядати як:",
      options: [{ letter:"A", text:"Одноразову подію на початку проєкту.", correct:false },{ letter:"B", text:"Постійний, ітеративний процес упродовж усього проєкту.", correct:true },{ letter:"C", text:"Завдання, яке може виконувати лише офіс управління проєктами (PMO).", correct:false },{ letter:"D", text:"Спосіб уникнути дотримання організаційних політик.", correct:false }] }
  },
  {
    id: 65, section_en: "Tailoring", section_uk: "Припасування",
    en: { question: "What is the first step in the tailoring process?",
      options: [{ letter:"A", text:"Select the initial development approach.", correct:true },{ letter:"B", text:"Implement continuous improvement.", correct:false },{ letter:"C", text:"Tailor for the organization.", correct:false },{ letter:"D", text:"Define the project's strategic goals.", correct:false }] },
    uk: { question: "Який перший крок у процесі припасування?",
      options: [{ letter:"A", text:"Вибір початкового підходу до розробки.", correct:true },{ letter:"B", text:"Впровадження постійного вдосконалення.", correct:false },{ letter:"C", text:"Припасування до організації.", correct:false },{ letter:"D", text:"Визначення стратегічних цілей проєкту.", correct:false }] }
  },
  {
    id: 66, section_en: "Tailoring", section_uk: "Припасування",
    en: { question: "Tailoring \"for the Organization\" involves adjusting the project approach to:",
      options: [{ letter:"A", text:"Change the company's mission statement.", correct:false },{ letter:"B", text:"Align with organizational policies, culture, and governance.", correct:true },{ letter:"C", text:"Hire new executives for the sponsor role.", correct:false },{ letter:"D", text:"Redesign the organization's financial systems.", correct:false }] },
    uk: { question: "Припасування \"до Організації\" передбачає коригування підходу до проєкту для:",
      options: [{ letter:"A", text:"Зміни місії компанії.", correct:false },{ letter:"B", text:"Узгодження з організаційними політиками, культурою та врядуванням.", correct:true },{ letter:"C", text:"Наймання нових керівників на роль спонсора.", correct:false },{ letter:"D", text:"Перепроектування фінансових систем організації.", correct:false }] }
  },
  {
    id: 67, section_en: "Tailoring", section_uk: "Припасування",
    en: { question: "Why do we tailor \"for the Project\"?",
      options: [{ letter:"A", text:"To account for its size, criticality, and unique risks.", correct:true },{ letter:"B", text:"To ensure it costs as much as a previous project.", correct:false },{ letter:"C", text:"To reduce the frequency of team meetings to once per month.", correct:false },{ letter:"D", text:"To avoid using any digital artifacts.", correct:false }] },
    uk: { question: "Навіщо ми припасовуємо \"до Проєкту\"?",
      options: [{ letter:"A", text:"Для врахування його розміру, критичності та унікальних ризиків.", correct:true },{ letter:"B", text:"Щоб забезпечити таку ж вартість, як у попереднього проєкту.", correct:false },{ letter:"C", text:"Щоб зменшити частоту нарад команди до однієї на місяць.", correct:false },{ letter:"D", text:"Щоб уникнути використання будь-яких цифрових артефактів.", correct:false }] }
  },
  {
    id: 68, section_en: "Tailoring", section_uk: "Припасування",
    en: { question: "A key benefit of tailoring is that it helps the team to:",
      options: [{ letter:"A", text:"Increase the amount of project bureaucracy.", correct:false },{ letter:"B", text:"Maximize efficiency and focus on delivering value.", correct:true },{ letter:"C", text:"Follow the same approach for every project.", correct:false },{ letter:"D", text:"Eliminate all project risks entirely.", correct:false }] },
    uk: { question: "Ключовою вигодою припасування є те, що воно допомагає команді:",
      options: [{ letter:"A", text:"Збільшити обсяг проєктної бюрократії.", correct:false },{ letter:"B", text:"Максимізувати ефективність та зосередитися на постачанні цінності.", correct:true },{ letter:"C", text:"Використовувати однаковий підхід для кожного проєкту.", correct:false },{ letter:"D", text:"Повністю усунути всі ризики проєкту.", correct:false }] }
  },
  {
    id: 69, section_en: "Tailoring", section_uk: "Припасування",
    en: { question: "In a situation where the product requirements are highly stable and the project is repetitive, which approach is most likely to be selected?",
      options: [{ letter:"A", text:"Predictive", correct:true },{ letter:"B", text:"Adaptive", correct:false },{ letter:"C", text:"Hybrid", correct:false },{ letter:"D", text:"Volatile", correct:false }] },
    uk: { question: "У ситуації, коли вимоги до продукту є дуже стабільними, а проєкт — повторюваним, який підхід найімовірніше буде обрано?",
      options: [{ letter:"A", text:"Предиктивний", correct:true },{ letter:"B", text:"Адаптивний", correct:false },{ letter:"C", text:"Гібридний", correct:false },{ letter:"D", text:"Волатильний", correct:false }] }
  },
  {
    id: 70, section_en: "Tailoring", section_uk: "Припасування",
    en: { question: "\"Continuous improvement\" in tailoring is best described as:",
      options: [{ letter:"A", text:"Changing the project scope every week.", correct:false },{ letter:"B", text:"Regularly reviewing the tailored approach and making necessary adjustments.", correct:true },{ letter:"C", text:"Adding more processes whenever the project is behind schedule.", correct:false },{ letter:"D", text:"Following the initial plan without any deviations.", correct:false }] },
    uk: { question: "\"Постійне вдосконалення\" при припасуванні найкраще описати як:",
      options: [{ letter:"A", text:"Зміну обсягу проєкту щотижня.", correct:false },{ letter:"B", text:"Регулярний перегляд припасованого підходу та внесення необхідних коректив.", correct:true },{ letter:"C", text:"Додавання нових процесів щоразу, коли проєкт відстає від графіка.", correct:false },{ letter:"D", text:"Дотримання початкового плану без жодних відхилень.", correct:false }] }
  },
  {
    id: 71, section_en: "Tailoring", section_uk: "Припасування",
    en: { question: "Which organizational factor is a key consideration during tailoring?",
      options: [{ letter:"A", text:"The weather conditions at the project site.", correct:false },{ letter:"B", text:"Governance, audit, and compliance requirements.", correct:true },{ letter:"C", text:"The personal preferences of the project team's family members.", correct:false },{ letter:"D", text:"The international time zones of unrelated projects.", correct:false }] },
    uk: { question: "Який організаційний фактор є ключовим міркуванням під час припасування?",
      options: [{ letter:"A", text:"Погодні умови на місці реалізації проєкту.", correct:false },{ letter:"B", text:"Вимоги до врядування, аудиту та комерційної відповідності.", correct:true },{ letter:"C", text:"Особисті вподобання членів сімей команди проєкту.", correct:false },{ letter:"D", text:"Міжнародні часові пояси непов'язаних проєктів.", correct:false }] }
  },
  {
    id: 72, section_en: "Tailoring", section_uk: "Припасування",
    en: { question: "Why is there no \"single best approach\" for every project?",
      options: [{ letter:"A", text:"Because the PMBOK Guide is only a set of suggestions.", correct:false },{ letter:"B", text:"Because every project has a unique context and environment.", correct:true },{ letter:"C", text:"Because project managers prefer to change things constantly.", correct:false },{ letter:"D", text:"Because it is required by international project management law.", correct:false }] },
    uk: { question: "Чому не існує \"єдиного найкращого підходу\" для кожного проєкту?",
      options: [{ letter:"A", text:"Тому що Настанова PMBOK — це лише набір пропозицій.", correct:false },{ letter:"B", text:"Тому що кожен проєкт має унікальний контекст та середовище.", correct:true },{ letter:"C", text:"Тому що керівники проєктів воліють постійно все змінювати.", correct:false },{ letter:"D", text:"Тому що це вимагається міжнародним правом з управління проєктами.", correct:false }] }
  },
  {
    id: 73, section_en: "Tailoring", section_uk: "Припасування",
    en: { question: "Tailoring \"Processes\" might involve:",
      options: [{ letter:"A", text:"Adding, modifying, or removing steps based on project needs.", correct:true },{ letter:"B", text:"Ignoring all safety and legal regulations to save time.", correct:false },{ letter:"C", text:"Using as many complex processes as possible.", correct:false },{ letter:"D", text:"Standardizing all processes across the entire industry.", correct:false }] },
    uk: { question: "Припасування \"Процесів\" може передбачати:",
      options: [{ letter:"A", text:"Додавання, зміну або видалення кроків на основі потреб проєкту.", correct:true },{ letter:"B", text:"Ігнорування всіх правил безпеки та законів для економії часу.", correct:false },{ letter:"C", text:"Використання якомога більшої кількості складних процесів.", correct:false },{ letter:"D", text:"Стандартизацію всіх процесів у межах усієї галузі.", correct:false }] }
  },
  {
    id: 74, section_en: "Tailoring", section_uk: "Припасування",
    en: { question: "When tailoring \"Artifacts,\" the project manager must decide:",
      options: [{ letter:"A", text:"Which font and color scheme to use for the logo.", correct:false },{ letter:"B", text:"Which documents, logs, and reports are essential for value delivery.", correct:true },{ letter:"C", text:"How to store the team's personal equipment.", correct:false },{ letter:"D", text:"Who will be responsible for signing the team's vacation requests.", correct:false }] },
    uk: { question: "При припасуванні \"Артефактів\" керівник проєкту має вирішити:",
      options: [{ letter:"A", text:"Який шрифт та кольорову гаму використовувати для логотипу.", correct:false },{ letter:"B", text:"Які документи, журнали та звіти є суттєвими для постачання цінності.", correct:true },{ letter:"C", text:"Як зберігати особисте обладнання команди.", correct:false },{ letter:"D", text:"Хто відповідатиме за підписання заяв на відпустку команди.", correct:false }] }
  },
  {
    id: 75, section_en: "Tailoring", section_uk: "Припасування",
    en: { question: "An adaptive approach is most appropriate when:",
      options: [{ letter:"A", text:"Requirements are likely to change and innovation is high.", correct:true },{ letter:"B", text:"The project has a fixed budget and a very simple scope.", correct:false },{ letter:"C", text:"There is no uncertainty regarding the final outcome.", correct:false },{ letter:"D", text:"The project must be completed using a strict waterfall method.", correct:false }] },
    uk: { question: "Адаптивний підхід найбільш доречний, коли:",
      options: [{ letter:"A", text:"Вимоги, ймовірно, зміняться, а рівень інновацій високий.", correct:true },{ letter:"B", text:"Проєкт має фіксований бюджет та дуже простий обсяг.", correct:false },{ letter:"C", text:"Немає жодної невизначеності щодо кінцевого результату.", correct:false },{ letter:"D", text:"Проєкт має бути завершений з використанням суворого каскадного методу.", correct:false }] }
  },
  {
    id: 76, section_en: "Tailoring", section_uk: "Припасування",
    en: { question: "Who is primarily responsible for tailoring the project management approach?",
      options: [{ letter:"A", text:"The project manager and the project team.", correct:true },{ letter:"B", text:"Only the external auditor of the organization.", correct:false },{ letter:"C", text:"The customers and end users of the product.", correct:false },{ letter:"D", text:"The government's regulatory body.", correct:false }] },
    uk: { question: "Хто несе основну відповідальність за припасування підходу до управління проєктом?",
      options: [{ letter:"A", text:"Керівник проєкту та команда проєкту.", correct:true },{ letter:"B", text:"Лише зовнішній аудитор організації.", correct:false },{ letter:"C", text:"Замовники та кінцеві користувачі продукту.", correct:false },{ letter:"D", text:"Державній контролюючий орган.", correct:false }] }
  },
  {
    id: 77, section_en: "Tailoring", section_uk: "Припасування",
    en: { question: "Tailoring helps the team to avoid \"wasted effort.\" This means:",
      options: [{ letter:"A", text:"Avoiding all work during the project.", correct:false },{ letter:"B", text:"Eliminating unnecessary steps and bureaucracy.", correct:true },{ letter:"C", text:"Stopping all communication with stakeholders.", correct:false },{ letter:"D", text:"Using the cheapest available tools and resources.", correct:false }] },
    uk: { question: "Припасування допомагає команді уникнути \"даремних зусиль\". Це означає:",
      options: [{ letter:"A", text:"Уникнення будь-якої роботи під час проєкту.", correct:false },{ letter:"B", text:"Усунення непотрібних кроків та бюрократії.", correct:true },{ letter:"C", text:"Припинення будь-якої комунікації зі стейкхолдерами.", correct:false },{ letter:"D", text:"Використання найдешевших доступних інструментів та ресурсів.", correct:false }] }
  },
  {
    id: 78, section_en: "Tailoring", section_uk: "Припасування",
    en: { question: "Which of the following is a \"Project-Specific\" factor for tailoring?",
      options: [{ letter:"A", text:"The organization's global financial policy.", correct:false },{ letter:"B", text:"Complexity, size, and criticality of the project.", correct:true },{ letter:"C", text:"The general trends in the global market.", correct:false },{ letter:"D", text:"The company's internal mailing software.", correct:false }] },
    uk: { question: "Що з наведеного є \"Специфічним фактором проєкту\" для припасування?",
      options: [{ letter:"A", text:"Глобальна фінансова політика організації.", correct:false },{ letter:"B", text:"Складність, розмір та критичність проєкту.", correct:true },{ letter:"C", text:"Загальні тенденції на глобальному ринку.", correct:false },{ letter:"D", text:"Внутрішнє програмне забезпечення компанії для електронної пошти.", correct:false }] }
  },
  {
    id: 79, section_en: "Tailoring", section_uk: "Припасування",
    en: { question: "Effective tailoring should always focus on:",
      options: [{ letter:"A", text:"Achieving desired outcomes and value delivery.", correct:true },{ letter:"B", text:"Following the PMO's manual without any changes.", correct:false },{ letter:"C", text:"Creating as many artifacts as the team can produce.", correct:false },{ letter:"D", text:"Keeping the project manager in control of all tasks.", correct:false }] },
    uk: { question: "Ефективне припасування завжди має бути зосереджене на:",
      options: [{ letter:"A", text:"Досягненні бажаних кінцевих результатів та постачанні цінності.", correct:true },{ letter:"B", text:"Дотриманні посібника PMO без жодних змін.", correct:false },{ letter:"C", text:"Створенні якомога більшої кількості артефактів, яку тільки може створити команда.", correct:false },{ letter:"D", text:"Збереженні контролю керівника проєкту над усіма завданнями.", correct:false }] }
  },
  {
    id: 80, section_en: "Tailoring", section_uk: "Припасування",
    en: { question: "Diagnostic tools in the tailoring process are used to:",
      options: [{ letter:"A", text:"Repair project equipment.", correct:false },{ letter:"B", text:"Identify where adjustments to the approach are needed.", correct:true },{ letter:"C", text:"Calculate the team members' taxes and salaries.", correct:false },{ letter:"D", text:"Monitor the external competition's progress.", correct:false }] },
    uk: { question: "Діагностичні інструменти в процесі припасування використовуються для того, щоб:",
      options: [{ letter:"A", text:"Ремонтувати обладнання проєкту.", correct:false },{ letter:"B", text:"Визначити, де необхідні коригування підходу.", correct:true },{ letter:"C", text:"Розрахувати податки та зарплати членів команди.", correct:false },{ letter:"D", text:"Моніторити прогрес зовнішніх конкурентів.", correct:false }] }
  },

  // ── SECTION 5: Models, Methods & Artifacts ───────────────────────────────────
  {
    id: 81, section_en: "Models, Methods & Artifacts", section_uk: "Моделі, Методи та Артефакти",
    en: { question: "What is the best description of a \"Model\" in project management?",
      options: [{ letter:"A", text:"A small-scale physical version of the product.", correct:false },{ letter:"B", text:"A simplified representation of a complex reality used to explain a process.", correct:true },{ letter:"C", text:"A set of rules that must be followed without deviation.", correct:false },{ letter:"D", text:"A specific software tool used for task management.", correct:false }] },
    uk: { question: "Яке найкраще описання \"Моделі\" в управлінні проєктами?",
      options: [{ letter:"A", text:"Маломасштабна фізична версія продукту.", correct:false },{ letter:"B", text:"Спрощене представлення складної реальності, що використовується для пояснення процесу.", correct:true },{ letter:"C", text:"Набір правил, яких потрібно дотримуватися без відхилень.", correct:false },{ letter:"D", text:"Конкретний програмний інструмент, що використовується для управління завданнями.", correct:false }] }
  },
  {
    id: 82, section_en: "Models, Methods & Artifacts", section_uk: "Моделі, Методи та Артефакти",
    en: { question: "A project manager uses a \"situational leadership\" model. This means they:",
      options: [{ letter:"A", text:"Use the same leadership style for every team member.", correct:false },{ letter:"B", text:"Adapt their leadership style based on the team's maturity and context.", correct:true },{ letter:"C", text:"Let the team make all decisions without any guidance.", correct:false },{ letter:"D", text:"Follow a strict command-and-control approach.", correct:false }] },
    uk: { question: "Керівник проєкту використовує модель \"ситуативного лідерства\". Це означає, що він:",
      options: [{ letter:"A", text:"Використовує однаковий стиль лідерства для кожного члена команди.", correct:false },{ letter:"B", text:"Адаптує свій стиль лідерства залежно від зрілості команди та контексту.", correct:true },{ letter:"C", text:"Дозволяє команді ухвалювати всі рішення без жодних вказівок.", correct:false },{ letter:"D", text:"Дотримується суворого підходу командування та контролю.", correct:false }] }
  },
  {
    id: 83, section_en: "Models, Methods & Artifacts", section_uk: "Моделі, Методи та Артефакти",
    en: { question: "Motivation models are applied by a project manager to:",
      options: [{ letter:"A", text:"Understand and influence team performance and engagement.", correct:true },{ letter:"B", text:"Calculate the exact financial bonuses for team members.", correct:false },{ letter:"C", text:"Force people to work more hours for less money.", correct:false },{ letter:"D", text:"Replace the need for regular team meetings.", correct:false }] },
    uk: { question: "Моделі мотивації застосовуються керівником проєкту для:",
      options: [{ letter:"A", text:"Розуміння та впливу на продуктивність та залученість команди.", correct:true },{ letter:"B", text:"Розрахунку точних фінансових бонусів для членів команди.", correct:false },{ letter:"C", text:"Примушення людей працювати більше годин за менші гроші.", correct:false },{ letter:"D", text:"Заміни потреби в регулярних нарадах команди.", correct:false }] }
  },
  {
    id: 84, section_en: "Models, Methods & Artifacts", section_uk: "Моделі, Методи та Артефакти",
    en: { question: "In project management terminology, what is a \"Method\"?",
      options: [{ letter:"A", text:"A document used to record project risks.", correct:false },{ letter:"B", text:"A means or way of achieving a specific outcome or result.", correct:true },{ letter:"C", text:"A person responsible for managing the project team.", correct:false },{ letter:"D", text:"A type of organization that manages multiple portfolios.", correct:false }] },
    uk: { question: "У термінології управління проєктами, що таке \"Метод\"?",
      options: [{ letter:"A", text:"Документ, що використовується для запису ризиків проєкту.", correct:false },{ letter:"B", text:"Засіб або спосіб досягнення конкретного кінцевого результату або результату.", correct:true },{ letter:"C", text:"Особа, відповідальна за управління командою проєкту.", correct:false },{ letter:"D", text:"Тип організації, що управляє кількома портфелями.", correct:false }] }
  },
  {
    id: 85, section_en: "Models, Methods & Artifacts", section_uk: "Моделі, Методи та Артефакти",
    en: { question: "During a monthly review, the performance data shows that actual costs are much higher than the planned value for the work performed. Which method provides this insight?",
      options: [{ letter:"A", text:"Conflict resolution analysis.", correct:false },{ letter:"B", text:"Earned Value Management (EVM).", correct:true },{ letter:"C", text:"Qualitative risk assessment.", correct:false },{ letter:"D", text:"Parametric estimating.", correct:false }] },
    uk: { question: "Під час щомісячного огляду дані про виконання показують, що фактичні витрати значно вищі за заплановану вартість виконаних робіт. Який метод дає це розуміння?",
      options: [{ letter:"A", text:"Аналіз вирішення конфліктів.", correct:false },{ letter:"B", text:"Аналіз здобутої цінності (EVM).", correct:true },{ letter:"C", text:"Якісна оцінка ризиків.", correct:false },{ letter:"D", text:"Параметричне оцінювання.", correct:false }] }
  },
  {
    id: 86, section_en: "Models, Methods & Artifacts", section_uk: "Моделі, Методи та Артефакти",
    en: { question: "What is an \"Artifact\" in the context of project management?",
      options: [{ letter:"A", text:"A piece of ancient equipment found at a project site.", correct:false },{ letter:"B", text:"A template, document, or output of project work.", correct:true },{ letter:"C", text:"A specific leadership behavior demonstrated by the team.", correct:false },{ letter:"D", text:"A software bug identified during the testing phase.", correct:false }] },
    uk: { question: "Що таке \"Артефакт\" у контексті управління проєктами?",
      options: [{ letter:"A", text:"Частина стародавнього обладнання, знайдена на місці реалізації проєкту.", correct:false },{ letter:"B", text:"Шаблон, документ або доробок проєктної роботи.", correct:true },{ letter:"C", text:"Певна лідерська поведінка, проявлена командою.", correct:false },{ letter:"D", text:"Помилка програмного забезпечення, виявлена на етапі тестування.", correct:false }] }
  },
  {
    id: 87, section_en: "Models, Methods & Artifacts", section_uk: "Моделі, Методи та Артефакти",
    en: { question: "A project manager needs to visualize the decomposition of the total project scope into smaller work packages. Which artifact is best for this?",
      options: [{ letter:"A", text:"Work Breakdown Structure (WBS).", correct:true },{ letter:"B", text:"Risk Register.", correct:false },{ letter:"C", text:"Project Charter.", correct:false },{ letter:"D", text:"Milestone List.", correct:false }] },
    uk: { question: "Керівнику проєкту потрібно візуалізувати декомпозицію загального обсягу проєкту на менші пакети робіт. Який артефакт найкраще для цього підходить?",
      options: [{ letter:"A", text:"Ієрархічна структура робіт (WBS).", correct:true },{ letter:"B", text:"Реєстр ризиків.", correct:false },{ letter:"C", text:"Статут проєкту.", correct:false },{ letter:"D", text:"Список контрольних подій.", correct:false }] }
  },
  {
    id: 88, section_en: "Models, Methods & Artifacts", section_uk: "Моделі, Методи та Артефакти",
    en: { question: "\"Logs\" and \"Registers\" are artifacts used to:",
      options: [{ letter:"A", text:"Calculate the total financial return of the project.", correct:false },{ letter:"B", text:"Record, track, and monitor specific project information.", correct:true },{ letter:"C", text:"Store the company's long-term historical archives.", correct:false },{ letter:"D", text:"Pay the salaries of the project team members.", correct:false }] },
    uk: { question: "\"Журнали\" та \"Реєстри\" — це артефакти, що використовуються для:",
      options: [{ letter:"A", text:"Розрахунку загальної фінансової віддачі проєкту.", correct:false },{ letter:"B", text:"Запису, відстеження та моніторингу специфічної проєктної інформації.", correct:true },{ letter:"C", text:"Зберігання довгострокових історичних архівів компанії.", correct:false },{ letter:"D", text:"Оплати зарплат членам команди проєкту.", correct:false }] }
  },
  {
    id: 89, section_en: "Models, Methods & Artifacts", section_uk: "Моделі, Методи та Артефакти",
    en: { question: "A \"Project Charter\" is classified as which type of artifact?",
      options: [{ letter:"A", text:"Strategy artifact", correct:true },{ letter:"B", text:"Financial artifact", correct:false },{ letter:"C", text:"Technical artifact", correct:false },{ letter:"D", text:"Agreement artifact", correct:false }] },
    uk: { question: "\"Статут проєкту\" класифікується як який тип артефактів?",
      options: [{ letter:"A", text:"Артефакт стратегії", correct:true },{ letter:"B", text:"Фінансовий артефакт", correct:false },{ letter:"C", text:"Технічний артефакт", correct:false },{ letter:"D", text:"Артефакт угоди", correct:false }] }
  },
  {
    id: 90, section_en: "Models, Methods & Artifacts", section_uk: "Моделі, Методи та Артефакти",
    en: { question: "What is the primary purpose of communication models in a project?",
      options: [{ letter:"A", text:"To track the personal messages of team members.", correct:false },{ letter:"B", text:"To ensure efficient and effective information exchange.", correct:true },{ letter:"C", text:"To formalize the project communication plan.", correct:false },{ letter:"D", text:"To minimize the amount of time spent on stakeholder engagement.", correct:false }] },
    uk: { question: "Яка основна мета моделей комунікації в проєкті?",
      options: [{ letter:"A", text:"Відстеження особистих повідомлень членів команди.", correct:false },{ letter:"B", text:"Забезпечення ефективного та результативного обміну інформацією.", correct:true },{ letter:"C", text:"Формалізація плану комунікацій проєкту.", correct:false },{ letter:"D", text:"Мінімізація часу, витраченого на залучення стейкхолдерів.", correct:false }] }
  },
  {
    id: 91, section_en: "Models, Methods & Artifacts", section_uk: "Моделі, Методи та Артефакти",
    en: { question: "Which method is used to calculate the probable duration or effort needed for a task?",
      options: [{ letter:"A", text:"Root cause analysis.", correct:false },{ letter:"B", text:"Estimating (e.g., analogous, parametric, or three-point).", correct:true },{ letter:"C", text:"Project close-out meeting.", correct:false },{ letter:"D", text:"Stakeholder mapping.", correct:false }] },
    uk: { question: "Який метод використовується для розрахунку ймовірної тривалості або зусиль, необхідних для завдання?",
      options: [{ letter:"A", text:"Аналіз першопричин.", correct:false },{ letter:"B", text:"Оцінювання (наприклад, за аналогами, параметричне або за трьома точками).", correct:true },{ letter:"C", text:"Нарада з закриття проєкту.", correct:false },{ letter:"D", text:"Картування стейкхолдерів.", correct:false }] }
  },
  {
    id: 92, section_en: "Models, Methods & Artifacts", section_uk: "Моделі, Методи та Артефакти",
    en: { question: "\"Baselines\" for scope, schedule, and cost are artifacts used to:",
      options: [{ letter:"A", text:"Start a project without any initial planning.", correct:false },{ letter:"B", text:"Provide a reference against which actual performance is compared.", correct:true },{ letter:"C", text:"Calculate the project manager's annual bonus.", correct:false },{ letter:"D", text:"Replace the need for regular project status reports.", correct:false }] },
    uk: { question: "\"Базові плани\" для обсягу, розкладу та вартості — це артефакти, що використовуються для:",
      options: [{ letter:"A", text:"Початку проєкту без будь-якого попереднього планування.", correct:false },{ letter:"B", text:"Надання основи, з якою порівнюється фактичне виконання.", correct:true },{ letter:"C", text:"Розрахунку щорічного бонусу керівника проєкту.", correct:false },{ letter:"D", text:"Заміни потреби в регулярних звітах про стан проєкту.", correct:false }] }
  },
  {
    id: 93, section_en: "Models, Methods & Artifacts", section_uk: "Моделі, Методи та Артефакти",
    en: { question: "Conflict models help project teams to:",
      options: [{ letter:"A", text:"Identify, analyze, and resolve disagreements effectively.", correct:true },{ letter:"B", text:"Encourage more competition between team members.", correct:false },{ letter:"C", text:"Avoid all types of conflict at any cost.", correct:false },{ letter:"D", text:"Automate the decision-making process for the team.", correct:false }] },
    uk: { question: "Моделі конфліктів допомагають командам проєкту:",
      options: [{ letter:"A", text:"Виявляти, аналізувати та ефективно вирішувати розбіжності.", correct:true },{ letter:"B", text:"Заохочувати більшу конкуренцію між членами команди.", correct:false },{ letter:"C", text:"Уникати будь-яких видів конфліктів за будь-яку ціну.", correct:false },{ letter:"D", text:"Автоматизувати процес ухвалення рішень для команди.", correct:false }] }
  },
  {
    id: 94, section_en: "Models, Methods & Artifacts", section_uk: "Моделі, Методи та Артефакти",
    en: { question: "What is a \"Project Management Plan\"?",
      options: [{ letter:"A", text:"A single document listing only the project tasks.", correct:false },{ letter:"B", text:"A comprehensive artifact describing how the project will be managed.", correct:true },{ letter:"C", text:"A list of contact information for all stakeholders.", correct:false },{ letter:"D", text:"A financial budget approved by the organizational board.", correct:false }] },
    uk: { question: "Що таке \"План управління проєктом\"?",
      options: [{ letter:"A", text:"Єдиний документ, що містить лише завдання проєкту.", correct:false },{ letter:"B", text:"Комплексний артефакт, що описує, як буде здійснюватися управління проєктом.", correct:true },{ letter:"C", text:"Список контактної інформації всіх стейкхолдерів.", correct:false },{ letter:"D", text:"Фінансовий бюджет, затверджений правлінням організації.", correct:false }] }
  },
  {
    id: 95, section_en: "Models, Methods & Artifacts", section_uk: "Моделі, Методи та Артефакти",
    en: { question: "\"Visual Data and Information\" artifacts include which of the following?",
      options: [{ letter:"A", text:"A voice recording of a project meeting.", correct:false },{ letter:"B", text:"Dashboards, heat maps, and burn charts.", correct:true },{ letter:"C", text:"A printed legal contract with external vendors.", correct:false },{ letter:"D", text:"A project manager's personal notebook.", correct:false }] },
    uk: { question: "До артефактів \"Візуальних даних та інформації\" належить що з наведеного?",
      options: [{ letter:"A", text:"Голосовий запис наради проєкту.", correct:false },{ letter:"B", text:"Аналітичні панелі, теплові карти та діаграми згоряння.", correct:true },{ letter:"C", text:"Друкований юридичний контракт із зовнішніми постачальниками.", correct:false },{ letter:"D", text:"Особистий записник керівника проєкту.", correct:false }] }
  },
  {
    id: 96, section_en: "Models, Methods & Artifacts", section_uk: "Моделі, Методи та Артефакти",
    en: { question: "Change models in project management focus on:",
      options: [{ letter:"A", text:"Changing the project budget whenever costs increase.", correct:false },{ letter:"B", text:"Helping individuals and organizations transition to a future state.", correct:true },{ letter:"C", text:"Avoiding any adjustments to the project's original plan.", correct:false },{ letter:"D", text:"Replacing the project team members who resist changes.", correct:false }] },
    uk: { question: "Моделі змін в управлінні проєктами фокусуються на:",
      options: [{ letter:"A", text:"Зміні бюджету проєкту щоразу, коли витрати зростають.", correct:false },{ letter:"B", text:"Допомозі людям та організаціям у переході до майбутнього стану.", correct:true },{ letter:"C", text:"Уникненні будь-яких коригувань початкового плану проєкту.", correct:false },{ letter:"D", text:"Заміні членів команди проєкту, які опираються змінам.", correct:false }] }
  },
  {
    id: 97, section_en: "Models, Methods & Artifacts", section_uk: "Моделі, Методи та Артефакти",
    en: { question: "What is the role of \"Meetings and Events\" as methods?",
      options: [{ letter:"A", text:"To facilitate collaboration, decision-making, and alignment.", correct:true },{ letter:"B", text:"To demonstrate administrative compliance.", correct:false },{ letter:"C", text:"To replace the need for written project reports.", correct:false },{ letter:"D", text:"To manage project risks automatically using software.", correct:false }] },
    uk: { question: "Яка роль \"Нарад та подій\" як методів?",
      options: [{ letter:"A", text:"Сприяння співпраці, ухваленню рішень та узгодженню.", correct:true },{ letter:"B", text:"Для демонстрації адміністративної відповідності.", correct:false },{ letter:"C", text:"Для заміни потреби в письмових звітах по проєкту.", correct:false },{ letter:"D", text:"Для автоматичного управління ризиками проєкту за допомогою ПЗ.", correct:false }] }
  },
  {
    id: 98, section_en: "Models, Methods & Artifacts", section_uk: "Моделі, Методи та Артефакти",
    en: { question: "An \"Issue Log\" is an artifact used to:",
      options: [{ letter:"A", text:"Track the team members' office attendance.", correct:false },{ letter:"B", text:"Document and track obstacles to project success.", correct:true },{ letter:"C", text:"Record the company's long-term business strategy.", correct:false },{ letter:"D", text:"Calculate the project's return on investment (ROI).", correct:false }] },
    uk: { question: "\"Журнал проблем\" — це артефакт, що використовується для:",
      options: [{ letter:"A", text:"Відстеження присутності членів команди в офісі.", correct:false },{ letter:"B", text:"Документування та відстеження перешкод на шляху до успіху проєкту.", correct:true },{ letter:"C", text:"Запису довгострокової бізнес-стратегії компанії.", correct:false },{ letter:"D", text:"Розрахунку рентабельності інвестицій (ROI) проєкту.", correct:false }] }
  },
  {
    id: 99, section_en: "Models, Methods & Artifacts", section_uk: "Моделі, Методи та Артефакти",
    en: { question: "In an adaptive project, which artifact defines the criteria for a deliverable to be considered complete?",
      options: [{ letter:"A", text:"Project Scope Statement", correct:false },{ letter:"B", text:"Definition of Done (DoD)", correct:true },{ letter:"C", text:"Team Organizational Chart", correct:false },{ letter:"D", text:"Procurement Management Plan", correct:false }] },
    uk: { question: "В адаптивному проєкті, який артефакт визначає критерії, за якими доробок вважається завершеним?",
      options: [{ letter:"A", text:"Опис обсягу проєкту", correct:false },{ letter:"B", text:"Визначення готовності (DoD)", correct:true },{ letter:"C", text:"Організаційна структура команди", correct:false },{ letter:"D", text:"План управління закупівлями", correct:false }] }
  },
  {
    id: 100, section_en: "Models, Methods & Artifacts", section_uk: "Моделі, Методи та Артефакти",
    en: { question: "Why must models, methods, and artifacts be tailored for each project?",
      options: [{ letter:"A", text:"To maintain organizational compliance regardless of cost.", correct:false },{ letter:"B", text:"To provide the most value for the specific project context.", correct:true },{ letter:"C", text:"To use every available tool in the project management software.", correct:false },{ letter:"D", text:"To fulfill a legal requirement from the government.", correct:false }] },
    uk: { question: "Чому моделі, методи та артефакти мають бути припасовані для кожного проєкту?",
      options: [{ letter:"A", text:"Для підтримання організаційної відповідності незалежно від витрат.", correct:false },{ letter:"B", text:"Для забезпечення найбільшої цінності для конкретного контексту проєкту.", correct:true },{ letter:"C", text:"Щоб використовувати кожен доступний інструмент у ПЗ для управління проєктами.", correct:false },{ letter:"D", text:"Щоб виконати юридичну вимогу уряду.", correct:false }] }
  }
]
