const imgUrl = "/internal/images/"
const soundUrl = "/internal/sounds/"
const lottieUrl = "/internal/lottie/"
const bg = "/internal/bg/BG/"
const introBg = "/internal/bg/Intro_BG/"
const IntroMap = {
  id: "intro",

  Bg: `${introBg}SB_26_Intro_BG.svg`,

  sprites: [
    `${imgUrl}Intro-Text.svg`,
    `${imgUrl}Intro-Text.svg`,
    `${imgUrl}Intro-Text.svg`,
    `${imgUrl}Intro-Text.svg`,
    `${imgUrl}Intro-Text.svg`,
    `${imgUrl}Intro-Text.svg`,
    `${imgUrl}Intro-Text.svg`,
    
  ],


  sounds: [
    `${soundUrl}Intro.mp3`
  ],

  lottie: [
    `${lottieUrl}Scene_01.json`,
  ]
}

export default IntroMap;