import React from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';

const Home = () => <h2> "PetPals" </h2>;
const Dogs = () => <h2> "Dogs"</h2>;
const Cats = () => <h2> "Cats"</h2>;
const About = () => <h2> "About"</h2>;

function App() {
  return (
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">PetPals</Link>
            </li>
            <li>
              <Link to="/dogs">Dogs</Link>
            </li>
            <li>
              <Link to="/cats">Cats</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
        
          </ul>
        </nav>

        {/* <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/dogs" component={Dogs} />
          <Route path="/cat" component={Cats} />
          <Route path="/about" component={About} />
        </Routes>  */}
        
      </div>
  );
}

export default App;