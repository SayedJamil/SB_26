import { useState, useEffect, useContext } from "react"
import Intro from "./Scenes/intro/Intro";
import GameContainer from "./utils/GameContainer"
import Router from "./utils/Router"
import "./styles/app.css"
import Explain from "./Scenes/explain/Explain";
import CharacterScene from "./Scenes/characterscene/CharacterScene";
import { SceneContext } from "./contexts/SceneContext";
import useLoadAsset from "./utils/useLoadAsset";
import SceneAssetmap from "./SceneAssetMap";

function App() {
  const { Bg, Loading } = useLoadAsset(SceneAssetmap)
  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } = useContext(SceneContext);
  const { sceneassetmap } = Assets;
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
      
      
    </GameContainer>
  );
}

export default App;
