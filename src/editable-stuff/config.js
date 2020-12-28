// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Program",
  middleName: "",
  lastName: "Warehouse",
  message: " message . ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/program-warehouse",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/programwarehouse",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/programwarehouse/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/company/program-warehouse/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/ProgramWH/",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/person.png"),
  imageSize: 375,
  message:
    "My name is Program Warehouse. I’m a Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ",
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
  gitHubUsername: "program-warehouse", 
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
    { name: "Skill 1", value: 90 },
    { name: "Skill 2", value: 75 },
    { name: "Skill 3", value: 85 },
    { name: "Skill 4", value: 65 },
    { name: "Skill 5", value: 90 },
    { name: "Skill 6", value: 65 },
  ],
  softSkills: [
    { name: "softSkills 1", value: 80 },
    { name: "softSkills 2", value: 90 },
    { name: "softSkills 3", value: 75 },
    { name: "softSkills 4", value: 85 },
    { name: "softSkills 5", value: 75 },
    { name: "softSkills 6", value: 90 },
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
