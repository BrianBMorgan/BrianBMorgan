// Global site facts — edit here, referenced everywhere.
export const site = {
  name: 'Brian B. Morgan',
  role: 'Experience Builder',
  tagline: 'I design and build things that endure.',
  description:
    'I push past “how it’s always been done” to create smarter, more human experiences that work for both the business and the people engaging.',
  // Custom domain (no trailing slash — always concatenated with /paths).
  // GitHub Pages serves the site here; the old github.io URL redirects.
  url: 'https://brianbmorgan.com',
  email: 'brian@sandbox-xm.com',
  // Contact form relay: public handler on MailForge (mailforge.forge-os.ai)
  // that sends via Resend. mailto: is the offline fallback if the relay is down.
  contactEndpoint: 'https://mailforge.forge-os.ai/public/portfolio-contact',
  location: 'Portland, OR',
  availability: 'Available for select projects — Q4 2026',
  // Shared KPIs — shown in the home hero and the About band.
  stats: [
    { value: '15+', label: 'Years delivering' },
    { value: '100+', label: 'Projects delivered' },
    { value: '$100m+', label: 'Portfolios managed' },
  ],
  social: {
    github: 'https://github.com/BrianBMorgan',
    linkedin: 'https://www.linkedin.com/in/brian-bodi-morgan',
  },
};
