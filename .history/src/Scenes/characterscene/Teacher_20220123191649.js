import { useEffect, useRef, useState, useContext } from 'react'
import { LoadJson } from '../utils/loadJson'
import Scenes from './Scenes'
import lottie from "lottie-web"
import useLoadAsset from '../utils/useLoadAsset'
import "../styles/Scenes.css"
import { SoundContext } from '../contexts/SoundContext'
import { SceneContext } from '../contexts/SceneContext'
import { LoadImage } from '../utils/loadImage'
import { Howl } from "howler"

export default function Teacher({ isExcellent = false }) {
    const containerRef = useRef(null)
    const excelContainerRef = useRef(null)
    const [Json, setJson] = useState(null)
    const [Json2, setJson2] = useState(null)
    const { setSceneId } = useContext(SceneContext)
    const audio_choose = isExcellent ? "/audio/verygood.mp3" : "/audio/02.mp3"
    const { Loading, Bg } = useLoadAsset("/assets/bg/BG/SB_26_BG_03.svg", "/assets/audio/SB_26_Audio_04.mp3")
    const { Sound, setSound } = useContext(SoundContext)

    const [iconGirl, setIconGirl] = useState("")
    const [teacher, setTeacher] = useState("")


    useEffect(() => {
        // loadLottie()
        LoadBGImage()
    }, [])
    useEffect(() => {
        if (Sound !== null) {
            let bloburl = URL.createObjectURL(Sound)
            let sound = new Howl({
                src: [bloburl],
                format: ["mp3"]
            })

            sound.play()
        }
    }, [Sound])

    // useEffect(() => {
    //     if (Json && containerRef.current) {
    //         const ch = lottie.loadAnimation({
    //             name: "placeholder",
    //             container: containerRef.current,
    //             renderer: "svg",
    //             loop: true,
    //             autoplay: true,
    //             animationData: Json,
    //         })
    //     }
    // }, [Json])

    // useEffect(() => {
    //     if (isExcellent) {
    //         if (Json2 && excelContainerRef.current) {
    //             const ch = lottie.loadAnimation({
    //                 name: "placeholder",
    //                 container: excelContainerRef.current,
    //                 renderer: "svg",
    //                 loop: true,
    //                 autoplay: true,
    //                 animationData: Json2,
    //             })
    //         }
    //     }
    // }, [Json2])

    // useEffect(() => {
    //     if (Sound !== null) {
    //         const blob = URL.createObjectURL(Sound)
    //         const sound = new Howl({
    //             src: [blob],
    //             format: ['mp3']
    //         })
    //         sound.play()

    //         sound.on("end", () => {
    //             setSound(null)
    //             if (!isExcellent) {
    //                 setSceneId("/test")
    //             } else {
    //                 setSceneId("/Select")
    //             }
    //         })
    //     }
    // }, [Sound])

    // const loadLottie = async () => {
    //     const data = await LoadJson("/lottie/Scene_01.json")
    //     setJson(data)

    //     if (isExcellent) {
    //         const data2 = await LoadJson("/lottie/excel_text.json")
    //         setJson2(data2)
    //     }
    // }
    // /assets/icons/ICON_CI_01/SB_26_icon_armyman.svg
    const LoadBGImage = async () => {
        setIconGirl(await LoadImage("/assets/icons/ICON_CI_01/SB_26_icon_girl.svg",))
        setTeacher(await LoadImage("/assets/character/SB_26_CE_teacher.svg"))

    }


    return (
        <Scenes
            Bg={Bg}
            stripes={
                <>
                    {/* {isExcellent && <div className="lottie_excel_container" ref={excelContainerRef}></div>} */}
                    {/* <div className="lottie_container" ref={containerRef}></div> */}
                    <img src={`data:image/svg+xml;utf8,${encodeURIComponent(iconGirl)}`} alt="" className='iconGirl' />
                    <img src={`data:image/svg+xml;utf8,${encodeURIComponent(teacher)}`} alt="" className=' teacherSceneIcon' />


                </>
            }
        />
    )
}
