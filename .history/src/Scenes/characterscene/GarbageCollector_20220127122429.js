import lottie from 'lottie-web';
import React, { useContext, useEffect, useRef } from 'react';
import { SceneContext } from '../../contexts/SceneContext';
import Image from '../../utils/elements/Image';
import Scenes from '../../utils/Scenes';
import useLoadAsset from '../../utils/useLoadAsset';
import CharacterSceneMap from './CharacterSceneAssetMap';
import '../../styles/characterscene.css'
import PlayAudio from '../../utils/playAudio';

function GarbageCollector() {
    const { Bg, Loading } = useLoadAsset(CharacterSceneMap.garbageCollector)
    const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } = useContext(SceneContext);
    const { characterscene } = Assets;

    const Ref6 = useRef(null);
    useEffect(() => {
        if (characterscene && !Loading && !isLoading) {
            PlayAudio(characterscene?.sounds[0])
        }
    }, [Assets, Loading, isLoading])

    useEffect(() => {
        if (characterscene && Ref6.current && !Loading) {
            try {
                lottie.loadAnimation({
                    name: "garbagecollector",
                    container: Ref6.current,
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
                    {/* <Image src={characterscene?.sprites[1]} alt="txt" className="garbageCollectorSceneIcon" /> */}

                    <div ref={Ref} className="garbageCollectorSceneIcon" id="garbagecollector"></div>
                </>
            }
        />
    );
}

export default GarbageCollector;