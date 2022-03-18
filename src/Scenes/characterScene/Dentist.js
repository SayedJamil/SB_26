import lottie from 'lottie-web';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { SceneContext } from '../../contexts/SceneContext';
import Image from '../../utils/elements/Image';
import Scenes from '../../utils/Scenes';
import useLoadAsset from '../../utils/useLoadAsset';
import '../../styles/characterscene.css'
import PlayAudio from '../../utils/playAudio';
import { Howl, Howler } from 'howler';
import { SoundContext } from '../../contexts/SoundContext';
import AssetsMap from '../../Assets';

function Dentist() {
    const { Bg, Loading } = useLoadAsset(AssetsMap.dentist)
    const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets, BG_sound } = useContext(SceneContext);
    const { dentistScene } = Assets;
    const { Sound, setSound, } = useContext(SoundContext)
    const Ref5 = useRef(null);
    const Ref501 = useRef(null);
    const [buttonClicked, setButtonClicked] = useState(false)
    const sound = new Howl({
        src: [`ee01_ow_thss_pl1/audio/sb_26_audio_29.mp3`],
    });
    const [playSound, setPlaySound] = useState(sound)

    useEffect(() => {

        playSound.play()
        playSound.on('end', () => {

            if (!buttonClicked) {
                setisLoading(true)
            }
            setSceneId('/guard')
        })

    }, [])




    useEffect(() => {
        if (dentistScene?.lottie && Ref5.current && !Loading) {
            const ch = lottie.loadAnimation({
                name: "dentist",
                container: Ref5.current,
                renderer: "svg",
                loop: true,
                autoplay: true,
                animationData: dentistScene?.lottie[0],
            })
        }
        if (dentistScene?.lottie && Ref501.current && !Loading) {
            const ch = lottie.loadAnimation({
                name: "circleGirl",
                container: Ref501.current,
                renderer: "svg",
                loop: true,
                autoplay: true,
                animationData: dentistScene?.lottie[1],
            })
        }
    }, [Assets, Loading])

    return (
        <Scenes
            Bg={Bg}
            sprites={
                <>

                    <div onClick={() => {
                        playSound.stop()
                        setButtonClicked(true)
                        setisLoading(true)
                        setSceneId("/guard")
                    }}>
                        <Image src={dentistScene?.sprites[2]} alt="txt" className="next_button" />
                    </div>
                    <div onClick={() => {
                        playSound.stop()
                        setButtonClicked(true)
                        setisLoading(true)
                        setSceneId("/floorcleaner")
                    }}>
                        <Image src={dentistScene?.sprites[3]} alt="txt" className="prev_button" />
                    </div>


                    <Image src={dentistScene?.sprites[0]} alt="txt" className="iconGirl" />
                    <div ref={Ref501} className="iconGirlEyes" id="circleGirl"></div>


                    <div ref={Ref5} className="dentistSceneIcon" id="dentist"></div>

                </>
            }
        />
    );
}

export default Dentist;
