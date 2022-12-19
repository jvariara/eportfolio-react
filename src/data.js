import NFTLanding from "./assets/projects/NFTMarket/NFTLanding.png";
import NFTCollections from "./assets/projects/NFTMarket/NFTCollections.png";
import NFTExplore from "./assets/projects/NFTMarket/NFTExplore.png";
import NFTItem from "./assets/projects/NFTMarket/NFTItem.png";
import NFTAuthor from "./assets/projects/NFTMarket/NFTAuthor.png";
import NFTLoading from "./assets/projects/NFTMarket/NFTLoading.png";

import LibraryLanding from "./assets/projects/LibraryReact/LibraryLanding.png";
import LibraryBooks from "./assets/projects/LibraryReact/LibraryBooks.png";
import LibraryBook from "./assets/projects/LibraryReact/LibraryBook.png";
import LibraryCart from "./assets/projects/LibraryReact/LibraryCart.png";
import LibraryLoading from "./assets/projects/LibraryReact/LibraryLoading.png";

import MovieLanding from "./assets/projects/MovieSearcher/MovieLanding.png";
import MovieList from "./assets/projects/MovieSearcher/MovieList.png";
import MovieDetail from "./assets/projects/MovieSearcher/MovieDetail.png";

import NetflixLanding from "./assets/projects/Netflix/NetflixLanding.png"
import NetflixSignIn from "./assets/projects/Netflix/NetflixSignIn.png"

export const projects = [
  {
    id: 1,
    title: "NFT Marketplace",
    url: "https://justin-internship.vercel.app/",
    description:
      "Transformed a completely static HTML, CSS, JavaScript and React single page application into an interactive user interface through the use of animations, transitions and carousels.",
    tech: ["React", "JavaScript", "CSS", "HTML"],
    pictures: [NFTLanding, NFTCollections, NFTExplore, NFTItem, NFTAuthor, NFTLoading],
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
    pictures: [LibraryLanding, LibraryBooks, LibraryBook, LibraryCart, LibraryLoading],
  },
  {
    id: 3,
    title: "Movie/TV Searcher",
    url: "https://movies-pi-jade.vercel.app/",
    github: "https://github.com/jvariara/Movies",
    description:
      "Designed, developed, and hosted from scratch a movie/TV lookup app using HTML5, CSS3 + BEM and React best practices. Uses the OMDB API.",
    tech: ["React", "Redux", "JavaScript", "CSS", "HTML"],
    pictures: [MovieLanding, MovieList, MovieDetail],
  },
  {
    id: 4,
    title: "Netflix Clone",
    url: "https://netflix-clone-1dcd3.web.app/",
    github: "https://github.com/jvariara/netflix-clone",
    description:
      "Application clone based on Netflix which uses Firebase for Google Sign-in/Logout Authentication as well as for the user database.",
    tech: ["React", "Firebase", "Tailwind", "JavaScript", "HTML"],
    pictures: [NetflixLanding, NetflixSignIn],
  },
];
