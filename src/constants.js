//Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import javaLogo from "./assets/tech_logo/java.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import vercelLogo from "./assets/tech_logo/vercel.png";

//Project Section Logo's
import wanderlustLogo from "./assets/projects_logo/wanderlust.png";
import finvestoLogo from "./assets/projects_logo/finvesto.png";
import flickfusionLogo from "./assets/projects_logo/flickfusion.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
    ],
  },
  {
    title: "Languages",
    skills: [{ name: "Java", logo: javaLogo }],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "Github", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Vercel", logo: vercelLogo },
    ],
  },
];

export const education = [
  {
    id: 0,
    school: "Marathwada Mitra Mandal College of Engineering, Pune",
    date: "Nov 2022 - May 2026",
    grade: "GPA 9.43",
    desc: "I am currently pursuing my Bachelor's in Computer Engineering from Marathwada Mitra Mandal College of Engineering, Pune. During my studies, I explored a wide range of subjects, from Data Structures & Algorithms to Web Development and Database Management Systems, gaining practical insights into software development. Through hands-on projects, I applied theoretical knowledge to build real-world applications and strengthen my full-stack development skills.",
    degree: "Bachelor of Engineering in Computer Engineering.",
  },
  {
    id: 1,
    school: "Mary Matha High School & Jr. College, Mhaswad.",
    date: "Aug 2021 - May 2022",
    grade: "79.33%",
    desc: "I completed my Class 12 education from Mary Matha High School & Jr. College, Mhaswad, under the Maharashtra Board, studying Physics, Chemistry, and Information Technology (IT). I secured 1st rank in my batch, demonstrating strong academic performance and dedication.",
    degree: "Maharashtra Board (XII) - PCM with IT",
  },
  {
    id: 2,
    school: "Mary Matha High School & Jr. College, Mhaswad.",
    date: "Aug 2019 - May 2020",
    grade: "86.00%",
    desc: "I completed my Class 10 education from Mary Matha High School & Jr. College, Mhaswad, under the Maharashtra Board, where I studied Science and Mathematics.",
    degree: "Maharashtra Board (X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "WanderLust – Travel Listing Web App",
    description:
      "Developed a full-stack travel listing platform using Node.js, Express.js, MongoDB, and EJS, with secure user authentication and session handling via Passport.js, and styled using Bootstrap for responsive design.<br>Integrated Mapbox for dynamic maps and Cloudinary for image uploads. Deployed on Render to deliver a fully functional, interactive experience for travel enthusiasts.",
    image: wanderlustLogo,
    tags: [
      "HTML",
      "CSS",
      "Javascript",
      "EJS",
      "Node JS",
      "Express",
      "MongoDB",
      "REST API",
      "Bootstrap",
      "Mapbox",
      "Cloudinary",
      "Render",
    ],
    github: "https://wanderlust-p1xo.onrender.com/listings",
    webapp: "https://wanderlust-p1xo.onrender.com/listings",
  },
  {
    id: 1,
    title: "Finvesto – Stock Market Dashboard",
    description:
      "Built a responsive stock market dashboard using React.js, Material UI, and Bootstrap, featuring stock search, filtering, reusable components, and real-time data visualizations with Chart.js. Implemented a full-stack architecture with Node.js, Express.js, and MongoDB, added secure authentication via Passport.js, and integrated a live stock market API for real-time stock data.",
    image: finvestoLogo,
    tags: [
      "HTML",
      "CSS",
      "Javascript",
      "React JS",
      "Material UI",
      "Node JS",
      "Bootstrap",
      "MongoDB",
    ],
    github: "https://github.com/atharvrajmane/finvesto",
    webapp: "",
  },
  {
    id: 2,
    title: "FlickFusion",
    description:
      "Developed a dynamic, client-side movie discovery platform using vanilla JavaScript (ES6+), HTML5, and CSS3 to create a responsive and interactive user interface. Integrated The Movie Database (TMDB) REST API to asynchronously fetch and display real-time movie data, delivering a seamless and engaging browsing experience for movie enthusiasts.",
    image: flickfusionLogo,
    tags: ["HTML", "CSS", "Javascript", "Bootstrap"],
    github: "https://github.com/atharvrajmane/FlickFusion",
    webapp: "https://flick-fusion-flax.vercel.app/",
  },
];
