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
        animationData: explainAsset?.lottie[0],
      })
    }
  }, [Assets, Loading])

  return <Scenes
    Bg={Bg}
    sprites={
      <>
        <div>
          <Image src={explainAsset?.sprites[0]} alt="txt"
            id="fadeup" className="helperIcon armymanIcon" />
        </div>

        <Image src={explainAsset?.sprites[1]} alt="" className="helperIcon dentistIcon" />
        <Image src={explainAsset?.sprites[2]} alt="" className="helperIcon doctorIcon" />
        <Image src={explainAsset?.sprites[3]} alt="" className="helperIcon fireFighterIcon" />
        <Image src={explainAsset?.sprites[4]} alt="" className="helperIcon floorCleanerIcon" />
        <Image src={explainAsset?.sprites[5]} alt="" className="helperIcon garbageCollectorIcon" />
        <Image src={explainAsset?.sprites[6]} alt="t" className="helperIcon gardenerIcon" />
        <Image src={explainAsset?.sprites[7]} alt="" className="helperIcon policeIcon" />
        <Image src={explainAsset?.sprites[8]} alt="" className="helperIcon guardIcon" />
        <Image src={explainAsset?.sprites[9]} alt="" className="helperIcon teacherIcon" />
        <Image src={explainAsset?.sprites[10]} alt="" className="girlIcon" />
      </>
    }
  />;
}
