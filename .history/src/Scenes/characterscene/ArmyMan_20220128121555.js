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


function ArmyMan() {
    const { Bg, Loading } = useLoadAsset(CharacterSceneMap.armyMan)
    const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } = useContext(SceneContext);
    const { characterscene } = Assets;
    const { Sound, setSound } = useContext(SoundContext)
    const [playSound, setPlaySound] = useState(true)
    const Ref1 = useRef(null);

    useEffect(() => {
        if (characterscene && !Loading && !isLoading && playSound) {
            PlayAudio({ Sound: characterscene?.sounds[0], status: true })
        }
        
    }, [Assets, Loading, isLoading, playSound])

    useEffect(() => {
        if (characterscene && Ref1.current && !Loading) {
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

    useEffect(() => {
        setTimeout(() => {
            setSceneId('/doctor')
            setPlaySound(false)
        }, 10000)
    }, []);
    return (
        <Scenes
            Bg={Bg}
            sprites={
                <>
                    <button
                        className="prev_button"
                        onClick={() => {
                            setSceneId("/explain")
                            setPlaySound(false)
                        }}>
                        Previous
                    </button>
                    <button
                        className="next_button"
                        onClick={() => {
                            setSceneId("/doctor")
                            setPlaySound(false)
                        }}>
                        Next
                    </button>
                    <Image src={characterscene?.sprites[0]} alt="txt" className="iconGirl" />
                    {/* <Image src={characterscene?.sprites[1]} alt="txt" className="armyManSceneIcon" /> */}

                    <div ref={Ref1} className="armyManSceneIcon" id="armyman"></div>
                </>
            }
        />
    );
}

export default ArmyMan;
