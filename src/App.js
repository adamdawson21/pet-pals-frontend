import { Routes, Route } from "react-router-dom";
import PetNavbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import AllCats from "./pages/AllCats/AllCats";
import AllDogs from "./pages/AllDogs/AllDogs";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Profile from "./pages/Profile/Profile";
import PetDetail from "./pages/PetDetail/PetDetail";
import { useState } from "react";
import { verifyUser } from "./services/users";
import { useEffect } from "react";
import "./App.css";
import ScrollToTopNavigation from "./components/ScrollToTop/ScrollToTop";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser();
      user ? setUser(user) : setUser(null);
    };
    fetchUser();
  }, []);

  return (
    <div className="App">
      <PetNavbar user={user} setUser={setUser} />
      <ScrollToTopNavigation />
      <Routes >
        <Route path="/" element={<Home user={user} />} />
        <Route path="/about" element={<About user={user} />} />
        <Route path="/allcats" element={<AllCats user={user} />} />
        <Route path="/alldogs" element={<AllDogs user={user} />} />
        <Route path="/signin" element={<SignIn setUser={setUser} />} />
        <Route path="/signup" element={<SignUp setUser={setUser} />} />
        <Route path="/profile" element={<Profile user={user} />} />
        <Route path="allcats/:id" element={<PetDetail user={user} />} />
        <Route path="alldogs/:id" element={<PetDetail user={user} />} />
      </Routes>
      <Footer />
    </div>
  );
}
