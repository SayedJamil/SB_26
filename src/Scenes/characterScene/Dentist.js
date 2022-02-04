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
    const { dentistScene } = Assets;
    const { Sound, setSound, muted, setMuted } = useContext(SoundContext)
    const Ref5 = useRef(null);
    const sound = new Howl({
        src: [`internal/audio/SB_26_Audio_29.mp3`],
    });
    const [playSound, setPlaySound] = useState(sound)

    useEffect(() => {

        playSound.play()
        playSound.on('end', () => {
            setisLoading(true)
            setSceneId('/guard')
        })

    }, [])


    const toggle = () => setMuted(!muted)

    useEffect(() => {
        if (dentistScene?.lottie && Ref5.current && !Loading) {
            const ch = lottie.loadAnimation({
                name: "dentist",
                container: Ref5.current,
                renderer: "svg",
                loop: true,
                autoplay: true,
                animationData: dentistScene?.lottie[0],
            })
        }
    }, [Assets, Loading])

    return (
        <Scenes
            Bg={Bg}
            sprites={
                <>

                    <div onClick={() => {
                        playSound.stop()
                        setisLoading(true)
                        setSceneId("/guard")
                    }}>
                        <Image src={dentistScene?.sprites[2]} alt="txt" className="next_button" />
                    </div>
                    <div onClick={() => {
                        playSound.stop()
                        setisLoading(true)
                        setSceneId("/floorcleaner")
                    }}>
                        <Image src={dentistScene?.sprites[3]} alt="txt" className="prev_button" />
                    </div>
                    {
                        muted
                            ? <div onClick={() => {
                                Howler.volume(1)
                                toggle()
                            }}>
                                <Image src={dentistScene?.sprites[5]} alt="txt" className="music_button" />
                            </div>
                            : <div onClick={() => {
                                Howler.volume(0)
                                toggle()
                            }}>
                                <Image src={dentistScene?.sprites[4]} alt="txt" className="music_button" />
                            </div>
                    }

                    <Image src={dentistScene?.sprites[0]} alt="txt" className="iconGirl" />

                    <div ref={Ref5} className="dentistSceneIcon" id="dentist"></div>

                </>
            }
        />
    );
}

export default Dentist;
