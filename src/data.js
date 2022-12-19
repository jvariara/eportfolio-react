import NFTLanding from "./assets/projects/NFTMarket/NFTLanding.png";
import LibraryLanding from "./assets/projects/LibraryReact/LibraryLanding.png";
import MovieLanding from "./assets/projects/MovieSearcher/MovieLanding.png";
import NetflixLanding from "./assets/projects/Netflix/NetflixLanding.png"

export const projects = [
  {
    id: 1,
    title: "NFT Marketplace",
    url: "https://justin-internship.vercel.app/",
    description:
      "Transformed a completely static HTML, CSS, JavaScript and React single page application into an interactive user interface through the use of animations, transitions and carousels.",
    tech: ["React", "JavaScript", "CSS", "HTML"],
    pictures: [NFTLanding, NFTLanding],
    certificate: true
  },
  {
    id: 2,
    title: "Library E-Commerce",
    url: "https://library-react-mu.vercel.app/",
    github: "https://github.com/jvariara/Library-React",
    description:
      "Created a fully dynamic E-Commerce website with a working shopping cart, item details page with recommendations, and filtering.",
    tech: ["React", "JavaScript", "CSS", "HTML"],
    pictures: [LibraryLanding],
  },
  {
    id: 3,
    title: "Movie/TV Searcher",
    url: "https://movies-pi-jade.vercel.app/",
    github: "https://github.com/jvariara/Movies",
    description:
      "Designed, developed, and hosted from scratch a movie/TV lookup app using HTML5, CSS3 + BEM and React best practices.",
    tech: ["React", "Redux", "JavaScript", "CSS", "HTML"],
    pictures: [MovieLanding],
  },
  {
    id: 4,
    title: "Netflix Clone",
    url: "https://netflix-clone-1dcd3.web.app/",
    github: "https://github.com/jvariara/netflix-clone",
    description:
      "Application clone based on Netflix which uses Firebase for Google Sign-in/Logout Authentication as well as for the user database.",
    tech: ["React", "Firebase", "Tailwind", "JavaScript", "HTML"],
    pictures: [NetflixLanding],
  },
];
