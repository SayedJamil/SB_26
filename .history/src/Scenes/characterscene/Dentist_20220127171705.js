import lottie from 'lottie-web';
import React, { useContext, useEffect, useRef } from 'react';
import { SceneContext } from '../../contexts/SceneContext';
import Image from '../../utils/elements/Image';
import Scenes from '../../utils/Scenes';
import useLoadAsset from '../../utils/useLoadAsset';
import CharacterSceneMap from './CharacterSceneAssetMap';
import '../../styles/characterscene.css'
import PlayAudio from '../../utils/playAudio';

function Dentist() {
    const { Bg, Loading } = useLoadAsset(CharacterSceneMap.dentist)
    const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } = useContext(SceneContext);
    const { characterscene } = Assets;

    const Ref2 = useRef(null);
    useEffect(() => {
        if (characterscene && !Loading && !isLoading) {
            PlayAudio(characterscene?.sounds[0])
        }
    }, [Assets, Loading, isLoading])

    useEffect(() => {
        if (characterscene && Ref2.current && !Loading) {
            const ch = lottie.loadAnimation({
                name: "dentist",
                container: Ref2.current,
                renderer: "svg",
                loop: true,
                autoplay: true,
                animationData: characterscene?.lottie[0],
            })
        }
    }, [Assets, Loading])


    console.log(Assets)
    return (
        <Scenes
            Bg={Bg}
            sprites={
                <>
                    <button
                        className="next_button"
                        onClick={() => {
                            setSceneId("/doctor")
                        }}>
                        Next
                    </button>
                    <Image src={characterscene?.sprites[0]} alt="txt" className="iconGirl" />
                    {/* <Image src={characterscene?.sprites[1]} alt="txt" className="dentistSceneIcon" /> */}

                    <div ref={Ref2} className="dentistSceneIcon" id="dentist"></div>
                </>
            }
        />
    );
}

export default Dentist;
