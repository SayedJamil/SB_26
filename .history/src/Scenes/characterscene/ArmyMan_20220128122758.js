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
    const [sceneSound, setSceneSound] = useState()
    const Ref1 = useRef(null);

    useEffect(() => {
        if (characterscene && !Loading && !isLoading) {
            setSceneSound(characterscene?.sounds[0])
        }

    }, [Assets, Loading, isLoading])

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
                            setSound(null)
                            setSceneId("/explain")

                        }}>
                        Previous
                    </button>
                    <button
                        className="next_button"
                        onClick={() => {
                            setSound(null)
                            setSceneId("/doctor")
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
