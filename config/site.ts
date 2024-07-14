export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Tech With Mayank",
  description: "Your one stop for making beautiful websites.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Blog",
      href: "/blog",
    }
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/khanna98",
    twitter: "https://twitter.com/khannamayank98",
    docs: "https://nextui.org",
    discord: "https://discord.gg/nextui",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
