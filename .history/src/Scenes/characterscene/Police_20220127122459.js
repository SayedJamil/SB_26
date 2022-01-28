import lottie from 'lottie-web';
import React, { useContext, useEffect, useRef } from 'react';
import { SceneContext } from '../../contexts/SceneContext';
import Image from '../../utils/elements/Image';
import Scenes from '../../utils/Scenes';
import useLoadAsset from '../../utils/useLoadAsset';
import CharacterSceneMap from './CharacterSceneAssetMap';
import '../../styles/characterscene.css'
import PlayAudio from '../../utils/playAudio';

function Police() {
    const { Bg, Loading } = useLoadAsset(CharacterSceneMap.police)
    const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } = useContext(SceneContext);
    const { characterscene } = Assets;

    const Ref9 = useRef(null);

    useEffect(() => {
        if (characterscene && !Loading && !isLoading) {
            PlayAudio(characterscene?.sounds[0])
        }
    }, [Assets, Loading, isLoading])

    useEffect(() => {
        if (characterscene && Ref9.current && !Loading) {
            try {
                lottie.loadAnimation({
                    name: "police",
                    container: Ref.current,
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
    console.log(Assets)
    return (
        <Scenes
            Bg={Bg}
            sprites={
                <>
                    <Image src={characterscene?.sprites[0]} alt="txt" className="iconGirl" />
                    {/* <Image src={characterscene?.sprites[1]} alt="txt" className="policeSceneIcon" /> */}

                    <div ref={Ref} className="policeSceneIcon" id="police"></div>
                </>
            }
        />
    );
}

export default Police;
