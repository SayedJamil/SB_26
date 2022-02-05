import lottie from 'lottie-web';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { SceneContext } from '../../contexts/SceneContext';
import Image from '../../utils/elements/Image';
import Scenes from '../../utils/Scenes';
import useLoadAsset from '../../utils/useLoadAsset';
import '../../styles/characterscene.css'
import { Howl, Howler } from 'howler';
import PlayAudio from '../../utils/playAudio';
import { SoundContext } from '../../contexts/SoundContext';
import AssetsMap from '../../Assets';

function FloorCleaner() {
    const { Bg, Loading } = useLoadAsset(AssetsMap.floorCleaner)
    const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } = useContext(SceneContext);
    const { floorCleanerScene } = Assets;
    const { Sound, setSound, } = useContext(SoundContext)

    const Ref3 = useRef(null);

    const sound = new Howl({
        src: [`internal/audio/SB_26_Audio_28.mp3`],
    });
    const [playSound, setPlaySound] = useState(sound)

    useEffect(() => {
        playSound.play()
        playSound.on('end', () => {
            setisLoading(true)
            setSceneId('/dentist')
        })
    }, [])




    useEffect(() => {
        if (floorCleanerScene?.lottie && Ref3.current && !Loading) {
            try {
                lottie.loadAnimation({
                    name: "floorcleaner",
                    container: Ref3.current,
                    renderer: "svg",
                    loop: true,
                    autoplay: true,
                    animationData: floorCleanerScene?.lottie[0],
                })
            } catch (err) {
                console.log(err)
            }
        }
    }, [Assets, Loading])


    return (
        <Scenes
            Bg={Bg}
            sprites={
                <>

                    <div onClick={() => {
                        playSound.stop()
                        setisLoading(true)
                        setSceneId("/dentist")
                    }}>
                        <Image src={floorCleanerScene?.sprites[2]} alt="txt" className="next_button" />
                    </div>
                    <div onClick={() => {
                        playSound.stop()
                        setisLoading(true)
                        setSceneId("/firefighter")
                    }}>
                        <Image src={floorCleanerScene?.sprites[3]} alt="txt" className="prev_button" />
                    </div>


                    <Image src={floorCleanerScene?.sprites[0]} alt="txt" className="iconGirl" />


                    <div ref={Ref3} className="floorCleanerSceneIcon" id="floorcleaner"></div>
                </>
            }
        />
    );
}

export default FloorCleaner;