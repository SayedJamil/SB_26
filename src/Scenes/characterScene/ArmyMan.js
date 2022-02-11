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
import loadAudio from '../../utils/loadAudio.js'
import AssetsMap from '../../Assets';



function ArmyMan() {
    const { Bg, Loading } = useLoadAsset(AssetsMap.armyMan)
    const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets, transition, setTransition } = useContext(SceneContext);
    const { armyManScene } = Assets;
    const { Sound, setSound, } = useContext(SoundContext)
    const [sceneSound, setSceneSound] = useState(null)
    const Ref1 = useRef(null);
    const Ref101 = useRef(null);


    const [buttonClicked, setButtonClicked] = useState(false)
    const sound = new Howl({
        src: [`ee01_ow_thss_pl1/audio/SB_26_Audio_07.mp3`],
    });

    const [playSound, setPlaySound] = useState(sound)

    useEffect(() => {
        playSound.play()
        playSound.on('end', () => {
            if (!buttonClicked) {
                setisLoading(true)
            }
            setSceneId('/doctor')

        })

    }, [])




    useEffect(() => {
        if (armyManScene?.lottie && Ref1.current && !Loading) {
            try {
                lottie.loadAnimation({
                    name: "armyman",
                    container: Ref1.current,
                    renderer: "svg",
                    loop: true,
                    autoplay: true,
                    animationData: armyManScene?.lottie[0],
                })
            } catch (err) {
                console.log(err)
            }
        }
        if (armyManScene?.lottie && Ref101.current && !Loading) {
            try {
                lottie.loadAnimation({
                    name: "circleGirl",
                    container: Ref101.current,
                    renderer: "svg",
                    loop: false,
                    autoplay: true,
                    animationData: armyManScene?.lottie[1],
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


                    <Image src={armyManScene?.sprites[2]} alt="" className="next_button" onClick={() => {
                        playSound.stop()
                        setButtonClicked(true)
                        setisLoading(true)
                        setSceneId("/doctor")
                    }} />

                    <Image src={armyManScene?.sprites[3]} alt="" className="prev_button" onClick={() => {
                        playSound.stop()
                        setButtonClicked(true)
                        setisLoading(true)
                        setSceneId("/explain")
                    }} />


                    <Image src={armyManScene?.sprites[0]} alt="txt" className="iconGirl" />

                    <div ref={Ref101} className="iconGirlEyes" id="circleGirl"></div>
                    <div ref={Ref1} className="armyManSceneIcon" id="armyman"></div>

                </>
            }
        />
    );


}

export default ArmyMan;
