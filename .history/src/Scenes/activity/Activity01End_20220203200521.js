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
    const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } = useContext(SceneContext);
    const { activityend } = Assets;
    const { Sound, setSound, muted, setMuted } = useContext(SoundContext)
    const Ref30 = useRef(null);

    useEffect(() => {
        var sound = new Howl({
            src: [`internal/audio/SB_26_Audio_26.mp3`],
        });
        sound.play();
        sound.on('end', () => {
            setSceneId('/firefighter')
        })
    }, [])

    const toggle = () => setMuted(!muted)

    useEffect(() => {
        if (activityend?.lottie[0] && Ref30.current && !Loading) {
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

                    {
                        muted
                            ? <div onClick={() => {
                                Howler.volume(1)
                                toggle()
                            }}>
                                <Image src={activityend?.sprites[5]} alt="txt" className="music_button" />
                            </div>
                            : <div onClick={() => {
                                Howler.volume(0)
                                toggle()
                            }}>
                                <Image src={activityend?.sprites[4]} alt="txt" className="music_button" />
                            </div>
                    }

                    <div ref={Ref30} className="activityEndGirlIcon" id="explaingirl"></div>
                </>
            }
        />
    );
}

export default Activity01End;
