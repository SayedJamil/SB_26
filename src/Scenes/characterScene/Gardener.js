import lottie from 'lottie-web';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { SceneContext } from '../../contexts/SceneContext';
import Image from '../../utils/elements/Image';
import Scenes from '../../utils/Scenes';
import useLoadAsset from '../../utils/useLoadAsset';
import '../../styles/characterscene.css'
import PlayAudio from '../../utils/playAudio';
import { SoundContext } from '../../contexts/SoundContext';
import { Howl, Howler } from 'howler';
import AssetsMap from '../../Assets';

function Gardener() {
    const { Bg, Loading } = useLoadAsset(AssetsMap.gardener)

    const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets, setTransition, transition } = useContext(SceneContext);
    const { gardenerScene } = Assets;
    const { Sound, setSound, } = useContext(SoundContext)
    const Ref7 = useRef(null);


    const [buttonClicked, setButtonClicked] = useState(false)
    const sound = new Howl({
        src: [`ee01_ow_thss_pl1/audio/SB_26_Audio_05.mp3`],
    });
    const [playSound, setPlaySound] = useState(sound)

    useEffect(() => {

        playSound.play()
        playSound.on('end', () => {
            if (!buttonClicked) {
                setisLoading(true)
            }
            setSceneId('/teacher')
        })
    }, [])


    useEffect(() => {
        if (gardenerScene?.lottie && Ref7.current && !Loading) {
            try {
                lottie.loadAnimation({
                    name: "gardener",
                    container: Ref7.current,
                    renderer: "svg",
                    loop: true,
                    autoplay: true,
                    animationData: gardenerScene?.lottie[0],
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
                        setButtonClicked(true)
                        setisLoading(true)
                        setSceneId("/activity01")
                    }}>
                        <Image src={gardenerScene?.sprites[2]} alt="txt" className="next_button" />
                    </div>
                    {/* <div onClick={() => {
                        playSound.stop()
                        setButtonClicked(true)
                        setisLoading(true)
                        setSceneId("/doctor")
                    }}>
                        <Image src={gardenerScene?.sprites[3]} alt="txt" className="prev_button" />
                    </div> */}

                    <Image src={gardenerScene?.sprites[0]} alt="txt" className="iconGirl" />


                    <div ref={Ref7} className="gardenerSceneIcon" id="gardener"></div>

                </>
            }
        />
    );
}

export default Gardener;
