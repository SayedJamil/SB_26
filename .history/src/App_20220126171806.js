import { useState, useEffect, useContext } from "react"
import Intro from "./Scenes/intro/Intro";
import GameContainer from "./utils/GameContainer"
import Router from "./utils/Router"
import "./styles/app.css"
import Explain from "./Scenes/explain/Explain";
import ArmyMan from "./Scenes/characterScene/ArmyMan";
import Dentist from "./Scenes/characterScene/Dentist";
import Doctor from "./Scenes/characterScene/Doctor";
import FireFighter from "./Scenes/characterScene/FireFighter";
import FloorCleaner from "./Scenes/characterScene/FloorCleaner";


function App() {

  const [Load, setLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false)
    }, 3000)
  }, []);


  if (Load) return <div className="intro_Loading_screen">Loading....</div>

  return (
    <GameContainer>
      <Router sceneId="/">
        <Intro />
      </Router>
      <Router sceneId="/explain">
        <Explain />
      </Router>
      <Router sceneId="/armyman">
        <ArmyMan />
      </Router>
      <Router sceneId="/dentist">
        <Dentist />
      </Router>
      <Router sceneId="/doctor">
        <Doctor />
      </Router>
      <Router sceneId="/firefighter">
        <FireFighter />
      </Router>
      <Router sceneId="/floorcleaner">
        <FloorCleaner />
      </Router>
      <Router sceneId="/gardener">
        <Gar />
      </Router>
      <Router sceneId="/garbagecollector">
        <ArmyMan />
      </Router>
      <Router sceneId="/police">
        <ArmyMan />
      </Router>
      <Router sceneId="/guard">
        <ArmyMan />
      </Router>
      <Router sceneId="/teacher">
        <ArmyMan />
      </Router>


    </GameContainer>
  );
}

export default App;
