import lottie from "lottie-web"
import React, { useContext, useEffect, useRef } from 'react';
import { SceneContext } from '../../contexts/SceneContext';
import Image from "../../utils/elements/Image";
import Scenes from "../../utils/Scenes";
import useLoadAsset from '../../utils/useLoadAsset';
import CharacterSceneAssetmap from './CharacterSceneAssetMap';
// bg sound charac class
function CharacterScene({bg,icon,sound,className }) {
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
        animationData: characterscene?.lottie[0],
      })
    }
  }, [Assets, Loading])
  return (
    <Scenes
      Bg={bg}
      sprites={
        <>
          <Image src={icon} alt="" className={className} />
          
        </>
      }
    />
  );
}

export default CharacterScene;
