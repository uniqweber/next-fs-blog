interface NavRoute {
  name: string;
  href: string;
}

export const navRoutes: NavRoute[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "Login",
    href: "/login",
  },
];
