const CONFIG = {
  github: {
    username: 'nandolawson',
  },
  base: '/',
  projects: {
    github: {
      display: true,
      header: 'GitHub Projects',
      mode: 'automatic',
      automatic: {
        sortBy: 'updated',
        limit: 8,
        exclude: {
          forks: true,
          projects: ['nandolawson/nandolawson'],
        },
      },
    },
  },
  seo: {
    title: 'Nando Lawson',
    description: '',
    imageURL: '',
  },
  social: {
  },
  resume: {
    fileUrl:
      '',
  },
  skills: [
  ],
  googleAnalytics: {
    id: 'G-RSD2SW947P',
  },
  themeConfig: {
    defaultTheme: 'night',
    disableSwitch: true,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: ['night'],
  },
  enablePWA: true,
};
export default CONFIG;
