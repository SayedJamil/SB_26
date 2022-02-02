import React, { useContext, useEffect, useRef, useState } from 'react';
import { SceneContext } from '../../contexts/SceneContext';
import useLoadAsset from '../../utils/useLoadAsset';
import '../../styles/activity.css'
import ActivityAssetMap from './ActivityAssetMap'
import Scenes from '../../utils/Scenes';
import '../../styles/explain.css'
import '../../styles/characterscene.css'
import Image from '../../utils/elements/Image';
import { SoundContext } from '../../contexts/SoundContext';
import PlayAudio from '../../utils/playAudio';
import { Howl, Howler } from 'howler';
import lottie from 'lottie-web';
function Activity02End() {
    const { Bg, Loading } = useLoadAsset(ActivityAssetMap.activity01end)
    const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } = useContext(SceneContext);
    const { activityend } = Assets;
    const { Sound, setSound, muted, setMuted } = useContext(SoundContext)
    const Ref30 = useRef(null);

    useEffect(() => {
        var sound = new Howl({
            src: [`/internal/audio/SB_26_Audio_48.mp3`],
        });
        sound.play();
        sound.on('end', () => {
            var sound = new Howl({
                src: [`/internal/audio/SB_26_Audio_48.mp3`],
            });
        })
    }, [])

    const toggle = () => setMuted(!muted)

    useEffect(() => {
        if (activityend && Ref30.current && !Loading) {
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

export default Activity02End;
