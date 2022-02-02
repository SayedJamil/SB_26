const imgUrl = "/internal/images/"
const soundUrl = "/internal/audio/"
const lottieUrl = "/internal/lottie/"
const bg = "/internal/bg/BG/"
const introBg = "/internal/bg/Intro_BG/"
const character = "/internal/character/"
const icons = "internal/icons/ICON_CI_01/"
const button = "/internal/button/"
// public\internal\audio\SB_26_Audio_07.mp3
const ActivityAssetMap = {
    activity01: {
        id: "activityscene",
        Bg: `${bg}SB_26_BG_07.svg`,
        sprites: [
            `${icons}SB_26_icon_girl.svg`,
            `${character}SB_26_CE_armyman01.svg`,
            `${button}Buttons-16.svg`,
            `${button}Buttons-22.svg`,
            `${button}Buttons-20.svg`,
            `${button}Buttons-26.svg`,


        ],
        sounds: [
            `${soundUrl}SB_26_Audio_07.mp3`
        ],
        lottie: [
            `${lottieUrl}scene_08/1.SB_26_SC_08.json`,
        ]
    },
    activity02: {
        id: "activityscene",
        Bg: `${bg}SB_26_BG_26.svg`,
        sprites: [
            `${icons}SB_26_icon_girl.svg`,
            `${character}SB_26_CE_dentist.svg`,
            `${button}Buttons-16.svg`,
            `${button}Buttons-22.svg`,
            `${button}Buttons-20.svg`,
            `${button}Buttons-26.svg`,

        ],
        sounds: [`${soundUrl}SB_26_Audio_29.mp3`],
        lottie: [
            `${lottieUrl}Scene_30/Scene_30.json`,
        ]
    },
    activity01end: {
        id: "activityend",
        Bg: `${bg}SB_26_BG_15.svg`,
        sprites: [
            `${icons}SB_26_icon_girl.svg`,
            `${character}SB_26_CE_dentist.svg`,
            `${button}Buttons-16.svg`,
            `${button}Buttons-22.svg`,
            `${button}Buttons-20.svg`,
            `${button}Buttons-26.svg`,

        ],
        sounds: [`${soundUrl}SB_26_Audio_29.mp3`],
        lottie: [
            `${lottieUrl}scene_08/1.SB_26_SC_08.json`,
        ]
    },
    activity02: {
        id: "activityscene",
        Bg: `${bg}SB_26_BG_09.svg`,
        sprites: [
            `${icons}SB_26_icon_girl.svg`,
            `${character}SB_26_CE_dentist.svg`,
            `${button}Buttons-16.svg`,
            `${button}Buttons-22.svg`,
            `${button}Buttons-20.svg`,
            `${button}Buttons-26.svg`,

        ],
        sounds: [`${soundUrl}SB_26_Audio_29.mp3`],
        lottie: [
            `${lottieUrl}Scene_30/Scene_26.json`,
        ]
    },

}

export default ActivityAssetMap;
