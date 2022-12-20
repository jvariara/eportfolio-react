import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from 'react-router-dom'
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import Tech from "./components/Tech";

function App() {

  

  return (
    <Router>
      <Navbar />
      <Landing />
      <Tech />
      <Projects />
    </Router>
  );
}

export default App;
