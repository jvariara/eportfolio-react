import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from 'react-router-dom'
import Landing from "./components/Landing";

function App() {

  

  return (
    <Router>
      <Navbar />
      <Landing />
    </Router>
  );
}

export default App;
