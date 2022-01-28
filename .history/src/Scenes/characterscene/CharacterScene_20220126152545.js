import React, { useContext } from 'react';
import useLoadAsset from '../../utils/useLoadAsset';
import CharacterSceneAssetmap from './CharacterSceneAssetMap';
// bg sound charac class
function CharacterScene({ }) {
  const { Bg, Loading } = useLoadAsset(CharacterSceneAssetmap)
  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } = useContext(SceneContext);
  const { characterscene } = Assets;
  console.log(Assets)
  const Ref = useRef(null);

  useEffect(() => {
    if (Assets.explain && Ref.current && !Loading) {
      const ch = lottie.loadAnimation({
        name: "placeholder",
        container: Ref.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: explain?.lottie[0],
      })
    }
  }, [Assets, Loading])
    return <div>
      
  </div>;
}

export default CharacterScene;
