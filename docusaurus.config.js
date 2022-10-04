// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SoftPaws',
  tagline: 'Validator Services and Projects',
  url: 'https://softpaws.xyz',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/softpaws3.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'SoftPaws', // Usually your GitHub org/user name.
  projectName: 'Softpaws.xyz', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'SoftPaws',
        logo: {
          alt: 'My Site Logo',
          src: 'img/softpaws3.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Services and Guides',
          },
          {
            href: "http://status.softpaws.xyz:8888",
            position: 'left',
            label: 'Validator Status'
          },
          {
            href: "https://discord.gg/3qamCq9dNq",
            position: 'right',
            label: 'Discord'
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Most Active Projects',
            items: [
              {
                label: 'Kassandra',
                href: 'https://kassandra.finance/',
              },
              {
                label: 'Echelon',
                href: 'https://ech.network/',
              },
            ],
          },
          {
            title: 'Socials',
            items: [
              {
                label: 'Keybase',
                href: 'https://keybase.io/kittyxxsoftpaws',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/kittykat116644',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/kittyxxSoftPaws',
              },
              {
                label: 'Medium',
                href: 'https://medium.com/@KittyxxSoftpaws'
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SoftPaws.xyz`, 
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
