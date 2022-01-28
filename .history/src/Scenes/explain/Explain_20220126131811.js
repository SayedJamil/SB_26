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
  const { explainAsset } = Assets

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

  return <Scenes
    Bg={Bg}
    sprites={
      <>
        <Image src={explain?.sprites[0]} alt="txt" className="helperIcon armymanIcon" />
        <Image src={explain?.sprites[1]} alt="txt" className="helperIcon dentistIcon" />
        <Image src={explain?.sprites[2]} alt="txt" className="helperIcon doctorIcon" />
        <Image src={explain?.sprites[3]} alt="txt" className="helperIcon fireFighterIcon" />
        <Image src={explain?.sprites[4]} alt="txt" className="helperIcon floorCleanerIcon" />
        <Image src={explain?.sprites[5]} alt="txt" className="helperIcon garbageCollectorIcon" />
        <Image src={explain?.sprites[6]} alt="txt" className="helperIcon gardenerIcon" />
        <Image src={explain?.sprites[7]} alt="txt" className="helperIcon policeIcon" />
        <Image src={explain?.sprites[8]} alt="txt" className="helperIcon guardIcon" />
        <Image src={explain?.sprites[9]} alt="txt" className="helperIcon teacherIcon" />
        <Image src={explain?.sprites[10]} alt="txt" className="girlIcon" />
      </>
    }
  />;
}
