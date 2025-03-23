interface NavRoute {
  name: string;
  href: string;
}

interface Category {
  id: number;
  name: string;
  img: string;
  bgColor: string;
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

export const popularCategories: Category[] = [
  {id: 1, name: "Style", img: "/assets/style.png", bgColor: "bg-[#E4D6F5]"},
  {id: 2, name: "Fashion b", img: "/assets/fashion-1.png", bgColor: "bg-[#F7CAC9]"},
  {id: 3, name: "Food", img: "/assets/food.png", bgColor: "bg-[#FFe2E1]"},
  {id: 4, name: "Travel", img: "/assets/travel.png", bgColor: "bg-[#C9E4CA]"},
  {id: 5, name: "Culture", img: "/assets/culture.png", bgColor: "bg-[#F8d0e1]"},
  {id: 6, name: "Coding", img: "/assets/coding.png", bgColor: "bg-[#B2E6CE]"},
];
