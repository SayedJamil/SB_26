import { Howl } from "howler"

const PlayAudio = (Sound, status = true, onEnd = null) => {
  let bloburl = URL.createObjectURL(Sound)
  let sound = new Howl({
    src: [bloburl],
    format: ["mp3"]
  })
if(status)
  sound.play()

  if (onEnd) {
    sound.on('end', onEnd)
  }

}
export default PlayAudio;