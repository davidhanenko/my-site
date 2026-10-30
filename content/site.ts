// Site content. Lives in the repo instead of a CMS — edit here and redeploy.

export type TechLogo = {
  title: string;
  src: string;
};

export const site = {
  name: "David Hanenko",
  greeting:
    "Self-taught, quick-learning FrontEnd Engineer. Experienced with the whole process of building web applications + modern frameworks.",
  email: "d.hanenko24@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/david-hanenko",
    github: "https://github.com/davidhanenko",
  },
  techLogos: [
    { title: "JavaScript", src: "https://res.cloudinary.com/ddqehibx0/image/upload/v1652319755/Portfolio/js_7fd610512f.png" },
    { title: "HTML", src: "https://res.cloudinary.com/ddqehibx0/image/upload/v1652319755/Portfolio/html_5a483f6f62.png" },
    { title: "CSS", src: "https://res.cloudinary.com/ddqehibx0/image/upload/v1652319755/Portfolio/css_1859a35a1b.png" },
    { title: "Node.js", src: "https://res.cloudinary.com/ddqehibx0/image/upload/v1652319756/Portfolio/node_10bca750b1.png" },
    { title: "Yarn", src: "https://res.cloudinary.com/ddqehibx0/image/upload/v1652554958/Portfolio/yarn_ffd58886a4.png" },
    { title: "React", src: "https://res.cloudinary.com/ddqehibx0/image/upload/v1652319757/Portfolio/react_0f1889cb67.png" },
    { title: "npm", src: "https://res.cloudinary.com/ddqehibx0/image/upload/v1652319757/Portfolio/npm_ad6cb30457.png" },
    { title: "Express", src: "https://res.cloudinary.com/ddqehibx0/image/upload/v1652319755/Portfolio/express_8a0db210e7.png" },
    { title: "Git", src: "https://res.cloudinary.com/ddqehibx0/image/upload/v1652319755/Portfolio/git_3f4daa655f.png" },
    { title: "Next.js", src: "https://res.cloudinary.com/ddqehibx0/image/upload/v1652319755/Portfolio/next_631107e7ee.png" },
    { title: "TypeScript", src: "https://res.cloudinary.com/ddqehibx0/image/upload/v1670808105/Portfolio/ts_6c7146ab1e.png" },
    { title: "MongoDB", src: "https://res.cloudinary.com/ddqehibx0/image/upload/v1670808105/Portfolio/mongodb_aa88bc3f8f.png" },
  ] satisfies TechLogo[],
};
