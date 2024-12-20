import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'これやこ',
  subtitle: '🤔',
  lang: 'ja',         // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko'
  themeColor: {
    hue: 250,         // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
    fixed: false,     // Hide the theme color picker for visitors
  },
  banner: {
    enable: true,
    position: 'center',      // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
    credit: {
      enable: true,         // Display the credit text of the banner image
      text: 'Sakura Miku',              // Credit text to be displayed
      url: ''                // (Optional) URL link to the original artwork or artist's page
    },
    list: [
      "https://s2.loli.net/2024/11/23/6XtZuKJlM4HArON.webp",
      "https://s2.loli.net/2024/11/23/zdSABebpUI4XOrP.webp",
      "https://s2.loli.net/2024/11/23/h1IDjwRbf3Mxqla.webp",
      "https://s2.loli.net/2024/11/23/CbV2iFMHIAxaJQ8.webp",
      "https://s2.loli.net/2024/11/23/kGzJ7wqRFbLPXiN.webp",
      "https://s2.loli.net/2024/11/23/DIGYWarlfgN4Fnq.webp",
      "https://s2.loli.net/2024/11/23/TlyqvFUjBxbWsDQ.webp",
      "https://s2.loli.net/2024/08/20/5fszgXeOxmL3Wdv.webp"
    ]
  },
  toc: {
    enable: true,           // Display the table of contents on the right side of the post
    depth: 2                // Maximum heading depth to show in the table, from 1 to 3
  },
  favicon: [    // Leave this array empty to use the default favicon
    // {
    //   src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
    //   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
    //   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
    // }
  ]
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    {
      name: 'GitHub',
      url: 'https://github.com/teletha/',     // Internal links should not include the base path, as it is automatically added
      external: true,                               // Show an external link icon and will open in a new tab
    },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'https://avatars.githubusercontent.com/u/485441',  // Relative to the /src directory. Relative to the /public directory if it starts with '/'
  name: 'Teletha',
  bio: 'これやこの　行くも帰るも　別れては　知るも知らぬも　逢坂の関',
  links: [
    {
      name: 'Twitter',
      icon: 'fa6-brands:twitter',
      url: 'https://twitter.com/TelethaT',
    },
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/teletha/',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
