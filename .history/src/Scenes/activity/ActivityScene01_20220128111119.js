import React, { useContext, useEffect } from 'react';
import { SceneContext } from '../../contexts/SceneContext';
import useLoadAsset from '../../utils/useLoadAsset';
import '../../styles/activity.css'
import ActivityAssetMap from './ActivityAssetMap'
import Scenes from '../../utils/Scenes';
import '../../styles/explain.css'
import Image from '../../utils/elements/Image';
function ActivityExplainScene01() {
    const { Bg, Loading } = useLoadAsset(ActivityAssetMap.activity01)
    const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } = useContext(SceneContext);
    const { activityscene } = Assets;
    const { Sound, setSound } = useContext(SoundContext)

    const Ref1 = useRef(null);

    useEffect(() => {
        if (activityscene && !Loading && !isLoading) {
            PlayAudio(activityscene?.sounds[0])
        }
    }, [Assets, Loading, isLoading])

    useEffect(() => {
        if (activityscene && Ref1.current && !Loading) {
            try {
                lottie.loadAnimation({
                    name: "armyman",
                    container: Ref12.current,
                    renderer: "svg",
                    loop: true,
                    autoplay: true,
                    animationData: activityscene?.lottie[0],
                })
            } catch (err) {
                console.log(err)
            }
        }
    }, [Assets, Loading])

    // useEffect(() => {
    //     setTimeout(() => {
    //         setSceneId('/doctor')
    //     }, 10000)
    // }, []);
    return (
        <Scenes
            Bg={Bg}
            sprites={
                <>
                    <button
                        className="prev_button"
                        onClick={() => {
                            setSceneId("/explain")
                        }}>
                        Previous
                    </button>
                    <button
                        className="next_button"
                        onClick={() => {
                            setSceneId("/doctor")
                        }}>
                        Next
                    </button>
                    <Image src={activityscene?.sprites[0]} alt="txt" className="iconGirl" />
                    {/* <Image src={characterscene?.sprites[1]} alt="txt" className="armyManSceneIcon" /> */}

                    <div ref={Ref12} className="girlIcon" id="explaingirl"></div>
                </>
            }
        />
    );
}

export default ActivityExplainScene01;
