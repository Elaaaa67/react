import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
//import Agentlist from "./pages/Agentlist";
import TeamsCard from "./components/teamscard";
//import Test from "./pages/test";
function App() {
const title = 'Valorant app'
  return (
    <div>
      <Navbar></Navbar>
      <TeamsCard></TeamsCard>
      <Footer></Footer>
      
    </div>
  )

}

export default App
