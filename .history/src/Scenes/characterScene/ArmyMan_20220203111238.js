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
import { Howl, Howler } from 'howler';
import loadAudio from '../../utils/loadAudio.js'



function ArmyMan() {
    const { Bg, Loading } = useLoadAsset(CharacterSceneMap.armyMan)
    const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } = useContext(SceneContext);
    const { characterscene } = Assets;
    const { Sound, setSound, muted, setMuted } = useContext(SoundContext)
    const [sceneSound, setSceneSound] = useState(null)
    const Ref1 = useRef(null);
    const sound = new Howl({
        src: [`/internal/audio/SB_26_Audio_07.mp3`],
    });

    sound.on('end', () => {
        // setSceneId('/doctor')
    })
    useEffect(() => {
        // var sound = new Howl({
        //     src: [`/internal/audio/SB_26_Audio_07.mp3`],
        // });
        // var id2 = sound.play();
        // sound.on('end', () => {
        //     // setSceneId('/doctor')
        // })

    }, [])
    const startPlaying = () => {
        var id2 = sound.play();
    }
    
    const toggle = () => setMuted(!muted)

    useEffect(() => {
        if (characterscene?.lottie[0] && Ref1.current && !Loading) {
            try {
                lottie.loadAnimation({
                    name: "armyman",
                    container: Ref1.current,
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

                        setSceneId("/doctor")

                    }}>
                        <Image src={characterscene?.sprites[2]} alt="txt" className="next_button" />
                    </div>
                    <div onClick={() => {

                        setSceneId("/explain")

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


                    <div ref={Ref1} className="armyManSceneIcon" id="armyman"></div>
                </>
            }
        />
    );
}

export default ArmyMan;
