// Site content. Lives in the repo instead of a CMS — edit here and redeploy.

import type { IconType } from "react-icons";
import {
  SiCss,
  SiExpress,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiNpm,
  SiReact,
  SiTypescript,
  SiYarn,
} from "react-icons/si";

export type TechLogo = {
  title: string;
  Icon: IconType;
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
    { title: "JavaScript", Icon: SiJavascript },
    { title: "HTML", Icon: SiHtml5 },
    { title: "CSS", Icon: SiCss },
    { title: "Node.js", Icon: SiNodedotjs },
    { title: "Yarn", Icon: SiYarn },
    { title: "React", Icon: SiReact },
    { title: "npm", Icon: SiNpm },
    { title: "Express", Icon: SiExpress },
    { title: "Git", Icon: SiGit },
    { title: "Next.js", Icon: SiNextdotjs },
    { title: "TypeScript", Icon: SiTypescript },
    { title: "MongoDB", Icon: SiMongodb },
  ] satisfies TechLogo[],
};
