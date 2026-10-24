export const site = {
  name: "Design School",
  title: "Design School — Bengaluru",
  description:
    "Twenty hands-on sessions for designers and builders in Bangalore. Real briefs, live critiques, and a curious creative community. Less watching. More making.",
  communityUrl: "https://gtmschool.club/",
  mission:
    "Twenty hands-on sessions for Bengaluru’s designers and builders. Turn real briefs, honest feedback, and shared curiosity into work you’re proud of. Learn by making, grow together, and leave every session with something to show.",
} as const;

export interface NavigationItem {
  name: string;
  href: `#${string}`;
}

export const mainNavigation: readonly NavigationItem[] = [
  { name: "Our mission", href: "#mission" },
  { name: "The sessions", href: "#events" },
  { name: "Past events", href: "#testimonials" },
];

export const footerNavigation: readonly NavigationItem[] = [
  { name: "Our mission", href: "#mission" },
  { name: "The sessions", href: "#events" },
  { name: "The good moments", href: "#gallery" },
];
