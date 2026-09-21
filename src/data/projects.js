// ------------------------------------------------------------------
// PROJECTS
// status: "Completed" | "In Progress" | "Planned" | "Archived"
// ------------------------------------------------------------------

export const projects = [
  {
    id: 'parking-management-system',
    name: 'Modern Parking Management System (MPMS)',
    description:
      'A full-stack, database-driven parking management system built as an academic project at Multimedia University of Kenya.',
    longDescription:
      'A web-based parking management system that automates vehicle entry, bay allocation, fee calculation, multi-method payment (M-Pesa / card / cash), barrier control, and revenue reporting for a Kenyan parking facility. Built with Flask, SQLAlchemy, and Bootstrap 5, and featuring a payment state machine, audit logging, and a live parking-bay map. Originally submitted for the Data Structures & Algorithms unit at MMU, then extended well beyond the brief into a working full-stack application.',
    status: 'Completed',
    year: '2026',
    date: '2026-09',
    technologies: [
      'Python',
      'Flask',
      'SQLAlchemy',
      'SQLite',
      'Bootstrap 5',
      'JavaScript',
      'HTML',
      'CSS',
      'Git',
    ],
    image: '/images/projects/parking-system.png',
    github: 'https://github.com/ochiengclifford52-collab/parking_management_system',
    demo: '',
    features: [
      'Live parking-bay map with green / red / grey states',
      'FIFO + priority-queue bay allocation (min-heap for VIP bays)',
      'Hash-table lookup of active sessions by number plate',
      'Database-driven tariffs — no hard-coded KES values',
      'M-Pesa (Daraja STK Push) integration with sandbox + demo modes',
      'Card and cash payment options with change calculation',
      'Payment state machine: PENDING → CONFIRMED / FAILED / CANCELLED / REFUNDED',
      'Barrier safety: refuses to open without a confirmed payment',
      'Printable receipts with net / VAT / gross breakdown',
      'Append-only audit log of every important action',
      'Revenue, VAT, and bay-utilisation reports with CSV export',
      'Role-based access: administrator, attendant, auditor',
      'Automated tests with pytest',
    ],
    learned: [
      'Designing a layered Flask app with blueprints and services',
      'Using SQLAlchemy 2.x ORM with proper indexes and foreign keys',
      'Applying data structures (queues, hash tables, heaps) in real code',
      'Modelling a payment state machine with enforced transitions',
      'Integrating a third-party API (Safaricom Daraja) safely',
      'Writing unit tests with pytest for critical business logic',
      'Handling secrets via .env and CSRF protection on forms',
    ],
    challenges: [
      'Keeping the payment flow idempotent so duplicate M-Pesa callbacks do not double-charge',
      'Enforcing barrier safety without a race condition between payment confirmation and exit',
      'Making bay allocation both fair (FIFO) and priority-aware (VIP / accessible bays)',
      'Avoiding hard-coded tariff values while keeping the fee engine simple to understand',
    ],
    solutions: [
      'Idempotent payment confirmation keyed on CheckoutRequestID, plus a state machine that rejects invalid transitions',
      'Exit processing wrapped in a transaction that requires a CONFIRMED payment before releasing the bay',
      'Combined a FIFO deque with a min-heap for priority bays — priority served first, then fair rotation',
      'All tariffs stored in the database and loaded at runtime; the engine sorts bands by upper bound and picks the matching one',
    ],
  },
  {
    id: 'personal-portfolio',
    name: 'Personal Portfolio Website',
    description:
      'This website — a data-driven, living portfolio that grows as I learn.',
    longDescription:
      'Built with React, TypeScript, Tailwind CSS, and Vite. Designed so that every piece of content (skills, projects, milestones, goals) lives in structured data files, allowing the site to grow without touching UI code. Includes dark/light mode, responsive layout, accessibility fundamentals, and a project filter system.',
    status: 'In Progress',
    year: '2026',
    date: '2026-09',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Framer Motion'],
    image: '/images/projects/portfolio.png',
    github: 'https://github.com/ochiengclifford52-collab',
    demo: '',
    features: [
      'Fully data-driven content — edit data files, not components',
      'Dark / light mode with persistence',
      'Responsive from mobile to desktop',
      'Project filtering by technology, status, and year',
      'Accessible: semantic HTML, focus states, skip link, reduced motion',
      'Live stats dashboard that updates as data changes',
    ],
    learned: [
      'Component architecture in React with TypeScript',
      'Tailwind CSS utility-first styling and theming',
      'Structuring an app so data is fully separated from presentation',
      'Applying accessibility best practices',
    ],
    challenges: [
      'Keeping UI components generic so new data never requires UI changes',
      'Handling responsive layouts across very different section types (timeline, cards, filters)',
    ],
    solutions: [
      'A centralized /src/data folder with one file per content type',
      'Reusable components (ProgressBar, Timeline, LanguageCard) parameterized by data',
    ],
  },
]

export default projects