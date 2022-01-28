const imgUrl = "/internal/images/"
const soundUrl = "/internal/audio/"
const lottieUrl = "/internal/lottie/"
const bg = "/internal/bg/BG/"
const introBg = "/internal/bg/Intro_BG/"
const character = "/internal/character/"
const icons = "internal/icons/ICON_CI_01/"
// public\internal\audio\SB_26_Audio_07.mp3
const Activity = {
    armyMan: {
        id: "characterscene",
        Bg: `${bg}SB_26_BG_06.svg`,
        sprites: [
            `${icons}SB_26_icon_girl.svg`,
            `${character}SB_26_CE_armyman01.svg`

        ],
        sounds: [
            `${soundUrl}SB_26_Audio_07.mp3`
        ],
        lottie: [
            `${lottieUrl}Scene_07/SB_26_Scene_07.json`,
        ]
    },
    dentist: {
        id: "characterscene",
        Bg: `${bg}SB_26_BG_13.svg`,
        sprites: [
            `${icons}SB_26_icon_girl.svg`,
            `${character}SB_26_CE_dentist.svg`

        ],
        sounds: [`${soundUrl}SB_26_Audio_29.mp3`],
        lottie: [
            `${lottieUrl}Scene_30/Scene_30.json`,
        ]
    },
    
}

export default CharacterSceneMap;
