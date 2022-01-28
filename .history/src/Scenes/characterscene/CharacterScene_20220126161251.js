import lottie from 'lottie-web';
import React, { useContext, useEffect, useRef } from 'react';
import { SceneContext } from '../../contexts/SceneContext';
import useLoadAsset from '../../utils/useLoadAsset';
import CharacterSceneMap from './CharacterSceneAssetMap';
import PlayAudio from "../../utils/playAudio"

function CharacterScene({type}) {
    const { Bg, Loading } = useLoadAssett(CharacterSceneMap)
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

    return (
        <Scenes
            Bg={characterscene?.sprites[4]}
            sprites={
                <>
                    
                    <Image src={characterscene?.sprites[4]} alt="" className="helperIcon floorCleanerIcon" />
                    
                </>
            }
        />
    )
}

export default CharacterScene;
