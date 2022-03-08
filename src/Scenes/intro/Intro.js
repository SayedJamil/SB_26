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
  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets, BG_sound } = useContext(SceneContext);
  const { intro } = Assets;

  const [buttonClicked, setButtonClicked] = useState(true)
  const sound = new Howl({
    src: [`ee01_ow_thss_pl1/audio/SB_26_Audio_01.mp3`],
  });
  const [playSound, setPlaySound] = useState(sound)
  const [buttonPressed, setButtonPressed] = useState(false)
  useEffect(() => {
    var changeClass = document.querySelector('.music_button')
    changeClass.style.display = 'none'
  }, [])
  const handlePlayButtonClick = () => {
    if (buttonClicked) {
      setButtonClicked(false)
      setButtonPressed(true)
      navigator.vibrate(200);
      playSound.play()
      BG_sound?.play()
      playSound.on('end', () => {
        setisLoading(true)
        setSceneId('/explain')
      })
    }
  }
  return (
    <Scenes
      Bg={Bg}
      sprites={
        <>

          <Image src={intro?.sprites[2]} alt="" id='' className={`play_btn ${(buttonPressed) ? 'disappearButton' : null}`} onClick={() => handlePlayButtonClick()} />

          <Image src={intro?.sprites[0]} alt="txt" className="introIcons noClick" />
          <Image src={intro?.sprites[1]} alt="txt" className="title noClick" />


          {/* <div ref={Ref} className="intro_lottie_container"></div> */}
        </>
      }
    />
  )
}
