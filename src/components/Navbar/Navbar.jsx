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
      <nav className="nav-container">
      <div className="header">
        <Link to = "/">PetPals</Link>
        </div>
        <ul className="nav-list">
            <li>
              <Link to="/alldogs">Dogs</Link>
            </li>
            <li>
              <Link to="/allcats">Cats</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
        </ul>
        <div className="profile-icon">
          <h4>Profile</h4>
        </div>
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