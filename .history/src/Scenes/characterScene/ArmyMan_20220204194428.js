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
    const { characteractivity } = Assets;
    const { Sound, setSound, muted, setMuted } = useContext(SoundContext)
    const [sceneSound, setSceneSound] = useState(null)
    const Ref1 = useRef(null);
    useEffect(() => {
        setTimeout(() => {
            setisLoading(false);
        }, 1000);
    }, []);
    const containerRef2 = useRef(null);
    useEffect(() => {
        if (transition && containerRef2.current && isLoading) {
            const ch = lottie.loadAnimation({
                name: "placeholder",
                container: containerRef2.current,
                renderer: "svg",
                loop: true,
                autoplay: true,
                animationData: transition,
            });
            ch.play()
        }

    }, [transition, isLoading]);
    const Ref41 = useRef(null);
    const sound = new Howl({
        src: [`internal/audio/SB_26_Audio_07.mp3`],
    });

    const [playSound, setPlaySound] = useState(sound)
    // var transition = lottie.loadAnimation({
    //     name: "transition",
    //     container: Ref41.current,
    //     renderer: "svg",
    //     loop: false,
    //     autoplay: true,
    //     animationData: characteractivity?.lottie[1],
    // })
    const [playTransition, setPlayTransition] = useState(transition)
    useEffect(() => {
        // playTransition.play()
        playSound.play()
        playSound.on('end', () => {
            // setSceneId('/doctor')
        })

    }, [])


    const toggle = () => setMuted(!muted)

    useEffect(() => {
        if (characteractivity?.lottie[0] && Ref1.current && !Loading) {
            try {
                lottie.loadAnimation({
                    name: "armyman",
                    container: Ref1.current,
                    renderer: "svg",
                    loop: true,
                    autoplay: true,
                    animationData: characteractivity?.lottie[0],
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
                    {/* {isLoading && (
                        <div
                            className="transition_style"
                            ref={containerRef2}
                            id='placeholder'
                            style={{
                                zIndex: 9999,
                                width: "200%",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%,-50%)",
                            }}
                        ></div>
                    )} */}

                    {/* <div ref={Ref41} className="transitionStyle" id="transition"></div> */}

                    <div onClick={() => {
                        playSound.stop()

                        setSceneId("/doctor")
                    }}>
                        <Image src={characteractivity?.sprites[2]} alt="txt" className="next_button" />
                    </div>
                    <div onClick={() => {
                        playSound.stop()

                        setSceneId("/explain")

                    }}>
                        <Image src={characteractivity?.sprites[3]} alt="txt" className="prev_button" />
                    </div>

                    {
                        muted
                            ? <div onClick={() => {
                                Howler.volume(1)
                                toggle()
                            }}>
                                <Image src={characteractivity?.sprites[5]} alt="txt" className="music_button" />
                            </div>
                            : <div onClick={() => {
                                Howler.volume(0)
                                toggle()
                            }}>
                                <Image src={characteractivity?.sprites[4]} alt="txt" className="music_button" />
                            </div>
                    }

                    <Image src={characteractivity?.sprites[0]} alt="txt" className="iconGirl" />


                    <div ref={Ref1} className="armyManSceneIcon" id="armyman"></div>

                </>
            }
        />
    );


}

export default ArmyMan;
