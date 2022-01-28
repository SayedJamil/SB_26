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

function Doctor() {
    const { Bg, Loading } = useLoadAsset(CharacterSceneMap.doctor)
    const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } = useContext(SceneContext);
    const { characterscene } = Assets;
    const { Sound, setSound } = useContext(SoundContext)

    const Ref3 = useRef(null);

    useEffect(() => {
        if (characterscene && !Loading && !isLoading) {
            PlayAudio(characterscene?.sounds[0])
        }
    }, [Assets, Loading, isLoading])

    useEffect(() => {
        if (characterscene && Ref3.current && !Loading) {
            try {
                lottie.loadAnimation({
                    name: "doctor",
                    container: Ref3.current,
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
            setSceneId('/gardener')
            setSound(null)
        }, 15000)
    }, []);

    return (
        <Scenes
            Bg={Bg}
            sprites={
                <>
                    <button
                        className="prev_button"
                        onClick={() => {
                            setSceneId("/armyman")
                            setSound(null)
                        }}>
                        Previous
                    </button>
                    <button
                        className="next_button"
                        onClick={() => {
                            setSceneId("/gardener")
                            setSound(null)
                        }}>
                        Next
                    </button>
                    <Image src={characterscene?.sprites[0]} alt="txt" className="iconGirl" />
                    {/* <Image src={characterscene?.sprites[1]} alt="txt" className="doctorSceneIcon" /> */}

                    <div ref={Ref3} className="doctorSceneIcon" id="doctor"></div>
                </>
            }
        />
    );
}

export default Doctor;
