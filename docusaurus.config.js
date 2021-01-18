module.exports = {
  title: 'Sequel.js',
  tagline:
    'Collection of libraries designed to help access Databases in JavaScript environments',
  url: 'https://sequel.js.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'sequeljs',
  projectName: 'sequel.js.org',
  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    gtag: {
      trackingID: 'UA-174064534-1',
      anonymizeIP: true,
    },
    navbar: {
      title: 'Sequel.js',
      logo: {
        alt: 'Sequel.js Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/sequeljs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'AST', to: 'docs/ast/api' },
            { label: 'OMI', to: 'docs/omi/api' },
            { label: 'ORM', to: 'docs/orm/api' },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/sequeljs',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/sequeljs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Sequel.js, Inc. Built with Docusaurus.`,
    },
  },
  plugins: [
    [
      'docusaurus-plugin-typedoc',
      {
        entryPoints: ['./node_modules/@sequeljs/ast/src/index.ts'],
        exclude: ['**/*.mixins.ts'],
        out: 'ast/api',
        sidebar: {
          readmeLabel: 'About',
          sidebarFile: './docs/ast/sidebar.js',
        },
        tsconfig: './docs/ast/tsconfig.json',
      },
    ],
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/sequeljs/sequel.js.org/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
}
