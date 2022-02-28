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
function Activity01End() {
    const { Bg, Loading } = useLoadAsset(AssetsMap.activity01end)
    const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets, character, setCharacter, setNum, setCharNum, toolNum, setToolNum, stars, setStars, BG_sound } = useContext(SceneContext);
    const { activityend } = Assets;
    const { Sound, setSound, } = useContext(SoundContext)
    const Ref30 = useRef(null);
    const sound = new Howl({
        src: [`ee01_ow_thss_pl1/audio/SB_26_Audio_26.mp3`],
    });
    const [playSound, setPlaySound] = useState(sound)

    useEffect(() => {

        BG_sound.volume(0.05)
        playSound.play();
        playSound.on('end', () => {
            setisLoading(true)
            setSceneId('/firefighter')

        })
    }, [])



    useEffect(() => {
        if (activityend?.lottie && Ref30.current && !Loading) {
            try {
                lottie.loadAnimation({
                    name: "explaingirl",
                    container: Ref30.current,
                    renderer: "svg",
                    loop: false,
                    autoplay: true,
                    animationData: activityend?.lottie[0],
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
                        setCharacter('dentist')//change here
                        setNum('32')//change here for audio "Tap the character"
                        setCharNum(7)//change here from choosecharacterassetmap character icon
                        setToolNum(12)//change here from choosecharacterassetmap character tool
                        setStars(0)
                        setisLoading(true)
                        setSceneId("/firefighter")
                        // setSceneId("/activity02")
                        setisLoading(true)
                    }}>
                        <Image src={activityend?.sprites[2]} alt="txt" className="next_button" />
                    </div>

                  
                    <div ref={Ref30} className="activityEndGirlIcon" id="explaingirl"></div>
                </>
            }
        />
    );
}

export default Activity01End;
