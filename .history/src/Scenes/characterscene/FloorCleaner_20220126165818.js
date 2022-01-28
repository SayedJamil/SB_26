import lottie from 'lottie-web';
import React, { useContext, useEffect, useRef } from 'react';
import { SceneContext } from '../../contexts/SceneContext';
import Image from '../../utils/elements/Image';
import Scenes from '../../utils/Scenes';
import useLoadAsset from '../../utils/useLoadAsset';
import CharacterSceneMap from './CharacterSceneAssetMap';
import '../../styles/characterscene.css'

function FloorCleaner() {
    const { Bg, Loading } = useLoadAsset(CharacterSceneMap.armyMan)
    const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } = useContext(SceneContext);
    const { characterscene } = Assets;

    const Ref = useRef(null);

    useEffect(() => {
        if (Assets.characterscene && Ref.current && !Loading) {
            const ch = lottie.loadAnimation({
                name: "placeholder",
                container: Ref.current,
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
            Bg={characterscene?.sprites[1]}
            sprites={
                <>
                    <Image src={characterscene?.sprites[0]} alt="txt" className="iconGirl" />
                    <Image src={characterscene?.sprites[1]} alt="txt" className="armyManSceneIcon" />

                    {/* <div ref={Ref} className="intro_lottie_container"></div> */}
                </>
            }
        />
    );
}

export default FloorCleaner;