import lottie from 'lottie-web';
import React, { useContext, useEffect, useRef } from 'react';
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

    const Ref1 = useRef(null);

    useEffect(() => {
        if (characterscene && !Loading && !isLoading) {
            PlayAudio(characterscene?.sounds[0])
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

    // useEffect(() => {
    //     setTimeout(() => {
    //         setSceneId('/activity')
    //     }, 4000)
    // }, []);
    return (
        <Scenes
            Bg={Bg}
            sprites={
                <>
                    <button
                        className="play_btn"
                        onClick={() => {
                            setSceneId("/explain")
                        }}>
                        Play
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