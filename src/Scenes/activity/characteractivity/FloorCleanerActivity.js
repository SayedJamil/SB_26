import { Howl, Howler } from 'howler';
import React, { useEffect, useRef, useState, useContext } from 'react';
import { SceneContext } from '../../../contexts/SceneContext';
import { SoundContext } from '../../../contexts/SoundContext';
import Image from '../../../utils/elements/Image';
import Scenes from '../../../utils/Scenes';
import useLoadAsset from '../../../utils/useLoadAsset';
import '../../../styles/explain.css'
import '../../../styles/characterscene.css'
import lottie from 'lottie-web';
import AssetsMap from '../../../Assets';


function FloorCleanerActivity() {//change here
    const { Bg, Loading } = useLoadAsset(AssetsMap.floorCleaner)//change here
    const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets, character, setCharacter, setNum, setCharNum, toolNum, setToolNum, stars, setStars, BG_sound } = useContext(SceneContext);
    const { floorCleanerScene } = Assets;
    const { Sound, setSound, } = useContext(SoundContext)
    const [correct, setCorrect] = useState(false)
    const [wrong, setWrong] = useState(false)
    const [enableButton, setEnableButton] = useState(false)
    const [random, setRandom] = useState()
    const [position, setPosition] = useState(true)
    useEffect(() => {
        var sound = new Howl({
            src: [`ee01_ow_thss_pl1/audio/SB_26_Audio_46.mp3`],//change here
        });
        sound.play();

        sound.on('start', () => {
            setEnableButton(true)

        })
        randomize();
    }, [])

    const Ref28 = useRef(null);//change here

    useEffect(() => {
        if (floorCleanerScene?.lottie && Ref28.current && !Loading) {//change here
            try {
                lottie.loadAnimation({
                    name: "characterAnimation",
                    container: Ref28.current,//change here
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
    const wrongAnswerSound = () => {
        setIsActivity(true)
        setPlayAnimation(false)
        if (enableButton) {
            setEnableButton(false)
            var sound = new Howl({
                src: [`ee01_ow_thss_pl1/audio/SB_26_Audio_10.mp3`],
            });
            sound.play();
            setWrong(true)
            sound.on('end', () => {
                setWrong(false)
                setEnableButton(true)
            })

        }
    }
    const rightAnswerSound = () => {
        setIsActivity(true)
        setPlayAnimation(false)
        if (enableButton) {
            var sound = new Howl({
                src: [`ee01_ow_thss_pl1/audio/SB_26_Audio_47.mp3`],//change here
            });
            sound.play();
            sound.on('end', () => {
                setisLoading(true)
                setSceneId('/activity02end')
            })
            setCorrect(true)
            setStars(stars + 1)
            setEnableButton(false)
        }
    }
    const randomize = () => {
        var randomNumber = Math.floor(Math.random() * (17 - 6 + 1)) + 6;
        if (randomNumber != toolNum) {
            setRandom(randomNumber)
        } else {
            randomize()
        }
        var randomPos = Math.random() >= 0.5;
        setPosition(randomPos)
    }
    const [isActivity, setIsActivity] = useState(true)
    const [playAnimation, setPlayAnimation] = useState(false)

    useEffect(() => {
        if (isActivity) {
            setTimeout(() => {
                setIsActivity(false)
            }, 10000)
        }
        if (!isActivity) {
            setPlayAnimation(true)
            setTimeout(() => {
                setPlayAnimation(!playAnimation)
            }, 4000)
        }
    }, [isActivity, playAnimation])
    return (
        <Scenes
            Bg={Bg}
            sprites={
                <>

                    <div>
                        <Image src={floorCleanerScene?.sprites[toolNum]} alt="txt" className={`${position ? "bottomEquipButton" : "topEquipButton"}`} onClick={() => rightAnswerSound()} />{/* changehere */}
                        {(playAnimation) ? <Image src={floorCleanerScene?.sprites[22]} className={`${position ? "bottomHilightIcon handIconAnimation" : "topHilightIcon handIconAnimation"}`} /> : null}
                        {(correct) ? <Image src={floorCleanerScene?.sprites[18]} alt="txt" className={`${position ? "bottomHighlightIcon" : "topHighlightIcon"}`} onClick={() => rightAnswerSound()} /> : null}{/* changehere */}
                    </div>

                    <Image src={floorCleanerScene?.sprites[random]} alt="txt" className={`${!position ? "bottomEquipButton" : "topEquipButton"}`} onClick={() => wrongAnswerSound()} />//change here
                    {(wrong) ? <Image src={floorCleanerScene?.sprites[19]} alt="txt" className={`${!position ? "bottomHighlightIcon" : "topHighlightIcon"}`} onClick={() => wrongAnswerSound()} /> : null}//change here

                    <Image src={floorCleanerScene?.sprites[20]} alt="" className="progressBar" />
                    <div className='starspos'>
                        {[...Array(stars)].map((elementInArray, index) => (
                            <Image src={floorCleanerScene?.sprites[21]} alt="" className="progressBarStars" />
                        )
                        )}
                    </div>
                    <Image src={floorCleanerScene?.sprites[23]} alt="" className="floorCleanerShadow" />
                    <div ref={Ref28} className="floorCleanerSceneIcon" id="characterAnimation"></div>//change here

                </>
            }
        />
    );
}

export default FloorCleanerActivity;//change here
