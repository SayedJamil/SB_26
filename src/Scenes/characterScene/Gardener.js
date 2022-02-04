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
    const { Sound, setSound, muted, setMuted } = useContext(SoundContext)
    const Ref7 = useRef(null);
    const Ref42 = useRef(null);

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

    // var transition = lottie.loadAnimation({
    //     name: "transition",
    //     container: Ref42.current,
    //     renderer: "svg",
    //     loop: false,
    //     autoplay: true,
    //     animationData: gardenerScene?.lottie[1],
    // })

    const sound = new Howl({
        src: [`internal/audio/SB_26_Audio_05.mp3`],
    });
    const [playSound, setPlaySound] = useState(sound)

    useEffect(() => {
        // transition.play()
        playSound.play()
        playSound.on('end', () => {
            setSceneId('/teacher')
        })
    }, [])

    const toggle = () => setMuted(!muted)
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
                    {isLoading && (
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
                    )}
                    <div onClick={() => {
                        Howler.stop()
                        setSceneId("/teacher")
                    }}>
                        <Image src={gardenerScene?.sprites[2]} alt="txt" className="next_button" />
                    </div>
                    <div onClick={() => {
                        Howler.stop()
                        setSceneId("/doctor")
                    }}>
                        <Image src={gardenerScene?.sprites[3]} alt="txt" className="prev_button" />
                    </div>
                    {
                        muted
                            ? <div onClick={() => {
                                Howler.volume(1)
                                toggle()
                            }}>
                                <Image src={gardenerScene?.sprites[5]} alt="txt" className="music_button" />
                            </div>
                            : <div onClick={() => {
                                Howler.volume(0)
                                toggle()
                            }}>
                                <Image src={gardenerScene?.sprites[4]} alt="txt" className="music_button" />
                            </div>
                    }
                    <Image src={gardenerScene?.sprites[0]} alt="txt" className="iconGirl" />
                    {/* <Image src={characterscene?.sprites[1]} alt="txt" className="gardenerSceneIcon" /> */}

                    <div ref={Ref7} className="gardenerSceneIcon" id="gardener"></div>
                    <div ref={Ref42} className="transitionStyle" id="transition"></div>
                </>
            }
        />
    );
}

export default Gardener;
