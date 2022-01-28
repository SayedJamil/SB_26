import React from 'react';
import { useContext, useRef, useEffect } from 'react';
import { SceneContext } from '../../contexts/SceneContext';
import Scenes from "../../utils/Scenes"
import useLoadAsset from '../../utils/useLoadAsset';
import PlayAudio from "../../utils/playAudio"
import ExplainMap from './ExplainAssetMap';
import lottie from "lottie-web"
import "../../styles/explain.css"
import Image from '../../utils/elements/Image';


export default function Explain() {
    const { Bg, Loading } = useLoadAsset(ExplainMap)
    const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } = useContext(SceneContext);
    const { explain } = Assets

    const Ref = useRef(null);

  useEffect(() => {
    if (Assets.intro && Ref.current && !Loading) {
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

  return <div></div>;
}
