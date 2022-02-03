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
    const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } = useContext(SceneContext);
    const { characteractivity } = Assets;
    const { Sound, setSound, muted, setMuted } = useContext(SoundContext)
    const [sceneSound, setSceneSound] = useState(null)
    const Ref1 = useRef(null);

    const sound = new Howl({
        src: [`internal/audio/SB_26_Audio_07.mp3`],
    });
    const [playSound, setSound22] = useState(sound2)
    // var id2 = sound2.play()

    useEffect(() => {
        // var sound2 = new Howl({
        //     src: [`/internal/audio/SB_26_Audio_07.mp3`],
        // });
        // sound2.play();
        // sound2.on('end', () => {
        //     setSceneId('/gardener')
        // })
        sound22.play()
    }, [])

    const PlayAudio = () => {
        if (stopPlaying) {
            sound2.stop()
        } else {
            sound2.play()
        }
    }
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


                    <div onClick={() => {
                        sound22.stop()
                        setSceneId("/doctor")
                    }}>
                        <Image src={characteractivity?.sprites[2]} alt="txt" className="next_button" />
                    </div>
                    <div onClick={() => {
                        Howler.stop()
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
