import Sinario from '@/module/Sinario'
import { nextTick, type Ref } from 'vue'
type Props = {
  textboxVisable: Ref<boolean>,
  textName: Ref<String | null>,
  textScript: Ref<String>,
  bgImgSrc: Ref<String | null>,

}
class Chapter {
  textboxVisable: Ref<boolean>
  textName: Ref<String | null>
  textScript: Ref<String>
  bgImgSrc: Ref<String | null>


  sinarioList: Function[] = []
  sinarioIndex: number = 0

  timer: number = 0

  constructor({
    textboxVisable,
    textName,
    textScript,
    bgImgSrc
  }: Props) {
    this.textboxVisable = textboxVisable
    this.textName = textName
    this.textScript = textScript
    this.bgImgSrc = bgImgSrc
  }

  addSinarioEvents(sinario: any) {
    this.sinarioList.push(sinario)
    return this
  }

  setTextboxVisable(visable: boolean) {

    this.textboxVisable.value = visable

    return this
  }

  addTextEvents(name: String | null, msg: String | null) {
    this.sinarioList.push(() => {
      this.textName.value = name
      this.textScript.value = msg
    })
    return this
  }

  addAudioSrc(src: string) {
    this.sinarioList.push(() => {
      const audio = new Audio(src)
      audio.play()
      nextTick(() => {
        this.next()
      })

    })
    return this
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