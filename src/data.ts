/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Course, Product, BlogPost, Instructor } from './types';

export const coursesData: Course[] = [
  {
    id: 'c1',
    title: 'Full-Stack Web Development Masterclass',
    description: 'Master modern React 19, Node.js, Express, and databases (SQL & NoSQL) by building robust real-world production projects.',
    category: 'Development',
    instructor: 'Dr. John Harrison',
    instructorTitle: 'Core Engineer & Educator',
    instructorImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    price: 99,
    originalPrice: 499,
    rating: 4.8,
    reviewCount: 1240,
    duration: '48h 30m',
    lectures: 142,
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80',
    enrolledStudents: 15420,
    syllabus: [
      'Visual Design & Modern Tailwind CSS Layouts',
      'Advanced React 19 State, Hooks and Transitions',
      'Server-Side Programming with Express & Node.js',
      'Database Modeling & Relations with Prisma & Schema',
      'User Auth, Security & Deployment in Cloud Spaces'
    ],
    trending: true
  },
  {
    id: 'c2',
    title: 'Python for Data Science & AI Engineering',
    description: 'Learn computational data science, data cleaning, powerful charts inside Jupyter, and implement predictive AI algorithms using NumPy & Pandas.',
    category: 'Data Science',
    instructor: 'Aparna Nair',
    instructorTitle: 'Data Analyst & Lead ML Advisor',
    instructorImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    price: 129,
    originalPrice: 599,
    rating: 4.9,
    reviewCount: 948,
    duration: '38h 15m',
    lectures: 98,
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1527474305487-b87b222841cc?auto=format&fit=crop&w=600&q=80',
    enrolledStudents: 8900,
    syllabus: [
      'Python Syntax & Structural Core Refresher',
      'Exploratory Data Analysis with Pandas & Numpy',
      'Data Visualizations using Seaborn & Matplotlib',
      'Introduction to Machine Learning Models with Scikit-Learn',
      'Deep Neural Networks with TensorFlow'
    ],
    trending: true
  },
  {
    id: 'c3',
    title: 'Modern UI/UX Design System Guidelines',
    description: 'A deeply detailed course on building design languages, design tokens, micro-interactions, responsive prototypes, and interactive user interfaces.',
    category: 'Design & Graphics',
    instructor: 'Marcus Aurel',
    instructorTitle: 'Senior UX Architect',
    instructorImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80',
    price: 79,
    originalPrice: 299,
    rating: 4.7,
    reviewCount: 615,
    duration: '22h 45m',
    lectures: 64,
    level: 'All Levels',
    image: 'https://images.unsplash.com/photo-1561070791-26c113006238?auto=format&fit=crop&w=600&q=80',
    enrolledStudents: 4120,
    syllabus: [
      'Typography Selection, Visual Rhythm & Margins',
      'Creating Design Systems & Reusable Components',
      'Interactive Micro-Animations & Layout Transitions',
      'In-Depth User Testing & Dynamic Mockups',
      'Handoff strategies for Frontend Engineering Teams'
    ]
  },
  {
    id: 'c4',
    title: 'Mobile App Development with Flutter & React Native',
    description: 'Build native multi-platform iOS and Android applications from a single codebase with clean architectures and persistent storing.',
    category: 'Development',
    instructor: 'Dr. John Harrison',
    instructorTitle: 'Core Engineer & Educator',
    instructorImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    price: 149,
    originalPrice: 699,
    rating: 4.6,
    reviewCount: 432,
    duration: '42h 10m',
    lectures: 115,
    level: 'Advanced',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=600&q=80',
    enrolledStudents: 3100,
    syllabus: [
      'Dart & Javascript Advanced Language Concepts',
      'State Management Protocols with Redux & Riverpod',
      'Offline Storage Strategy with Local Databases',
      'Native Camera, Audio, & GPS Integrations',
      'Publishing directly to App Store & Google Play Store'
    ]
  },
  {
    id: 'c5',
    title: 'Digital Marketing & Conversion Rate Mastery',
    description: 'Grow a SaaS, startup or local brand from zero to scale. Covers SEO algorithms, social media automation, analytics flow, and funnel conversion optimization.',
    category: 'Business & Marketing',
    instructor: 'Lisa Cole',
    instructorTitle: 'Acquisition Lead & Growth Advisor',
    instructorImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
    price: 49,
    originalPrice: 199,
    rating: 4.5,
    reviewCount: 289,
    duration: '18h 20m',
    lectures: 48,
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
    enrolledStudents: 2280,
    syllabus: [
      'Audience Research & Positioning Strategy',
      'Advanced On-Page & Technical SEO Engineering',
      'Paid Acquisition Ad-Copy Writing & Funnels',
      'Setting up Web Analytics & Conversion Tracking',
      'Email Automations and Lifecycle Marketing Sequences'
    ]
  },
  {
    id: 'c6',
    title: 'Next-Generation Devops & Cloud Infrastructure',
    description: 'Master CI/CD automation pipelines, standard Docker containers, orchestrating services with Kubernetes, and provisioning Cloud infrastructure.',
    category: 'Cloud & Tech',
    instructor: 'Aparna Nair',
    instructorTitle: 'Data Analyst & Lead ML Advisor',
    instructorImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    price: 159,
    originalPrice: 799,
    rating: 4.9,
    reviewCount: 512,
    duration: '34h 15m',
    level: 'Advanced',
    lectures: 86,
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=600&q=80',
    enrolledStudents: 4950,
    syllabus: [
      'Containerization Architecture with Docker Deep-Dive',
      'Configuring Automated GitHub Actions Pipelines',
      'Orchestrating Highly Scalable Kubernetes Clusters',
      'Infrastructure-as-Code Setup with Terraform',
      'Server-less Deployments & Container Load Balancers'
    ]
  },
  {
    id: 'c7',
    title: 'AI Editing Course',
    description: 'Learn modern AI tools like Midjourney, ChatGPT, Runway, and CapCut to edit videos, write content, and automate creative asset creation.',
    category: 'Development',
    instructor: 'Aparna Nair',
    instructorTitle: 'Data Analyst & Lead ML Advisor',
    instructorImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    price: 49,
    originalPrice: 199,
    rating: 4.8,
    reviewCount: 312,
    duration: '15h 45m',
    lectures: 42,
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80',
    enrolledStudents: 1250,
    syllabus: [
      'Introduction to AI Video & Image Generators',
      'Prompt Engineering for Creative Outputs',
      'Advanced Editing & Color Correction with AI',
      'Automating Content Workflows',
      'Final AI Creative Capstone Project'
    ],
    trending: true
  },
  {
    id: 'c8',
    title: 'HTML & CSS Mastery',
    description: 'Master raw HTML5, semantic grids, elegant layouts, responsive flexbox margins, CSS transforms, custom properties, and modern animations.',
    category: 'Development',
    instructor: 'Marcus Aurel',
    instructorTitle: 'Senior UX Architect',
    instructorImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80',
    price: 39,
    originalPrice: 149,
    rating: 4.9,
    reviewCount: 852,
    duration: '20h 30m',
    lectures: 65,
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80',
    enrolledStudents: 4300,
    syllabus: [
      'HTML5 Semantic Structure & Core Rules',
      'Box Model, Padding, and Margin Hierarchy',
      'CSS Flexbox and Grid Complete Layout Systems',
      'Transitions, Transforms & Smooth Keyframe Animations',
      'Creating Pixel-Perfect Responsive Cards'
    ],
    trending: true
  },
  {
    id: 'c9',
    title: 'JavaScript for Beginners',
    description: 'The definitive handbook to JavaScript fundamentals: variables, arrays, hooks, ES6 arrow functions, promises, async/await, and DOM manipulation.',
    category: 'Development',
    instructor: 'Dr. John Harrison',
    instructorTitle: 'Core Engineer & Educator',
    instructorImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    price: 49,
    originalPrice: 249,
    rating: 4.7,
    reviewCount: 915,
    duration: '28h 15m',
    lectures: 88,
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=600&q=80',
    enrolledStudents: 5900,
    syllabus: [
      'Variables, Primitive Declarations & Type Casts',
      'Arrays, Array-methods (.map, .filter, .reduce)',
      'Functions, Arrow Syntaxes & Execution Scope',
      'Async Javascript: Promises, Event Loop, and Async-Await',
      'DOM API, Event Listeners and LocalStorage Storage'
    ]
  },
  {
    id: 'c10',
    title: 'Responsive Web Design',
    description: 'A comprehensive visual system guide targeting responsive breaks, mobile-first utilities, adaptive imagery, typography scale setups, and multi-device designs.',
    category: 'Design & Graphics',
    instructor: 'Marcus Aurel',
    instructorTitle: 'Senior UX Architect',
    instructorImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80',
    price: 59,
    originalPrice: 199,
    rating: 4.8,
    reviewCount: 421,
    duration: '18h 45m',
    lectures: 52,
    level: 'All Levels',
    image: 'https://images.unsplash.com/photo-1561070791-26c113006238?auto=format&fit=crop&w=600&q=80',
    enrolledStudents: 2980,
    syllabus: [
      'Mobile-First vs Desktop-First Viewport Paradigms',
      'Tailwind CSS Responsive Prefixes (sm:, md:, lg:, xl:)',
      'Designing Adaptive Navigation Blocks and Drawers',
      'Dynamic Typography Scaling & Viewport Units',
      'Building a Fluid Bento-grid Dashboard'
    ]
  },
  {
    id: 'c11',
    title: 'Bootstrap Complete Course',
    description: 'Master Bootstrap 5 utility classes, components, theme customized variables, responsive layouts, forms, tables, and quick landing architectures.',
    category: 'Development',
    instructor: 'Dr. John Harrison',
    instructorTitle: 'Core Engineer & Educator',
    instructorImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    price: 29,
    originalPrice: 129,
    rating: 4.6,
    reviewCount: 234,
    duration: '14h 20m',
    lectures: 38,
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=500&q=80',
    enrolledStudents: 1540,
    syllabus: [
      'Installing Bootstrap via CDN & npm',
      'Grid Container, Row, Col Breakpoint Dynamics',
      'Built-in Components: Modals, Carousels, Collapse',
      'Utility Helpers: Spacing, Colors, Flexbox',
      'Sass Customization & Custom Variables compile'
    ]
  },
  {
    id: 'c12',
    title: 'React JS Course',
    description: 'Learn modern React 19 functional components, hooks, custom state hooks, local persistence, routing, and APIs consumption to create production portals.',
    category: 'Development',
    instructor: 'Dr. John Harrison',
    instructorTitle: 'Core Engineer & Educator',
    instructorImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    price: 89,
    originalPrice: 399,
    rating: 4.9,
    reviewCount: 1104,
    duration: '35h 10m',
    lectures: 112,
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80',
    enrolledStudents: 8120,
    syllabus: [
      'JSX Syntax & Virtual DOM mechanics',
      'Components state & Prop passing architectures',
      'React Hooks: useState, useEffect, useRef, useMemo',
      'Handling Forms, validation states & API calls',
      'Custom Hooks development & App-wide Redux-alternatives'
    ],
    trending: true
  }
];

export const productsData: Product[] = [
  {
    id: 'p1',
    title: 'Premium Frontend UI Kit (React + Tailwind)',
    description: 'A repository of 50+ beautiful, highly responsive, copy-paste React components designed specifically for digital businesses, SaaS products, and portals.',
    category: 'Developer Tools',
    price: 29,
    originalPrice: 99,
    rating: 4.9,
    reviewsCount: 184,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=500&q=80',
    isDigital: true,
    tags: ['React', 'Tailwind', 'UI Kit', 'Component Suite']
  },
  {
    id: 'p2',
    title: 'E-Book: The Complete Software Architect Codex',
    description: 'An ultimate guide detailing scalable systems, database partitioning, REST & gRPC API blueprints, domain driven designs, and cloud engineering principles.',
    category: 'E-Books',
    price: 14,
    originalPrice: 35,
    rating: 4.8,
    reviewsCount: 326,
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=500&q=80',
    isDigital: true,
    tags: ['System Design', 'E-Book', 'Career Growth', 'Software Architecture']
  },
  {
    id: 'p3',
    title: 'Production Ready Express + PostgreSQL Boilerplate',
    description: 'A pre-configured back-end template using TypeScript, containing secure JWT authentication, migrations using drizzle, validated endpoint guards, and API testing.',
    category: 'Developer Tools',
    price: 39,
    originalPrice: 149,
    rating: 4.7,
    reviewsCount: 92,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=500&q=80',
    isDigital: true,
    tags: ['Back-end', 'Boilerplate', 'Express', 'Postgress']
  },
  {
    id: 'p4',
    title: 'UI/UX Interactive Figma Resource Library',
    description: 'The exact workspace file with over 2000+ variants of accessible custom buttons, navigation, grids, typography presets, inputs, dynamic widgets, and themes.',
    category: 'Design Assets',
    price: 19,
    originalPrice: 59,
    rating: 4.9,
    reviewsCount: 215,
    image: 'https://images.unsplash.com/photo-1581291518655-9523c932dedf?auto=format&fit=crop&w=500&q=80',
    isDigital: true,
    tags: ['Figma', 'UI/UX', 'Design Tokens', 'Resource Library']
  },
  {
    id: 'p5',
    title: 'SaaS Business Financial Modeling Sheet Template',
    description: 'A complex, pre-formatted, highly dynamic Google Sheet / Excel template simulating 5-year growth, MRR projection formulas, churn ratios, and marketing CAC margins.',
    category: 'Business Tools',
    price: 9,
    originalPrice: 49,
    rating: 4.6,
    reviewsCount: 78,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80',
    isDigital: true,
    tags: ['SaaS Template', 'Finance Sheet', 'Venture Projection', 'Metrics Calculator']
  },
  {
    id: 'p6',
    title: 'Clean Minimalist Portfolio Starter Kit (Astro)',
    description: 'An elegant portfolio code template built with Astro, styled with Tailwind CSS, pre-optimized for SEO score 100, custom image loading, and markdown logs support.',
    category: 'Developer Tools',
    price: 24,
    originalPrice: 79,
    rating: 4.8,
    reviewsCount: 63,
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=500&q=80',
    isDigital: true,
    tags: ['Astro', 'Portfolio', 'Modern Web', 'Aesthetic Code']
  }
];

export const blogPostsData: BlogPost[] = [
  {
    id: 'b1',
    title: 'The Rise of React 19: Transitions, Actions & Server Features Explained',
    excerpt: 'Deep-dive into the exciting new features introduced in React 19. Learn how compiler optimization, useActionState, dynamic page metadata, and Server Actions simplify web layouts.',
    category: 'Technology',
    author: 'Dr. John Harrison',
    authorImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    date: 'June 18, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1000&q=80',
    content: `React 19 has officially changed the landscape of frontend engineering. In this deep dive, we explore why these updates matter and how to immediately implement them in your codebases.

### 1. The React Compiler (React Forget)
For years, developers have manually styled component updates using memo, useMemo, and useCallback. React 19 introduces automatic memoization. Under the hood, the compiler analyzes our components and generates optimal dependency chains, ensuring components only render when actual state changes happen.

### 2. Form Actions and UseActionState
Handling form states, loadings, and error boundaries has historically required multiple useStates. With React 18, you had to manage "pending" states manually. React 19 introduces the first-class Concept of "Actions":
* Passing functions directly to the Form action attribute
* Tracking submissons state via useActionState Hook
* Loading indicators and error feedback handled natively by React bounds!

### 3. Native Page Metadata
No more nesting third-party helmet wrappers. You can declare high-fidelity Title, Meta, and Link tags directly in JSX components:
\`\`\`tsx
export function ProductPage({ info }) {
  return (
    <div>
      <title>{info.title}</title>
      <meta name="description" content={info.desc} />
      <h1 className="text-3xl font-bold">{info.title}</h1>
    </div>
  );
}
\`\`\`
This enhances SEO loading behavior out of the box and avoids client-to-server metadata synchronization lags.`
  },
  {
    id: 'b2',
    title: 'The Best Learning Guidelines for Career Pivoters in 2026',
    excerpt: 'Want to pivot into software or database engineering from a non-technical field? Here is a structured step-by-step guideline detailing typography setups, practical repositories, and workspace habits that guarantee success.',
    category: 'Education',
    author: 'Aparna Nair',
    authorImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    date: 'June 10, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1000&q=80',
    content: `Starting a career transition toward software products or data sciences can feel deeply overwhelming. Over our classrooms in Dharmapuri and our online courses, we have coached over 10,000+ career transitioners. Here is their collective roadmap.

### Phase 1: Mindset & Fundamentals
Do not rush to memorize complex APIs or machine learning structures. Mastery is pure cumulative habit:
* Focus on computational thinking (basic sorting, code logic flow).
* Master modern CSS layout patterns — grid, flex, padding, and font hierarchies.
* Code for 1 hour every single day. Consistency builds semantic recall.

### Phase 2: Build Real Projects, Never Mock
Tutorial hell is a trap. Build real tools that solve daily issues:
* A real-time todo list that saves records locally.
* A client-side inventory log with responsive layout features.
* A single-page site with contact validation.

### Phase 3: System Design & Collaboration
Learn how systems communicate, how APIs format JSON packets, and how to branch software versions with Git. Understanding why a database behaves in a specific way is what secures real engineering roles.`
  },
  {
    id: 'b3',
    title: 'Designing Beautiful High-Contrast User Interfaces',
    excerpt: 'Aesthetically pleasing visual interfaces do not happen by accident. Learn how to establish typographic scale, pairing spaces, and gorgeous functional color palettes using Tailwind presets.',
    category: 'Design',
    author: 'Marcus Aurel',
    authorImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80',
    date: 'May 28, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80',
    content: `Great designs are characterized by intentional spacing variations and humble, clear typography. Let's break down the rules used in modern professional user interfaces.

### 1. Visual Hierarchy
The size of your elements should immediately state their relative importance. If all font sizes are similar, the layout looks confusing:
* **Display titles** should be very bold, tight-tracking, and significantly larger than details.
* **Secondary labels** should be elegant, sometimes styled with monospace fonts like JetBrains Mono for data displays.
* **Regular copy** should have ample line-height for seamless scanning.

### 2. Negative Space is a Feature
Do not squeeze components together. Padding provides breathing room:
* Use a consistent scale (like Tailwind's multifold rem values).
* Vary padding to create visual rhythm — card titles need different space margins compared to input fields.
* Let the background show. Soft slate backgrounds make clean, light cards float, creating sense of depth.`
  }
];

export const instructorsData: Instructor[] = [
  {
    id: 'i1',
    name: 'Dr. John Harrison',
    role: 'Lead Development Architect & Systems Educator',
    bio: 'Former principal architect at visual telemetry systems. John spends his time teaching React, typescript frameworks, Docker container configurations, and modern web architectures in a style focused on core values and zero-fluff coding.',
    rating: 4.9,
    reviewCount: 1680,
    coursesCount: 8,
    studentsCount: 22400,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    socialLinks: {
      facebook: 'https://facebook.com/coursezy',
      linkedin: 'https://linkedin.com/company/coursezy',
      whatsapp: 'https://wa.me/919999999999',
      youtube: 'https://youtube.com/coursezy'
    }
  },
  {
    id: 'i2',
    name: 'Aparna Nair',
    role: 'Data Scientist & Machine Learning Pioneer',
    bio: 'With over 12 years of core industry experience designing predictive models, Aparna makes mathematical data analysis accessible. Her research focuses on visual data rendering pipeline efficiencies.',
    rating: 4.8,
    reviewCount: 1120,
    coursesCount: 5,
    studentsCount: 14800,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
    socialLinks: {
      linkedin: 'https://linkedin.com/company/coursezy',
      whatsapp: 'https://wa.me/919999999999',
      youtube: 'https://youtube.com/coursezy'
    }
  },
  {
    id: 'i3',
    name: 'Marcus Aurel',
    role: 'UX Designer & Visual Systems Specialist',
    bio: 'Marcus has crafted layouts and design systems for major SaaS platforms. He balances bold Swiss styling with responsive design tokens. He believes design is a technical science focusing on user telemetry.',
    rating: 4.7,
    reviewCount: 850,
    coursesCount: 4,
    studentsCount: 9200,
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80',
    socialLinks: {
      facebook: 'https://facebook.com/coursezy',
      linkedin: 'https://linkedin.com/company/coursezy'
    }
  },
  {
    id: 'i4',
    name: 'Lisa Cole',
    role: 'Marketing funnels architect & Product Strategist',
    bio: 'Lisa trains companies to turn traffic into paying users. She teaches conversion optimization, content flywheels, SEO automation mechanisms, and email cycle metrics.',
    rating: 4.6,
    reviewCount: 410,
    coursesCount: 3,
    studentsCount: 6500,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    socialLinks: {
      linkedin: 'https://linkedin.com/company/coursezy',
      whatsapp: 'https://wa.me/919999999999'
    }
  }
];
