import StudyNotion from "../assets/StudyNotion2.jpg";
import YouTube from "../assets/YouTube.jpg";
import AITools from "../assets/AITools.jpg";
import Dashboard from "../assets/dashboard2.png";
import ShoppingCart from "../assets/ShoppingCart.png";
import TopCourses from "../assets/topcourses.png";
import Techblogs from "../assets/TechBlogs.png";
import ModernJS from "../assets/ModernJS.png";
import DevDetective from "../assets/DevDetective.png";
import WeatherApp from "../assets/weather.png";
import PwdGen from "../assets/pwdgen.png";
import GIFGen from "../assets/GIFgen.png";
import Principal from "../assets/principal.png";
import FrontRow from "../assets/Frontrow2.png";
import VideoEditing from "../assets/video-edition.png";
import Cplusplus from "../assets/c++-256.png";
import ThreeJS from "../assets/Threejs-logo.png";
import Photoshop from "../assets/photoshop-256.png";
import React from "../assets/react.png";
import Vamsi from "../assets/Vamsi.jpg";
import Sandhya from "../assets/Sandhya.jpg";
import Anshika from "../assets/Anshika.jpg";
import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
} from "../assets";
export const projectData = [
  {
    title: "StudyNotion",
    desc: "StudyNotion is a versatile and intuitive ed-tech platform built using MERN stack that enables students to consume, track progress, and rate educational content and educators to create courses, analyze data. OTP verification for signup, Razorpay payment integration, tracking data/progress are other prominent features",
    image: StudyNotion,
    modalData: {
      stack: [
        "React",
        "Tailwind",
        "Express",
        "MongoDB",
        "Redux-Toolkit",
        "Razorpay",
        "JWT-Tokens",
      ],
      features: [
        "Students can consume, track progress, and rate educational content",
        "Educators can create courses, add videos, track the response",
        "Cart functionality, Razorpay cart checkout, email confirmation",
        "OTP verification for sign-up",
      ],
      demo: "https://study-notion-mega-project-frontend.vercel.app/",
      github: "https://github.com/yashsarode45/StudyNotion-Mega-Project",
    },
  },
  {
    title: "AITools",
    desc: "AITOOLS is a powerful MERN stack web application that offers two primary functions: AI image generation and community sharing, AI text summarization and/or translation.",
    image: AITools,
    modalData: {
      stack: [
        "React",
        "Tailwind",
        "Express",
        "MongoDB",
        "Huggingface",
        "Cloudinary",
      ],
      features: [
        "Users can create AI images by giving a prompt and choosing a suitable model, and share with community",
        "Users can summarize and/or translate from input URL/text",
        "Saves history for quick access, and has ability to copy summarized or translated text to the clipboard",
      ],
      demo: "https://mern-ai-frontend.vercel.app/",
      github: "https://github.com/yashsarode45/MERN-AI",
    },
  },
  {
    title: "YouTube Web",
    desc: "YT Videos App is a highly scalable and fast-loading video streaming platform, homepage showcasing, search bar utilizing debouncing (200ms) for efficient API calls and caching to reduce duplicate API calls, video playback, live comments sections, nested comments are prominent features.",
    image: YouTube,
    modalData: {
      stack: [
        "React",
        "Tailwind",
        "REST-API",
        "Redux-Toolkit",
        "Interactive-UI",
      ],
      features: [
        "Quick search functionality using YouTube API utilizing caching and debouncing",
        "Videos showpage and watch page, with YouTube like navigation sidebar",
        "Live chat and N-level nested comments on watch page",
      ],
      demo: "https://youtube-yash.vercel.app/",
      github: "https://github.com/yashsarode45/YouTube",
    },
  },
];

export const cardData = [
  {
    image: Dashboard,
    title: "Dashboard App",
    desc: "Dashboard App, a powerful web application with advanced features such as theming, data tables, charts, calendar, and kanban board and login/signup. It offers features and tools to help manage and visualize data effectively.",
    tags: ["react", "context-api", "syncfusion", "tailwind"],
    github: "https://github.com/yashsarode45/Dashboard-App",
    demo: "https://dashboard-app-six-pearl.vercel.app/",
  },
  {
    image: ShoppingCart,
    title: "Shopping Cart",
    desc: "A web application that allows users to browse and purchase products online. It offers features like adding and removing items from the cart, displaying the total amount of items in the cart, and a checkout option.",
    tags: ["react", "redux-toolkit", "tailwind"],
    github: "https://github.com/yashsarode45/Ecomzy-Shopping-Cart",
    demo: "https://ecomzy-shopping-cart-lilac.vercel.app/",
  },
  {
    image: TopCourses,
    title: "Top Courses",
    desc: "A web application that showcases various courses with card-style layouts. Users can filter courses by category using the navigation buttons at the top, and the filtered courses are displayed dynamically without page reloads.",
    tags: ["react", "tailwind"],
    github: "https://github.com/yashsarode45/Top-Courses",
    demo: "https://top-courses-ruby.vercel.app/",
  },
  {
    image: Techblogs,
    title: "Tech Blogs",
    desc: "Project provides a platform for reading and exploring technical blogs. It offers a collection of blogs organized by categories and tags. Made to understand the concept of routing, dynamic URL based rendering.",
    tags: ["react", "react-router", "tailwind"],
    github: "https://github.com/yashsarode45/Tech-Blogs",
    demo: "https://tech-blogs-ten.vercel.app/",
  },
  {
    image: ModernJS,
    title: "Modern JS Site",
    desc: "This project is a modern and responsive website built using React.js and Tailwind CSS. It focuses on demonstrating building functional components, implementing smooth animations, complex gradients, and responsive design.",
    tags: ["react", "tailwind"],
    github: "https://github.com/yashsarode45/Modern-JS-Site",
    demo: "https://modern-js-site.vercel.app/",
  },
  {
    image: DevDetective,
    title: "DevDetective",
    desc: "Dev Detective is a web-based application that allows you to search for GitHub user profiles and view their information. You can easily switch between dark and light modes for a personalized user experience.",
    tags: ["html", "javascript", "css", "api"],
    github: "https://github.com/yashsarode45/DevDetective",
    demo: "https://yashsarode45.github.io/DevDetective/",
  },
  {
    image: WeatherApp,
    title: "Weather App",
    desc: "An application that provides real-time weather information. It allows users to access weather data based on their current location or search for weather information in a specific city. It uses the OpenWeatherMap API to fetch data.",
    tags: ["html", "javascript", "css", "api"],
    github: "https://github.com/yashsarode45/Weather-App",
    demo: "https://yashsarode45.github.io/Weather-App/",
  },
  {
    image: PwdGen,
    title: "Password Generator",
    desc: "A web-based tool that allows users to generate secure and customizable passwords based on various criteria, such as including uppercase letters, lowercase letters, numbers, and symbols.",
    tags: ["html", "javascript", "css"],
    github: "https://github.com/yashsarode45/Password-Generator",
    demo: "https://yashsarode45.github.io/Password-Generator/",
  },
  {
    image: GIFGen,
    title: "GIF Generator",
    desc: "The Random Gif Generator is a web application that allows users to generate random GIFs or GIFs based on a specific tag or keyword.  It uses the Giphy API to fetch GIFs and display them in a visually appealing manner.",
    tags: ["html", "javascript", "css", "api"],
    github: "https://github.com/yashsarode45/Gif-generator",
    demo: "https://dashboard-app-six-pearl.vercel.app/",
  },
];

export const experiences = [
  {
    title: "Trainee Software Engineer",
    company_name: "Principal Global Services",
    icon: Principal,
    iconBg: "#242635",
    date: "Aug 2023 - Present",
    points: [
      "Delving into core services of AWS such as EC2, S3, Lambda, and CI/CD pipelines.",
      "Getting familiar with large scale applications in Spring Boot.",
      "Understanding the importance of teamwork and continous learning attitude.",
    ],
  },
  {
    title: "Trainee Developer Intern",
    company_name: "Principal Global Services",
    icon: Principal,
    iconBg: "#242635",
    date: "Jan 2023 - April 2023",
    points: [
      "4 months of learning in Java, JSP, Spring, and React.",
      "Built a small project using these technologies.",
      "Gained hands-on experience in software development.",
      "Instilled in me the value of continuous learning, adaptability, and teamwork in the ever-evolving tech landscape.",
    ],
  },
  {
    title: "Freelance Video Editor",
    company_name: "",
    icon: VideoEditing,
    iconBg: "#242635",
    date: "May 2023 - Jun 2023",
    points: [
      "With a self-taught approach, Honed my skills in video editing and have worked with Anshika Gupta, a popular YouTuber with over 160k subscribers, and various other clients.",
      "My edited videos, cumulatively have garnered over 310k views on YouTube.",
      "My expertise in editing, color grading, and visual storytelling have helped me deliver high-quality videos that align with the clients' vision.",
      "As a freelance video editor, I have gained extensive experience in working with clients from diverse backgrounds.",
    ],
  },
  {
    title: "Product and Growth Intern",
    company_name: "FrontRow",
    icon: FrontRow,
    iconBg: "#242635",
    date: "Aug 2021 - Dec 2021",
    points: [
      "Worked on the development of a fully organic growth funnel from scratch which primarily focused on the acquisition and activation process of the users.",
      "Understood the user journey by performing data analysis at every stage of the funnel and optimized the implementation of ideas based on the gathered inference.",
      "Focused on understanding the user behavior by directly talking with them, gauging their needs, and giving feedback to the team to make certain adjustments in App and Website to better the user experience.",
      "Managed WA community of over 200 groups and focused on user activation by the implementation of various ideas which hooked users to the product eventually leading to revenue.",
    ],
  },
];

export const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: React,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: ThreeJS,
  },
  {
    name: "C++",
    icon: Cplusplus,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Photoshop",
    icon: Photoshop,
  },
];

export const testimonials = [
  {
    testimonial:
      "I have directly worked with Yash during his time at FrontRow. He is high on hustle and ownership and always ensured that any task assigned to him was done beyond what was expected. Overall, I am glad to have worked with him and would like to have people like him my team!",
    name: "Vamsi Krishna Mula",
    designation: "Ex-FrontRow, Lightspeed, McKinsey | IIT Madras",
    company: "",
    image: Vamsi,
  },

  {
    testimonial:
      "I have worked with Yash for video editing and apart from having great skills he is also curious to learn more and implement new ideas. He has always been receptive to feedbacks and delivers work on time. I am confident that he would make a positive impact in any team he joins.",
    name: "Anshika Gupta",
    designation:
      "LinkedIn Top Voices 2021 | Software Engineer | Content Creator",
    company: "",
    image: Anshika,
  },

  {
    testimonial:
      "Yash consistently demonstrated sincerity and professionalism. He has a strong work ethic and always went the extra mile to ensure that deadlines were met and the work was completed on time. He is a team player and would be a valuable asset to any team.",
    name: "Sandhya Gupta",
    designation:
      "Full Stack Engineer @MyGate | MERN Stack Developer | Ex Hirect, TCS",
    company: "",
    image: Sandhya,
  },
];

export const aboutMe = [
  "Graduated from PICT, Pune with a 9.20 CGPA in E&TC engineering. I'm well-versed in MERN stack, C++, DSA, OOPS, DBMS, and OS, but I'm not afraid to step outside of my comfort zone and learn new things.",
  "During my college years, I started photography as a hobby and developed it to a level where I could monetize it.",
  "I also learned video editing and worked as a freelance video editor with an established YouTuber with over 183k subscribers, , amassing a total of 310k views on our edited content. Additionally, I started an advertising and digital marketing agency with a friend, serving multiple businesses across Pune.",
  "I'm someone who is comfortable in the unknown and can figure out a way through it individually or by asking for help. I'm always eager to learn and grow, and I'm excited to see what the future holds.",
];
