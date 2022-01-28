const imgUrl = "/internal/images/"
const soundUrl = "/internal/audio/"
const lottieUrl = "/internal/lottie/"
const bg = "/internal/bg/BG/"
const introBg = "/internal/bg/Intro_BG/"
const character = "/internal/character/"
const icons = "internal/icons/ICON_CI_01/"

const CharacterSceneMap = {
    armyMan: {
        id: "characterscene",
        Bg: `${bg}SB_26_BG_06.svg`,
        sprites: [
            `${icons}SB_26_icon_girl.svg`,
            `${character}SB_26_CE_armyman01.svg`

        ],
        sounds: [`${soundUrl}SB_26_Audio_07.mp3`],
        lottie: [
            `${lottieUrl}Scene_07/SB_26`,
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
            `${lottieUrl}Scene_01.json`,
        ]
    },
    doctor: {
        id: "characterscene",
        Bg: `${bg}SB_26_BG_02.svg`,
        sprites: [
            `${icons}SB_26_icon_girl.svg`,
            `${character}SB_26_CE_docter1.svg`

        ],
        sounds: [`${soundUrl}SB_26_Audio_03.mp3`],
        lottie: [
            `${lottieUrl}Scene_01.json`,
        ]
    },
    fireFighter: {
        id: "characterscene",
        Bg: `${bg}SB_26_BG_10.svg`,
        sprites: [
            `${icons}SB_26_icon_girl.svg`,
            `${character}SB_26_CE_firefighter.svg`

        ],
        sounds: [`${soundUrl}SB_26_Audio_27.mp3`],
        lottie: [
            `${lottieUrl}Scene_01.json`,
        ]
    },
    floorCleaner: {
        id: "characterscene",
        Bg: `${bg}SB_26_BG_11.svg`,
        sprites: [
            `${icons}SB_26_icon_girl.svg`,
            `${character}SB_26_CE_florecleaner01.svg`

        ],
        sounds: [`${soundUrl}SB_26_Audio_28.mp3`],
        lottie: [
            `${lottieUrl}Scene_01.json`,
        ]
    },
    garbageCollector: {
        id: "characterscene",
        Bg: `${bg}SB_26_BG_14.svg`,
        sprites: [
            `${icons}SB_26_icon_girl.svg`,
            `${character}SB_26_CE_garbage collector.svg`

        ],
        sounds: [`${soundUrl}SB_26_Audio_31.mp3`],
        lottie: [
            `${lottieUrl}Scene_01.json`,
        ]
    },
    gardener: {
        id: "characterscene",
        Bg: `${bg}SB_26_BG_04.svg`,
        sprites: [
            `${icons}SB_26_icon_girl.svg`,
            `${character}SB_26_CE_gardener.svg`

        ],
        sounds: [`${soundUrl}SB_26_Audio_05.mp3`],
        lottie: [
            `${lottieUrl}Scene_01.json`,
        ]
    },
    guard: {
        id: "characterscene",
        Bg: `${bg}SB_26_BG_12.svg`,
        sprites: [
            `${icons}SB_26_icon_girl.svg`,
            `${character}SB_26_CE_guard.svg`

        ],
        sounds: [`${soundUrl}SB_26_Audio_30.mp3`],
        lottie: [
            `${lottieUrl}Scene_01.json`,
        ]
    },
    police: {
        id: "characterscene",
        Bg: `${bg}SB_26_BG_05.svg`,
        sprites: [
            `${icons}SB_26_icon_girl.svg`,
            `${character}SB_26_CE_police.svg`

        ],
        sounds: [`${soundUrl}SB_26_Audio_06.mp3`],
        lottie: [
            `${lottieUrl}Scene_01.json`,
        ]
    },
    teacher: {
        id: "characterscene",
        Bg: `${bg}SB_26_BG_03.svg`,
        sprites: [
            `${icons}SB_26_icon_girl.svg`,
            `${character}SB_26_CE_teacher.svg`

        ],
        sounds: [`${soundUrl}SB_26_Audio_04.mp3`],
        lottie: [
            `${lottieUrl}Scene_01.json`,
        ]
    },

}

export default CharacterSceneMap;
