
const soundurl = "ee01_ow_thss_pl1/audio/"
const lottieurl = "ee01_ow_thss_pl1/lottie/"
const bg = "ee01_ow_thss_pl1/bg/bg/"
const introbg = "ee01_ow_thss_pl1/bg/intro_bg/"
const character = "ee01_ow_thss_pl1/character/"
const hilight = "ee01_ow_thss_pl1/icons/icon_ci01_hilight/"
const icons = "ee01_ow_thss_pl1/icons/icon_ci_01/"
const button = "ee01_ow_thss_pl1/button/"
const equipement = "ee01_ow_thss_pl1/icons/icon_pi_02/"
const eqhilight = "ee01_ow_thss_pl1/icons/icon_pi_02_hilight/"
const progressbar = "ee01_ow_thss_pl1/icons/progress_bar/"
const handicon = "ee01_ow_thss_pl1/icons/hand/"
const AssetsMap = {
    chooseCharacter: {
        id: "choosecharacter",
        Bg: `${bg}sb_26_bg_08.svg`,
        sprites: [
            `${button}buttons_16.svg`, //change here to 13//0
            `${button}buttons_22.svg`,//1
            `${button}buttons_20.svg`,//2
            `${button}buttons_26.svg`,//3
            `${hilight}sb_26_green.svg`,//4
            `${hilight}sb_26_red.svg`,//5
            `${icons}sb_26_icon_armyman.svg`,//6
            `${icons}sb_26_icon_dentist.svg`,//7
            `${icons}sb_26_icon_docter.svg`,//8
            `${icons}sb_26_icon_firefighter.svg`,//9
            `${icons}sb_26_icon_floorcleaner.svg`,//10
            `${icons}sb_26_icon_garbege collector.svg`,//11
            `${icons}sb_26_icon_gardener.svg`,//12
            `${icons}sb_26_icon_guard.svg`,//13
            `${icons}sb_26_icon_police.svg`,//14
            `${icons}sb_26_icon_teacher.svg`,//15
            `${progressbar}sb_26_progress_bar.svg`,
            `${progressbar}sb_26_star.svg`,
            `${handicon}sb_26_hand_hilight.svg`,
            `${character}shadow.svg`,


        ],
        sounds: [
            `${soundurl}sb_26_audio_07.mp3`,
        ],
        lottie: [
            `${lottieurl}scene_07/sb_26_scene_07.json`,
        ]
    },
    app: {
        id: "appScene",
        Bg: `${bg}sb_26_bg_06.svg`,
        sprites: [
            `${button}buttons_20.svg`,
            `${button}buttons_26.svg`,


        ],
        sounds: [
            `${soundurl}sb_26_audio_07.mp3`,
        ],
        lottie: [
            `${lottieurl}scene_07/sb_26_scene_07.json`,
            `${lottieurl}transition_01.json`,
        ]
    },
    armyMan: {
        id: "armyManScene",
        Bg: `${bg}sb_26_bg_06.svg`,
        sprites: [
            `${icons}sb_26_icon_girl.svg`,
            `${character}sb_26_ce_armyman01.svg`,
            `${button}buttons_16.svg`, //change here to 13
            `${button}buttons_22.svg`,
            `${button}buttons_20.svg`,
            `${button}buttons_26.svg`,
            `${equipement}sb_26_icon_book.svg`,//6
            `${equipement}sb_26_icon_dustbean.svg`,//7
            `${equipement}sb_26_icon_fire_protection.svg`,//8
            `${equipement}sb_26_icon_helmet.svg`,//9
            `${equipement}sb_26_icon_injuction.svg`,//10
            `${equipement}sb_26_icon_mop_stick.svg`,//11
            `${equipement}sb_26_icon_mouth_mirror.svg`,//12
            `${equipement}sb_26_icon_police_stick.svg`,//13
            `${equipement}sb_26_icon_shears.svg`,//14
            `${equipement}sb_26_icon_stethoscope.svg`,//15
            `${equipement}sb_26_icon_torch.svg`,//16
            `${equipement}sb_26_icon_water_can.svg`,//17
            `${eqhilight}sb_26_green.svg`,
            `${eqhilight}sb_26_red.svg`,
            `${progressbar}sb_26_progress_bar.svg`,
            `${progressbar}sb_26_star.svg`,
            `${handicon}sb_26_hand_hilight.svg`,
            `${character}shadow.svg`,

        ],
        sounds: [
            `${soundurl}sb_26_audio_07.mp3`,
        ],
        lottie: [
            `${lottieurl}scene_07/sb_26_scene_07.json`,
            `${lottieurl}scene_07/scene_07.json`,
            `${lottieurl}scene_07/sb_26_scene_07__v1.json`,
        ]
    },
    dentist: {
        id: "dentistScene",
        Bg: `${bg}sb_26_bg_13.svg`,
        sprites: [
            `${icons}sb_26_icon_girl.svg`,
            `${character}sb_26_ce_dentist.svg`,
            `${button}buttons_16.svg`, //change here to 13
            `${button}buttons_22.svg`,
            `${button}buttons_20.svg`,
            `${button}buttons_26.svg`,
            `${equipement}sb_26_icon_book.svg`,//6
            `${equipement}sb_26_icon_dustbean.svg`,//7
            `${equipement}sb_26_icon_fire_protection.svg`,//8
            `${equipement}sb_26_icon_helmet.svg`,//9
            `${equipement}sb_26_icon_injuction.svg`,//10
            `${equipement}sb_26_icon_mop_stick.svg`,//11
            `${equipement}sb_26_icon_mouth_mirror.svg`,//12
            `${equipement}sb_26_icon_police_stick.svg`,//13
            `${equipement}sb_26_icon_shears.svg`,//14
            `${equipement}sb_26_icon_stethoscope.svg`,//15
            `${equipement}sb_26_icon_torch.svg`,//16
            `${equipement}sb_26_icon_water_can.svg`,//17
            `${eqhilight}sb_26_green.svg`,
            `${eqhilight}sb_26_red.svg`,
            `${progressbar}sb_26_progress_bar.svg`,
            `${progressbar}sb_26_star.svg`,
            `${handicon}sb_26_hand_hilight.svg`,
            `${character}shadow.svg`,


        ],
        sounds: [`${soundurl}sb_26_audio_29.mp3`],
        lottie: [
            `${lottieurl}scene_30/scene_30.json`,
            `${lottieurl}scene_30/sb_26_scene_30.json`,
        ]
    },
    doctor: {
        id: "doctorScene",
        Bg: `${bg}sb_26_bg_02.svg`,
        sprites: [
            `${icons}sb_26_icon_girl.svg`,
            `${character}sb_26_ce_docter01.svg`,
            `${button}buttons_16.svg`, //change here to 13
            `${button}buttons_22.svg`,
            `${button}buttons_20.svg`,
            `${button}buttons_26.svg`,
            `${equipement}sb_26_icon_book.svg`,//6
            `${equipement}sb_26_icon_dustbean.svg`,//7
            `${equipement}sb_26_icon_fire_protection.svg`,//8
            `${equipement}sb_26_icon_helmet.svg`,//9
            `${equipement}sb_26_icon_injuction.svg`,//10
            `${equipement}sb_26_icon_mop_stick.svg`,//11
            `${equipement}sb_26_icon_mouth_mirror.svg`,//12
            `${equipement}sb_26_icon_police_stick.svg`,//13
            `${equipement}sb_26_icon_shears.svg`,//14
            `${equipement}sb_26_icon_stethoscope.svg`,//15
            `${equipement}sb_26_icon_torch.svg`,//16
            `${equipement}sb_26_icon_water_can.svg`,//17
            `${eqhilight}sb_26_green.svg`,
            `${eqhilight}sb_26_red.svg`,
            `${progressbar}sb_26_progress_bar.svg`,
            `${progressbar}sb_26_star.svg`,
            `${handicon}sb_26_hand_hilight.svg`,
            `${character}shadow.svg`,

        ],
        sounds: [`${soundurl}sb_26_audio_03.mp3`],
        lottie: [
            `${lottieurl}scene_03/sb_26_sc_03.json`,
            `${lottieurl}scene_03/scene_03.json`,
            `${lottieurl}scene_03/1.sb_26_sc_03_doctor.json`,
        ]
    },
    fireFighter: {
        id: "fireFighterScene",
        Bg: `${bg}sb_26_bg_10.svg`,
        sprites: [
            `${icons}sb_26_icon_girl.svg`,
            `${character}sb_26_ce_firefighter.svg`,
            `${button}buttons_16.svg`, //change here to 13
            `${button}buttons_22.svg`,
            `${button}buttons_20.svg`,
            `${button}buttons_26.svg`,
            `${equipement}sb_26_icon_book.svg`,//6
            `${equipement}sb_26_icon_dustbean.svg`,//7
            `${equipement}sb_26_icon_fire_protection.svg`,//8
            `${equipement}sb_26_icon_helmet.svg`,//9
            `${equipement}sb_26_icon_injuction.svg`,//10
            `${equipement}sb_26_icon_mop_stick.svg`,//11
            `${equipement}sb_26_icon_mouth_mirror.svg`,//12
            `${equipement}sb_26_icon_police_stick.svg`,//13
            `${equipement}sb_26_icon_shears.svg`,//14
            `${equipement}sb_26_icon_stethoscope.svg`,//15
            `${equipement}sb_26_icon_torch.svg`,//16
            `${equipement}sb_26_icon_water_can.svg`,//17
            `${eqhilight}sb_26_green.svg`,
            `${eqhilight}sb_26_red.svg`,
            `${progressbar}sb_26_progress_bar.svg`,
            `${progressbar}sb_26_star.svg`,
            `${handicon}sb_26_hand_hilight.svg`,
            `${character}shadow.svg`,

        ],
        sounds: [`${soundurl}sb_26_audio_27.mp3`],
        lottie: [
            `${lottieurl}scene_27/sb_26_scene_27.json`,
            `${lottieurl}scene_27/scene_27.json`,
        ]
    },
    floorCleaner: {
        id: "floorCleanerScene",
        Bg: `${bg}sb_26_bg_11.svg`,
        sprites: [
            `${icons}sb_26_icon_girl.svg`,
            `${character}sb_26_ce_florecleaner01.svg`,
            `${button}buttons_16.svg`, //change here to 13
            `${button}buttons_22.svg`,
            `${button}buttons_20.svg`,
            `${button}buttons_26.svg`,
            `${equipement}sb_26_icon_book.svg`,//6
            `${equipement}sb_26_icon_dustbean.svg`,//7
            `${equipement}sb_26_icon_fire_protection.svg`,//8
            `${equipement}sb_26_icon_helmet.svg`,//9
            `${equipement}sb_26_icon_injuction.svg`,//10
            `${equipement}sb_26_icon_mop_stick.svg`,//11
            `${equipement}sb_26_icon_mouth_mirror.svg`,//12
            `${equipement}sb_26_icon_police_stick.svg`,//13
            `${equipement}sb_26_icon_shears.svg`,//14
            `${equipement}sb_26_icon_stethoscope.svg`,//15
            `${equipement}sb_26_icon_torch.svg`,//16
            `${equipement}sb_26_icon_water_can.svg`,//17
            `${eqhilight}sb_26_green.svg`,
            `${eqhilight}sb_26_red.svg`,
            `${progressbar}sb_26_progress_bar.svg`,
            `${progressbar}sb_26_star.svg`,
            `${handicon}sb_26_hand_hilight.svg`,
            `${character}shadow.svg`,
        ],
        sounds: [`${soundurl}sb_26_audio_28.mp3`],
        lottie: [
            `${lottieurl}scene_28/scene_28.json`,
            `${lottieurl}scene_28/sb_26_scene_28.json`,
        ]
    },
    garbageCollector: {
        id: "garbageCollectorScene",
        Bg: `${bg}sb_26_bg_14.svg`,
        sprites: [
            `${icons}sb_26_icon_girl.svg`,
            `${character}sb_26_ce_garbagecollector.svg`,
            `${button}buttons_16.svg`, //change here to 13
            `${button}buttons_22.svg`,
            `${button}buttons_20.svg`,
            `${button}buttons_26.svg`,
            `${equipement}sb_26_icon_book.svg`,//6
            `${equipement}sb_26_icon_dustbean.svg`,//7
            `${equipement}sb_26_icon_fire_protection.svg`,//8
            `${equipement}sb_26_icon_helmet.svg`,//9
            `${equipement}sb_26_icon_injuction.svg`,//10
            `${equipement}sb_26_icon_mop_stick.svg`,//11
            `${equipement}sb_26_icon_mouth_mirror.svg`,//12
            `${equipement}sb_26_icon_police_stick.svg`,//13
            `${equipement}sb_26_icon_shears.svg`,//14
            `${equipement}sb_26_icon_stethoscope.svg`,//15
            `${equipement}sb_26_icon_torch.svg`,//16
            `${equipement}sb_26_icon_water_can.svg`,//17
            `${eqhilight}sb_26_green.svg`,
            `${eqhilight}sb_26_red.svg`,
            `${progressbar}sb_26_progress_bar.svg`,
            `${progressbar}sb_26_star.svg`,
            `${handicon}sb_26_hand_hilight.svg`,
            `${character}shadow.svg`,

        ],
        sounds: [`${soundurl}sb_26_audio_31.mp3`],
        lottie: [
            `${lottieurl}scene_31/scene_31.json`,
            `${lottieurl}scene_31/sb_26_scene_31.json`,
        ]
    },
    gardener: {
        id: "gardenerScene",
        Bg: `${bg}sb_26_bg_04.svg`,
        sprites: [
            `${icons}sb_26_icon_girl.svg`,
            `${character}sb_26_ce_gardener.svg`,
            `${button}buttons_16.svg`, //change here to 13
            `${button}buttons_22.svg`,
            `${button}buttons_20.svg`,
            `${button}buttons_26.svg`,
            `${equipement}sb_26_icon_book.svg`,//6
            `${equipement}sb_26_icon_dustbean.svg`,//7
            `${equipement}sb_26_icon_fire_protection.svg`,//8
            `${equipement}sb_26_icon_helmet.svg`,//9
            `${equipement}sb_26_icon_injuction.svg`,//10
            `${equipement}sb_26_icon_mop_stick.svg`,//11
            `${equipement}sb_26_icon_mouth_mirror.svg`,//12
            `${equipement}sb_26_icon_police_stick.svg`,//13
            `${equipement}sb_26_icon_shears.svg`,//14
            `${equipement}sb_26_icon_stethoscope.svg`,//15
            `${equipement}sb_26_icon_torch.svg`,//16
            `${equipement}sb_26_icon_water_can.svg`,//17
            `${eqhilight}sb_26_green.svg`,
            `${eqhilight}sb_26_red.svg`,
            `${progressbar}sb_26_progress_bar.svg`,
            `${progressbar}sb_26_star.svg`,
            `${handicon}sb_26_hand_hilight.svg`,
            `${character}shadow.svg`,

        ],
        sounds: [`${soundurl}sb_26_audio_05.mp3`],
        lottie: [
            `${lottieurl}scene_05/sb_26_scene_05.json`,
            `${lottieurl}scene_05/scene_05.json`,
        ]
    },
    guard: {
        id: "guardScene",
        Bg: `${bg}sb_26_bg_12.svg`,
        sprites: [
            `${icons}sb_26_icon_girl.svg`,
            `${character}sb_26_ce_guard.svg`,
            `${button}buttons_16.svg`, //change here to 13
            `${button}buttons_22.svg`,
            `${button}buttons_20.svg`,
            `${button}buttons_26.svg`,
            `${equipement}sb_26_icon_book.svg`,//6
            `${equipement}sb_26_icon_dustbean.svg`,//7
            `${equipement}sb_26_icon_fire_protection.svg`,//8
            `${equipement}sb_26_icon_helmet.svg`,//9
            `${equipement}sb_26_icon_injuction.svg`,//10
            `${equipement}sb_26_icon_mop_stick.svg`,//11
            `${equipement}sb_26_icon_mouth_mirror.svg`,//12
            `${equipement}sb_26_icon_police_stick.svg`,//13
            `${equipement}sb_26_icon_shears.svg`,//14
            `${equipement}sb_26_icon_stethoscope.svg`,//15
            `${equipement}sb_26_icon_torch.svg`,//16
            `${equipement}sb_26_icon_water_can.svg`,//17
            `${eqhilight}sb_26_green.svg`,
            `${eqhilight}sb_26_red.svg`,
            `${progressbar}sb_26_progress_bar.svg`,
            `${progressbar}sb_26_star.svg`,
            `${handicon}sb_26_hand_hilight.svg`,
            `${character}shadow.svg`,

        ],
        sounds: [`${soundurl}sb_26_audio_30.mp3`],
        lottie: [
            `${lottieurl}scene_29/scene 29.json`,
            `${lottieurl}scene_29/sb_26_scene_29.json`,
        ]
    },
    police: {
        id: "policeScene",
        Bg: `${bg}sb_26_bg_05.svg`,
        sprites: [
            `${icons}sb_26_icon_girl.svg`,
            `${character}sb_26_ce_police.svg`,
            `${button}buttons_16.svg`, //change here to 13
            `${button}buttons_22.svg`,
            `${button}buttons_20.svg`,
            `${button}buttons_26.svg`,
            `${equipement}sb_26_icon_book.svg`,//6
            `${equipement}sb_26_icon_dustbean.svg`,//7
            `${equipement}sb_26_icon_fire_protection.svg`,//8
            `${equipement}sb_26_icon_helmet.svg`,//9
            `${equipement}sb_26_icon_injuction.svg`,//10
            `${equipement}sb_26_icon_mop_stick.svg`,//11
            `${equipement}sb_26_icon_mouth_mirror.svg`,//12
            `${equipement}sb_26_icon_police_stick.svg`,//13
            `${equipement}sb_26_icon_shears.svg`,//14
            `${equipement}sb_26_icon_stethoscope.svg`,//15
            `${equipement}sb_26_icon_torch.svg`,//16
            `${equipement}sb_26_icon_water_can.svg`,//17
            `${eqhilight}sb_26_green.svg`,
            `${eqhilight}sb_26_red.svg`,
            `${progressbar}sb_26_progress_bar.svg`,
            `${progressbar}sb_26_star.svg`,
            `${handicon}sb_26_hand_hilight.svg`,
            `${character}shadow.svg`,

        ],
        sounds: [`${soundurl}sb_26_audio_06.mp3`],
        lottie: [
            `${lottieurl}scene_06/sb_26_scene_06.json`,
            `${lottieurl}scene_06/scene_06.json`,
        ]
    },
    teacher: {
        id: "teacherScene",
        Bg: `${bg}sb_26_bg_03.svg`,
        sprites: [
            `${icons}sb_26_icon_girl.svg`,
            `${character}sb_26_ce_teacher.svg`,
            `${button}buttons_16.svg`, //change here to 13
            `${button}buttons_22.svg`,
            `${button}buttons_20.svg`,
            `${button}buttons_26.svg`,
            `${equipement}sb_26_icon_book.svg`,//6
            `${equipement}sb_26_icon_dustbean.svg`,//7
            `${equipement}sb_26_icon_fire_protection.svg`,//8
            `${equipement}sb_26_icon_helmet.svg`,//9
            `${equipement}sb_26_icon_injuction.svg`,//10
            `${equipement}sb_26_icon_mop_stick.svg`,//11
            `${equipement}sb_26_icon_mouth_mirror.svg`,//12
            `${equipement}sb_26_icon_police_stick.svg`,//13
            `${equipement}sb_26_icon_shears.svg`,//14
            `${equipement}sb_26_icon_stethoscope.svg`,//15
            `${equipement}sb_26_icon_torch.svg`,//16
            `${equipement}sb_26_icon_water_can.svg`,//17
            `${eqhilight}sb_26_green.svg`,
            `${eqhilight}sb_26_red.svg`,
            `${progressbar}sb_26_progress_bar.svg`,
            `${progressbar}sb_26_star.svg`,
            `${handicon}sb_26_hand_hilight.svg`,
            `${character}shadow.svg`,

        ],
        sounds: [`${soundurl}sb_26_audio_04.mp3`],
        lottie: [
            `${lottieurl}scene_04/sb_26_sc_04.json`,
            `${lottieurl}scene_04/scene_04.json`,
        ]
    },
    intro: {
        id: "intro",
        Bg: `${introbg}sb_26_intro_bg.svg`,
        sprites: [
            `${introbg}sb_26_intro_bg_.svg`,
            `${introbg}sb_26_intro_bg_font.svg`,
            `${button}buttons_02.svg`,

        ],
        sounds: [
            `${soundurl}sb_26_audio_01.mp3`
        ],
        lottie: [

        ]
    },
    explain: {
        id: "explain",
        Bg: `${bg}sb_26_bg_01.svg`,
        sprites: [
            `${icons}sb_26_icon_armyman.svg`,
            `${icons}sb_26_icon_dentist.svg`,
            `${icons}sb_26_icon_docter.svg`,
            `${icons}sb_26_icon_firefighter.svg`,
            `${icons}sb_26_icon_floorcleaner.svg`,
            `${icons}sb_26_icon_garbegecollector.svg`,
            `${icons}sb_26_icon_gardener.svg`,
            `${icons}sb_26_icon_police.svg`,
            `${icons}sb_26_icon_guard.svg`,
            `${icons}sb_26_icon_teacher.svg`,
            `${character}sb_26_ce_girl01.svg`,
            `${button}buttons_13.svg`,//change here to 16 for next button
            `${button}buttons_22.svg`,
            `${button}buttons_20.svg`,
            `${button}buttons_26.svg`
        ],
        sounds: [
            `${soundurl}sb_26_audio_01.mp3`
        ],
        lottie: [
            `${lottieurl}scene_02/1.sb_26_sc_02.json`,
        ]
    },
    activity01: {
        id: "activity01scene",
        Bg: `${bg}sb_26_bg_07.svg`,
        sprites: [
            `${icons}sb_26_icon_girl.svg`,
            `${character}sb_26_ce_armyman01.svg`,
            `${button}buttons_16.svg`, //change here to 13
            `${button}buttons_22.svg`,
            `${button}buttons_20.svg`,
            `${button}buttons_26.svg`,
            `${character}shadow.svg`,
        ],
        sounds: [
            `${soundurl}sb_26_audio_07.mp3`
        ],
        lottie: [
            `${lottieurl}scene_08/1.sb_26_sc_08.json`,
        ]
    },
    activity02: {
        id: "activity02scene",
        Bg: `${bg}sb_26_bg_09.svg`,
        sprites: [
            `${icons}sb_26_icon_girl.svg`,
            `${character}sb_26_ce_dentist.svg`,
            `${button}buttons_16.svg`, //change here to 13
            `${button}buttons_22.svg`,
            `${button}buttons_20.svg`,
            `${button}buttons_26.svg`,
            `${character}shadow.svg`,

        ],
        sounds: [`${soundurl}sb_26_audio_29.mp3`],
        lottie: [
            `${lottieurl}scene_08/1.sb_26_sc_08.json`,
        ]
    },
    activity01end: {
        id: "activityend",
        Bg: `${bg}sb_26_bg_15.svg`,
        sprites: [
            `${icons}sb_26_icon_girl.svg`,
            `${character}sb_26_ce_dentist.svg`,
            `${button}buttons_16.svg`, //change here to 16
            `${button}buttons_22.svg`,
            `${button}buttons_20.svg`,
            `${button}buttons_26.svg`,
            `${button}buttons_06.svg`,
            `${button}buttons_13.svg`,

        ],
        sounds: [`${soundurl}sb_26_audio_29.mp3`],
        lottie: [
            `${lottieurl}scene_08/1.sb_26_sc_08.json`,
        ]
    },
    commonelements: {
        id: 'commonElem',
        Bg: ``,
        sprites: [
            `${button}buttons_16.svg`, //change here to 13
            `${button}buttons_22.svg`,
            `${button}buttons_20.svg`,
            `${button}buttons_26.svg`,
            `${equipement}sb_26_icon_book.svg`,//4
            `${equipement}sb_26_icon_dustbean.svg`,//5
            `${equipement}sb_26_icon_fire_protection.svg`,//6
            `${equipement}sb_26_icon_helmet.svg`,//7
            `${equipement}sb_26_icon_injuction.svg`,//8
            `${equipement}sb_26_icon_mop_stick.svg`,//9
            `${equipement}sb_26_icon_mouth_mirror.svg`,//10
            `${equipement}sb_26_icon_police_stick.svg`,//11
            `${equipement}sb_26_icon_shears.svg`,//12
            `${equipement}sb_26_icon_stethoscope.svg`,//13
            `${equipement}sb_26_icon_torch.svg`,//14
            `${equipement}sb_26_icon_water_can.svg`,//15
            `${eqhilight}sb_26_green.svg`,
            `${eqhilight}sb_26_red.svg`,
            `${progressbar}sb_26_progress_bar.svg`,
            `${progressbar}sb_26_star.svg`,
            `${handicon}sb_26_hand_hilight.svg`,
        ],
        lottie: [],

    }
}

export default AssetsMap;
