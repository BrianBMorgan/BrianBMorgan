// Résumé content — structured facts rendered by app/resume/page.jsx.
// Sourced from Brian's LinkedIn profile; contact is intentionally limited to
// the public professional channels (email + LinkedIn in lib/site.js) — the
// personal phone/email from the LinkedIn export are deliberately omitted.
export const resume = {
  headline: 'Founder & Experience Systems Architect',
  subhead: 'Operational strategy for high-growth ecosystems · event & program infrastructure',
  summary:
    'I design and operate high-stakes programs for ambitious organizations and communities. Across 15+ years leading complex corporate programs, I’ve translated abstract business goals into structured plans, aligned cross-functional stakeholders, and built execution systems that let teams move with precision. As a founder, I’m now building operational infrastructure that integrates technology with experiential design, brand intelligence, and go-to-market — most energized at the intersection of ecosystem strategy, systems thinking, and the psychology of ambitious builders.',

  // Reverse-chronological. `bullets` are the load-bearing accomplishments;
  // entries without source copy carry a single positioning line, not invented metrics.
  experience: [
    {
      company: 'SYSOI.ai',
      role: 'Founder',
      period: 'Jun 2026 — Present',
      location: 'Portland, OR',
      bullets: [
        'Building the System of Intelligence that sits on top of the event tech stack — vendor-neutral, bring-your-own-tools, forensic by design.',
        'AI resolves every person across every event, keeps each one on-strategy in flight, and turns them into sales-ready records credited for the pipeline they actually drove.',
      ],
    },
    {
      company: 'Forge Intelligence',
      role: 'Founder',
      period: 'Feb 2026 — Present',
      location: 'Portland, OR',
      bullets: [
        'Brand-intelligence platform giving marketing teams a unified view of brand context, audience signals, and strategic direction — so every decision starts from clarity, not guesswork.',
      ],
    },
    {
      company: 'Sandbox-GTM',
      role: 'Co-Founder',
      period: 'Jan 2026 — Present',
      location: 'Portland, OR',
      bullets: [
        'Advise brands and founder-led teams on ecosystem strategy, experiential program design, and integrated marketing systems that align narrative, technology, and operational execution.',
      ],
    },
    {
      company: 'Rose + Thyme',
      role: 'Principal',
      period: 'May 2021 — Present',
      location: 'Dallas–Fort Worth, TX',
      bullets: [
        'Founder-operator of a vegan, cruelty-free skincare brand — small-batch, plant-based products built end-to-end from formulation and brand identity to e-commerce and fulfillment.',
      ],
    },
    {
      company: 'MAS',
      role: 'Group Account Director',
      period: 'Mar 2022 — Jan 2026',
      location: 'Portland, OR',
      bullets: [
        'Led multi-stakeholder experiential programs for technology and growth-stage brands, translating complex business objectives into integrated, cross-functional execution frameworks.',
        'Owned end-to-end program architecture — strategy, content, creative, technology, acquisition, and on-site delivery — to maximize engagement, retention, and measurable ROI.',
        'Served as executive-level partner and internal integrator, anticipating operational risk and resolving ambiguity before it reached the participant experience.',
      ],
    },
    {
      company: 'MC2 Experience',
      role: 'Senior Director',
      period: 'Aug 2019 — Mar 2022',
      location: 'Dallas–Fort Worth, TX',
      bullets: [
        'Developed and delivered strategic services across the proprietary event vertical — corporate events, virtual events, and brand experiences.',
        'Partnered with account teams and clients on strategic planning, management, execution, and measurement of experiential marketing programs.',
      ],
    },
    {
      company: 'Freeman Company',
      role: 'Sr. Account Director, Brand Experience',
      period: 'Sep 2011 — Jul 2019',
      location: 'SF Bay Area / Dallas–Fort Worth',
      note: 'Rose through five roles in eight years — from Exhibitor Sales Coordinator to Senior Account Director.',
      bullets: [
        'Directed strategic account portfolios exceeding $20M+ in annual revenue across technology and SaaS, integrating strategy, creative, digital, logistics, and production under unified program roadmaps.',
        'Architected large-scale brand-experience ecosystems across live and virtual formats, balancing creative ambition with operational precision.',
        'Built durable client relationships by translating executive vision into scalable experiential systems.',
      ],
    },
    {
      company: 'Earlier career',
      role: 'Sprint — Communications Consultant · West Corporation — Recovery Specialist',
      period: '2005 — 2009',
      location: '',
      bullets: [
        'Business development across competitive local-exchange markets, serving SMB and enterprise clients with network and communications infrastructure solutions.',
      ],
    },
  ],

  education: [
    { school: 'Penn State University', credential: 'B.F.A., Graphic Design', period: '2001 — 2004' },
    { school: 'DeVry University', credential: 'Dietetics & Clinical Nutrition Services', period: '2009 — 2011' },
  ],

  skills: [
    'Experiential Marketing',
    'Artificial Intelligence (AI)',
    'Marketing Attribution',
    'Operational Strategy',
    'Event Technology',
    'Integrated Marketing',
    'Go-to-Market',
    'Systems Thinking',
    'Program Architecture',
    'Brand Experience',
  ],

  languages: ['English', 'Spanish'],

  certifications: [{ name: 'LinkedIn Sales Navigator', year: '2020' }],
};
