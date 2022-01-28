const imgUrl = "/internal/images/"
const soundUrl = "/internal/sounds/"
const lottieUrl = "/internal/lottie/"
const bg = "/internal/bg/BG"
const introBg = "/internal/bg/intro_BG"
const IntroMap = {
  id: "intro",

  Bg: `${imgUrl}Intro-bg.svg`,

  sprites: [
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