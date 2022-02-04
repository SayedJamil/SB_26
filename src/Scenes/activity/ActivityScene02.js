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
function ActivityExplainScene02() {
    const { Bg, Loading } = useLoadAsset(AssetsMap.activity02)
    const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets, setCharacter, setNum, setCharNum, setToolNum, setStars } = useContext(SceneContext);
    const { activity02scene } = Assets;
    const { Sound, setSound, muted, setMuted } = useContext(SoundContext)
    const Ref12 = useRef(null);

    const sound = new Howl({
        src: [`internal/audio/SB_26_Audio_08.mp3`],
    });
    const [playSound, setPlaySound] = useState(sound)

    useEffect(() => {
        playSound.play()
        playSound.on('end', () => {
            setCharacter('dentist')//change here
            setNum('32')//change here for audio "Tap the character"
            setCharNum(7)//change here from choosecharacterassetmap character icon
            setToolNum(12)//change here from choosecharacterassetmap character tool
            setStars(0)
            setisLoading(true)
            setSceneId('/choosecharacter')
        })
    }, [])


    const toggle = () => setMuted(!muted)

    useEffect(() => {
        if (activity02scene?.lottie && Ref12.current && !Loading) {
            try {
                lottie.loadAnimation({
                    name: "explaingirl",
                    container: Ref12.current,
                    renderer: "svg",
                    loop: false,
                    autoplay: true,
                    animationData: activity02scene?.lottie[0],
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
                        setisLoading(true)
                        setSceneId("/garbagecollector")
                    }}>
                        <Image src={activity02scene?.sprites[3]} alt="txt" className="prev_button" />
                    </div>

                    {
                        muted
                            ? <div onClick={() => {
                                Howler.volume(1)
                                toggle()
                            }}>
                                <Image src={activity02scene?.sprites[5]} alt="txt" className="music_button" />
                            </div>
                            : <div onClick={() => {
                                Howler.volume(0)
                                toggle()
                            }}>
                                <Image src={activity02scene?.sprites[4]} alt="txt" className="music_button" />
                            </div>
                    }

                    <div ref={Ref12} className="activitygirlIcon" id="explaingirl"></div>
                </>
            }
        />
    );
}

export default ActivityExplainScene02;
