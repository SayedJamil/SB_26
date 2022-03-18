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


function GarbageCollectorActivity() {//change here
    const { Bg, Loading } = useLoadAsset(AssetsMap.garbageCollector)//change here
    const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets, character, setCharacter, setNum, setCharNum, toolNum, setToolNum, stars, setStars, BG_sound } = useContext(SceneContext);
    const { garbageCollectorScene } = Assets;
    const { Sound, setSound, } = useContext(SoundContext)
    const [correct, setCorrect] = useState(false)
    const [wrong, setWrong] = useState(false)
    const [enableButton, setEnableButton] = useState(true)
    const [random, setRandom] = useState()
    const [position, setPosition] = useState(true)
    var sound = new Howl({
        src: [`ee01_ow_thss_pl1/audio/14_11_2021/sb_26_audio_03.mp3`],//change here
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

    const Ref25 = useRef(null);//change here

    useEffect(() => {
        if (garbageCollectorScene?.lottie && Ref25.current && !Loading) {//change here
            try {
                lottie.loadAnimation({
                    name: "characterAnimation",
                    container: Ref25.current,//change here
                    renderer: "svg",
                    loop: true,
                    autoplay: true,
                    animationData: garbageCollectorScene?.lottie[0],
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
                src: [`ee01_ow_thss_pl1/audio/sb_26_audio_10.mp3`],
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
                src: [`ee01_ow_thss_pl1/audio/14_11_2021/sb_26_audio_04.mp3`],//change here
            });
            sound.play();
            sound.on('end', () => {
                setCharacter('firefighter')//change here
                setNum('38')//change here for audio "Tap the character"
                setCharNum(9)//change here from choosecharacterassetmap character icon
                setToolNum(8)//change here from choosecharacterassetmap character tool
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
                        <Image src={garbageCollectorScene?.sprites[toolNum]} alt="txt" className={`${position ? "bottomEquipButton" : "topEquipButton"}`} onClick={() => rightAnswerSound()} />{/* changehere */}

                        {(correct) ? <Image src={garbageCollectorScene?.sprites[18]} alt="txt" className={`${position ? "bottomHighlightIcon" : "topHighlightIcon"}`} onClick={() => rightAnswerSound()} /> : null}{/* changehere */}
                    </div>

                    <Image src={garbageCollectorScene?.sprites[random]} alt="txt" className={`${!position ? "bottomEquipButton" : "topEquipButton"}`} onClick={() => wrongAnswerSound()} />//change here
                    {(wrong) ? <Image src={garbageCollectorScene?.sprites[19]} alt="txt" className={`${!position ? "bottomHighlightIcon" : "topHighlightIcon"}`} onClick={() => wrongAnswerSound()} /> : null}//change here

                    <Image src={garbageCollectorScene?.sprites[20]} alt="" className="progressBar" />
                    <div className='starspos'>
                        {[...Array(stars)].map((elementInArray, index) => (
                            <Image src={garbageCollectorScene?.sprites[21]} alt="" className="progressBarStars" />
                        )
                        )}
                    </div>
                    <div ref={Ref25} className="garbageCollectorSceneIcon" id="characterAnimation"></div>//change here

                </>
            }
        />
    );
}

export default GarbageCollectorActivity;//change here
