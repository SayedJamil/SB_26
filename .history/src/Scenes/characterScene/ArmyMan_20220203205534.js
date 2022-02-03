import lottie from 'lottie-web';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { SceneContext } from '../../contexts/SceneContext';
import Image from '../../utils/elements/Image';
import Scenes from '../../utils/Scenes';
import useLoadAsset from '../../utils/useLoadAsset';
import '../../styles/characterscene.css'
import PlayAudio from '../../utils/playAudio';
import { SoundContext } from '../../contexts/SoundContext';
import { Howl, Howler } from 'howler';
import loadAudio from '../../utils/loadAudio.js'
import AssetsMap from '../../Assets';



function ArmyMan() {
    const { Bg, Loading } = useLoadAsset(AssetsMap.armyMan)
    const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } = useContext(SceneContext);
    const { characteractivity } = Assets;
    const { Sound, setSound, muted, setMuted } = useContext(SoundContext)
    const [sceneSound, setSceneSound] = useState(null)
    const Ref1 = useRef(null);
    const Ref40 = useRef(null);
    const [Load, setLoad] = useState(true);
    const sound = new Howl({
        src: [`internal/audio/SB_26_Audio_07.mp3`],
    });
    const [playSound, setPlaySound] = useState(sound)

    useEffect(() => {
        playSound.play()
        playSound.on('end', () => {
            // setSceneId('/doctor')
        })
        setTimeout(() => {
            setLoad(false)
        }, 2000)
    }, [])

    const toggle = () => setMuted(!muted)

    useEffect(() => {
        if (characteractivity?.lottie[0] && Ref1.current && !Loading) {
            try {
                lottie.loadAnimation({
                    name: "armyman",
                    container: Ref1.current,
                    renderer: "svg",
                    loop: true,
                    autoplay: true,
                    animationData: characteractivity?.lottie[0],
                })
            } catch (err) {
                console.log(err)
            }
        }
        if (characteractivity?.lottie[1] && Ref40.current && !Loading) {
            try {
                lottie.loadAnimation({
                    name: "transition",
                    container: Ref40.current,
                    renderer: "svg",
                    loop: false,
                    autoplay: true,
                    animationData: characteractivity?.lottie[1],
                })
            } catch (err) {
                console.log(err)
            }
        }

    }, [Assets, Loading])
    if (Load) {
        return (
            <div ref={Ref40} className="transitionStyle" id="transition"></div>
    )
    } else {
        
}
    
}

export default ArmyMan;
