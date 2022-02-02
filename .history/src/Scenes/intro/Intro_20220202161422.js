import { useContext, useRef, useEffect } from 'react';
import { SceneContext } from '../../contexts/SceneContext';
import Scenes from "../../utils/Scenes"
import useLoadAsset from '../../utils/useLoadAsset';
import PlayAudio from "../../utils/playAudio"
import IntroMap from './AssetMap';
import lottie from "lottie-web"
import "../../styles/intro.css"
import Image from '../../utils/elements/Image';


export default function Intro() {
  const { Bg, Loading } = useLoadAsset(IntroMap)
  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } = useContext(SceneContext);
  const { intro } = Assets;

  // const Ref = useRef(null);

  // useEffect(() => {
  //   if (Assets.intro && Ref.current && !Loading) {
  //     const ch = lottie.loadAnimation({
  //       name: "placeholder",
  //       container: Ref.current,
  //       renderer: "svg",
  //       loop: true,
  //       autoplay: true,
  //       animationData: intro?.lottie[0],
  //     })
  //   }
  // }, [Assets, Loading])

  return (
    <Scenes
      Bg={Bg}
      sprites={
        <>
          <div onClick={() => setSceneId('/firefighter')}>
            <Image src={intro?.sprites[7]} alt="" id='' className="play_btn" />
          </div>
          {/* <button
            className="play_btn01"
            onClick={() => {
              // PlayAudio(intro?.sounds[0])
              setSceneId("/explain")
            }}>
            Play
          </button> */}
          <Image src={intro?.sprites[0]} alt="txt" className="armyMan" />
          <Image src={intro?.sprites[0]} alt="txt" className="armyMan" />
          <Image src={intro?.sprites[1]} alt="txt" className="doctor" />
          <Image src={intro?.sprites[2]} alt="txt" className="fireFighter" />
          <Image src={intro?.sprites[3]} alt="txt" className="garbageCollector" />
          <Image src={intro?.sprites[4]} alt="txt" className="police" />
          <Image src={intro?.sprites[5]} alt="txt" className="guard" />
          <Image src={intro?.sprites[6]} alt="txt" className="title" />


          {/* <div ref={Ref} className="intro_lottie_container"></div> */}
        </>
      }
    />
  )
}
