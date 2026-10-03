import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/home";
import SearchPage from "./pages/search";
import ExplorePage from "./pages/explore";
import FriendsPage from "./pages/friends";
import AboutUs from "./pages/about";
import ViewRecipe from "./pages/view-recipe";

//vvvvvvvvvvvvvvvvvvvv| STYLES |vvvvvvvvvvvvvvvvvvvv//
import "./components/styles/navbar.css";
import "./pages/styles/search.css";
import "./pages/styles/view-meal.css";
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
