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
    const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } = useContext(SceneContext);
    const { characteractivity } = Assets;
    const { Sound, setSound, muted, setMuted } = useContext(SoundContext)
    const Ref5 = useRef(null);
    const Ref41 = useRef(null);
    const sound = new Howl({
        src: [`internal/audio/SB_26_Audio_29.mp3`],
    });
    const [playSound, setPlaySound] = useState(sound)

    useEffect(() => {
        playSound.play()
        playSound.on('end', () => {
            setSceneId('/guard')
        })
        // transition.play()
    }, [])

    var transition = lottie.loadAnimation({
        name: "transition",
        container: Ref41.current,
        renderer: "svg",
        loop: false,
        autoplay: true,
        animationData: characteractivity?.lottie[1],
    })
    const toggle = () => setMuted(!muted)

    useEffect(() => {
        if (characteractivity?.lottie[0] && Ref5.current && !Loading) {
            const ch = lottie.loadAnimation({
                name: "dentist",
                container: Ref5.current,
                renderer: "svg",
                loop: true,
                autoplay: true,
                animationData: characteractivity?.lottie[0],
            })
        }
    }, [Assets, Loading])

    return (
        <Scenes
            Bg={Bg}
            sprites={
                <>

                    <div onClick={() => {
                        Howler.stop()
                        setSceneId("/guard")
                    }}>
                        <Image src={characteractivity?.sprites[2]} alt="txt" className="next_button" />
                    </div>
                    <div onClick={() => {
                        Howler.stop()
                        setSceneId("/floorcleaner")
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
                    {/* <Image src={characterscene?.sprites[1]} alt="txt" className="dentistSceneIcon" /> */}
                    <div ref={Ref5} className="dentistSceneIcon" id="dentist"></div>
                    <div ref={Ref41} className="transitionStyle" id="transition"></div>
                </>
            }
        />
    );
}

export default Dentist;
