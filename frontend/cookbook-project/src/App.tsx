import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//vvvvvvvvvvvvvvvvvvvv| PAGES |vvvvvvvvvvvvvvvvvvvv//
import HomePage from "./pages/home";
import SearchPage from "./pages/search";
import ExplorePage from "./pages/explore";
import FriendsPage from "./pages/friends";
import AboutUs from "./pages/about";
import ViewRecipe from "./pages/view-recipe";
import ProfilePage from "./pages/profile";
import ViewCategory from "./pages/view-category";
//^^^^^^^^^^^^^^^^^^^^| PAGES |^^^^^^^^^^^^^^^^^^^^//

//vvvvvvvvvvvvvvvvvvvv| COMPONENTS |vvvvvvvvvvvvvvvvvvvv//
import Navbar from "./components/navbar";
import Footer from "./components/footer";
//^^^^^^^^^^^^^^^^^^^^| COMPONENTS |^^^^^^^^^^^^^^^^^^^^//

//vvvvvvvvvvvvvvvvvvvv| STYLES |vvvvvvvvvvvvvvvvvvvv//
import "./components/styles/navbar.css";
import "./components/styles/mealcard.css";
import "./components/styles/category.css";
import "./components/styles/footer.css";

import "./pages/styles/search.css";
import "./pages/styles/view-meal.css";
import "./pages/styles/profile.css";
import "./pages/styles/home.css";
import "./pages/styles/view-categories.css"
//^^^^^^^^^^^^^^^^^^^^| STYLES |^^^^^^^^^^^^^^^^^^^^//

function AppLayout() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/friends" element={<FriendsPage />} />
          <Route path="/view-recipe" element={<ViewRecipe />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/view-category" element={<ViewCategory />} />
        </Routes>
      </main>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
