
const soundUrl = "ee01_ow_thss_pl1/audio/"
const lottieUrl = "ee01_ow_thss_pl1/lottie/"
const bg = "ee01_ow_thss_pl1/bg/BG/"
const introBg = "ee01_ow_thss_pl1/bg/Intro_BG/"
const character = "ee01_ow_thss_pl1/character/"
const hilight = "ee01_ow_thss_pl1/icons/ICON_CI01_HILIGHT/"
const icons = "ee01_ow_thss_pl1/icons/ICON_CI_01/"
const button = "ee01_ow_thss_pl1/button/"
const equipement = "ee01_ow_thss_pl1/icons/ICON_PI_02/"
const eqhilight = "ee01_ow_thss_pl1/icons/ICON_PI_02_HILIGHT/"
const progressBar = "ee01_ow_thss_pl1/icons/PROGRESS_BAR/"
const handIcon = "ee01_ow_thss_pl1/icons/HAND/"
//public\internal\icons\ICON_PI_02_HILIGHT\SB_26_GREEN.svg
const AssetsMap = {
    chooseCharacter: {
        id: "choosecharacter",
        Bg: `${bg}SB_26_BG_08.svg`,
        sprites: [
            `${button}Buttons-16.svg`, //change here to 13//0
            `${button}Buttons-22.svg`,//1
            `${button}Buttons-20.svg`,//2
            `${button}Buttons-26.svg`,//3
            `${hilight}SB_26_GREEN.svg`,//4
            `${hilight}SB_26_RED.svg`,//5
            `${icons}SB_26_icon_armyman.svg`,//6
            `${icons}SB_26_icon_dentist.svg`,//7
            `${icons}SB_26_icon_docter.svg`,//8
            `${icons}SB_26_icon_firefighter.svg`,//9
            `${icons}SB_26_icon_floorcleaner.svg`,//10
            `${icons}SB_26_icon_garbege collector.svg`,//11
            `${icons}SB_26_icon_gardener.svg`,//12
            `${icons}SB_26_icon_guard.svg`,//13
            `${icons}SB_26_icon_police.svg`,//14
            `${icons}SB_26_icon_teacher.svg`,//15
            `${progressBar}SB_26_PROGRESS_BAR.svg`,
            `${progressBar}SB_26_STAR.svg`,
            `${handIcon}SB_26_hand_hilight.svg`,


        ],
        sounds: [
            `${soundUrl}SB_26_Audio_07.mp3`,
        ],
        lottie: [
            `${lottieUrl}Scene_07/SB_26_Scene_07.json`,
        ]
    },
    app: {
        id: "appScene",
        Bg: `${bg}SB_26_BG_06.svg`,
        sprites: [
            `${button}Buttons-20.svg`,
            `${button}Buttons-26.svg`,


        ],
        sounds: [
            `${soundUrl}SB_26_Audio_07.mp3`,
        ],
        lottie: [
            `${lottieUrl}Scene_07/SB_26_Scene_07.json`,
            `${lottieUrl}Transition_01.json`,
        ]
    },
    armyMan: {
        id: "armyManScene",
        Bg: `${bg}SB_26_BG_06.svg`,
        sprites: [
            `${icons}SB_26_icon_girl.svg`,
            `${character}SB_26_CE_armyman01.svg`,
            `${button}Buttons-16.svg`, //change here to 13
            `${button}Buttons-22.svg`,
            `${button}Buttons-20.svg`,
            `${button}Buttons-26.svg`,
            `${equipement}SB_26_ICON_book.svg`,//6
            `${equipement}SB_26_ICON_dustbean.svg`,//7
            `${equipement}SB_26_ICON_fire_protection.svg`,//8
            `${equipement}SB_26_ICON_helmet.svg`,//9
            `${equipement}SB_26_ICON_injuction.svg`,//10
            `${equipement}SB_26_ICON_mop_stick.svg`,//11
            `${equipement}SB_26_ICON_mouth_mirror.svg`,//12
            `${equipement}SB_26_ICON_police_stick.svg`,//13
            `${equipement}SB_26_ICON_shears.svg`,//14
            `${equipement}SB_26_ICON_stethoscope.svg`,//15
            `${equipement}SB_26_ICON_torch.svg`,//16
            `${equipement}SB_26_ICON_water_can.svg`,//17
            `${eqhilight}SB_26_GREEN.svg`,
            `${eqhilight}SB_26_RED.svg`,
            `${progressBar}SB_26_PROGRESS_BAR.svg`,
            `${progressBar}SB_26_STAR.svg`,
            `${handIcon}SB_26_hand_hilight.svg`,


        ],
        sounds: [
            `${soundUrl}SB_26_Audio_07.mp3`,
        ],
        lottie: [
            `${lottieUrl}Scene_07/SB_26_Scene_07.json`,
            `${lottieUrl}Scene_07/Scene_07.json`,
            `${lottieUrl}Scene_07/SB_26_Scene_07__v1.json`,
        ]
    },
    dentist: {
        id: "dentistScene",
        Bg: `${bg}SB_26_BG_13.svg`,
        sprites: [
            `${icons}SB_26_icon_girl.svg`,
            `${character}SB_26_CE_dentist.svg`,
            `${button}Buttons-16.svg`, //change here to 13
            `${button}Buttons-22.svg`,
            `${button}Buttons-20.svg`,
            `${button}Buttons-26.svg`,
            `${equipement}SB_26_ICON_book.svg`,//6
            `${equipement}SB_26_ICON_dustbean.svg`,//7
            `${equipement}SB_26_ICON_fire_protection.svg`,//8
            `${equipement}SB_26_ICON_helmet.svg`,//9
            `${equipement}SB_26_ICON_injuction.svg`,//10
            `${equipement}SB_26_ICON_mop_stick.svg`,//11
            `${equipement}SB_26_ICON_mouth_mirror.svg`,//12
            `${equipement}SB_26_ICON_police_stick.svg`,//13
            `${equipement}SB_26_ICON_shears.svg`,//14
            `${equipement}SB_26_ICON_stethoscope.svg`,//15
            `${equipement}SB_26_ICON_torch.svg`,//16
            `${equipement}SB_26_ICON_water_can.svg`,//17
            `${eqhilight}SB_26_GREEN.svg`,
            `${eqhilight}SB_26_RED.svg`,
            `${progressBar}SB_26_PROGRESS_BAR.svg`,
            `${progressBar}SB_26_STAR.svg`,
            `${handIcon}SB_26_hand_hilight.svg`,


        ],
        sounds: [`${soundUrl}SB_26_Audio_29.mp3`],
        lottie: [
            `${lottieUrl}Scene_30/Scene_30.json`,
            `${lottieUrl}Scene_30/SB_26_Scene_30.json`,
        ]
    },
    doctor: {
        id: "doctorScene",
        Bg: `${bg}SB_26_BG_02.svg`,
        sprites: [
            `${icons}SB_26_icon_girl.svg`,
            `${character}SB_26_CE_docter01.svg`,
            `${button}Buttons-16.svg`, //change here to 13
            `${button}Buttons-22.svg`,
            `${button}Buttons-20.svg`,
            `${button}Buttons-26.svg`,
            `${equipement}SB_26_ICON_book.svg`,//6
            `${equipement}SB_26_ICON_dustbean.svg`,//7
            `${equipement}SB_26_ICON_fire_protection.svg`,//8
            `${equipement}SB_26_ICON_helmet.svg`,//9
            `${equipement}SB_26_ICON_injuction.svg`,//10
            `${equipement}SB_26_ICON_mop_stick.svg`,//11
            `${equipement}SB_26_ICON_mouth_mirror.svg`,//12
            `${equipement}SB_26_ICON_police_stick.svg`,//13
            `${equipement}SB_26_ICON_shears.svg`,//14
            `${equipement}SB_26_ICON_stethoscope.svg`,//15
            `${equipement}SB_26_ICON_torch.svg`,//16
            `${equipement}SB_26_ICON_water_can.svg`,//17
            `${eqhilight}SB_26_GREEN.svg`,
            `${eqhilight}SB_26_RED.svg`,
            `${progressBar}SB_26_PROGRESS_BAR.svg`,
            `${progressBar}SB_26_STAR.svg`,
            `${handIcon}SB_26_hand_hilight.svg`,
            `${handIcon}SB_26_hand_hilight.svg`,
        ],
        sounds: [`${soundUrl}SB_26_Audio_03.mp3`],
        lottie: [
            `${lottieUrl}scene_03/SB_26_SC_03.json`,
            `${lottieUrl}scene_03/Scene_03.json`,
            `${lottieUrl}scene_03/1.SB_26_SC_03_Doctor.json`,
        ]
    },
    fireFighter: {
        id: "fireFighterScene",
        Bg: `${bg}SB_26_BG_10.svg`,
        sprites: [
            `${icons}SB_26_icon_girl.svg`,
            `${character}SB_26_CE_firefighter.svg`,
            `${button}Buttons-16.svg`, //change here to 13
            `${button}Buttons-22.svg`,
            `${button}Buttons-20.svg`,
            `${button}Buttons-26.svg`,
            `${equipement}SB_26_ICON_book.svg`,//6
            `${equipement}SB_26_ICON_dustbean.svg`,//7
            `${equipement}SB_26_ICON_fire_protection.svg`,//8
            `${equipement}SB_26_ICON_helmet.svg`,//9
            `${equipement}SB_26_ICON_injuction.svg`,//10
            `${equipement}SB_26_ICON_mop_stick.svg`,//11
            `${equipement}SB_26_ICON_mouth_mirror.svg`,//12
            `${equipement}SB_26_ICON_police_stick.svg`,//13
            `${equipement}SB_26_ICON_shears.svg`,//14
            `${equipement}SB_26_ICON_stethoscope.svg`,//15
            `${equipement}SB_26_ICON_torch.svg`,//16
            `${equipement}SB_26_ICON_water_can.svg`,//17
            `${eqhilight}SB_26_GREEN.svg`,
            `${eqhilight}SB_26_RED.svg`,
            `${progressBar}SB_26_PROGRESS_BAR.svg`,
            `${progressBar}SB_26_STAR.svg`,
            `${handIcon}SB_26_hand_hilight.svg`,

        ],
        sounds: [`${soundUrl}SB_26_Audio_27.mp3`],
        lottie: [
            `${lottieUrl}Scene_27/SB_26_Scene_27.json`,
            `${lottieUrl}Scene_27/Scene_27.json`,
        ]
    },
    floorCleaner: {
        id: "floorCleanerScene",
        Bg: `${bg}SB_26_BG_11.svg`,
        sprites: [
            `${icons}SB_26_icon_girl.svg`,
            `${character}SB_26_CE_florecleaner01.svg`,
            `${button}Buttons-16.svg`, //change here to 13
            `${button}Buttons-22.svg`,
            `${button}Buttons-20.svg`,
            `${button}Buttons-26.svg`,
            `${equipement}SB_26_ICON_book.svg`,//6
            `${equipement}SB_26_ICON_dustbean.svg`,//7
            `${equipement}SB_26_ICON_fire_protection.svg`,//8
            `${equipement}SB_26_ICON_helmet.svg`,//9
            `${equipement}SB_26_ICON_injuction.svg`,//10
            `${equipement}SB_26_ICON_mop_stick.svg`,//11
            `${equipement}SB_26_ICON_mouth_mirror.svg`,//12
            `${equipement}SB_26_ICON_police_stick.svg`,//13
            `${equipement}SB_26_ICON_shears.svg`,//14
            `${equipement}SB_26_ICON_stethoscope.svg`,//15
            `${equipement}SB_26_ICON_torch.svg`,//16
            `${equipement}SB_26_ICON_water_can.svg`,//17
            `${eqhilight}SB_26_GREEN.svg`,
            `${eqhilight}SB_26_RED.svg`,
            `${progressBar}SB_26_PROGRESS_BAR.svg`,
            `${progressBar}SB_26_STAR.svg`,
            `${handIcon}SB_26_hand_hilight.svg`,
        ],
        sounds: [`${soundUrl}SB_26_Audio_28.mp3`],
        lottie: [
            `${lottieUrl}Scene_28/Scene_28.json`,
            `${lottieUrl}Scene_28/SB_26_Scene_28.json`,
        ]
    },
    garbageCollector: {
        id: "garbageCollectorScene",
        Bg: `${bg}SB_26_BG_14.svg`,
        sprites: [
            `${icons}SB_26_icon_girl.svg`,
            `${character}SB_26_CE_garbage collector.svg`,
            `${button}Buttons-16.svg`, //change here to 13
            `${button}Buttons-22.svg`,
            `${button}Buttons-20.svg`,
            `${button}Buttons-26.svg`,
            `${equipement}SB_26_ICON_book.svg`,//6
            `${equipement}SB_26_ICON_dustbean.svg`,//7
            `${equipement}SB_26_ICON_fire_protection.svg`,//8
            `${equipement}SB_26_ICON_helmet.svg`,//9
            `${equipement}SB_26_ICON_injuction.svg`,//10
            `${equipement}SB_26_ICON_mop_stick.svg`,//11
            `${equipement}SB_26_ICON_mouth_mirror.svg`,//12
            `${equipement}SB_26_ICON_police_stick.svg`,//13
            `${equipement}SB_26_ICON_shears.svg`,//14
            `${equipement}SB_26_ICON_stethoscope.svg`,//15
            `${equipement}SB_26_ICON_torch.svg`,//16
            `${equipement}SB_26_ICON_water_can.svg`,//17
            `${eqhilight}SB_26_GREEN.svg`,
            `${eqhilight}SB_26_RED.svg`,
            `${progressBar}SB_26_PROGRESS_BAR.svg`,
            `${progressBar}SB_26_STAR.svg`,
            `${handIcon}SB_26_hand_hilight.svg`,

        ],
        sounds: [`${soundUrl}SB_26_Audio_31.mp3`],
        lottie: [
            `${lottieUrl}Scene_31/Scene_31.json`,
            `${lottieUrl}Scene_31/SB_26_Scene_31.json`,
        ]
    },
    gardener: {
        id: "gardenerScene",
        Bg: `${bg}SB_26_BG_04.svg`,
        sprites: [
            `${icons}SB_26_icon_girl.svg`,
            `${character}SB_26_CE_gardener.svg`,
            `${button}Buttons-16.svg`, //change here to 13
            `${button}Buttons-22.svg`,
            `${button}Buttons-20.svg`,
            `${button}Buttons-26.svg`,
            `${equipement}SB_26_ICON_book.svg`,//6
            `${equipement}SB_26_ICON_dustbean.svg`,//7
            `${equipement}SB_26_ICON_fire_protection.svg`,//8
            `${equipement}SB_26_ICON_helmet.svg`,//9
            `${equipement}SB_26_ICON_injuction.svg`,//10
            `${equipement}SB_26_ICON_mop_stick.svg`,//11
            `${equipement}SB_26_ICON_mouth_mirror.svg`,//12
            `${equipement}SB_26_ICON_police_stick.svg`,//13
            `${equipement}SB_26_ICON_shears.svg`,//14
            `${equipement}SB_26_ICON_stethoscope.svg`,//15
            `${equipement}SB_26_ICON_torch.svg`,//16
            `${equipement}SB_26_ICON_water_can.svg`,//17
            `${eqhilight}SB_26_GREEN.svg`,
            `${eqhilight}SB_26_RED.svg`,
            `${progressBar}SB_26_PROGRESS_BAR.svg`,
            `${progressBar}SB_26_STAR.svg`,
            `${handIcon}SB_26_hand_hilight.svg`,

        ],
        sounds: [`${soundUrl}SB_26_Audio_05.mp3`],
        lottie: [
            `${lottieUrl}Scene_05/SB_26_Scene_05.json`,
            `${lottieUrl}Scene_05/Scene_05.json`,
        ]
    },
    guard: {
        id: "guardScene",
        Bg: `${bg}SB_26_BG_12.svg`,
        sprites: [
            `${icons}SB_26_icon_girl.svg`,
            `${character}SB_26_CE_guard.svg`,
            `${button}Buttons-16.svg`, //change here to 13
            `${button}Buttons-22.svg`,
            `${button}Buttons-20.svg`,
            `${button}Buttons-26.svg`,
            `${equipement}SB_26_ICON_book.svg`,//6
            `${equipement}SB_26_ICON_dustbean.svg`,//7
            `${equipement}SB_26_ICON_fire_protection.svg`,//8
            `${equipement}SB_26_ICON_helmet.svg`,//9
            `${equipement}SB_26_ICON_injuction.svg`,//10
            `${equipement}SB_26_ICON_mop_stick.svg`,//11
            `${equipement}SB_26_ICON_mouth_mirror.svg`,//12
            `${equipement}SB_26_ICON_police_stick.svg`,//13
            `${equipement}SB_26_ICON_shears.svg`,//14
            `${equipement}SB_26_ICON_stethoscope.svg`,//15
            `${equipement}SB_26_ICON_torch.svg`,//16
            `${equipement}SB_26_ICON_water_can.svg`,//17
            `${eqhilight}SB_26_GREEN.svg`,
            `${eqhilight}SB_26_RED.svg`,
            `${progressBar}SB_26_PROGRESS_BAR.svg`,
            `${progressBar}SB_26_STAR.svg`,
            `${handIcon}SB_26_hand_hilight.svg`,

        ],
        sounds: [`${soundUrl}SB_26_Audio_30.mp3`],
        lottie: [
            `${lottieUrl}Scene_29/Scene 29.json`,
            `${lottieUrl}Scene_29/SB_26_Scene_29.json`,
        ]
    },
    police: {
        id: "policeScene",
        Bg: `${bg}SB_26_BG_05.svg`,
        sprites: [
            `${icons}SB_26_icon_girl.svg`,
            `${character}SB_26_CE_police.svg`,
            `${button}Buttons-16.svg`, //change here to 13
            `${button}Buttons-22.svg`,
            `${button}Buttons-20.svg`,
            `${button}Buttons-26.svg`,
            `${equipement}SB_26_ICON_book.svg`,//6
            `${equipement}SB_26_ICON_dustbean.svg`,//7
            `${equipement}SB_26_ICON_fire_protection.svg`,//8
            `${equipement}SB_26_ICON_helmet.svg`,//9
            `${equipement}SB_26_ICON_injuction.svg`,//10
            `${equipement}SB_26_ICON_mop_stick.svg`,//11
            `${equipement}SB_26_ICON_mouth_mirror.svg`,//12
            `${equipement}SB_26_ICON_police_stick.svg`,//13
            `${equipement}SB_26_ICON_shears.svg`,//14
            `${equipement}SB_26_ICON_stethoscope.svg`,//15
            `${equipement}SB_26_ICON_torch.svg`,//16
            `${equipement}SB_26_ICON_water_can.svg`,//17
            `${eqhilight}SB_26_GREEN.svg`,
            `${eqhilight}SB_26_RED.svg`,
            `${progressBar}SB_26_PROGRESS_BAR.svg`,
            `${progressBar}SB_26_STAR.svg`,
            `${handIcon}SB_26_hand_hilight.svg`,

        ],
        sounds: [`${soundUrl}SB_26_Audio_06.mp3`],
        lottie: [
            `${lottieUrl}Scene_06/SB_26_Scene_06.json`,
            `${lottieUrl}Scene_06/Scene_06.json`,
        ]
    },
    teacher: {
        id: "teacherScene",
        Bg: `${bg}SB_26_BG_03.svg`,
        sprites: [
            `${icons}SB_26_icon_girl.svg`,
            `${character}SB_26_CE_teacher.svg`,
            `${button}Buttons-16.svg`, //change here to 13
            `${button}Buttons-22.svg`,
            `${button}Buttons-20.svg`,
            `${button}Buttons-26.svg`,
            `${equipement}SB_26_ICON_book.svg`,//6
            `${equipement}SB_26_ICON_dustbean.svg`,//7
            `${equipement}SB_26_ICON_fire_protection.svg`,//8
            `${equipement}SB_26_ICON_helmet.svg`,//9
            `${equipement}SB_26_ICON_injuction.svg`,//10
            `${equipement}SB_26_ICON_mop_stick.svg`,//11
            `${equipement}SB_26_ICON_mouth_mirror.svg`,//12
            `${equipement}SB_26_ICON_police_stick.svg`,//13
            `${equipement}SB_26_ICON_shears.svg`,//14
            `${equipement}SB_26_ICON_stethoscope.svg`,//15
            `${equipement}SB_26_ICON_torch.svg`,//16
            `${equipement}SB_26_ICON_water_can.svg`,//17
            `${eqhilight}SB_26_GREEN.svg`,
            `${eqhilight}SB_26_RED.svg`,
            `${progressBar}SB_26_PROGRESS_BAR.svg`,
            `${progressBar}SB_26_STAR.svg`,
            `${handIcon}SB_26_hand_hilight.svg`,

        ],
        sounds: [`${soundUrl}SB_26_Audio_04.mp3`],
        lottie: [
            `${lottieUrl}scene_04/SB_26_SC_04.json`,
            `${lottieUrl}scene_04/Scene_04.json`,
        ]
    },
    intro: {
        id: "intro",
        Bg: `${introBg}SB_26_Intro_BG.svg`,
        sprites: [
            `${introBg}SB_26_Intro_BG_.svg`,
            `${introBg}SB_26_Intro_BG_Font.svg`,
            `${button}Buttons-02.svg`,

        ],
        sounds: [
            `${soundUrl}SB_26_Audio_01.mp3`
        ],
        lottie: [

        ]
    },
    explain: {
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
            `${button}Buttons-13.svg`,//change here to 16 for next button
            `${button}Buttons-22.svg`,
            `${button}Buttons-20.svg`,
            `${button}Buttons-26.svg`
        ],
        sounds: [
            `${soundUrl}SB_26_Audio_01.mp3`
        ],
        lottie: [
            `${lottieUrl}scene_02/1.SB_26_SC_02.json`,
        ]
    },
    activity01: {
        id: "activity01scene",
        Bg: `${bg}SB_26_BG_07.svg`,
        sprites: [
            `${icons}SB_26_icon_girl.svg`,
            `${character}SB_26_CE_armyman01.svg`,
            `${button}Buttons-16.svg`, //change here to 13
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
        id: "activity02scene",
        Bg: `${bg}SB_26_BG_09.svg`,
        sprites: [
            `${icons}SB_26_icon_girl.svg`,
            `${character}SB_26_CE_dentist.svg`,
            `${button}Buttons-16.svg`, //change here to 13
            `${button}Buttons-22.svg`,
            `${button}Buttons-20.svg`,
            `${button}Buttons-26.svg`,


        ],
        sounds: [`${soundUrl}SB_26_Audio_29.mp3`],
        lottie: [
            `${lottieUrl}scene_08/1.SB_26_SC_08.json`,
        ]
    },
    activity01end: {
        id: "activityend",
        Bg: `${bg}SB_26_BG_15.svg`,
        sprites: [
            `${icons}SB_26_icon_girl.svg`,
            `${character}SB_26_CE_dentist.svg`,
            `${button}Buttons-16.svg`, //change here to 16
            `${button}Buttons-22.svg`,
            `${button}Buttons-20.svg`,
            `${button}Buttons-26.svg`,
            `${button}Buttons-06.svg`,
            `${button}Buttons-13.svg`,

        ],
        sounds: [`${soundUrl}SB_26_Audio_29.mp3`],
        lottie: [
            `${lottieUrl}scene_08/1.SB_26_SC_08.json`,
        ]
    },

}

export default AssetsMap;
