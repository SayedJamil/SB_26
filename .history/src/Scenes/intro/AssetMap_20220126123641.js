const imgUrl = "/internal/images/"
const soundUrl = "/internal/sounds/"
const lottieUrl = "/internal/lottie/"
const bg = "/internal/bg/BG/"
const introBg = "/internal/bg/Intro_BG/"
const character = "/internal/character/"
const IntroMap = {
  id: "intro",

  Bg: `${introBg}SB_26_Intro_BG.svg`,

  sprites: [
    `${character}SB_26_CE_armyman01.svg`,
    `${character}SB_26_CE_docter01.svg`,
    `${character}SB_26_CE_firefighter.svg`,
    `${character}SB_26_CE_garbage collector.svg`,
    `${character}SB_26_CE_police.svg`,
    `${imgUrl}SB_26_CE_guard.svg`,
    `${imgUrl}SB_26_Intro_BG_Font.svg`,

  ],


  sounds: [
    `${soundUrl}Intro.mp3`
  ],

  lottie: [
    `${lottieUrl}Scene_01.json`,
  ]
}

export default IntroMap;