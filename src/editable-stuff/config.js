// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Dhiraj",
  middleName: "Kumar",
  lastName: "Jaiswal",
  message: " message . ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/Dhetik",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/Dheeraj83721/",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/_dheeraj_7/?fbclid=IwAR2oLUspQIiE-Om3ts5AObSWmOc2kc2YrYfTJjx67SZIToCC8TSWz89c_xc",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/dhiraj-kumar-jaiswal-a260a1183/",
    },
    {
      image: "fa-twitter",
      url: "https://twitter.com/Dheeraj83721",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/person.png"),
  imageSize: 375,
  message:
    "My name is Dhiraj Kumar Jaiswal. I’m a Enthusiastic and well organized with leadership qualities who is eager to learn new   things and implement them to overcome real world challenges.",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "Dheeraj", 
  reposLength: 12,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/person.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/person.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Java", value: 85 },
    { name: "Microsoft Power Apps", value: 88 },
    { name: "Spring", value: 65 },
    { name: "Html & Css", value: 75 },
    { name: "JavaScript", value: 75 },
    { name: "C++", value: 70 },
  ],

  softSkills: [
    { name: "Leadership", value: 88 },
    { name: "Time Management", value: 85 },
    { name: "Communication ", value: 85 },
    { name: "Presentation Skills", value: 80 },
    // { name: "softSkills 5", value: 75 },
    // { name: "softSkills 6", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm Enthusiastic and well organized with leadership qualities who is eager to learn new   things and implement them to overcome real world challenges.",
  email: "dheeraj83721@gmail.com",
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch };
