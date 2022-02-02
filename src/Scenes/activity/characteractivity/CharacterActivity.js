import { Howl, Howler } from 'howler';
import React, { useEffect, useRef, useState } from 'react';
import { useContext } from 'react/cjs/react.development';
import { SceneContext } from '../../../contexts/SceneContext';
import { SoundContext } from '../../../contexts/SoundContext';
import Image from '../../../utils/elements/Image';
import Scenes from '../../../utils/Scenes';
import useLoadAsset from '../../../utils/useLoadAsset';
import CharacterActivityAsset from './CharacterActivityAsset';
import '../../../styles/explain.css'
import '../../../styles/characterscene.css'
import lottie from 'lottie-web';

function CharacterActivity( ) {
    const { Bg, Loading } = useLoadAsset(CharacterActivityAsset)
    const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } = useContext(SceneContext);
    const { characteractivity } = Assets;
    const { Sound, setSound, muted, setMuted } = useContext(SoundContext)
    useEffect(() => {
        var sound = new Howl({
            src: [characteractivity?.sounds[0]],
        });
        sound.play();
        sound.on('end', () => {
            // setSceneId('/')
        })
    }, [])
    const toggle = () => setMuted(!muted)
    const Ref20 = useRef(null);
    console.log(characteractivity?.lottie[0])
    useEffect(() => {
        if (characteractivity && Ref20.current && !Loading) {
            try {
                lottie.loadAnimation({
                    name: "characterAnimation",
                    container: Ref20.current,
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
                    <div ref={Ref20} className="armyManSceneIcon" id="characterAnimation"></div>

                </>
            }
        />
    );
}

export default CharacterActivity;
