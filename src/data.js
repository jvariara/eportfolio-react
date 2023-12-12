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

import NetflixLanding from "./assets/projects/Netflix/NetflixLanding.png";
import NetflixSignIn from "./assets/projects/Netflix/NetflixSignIn.png";

import PromptLanding from "./assets/projects/Promptopia/Landing.png";
import PromptProfile from "./assets/projects/Promptopia/Profile.png";
import PromptEdit from "./assets/projects/Promptopia/Edit.png";
import PromptCreate from "./assets/projects/Promptopia/Create.png";

import CircleUBLanding from "./assets/projects/CircleUB/Landing.png";
import CircleUBLogin from "./assets/projects/CircleUB/Login.png";
import CircleUBUserHomepage from "./assets/projects/CircleUB/UserHomepage.png";
import CircleUBProfile from "./assets/projects/CircleUB/Profile.png";
import CircleUBOtherProfile from "./assets/projects/CircleUB/OtherProfile.png";
import CircleUBCommentPage from "./assets/projects/CircleUB/CommentPage.png";
import CircleUBDM from "./assets/projects/CircleUB/DM.png";

import BreaditCommunity from "./assets/projects/Reddit/BreaditCommunity.png";
import BreaditFeed from "./assets/projects/Reddit/BreaditFeed.png";
import BreaditSignIn from "./assets/projects/Reddit/BreaditSignIn.png";
import BreaditCreateCommunity from "./assets/projects/Reddit/BreaditCreateCommunity.png";
import BreaditCreatePost from "./assets/projects/Reddit/BreaditCreatePost.png";
import BreaditPost from "./assets/projects/Reddit/BreaditPost.png";
import BreaditSettings from "./assets/projects/Reddit/BreaditSettings.png";

import EToolHome from "./assets/projects/EvaluationTool/EToolHome.png";
import EToolHistory from "./assets/projects/EvaluationTool/EToolHistory.png";
import EToolLibrary from "./assets/projects/EvaluationTool/EToolLibrary.png";
import EToolAddCourse from "./assets/projects/EvaluationTool/EToolAddCourse.png";
import EToolAddSurvey from "./assets/projects/EvaluationTool/EToolAddSurvey.png";
import EToolViewResults from "./assets/projects/EvaluationTool/EToolViewResults.png";

import ReactImg from "./assets/languages/react.png";
import JSImg from "./assets/languages/javascript.png";
import HTMLImg from "./assets/languages/html5.png";
import CSSImg from "./assets/languages/css3.png";
import PythonImg from "./assets/languages/python.png";
import JavaImg from "./assets/languages/java.png";
import ScalaImg from "./assets/languages/scala.png";
import CImg from "./assets/languages/c.png";
import NextImg from "./assets/languages/Next.js.png";

export const projects = [
  {
    id: 1,
    title: "NFT Marketplace",
    url: "https://justin-internship.vercel.app/",
    description:
      "Transformed a completely static HTML, CSS, JavaScript and React single page application into an interactive user interface through the use of animations, transitions and carousels.",
    tech: ["React", "JavaScript", "CSS", "HTML"],
    pictures: [
      NFTLanding,
      NFTCollections,
      NFTExplore,
      NFTItem,
      NFTAuthor,
      NFTLoading,
    ],
    certificate: true,
  },
  {
    id: 2,
    title: "UB Evaluation Tool",
    description:
      "Refactored and modernized UB CSE's current evaluation tool web application with usability in mind. Converted the application to a React single page application.",
    tech: ["React", "JavaScript", "CSS", "Figma", "Trello", "MySQL", "PHP"],
    pictures: [
      EToolHome,
      EToolHistory,
      EToolLibrary,
      EToolAddCourse,
      EToolAddSurvey,
      EToolViewResults,
    ],
  },
  {
    id: 3,
    title: "Library E-Commerce",
    url: "https://library-react-mu.vercel.app/",
    github: "https://github.com/jvariara/Library-React",
    description:
      "Created a fully dynamic E-Commerce website with a working shopping cart, item details page with recommendations, and filtering.",
    tech: ["React", "JavaScript", "CSS", "HTML"],
    pictures: [
      LibraryLanding,
      LibraryBooks,
      LibraryBook,
      LibraryCart,
      LibraryLoading,
    ],
  },
  {
    id: 4,
    title: "CircleUB",
    url: "https://webdev.cse.buffalo.edu/hci/teams/pentagon",
    description:
      "Social Media application catered towards University at Buffalo students to find clubs and events. Created with React",
    tech: ["React", "CSS", "Zenhub", "Figma"],
    pictures: [
      CircleUBLanding,
      CircleUBLogin,
      CircleUBUserHomepage,
      CircleUBCommentPage,
      CircleUBDM,
      CircleUBProfile,
      CircleUBOtherProfile,
    ],
  },
  {
    id: 5,
    title: "Breadit",
    url: "https://reddit-clone-rosy.vercel.app/",
    github: "https://github.com/jvariara/reddit-clone",
    description:
      "Application clone based on the Social Media App Reddit. Create/join communities, publish, comment, and rate subreddits.",
    tech: ["React", "Next.js 13", "Tailwind CSS", "Auth", "Prisma", "MySQL"],
    pictures: [
      BreaditFeed,
      BreaditSignIn,
      BreaditCommunity,
      BreaditPost,
      BreaditCreatePost,
      BreaditCreateCommunity,
      BreaditSettings,
    ],
  },
  {
    id: 6,
    title: "Promptopia",
    url: "https://promptopia-jvariara.vercel.app/",
    github: "https://github.com/jvariara/Promptopia",
    description:
      "Promptopia is an open-source AI prompting tool for modern world to discover, create and share creative prompts. Created with Next.js and MongoDB",
    tech: ["Next.js", "MongoDB", "Tailwind CSS"],
    pictures: [PromptLanding, PromptProfile, PromptCreate, PromptEdit],
  },
  {
    id: 6,
    title: "Movie/TV Searcher",
    url: "https://movies-pi-jade.vercel.app/",
    github: "https://github.com/jvariara/Movies",
    description:
      "Designed, developed, and hosted from scratch a movie/TV lookup app using HTML5, CSS3 + BEM and React best practices. Uses the OMDB API.",
    tech: ["React", "Redux", "JavaScript", "CSS", "HTML"],
    pictures: [MovieLanding, MovieList, MovieDetail],
  },
];

export const technologies = [
  {
    id: 1,
    language: "React",
    picture: ReactImg,
  },
  {
    id: 2,
    language: "Next.js",
    picture: NextImg,
  },
  {
    id: 3,
    language: "JavaScript",
    picture: JSImg,
  },
  {
    id: 4,
    language: "HTML5",
    picture: HTMLImg,
  },
  {
    id: 5,
    language: "CSS3",
    picture: CSSImg,
  },
  {
    id: 6,
    language: "Python",
    picture: PythonImg,
  },
  {
    id: 7,
    language: "Java",
    picture: JavaImg,
  },
  {
    id: 8,
    language: "C",
    picture: CImg,
  },
];
