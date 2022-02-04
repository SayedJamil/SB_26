import React, { useContext, useEffect, useRef, useState } from 'react';
import { SceneContext } from '../../contexts/SceneContext';
import useLoadAsset from '../../utils/useLoadAsset';
import '../../styles/activity.css'
import Scenes from '../../utils/Scenes';
import '../../styles/explain.css'
import '../../styles/characterscene.css'
import Image from '../../utils/elements/Image';
import { SoundContext } from '../../contexts/SoundContext';
import { Howl, Howler } from 'howler';
import lottie from 'lottie-web';
import AssetsMap from '../../Assets';
function ActivityExplainScene01() {
    const { Bg, Loading } = useLoadAsset(AssetsMap.activity01)
    const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } = useContext(SceneContext);
    const { activity01scene } = Assets;
    const { Sound, setSound, muted, setMuted } = useContext(SoundContext)
    const Ref12 = useRef(null);

    const sound = new Howl({
        src: [`internal/audio/SB_26_Audio_08.mp3`],
    });
    const [playSound, setPlaySound] = useState(sound)

    useEffect(() => {
        playSound.play()
        playSound.on('end', () => {
            setSceneId('/choosecharacter')
        })
    }, [])
    const toggle = () => setMuted(!muted)

    useEffect(() => {
        if (activity01scene?.lottie && Ref12.current && !Loading) {
            try {
                lottie.loadAnimation({
                    name: "explaingirl",
                    container: Ref12.current,
                    renderer: "svg",
                    loop: false,
                    autoplay: true,
                    animationData: activity01scene?.lottie[0],
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
                        setSceneId("/police")
                    }}>
                        <Image src={activity01scene?.sprites[3]} alt="txt" className="prev_button" />
                    </div>

                    {
                        muted
                            ? <div onClick={() => {
                                Howler.volume(1)
                                toggle()
                            }}>
                                <Image src={activity01scene?.sprites[5]} alt="txt" className="music_button" />
                            </div>
                            : <div onClick={() => {
                                Howler.volume(0)
                                toggle()
                            }}>
                                <Image src={activity01scene?.sprites[4]} alt="txt" className="music_button" />
                            </div>
                    }

                    <div ref={Ref12} className="activitygirlIcon" id="explaingirl"></div>
                </>
            }
        />
    );
}

export default ActivityExplainScene01;
