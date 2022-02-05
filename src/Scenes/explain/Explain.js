import { useContext, useRef, useEffect, useState } from 'react';
import { SceneContext } from '../../contexts/SceneContext';
import Scenes from "../../utils/Scenes"
import useLoadAsset from '../../utils/useLoadAsset';
import lottie from "lottie-web"
import "../../styles/explain.css"
import "../../styles/characterscene.css"
import Image from '../../utils/elements/Image';
import { SoundContext } from '../../contexts/SoundContext';
import { Howler, Howl } from 'howler';
import AssetsMap from '../../Assets';

export default function Explain() {
  const { Bg, Loading } = useLoadAsset(AssetsMap.explain)
  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } = useContext(SceneContext);
  const { explain } = Assets;
  const { Sound, setSound, } = useContext(SoundContext)
  const Ref11 = useRef(null);

  const sound = new Howl({
    src: [`internal/audio/SB_26_Audio_01.mp3`],
  });
  const [playSound, setPlaySound] = useState(sound)

  useEffect(() => {
    playSound.play()
    playSound.on('end', () => {
      setisLoading(true)
      setSceneId('/armyman')

    })
  }, [])
  console.log(explain)
  useEffect(() => {
    if (explain?.lottie && Ref11.current && !Loading) {
      try {
        lottie.loadAnimation({
          name: "explaingirl",
          container: Ref11.current,
          renderer: "svg",
          loop: false,
          autoplay: true,
          animationData: explain?.lottie[0],
        })
      } catch (err) {
        console.log(err)
      }
    }
  }, [Assets, Loading])






  return (
    <Scenes
      Bg={Bg}
      sprites={
        <>
          <div onClick={() => {
            playSound.stop()
            setSceneId("/armyman")
            setisLoading(true)
          }}>
            <Image src={explain?.sprites[11]} alt="txt" className="next_button" />
          </div>



          <div>
            <Image src={explain?.sprites[0]} alt="" id="" className="helperIcon armymanIcon" />
          </div>

          <div>
            <Image src={explain?.sprites[1]} alt="" className="helperIcon dentistIcon" />
          </div>

          <div>
            <Image src={explain?.sprites[2]} alt="" className="helperIcon doctorIcon" />
          </div>

          <div>
            <Image src={explain?.sprites[3]} alt="" className="helperIcon fireFighterIcon" />
          </div>

          <div>
            <Image src={explain?.sprites[4]} alt="" className="helperIcon floorCleanerIcon" />
          </div>

          <div>
            <Image src={explain?.sprites[5]} alt="" className="helperIcon garbageCollectorIcon" />
          </div>

          <div>
            <Image src={explain?.sprites[6]} alt="t" className="helperIcon gardenerIcon" />
          </div>

          <div>
            <Image src={explain?.sprites[7]} alt="" className="helperIcon policeIcon" />
          </div>

          <div>
            <Image src={explain?.sprites[8]} alt="" className="helperIcon guardIcon" />
          </div>

          <div>
            <Image src={explain?.sprites[9]} alt="" className="helperIcon teacherIcon" />
          </div>


          <div ref={Ref11} className="girlIcon" id="explaingirl"></div>
        </>
      }
    />
  )
}
