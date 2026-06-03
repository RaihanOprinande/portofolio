const PROJECTS = {
  silog: {
    title: "Project Details",
    articleTitle: "SILOG POLRI — National Police Logistics System",
    category: "Fullstack Software Developer",
    date: "Jan 2026 – Present",
    client: "PT IlmuKomputerCom Braindevs Sistema",
    tech: "Laravel · Vue.js · PostgreSQL · GeoJSON · GitLab CI/CD",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    emoji: "",
    image: "assets/Logo_Final_SILOG.png",
    prev: { id: "wellnet", title: "WELL-NET Digital Wellbeing" },
    next: { id: "kopdes", title: "KOPDES Construction Monitor" },
    content: `
      <h2>SILOG POLRI — National Police Logistics System</h2>
      <p>SILOG POLRI is a production-grade logistics information system built for a national government institution, managing administrative and geospatial data across hundreds of police jurisdictions (Polda, Polres, Polsek) throughout Indonesia.</p>
      <p>My role covered backend data architecture and frontend map rendering — turning thousands of corrupted, unstructured records into a reliable, high-performance system used daily by the institution.</p>
 
      <div class="detail-full-image" style="margin: 48px 0; border-radius: 16px; overflow: hidden; border: 1px solid rgba(0,0,0,0.1); box-shadow: 0 10px 30px rgba(0,0,0,0.05);">
        <img src="assets/silog_mepe.png" style="width: 100%; display: block;" />
      </div>
 
      <h3>1. Core Challenges</h3>
      <p>most critical problems needed solving is thousands of jurisdictional records were scattered across unstructured CSV and Excel files — full of duplicates and missing identifiers that made any reporting unreliable.</p>
 
      <h3>2. Solutions Built</h3>
      <ul>
        <li><strong>Data Cleansing</strong> — Wrote structured SQL queries to validate, deduplicate, and consolidate scattered spreadsheet records into a centralized PostgreSQL database.</li>
        <li><strong>GeoJSON Topology Fix</strong> — Applied Turf.js topology correction algorithms on the Laravel backend to repair corrupted polygon boundaries across 7,000+ regional maps.</li>
        <li><strong>Frontend Rendering Optimization</strong> — Pre-processed and simplified geometry server-side before sending to Vue.js, eliminating the computation bottleneck in the browser.</li>
        <li><strong>Automated Deployment</strong> — Configured GitLab CI/CD pipeline so every approved code change deploys to the server automatically, without manual steps.</li>
      </ul>
 
      <h3>3. Technical Architecture</h3>
      <p>Laravel with inertia handles all backend batch processing and data management, querying a PostgreSQL database built for complex relational and spatial operations. Vue.js renders the corrected map data on the frontend. GitLab CI/CD automates the full delivery pipeline from code review to production.</p>
 
      <div class="detail-full-image" style="margin: 48px 0; border-radius: 16px; overflow: hidden; border: 1px solid rgba(0,0,0,0.1); box-shadow: 0 10px 30px rgba(0,0,0,0.05);">
        <img src="assets/loginPageSilog.png" style="width: 100%; display: block;" />
      </div>
 
      <h3>4. Results & Impact</h3>
      <ul>
        <li>Achieved <strong>100% spatial mapping accuracy</strong> — all jurisdictional boundaries now render correctly with zero data loss.</li>
        <li>Reduced data anomalies by <strong>90%+</strong> — thousands of duplicate and corrupted records consolidated into one clean, scalable database.</li>
      </ul>
    `,
  },

  kopdes: {
    title: "Project Details",
    articleTitle: "KOPDES — Village Cooperative Construction Monitor",
    category: "Fullstack Software Developer",
    date: "Dec 2025 – Feb 2026",
    client: "PT IlmuKomputerCom Braindevs Sistema",
    tech: "React · TanStack Query · tRPC · PostgreSQL",
    gradient: "linear-gradient(135deg, #2d1b69 0%, #11998e 100%)",
    emoji: "",
    image: "assets/logokopdesmp.webp",
    prev: { id: "silog", title: "SILOG POLRI" },
    next: { id: "wellnet", title: "WELL-NET Digital Wellbeing" },
    content: `
      <h2>KOPDES — Village Cooperative Construction Monitor</h2>
      <p>The Koperasi Merah Putih (KOPDES) initiative is a national government infrastructure program requiring precise, real-time tracking of construction progress across multiple regions. The platform connects regional military commands (Kodam/Kodim), external material vendors, and field officers (Babinsa) in a single unified system.</p>
      <p>My role as a Fullstack Developer focused on building the end-to-end logistics tracking pipeline — from vendor material dispatch to on-site receipt confirmation — and fixing data integrity issues that were corrupting construction status reports.</p>
 
      <div class="detail-full-image" style="margin: 48px 0; border-radius: 16px; overflow: hidden; border: 1px solid rgba(0,0,0,0.1); box-shadow: 0 10px 30px rgba(0,0,0,0.05);">
        <img src="assets/loginkdkmp.png" style="width: 100%; display: block;" />
      </div>
 
      <h3>1. Core Challenges</h3>
      <p>The system needed to handle a complex multi-role pipeline: multiple vendors sending materials to different Kodim locations, with real-time visibility into quotas, in-transit shipments, and received goods. Field officers also needed a simple mobile-friendly way to confirm receipts without disrupting the central database. On top of that, existing data contained null anomalies and duplicate records that were causing incorrect progress reports to reach stakeholders.</p>
 
      <h3>2. Solutions Built</h3>
      <ul>
        <li><strong>Vendor Management Module</strong> — Built vendor onboarding, regional Kodim relation mapping, and automated material quota allocation from scratch using tRPC and PostgreSQL on the backend.</li>
        <li><strong>Real-Time Tracking Dashboard</strong> — Developed an interactive vendor dashboard showing allocated quotas, in-transit volumes, and finalized received quantities with dynamic charts.</li>
        <li><strong>Field Receipt Interface (Babinsa)</strong> — Created a dedicated, mobile-friendly interface for field officers to confirm material receipts, directly triggering backend status updates.</li>
        <li><strong>Multi-Level Task Tracker</strong> — Built a hierarchical progress tracking system with recursive percentage calculations, replacing 100% of previously manual reporting.</li>
        <li><strong>Data Cleansing & Integrity</strong> — Debugged null anomalies in PostgreSQL, merged duplicate records into master entries, and executed safe soft-deletes — reducing data errors by 90%+.</li>
      </ul>
 
      <h3>3. Technical Architecture</h3>
      <p>The backend runs on Tanstack with PostgreSQL, handling multi-role authentication, business logic, and relational data queries. The frontend is built with React Query for efficient server-state management and real-time data synchronization across all user roles.</p>
 
      <h3>4. Results & Impact</h3>
      <ul>
        <li>Eliminated <strong>100% of manual calculation errors</strong> in progress reporting through automated recursive tracking.</li>
        <li>Reduced dataset anomalies by <strong>90%+</strong> through targeted data cleansing and deduplication.</li>
        <li>Delivered real-time supply chain visibility for vendors, regional commands, and field officers in a single platform.</li>
      </ul>
    `,
  },

  wellnet: {
    title: "Project Details",
    articleTitle: "WELL-NET — Digital Wellbeing Platform",
    category: "Backend Developer",
    date: "Sep 2025 – Dec 2025",
    client: "PT Inovasi Rekayasa Teknologi",
    tech: "Laravel · MySQL · Laravel Sanctum",
    gradient: "linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 50%, #2d2d2d 100%)",
    emoji: "🧠",
    image: "assets/logowellnet.png",
    prev: { id: "kopdes", title: "KOPDES Construction Monitor" },
    next: { id: "AyamTaliwang", title: "POS & Inventory System" },
    content: `
      <h2>WELL-NET — Digital Wellbeing Platform</h2>
      <p>WELL-NET is a digital wellbeing application designed to help users build healthier habits through structured self-reflection modules and a gamified reward system. Users progress through sequential learning modules, earning rewards as they complete milestones.</p>
      <p>My role was focused entirely on backend architecture and API design — building the full server-side layer that the mobile client would consume, including security, business logic, and performance under load.</p>
    
      <div class="detail-gallery">
        <img src = "assets/initial-result.png" style="width: 100%; height: auto;">
        <img src = "assets/welcome.png" style="width: 100%; height: auto;">
      </div>
 
      <h3>1. Core Challenges</h3>
      <p>The platform required secure, scalable APIs that could handle concurrent user inputs without data loss or structural inconsistencies. The module unlocking logic also needed to be strictly sequential — a user can only access the next module after completing the current one — and the reward engine had to fire reliably without race conditions or duplicate distributions.</p>
 
      <h3>2. Solutions Built</h3>
      <ul>
        <li><strong>Secure REST APIs</strong> — Built token-based authentication with Laravel Sanctum, implementing defensive measures against session vulnerabilities to protect all user data in transit.</li>
        <li><strong>Sequential Module Unlocking</strong> — Engineered backend logic that enforces strict progression — each module only unlocks after the previous one is completed, with tamper-resistant state validation.</li>
        <li><strong>Automated Reward Engine</strong> — Developed reward distribution logic tied to module completion events, designed to prevent duplicate payouts under concurrent load.</li>
        <li><strong>Stress Testing</strong> — Validated all core algorithms against mock datasets simulating high-concurrency scenarios before handoff to the frontend team.</li>
      </ul>
 
      <h3>3. Technical Architecture</h3>
      <p>The backend is built entirely on Laravel with a MySQL database, structured around a normalized schema that handles complex multi-role entity relationships. All API endpoints are secured via Laravel Sanctum token authentication and validated against strict input rules before any database write occurs.</p>
 
      <h3>4. Results & Impact</h3>
      <ul>
        <li>Delivered a complete, documented API layer ready for frontend integration — covering authentication, module progression, and reward distribution.</li>
      </ul>
    `,
  },

  AyamTaliwang: {
    title: "Project Details",
    articleTitle: "POS & Inventory — Multi-Branch F&B System",
    category: "Fullstack Software Developer",
    date: "Feb 2025 – Jun 2025",
    client: "PT Milenial Elite Teknologi",
    tech: "Laravel · MySQL · Blade · Tailwind CSS",
    gradient: "linear-gradient(135deg, #7f1d1d 0%, #b91c1c 50%, #ef4444 100%)",
    emoji: "🍽️",
    image: "assets/metech.jpg",
    prev: { id: "wellnet", title: "WELL-NET Digital Wellbeing" },
    next: { id: "silog", title: "SILOG POLRI" },
    content: `
      <h2>POS & Inventory — Multi-Branch F&B System</h2>
      <p>This project was a full point-of-sale and inventory management system built for a multi-branch food and beverage enterprise. The business needed a centralized platform to track stock, manage recipes (Bill of Materials), and get accurate cost-of-goods recommendations across all locations — something their previous spreadsheet-based process couldn't reliably provide.</p>
      <p>built and deployed this system end-to-end during a 4-month internship at PT Milenial Elite Teknologi, working across database design, backend logic, and the frontend interface.</p>
 
      <div class="detail-full-image" style="margin: 48px 0; border-radius: 16px; overflow: hidden; border: 1px solid rgba(0,0,0,0.1); box-shadow: 0 10px 30px rgba(0,0,0,0.05);">
        <img src="assets/dashboard_pos.png" style="width: 100%; display: block;" />
      </div>
 
      <h3>1. Core Challenges</h3>
      <p>Managing inventory across multiple branches introduced several compounding problems: stock data across branches was inconsistent, there was no system tracking semi-finished goods or raw material usage per recipe, and the business had no reliable way to calculate an accurate Cost of Goods Sold (COGS) for pricing decisions.</p>
 
      <h3>2. Solutions Built</h3>
      <ul>
        <li><strong>POS System</strong> — Built a complete point-of-sale interface with order management, table tracking, and transaction recording using Laravel and Blade templates with Tailwind CSS.</li>
        <li><strong>Bill of Materials (BoM) Engine</strong> — Designed a relational schema to handle multi-level BoM — tracking raw materials, semi-finished goods, and finished menu items with accurate usage deductions per transaction.</li>
        <li><strong>COGS Recommendation Engine</strong> — Built automated logic that calculates and recommends selling prices based on ingredient costs, helping the business make data-driven pricing decisions.</li>
        <li><strong>Multi-Branch Sync</strong> — Structured the database to centralize inventory data across all branches.</li>
      </ul>
 
      <h3>3. Technical Architecture</h3>
      <p>The system is built on Laravel with a MySQL database, using Blade and Tailwind CSS for a responsive, lightweight frontend. The relational schema was designed specifically to support multi-level ingredient tracking and cross-branch data consistency without requiring a complex microservices setup.</p>
 
      <h3>4. Results & Impact</h3>
      <ul>
        <li>Successfully deployed and adopted across multiple branches — stock data now centralized in one system.</li>
        <li>Eliminated manual COGS calculation — the recommendation engine gives accurate cost guidance per menu item automatically.</li>
        <li>Reduced inventory discrepancies between branches through a unified, real-time stock tracking schema.</li>
      </ul>
    `,
  },
};

/* ============================================
   DYNAMIC PAGE RENDERING
   ============================================ */
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (!id || !PROJECTS[id]) return;

  const p = PROJECTS[id];

  // Update page title
  document.title = p.articleTitle + " — Oprinande Portfolio";

  // Update hero heading
  const heroTitle = document.getElementById("detail-title");
  if (heroTitle) heroTitle.textContent = p.articleTitle;

  // Update hero image / gradient
  const heroImage = document.getElementById("detail-hero-image");
  if (heroImage) {
    if (p.image) {
      heroImage.innerHTML = `
        <div class="cs-card-image-placeholder" style="height: 520px; background: #fff; display: flex; align-items: center; justify-content: center;">
          <img src="${p.image}" alt="${p.articleTitle}" style="max-height: 80%; max-width: 80%; object-fit: contain;" />
        </div>
      `;
    } else {
      heroImage.innerHTML = `
        <div class="cs-card-image-placeholder" style="height: 520px; background: ${p.gradient}; display: flex; align-items: center; justify-content: center;">
          <span style="font-size: 100px;">${p.emoji}</span>
        </div>
      `;
    }
  }

  // Update meta fields
  const setTextById = (elId, text) => {
    const el = document.getElementById(elId);
    if (el) el.textContent = text;
  };
  setTextById("detail-category", p.category);
  setTextById("detail-date", p.date);
  setTextById("detail-client", p.client);
  setTextById("detail-tech", p.tech);

  // Update article content
  const article = document.getElementById("detail-article");
  if (article && p.content) {
    article.innerHTML = p.content;
  }

  // Update prev/next navigation
  if (p.prev) {
    const prevEl = document.querySelector(".detail-nav-item.prev");
    if (prevEl) {
      prevEl.href = `project-detail.html?id=${p.prev.id}`;
      const prevTitle = prevEl.querySelector(".detail-nav-title");
      if (prevTitle) prevTitle.textContent = p.prev.title;
    }
  }

  if (p.next) {
    const nextEl = document.querySelector(".detail-nav-item.next");
    if (nextEl) {
      nextEl.href = `project-detail.html?id=${p.next.id}`;
      const nextTitle = nextEl.querySelector(".detail-nav-title");
      if (nextTitle) nextTitle.textContent = p.next.title;
    }
  }
});
