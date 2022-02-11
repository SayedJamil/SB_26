import lottie from 'lottie-web';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { SceneContext } from '../../contexts/SceneContext';
import Image from '../../utils/elements/Image';
import Scenes from '../../utils/Scenes';
import useLoadAsset from '../../utils/useLoadAsset';
import '../../styles/characterscene.css'
import PlayAudio from '../../utils/playAudio';
import { SoundContext } from '../../contexts/SoundContext';
import { Howler, Howl } from 'howler';
import AssetsMap from '../../Assets';

function Doctor() {
    const { Bg, Loading } = useLoadAsset(AssetsMap.doctor)
    const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets, setTransition, transition } = useContext(SceneContext);
    const { doctorScene } = Assets;
    const { Sound, setSound, } = useContext(SoundContext)
    const Ref3 = useRef(null);
    const Ref301 = useRef(null);

    const [buttonClicked, setButtonClicked] = useState(false)
    const sound = new Howl({
        src: [`ee01_ow_thss_pl1/audio/SB_26_Audio_03.mp3`],
    });
    const [playSound, setPlaySound] = useState(sound)

    useEffect(() => {

        playSound.play()
        playSound.on('end', () => {
            if (!buttonClicked) {
                setisLoading(true)
            }
            setSceneId('/gardener')
        })

    }, [])




    useEffect(() => {
        if (doctorScene?.lottie && Ref3.current && !Loading) {
            try {
                lottie.loadAnimation({
                    name: "doctor",
                    container: Ref3.current,
                    renderer: "svg",
                    loop: true,
                    autoplay: true,
                    animationData: doctorScene?.lottie[0],
                })
            } catch (err) {
                console.log(err)
            }
        }
        if (doctorScene?.lottie && Ref301.current && !Loading) {
            try {
                lottie.loadAnimation({
                    name: "circleGirl",
                    container: Ref301.current,
                    renderer: "svg",
                    loop: true,
                    autoplay: true,
                    animationData: doctorScene?.lottie[1],
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
                        setSceneId("/gardener")
                    }}>
                        <Image src={doctorScene?.sprites[2]} alt="txt" className="next_button" />
                    </div>
                    <div onClick={() => {
                        playSound.stop()
                        setButtonClicked(true)
                        setisLoading(true)
                        setSceneId("/armyman")
                    }}>
                        <Image src={doctorScene?.sprites[3]} alt="txt" className="prev_button" />
                    </div>

                    <Image src={doctorScene?.sprites[0]} alt="txt" className="iconGirl" />

                    <div ref={Ref301} className="iconGirlEyes" id="circleGirl"></div>

                    <div ref={Ref3} className="doctorSceneIcon" id="doctor"></div>


                </>
            }
        />
    );



}

export default Doctor;
