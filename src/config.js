module.exports = {
  siteTitle: 'Kimhoonhee | Software Developer',
  siteDescription:
    'Kimhoonhee is a Software Developer at Universal, who loves learning new things and helping tech beginners.',
  siteKeywords:
    'Kimhoonhee, nmdkims, software developer, software engineer, python django, nst, django-ninja, web developer',
  siteUrl: 'https://nmdkims.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Kimhoonhee',
  location: 'Suwon, Korea',
  email: 'nmdkims@gmail.com',
  github: 'https://github.com/nmdkims',
  twitterHandle: '@nmdkims',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/nmdkims',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/훈희-김/',
    },
     {
       name: 'Blog',
      url: 'https://dawnpast12.tistory.com/',
     },
    // {
    //   name: 'Instagram',
    //   url: 'https://www.instagram.com/chandrikadeb7',
    // },
    // {
    //   name: 'Twitter',
    //   url: 'https://twitter.com/chandrikadeb7',
    // },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
