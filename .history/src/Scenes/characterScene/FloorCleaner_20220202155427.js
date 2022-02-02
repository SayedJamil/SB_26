import lottie from 'lottie-web';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { SceneContext } from '../../contexts/SceneContext';
import Image from '../../utils/elements/Image';
import Scenes from '../../utils/Scenes';
import useLoadAsset from '../../utils/useLoadAsset';
import CharacterSceneMap from './CharacterSceneAssetMap';
import '../../styles/characterscene.css'
import { Howl, Howler } from 'howler';
import PlayAudio from '../../utils/playAudio';
import { SoundContext } from '../../contexts/SoundContext';

function FloorCleaner() {
    const { Bg, Loading } = useLoadAsset(CharacterSceneMap.floorCleaner)
    const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } = useContext(SceneContext);
    const { characterscene } = Assets;
    const { Sound, setSound, muted, setMuted } = useContext(SoundContext)

    const Ref5 = useRef(null);

    useEffect(() => {
        var sound = new Howl({
            src: [`/internal/audio/SB_26_Audio_28.mp3`],
        });
        sound.play();
        sound.on('end', () => {
            setSceneId('/dentist')
        })
    }, [])

    const toggle = () => setMuted(!muted)

    useEffect(() => {
        if (characterscene && Ref5.current && !Loading) {
            try {
                lottie.loadAnimation({
                    name: "floorcleaner",
                    container: Ref5.current,
                    renderer: "svg",
                    loop: true,
                    autoplay: true,
                    animationData: characterscene?.lottie[0],
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
                        setSceneId("/dentist")
                    }}>
                        <Image src={characterscene?.sprites[2]} alt="txt" className="next_button" />
                    </div>
                    <div onClick={() => {
                        Howler.stop()
                        setSceneId("/firefighter")
                    }}>
                        <Image src={characterscene?.sprites[3]} alt="txt" className="prev_button" />
                    </div>
                    {
                        muted
                            ? <div onClick={() => {
                                Howler.volume(1)
                                toggle()
                            }}>
                                <Image src={characterscene?.sprites[5]} alt="txt" className="music_button" />
                            </div>
                            : <div onClick={() => {
                                Howler.volume(0)
                                toggle()
                            }}>
                                <Image src={characterscene?.sprites[4]} alt="txt" className="music_button" />
                            </div>
                    }

                    <Image src={characterscene?.sprites[0]} alt="txt" className="iconGirl" />
                    {/* <Image src={characterscene?.sprites[1]} alt="txt" className="floorCleanerSceneIcon" /> */}

                    <div ref={Ref5} className="floorCleanerSceneIcon" id="floorcleaner"></div>
                </>
            }
        />
    );
}

export default FloorCleaner;