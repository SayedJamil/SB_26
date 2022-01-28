import { Howl } from "howler"

const PlayAudio = (Sound, onEnd = null,stop=false) => {
  let bloburl = URL.createObjectURL(Sound)
  let sound = new Howl({
    src: [bloburl],
    format: ["mp3"]
  })

  sound.play()

  if (onEnd) {
    sound.on('end', onEnd)
  }
  if (stop) {
    sound
  }
}

export default PlayAudio;