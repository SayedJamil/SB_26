const imgUrl = "/internal/images/"
const soundUrl = "/internal/audio/"
const lottieUrl = "/internal/lottie/"
const bg = "/internal/bg/BG/"
const introBg = "/internal/bg/Intro_BG/"
const character = "/internal/character/"
const icons = "internal/icons/ICON_CI_01/"

const CharacterSceneMap = {
    id: "characterscene",
    Bg:,
    armyMan: {
        Bg: `${bg}SB_26_BG_06.svg`,
        sound: `${soundUrl}SB_26_Audio_07.mp3`,
        sceneChara: `${character}SB_26_CE_armyman01.svg`,
    },
    sprites: [
        `${icons}SB_26_icon_girl.svg`,
        `${bg}SB_26_BG_06.svg`,
        `${character}SB_26_CE_armyman01.svg`

    ],
    lottie: [
        `${lottieUrl}Scene_01.json`,
    ]
}

export default CharacterSceneMap;
