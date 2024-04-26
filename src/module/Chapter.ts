import Sinario from '@/module/Sinario'
import type { Ref } from 'vue'
type Props = {
  textboxVisable: Ref<boolean>,
  textName: Ref<String | null>,
  textScript: Ref<String | null>,
  bgImgSrc: Ref<String | null>,
  audioSrc: Ref<String | null>
}
class Chapter {
  textboxVisable: Ref<boolean>
  textName: Ref<String | null>
  textScript: Ref<String | null>
  audioSrc: Ref<String | null>
  bgImgSrc: Ref<String | null>


  sinarioList: Function[] = []
  sinarioIndex: number = 0


  timer: number = 0
  constructor({
    textboxVisable,
    textName,
    textScript,
    bgImgSrc,
    audioSrc
  }: Props) {

    this.textboxVisable = textboxVisable
    this.textName = textName
    this.textScript = textScript
    this.bgImgSrc = bgImgSrc
    this.audioSrc = audioSrc

  }

  addSinarioEvents(sinario: any) {
    this.sinarioList.push(sinario)
    return this
  }

  addTextEvents(name: String | null, msg: String | null) {
    this.sinarioList.push(() => {
      this.textName.value = name
      clearTimeout(this.timer)
      this.textScript.value = ''
      let i = 0
      const ViewText = () => {
        if (!msg) return
        if (i < msg.length) {
          this.textScript.value += msg.charAt(i);
          i++;
          const time = 1000 / msg.length
          this.timer = setTimeout(ViewText, time > 100 ? 100 : time);
        }
      }
      ViewText()
      // this.textScript.value = msg
    })
    return this
  }

  addAudioSrc(src: String) {
    this.sinarioList.push(() => {
      this.audioSrc.value = src
    })
  }

  next() {
    if (this.sinarioIndex <= this.sinarioList.length - 1) {
      this.sinarioList[this.sinarioIndex].call(this)
      this.sinarioIndex++
      return true
    }
    return false
  }

}

export default Chapter