import { Howl, Howler } from 'howler';
import React, { useEffect, useRef, useState } from 'react';
import { useContext } from 'react/cjs/react.development';
import { SceneContext } from '../../../contexts/SceneContext';
import { SoundContext } from '../../../contexts/SoundContext';
import Image from '../../../utils/elements/Image';
import Scenes from '../../../utils/Scenes';
import useLoadAsset from '../../../utils/useLoadAsset';
import '../../../styles/explain.css'
import '../../../styles/characterscene.css'
import lottie from 'lottie-web';
import AssetsMap from '../../../Assets';


function DoctorActivity() {//change here
    const { Bg, Loading } = useLoadAsset(AssetsMap.doctor)//change here
    const { setSceneId, isLoading, setisLoading, Assets, setAssets, character, setCharacter, setNum, setCharNum, toolNum, setToolNum, stars, setStars } = useContext(SceneContext);
    const { doctorScene } = Assets;
    const { Sound, setSound, muted, setMuted } = useContext(SoundContext)
    const [correct, setCorrect] = useState(false)
    const [wrong, setWrong] = useState(false)
    const [enableButton, setEnableButton] = useState(false)
    const [random, setRandom] = useState()
    const [position, setPosition] = useState(true)
    useEffect(() => {
        var sound = new Howl({
            src: [`internal/audio/SB_26_Audio_12.mp3`],//change here
        });
        sound.play();
        sound.on('end', () => {
            setEnableButton(true)
        })
        randomize();
    }, [])
    const toggle = () => setMuted(!muted)
    const Ref21 = useRef(null);//change here

    useEffect(() => {
        if (doctorScene?.lottie && Ref21.current && !Loading) {//change here
            try {
                lottie.loadAnimation({
                    name: "characterAnimation",
                    container: Ref21.current,//change here
                    renderer: "svg",
                    loop: true,
                    autoplay: true,
                    animationData: doctorScene?.lottie[0],
                })
            } catch (err) {
                console.log(err)
            }
        }
    }, [Assets, Loading])
    const wrongAnswerSound = () => {
        if (enableButton) {
            var sound = new Howl({
                src: [`internal/audio/SB_26_Audio_10.mp3`],
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
                src: [`internal/audio/SB_26_Audio_13.mp3`],
            });
            sound.play();
            setCorrect(true)
            setStars(stars + 1)
            setEnableButton(false)
            sound.on('end', () => {
                setCharacter('gardener')//change here
                setNum('14')//change here for audio "Tap the character"
                setCharNum(12)//change here from choosecharacterassetmap character icon
                setToolNum(17)//change here from choosecharacterassetmap character tool
                setSceneId('/choosecharacter')
            })

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
                    {
                        muted
                            ? <div onClick={() => {
                                Howler.volume(1)
                                toggle()
                            }}>
                                <Image src={doctorScene?.sprites[5]} alt="txt" className="music_button" />
                            </div>
                            : <div onClick={() => {
                                Howler.volume(0)
                                toggle()
                            }}>
                                <Image src={doctorScene?.sprites[4]} alt="txt" className="music_button" />
                            </div>
                    }

                    <Image src={doctorScene?.sprites[toolNum]} alt="txt" className={`${position ? "bottomEquipButton" : "topEquipButton"}`} onClick={() => rightAnswerSound()} />{/* changehere */}
                    {(correct) ? <Image src={doctorScene?.sprites[18]} alt="txt" className={`${position ? "bottomHighlightIcon" : "topHighlightIcon"}`} onClick={() => rightAnswerSound()} /> : null}{/* changehere */}
                    <Image src={doctorScene?.sprites[random]} alt="txt" className={`${!position ? "bottomEquipButton" : "topEquipButton"}`} onClick={() => wrongAnswerSound()} />{/* changehere */}
                    {(wrong) ? <Image src={doctorScene?.sprites[19]} alt="txt" className={`${!position ? "bottomHighlightIcon" : "topHighlightIcon"}`} onClick={() => wrongAnswerSound()} /> : null}{/* changehere */}
                    <Image src={doctorScene?.sprites[20]} alt="" className="progressBar" />
                    <div className='starspos'>
                        {[...Array(stars)].map((elementInArray, index) => (
                            <Image src={doctorScene?.sprites[21]} alt="" className="progressBarStars" />
                        )
                        )}
                    </div>
                    <div ref={Ref21} className="doctorSceneIcon" id="characterAnimation"></div>//change here

                </>
            }
        />
    );
}

export default DoctorActivity;//change here
