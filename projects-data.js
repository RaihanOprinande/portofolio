
const PROJECTS = {
  silog: {
    title: 'Project Details',
    articleTitle: 'SILOG POLRI — National Police Logistics System',
    category: 'Fullstack Software Developer',
    date: 'Jan 2026 - Jun 2026',
    client: 'PT IlmuKomputerCom Braindevs Sistema',
    tech: 'Laravel · Vue.js · PostgreSQL · GeoJSON · GitLab CI/CD',
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    emoji: '',
    image: 'assets/Logo_Final_SILOG.png',
    prev: { id: 'wellnet', title: 'WELL-NET Digital Wellbeing' },
    next: { id: 'Cooperative Infrastructure Monitoring Platform', title: 'Cooperative Infrastructure Platform' },
    content: `
      <h2>SILOG POLRI — National Police Logistics System</h2>
      <p>SILOG POLRI is a production-grade logistics information system built for a national government institution, managing administrative and geospatial data across hundreds of police jurisdictions (Polda, Polres, Polsek) throughout Indonesia.</p>
      <p>My role covered backend data architecture and frontend map rendering — turning thousands of corrupted, unstructured records into a reliable, high-performance system used daily by the institution.</p>

      <div class="detail-full-image" style="margin: 48px 0; border-radius: 16px; overflow: hidden; border: 1px solid rgba(0,0,0,0.1); box-shadow: 0 10px 30px rgba(0,0,0,0.05);">
        <img src="assets/silog_mepe.png" style="width: 100%; display: block;" />
      </div>

      <h3>1. Core Challenges</h3>
      <p>Two critical problems needed solving. First, thousands of jurisdictional records were scattered across unstructured CSV and Excel files — full of duplicates and missing identifiers that made any reporting unreliable. Second, the map interface was nearly unusable: rendering raw GeoJSON polygons for 7,000+ regions caused severe browser lag and freezing on every page load.</p>

      <h3>2. Solutions Built</h3>
      <ul>
        <li><strong>Data Cleansing Pipeline</strong> — Wrote structured SQL queries to validate, deduplicate, and consolidate scattered spreadsheet records into a centralized PostgreSQL database.</li>
        <li><strong>GeoJSON Topology Fix</strong> — Applied Turf.js topology correction algorithms on the Laravel backend to repair corrupted polygon boundaries across 7,000+ regional maps.</li>
        <li><strong>Frontend Rendering Optimization</strong> — Pre-processed and simplified geometry server-side before sending to Vue.js, eliminating the computation bottleneck in the browser.</li>
        <li><strong>Automated Deployment</strong> — Configured GitLab CI/CD pipeline so every approved code change deploys to the server automatically, without manual steps.</li>
      </ul>

      <h3>3. Technical Architecture</h3>
      <p>Laravel handles all backend batch processing and data management, querying a PostgreSQL database built for complex relational and spatial operations. Vue.js renders the corrected map data on the frontend. GitLab CI/CD automates the full delivery pipeline from code review to production.</p>

      <div class="detail-full-image" style="margin: 48px 0; border-radius: 16px; overflow: hidden; border: 1px solid rgba(0,0,0,0.1); box-shadow: 0 10px 30px rgba(0,0,0,0.05);">
        <img src="assets/loginPageSilog.png" style="width: 100%; display: block;" />
      </div>

      <h3>4. Results & Impact</h3>
      <ul>
        <li>Achieved <strong>100% spatial mapping accuracy</strong> — all jurisdictional boundaries now render correctly with zero data loss.</li>
        <li>Cut frontend map rendering load by <strong>80%</strong>, eliminating browser lag entirely during navigation.</li>
        <li>Reduced data anomalies by <strong>90%+</strong> — thousands of duplicate and corrupted records consolidated into one clean, scalable database.</li>
      </ul>
    `
  },

  MonitoringPlatfrom: {
    title: 'Project Details',
    articleTitle: 'Cooperative Infrastructure Monitoring Platform',
    category: 'Fullstack Software Developer',
    date: 'Dec 2025 – Feb 2026',
    client: 'PT IlmuKomputerCom Braindevs Sistema',
    tech: 'React · TanStack Query · tRPC · PostgreSQL',
    gradient: 'linear-gradient(135deg, #2d1b69 0%, #11998e 100%)',
    emoji: '',
    image: 'assets/braindevs.png',
    prev: { id: 'silog', title: 'SILOG POLRI' },
    next: { id: 'wellnet', title: 'WELL-NET Digital Wellbeing' },
    content: `
      <h2>Cooperative Infrastructure Monitoring Platform</h2>
      <p>This was a large-scale infrastructure program requiring precise, real-time tracking of construction progress across multiple regions nationwide. The platform connects regional coordination bodies, external material vendors, and field officers in a single unified system.</p>
      <p>My role as a Fullstack Developer focused on building the end-to-end logistics tracking pipeline — from vendor material dispatch to on-site receipt confirmation — and fixing data integrity issues that were corrupting construction status reports.</p>

      <div class="detail-full-image" style="margin: 48px 0; border-radius: 16px; overflow: hidden; border: 1px solid rgba(0,0,0,0.1); box-shadow: 0 10px 30px rgba(0,0,0,0.05);">
        <img src="assets/loginkdkmp.png" style="width: 100%; display: block;" />
      </div>

      <h3>1. Core Challenges</h3>
      <p>The system needed to handle a complex multi-role pipeline: multiple vendors sending materials to different regional locations, with real-time visibility into quotas, in-transit shipments, and received goods. Field officers also needed a simple mobile-friendly way to confirm receipts without disrupting the central database. On top of that, existing data contained null anomalies and duplicate records that were causing incorrect progress reports to reach stakeholders.</p>

      <h3>2. Solutions Built</h3>
      <ul>
        <li><strong>Vendor Management Module</strong> — Built vendor onboarding, regional relation mapping, and automated material quota allocation from scratch using tRPC and PostgreSQL on the backend.</li>
        <li><strong>Real-Time Tracking Dashboard</strong> — Developed an interactive vendor dashboard showing allocated quotas, in-transit volumes, and finalized received quantities with dynamic charts.</li>
        <li><strong>Field Receipt Interface</strong> — Created a dedicated, mobile-friendly interface for field officers to confirm material receipts, directly triggering backend status updates.</li>
        <li><strong>Multi-Level Task Tracker</strong> — Built a hierarchical progress tracking system with recursive percentage calculations, replacing 100% of previously manual reporting.</li>
        <li><strong>Data Cleansing & Integrity</strong> — Debugged null anomalies in PostgreSQL, merged duplicate records into master entries, and executed safe soft-deletes — reducing data errors by 90%+.</li>
      </ul>

      <h3>3. Technical Architecture</h3>
      <p>The backend runs on tRPC with PostgreSQL, handling multi-role authentication, business logic, and relational data queries. The frontend is built with React and TanStack Query for efficient server-state management and real-time data synchronization across all user roles.</p>

      <h3>4. Results & Impact</h3>
      <ul>
        <li>Eliminated <strong>100% of manual calculation errors</strong> in progress reporting through automated recursive tracking.</li>
        <li>Reduced dataset anomalies by <strong>90%+</strong> through targeted data cleansing and deduplication.</li>
        <li>Delivered real-time supply chain visibility for vendors, regional coordinators, and field officers in a single platform.</li>
      </ul>
    `
  },

  wellnet: {
    title: 'Project Details',
    articleTitle: 'WELL-NET — Digital Wellbeing Platform',
    category: 'Backend Developer',
    date: 'Sep 2025 – Dec 2025',
    client: 'PT Inovasi Rekayasa Teknologi',
    tech: 'Laravel · MySQL · Laravel Sanctum',
    gradient: 'linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 50%, #2d2d2d 100%)',
    emoji: '🧠',
    image: 'assets/logowellnet.png',
    prev: { id: 'MonitoringPlatfrom', title: 'Cooperative Infrastructure Platform' },
    next: { id: 'AyamTaliwang', title: 'POS & Inventory System' },
    content: `
      <h2>WELL-NET — Digital Wellbeing Platform</h2>
      <p>WELL-NET is a digital wellbeing application designed to help users build healthier habits through structured self-reflection modules and a gamified reward system. Users progress through sequential learning modules, earning rewards as they complete milestones.</p>
      <p>My role was focused entirely on backend architecture and API design — building the full server-side layer that the mobile client would consume, including security, business logic, and performance under load.</p>

      <div class="detail-gallery">
        <div class="detail-gallery-item" style="background: linear-gradient(135deg, #0c0c0c 0%, #2d2d2d 100%); height: 380px; border-radius: 12px; display: flex; align-items: center; justify-content: center;"><span style="font-size: 64px; opacity: 0.4;">🧠</span></div>
        <div class="detail-gallery-item" style="background: linear-gradient(135deg, #1a1a1a 0%, #333 100%); height: 380px; border-radius: 12px; display: flex; align-items: center; justify-content: center;"><span style="font-size: 64px; opacity: 0.4;">🏆</span></div>
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
        <li>Delivered a fully production-ready API layer ahead of frontend integration schedule.</li>
        <li>Contributed to a <strong>20% increase in user engagement</strong> through the automated reward system driving consistent module completion.</li>
        <li>Zero reported authentication vulnerabilities post-deployment — all session security measures held under real-world usage.</li>
      </ul>
    `
  },

  AyamTaliwang: {
    title: 'Project Details',
    articleTitle: 'POS & Inventory — Multi-Branch F&B System',
    category: 'Fullstack Software Developer',
    date: 'Feb 2025 – Jun 2025',
    client: 'PT Milenial Elite Teknologi',
    tech: 'Laravel · MySQL · Blade · Tailwind CSS',
    gradient: 'linear-gradient(135deg, #7f1d1d 0%, #b91c1c 50%, #ef4444 100%)',
    emoji: '🍽️',
    image: '',
    prev: { id: 'wellnet', title: 'WELL-NET Digital Wellbeing' },
    next: { id: 'silog', title: 'SILOG POLRI' },
    content: `
      <h2>POS & Inventory — Multi-Branch F&B System</h2>
      <p>This project was a full point-of-sale and inventory management system built for a multi-branch food and beverage enterprise. The business needed a centralized platform to track stock, manage recipes (Bill of Materials), and get accurate cost-of-goods recommendations across all locations — something their previous spreadsheet-based process couldn't reliably provide.</p>
      <p>I built and deployed this system end-to-end during a 4-month internship at PT Milenial Elite Teknologi, working across database design, backend logic, and the frontend interface.</p>

      <div class="detail-gallery">
        <div class="detail-gallery-item" style="background: linear-gradient(135deg, #7f1d1d 0%, #b91c1c 100%); height: 380px; border-radius: 12px; display: flex; align-items: center; justify-content: center;"><span style="font-size: 64px; opacity: 0.4;">🍽️</span></div>
        <div class="detail-gallery-item" style="background: linear-gradient(135deg, #b91c1c 0%, #ef4444 100%); height: 380px; border-radius: 12px; display: flex; align-items: center; justify-content: center;"><span style="font-size: 64px; opacity: 0.4;">📦</span></div>
      </div>

      <h3>1. Core Challenges</h3>
      <p>Managing inventory across multiple branches introduced several compounding problems: stock data across branches was inconsistent, there was no system tracking semi-finished goods or raw material usage per recipe, and the business had no reliable way to calculate an accurate Cost of Goods Sold (COGS) for pricing decisions.</p>

      <h3>2. Solutions Built</h3>
      <ul>
        <li><strong>POS System</strong> — Built a complete point-of-sale interface with order management, table tracking, and transaction recording using Laravel and Blade templates with Tailwind CSS.</li>
        <li><strong>Bill of Materials (BoM) Engine</strong> — Designed a relational schema to handle multi-level BoM — tracking raw materials, semi-finished goods, and finished menu items with accurate usage deductions per transaction.</li>
        <li><strong>COGS Recommendation Engine</strong> — Built automated logic that calculates and recommends selling prices based on ingredient costs, helping the business make data-driven pricing decisions.</li>
        <li><strong>Multi-Branch Sync</strong> — Structured the database to centralize inventory data across all branches, reducing discrepancies from disconnected manual tracking.</li>
      </ul>

      <h3>3. Technical Architecture</h3>
      <p>The system is built on Laravel with a MySQL database, using Blade and Tailwind CSS for a responsive, lightweight frontend. The relational schema was designed specifically to support multi-level ingredient tracking and cross-branch data consistency without requiring a complex microservices setup.</p>

      <h3>4. Results & Impact</h3>
      <ul>
        <li>Successfully deployed and adopted across multiple branches — stock data now centralized in one system.</li>
        <li>Eliminated manual COGS calculation — the recommendation engine gives accurate cost guidance per menu item automatically.</li>
        <li>Reduced inventory discrepancies between branches through a unified, real-time stock tracking schema.</li>
      </ul>
    `
  },
    rumahsakit: {
    title: 'Project Details',
    articleTitle: 'Hospital Finder — Mobile CRUD Application',
    category: 'Mobile Developer · Academic Project',
    date: '2023',
    client: 'Academic Project',
    tech: 'Flutter · PHP · MySQL · Google Maps API',
    gradient: 'linear-gradient(135deg, #0f3d3e 0%, #1a6b6f 50%, #2a9d8f 100%)',
    emoji: '🏥',
    image: 'assets/hospital-logo.png',
    prev: { id: 'AyamTaliwang', title: 'POS & Inventory System' },
    next: { id: 'ui_slicing_elearning', title: 'E-Learning Slicing UI' },
    content: `
      <h2>Hospital Finder — Mobile CRUD Application</h2>
      <p>A Flutter mobile application built to demonstrate how a mobile client can communicate with a backend server through a REST API — covering the full chain from province and district selection down to real-time hospital room availability.</p>
      <p>I designed the backend logic and database schema, then built the Flutter frontend to consume the API and render the data dynamically, including map-based hospital location lookup.</p>
 
      <div style="margin: 48px 0; display: flex; justify-content: center;">
        <div style="background: linear-gradient(135deg, #0f3d3e 0%, #1a6b6f 50%, #2a9d8f 100%); border-radius: 24px; padding: 40px 60px; display: inline-flex; justify-content: center; box-shadow: 0 20px 60px rgba(0,0,0,0.15);">
          <div style="background: #000; border-radius: 20px; padding: 8px; box-shadow: 0 8px 32px rgba(0,0,0,0.3); max-width: 280px;">
            <img src="assets/rumahsakit-screenshot.png" style="width: 100%; display: block; border-radius: 14px;" />
          </div>
        </div>
      </div>
 
      <h3>1. Core Challenges</h3>
      <p>The app needed to handle a multi-level data hierarchy — province, then district, then hospital, then room — while keeping each screen fast and dependent only on the previous selection. It also needed to integrate Google Maps to show hospital locations visually, which required careful handling of API keys and location permissions on the mobile side.</p>
 
      <h3>2. Solutions Built</h3>
      <ul>
        <li><strong>Cascading Data Flow</strong> — Built a province → district → hospital → room navigation flow, where each screen fetches data dynamically based on the previous selection via REST API calls.</li>
        <li><strong>PHP REST API Backend</strong> — Designed and built a native PHP API layer connected to MySQL, handling all CRUD operations for provinces, districts, hospitals, and room availability.</li>
        <li><strong>Real-Time Room Availability</strong> — Implemented a room status endpoint that reflects current availability per hospital, queried live from the database.</li>
        <li><strong>Map Integration</strong> — Integrated Google Maps Flutter SDK to render hospital locations visually, with proper permission handling for location access.</li>
      </ul>
 
      <h3>3. Technical Architecture</h3>
      <p>The frontend is built entirely in Flutter (Dart), using the <code>http</code> package to communicate with a native PHP backend over REST API. MySQL stores the relational hierarchy of provinces, districts, hospitals, and rooms. Google Maps Flutter SDK handles location rendering, with <code>permission_handler</code> managing runtime location permissions.</p>
 
      <h3>4. Results & Impact</h3>
      <ul>
        <li>Built a fully functional end-to-end mobile-to-backend data flow — from province selection down to individual room availability.</li>
        <li>Successfully integrated Google Maps for visual hospital location lookup on mobile.</li>
        <li>Demonstrated practical understanding of REST API design and consumption across a full mobile application stack.</li>
      </ul>
    `
  },

  ui_slicing_elearning: {
    title: 'Project Details',
    articleTitle: 'E-Learning Slicing UI — Flutter Mobile App',
    category: 'Mobile Developer · Academic Project',
    date: '2023',
    client: 'Academic Project — Politeknik Negeri Padang',
    tech: 'Flutter · Dart · Figma',
    gradient: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #06B6D4 100%)',
    emoji: '📚',
    image: 'assets/elearning-logo.png',
    prev: { id: 'rumahsakit', title: 'Hospital Finder App' },
    next: { id: 'silog', title: 'SILOG POLRI' },
    content: `
      <h2>E-Learning Slicing UI — Flutter Mobile App</h2>
      <p>A Flutter mobile application focused on translating a complete E-Learning user interface design into functional, pixel-perfect Flutter code. This project was built as a coursework assignment for the Advanced Mobile Programming course at Politeknik Negeri Padang.</p>
      <p>The goal was to practice UI slicing skills — taking a visual design and implementing it faithfully using Flutter widgets, layouts, and navigation patterns without relying on a backend or live data.</p>

      <div style="margin: 48px 0; display: flex; justify-content: center;">
        <div style="background: linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #06B6D4 100%); border-radius: 24px; padding: 40px 48px; display: inline-flex; gap: 32px; justify-content: center; flex-wrap: wrap; box-shadow: 0 20px 60px rgba(0,0,0,0.15);">
          <div style="background: #000; border-radius: 20px; padding: 8px; box-shadow: 0 8px 32px rgba(0,0,0,0.3); max-width: 260px;">
            <img src="assets/dashboard-elearning.jpg" alt="E-Learning Home Screen" style="width: 100%; display: block; border-radius: 14px;" />
          </div>
          <div style="background: #000; border-radius: 20px; padding: 8px; box-shadow: 0 8px 32px rgba(0,0,0,0.3); max-width: 260px;">
            <img src="assets/detail-elearning.jpg" alt="E-Learning Course Detail" style="width: 100%; display: block; border-radius: 14px;" />
          </div>
        </div>
      </div>

      <h3>1. Core Challenges</h3>
      <p>The primary challenge was achieving pixel-perfect accuracy when translating the UI design into Flutter widgets. Each screen required careful attention to spacing, typography, color consistency, and responsive layout behavior across different screen sizes. Additionally, building a smooth Bottom Navigation Bar with proper state management for multi-tab navigation added complexity beyond simple static layouts.</p>

      <h3>2. Features Implemented</h3>
      <ul>
        <li><strong>Home Screen</strong> — Implemented the main landing page displaying course categories, featured courses, and popular blog entries using a combination of ListView, GridView, and custom Card widgets.</li>
        <li><strong>Category Browsing</strong> — Built a category list screen showcasing course topics like Data Science, Machine Learning, and more — with proper icon mapping and visual hierarchy.</li>
        <li><strong>My Course Page</strong> — Designed and sliced a dedicated screen for users to view enrolled courses, with progress indicators and course detail cards.</li>
        <li><strong>Bottom Navigation Bar</strong> — Implemented a fully functional BottomNavigationBar with four tabs (Home, My Course, Blogs, User) and proper page switching using Flutter's state management.</li>
        <li><strong>Responsive Layouts</strong> — Ensured all screens render correctly across multiple device sizes using MediaQuery, Flexible, and Expanded widgets.</li>
      </ul>

      <h3>3. Technical Architecture</h3>
      <p>The app is built entirely in Flutter (Dart), using a widget-based component architecture. Navigation is handled through a BottomNavigationBar with an IndexedStack for persistent tab state. External packages like  provide icon assets, while <code>Figma</code> is included for local data persistence capabilities. The project structure follows Flutter's standard directory conventions with separated screen, widget, and model layers.</p>

      <h3>4. Results & Impact</h3>
      <ul>
        <li>Successfully sliced a complete multi-screen E-Learning UI design into fully functional Flutter code.</li>
        <li>Demonstrated proficiency in Flutter layout systems, custom widgets, and multi-tab navigation patterns.</li>
        <li>Completed as coursework for the Advanced Mobile Programming (Pemrograman Mobile Lanjut) course at Politeknik Negeri Padang.</li>
      </ul>
    `
  }

};

/* ============================================
   DYNAMIC PAGE RENDERING
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  if (!id || !PROJECTS[id]) return;

  const p = PROJECTS[id];

  // Update page title
  document.title = p.articleTitle + ' — Oprinande Portfolio';

  // Update hero heading
  const heroTitle = document.getElementById('detail-title');
  if (heroTitle) heroTitle.textContent = p.articleTitle;

  // Update hero image / gradient
  const heroImage = document.getElementById('detail-hero-image');
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
  setTextById('detail-category', p.category);
  setTextById('detail-date', p.date);
  setTextById('detail-client', p.client);
  setTextById('detail-tech', p.tech);

  // Update article content
  const article = document.getElementById('detail-article');
  if (article && p.content) {
    article.innerHTML = p.content;
  }

  // Update prev/next navigation
  if (p.prev) {
    const prevEl = document.querySelector('.detail-nav-item.prev');
    if (prevEl) {
      prevEl.href = `project-detail.html?id=${p.prev.id}`;
      const prevTitle = prevEl.querySelector('.detail-nav-title');
      if (prevTitle) prevTitle.textContent = p.prev.title;
    }
  }

  if (p.next) {
    const nextEl = document.querySelector('.detail-nav-item.next');
    if (nextEl) {
      nextEl.href = `project-detail.html?id=${p.next.id}`;
      const nextTitle = nextEl.querySelector('.detail-nav-title');
      if (nextTitle) nextTitle.textContent = p.next.title;
    }
  }
});