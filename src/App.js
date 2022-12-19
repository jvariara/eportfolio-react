import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from 'react-router-dom'
import Landing from "./components/Landing";
import Projects from "./components/Projects";

function App() {

  

  return (
    <Router>
      <Navbar />
      <Landing />
      <Projects />
    </Router>
  );
}

export default App;
