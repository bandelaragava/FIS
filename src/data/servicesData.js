// servicesData.js — Centralized content for all Service Detail pages

const servicesData = {
  'it-consulting': {
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    title: 'IT Consulting',
    subtitle: 'Enterprise Architecture',
    level: 'L3 STRATEGIC',
    color: '#ffa500',
    tagline: 'Your trusted partner for cutting-edge Enterprise Architecture',
    desc: 'Our Enterprise Architecture helps businesses automate processes, enhance decision-making, and unlock new growth opportunities through intelligent innovation.',
    introParagraphs: [
      "At Future Invo Solutions, we help organizations design scalable enterprise architectures that drive growth and innovation in a rapidly evolving digital landscape. Our approach goes beyond system design—it transforms how businesses make decisions, align initiatives, and deliver lasting value to their customers.",
      "Enterprise architecture has the power to transform businesses by turning insights into scalable system designs. With our expertise, organizations can build architectures that optimize operations, anticipate market trends, and support sustainable growth. From aligning technology initiatives with long-term objectives to implementing robust, adaptable solutions, we provide guidance that is precise, reliable, and tailored to each business's unique needs.",
      "What sets our enterprise architecture services apart is the perfect blend of vision and practicality. We ensure every system design and framework we create is actionable, scalable, and aligned with real-world business needs. Across industries—from healthcare and finance to retail and logistics—our guidance empowers organizations to achieve sustainable growth and maintain a competitive edge."
    ],
    benefits: [
      { title: 'Aligning Systems', desc: 'Modernization: IT infrastructures grow with your business needs.' },
      { title: 'Optimizing Systems', desc: 'Streamline processes, reduce complexity and improve productivity.' },
      { title: 'Designing Clear Frameworks', desc: 'Upgraded systems enable better decision-making through real-time analytics.' },
      { title: 'Designing Enterprise Architecture', desc: 'Modern technologies keep organizations ahead in rapidly evolving markets.' },
      { title: 'Optimizing Processes', desc: 'Long-term strategies ensure technology investments deliver lasting value.' },
    ],
    expertiseList: [
      'Strategy & Roadmap Consulting',
      'Enterprise Architecture',
      'Technology Modernization',
      'IT Infrastructure Consult',
      'Digital Transformation Advisor',
    ],
    faqs: [
      { q: 'How can Enterprise Architecture strategies Benefit My Business?', a: 'Enterprise architecture aligns your IT systems with business goals, streamlining operations, reducing costs, and enabling smarter decision-making for long-term growth.' },
      { q: 'Do You Offer Remote or On-Site Enterprise Architecture Strategies?', a: 'Yes, we offer both remote and on-site consulting models, tailored to your project complexity and team preference.' },
      { q: 'What Do Enterprise Architecture Solutions Involve?', a: 'They involve system analysis, framework design, technology roadmapping, infrastructure modernization, and ongoing governance to align IT with business strategy.' },
      { q: 'Can Future Invo Enterprise Architecture Assist With Cybersecurity Consulting?', a: 'Absolutely. Our EA practice integrates security-first principles, including zero-trust models and compliance frameworks within every architecture design.' },
      { q: 'What Industries Does Future Invo Enterprise Architecture Specialize In?', a: 'We serve healthcare, finance, retail, logistics, education, and more—bringing industry-specific knowledge to every engagement.' },
    ]
  },

  'web-engineering': {
    image: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=800&q=80',
    title: 'Web Engineering',
    subtitle: 'High-Performance Web Platforms',
    level: 'HIGH PERFORMANCE',
    color: '#7000ff',
    tagline: 'Your trusted partner for cutting-edge Web Engineering',
    desc: 'We engineer web platforms that define modern interactions, focusing on millisecond-level responsiveness and massive scale.',
    introParagraphs: [
      "At Future Invo Solutions, we build web solutions that go far beyond beautiful interfaces. Our Web Engineering practice constructs the backbone of modern digital commerce—fast, scalable, and architected for relentless growth.",
      "With deep expertise in React, Next.js, and edge computing paradigms, we build web applications that feel instantaneous. We obsess over core web vitals, time-to-first-byte, and fluid rendering to deliver app-like experiences capable of handling millions of concurrent connections.",
      "From SaaS dashboards and e-commerce platforms to enterprise portals and content hubs, we deliver web engineering solutions precisely tailored to your audience's expectations and your business's scale requirements."
    ],
    benefits: [
      { title: 'Lightning-Fast Performance', desc: 'Sub-second page loads globally through optimized bundles, CDN caching, and edge rendering.' },
      { title: 'Scalable Architecture', desc: 'Micro-frontend and serverless patterns that scale horizontally without engineering overhead.' },
      { title: 'SEO-Ready Foundations', desc: 'Server-side rendering and static generation strategies that maximize search engine visibility.' },
      { title: 'Cross-Device Excellence', desc: 'Flawless, pixel-perfect experiences across every screen size and browser.' },
      { title: 'Accelerated Delivery', desc: 'Streamlined CI/CD pipelines that push features to production reliably and rapidly.' },
    ],
    expertiseList: [
      'React & Next.js Architecture',
      'Progressive Web Applications',
      'Headless CMS Integration',
      'Performance Optimization',
      'API & Third-Party Integration',
    ],
    faqs: [
      { q: 'What frameworks does Future Invo use for Web Engineering?', a: 'We primarily work with React, Next.js, and Vue.js, selecting the right technology based on your performance and scalability requirements.' },
      { q: 'Can you rebuild our existing website without downtime?', a: 'Yes. We use a phased migration approach with blue-green deployments to ensure zero-downtime transitions.' },
      { q: 'How do you ensure website security?', a: 'We bake in security from day one: HTTPS everywhere, CSP headers, dependency audits, and regular pen testing.' },
      { q: 'Do you offer ongoing maintenance after launch?', a: 'Absolutely. We offer flexible maintenance retainers covering performance monitoring, updates, and feature additions.' },
      { q: 'How long does a typical web project take?', a: 'A standard web platform typically takes 6–12 weeks depending on complexity, integrations, and content requirements.' },
    ]
  },

  'ux-ui-architecture': {
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    title: 'UX/UI Architecture',
    subtitle: 'Precision Design Systems',
    level: 'PRECISION DESIGN',
    color: '#ff00ff',
    tagline: 'Your trusted partner for cutting-edge UX/UI Architecture',
    desc: 'Crafting digital experiences that bridge the gap between human intuition and technical logic through intelligent design systems.',
    introParagraphs: [
      "At Future Invo Solutions, we believe that design is not what it looks like—it's how it works. Our UX/UI Architecture practice blends behavioral psychology, spatial mapping, and fluid motion design to create experiences that feel extraordinary.",
      "We build robust, token-driven design systems that ensure consistency and coherence across complex enterprise portals, consumer apps, and rich product experiences. Every interaction is deliberate—engineered to guide users effortlessly toward their goals.",
      "From discovery and wireframing to prototyping and high-fidelity handoff, our process is collaborative and research-driven. We don't just create beautiful screens—we architect the logic behind the delight, ensuring your product commands authority and retains users."
    ],
    benefits: [
      { title: 'Higher User Retention', desc: 'Intuitive flows and delightful micro-interactions keep users engaged and coming back.' },
      { title: 'Reduced Support Costs', desc: 'Clear, self-explanatory UI reduces friction and minimizes customer support overhead.' },
      { title: 'Consistent Brand Identity', desc: 'Unified design systems ensure your brand is expressed consistently across every touchpoint.' },
      { title: 'Faster Development Cycles', desc: 'Developer-ready component libraries accelerate front-end implementation significantly.' },
      { title: 'Data-Informed Decisions', desc: 'Usability testing and analytics inform every design iteration for measurable improvement.' },
    ],
    expertiseList: [
      'User Research & Journey Mapping',
      'Wireframing & Prototyping',
      'Design System Development',
      'Motion Design & Micro-Interactions',
      'Accessibility-First Design (WCAG)',
    ],
    faqs: [
      { q: 'What is the difference between UX and UI?', a: 'UX (User Experience) focuses on the overall feel and usability, while UI (User Interface) deals with the visual presentation. We deliver both in a unified, cohesive practice.' },
      { q: 'What tools does your design team use?', a: 'We work primarily in Figma for design and prototyping, supplemented by tools like Maze for usability testing and Lottie for motion assets.' },
      { q: 'Can you redesign our existing product?', a: 'Yes. We start with a comprehensive UX audit before proposing a redesign strategy that minimizes disruption to your current users.' },
      { q: 'Do you create design systems for developer handoff?', a: 'Absolutely. Our design systems are component-driven with detailed specs, tokens, and guidelines ready for engineering teams.' },
      { q: 'How do you involve users in the design process?', a: 'We conduct user interviews, surveys, A/B tests, and usability sessions throughout the project lifecycle to ensure decisions are grounded in real user behaviour.' },
    ]
  },

  'mobile-ecosystems': {
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
    title: 'Mobile Ecosystems',
    subtitle: 'Cross-Platform Mobile Applications',
    level: 'CROSS PLATFORM',
    color: '#0070ff',
    tagline: 'Your trusted partner for cutting-edge Mobile Ecosystems',
    desc: 'Developing high-fidelity iOS and Android applications that combine native performance with unified, maintainable codebases.',
    introParagraphs: [
      "At Future Invo Solutions, we engineer mobile experiences that feel deeply native to each platform while sharing a unified, maintainable core. The mobile device is the primary interface for human-digital interaction, and we take that responsibility seriously.",
      "Using React Native, Flutter, and platform-native Swift/Kotlin when maximum hardware access is required, we build apps that deliver 120fps scroll performance, seamless offline synchronization, and tight OS integrations like push notifications, biometrics, and location services.",
      "From consumer-facing super apps to enterprise field-service tools, our mobile engineering practice covers the full product lifecycle—from ideation and architecture through App Store submission, post-launch analytics, and iterative feature releases."
    ],
    benefits: [
      { title: 'Single Codebase, Dual Platforms', desc: 'Deploy to both iOS and Android with a unified codebase, dramatically reducing development and maintenance costs.' },
      { title: 'Native-Level Performance', desc: 'Hardware-accelerated rendering and intelligent memory management ensure silky-smooth 60/120fps experiences.' },
      { title: 'Robust Offline Capability', desc: 'Local-first architecture with intelligent sync keeps your app functional even in low-connectivity environments.' },
      { title: 'Deep OS Integration', desc: 'Leverage full platform capabilities including cameras, biometrics, GPS, payments, and push notifications.' },
      { title: 'Continuous Delivery', desc: 'OTA updates and phased rollouts mean you can ship improvements to users without full store re-submissions.' },
    ],
    expertiseList: [
      'React Native Development',
      'Flutter Application Engineering',
      'Native iOS (Swift/SwiftUI)',
      'Native Android (Kotlin/Jetpack)',
      'Mobile Backend & API Design',
    ],
    faqs: [
      { q: 'Should I build a native or cross-platform app?', a: 'It depends on your requirements. For most businesses, React Native or Flutter delivers near-native performance at a fraction of the cost. We guide you through the decision.' },
      { q: 'How long does mobile app development take?', a: 'A typical MVP takes 8–14 weeks. Complex apps with real-time features, integrations, and custom UI can take 4–6 months.' },
      { q: 'Do you handle App Store and Play Store submissions?', a: 'Yes. We manage the entire submission process, including compliance reviews, metadata, screenshots, and rejection resolution.' },
      { q: 'Can you integrate third-party services like payment gateways?', a: 'Absolutely. We have deep experience integrating Stripe, Razorpay, Firebase, Twilio, and dozens of other third-party services.' },
      { q: 'Do you provide post-launch support?', a: 'Yes, we offer maintenance plans that cover bug fixes, OS compatibility updates, performance monitoring, and feature additions.' },
    ]
  },

  'performance-marketing': {
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    title: 'Performance Marketing',
    subtitle: 'Data-Driven Growth Campaigns',
    level: 'DATA DRIVEN',
    color: '#00f2ff',
    tagline: 'Your trusted partner for cutting-edge Performance Marketing',
    desc: 'Algorithm-optimized campaigns designed to maximize ROI through deep technical SEO, behavioral analytics, and precision ad targeting.',
    introParagraphs: [
      "At Future Invo Solutions, we treat marketing as a data science discipline. Every campaign is engineered, not guessed. By leveraging algorithmic bidding, multidimensional cohort analysis, and precision funnel optimization, we ensure every rupee you spend works measurably harder.",
      "Our performance marketing team combines creative excellence with technical rigour—building campaigns across SEO, paid search, social media, and programmatic channels that consistently outperform industry benchmarks. We deploy split-tests at scale to discover the exact combination of copy, creative, and targeting that maximizes Lifetime Value.",
      "From early-stage startups acquiring their first thousand users to established enterprises scaling into new markets, our strategies are always grounded in attribution data, conversion logic, and sustainable growth economics."
    ],
    benefits: [
      { title: 'Measurable ROI', desc: 'Every campaign is tied to clear KPIs with mathematically verifiable return on ad spend.' },
      { title: 'Hyper-Targeted Acquisition', desc: 'Precision audience segmentation ensures your message reaches your highest-intent buyers.' },
      { title: 'Lower Customer Acquisition Cost', desc: 'Continuous optimization and automation consistently drive down your CAC over time.' },
      { title: 'Full-Funnel Visibility', desc: 'Unified attribution dashboards show exactly where every conversion comes from.' },
      { title: 'Automated Campaign Scaling', desc: 'Proven campaigns are scaled systematically, capturing more market share without proportional cost increases.' },
    ],
    expertiseList: [
      'Search Engine Marketing (SEM/PPC)',
      'Technical SEO & Content Strategy',
      'Social Media Advertising',
      'Conversion Rate Optimization (CRO)',
      'Marketing Analytics & Attribution',
    ],
    faqs: [
      { q: 'How quickly can I see results from performance marketing?', a: 'Paid campaigns can show results within days. SEO and organic strategies typically show meaningful traction within 3–6 months.' },
      { q: 'What channels do you specialize in?', a: 'We cover Google Ads, Meta, LinkedIn, programmatic, SEO, and email marketing—selecting and prioritizing channels based on your audience.' },
      { q: 'What budget do I need to get started?', a: 'We work with budgets across all sizes, but typically recommend a minimum ad spend of ₹50,000/month to generate statistically significant learning data.' },
      { q: 'How do you measure campaign success?', a: 'We track ROAS, CPA, LTV, and conversion rates across every touchpoint, providing transparent weekly and monthly reporting.' },
      { q: 'Can you manage our existing paid campaigns?', a: 'Yes. We conduct a full audit of your current campaigns before proposing an optimized strategy for handover.' },
    ]
  },

  'synthetic-intelligence': {
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad0e5?w=800&q=80',
    title: 'Synthetic Intelligence',
    subtitle: 'AI & Machine Learning Integration',
    level: 'NEURAL LOGIC',
    color: '#ff00ff',
    tagline: 'Your trusted partner for cutting-edge Synthetic Intelligence',
    desc: 'Integrating advanced LLMs and predictive neural networks into your workflows to automate complex decision-making and unlock new capabilities.',
    introParagraphs: [
      "At Future Invo Solutions, we make Artificial Intelligence operational—not theoretical. Our Synthetic Intelligence practice fine-tunes specialized Large Language Models and deploys machine vision systems custom-trained on your proprietary data to solve real business problems.",
      "We integrate these neural capabilities into your existing software infrastructure, enabling your organization to automate intricate, cognitive-heavy processes previously requiring massive human capital. From intelligent document processing and predictive analytics to autonomous customer triage and generative content systems, we turn AI potential into competitive advantage.",
      "Our approach is pragmatic and outcome-focused. We don't recommend AI for its own sake—we identify the specific processes where intelligent automation delivers measurable ROI, then architect and deploy solutions that run reliably in production environments."
    ],
    benefits: [
      { title: 'Automated Complex Workflows', desc: 'Eliminate repetitive cognitive tasks with intelligent agents that learn and adapt over time.' },
      { title: 'Faster Decision-Making', desc: 'Real-time predictive models surface insights at speed that human analysis cannot match.' },
      { title: 'Reduced Operational Costs', desc: 'AI automation drives significant cost reduction in data processing, customer service, and quality control.' },
      { title: 'Custom Model Training', desc: 'Models fine-tuned on your proprietary data deliver precision that generic AI solutions cannot achieve.' },
      { title: 'New Revenue Opportunities', desc: 'AI-powered features and products open entirely new business models and revenue streams.' },
    ],
    expertiseList: [
      'Large Language Model Fine-Tuning',
      'Natural Language Processing (NLP)',
      'Computer Vision Systems',
      'Predictive Analytics & Forecasting',
      'AI Integration & MLOps',
    ],
    faqs: [
      { q: 'Do I need large amounts of data to use AI?', a: 'Not necessarily. We assess your data situation and recommend approaches—including transfer learning and synthetic data—that work at your scale.' },
      { q: 'How do you ensure AI model accuracy?', a: 'We use rigorous validation datasets, continuous monitoring, and human-in-the-loop review processes to maintain model quality over time.' },
      { q: 'Can you integrate AI into our existing software?', a: 'Yes. We specialize in API-driven AI integration, connecting models to your ERP, CRM, or custom platforms without full system rewrites.' },
      { q: 'How do you handle data privacy in AI projects?', a: 'We implement strict data anonymization, on-premise deployment options, and comply with GDPR and India\'s DPDP Act requirements.' },
      { q: 'What industries benefit most from AI integration?', a: 'Healthcare, finance, retail, logistics, and manufacturing see the strongest AI ROI, but our solutions span virtually every sector.' },
    ]
  },

  'enterprise-software': {
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    title: 'Enterprise Software',
    subtitle: 'Bespoke Business Systems',
    level: 'L5 OPERATIONS',
    color: '#7000ff',
    tagline: 'Your trusted partner for cutting-edge Enterprise Software',
    desc: 'Architecting tailored ERPs, CRMs, and operational ecosystems designed to solve specific, high-scale business challenges that off-the-shelf tools cannot address.',
    introParagraphs: [
      "At Future Invo Solutions, we believe off-the-shelf software always compromises. When your business processes are complex, unique, or operating at significant scale, generic platforms create technical debt, limit flexibility, and burden your teams with workarounds.",
      "We architect bespoke enterprise resource planning systems, custom CRMs, automated workflow engines, and deeply integrated operational dashboards, purpose-built for your exact processes and data model. Our solutions eliminate internal fragmentation, creating a single source of truth for your entire organization.",
      "From HR management platforms and supply chain systems to compliance dashboards and custom billing engines, our enterprise software practice covers the full spectrum of internal business tooling—always built for performance, security, and longevity."
    ],
    benefits: [
      { title: 'Complete Operational Visibility', desc: 'Unified dashboards give every stakeholder a real-time view of the metrics that matter most to them.' },
      { title: 'Eliminated Vendor Lock-In', desc: 'You own the codebase. No SaaS subscriptions, no feature gating, no forced upgrades.' },
      { title: 'Workflow Automation', desc: 'Automate multi-step approval chains, notifications, reporting, and data entry that drain your team\'s attention.' },
      { title: 'Seamless Integrations', desc: 'Connect to third-party tools, legacy systems, and government APIs through custom integration layers.' },
      { title: 'Scalable Architecture', desc: 'Systems built on microservices and cloud-native infrastructure that scale as your operations grow.' },
    ],
    expertiseList: [
      'Custom ERP Development',
      'CRM & Sales Automation',
      'HR & Payroll Systems',
      'Workflow & BPM Engineering',
      'Legacy System Modernization',
    ],
    faqs: [
      { q: 'How do you approach custom software development?', a: 'We follow an agile discovery process: requirements workshops, architecture design, iterative sprints with regular demos, and phased delivery.' },
      { q: 'How long does enterprise software development take?', a: 'A core system typically takes 3–8 months depending on scope. We deliver in phases so you see working software early.' },
      { q: 'Can you integrate custom software with our existing tools?', a: 'Yes. We build custom integration layers for ERPs, CRMs, accounting software, payment gateways, and government portals.' },
      { q: 'What happens to our data during migration?', a: 'We run comprehensive data migration scripts with validation checkpoints and maintain rollback capability throughout.' },
      { q: 'Do you provide user training after delivery?', a: 'Yes. We provide user documentation, video training, and live admin onboarding sessions as part of every delivery.' },
    ]
  },

  'cloud-orchestration': {
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80',
    title: 'Cloud Orchestration',
    subtitle: 'Cloud-Native Infrastructure Design',
    level: 'CLOUD NATIVE',
    color: '#00f2ff',
    tagline: 'Your trusted partner for cutting-edge Cloud Orchestration',
    desc: 'Design and deployment of self-healing, auto-scaling cloud infrastructures on AWS, Azure, and Google Cloud that guarantee uptime and optimize cost.',
    introParagraphs: [
      "At Future Invo Solutions, we architect the cloud infrastructure that powers modern digital businesses. Using Kubernetes, Terraform, and advanced CI/CD pipelines, we orchestrate infrastructure-as-code environments that scale seamlessly during traffic spikes and self-heal during critical failures.",
      "Our cloud engineering team brings deep expertise across AWS, Microsoft Azure, and Google Cloud Platform—enabling us to recommend architectures that are both technically optimal and commercially efficient. We move organizations from rigid, over-provisioned servers to fluid, cloud-native architectures that deliver measurable cost and performance advantages.",
      "Whether you're migrating a decade-old monolith, building a greenfield cloud-native platform, or optimizing an existing multi-cloud setup, our orchestration practice ensures your infrastructure is always a competitive asset, not a liability."
    ],
    benefits: [
      { title: 'Zero-Downtime Architecture', desc: 'Multi-AZ deployments and active-active configurations eliminate single points of failure across your entire stack.' },
      { title: 'Cost Optimization', desc: 'Right-sizing, spot instances, and reserved capacity planning consistently reduce cloud bills by 30–50%.' },
      { title: 'Elastic Scalability', desc: 'Auto-scaling groups and serverless functions handle any traffic spike without manual intervention.' },
      { title: 'Security & Compliance', desc: 'Cloud-native security controls, encrypted data stores, and compliance automation for GDPR, ISO, and SOC 2.' },
      { title: 'Full Infrastructure Observability', desc: 'Comprehensive logging, tracing, and alerting ensure your team knows about issues before your users do.' },
    ],
    expertiseList: [
      'AWS, Azure & GCP Architecture',
      'Kubernetes & Container Orchestration',
      'Infrastructure as Code (Terraform)',
      'DevOps & CI/CD Pipeline Design',
      'Site Reliability Engineering (SRE)',
    ],
    faqs: [
      { q: 'Should we use AWS, Azure, or GCP?', a: 'It depends on your existing stack, team expertise, and workload characteristics. We provide an objective comparison and recommendation during discovery.' },
      { q: 'Can you migrate our on-premise systems to the cloud?', a: 'Yes. We conduct a thorough migration assessment and execute phased migrations with zero-downtime strategies.' },
      { q: 'How do you handle cloud security?', a: 'We implement IAM with least-privilege principles, network isolation, WAF, DDoS protection, and automated compliance scanning.' },
      { q: 'What is Infrastructure as Code and why does it matter?', a: 'IaC means your infrastructure is defined in version-controlled code, enabling repeatable, auditable, and automated deployments.' },
      { q: 'How quickly can you reduce our cloud costs?', a: 'Typically within 30 days of conducting a cloud cost audit, we implement savings measures that reflect in the next billing cycle.' },
    ]
  },

  'cybersecurity-guard': {
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
    title: 'Cybersecurity Guard',
    subtitle: 'Zero-Trust Security Engineering',
    level: 'ZERO TRUST',
    color: '#ffa500',
    tagline: 'Your trusted partner for cutting-edge Cybersecurity',
    desc: 'Deploying advanced defensive perimeters and zero-trust identity management to safeguard your digital assets against modern threats.',
    introParagraphs: [
      "At Future Invo Solutions, we believe security cannot be an afterthought. Our Cybersecurity Guard practice implements multi-layered, zero-trust defense architectures that assume breach by default—because in today's threat landscape, it's not a question of if, but when.",
      "From comprehensive penetration testing and intelligent endpoint detection to smart-contract audits and quantum-resistant encryption protocols, our cybersecurity division hardens your entire digital ecosystem against both known attack vectors and zero-day threats.",
      "We work with organizations across regulated industries—banking, healthcare, government, and critical infrastructure—helping them meet compliance requirements for ISO 27001, SOC 2, GDPR, PCI DSS, and India's DPDP Act, while building genuine operational resilience."
    ],
    benefits: [
      { title: 'Proactive Threat Detection', desc: 'AI-powered monitoring surfaces anomalies in real time, enabling response before incidents escalate.' },
      { title: 'Regulatory Compliance', desc: 'Structured compliance frameworks covering ISO 27001, SOC 2, GDPR, PCI DSS, and DPDP Act requirements.' },
      { title: 'Zero-Trust Architecture', desc: 'Every user, device, and connection is verified—eliminating implicit trust that attackers exploit.' },
      { title: 'Incident Response Readiness', desc: 'Documented playbooks and trained teams ensure rapid, coordinated response when incidents occur.' },
      { title: 'Data Protection', desc: 'End-to-end encryption, DLP policies, and secure key management protect your most sensitive assets.' },
    ],
    expertiseList: [
      'Penetration Testing & Red Teaming',
      'Security Architecture Review',
      'Identity & Access Management (IAM)',
      'Endpoint Detection & Response (EDR)',
      'Compliance Automation & Auditing',
    ],
    faqs: [
      { q: 'How often should we conduct penetration testing?', a: 'At minimum annually, and after any significant infrastructure or application changes. High-risk industries should test quarterly.' },
      { q: 'What is Zero Trust and do we need it?', a: 'Zero Trust means no user or system is trusted by default, even inside your network. It\'s the gold standard for modern enterprise security.' },
      { q: 'What compliance frameworks can you help us achieve?', a: 'We support ISO 27001, SOC 2, PCI DSS, GDPR, HIPAA, and India\'s DPDP Act, among others.' },
      { q: 'Can you help recover from a ransomware attack?', a: 'Yes. Our incident response team handles containment, forensic investigation, recovery, and post-incident hardening.' },
      { q: 'How do you protect against insider threats?', a: 'Through IAM controls, privileged access management, behavioral analytics, and data loss prevention policies.' },
    ]
  },

  'data-intelligence': {
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80',
    title: 'Data Intelligence',
    subtitle: 'Big Data & Business Analytics',
    level: 'BIG DATA L3',
    color: '#00ff88',
    tagline: 'Your trusted partner for cutting-edge Data Intelligence',
    desc: 'Processing massive datasets through high-speed pipelines to uncover actionable business intelligence that drives strategic decisions.',
    introParagraphs: [
      "At Future Invo Solutions, we transform raw data into your most powerful strategic asset. Data without analysis is simply storage overhead. We design high-throughput data lakes, real-time warehouses, and executive intelligence dashboards that give your leadership team genuine decision velocity.",
      "Using Snowflake, Databricks, Apache Kafka, and cloud-native analytics services, we build pipelines that ingest, transform, and surface insights from disparate enterprise data sources in real time. Whether you're tracking supply chain metrics, customer lifetime value, or financial risk, our intelligence platforms make the invisible visible.",
      "We work with data teams of all sizes—from startups instrumenting analytics for the first time to enterprises managing petabytes of transactional data. Our approach is always to deliver actionable insight quickly, then expand depth and breadth iteratively."
    ],
    benefits: [
      { title: 'Real-Time Operational Awareness', desc: 'Live dashboards surface critical business metrics as they happen, not hours or days later.' },
      { title: 'Unified Data Platform', desc: 'Break down silos by bringing all your business data into a single, queryable, governed repository.' },
      { title: 'Predictive Analytics', desc: 'Machine learning models forecast demand, churn, revenue, and risk with high accuracy.' },
      { title: 'Self-Service Analytics', desc: 'Business teams access and explore data independently through intuitive BI tools, reducing engineering dependency.' },
      { title: 'Data Governance & Quality', desc: 'Automated data quality checks, lineage tracking, and governance policies ensure your data is always trustworthy.' },
    ],
    expertiseList: [
      'Data Warehouse & Lake Architecture',
      'Real-Time ETL Pipeline Engineering',
      'Business Intelligence & Dashboarding',
      'Predictive Modeling & Forecasting',
      'Data Governance & MDM',
    ],
    faqs: [
      { q: 'What is the difference between a Data Lake and a Data Warehouse?', a: 'Data Lakes store raw, unstructured data at scale. Data Warehouses store processed, structured data optimized for business query performance. We design both depending on your needs.' },
      { q: 'How do you keep our data secure?', a: 'Through role-based access control, column-level encryption, data masking, and comprehensive audit logging on all data access.' },
      { q: 'Can you integrate data from our existing systems?', a: 'Yes. We build custom connectors for ERPs, CRMs, e-commerce platforms, databases, and third-party APIs.' },
      { q: 'What BI tools do you work with?', a: 'We work with Power BI, Looker, Metabase, Tableau, and custom-built dashboards depending on your preference and budget.' },
      { q: 'How long does it take to build a data platform?', a: 'A foundational data platform with core pipelines and dashboards typically takes 8–12 weeks. Advanced analytics layers are added iteratively.' },
    ]
  },

  'emerging-frontiers': {
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
    title: 'Emerging Frontiers',
    subtitle: 'Web3, IoT & Advanced Tech R&D',
    level: 'R&D LABS',
    color: '#0070ff',
    tagline: 'Your trusted partner for cutting-edge Emerging Technologies',
    desc: 'Investigating the intersection of Blockchain, IoT, and high-performance computing to future-proof your operations and create first-mover advantages.',
    introParagraphs: [
      "At Future Invo Solutions, staying ahead requires venturing into the unknown. Our Emerging Frontiers practice explores Web3 protocols, decentralized infrastructures, hardware-accelerated edge intelligence, and post-quantum cryptography—fielding these technologies against practical business problems.",
      "We take the most promising experimental technologies out of the research lab and forge them into enterprise-ready solutions. Whether it's deploying IoT sensor networks for real-time asset tracking, implementing blockchain for supply chain provenance, or building edge AI systems for manufacturing quality control, we bridge the gap between innovation and production.",
      "Our R&D team collaborates with academic institutions, technology partners, and industry consortiums to ensure our clients always have access to the most current capabilities. We help you evaluate emerging technologies objectively, implement sensible pilots, and scale what works."
    ],
    benefits: [
      { title: 'First-Mover Advantage', desc: 'Early adoption of proven emerging technologies creates competitive moats that are difficult for slower competitors to close.' },
      { title: 'Disruptive IP Generation', desc: 'Novel implementations of advanced technology generate valuable, defensible intellectual property.' },
      { title: 'Supply Chain Transparency', desc: 'Blockchain-based provenance systems deliver irrefutable transparency across complex supply chains.' },
      { title: 'Real-Time Physical Intelligence', desc: 'IoT sensor networks and edge AI provide real-time visibility into physical operations at scale.' },
      { title: 'Future-Proof Architecture', desc: 'Systems designed with quantum resistance and protocol-agnostic layers that adapt to paradigm shifts.' },
    ],
    expertiseList: [
      'Blockchain & Smart Contract Development',
      'IoT Platform Architecture',
      'Edge Computing & AI',
      'Web3 & Decentralized Applications',
      'Post-Quantum Cryptography Research',
    ],
    faqs: [
      { q: 'Is blockchain right for my business?', a: 'Blockchain adds value in specific scenarios: supply chain provenance, multi-party trust, tokenization, and immutable audit trails. We help you determine if it fits your use case.' },
      { q: 'What IoT platforms do you work with?', a: 'We work with AWS IoT, Azure IoT Hub, and custom MQTT-based platforms, supporting hardware from Arduino to industrial PLCs.' },
      { q: 'How do you ensure IoT device security?', a: 'Through hardware root-of-trust, TLS encryption for all communications, OTA update signing, and device identity management.' },
      { q: 'Can you help us evaluate whether an emerging technology is right for us?', a: 'Yes. We offer structured technology assessment engagements that produce an objective recommendation with risk analysis.' },
      { q: 'What is edge computing and when should we use it?', a: 'Edge computing processes data close to its source rather than in the cloud, enabling real-time responses for latency-sensitive applications like manufacturing and autonomous vehicles.' },
    ]
  },

  'full-stack-web-saas-development': {
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
    title: 'Full Stack Web & SaaS',
    subtitle: 'End-to-End SaaS Platform Engineering',
    level: 'L5 ARCHITECTURE',
    color: '#00ff88',
    tagline: 'Your trusted partner for cutting-edge SaaS Development',
    desc: 'Building scalable, multi-tenant SaaS platforms with complex backend logic, sophisticated data models, and seamless frontend experiences.',
    introParagraphs: [
      "At Future Invo Solutions, we engineer full-stack SaaS platforms from initial schema design to global CDN deployment. Our practice covers the full vertical stack—database architecture, API design, authentication systems, payment infrastructure, and React-powered frontends—all built with the multi-tenancy and scalability demands of SaaS products in mind.",
      "Our experience spans B2B and B2C SaaS products across verticals including HR tech, fintech, edtech, and enterprise productivity. We understand SaaS-specific challenges: tenant isolation, feature flagging, subscription billing, usage metering, and the inexorable pressure to ship features while maintaining platform stability.",
      "Whether you're validating a startup idea with a focused MVP or scaling a Series B product to handle enterprise customers, our full-stack engineering squads deliver working, production-grade software at velocity."
    ],
    benefits: [
      { title: 'Rapid Time-to-Market', desc: 'Proven SaaS architecture patterns and reusable component libraries dramatically accelerate initial delivery.' },
      { title: 'Multi-Tenant Security', desc: 'Bank-grade data isolation ensures each customer\'s data is completely segregated at the database level.' },
      { title: 'Integrated Subscription Billing', desc: 'Out-of-the-box Stripe/Razorpay integration with plan management, trials, usage-based billing, and invoicing.' },
      { title: 'Feature Velocity', desc: 'Modular monorepo architecture and CI/CD pipelines enable multiple safe feature deployments per day.' },
      { title: 'Infinitely Extensible API', desc: 'GraphQL or REST APIs designed for extensibility allow customers and partners to build on your platform.' },
    ],
    expertiseList: [
      'SaaS Architecture & Multi-Tenancy',
      'React, Next.js & Node.js Development',
      'GraphQL & REST API Design',
      'Subscription Billing Integration',
      'Developer Platform & API Products',
    ],
    faqs: [
      { q: 'What tech stack do you use for SaaS development?', a: 'Typically React or Next.js on the front end, Node.js or Python on the backend, PostgreSQL or MongoDB for data, and AWS or GCP for infrastructure.' },
      { q: 'How do you handle multi-tenant data isolation?', a: 'We implement schema-per-tenant or row-level security models depending on scale requirements, with rigorous automated tests to prevent data leakage.' },
      { q: 'Can you build the billing and subscription system?', a: 'Yes. We integrate Stripe or Razorpay with plan management, trial periods, proration, usage metering, and customer portal.' },
      { q: 'Do you build MVPs as well as full platforms?', a: 'Yes. We offer rapid MVP sprints (6–10 weeks) to validate product-market fit before committing to full platform development.' },
      { q: 'How do you manage feature development alongside platform stability?', a: 'Through feature flags, comprehensive test coverage, and trunk-based development with automated CI/CD quality gates.' },
    ]
  },

  'machine-learning-deep-learning': {
    image: 'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?w=800&q=80',
    title: 'Machine Learning & Deep Learning',
    subtitle: 'Advanced AI Model Engineering',
    level: 'NEURAL FORGE',
    color: '#7000ff',
    tagline: 'Your trusted partner for cutting-edge Machine Learning',
    desc: 'Developing sophisticated computer vision, NLP, and predictive models that transform overwhelming raw data into precision intelligence.',
    introParagraphs: [
      "At Future Invo Solutions, we go far beyond basic machine learning to create multi-modal neural architectures capable of complex, high-stakes pattern recognition. Our ML engineering team designs, trains, and deploys custom models that solve problems that conventional software simply cannot.",
      "Whether it's real-time anomaly detection in manufacturing, deep natural language understanding for customer triage, medical image analysis, or generative AI systems for content and product creation, our models are purpose-built on your data and rigorously validated before production deployment.",
      "We cover the entire machine learning lifecycle—from raw data collection and feature engineering through model training, evaluation, deployment, and ongoing monitoring. Our MLOps practice ensures your models remain accurate and reliable as data distributions shift over time."
    ],
    benefits: [
      { title: 'Process Automation at Scale', desc: 'Automate tasks previously deemed too complex for software—document understanding, image analysis, and voice processing.' },
      { title: 'Hyper-Personalized Experiences', desc: 'Recommendation engines and personalization models deliver individual-level tailoring across your entire user base.' },
      { title: 'Predictive Risk Management', desc: 'Forecasting models identify fraud, churn, equipment failure, and demand shifts before they impact your business.' },
      { title: 'Continuous Model Improvement', desc: 'Automated retraining pipelines ensure model accuracy improves over time as new data is collected.' },
      { title: 'Competitive Differentiation', desc: 'Custom ML capabilities embedded in your product create proprietary advantages that SaaS tools cannot replicate.' },
    ],
    expertiseList: [
      'Custom Neural Network Architecture',
      'Computer Vision & Image Analysis',
      'NLP & Large Language Models',
      'MLOps & Model Deployment',
      'Time-Series & Anomaly Detection',
    ],
    faqs: [
      { q: 'What is the difference between Machine Learning and Deep Learning?', a: 'Machine Learning uses algorithms that learn patterns from data. Deep Learning is a specialized subset using layered neural networks, enabling far more complex pattern recognition.' },
      { q: 'How much data do I need for a custom ML model?', a: 'It varies significantly by problem type. Many effective models can be trained with a few thousand examples using transfer learning. We assess your data during discovery.' },
      { q: 'How do you ensure model fairness and avoid bias?', a: 'We audit training data for bias, evaluate models across demographic subgroups, and apply fairness constraints where needed.' },
      { q: 'Can ML models be integrated into our existing products?', a: 'Yes. We package models as REST APIs or embedded SDKs that integrate with any existing web, mobile, or enterprise application.' },
      { q: 'How do you monitor model performance over time?', a: 'We implement data drift detection, performance dashboards, and automated alerts that trigger retraining when accuracy degrades.' },
    ]
  }
};

export default servicesData;
