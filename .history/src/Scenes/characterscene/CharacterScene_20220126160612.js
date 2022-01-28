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
                    
                    <Image src={explain?.sprites[4]} alt="" className="helperIcon floorCleanerIcon" />
                    <Image src={explain?.sprites[5]} alt="" className="helperIcon garbageCollectorIcon" />
                    <Image src={explain?.sprites[6]} alt="t" className="helperIcon gardenerIcon" />
                    <Image src={explain?.sprites[7]} alt="" className="helperIcon policeIcon" />
                    <Image src={explain?.sprites[8]} alt="" className="helperIcon guardIcon" />
                    <Image src={explain?.sprites[9]} alt="" className="helperIcon teacherIcon" />
                    <Image src={explain?.sprites[10]} alt="" className="girlIcon" />
                </>
            }
        />
    )
}

export default CharacterScene;
