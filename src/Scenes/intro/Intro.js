import { useContext, useRef, useEffect, useState } from 'react';
import { SceneContext } from '../../contexts/SceneContext';
import Scenes from "../../utils/Scenes"
import useLoadAsset from '../../utils/useLoadAsset';
import PlayAudio from "../../utils/playAudio"
import lottie from "lottie-web"
import "../../styles/intro.css"
import Image from '../../utils/elements/Image';
import AssetsMap from '../../Assets';
import { Howl } from 'howler';


export default function Intro() {

  const { Bg, Loading } = useLoadAsset(AssetsMap.intro)
  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } = useContext(SceneContext);
  const { intro } = Assets;

  const [buttonClicked, setButtonClicked] = useState(false)
  const sound = new Howl({
    src: [`ee01_ow_thss_pl1/audio/SB_26_Audio_01.mp3`],
  });
  const [playSound, setPlaySound] = useState(sound)

  useEffect(() => {
    playSound.play()
  }, [])

  return (
    <Scenes
      Bg={Bg}
      sprites={
        <>
          <div onClick={() => {
            navigator.vibrate(200);
            playSound.stop()
            setSceneId('/explain')
            setisLoading(true)
          }}>
            <Image src={intro?.sprites[2]} alt="" id='' className="play_btn" />
          </div>

          <Image src={intro?.sprites[0]} alt="txt" className="introIcons" />
          <Image src={intro?.sprites[1]} alt="txt" className="title" />


          {/* <div ref={Ref} className="intro_lottie_container"></div> */}
        </>
      }
    />
  )
}
