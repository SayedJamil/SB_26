import lottie from 'lottie-web';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { SceneContext } from '../../contexts/SceneContext';
import Image from '../../utils/elements/Image';
import Scenes from '../../utils/Scenes';
import useLoadAsset from '../../utils/useLoadAsset';
import CharacterSceneMap from './CharacterSceneAssetMap';
import '../../styles/characterscene.css'
import PlayAudio from '../../utils/playAudio';
import { SoundContext } from '../../contexts/SoundContext';
import { Howler, Howl } from 'howler';

function Doctor() {
    const { Bg, Loading } = useLoadAsset(CharacterSceneMap.doctor)
    const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } = useContext(SceneContext);
    const { characterscene } = Assets;
    const { Sound, setSound, muted, setMuted } = useContext(SoundContext)
    const Ref3 = useRef(null);
    useEffect(() => {
        var sound = new Howl({
            src: [`/internal/audio/SB_26_Audio_03.mp3`],
        });
        sound2.play();
        sound.on('end', () => {
            setSceneId('/gardener')
        })

    }, [])

    const toggle = () => setMuted(!muted)

    useEffect(() => {
        if (characterscene?.lottie[0] && Ref3.current && !Loading) {
            try {
                lottie.loadAnimation({
                    name: "doctor",
                    container: Ref3.current,
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
                        setSceneId("/gardener")
                    }}>
                        <Image src={characterscene?.sprites[2]} alt="txt" className="next_button" />
                    </div>
                    <div onClick={() => {
                        Howler.stop()
                        setSceneId("/armyman")
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
                    {/* <Image src={characterscene?.sprites[1]} alt="txt" className="doctorSceneIcon" /> */}

                    <div ref={Ref3} className="doctorSceneIcon" id="doctor"></div>
                </>
            }
        />
    );
}

export default Doctor;
