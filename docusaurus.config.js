module.exports = {
  title: 'Study',
  tagline: 'Front-end development',
  url: 'https://alvin.run',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  favicon: 'img/favicon.ico',
  organizationName: 'alvin', // Usually your GitHub org/user name.
  projectName: 'study note', // Usually your repo name.
  themeConfig: {
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      defaultLanguage: 'javascript'
    },
    metadatas: [
      // SEO
      { name: 'keywords', content: "alvin's notes, alvin 的博客, 前端开发" },
      { name: 'author', content: 'Alvin, alvin00216@163.com' }
    ],
    navbar: {
      title: 'Study',
      logo: {
        alt: 'Study Logo',
        src: 'img/logo.svg'
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left'
        },
        {
          to: 'http/',
          activeBasePath: 'http',
          label: 'HTTP',
          position: 'left'
        },
        {
          href: 'https://github.com/alvin00216',
          label: 'GitHub',
          position: 'right'
        }
      ]
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js')
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ],
    '@docusaurus/theme-live-codeblock'
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'http',
        path: 'http',
        routeBasePath: '/http',
        sidebarPath: require.resolve('./sidebarsHTTP.js')
        // showLastUpdateAuthor: true,
        // showLastUpdateTime: true
      }
    ],
    [
      require.resolve('@cmfcmf/docusaurus-search-local'),
      {
        // warning: Use '@cmfcmf/docusaurus-search-local' (without the require.resolve) if you use Docusaurus before v2.0.0-alpha.56
        blogBasePath: '/blog', // must correspond to the base path configured for the blog plugin
        docsBasePath: '/docs', // must correspond to the base path configured for the docs plugin
        indexBlog: true, // whether to index blog pages
        indexDocs: true, // whether to index docs pages
        indexPages: false, // whether to index static pages
        // /404.html is never indexed
        language: 'en' // language of your documentation, see next section
      }
    ]
  ]
}
