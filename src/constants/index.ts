interface NavRoute {
  name: string;
  href: string;
}

interface Category {
  id: number;
  name: string;
  img: string;
  bgColor: string;
  subtitle: string;
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
  {id: 1, name: "Style", img: "/assets/style.png", bgColor: "bg-red-100", subtitle: "Express your unique style"},
  {id: 2, name: "Fashion", img: "/assets/fashion.png", bgColor: "bg-blue-100", subtitle: "Latest fashion trends"},
  {id: 3, name: "Food", img: "/assets/food.png", bgColor: "bg-yellow-100", subtitle: "Delicious food recipes"},
  {id: 4, name: "Travel", img: "/assets/travel.png", bgColor: "bg-green-100", subtitle: "Explore the world"},
  {id: 5, name: "Culture", img: "/assets/culture.png", bgColor: "bg-pink-100", subtitle: "Dive into diverse cultures"},
  {id: 6, name: "Coding", img: "/assets/coding.png", bgColor: "bg-indigo-100", subtitle: "Learn coding skills"},
];
