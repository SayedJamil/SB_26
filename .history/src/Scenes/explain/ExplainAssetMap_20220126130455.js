const imgUrl = "/internal/images/"
const soundUrl = "/internal/audio/"
const lottieUrl = "/internal/lottie/"
const bg = "/internal/bg/BG/"
const introBg = "/internal/bg/Intro_BG/"
const character = "/internal/character/"
const icons = "/internal/icons/"
const ExplainMap = {
    id: "intro",

    Bg: `${introBg}SB_26_Intro_BG.svg`,

    sprites: [
        `${character}SB_26_CE_armyman01.svg`,
        `${character}SB_26_CE_docter01.svg`,
        `${character}SB_26_CE_firefighter.svg`,
        `${character}SB_26_CE_garbage collector.svg`,
        `${character}SB_26_CE_police.svg`,
        `${character}SB_26_CE_guard.svg`,
        `${introBg}SB_26_Intro_BG_Font.svg`,

    ],


    sounds: [
        `${soundUrl}SB_26_Audio_01.mp3`
    ],

    lottie: [
        `${lottieUrl}Scene_01.json`,
    ]
}

export default ExplainMap;
