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
    const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets, BG_sound } = useContext(SceneContext);
    const { activity01scene } = Assets;
    const { Sound, setSound, } = useContext(SoundContext)
    const Ref12 = useRef(null);

    const [buttonClicked, setButtonClicked] = useState(false)
    const sound = new Howl({
        src: [`ee01_ow_thss_pl1/audio/sb_26_audio_08.mp3`],
    });
    const [playSound, setPlaySound] = useState(sound)

    useEffect(() => {

        playSound.play()
        playSound.on('end', () => {

            if (!buttonClicked) {
                setisLoading(true)
            }
            setSceneId('/choosecharacter')
        })
    }, [])


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
                        setButtonClicked(true)
                        setisLoading(true)
                        setSceneId("/police")
                    }}>
                        <Image src={activity01scene?.sprites[3]} alt="txt" className="prev_button" />
                    </div>


                    <Image src={activity01scene?.sprites[6]} alt="" className="activityShadow" />
                    <div ref={Ref12} className="activitygirlIcon" id="explaingirl"></div>
                </>
            }
        />
    );
}

export default ActivityExplainScene01;
