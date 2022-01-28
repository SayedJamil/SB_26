const imgUrl = "/internal/images/"
const soundUrl = "/internal/audio/"
const lottieUrl = "/internal/lottie/"
const bg = "/internal/bg/BG/"
const introBg = "/internal/bg/Intro_BG/"
const character = "/internal/character/"
const icons = "/internal/icons/ICON_CI_01/"
const ExplainMap = {
    id: "intro",

    Bg: `${introBg}SB_26_Intro_BG.svg`,

    sprites: [
        `${character}SB_26_icon_armyman.svg`,
        `${character}SB_26_icon_dentist.svg`,
        `${character}SB_26_icon_docter.svg`,
        `${character}SB_26_icon_firefighter.svg`,
        `${character}SB_26_icon_floorcleaner.svg`,
        `${character}SB_26_icon_garbege collector.svg`,
        `${character}SB_26_icon_gardener.svg`,
        `${character}SB_26_icon_police.svg`,
        `${character}SB_26_icon_guard.svg`,
        `${character}SB_26_icon_guard.svg`,
        `${character}SB_26_icon_teacher.svg`,

    ],


    sounds: [
        `${soundUrl}SB_26_Audio_01.mp3`
    ],

    lottie: [
        `${lottieUrl}Scene_01.json`,
    ]
}

export default ExplainMap;
