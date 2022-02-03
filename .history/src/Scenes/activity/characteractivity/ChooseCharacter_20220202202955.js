import { Howl, Howler } from 'howler';
import React, { useEffect, useRef, useState } from 'react';
import { useContext } from 'react/cjs/react.development';
import { SceneContext } from '../../../contexts/SceneContext';
import { SoundContext } from '../../../contexts/SoundContext';
import Image from '../../../utils/elements/Image';
import Scenes from '../../../utils/Scenes';
import useLoadAsset from '../../../utils/useLoadAsset';
import CharacterActivityAsset from './CharacterActivityAsset';
import '../../../styles/explain.css'
import '../../../styles/characterscene.css'
import lottie from 'lottie-web';
function ChooseCharacter() {
    const { Bg, Loading } = useLoadAsset(CharacterActivityAsset.chooseCharacter)
    const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets, character, setCharacter, num, setNum, charNum } = useContext(SceneContext);
    const { choosecharacter } = Assets;
    const { Sound, setSound, muted, setMuted } = useContext(SoundContext)
    const [correct, setCorrect] = useState(false)
    const [wrong, setWrong] = useState(false)
    const [enableButton, setEnableButton] = useState(false)
    const [random, setRandom] = useState()
    const [position, setPosition] = useState(true)

    useEffect(() => {
      
        var sound = new Howl({
            src: [`/internal/audio/SB_26_Audio_${num}.mp3`],
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

    const toggle = () => setMuted(!muted)

    const wrongAnswerSound = () => {
        if (enableButton) {
            var sound = new Howl({
                src: [`/internal/audio/SB_26_Audio_10.mp3`],
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
                src: [`/internal/audio/SB_26_Audio_11.mp3`],
            });
            sound.play();
            sound.on('end', () => {
                if (character == 'doctor') {
                    setSceneId('/doctoractivity')
                } else if (character == 'armyman') {
                    setSceneId('/armymanactivity')
                } else if (character == 'gardener') {
                    setSceneId('/gardeneractivity')
                } else if (character == 'police') {
                    setSceneId('/policeactivity')
                } else if (character == 'teacher') {
                    setSceneId('/teacheractivity')
                } else if (character == 'garbagecollector') {
                    setSceneId('/garbagecollectoractivity')
                } else if (character == 'dentist') {
                    setSceneId('/dentistactivity')
                } else if (character == 'floorcleaner') {
                    setSceneId('/floorcleaneractivity')
                } else if (character == 'guard') {
                    setSceneId('/guardactivity')
                } else if (character == 'firefighter') {
                    setSceneId('/firefighteractivity')
                }
                // setSceneId('/doctor')
            })
            setCorrect(true)
        }
    }


    return (
        <Scenes
            Bg={Bg}
            sprites={
                <>
                    {
                        muted
                            ? <div onClick={() => {
                                Howler.volume(1)
                                toggle()
                            }}>
                                <Image src={choosecharacter?.sprites[3]} alt="txt" className="music_button" />
                            </div>
                            : <div onClick={() => {
                                Howler.volume(0)
                                toggle()
                            }}>
                                <Image src={choosecharacter?.sprites[2]} alt="txt" className="music_button" />
                            </div>
                    }
                    {(() => {
                        switch (character) {
                            case 'armyman':
                                return (
                                    <div>
                                        <div >
                                            <Image src={choosecharacter?.sprites[charNum]} alt="" className={`${position ? "leftCharacterIcon" : "rightCharacterIcon"}`} onClick={() => rightAnswerSound()}/>
                                            {(correct) ? <Image src={choosecharacter?.sprites[4]} alt="txt" className={`${position ? "leftHilighterIcon" : "rightHilighterIcon"}`} onClick={() => rightAnswerSound()}/> : null}
                                        </div>
                                        <div onClick={() => wrongAnswerSound()}>
                                            <Image src={choosecharacter?.sprites[random]} alt="txt" className={`${!position ? "leftCharacterIcon" : "rightCharacterIcon"}`} />
                                            {(wrong) ? <Image src={choosecharacter?.sprites[5]} alt="txt" className={`${!position ? "leftHilighterIcon" : "rightHilighterIcon"}`} /> : null}
                                        </div>
                                    </div>
                                )
                            case 'dentist':
                                return (
                                    <div>
                                        <div onClick={() => rightAnswerSound()}>
                                            <Image src={choosecharacter?.sprites[charNum]} alt="" className={`${position ? "leftCharacterIcon" : "rightCharacterIcon"}`} onClick={() => rightAnswerSound()}/>
                                            {(correct) ? <Image src={choosecharacter?.sprites[4]} alt="txt" className={`${position ? "leftHilighterIcon" : "rightHilighterIcon"}`} onClick={() => rightAnswerSound()}/> : null}
                                        </div>
                                        <div onClick={() => wrongAnswerSound()}>
                                            <Image src={choosecharacter?.sprites[random]} alt="txt" className={`${!position ? "leftCharacterIcon" : "rightCharacterIcon"}`} />
                                            {(wrong) ? <Image src={choosecharacter?.sprites[5]} alt="txt" className={`${!position ? "leftHilighterIcon" : "rightHilighterIcon"}`} /> : null}
                                        </div>
                                    </div>

                                )
                            case 'doctor':
                                return (
                                    <div>
                                        <div onClick={() => rightAnswerSound()}>
                                            <Image src={choosecharacter?.sprites[charNum]} alt="" className={`${position ? "leftCharacterIcon" : "rightCharacterIcon"}`} onClick={() => rightAnswerSound()}/>
                                            {(correct) ? <Image src={choosecharacter?.sprites[4]} alt="txt" className={`${position ? "leftHilighterIcon" : "rightHilighterIcon"}`} onClick={() => rightAnswerSound()}/> : null}
                                        </div>
                                        <div onClick={() => wrongAnswerSound()}>
                                            <Image src={choosecharacter?.sprites[random]} alt="txt" className={`${!position ? "leftCharacterIcon" : "rightCharacterIcon"}`} />
                                            {(wrong) ? <Image src={choosecharacter?.sprites[5]} alt="txt" className={`${!position ? "leftHilighterIcon" : "rightHilighterIcon"}`} /> : null}
                                        </div>
                                    </div>
                                )
                            case 'firefighter':
                                return (
                                    <div>
                                        <div onClick={() => rightAnswerSound()}>
                                            <Image src={choosecharacter?.sprites[charNum]} alt="" className={`${position ? "leftCharacterIcon" : "rightCharacterIcon"}`} onClick={() => rightAnswerSound()}/>
                                            {(correct) ? <Image src={choosecharacter?.sprites[4]} alt="txt" className={`${position ? "leftHilighterIcon" : "rightHilighterIcon"}`} onClick={() => rightAnswerSound()}/> : null}
                                        </div>
                                        <div onClick={() => wrongAnswerSound()}>
                                            <Image src={choosecharacter?.sprites[random]} alt="txt" className={`${!position ? "leftCharacterIcon" : "rightCharacterIcon"}`} />
                                            {(wrong) ? <Image src={choosecharacter?.sprites[5]} alt="txt" className={`${!position ? "leftHilighterIcon" : "rightHilighterIcon"}`} /> : null}
                                        </div>
                                    </div>
                                )
                            case 'floorcleaner':
                                return (
                                    <div>
                                        <div onClick={() => rightAnswerSound()}>
                                            <Image src={choosecharacter?.sprites[charNum]} alt="" className={`${position ? "leftCharacterIcon" : "rightCharacterIcon"}`} onClick={() => rightAnswerSound()}/>
                                            {(correct) ? <Image src={choosecharacter?.sprites[4]} alt="txt" className={`${position ? "leftHilighterIcon" : "rightHilighterIcon"}`} onClick={() => rightAnswerSound()}/> : null}
                                        </div>
                                        <div onClick={() => wrongAnswerSound()}>
                                            <Image src={choosecharacter?.sprites[random]} alt="txt" className={`${!position ? "leftCharacterIcon" : "rightCharacterIcon"}`} />
                                            {(wrong) ? <Image src={choosecharacter?.sprites[5]} alt="txt" className={`${!position ? "leftHilighterIcon" : "rightHilighterIcon"}`} /> : null}
                                        </div>
                                    </div>
                                )
                            case 'garbagecollector':
                                return (
                                    <div>
                                        <div onClick={() => rightAnswerSound()}>
                                            <Image src={choosecharacter?.sprites[charNum]} alt="" className={`${position ? "leftCharacterIcon" : "rightCharacterIcon"}`} onClick={() => rightAnswerSound()}/>
                                            {(correct) ? <Image src={choosecharacter?.sprites[4]} alt="txt" className={`${position ? "leftHilighterIcon" : "rightHilighterIcon"}`} onClick={() => rightAnswerSound()}/> : null}
                                        </div>
                                        <div onClick={() => wrongAnswerSound()}>
                                            <Image src={choosecharacter?.sprites[random]} alt="txt" className={`${!position ? "leftCharacterIcon" : "rightCharacterIcon"}`} />
                                            {(wrong) ? <Image src={choosecharacter?.sprites[5]} alt="txt" className={`${!position ? "leftHilighterIcon" : "rightHilighterIcon"}`} /> : null}
                                        </div>
                                    </div>
                                )
                            case 'gardener':
                                return (
                                    <div>
                                        <div onClick={() => rightAnswerSound()}>
                                            <Image src={choosecharacter?.sprites[charNum]} alt="" className={`${position ? "leftCharacterIcon" : "rightCharacterIcon"}`} onClick={() => rightAnswerSound()}/>
                                            {(correct) ? <Image src={choosecharacter?.sprites[4]} alt="txt" className={`${position ? "leftHilighterIcon" : "rightHilighterIcon"}`} onClick={() => rightAnswerSound()}/> : null}
                                        </div>
                                        <div onClick={() => wrongAnswerSound()}>
                                            <Image src={choosecharacter?.sprites[random]} alt="txt" className={`${!position ? "leftCharacterIcon" : "rightCharacterIcon"}`} />
                                            {(wrong) ? <Image src={choosecharacter?.sprites[5]} alt="txt" className={`${!position ? "leftHilighterIcon" : "rightHilighterIcon"}`} /> : null}
                                        </div>
                                    </div>
                                )
                            case 'guard':
                                return (
                                    <div>
                                        <div onClick={() => rightAnswerSound()}>
                                            <Image src={choosecharacter?.sprites[charNum]} alt="" className={`${position ? "leftCharacterIcon" : "rightCharacterIcon"}`} onClick={() => rightAnswerSound()}/>
                                            {(correct) ? <Image src={choosecharacter?.sprites[4]} alt="txt" className={`${position ? "leftHilighterIcon" : "rightHilighterIcon"}`} onClick={() => rightAnswerSound()}/> : null}
                                        </div>
                                        <div onClick={() => wrongAnswerSound()}>
                                            <Image src={choosecharacter?.sprites[random]} alt="txt" className={`${!position ? "leftCharacterIcon" : "rightCharacterIcon"}`} />
                                            {(wrong) ? <Image src={choosecharacter?.sprites[5]} alt="txt" className={`${!position ? "leftHilighterIcon" : "rightHilighterIcon"}`} /> : null}
                                        </div>
                                    </div>
                                )
                            case 'police':
                                return (
                                    <div>
                                        <div onClick={() => rightAnswerSound()}>
                                            <Image src={choosecharacter?.sprites[charNum]} alt="" className={`${position ? "leftCharacterIcon" : "rightCharacterIcon"}`} onClick={() => rightAnswerSound()}/>
                                            {(correct) ? <Image src={choosecharacter?.sprites[4]} alt="txt" className={`${position ? "leftHilighterIcon" : "rightHilighterIcon"}`} onClick={() => rightAnswerSound()}/> : null}
                                        </div>
                                        <div onClick={() => wrongAnswerSound()}>
                                            <Image src={choosecharacter?.sprites[random]} alt="txt" className={`${!position ? "leftCharacterIcon" : "rightCharacterIcon"}`} />
                                            {(wrong) ? <Image src={choosecharacter?.sprites[5]} alt="txt" className={`${!position ? "leftHilighterIcon" : "rightHilighterIcon"}`} /> : null}
                                        </div>
                                    </div>
                                )
                            case 'teacher':
                                return (
                                    <div>
                                        <div onClick={() => rightAnswerSound()}>
                                            <Image src={choosecharacter?.sprites[charNum]} alt="" className={`${position ? "leftCharacterIcon" : "rightCharacterIcon"}`} onClick={() => rightAnswerSound()}/>
                                            {(correct) ? <Image src={choosecharacter?.sprites[4]} alt="txt" className={`${position ? "leftHilighterIcon" : "rightHilighterIcon"}`} /> : null}
                                        </div>
                                        <div onClick={() => wrongAnswerSound()}>
                                            <Image src={choosecharacter?.sprites[random]} alt="txt" className={`${!position ? "leftCharacterIcon" : "rightCharacterIcon"}`} />
                                            {(wrong) ? <Image src={choosecharacter?.sprites[5]} alt="txt" className={`${!position ? "leftHilighterIcon" : "rightHilighterIcon"}`} /> : null}
                                        </div>
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
