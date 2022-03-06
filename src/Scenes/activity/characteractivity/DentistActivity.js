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


function DentistActivity() {//change here
    const { Bg, Loading } = useLoadAsset(AssetsMap.dentist)//change here
    const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets, character, setCharacter, setNum, setCharNum, toolNum, setToolNum, stars, setStars, BG_sound } = useContext(SceneContext);
    const { dentistScene } = Assets;
    const { Sound, setSound, } = useContext(SoundContext)
    const [correct, setCorrect] = useState(false)
    const [wrong, setWrong] = useState(false)
    const [enableButton, setEnableButton] = useState(true)
    const [random, setRandom] = useState()
    const [position, setPosition] = useState(true)
    var sound = new Howl({
        src: [`ee01_ow_thss_pl1/audio/SB_26_Audio_33.mp3`],//change here
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

    const Ref29 = useRef(null);//change here

    useEffect(() => {
        if (dentistScene?.lottie && Ref29.current && !Loading) {//change here
            try {
                lottie.loadAnimation({
                    name: "characterAnimation",
                    container: Ref29.current,//change here
                    renderer: "svg",
                    loop: true,
                    autoplay: true,
                    animationData: dentistScene?.lottie[0],
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
                src: [`ee01_ow_thss_pl1/audio/SB_26_Audio_34.mp3`],//change here
            });
            sound.play();
            sound.on('end', () => {
                setCharacter('garbagecollector')//change here
                setNum('35')//change here for audio "Tap the character"
                setCharNum(11)//change here from choosecharacterassetmap character icon
                setToolNum(7)//change here from choosecharacterassetmap character tool
                setisLoading(true)
                setSceneId('/choosecharacter')
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
                        <Image src={dentistScene?.sprites[toolNum]} alt="txt" className={`${position ? "bottomEquipButton" : "topEquipButton"}`} onClick={() => rightAnswerSound()} />{/* changehere */}

                        {(correct) ? <Image src={dentistScene?.sprites[18]} alt="txt" className={`${position ? "bottomHighlightIcon" : "topHighlightIcon"}`} onClick={() => rightAnswerSound()} /> : null}{/* changehere */}
                    </div>

                    <Image src={dentistScene?.sprites[random]} alt="txt" className={`${!position ? "bottomEquipButton" : "topEquipButton"}`} onClick={() => wrongAnswerSound()} />//change here
                    {(wrong) ? <Image src={dentistScene?.sprites[19]} alt="txt" className={`${!position ? "bottomHighlightIcon" : "topHighlightIcon"}`} onClick={() => wrongAnswerSound()} /> : null}//change here

                    <Image src={dentistScene?.sprites[20]} alt="" className="progressBar" />
                    <div className='starspos'>
                        {[...Array(stars)].map((elementInArray, index) => (
                            <Image src={dentistScene?.sprites[21]} alt="" className="progressBarStars" />
                        )
                        )}
                    </div>
                    <div ref={Ref29} className="dentistSceneIcon" id="characterAnimation"></div>//change here

                </>
            }
        />
    );
}

export default DentistActivity;//change here
