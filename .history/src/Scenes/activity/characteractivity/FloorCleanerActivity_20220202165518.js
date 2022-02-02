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


function FloorCleanerActivity() {//change here
    const { Bg, Loading } = useLoadAsset(CharacterActivityAsset.floorCleaner)//change here
    const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets, character, setCharacter, setNum, setCharNum, toolNum, setToolNum, stars, setStars } = useContext(SceneContext);
    const { characteractivity } = Assets;
    const { Sound, setSound, muted, setMuted } = useContext(SoundContext)
    const [correct, setCorrect] = useState(false)
    const [wrong, setWrong] = useState(false)
    const [enableButton, setEnableButton] = useState(false)
    const [random, setRandom] = useState()
    const [position, setPosition] = useState(true)
    useEffect(() => {
        var sound = new Howl({
            src: [`/internal/audio/SB_26_Audio_46.mp3`],//change here
        });
        sound.play();
        sound.on('end', () => {
            setEnableButton(true)
        })
        randomize();
    }, [])
    const toggle = () => setMuted(!muted)
    const Ref28 = useRef(null);//change here

    useEffect(() => {
        if (characteractivity && Ref28.current && !Loading) {//change here
            try {
                lottie.loadAnimation({
                    name: "characterAnimation",
                    container: Ref28.current,//change here
                    renderer: "svg",
                    loop: true,
                    autoplay: true,
                    animationData: characteractivity?.lottie[0],
                })
            } catch (err) {
                console.log(err)
            }
        }
    }, [Assets, Loading])
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
                src: [`/internal/audio/SB_26_Audio_47.mp3`],//change here
            });
            sound.play();
            sound.on('end', () => {
                // setCharacter('floorcleaner')//change here
                // setNum('45')//change here for audio "Tap the character"
                // setCharNum(10)//change here from choosecharacterassetmap character icon
                // setToolNum(11)//change here from choosecharacterassetmap character tool
                setSceneId('/a')
            })
            setCorrect(true)
            setStars(stars + 1)
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
                                <Image src={characteractivity?.sprites[5]} alt="txt" className="music_button" />
                            </div>
                            : <div onClick={() => {
                                Howler.volume(0)
                                toggle()
                            }}>
                                <Image src={characteractivity?.sprites[4]} alt="txt" className="music_button" />
                            </div>
                    }
                    (<div onClick={() => rightAnswerSound()}>
                        <Image src={characteractivity?.sprites[toolNum]} alt="txt" className={`${position ? "bottomEquipButton" : "topEquipButton"}`} /> //change here
                        {(correct) ? <Image src={characteractivity?.sprites[18]} alt="txt" className={`${position ? "bottomHighlightIcon" : "topHighlightIcon"}`} /> : null}//change here
                    </div>)

                    (<div onClick={() => wrongAnswerSound()}>
                        <Image src={characteractivity?.sprites[random]} alt="txt" className={`${!position ? "bottomEquipButton" : "topEquipButton"}`} />//change here
                        {(wrong) ? <Image src={characteractivity?.sprites[19]} alt="txt" className={`${!position ? "bottomHighlightIcon" : "topHighlightIcon"}`} /> : null}//change here
                    </div>)

                    {/* <Image src={characteractivity?.sprites[21]} alt="" className="progressBarStars" /> */}

                    <Image src={characteractivity?.sprites[20]} alt="" className="progressBar" />
                    <div className='starspos'>
                        {[...Array(stars)].map((elementInArray, index) => (
                            <Image src={characteractivity?.sprites[21]} alt="" className="progressBarStars" />
                        )
                        )}
                    </div>
                    <div ref={Ref28} className="floorCleanerSceneIcon" id="characterAnimation"></div>//change here

                </>
            }
        />
    );
}

export default FloorCleanerActivity;//change here
