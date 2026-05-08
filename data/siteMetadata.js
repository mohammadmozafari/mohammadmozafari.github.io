/** @type {import('pliny/config').PlinyConfig } */
const siteMetadata = {
  title: "Mohammad's Blog",
  author: 'Mohammad',
  headerTitle: 'Mohammad',
  description: 'A personal blog about software, systems, and the occasional note to self.',
  language: 'en-us',
  theme: 'system',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  siteRepo: process.env.NEXT_PUBLIC_SITE_REPO || 'https://github.com/mohammadmozafari/mohammadmozafari.github.io',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.png`,
  mastodon: '',
  email: '',
  github: '',
  x: '',
  facebook: '',
  youtube: '',
  linkedin: '',
  threads: '',
  instagram: '',
  medium: '',
  bluesky: '',
  locale: 'en-US',
  stickyNav: false,
  analytics: {},
  newsletter: null,
  comments: null,
  search: {
    provider: 'kbar',
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
  },
}

module.exports = siteMetadata
