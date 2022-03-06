import { Howl, Howler } from 'howler';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { SceneContext } from '../../../contexts/SceneContext';
import { SoundContext } from '../../../contexts/SoundContext';
import Image from '../../../utils/elements/Image';
import Scenes from '../../../utils/Scenes';
import useLoadAsset from '../../../utils/useLoadAsset';
import '../../../styles/explain.css'
import '../../../styles/characterscene.css'
import lottie from 'lottie-web';
import AssetsMap from '../../../Assets';


function ArmyManActivity() {//change here
    const { Bg, Loading } = useLoadAsset(AssetsMap.armyMan)//change here
    const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets, character, setCharacter, setNum, setCharNum, toolNum, setToolNum, stars, setStars, BG_sound } = useContext(SceneContext);
    const { armyManScene } = Assets;
    const { Sound, setSound, } = useContext(SoundContext)
    const [correct, setCorrect] = useState(false)
    const [wrong, setWrong] = useState(false)
    const [enableButton, setEnableButton] = useState(true)
    const [random, setRandom] = useState()
    const [position, setPosition] = useState(true)
    var sound = new Howl({
        src: [`ee01_ow_thss_pl1/audio/SB_26_Audio_24.mp3`],//change here
    });
    const [playSound, setPlaySound] = useState(sound)
    useEffect(() => {
        playSound.play();
        playSound.on('end', () => {
            setTimeout(() => {
                playSound.play()
            }, 10000)
        })
        playSound.on('mute', () => {
            setTimeout(() => {
                playSound.mute(false)
            }, 2000)
        })
        playSound.on('stop', () => {
            setTimeout(() => {
                playSound.stop()
                playSound.mute()
            }, 2000)
        })
        randomize();
    }, [])

    const Ref24 = useRef(null);//change here

    useEffect(() => {
        if (armyManScene?.lottie && Ref24.current && !Loading) {//change here
            try {
                lottie.loadAnimation({
                    animationData: armyManScene?.lottie[2],
                    name: "characterAnimation",
                    container: Ref24.current,//change here
                    renderer: "svg",
                    loop: true,
                    autoplay: true,

                })
            } catch (err) {
                console.log(err)
            }
        }
    }, [Assets, Loading])
    const wrongAnswerSound = () => {
        playSound.mute(true)
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
        playSound.unload()
        if (enableButton) {
            var sound = new Howl({
                src: [`ee01_ow_thss_pl1/audio/SB_26_Audio_25.mp3`],//change here
            });
            sound.play();
            sound.on('end', () => {
                setCharacter('teacher')//change here
                setNum('20')//change here for audio "Tap the character"
                setCharNum(15)//change here from choosecharacterassetmap character icon
                setToolNum(6)//change here from choosecharacterassetmap character tool
                setisLoading(true)
                setSceneId("/activity01end")
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


    return (
        <Scenes
            Bg={Bg}
            sprites={
                <>

                    <div>
                        <Image src={armyManScene?.sprites[toolNum]} alt="txt" className={`${position ? "bottomEquipButton" : "topEquipButton"}`} onClick={() => rightAnswerSound()} />{/* changehere */}

                        {(correct) ? <Image src={armyManScene?.sprites[18]} alt="txt" className={`${position ? "bottomHighlightIcon" : "topHighlightIcon"}`} onClick={() => rightAnswerSound()} /> : null}{/* changehere */}
                    </div>

                    <Image src={armyManScene?.sprites[random]} alt="txt" className={`${!position ? "bottomEquipButton" : "topEquipButton"}`} onClick={() => wrongAnswerSound()} />//change here
                    {(wrong) ? <Image src={armyManScene?.sprites[19]} alt="txt" className={`${!position ? "bottomHighlightIcon" : "topHighlightIcon"}`} onClick={() => wrongAnswerSound()} /> : null}//change here
                    <Image src={armyManScene?.sprites[23]} alt="" className="armyManShadow" />
                    <Image src={armyManScene?.sprites[20]} alt="" className="progressBar" />
                    <div className='starspos'>
                        {[...Array(stars)].map((elementInArray, index) => (
                            <Image src={armyManScene?.sprites[21]} alt="" className="progressBarStars" />
                        )
                        )}
                    </div>
                    <div ref={Ref24} className="armyManSceneIcon" id="characterAnimation"></div>//change here

                </>
            }
        />
    );
}

export default ArmyManActivity;
