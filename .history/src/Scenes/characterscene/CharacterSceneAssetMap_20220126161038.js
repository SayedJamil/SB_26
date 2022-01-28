const imgUrl = "/internal/images/"
const soundUrl = "/internal/audio/"
const lottieUrl = "/internal/lottie/"
const bg = "/internal/bg/BG/"
const introBg = "/internal/bg/Intro_BG/"
const character = "/internal/character/"
const icons = "internal/icons/ICON_CI_01/"

const CharacterSceneMap = {
    id: "characterscene",
    armyMan: [
        Bg= `${icons}SB_26_icon_armyman.svg`,
        sound = `${icons}SB_26_icon_armyman.svg`,
        sceneChara = `${icons}SB_26_icon_armyman.svg`,
    ],
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

    ],
    sounds: [
        `${soundUrl}SB_26_Audio_01.mp3`
    ],
    lottie: [
        `${lottieUrl}Scene_01.json`,
    ]
}

export default CharacterSceneMap;
