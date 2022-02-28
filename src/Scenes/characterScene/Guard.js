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

function Guard() {
    const { Bg, Loading } = useLoadAsset(AssetsMap.guard)
    const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets, BG_sound } = useContext(SceneContext);
    const { guardScene } = Assets;
    const { Sound, setSound, } = useContext(SoundContext)
    const Ref8 = useRef(null);
    const Ref801 = useRef(null);

    const [buttonClicked, setButtonClicked] = useState(false)
    const sound = new Howl({
        src: [`ee01_ow_thss_pl1/audio/SB_26_Audio_30.mp3`],
    });
    const [playSound, setPlaySound] = useState(sound)

    useEffect(() => {
        BG_sound.volume(0.05)
        playSound.play()
        playSound.on('end', () => {
            BG_sound.volume(0.2)
            if (!buttonClicked) {
                setisLoading(true)
            }
            setSceneId('/garbagecollector')
        })
    }, [])


    useEffect(() => {
        if (guardScene?.lottie && Ref8.current && !Loading) {
            try {
                lottie.loadAnimation({
                    name: "guard",
                    container: Ref8.current,
                    renderer: "svg",
                    loop: true,
                    autoplay: true,
                    animationData: guardScene?.lottie[0],
                })
            } catch (err) {
                console.log(err)
            }
        }
        if (guardScene?.lottie && Ref801.current && !Loading) {
            try {
                lottie.loadAnimation({
                    name: "circleGirl",
                    container: Ref801.current,
                    renderer: "svg",
                    loop: false,
                    autoplay: true,
                    animationData: guardScene?.lottie[1],
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
                        setSceneId("/garbagecollector")
                    }}>
                        <Image src={guardScene?.sprites[2]} alt="txt" className="next_button" />
                    </div>
                    <div onClick={() => {
                        playSound.stop()
                        setButtonClicked(true)
                        setisLoading(true)
                        setSceneId("/dentist")
                    }}>
                        <Image src={guardScene?.sprites[3]} alt="txt" className="prev_button" />
                    </div>

                    <Image src={guardScene?.sprites[0]} alt="txt" className="iconGirl" />
                    <Image src={guardScene?.sprites[23]} alt="" className="guardShadow" />
                    <div ref={Ref801} className="iconGirlEyes" id="circleGirl"></div>
                    <div ref={Ref8} className="guardSceneIcon" id="guard"></div>
                </>
            }
        />
    );
}

export default Guard;
