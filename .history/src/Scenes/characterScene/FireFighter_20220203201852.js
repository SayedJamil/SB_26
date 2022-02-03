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
    const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } = useContext(SceneContext);
    const { characteractivity } = Assets;
    const Ref4 = useRef(null);
    const { Sound, setSound, muted, setMuted } = useContext(SoundContext)

    const sound = new Howl({
        src: [`internal/audio/SB_26_Audio_07.mp3`],
    });
    const [playSound, setPlaySound] = useState(sound)

    useEffect(() => {
        playSound.play()
        playSound.on('end', () => {
            setSceneId('/doctor')
        })
    }, [])
    
    useEffect(() => {
        var sound = new Howl({
            src: [`internal/audio/SB_26_Audio_27.mp3`],
        });
        sound.play();
        sound.on('end', () => {
            setSceneId('/floorcleaner')
        })
    }, [])

    const toggle = () => setMuted(!muted)

    useEffect(() => {
        if (characteractivity?.lottie[0] && Ref4.current && !Loading) {
            try {
                lottie.loadAnimation({
                    name: "firefighter",
                    container: Ref4.current,
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

                    <div onClick={() => {
                        Howler.stop()
                        setSceneId("/floorcleaner")                      
                    }}>
                        <Image src={characteractivity?.sprites[2]} alt="txt" className="next_button" />
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
                    {/* <Image src={characterscene?.sprites[1]} alt="txt" className="fireFighterSceneIcon" /> */}

                    <div ref={Ref4} className="fireFighterSceneIcon" id="firefighter"></div>
                </>
            }
        />
    );
}

export default FireFighter;