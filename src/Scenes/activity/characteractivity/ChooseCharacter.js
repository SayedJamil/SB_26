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
function ChooseCharacter() {
    const { Bg, Loading } = useLoadAsset(AssetsMap.chooseCharacter)
    const { setSceneId, Assets, character, num, charNum, setisLoading } = useContext(SceneContext);
    const { choosecharacter } = Assets;
    const { Sound, setSound, } = useContext(SoundContext)
    const [correct, setCorrect] = useState(false)
    const [wrong, setWrong] = useState(false)
    const [enableButton, setEnableButton] = useState(false)
    const [random, setRandom] = useState(0)
    const [position, setPosition] = useState(true)

    useEffect(() => {

        var sound = new Howl({
            src: [`ee01_ow_thss_pl1/audio/SB_26_Audio_${num}.mp3`],
        });
        sound.play();
        sound.on('end', () => {
            setEnableButton(true)
        })
        randomize();

    }, [character, num])
    const randomize = () => {
        var randomNumber = Math.floor(Math.random() * (15 - 6 + 1)) + 6;
        if (randomNumber != charNum) {
            setRandom(randomNumber)
        } else {
            randomize()
        }
        var randomPos = Math.random() >= 0.5;
        setPosition(randomPos)
    }



    const wrongAnswerSound = () => {
        if (enableButton) {
            var sound = new Howl({
                src: [`ee01_ow_thss_pl1/audio/SB_26_Audio_10.mp3`],
            });
            sound.play();
            setWrong(true)
            sound.on('end', () => {
                setWrong(false)
            })
        }
    }
    const rightAnswerSound = () => {
        if (enableButton) {
            var sound = new Howl({
                src: [`ee01_ow_thss_pl1/audio/SB_26_Audio_11.mp3`],
            });
            sound.play();
            sound.on('end', () => {
                if (character == 'doctor') {
                    setisLoading(true)
                    setSceneId('/doctoractivity')
                } else if (character == 'armyman') {
                    setisLoading(true)
                    setSceneId('/armymanactivity')
                } else if (character == 'gardener') {
                    setisLoading(true)
                    setSceneId('/gardeneractivity')
                } else if (character == 'police') {
                    setisLoading(true)
                    setSceneId('/policeactivity')
                } else if (character == 'teacher') {
                    setisLoading(true)
                    setSceneId('/teacheractivity')
                } else if (character == 'garbagecollector') {
                    setisLoading(true)
                    setSceneId('/garbagecollectoractivity')
                } else if (character == 'dentist') {
                    setisLoading(true)
                    setSceneId('/dentistactivity')
                } else if (character == 'floorcleaner') {
                    setisLoading(true)
                    setSceneId('/floorcleaneractivity')
                } else if (character == 'guard') {
                    setisLoading(true)
                    setSceneId('/guardactivity')
                } else if (character == 'firefighter') {
                    setisLoading(true)
                    setSceneId('/firefighteractivity')
                }
                // setSceneId('/doctor')
            })
            setCorrect(true)
        }
        setEnableButton(false)
    }


    return (
        <Scenes
            Bg={Bg}
            sprites={
                <>

                    {(() => {
                        switch (character) {
                            case 'armyman':
                                return (
                                    <div>

                                        <Image src={choosecharacter?.sprites[charNum]} alt="" className={`${position ? "leftCharacterIcon" : "rightCharacterIcon"}`} onClick={() => rightAnswerSound()} />
                                        {(correct) ? <Image src={choosecharacter?.sprites[4]} alt="txt" className={`${position ? "leftHilighterIcon" : "rightHilighterIcon"}`} onClick={() => rightAnswerSound()} /> : null}

                                        <Image src={choosecharacter?.sprites[random]} alt="txt" className={`${!position ? "leftCharacterIcon" : "rightCharacterIcon"}`} onClick={() => wrongAnswerSound()} />
                                        {(wrong) ? <Image src={choosecharacter?.sprites[5]} alt="txt" className={`${!position ? "leftHilighterIcon" : "rightHilighterIcon"}`} onClick={() => wrongAnswerSound()} /> : null}

                                    </div>
                                )
                            case 'dentist':
                                return (
                                    <div>

                                        <Image src={choosecharacter?.sprites[charNum]} alt="" className={`${position ? "leftCharacterIcon" : "rightCharacterIcon"}`} onClick={() => rightAnswerSound()} />
                                        {(correct) ? <Image src={choosecharacter?.sprites[4]} alt="txt" className={`${position ? "leftHilighterIcon" : "rightHilighterIcon"}`} onClick={() => rightAnswerSound()} /> : null}


                                        <Image src={choosecharacter?.sprites[random]} alt="txt" className={`${!position ? "leftCharacterIcon" : "rightCharacterIcon"}`} onClick={() => wrongAnswerSound()} />
                                        {(wrong) ? <Image src={choosecharacter?.sprites[5]} alt="txt" className={`${!position ? "leftHilighterIcon" : "rightHilighterIcon"}`} onClick={() => wrongAnswerSound()} /> : null}

                                    </div>

                                )
                            case 'doctor':
                                return (
                                    <div>

                                        <Image src={choosecharacter?.sprites[charNum]} alt="" className={`${position ? "leftCharacterIcon" : "rightCharacterIcon"}`} onClick={() => rightAnswerSound()} />
                                        {(correct) ? <Image src={choosecharacter?.sprites[4]} alt="txt" className={`${position ? "leftHilighterIcon" : "rightHilighterIcon"}`} onClick={() => rightAnswerSound()} /> : null}


                                        <Image src={choosecharacter?.sprites[random]} alt="txt" className={`${!position ? "leftCharacterIcon" : "rightCharacterIcon"}`} onClick={() => wrongAnswerSound()} />
                                        {(wrong) ? <Image src={choosecharacter?.sprites[5]} alt="txt" className={`${!position ? "leftHilighterIcon" : "rightHilighterIcon"}`} onClick={() => wrongAnswerSound()} /> : null}

                                    </div>
                                )
                            case 'firefighter':
                                return (
                                    <div>

                                        <Image src={choosecharacter?.sprites[charNum]} alt="" className={`${position ? "leftCharacterIcon" : "rightCharacterIcon"}`} onClick={() => rightAnswerSound()} />
                                        {(correct) ? <Image src={choosecharacter?.sprites[4]} alt="txt" className={`${position ? "leftHilighterIcon" : "rightHilighterIcon"}`} onClick={() => rightAnswerSound()} /> : null}


                                        <Image src={choosecharacter?.sprites[random]} alt="txt" className={`${!position ? "leftCharacterIcon" : "rightCharacterIcon"}`} onClick={() => wrongAnswerSound()} />
                                        {(wrong) ? <Image src={choosecharacter?.sprites[5]} alt="txt" className={`${!position ? "leftHilighterIcon" : "rightHilighterIcon"}`} onClick={() => wrongAnswerSound()} /> : null}

                                    </div>
                                )
                            case 'floorcleaner':
                                return (
                                    <div>

                                        <Image src={choosecharacter?.sprites[charNum]} alt="" className={`${position ? "leftCharacterIcon" : "rightCharacterIcon"}`} onClick={() => rightAnswerSound()} />
                                        {(correct) ? <Image src={choosecharacter?.sprites[4]} alt="txt" className={`${position ? "leftHilighterIcon" : "rightHilighterIcon"}`} onClick={() => rightAnswerSound()} /> : null}


                                        <Image src={choosecharacter?.sprites[random]} alt="txt" className={`${!position ? "leftCharacterIcon" : "rightCharacterIcon"}`} onClick={() => wrongAnswerSound()} />
                                        {(wrong) ? <Image src={choosecharacter?.sprites[5]} alt="txt" className={`${!position ? "leftHilighterIcon" : "rightHilighterIcon"}`} onClick={() => wrongAnswerSound()} /> : null}

                                    </div>
                                )
                            case 'garbagecollector':
                                return (
                                    <div>

                                        <Image src={choosecharacter?.sprites[charNum]} alt="" className={`${position ? "leftCharacterIcon" : "rightCharacterIcon"}`} onClick={() => rightAnswerSound()} />
                                        {(correct) ? <Image src={choosecharacter?.sprites[4]} alt="txt" className={`${position ? "leftHilighterIcon" : "rightHilighterIcon"}`} onClick={() => rightAnswerSound()} /> : null}

                                        <Image src={choosecharacter?.sprites[random]} alt="txt" className={`${!position ? "leftCharacterIcon" : "rightCharacterIcon"}`} onClick={() => wrongAnswerSound()} />
                                        {(wrong) ? <Image src={choosecharacter?.sprites[5]} alt="txt" className={`${!position ? "leftHilighterIcon" : "rightHilighterIcon"}`} onClick={() => wrongAnswerSound()} /> : null}

                                    </div>
                                )
                            case 'gardener':
                                return (
                                    <div>

                                        <Image src={choosecharacter?.sprites[charNum]} alt="" className={`${position ? "leftCharacterIcon" : "rightCharacterIcon"}`} onClick={() => rightAnswerSound()} />
                                        {(correct) ? <Image src={choosecharacter?.sprites[4]} alt="txt" className={`${position ? "leftHilighterIcon" : "rightHilighterIcon"}`} onClick={() => rightAnswerSound()} /> : null}


                                        <Image src={choosecharacter?.sprites[random]} alt="txt" className={`${!position ? "leftCharacterIcon" : "rightCharacterIcon"}`} onClick={() => wrongAnswerSound()} />
                                        {(wrong) ? <Image src={choosecharacter?.sprites[5]} alt="txt" className={`${!position ? "leftHilighterIcon" : "rightHilighterIcon"}`} onClick={() => wrongAnswerSound()} /> : null}

                                    </div>
                                )
                            case 'guard':
                                return (
                                    <div>

                                        <Image src={choosecharacter?.sprites[charNum]} alt="" className={`${position ? "leftCharacterIcon" : "rightCharacterIcon"}`} onClick={() => rightAnswerSound()} />
                                        {(correct) ? <Image src={choosecharacter?.sprites[4]} alt="txt" className={`${position ? "leftHilighterIcon" : "rightHilighterIcon"}`} onClick={() => rightAnswerSound()} /> : null}


                                        <Image src={choosecharacter?.sprites[random]} alt="txt" className={`${!position ? "leftCharacterIcon" : "rightCharacterIcon"}`} onClick={() => wrongAnswerSound()} />
                                        {(wrong) ? <Image src={choosecharacter?.sprites[5]} alt="txt" className={`${!position ? "leftHilighterIcon" : "rightHilighterIcon"}`} onClick={() => wrongAnswerSound()} /> : null}

                                    </div>
                                )
                            case 'police':
                                return (
                                    <div>

                                        <Image src={choosecharacter?.sprites[charNum]} alt="" className={`${position ? "leftCharacterIcon" : "rightCharacterIcon"}`} onClick={() => rightAnswerSound()} />
                                        {(correct) ? <Image src={choosecharacter?.sprites[4]} alt="txt" className={`${position ? "leftHilighterIcon" : "rightHilighterIcon"}`} onClick={() => rightAnswerSound()} /> : null}


                                        <Image src={choosecharacter?.sprites[random]} alt="txt" className={`${!position ? "leftCharacterIcon" : "rightCharacterIcon"}`} onClick={() => wrongAnswerSound()} />
                                        {(wrong) ? <Image src={choosecharacter?.sprites[5]} alt="txt" className={`${!position ? "leftHilighterIcon" : "rightHilighterIcon"}`} onClick={() => wrongAnswerSound()} /> : null}

                                    </div>
                                )
                            case 'teacher':
                                return (
                                    <div>

                                        <Image src={choosecharacter?.sprites[charNum]} alt="" className={`${position ? "leftCharacterIcon" : "rightCharacterIcon"}`} onClick={() => rightAnswerSound()} />
                                        {(correct) ? <Image src={choosecharacter?.sprites[4]} alt="txt" className={`${position ? "leftHilighterIcon" : "rightHilighterIcon"}`} onClick={() => rightAnswerSound()} /> : null}


                                        <Image src={choosecharacter?.sprites[random]} alt="txt" className={`${!position ? "leftCharacterIcon" : "rightCharacterIcon"}`} onClick={() => wrongAnswerSound()} />
                                        {(wrong) ? <Image src={choosecharacter?.sprites[5]} alt="txt" className={`${!position ? "leftHilighterIcon" : "rightHilighterIcon"}`} onClick={() => wrongAnswerSound()} /> : null}

                                    </div>
                                )
                            default:
                                return null
                        }
                    })()}

                </>
            }
        />
    );
}

export default ChooseCharacter;
