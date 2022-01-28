import React, { useContext, useRef } from 'react';
import { SceneContext } from '../../contexts/SceneContext';
import CharacterSceneMap from './CharacterSceneAssetMap';

function CharacterScene() {
    const { Bg, Loading } = useLoadAsset(CharacterSceneMap)
    const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } = useContext(SceneContext);
    const { characterscene } = Assets;
    const Ref = useRef(null);

    useEffect(() => {
        if (Assets.explain && Ref.current && !Loading) {
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
            Bg={Bg}
            sprites={
                <>
                    
                    <Image src={characterscene?.sprites[4]} alt="" className="helperIcon floorCleanerIcon" />
                    
                </>
            }
        />
    )
}

export default CharacterScene;
