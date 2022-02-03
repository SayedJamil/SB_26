import lottie from 'lottie-web';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { SceneContext } from '../../contexts/SceneContext';
import Image from '../../utils/elements/Image';
import Scenes from '../../utils/Scenes';
import useLoadAsset from '../../utils/useLoadAsset';
import CharacterSceneMap from './CharacterSceneAssetMap';
import '../../styles/characterscene.css'
import PlayAudio from '../../utils/playAudio';
import { Howl, Howler } from 'howler';
import { SoundContext } from '../../contexts/SoundContext';
import AssetsMap from '../../Assets';

function GarbageCollector() {
    const { Bg, Loading } = useLoadAsset(AssetsMap.garbageCollector)
    const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } = useContext(SceneContext);
    const { characteractivity } = Assets;
    const { Sound, setSound, muted, setMuted } = useContext(SoundContext)
    const Ref6 = useRef(null);

    useEffect(() => {
        var sound = new Howl({
            src: [`internal/audio/SB_26_Audio_31.mp3`],
        });
        sound.play();
        sound.on('end', () => {
            // setSceneId('/activity02')
        })
    }, [])

    const toggle = () => setMuted(!muted)

    useEffect(() => {
        if (characteractivity?.lottie[0] && Ref6.current && !Loading) {
            try {
                lottie.loadAnimation({
                    name: "garbagecollector",
                    container: Ref6.current,
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
                        setSceneId("/activity02")
                    }}>
                        <Image src={characteractivity?.sprites[2]} alt="txt" className="next_button" />
                    </div>
                    <div onClick={() => {
                        Howler.stop()
                        setSceneId("/guard")
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

                    <Image src={characterscene?.sprites[0]} alt="txt" className="iconGirl" />
                    {/* <Image src={characterscene?.sprites[1]} alt="txt" className="garbageCollectorSceneIcon" /> */}

                    <div ref={Ref6} className="garbageCollectorSceneIcon" id="garbagecollector"></div>
                </>
            }
        />
    );
}

export default GarbageCollector;
