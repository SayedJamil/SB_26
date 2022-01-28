import lottie from 'lottie-web';
import React, { useContext, useEffect, useRef } from 'react';
import { SceneContext } from '../../contexts/SceneContext';
import Image from '../../utils/elements/Image';
import Scenes from '../../utils/Scenes';
import useLoadAsset from '../../utils/useLoadAsset';
import CharacterSceneMap from './CharacterSceneAssetMap';
import '../../styles/characterscene.css'
import PlayAudio from '../../utils/playAudio';

function Doctor() {
    const { Bg, Loading } = useLoadAsset(CharacterSceneMap.doctor)
    const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } = useContext(SceneContext);
    const { characterscene } = Assets;

    const Ref = useRef(null);

    useEffect(() => {
        if (characterscene && !Loading && !isLoading) {
            PlayAudio(characterscene?.sounds[0])
        }
    }, [Assets, Loading, isLoading])

    useEffect(() => {
        if (Assets[sceneName] && Ref_1.current && !Loading && Ref_2.current) {
            try {
                lottie.loadAnimation({
                    name: "boy",
                    container: Ref_1.current,
                    renderer: "svg",
                    loop: true,
                    autoplay: true,
                    animationData: Assets[sceneName]?.lottie[0],
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
                    <Image src={characterscene?.sprites[1]} alt="txt" className="doctorSceneIcon" />

                    {/* <div ref={Ref} className="intro_lottie_container"></div> */}
                </>
            }
        />
    );
}

export default Doctor;
