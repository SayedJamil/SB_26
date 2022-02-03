const imgUrl = "/internal/images/"
const soundUrl = "/internal/audio/"
const lottieUrl = "/internal/lottie/"
const bg = "/internal/bg/BG/"
const introBg = "/internal/bg/Intro_BG/"
const character = "/internal/character/"
const button = "/internal/button/"
const icons = "internal/icons/ICON_CI_01/"
// public\internal\audio\14-11-2021\SB_26_Audio_02.mp3
const ExplainMap = {
    id: "explain",
    Bg: `${bg}SB_26_BG_01.svg`,
    sprites: [
        `${icons}SB_26_icon_armyman.svg`,
        `${icons}SB_26_icon_dentist.svg`,
        `${icons}SB_26_icon_docter.svg`,
        `${icons}SB_26_icon_firefighter.svg`,
        `${icons}SB_26_icon_floorcleaner.svg`,
        `${icons}SB_26_icon_garbege collector.svg`,
        `${icons}SB_26_icon_gardener.svg`,
        `${icons}SB_26_icon_police.svg`,
        `${icons}SB_26_icon_guard.svg`,
        `${icons}SB_26_icon_teacher.svg`,
        `${character}SB_26_CE_girl01.svg`,
        `${button}Buttons-16.svg`,
        `${button}Buttons-22.svg`,
        `${button}Buttons-20.svg`,
        `${button}Buttons-26.svg`

    ],
    sounds: [
        `${soundUrl}SB_26_Audio_01.mp3`
    ],
    lottie: [
        `${lottieUrl}scene_08/1.SB_26_SC_08.json`,
    ]
}

export default ExplainMap;
