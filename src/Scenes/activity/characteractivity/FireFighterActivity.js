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


function FireFighterActivity() {//change here
    const { Bg, Loading } = useLoadAsset(AssetsMap.fireFighter)//change here
    const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets, character, setCharacter, setNum, setCharNum, toolNum, setToolNum, stars, setStars } = useContext(SceneContext);
    const { fireFighterScene } = Assets;
    const { Sound, setSound, } = useContext(SoundContext)
    const [correct, setCorrect] = useState(false)
    const [wrong, setWrong] = useState(false)
    const [enableButton, setEnableButton] = useState(false)
    const [random, setRandom] = useState()
    const [position, setPosition] = useState(true)
    useEffect(() => {
        var sound = new Howl({
            src: [`ee01_ow_thss_pl1/audio/SB_26_Audio_39.mp3`],//change here
        });
        sound.play();
        sound.on('end', () => {
            setEnableButton(true)
        })
        randomize();
    }, [])

    const Ref26 = useRef(null);//change here

    useEffect(() => {
        if (fireFighterScene?.lottie && Ref26.current && !Loading) {//change here
            try {
                lottie.loadAnimation({
                    name: "characterAnimation",
                    container: Ref26.current,//change here
                    renderer: "svg",
                    loop: true,
                    autoplay: true,
                    animationData: fireFighterScene?.lottie[0],
                })
            } catch (err) {
                console.log(err)
            }
        }
    }, [Assets, Loading])
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
                src: [`ee01_ow_thss_pl1/audio/SB_26_Audio_41.mp3`],//change here
            });
            sound.play();
            sound.on('end', () => {
                setCharacter('guard')//change here
                setNum('42')//change here for audio "Tap the character"
                setCharNum(13)//change here from choosecharacterassetmap character icon
                setToolNum(16)//change here from choosecharacterassetmap character tool
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

                    <Image src={fireFighterScene?.sprites[toolNum]} alt="txt" className={`${position ? "bottomEquipButton" : "topEquipButton"}`} onClick={() => rightAnswerSound()} /> //change here
                    {(correct) ? <Image src={fireFighterScene?.sprites[18]} alt="txt" className={`${position ? "bottomHighlightIcon" : "topHighlightIcon"}`} onClick={() => rightAnswerSound()} /> : null}//change here
                    <Image src={fireFighterScene?.sprites[random]} alt="txt" className={`${!position ? "bottomEquipButton" : "topEquipButton"}`} onClick={() => wrongAnswerSound()} />//change here
                    {(wrong) ? <Image src={fireFighterScene?.sprites[19]} alt="txt" className={`${!position ? "bottomHighlightIcon" : "topHighlightIcon"}`} onClick={() => wrongAnswerSound()} /> : null}//change here

                    <Image src={fireFighterScene?.sprites[20]} alt="" className="progressBar" />
                    <div className='starspos'>
                        {[...Array(stars)].map((elementInArray, index) => (
                            <Image src={fireFighterScene?.sprites[21]} alt="" className="progressBarStars" />
                        )
                        )}
                    </div>
                    <div ref={Ref26} className="fireFighterSceneIcon" id="characterAnimation"></div>//change here

                </>
            }
        />
    );
}

export default FireFighterActivity;//change here
