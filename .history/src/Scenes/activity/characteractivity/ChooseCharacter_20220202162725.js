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
    // console.log(num);
    // console.log(character)


    useEffect(() => {
        // if (character == 'doctor') {
        //     var sound = new Howl({
        //         src: [`/internal/audio/SB_26_Audio_09.mp3`],
        //     });
        // } else if (character == 'armyman') {
        //     var sound = new Howl({
        //         src: [`/internal/audio/SB_26_Audio_23.mp3`],
        //     });
        // }
        var sound = new Howl({
            src: [`/internal/audio/SB_26_Audio_${num}.mp3`],
        });
        sound.play();
        sound.on('end', () => {
            // setSceneId('/doctor')
            setEnableButton(true)
        })
        randomize();
        // setRandom(randomNumber)
        // console.log(randomNumber)
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
    // const Ref20 = useRef(null);

    // useEffect(() => {
    //     if (choosecharacter && Ref20.current && !Loading) {
    //         try {
    //             lottie.loadAnimation({
    //                 name: "characterAnimation",
    //                 container: Ref20.current,
    //                 renderer: "svg",
    //                 loop: true,
    //                 autoplay: true,
    //                 animationData: choosecharacter?.lottie[0],
    //             })
    //         } catch (err) {
    //             console.log(err)
    //         }
    //     }
    // }, [Assets, Loading])
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
                }
                else if (character == 'garbagecollector') {
                    setSceneId('/garbagecollectoractivity')
                }
                else if (character == 'teacher') {
                    setSceneId('/teacheractivity')
                }
                // setSceneId('/doctor')
            })
            setCorrect(true)
        }
    }
    const PlayArmyManSound = () => {
        // var characterSound = new Howl({
        //     src: [`/internal/audio/SB_26_Audio_09.mp3`],
        // });
        // characterSound.play()
    }
    const PlayDentistSound = () => {
        // var characterSound = new Howl({
        //     src: [`/internal/audio/SB_26_Audio_09.mp3`],
        // });
        // characterSound.play()
    }
    const PlayDoctorSound = () => {
        // var characterSound = new Howl({
        //     src: [`/internal/audio/SB_26_Audio_09.mp3`],
        // });
        // characterSound.play()
    }
    const PlayFireFighterSound = () => {
        // var characterSound = new Howl({
        //     src: [`/internal/audio/SB_26_Audio_09.mp3`],
        // });
        // characterSound.play()
    }
    const PlayFloorCleanerSound = () => {
        // var characterSound = new Howl({
        //     src: [`/internal/audio/SB_26_Audio_09.mp3`],
        // });
        // characterSound.play()
    }
    const PlayGarbageCollectorSound = () => {
        // var characterSound = new Howl({
        //     src: [`/internal/audio/SB_26_Audio_09.mp3`],
        // });
        // characterSound.play()
    }
    const PlayGardenerSound = () => {
        // var characterSound = new Howl({
        //     src: [`/internal/audio/SB_26_Audio_09.mp3`],
        // });
        // characterSound.play()
    }
    const PlayGuardSound = () => {
        // var characterSound = new Howl({
        //     src: [`/internal/audio/SB_26_Audio_09.mp3`],
        // });
        // characterSound.play()
    }
    const PlayPoliceSound = () => {
        // var characterSound = new Howl({
        //     src: [`/internal/audio/SB_26_Audio_09.mp3`],
        // });
        // characterSound.play()
    }
    const PlayTeacherSound = () => {
        // var characterSound = new Howl({
        //     src: [`/internal/audio/SB_26_Audio_09.mp3`],
        // });
        // characterSound.play()
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
                                    <div onLoad={() => PlayArmyManSound()}>
                                        <div onClick={() => rightAnswerSound()}>
                                            <Image src={choosecharacter?.sprites[charNum]} alt="" className={`${position ? "leftCharacterIcon" : "rightCharacterIcon"}`} />
                                            {(correct) ? <Image src={choosecharacter?.sprites[4]} alt="txt" className={`${position ? "leftHilighterIcon" : "rightHilighterIcon"}`} /> : null}
                                        </div>
                                        <div onClick={() => wrongAnswerSound()}>
                                            <Image src={choosecharacter?.sprites[random]} alt="txt" className={`${!position ? "leftCharacterIcon" : "rightCharacterIcon"}`} />
                                            {(wrong) ? <Image src={choosecharacter?.sprites[5]} alt="txt" className={`${!position ? "leftHilighterIcon" : "rightHilighterIcon"}`} /> : null}
                                        </div>
                                    </div>
                                )
                            case 'dentist':
                                return (
                                    <div onLoad={() => PlayDentistSound()}>
                                        <div onClick={() => rightAnswerSound()}>
                                            <Image src={choosecharacter?.sprites[charNum]} alt="" className={`${position ? "leftCharacterIcon" : "rightCharacterIcon"}`} />
                                            {(correct) ? <Image src={choosecharacter?.sprites[4]} alt="txt" className={`${position ? "leftHilighterIcon" : "rightHilighterIcon"}`} /> : null}
                                        </div>
                                        <div onClick={() => wrongAnswerSound()}>
                                            <Image src={choosecharacter?.sprites[random]} alt="txt" className={`${!position ? "leftCharacterIcon" : "rightCharacterIcon"}`} />
                                            {(wrong) ? <Image src={choosecharacter?.sprites[5]} alt="txt" className={`${!position ? "leftHilighterIcon" : "rightHilighterIcon"}`} /> : null}
                                        </div>
                                    </div>

                                )
                            case 'doctor':
                                return (
                                    <div onLoad={() => PlayDoctorSound()}>
                                        <div onClick={() => rightAnswerSound()}>
                                            <Image src={choosecharacter?.sprites[charNum]} alt="" className={`${position ? "leftCharacterIcon" : "rightCharacterIcon"}`} />
                                            {(correct) ? <Image src={choosecharacter?.sprites[4]} alt="txt" className={`${position ? "leftHilighterIcon" : "rightHilighterIcon"}`} /> : null}
                                        </div>
                                        <div onClick={() => wrongAnswerSound()}>
                                            <Image src={choosecharacter?.sprites[random]} alt="txt" className={`${!position ? "leftCharacterIcon" : "rightCharacterIcon"}`} />
                                            {(wrong) ? <Image src={choosecharacter?.sprites[5]} alt="txt" className={`${!position ? "leftHilighterIcon" : "rightHilighterIcon"}`} /> : null}
                                        </div>
                                    </div>
                                )
                            case 'firefighter':
                                return (
                                    <div onLoad={() => PlayFireFighterSound()}>
                                        <div onClick={() => rightAnswerSound()}>
                                            <Image src={choosecharacter?.sprites[charNum]} alt="" className={`${position ? "leftCharacterIcon" : "rightCharacterIcon"}`} />
                                            {(correct) ? <Image src={choosecharacter?.sprites[4]} alt="txt" className={`${position ? "leftHilighterIcon" : "rightHilighterIcon"}`} /> : null}
                                        </div>
                                        <div onClick={() => wrongAnswerSound()}>
                                            <Image src={choosecharacter?.sprites[random]} alt="txt" className={`${!position ? "leftCharacterIcon" : "rightCharacterIcon"}`} />
                                            {(wrong) ? <Image src={choosecharacter?.sprites[5]} alt="txt" className={`${!position ? "leftHilighterIcon" : "rightHilighterIcon"}`} /> : null}
                                        </div>
                                    </div>
                                )
                            case 'floorcleaner':
                                return (
                                    <div onLoad={() => PlayFloorCleanerSound()}>
                                        <div onClick={() => rightAnswerSound()}>
                                            <Image src={choosecharacter?.sprites[charNum]} alt="" className={`${position ? "leftCharacterIcon" : "rightCharacterIcon"}`} />
                                            {(correct) ? <Image src={choosecharacter?.sprites[4]} alt="txt" className={`${position ? "leftHilighterIcon" : "rightHilighterIcon"}`} /> : null}
                                        </div>
                                        <div onClick={() => wrongAnswerSound()}>
                                            <Image src={choosecharacter?.sprites[random]} alt="txt" className={`${!position ? "leftCharacterIcon" : "rightCharacterIcon"}`} />
                                            {(wrong) ? <Image src={choosecharacter?.sprites[5]} alt="txt" className={`${!position ? "leftHilighterIcon" : "rightHilighterIcon"}`} /> : null}
                                        </div>
                                    </div>
                                )
                            case 'garbagecollector':
                                return (
                                    <div onLoad={() => PlayGarbageCollectorSound()}>
                                        <div onClick={() => rightAnswerSound()}>
                                            <Image src={choosecharacter?.sprites[charNum]} alt="" className={`${position ? "leftCharacterIcon" : "rightCharacterIcon"}`} />
                                            {(correct) ? <Image src={choosecharacter?.sprites[4]} alt="txt" className={`${position ? "leftHilighterIcon" : "rightHilighterIcon"}`} /> : null}
                                        </div>
                                        <div onClick={() => wrongAnswerSound()}>
                                            <Image src={choosecharacter?.sprites[random]} alt="txt" className={`${!position ? "leftCharacterIcon" : "rightCharacterIcon"}`} />
                                            {(wrong) ? <Image src={choosecharacter?.sprites[5]} alt="txt" className={`${!position ? "leftHilighterIcon" : "rightHilighterIcon"}`} /> : null}
                                        </div>
                                    </div>
                                )
                            case 'gardener':
                                return (
                                    <div onLoad={() => PlayGardenerSound()}>
                                        <div onClick={() => rightAnswerSound()}>
                                            <Image src={choosecharacter?.sprites[charNum]} alt="" className={`${position ? "leftCharacterIcon" : "rightCharacterIcon"}`} />
                                            {(correct) ? <Image src={choosecharacter?.sprites[4]} alt="txt" className={`${position ? "leftHilighterIcon" : "rightHilighterIcon"}`} /> : null}
                                        </div>
                                        <div onClick={() => wrongAnswerSound()}>
                                            <Image src={choosecharacter?.sprites[random]} alt="txt" className={`${!position ? "leftCharacterIcon" : "rightCharacterIcon"}`} />
                                            {(wrong) ? <Image src={choosecharacter?.sprites[5]} alt="txt" className={`${!position ? "leftHilighterIcon" : "rightHilighterIcon"}`} /> : null}
                                        </div>
                                    </div>
                                )
                            case 'guard':
                                return (
                                    <div onLoad={() => PlayGuardSound()}>
                                        <div onClick={() => rightAnswerSound()}>
                                            <Image src={choosecharacter?.sprites[charNum]} alt="" className={`${position ? "leftCharacterIcon" : "rightCharacterIcon"}`} />
                                            {(correct) ? <Image src={choosecharacter?.sprites[4]} alt="txt" className={`${position ? "leftHilighterIcon" : "rightHilighterIcon"}`} /> : null}
                                        </div>
                                        <div onClick={() => wrongAnswerSound()}>
                                            <Image src={choosecharacter?.sprites[random]} alt="txt" className={`${!position ? "leftCharacterIcon" : "rightCharacterIcon"}`} />
                                            {(wrong) ? <Image src={choosecharacter?.sprites[5]} alt="txt" className={`${!position ? "leftHilighterIcon" : "rightHilighterIcon"}`} /> : null}
                                        </div>
                                    </div>
                                )
                            case 'police':
                                return (
                                    <div onLoad={() => PlayPoliceSound()}>
                                        <div onClick={() => rightAnswerSound()}>
                                            <Image src={choosecharacter?.sprites[charNum]} alt="" className={`${position ? "leftCharacterIcon" : "rightCharacterIcon"}`} />
                                            {(correct) ? <Image src={choosecharacter?.sprites[4]} alt="txt" className={`${position ? "leftHilighterIcon" : "rightHilighterIcon"}`} /> : null}
                                        </div>
                                        <div onClick={() => wrongAnswerSound()}>
                                            <Image src={choosecharacter?.sprites[random]} alt="txt" className={`${!position ? "leftCharacterIcon" : "rightCharacterIcon"}`} />
                                            {(wrong) ? <Image src={choosecharacter?.sprites[5]} alt="txt" className={`${!position ? "leftHilighterIcon" : "rightHilighterIcon"}`} /> : null}
                                        </div>
                                    </div>
                                )
                            case 'teacher':
                                return (
                                    <div onLoad={() => PlayTeacherSound()}>
                                        <div onClick={() => rightAnswerSound()}>
                                            <Image src={choosecharacter?.sprites[charNum]} alt="" className={`${position ? "leftCharacterIcon" : "rightCharacterIcon"}`} />
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
