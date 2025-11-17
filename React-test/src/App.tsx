import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TeamsCard from "./components/Agentlist";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/Apropos";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/Nofound";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import AgentEdit from "./pages/AgentEdit"; // 👈 la page d'édition
import AgentDetails from "./pages/AgentDetails";
import AgentAdd from "./pages/AgentAdd";
import Logout from "./pages/Logout";



const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <div style={{ padding: "2rem" }}>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/agents" element={<TeamsCard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/agents/:uuid" element={<AgentDetails />} />
          <Route path="/agents/add" element={<AgentAdd />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
            <Route path="agents/:uuid/edit" element={<AgentEdit />} /> {/* ✅ */}

          </Route>
        </Routes>
      </div>
    </>
  )
}
export default App;