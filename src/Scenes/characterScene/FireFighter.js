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

function FireFighter() {
    const { Bg, Loading } = useLoadAsset(AssetsMap.fireFighter)
    const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets, BG_sound } = useContext(SceneContext);
    const { fireFighterScene } = Assets;
    const Ref4 = useRef(null);
    const Ref401 = useRef(null);
    const { Sound, setSound } = useContext(SoundContext)

    const [buttonClicked, setButtonClicked] = useState(false)
    const sound = new Howl({
        src: [`ee01_ow_thss_pl1/audio/SB_26_Audio_27.mp3`],
    });
    const [playSound, setPlaySound] = useState(sound)

    useEffect(() => {

        playSound.play()
        playSound.on('end', () => {

            if (!buttonClicked) {
                setisLoading(true)
            }
            setSceneId('/floorcleaner')
        })
    }, [])



    useEffect(() => {
        if (fireFighterScene?.lottie && Ref4.current && !Loading) {
            try {
                lottie.loadAnimation({
                    name: "firefighter",
                    container: Ref4.current,
                    renderer: "svg",
                    loop: true,
                    autoplay: true,
                    animationData: fireFighterScene?.lottie[0],
                })
            } catch (err) {
                console.log(err)
            }
        }
        if (fireFighterScene?.lottie && Ref401.current && !Loading) {
            try {
                lottie.loadAnimation({
                    name: "circleGirl",
                    container: Ref401.current,
                    renderer: "svg",
                    loop: true,
                    autoplay: true,
                    animationData: fireFighterScene?.lottie[1],
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
                        setSceneId("/floorcleaner")
                    }}>
                        <Image src={fireFighterScene?.sprites[2]} alt="txt" className="next_button" />
                    </div>

                    <Image src={fireFighterScene?.sprites[0]} alt="txt" className="iconGirl" />
                    <div ref={Ref401} className="iconGirlEyes" id="circleGirl"></div>
                    <div ref={Ref4} className="fireFighterSceneIcon" id="firefighter"></div>
                </>
            }
        />
    );
}

export default FireFighter;