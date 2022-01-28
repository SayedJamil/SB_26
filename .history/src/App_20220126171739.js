import { useState, useEffect, useContext } from "react"
import Intro from "./Scenes/intro/Intro";
import GameContainer from "./utils/GameContainer"
import Router from "./utils/Router"
import "./styles/app.css"
import Explain from "./Scenes/explain/Explain";
import ArmyMan from "./Scenes/characterScene/ArmyMan";


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
        <ArmyMan />
      </Router>
      <Router sceneId="/doctor">
        <ArmyMan />
      </Router>
      <Router sceneId="/firefighter">
        <ArmyMan />
      </Router>
      <Router sceneId="/floorcleaner">
        <ArmyMan />
      </Router>
      <Router sceneId="/gardener">
        <ArmyMan />
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
      <Router sceneId="/armyman">
        <ArmyMan />
      </Router>


    </GameContainer>
  );
}

export default App;
