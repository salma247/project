import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import BlogList from "./pages/Blog";
import DeveloperDetails from "./pages/DeveloperDetails";
import Home from "./pages/Home";
import UnitDetails from "./pages/UnitDetails";
import Units from "./pages/Units";
// import Profile from './pages/Profile';

function App() {
  return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/units" element={<Units />} />
            <Route path="/units/:id" element={<UnitDetails />} />
            <Route path="/developers/:id" element={<DeveloperDetails />} />
            <Route path="/blog" element={<BlogList />} />
            {/* <Route path="/profile" element={<Profile />} /> */}
          </Routes>
        </main>
      </div>
  );
}

export default App;
