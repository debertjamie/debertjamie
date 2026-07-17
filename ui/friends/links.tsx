interface FriendLink {
  name: string;
  url: string;
  description: string;
  avatar?: string;
}

export const friendLinks: FriendLink[] = [
  {
    name: "Elvin Freddrick Ciang",
    url: "https://elvinfc.vercel.app/",
    description:
      "Architect student with passion for airplanes and aerospace engineering",
    avatar: "https://elvinfc.vercel.app/elvinfc.jpg",
  },
  {
    name: "Fernando Putra Wijaya",
    url: "https://ferpuwi.com/",
    description:
      "Full Stack Web Developer crafting modern and scalable solutions with the MERN stack and Next.js.",
    avatar: "https://ferpuwi.com/images/logo.png",
  },
];
