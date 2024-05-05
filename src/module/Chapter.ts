import Sinario from '@/module/Sinario'
import { nextTick, type Ref } from 'vue'
type Props = {
  textboxVisable: Ref<boolean>,
  textName: Ref<String | null>,
  textScript: Ref<String>,
  bgImgSrc: Ref<String | null>,
  charcterSrc: Ref<String>,
  effectClass: Ref<String>
}
class Chapter {
  textboxVisable: Ref<boolean>
  textName: Ref<String | null>
  textScript: Ref<String>
  bgImgSrc: Ref<String | null>
  charcterSrc: Ref<String>
  effectClass: Ref<String>

  sinarioList: Function[] = []
  sinarioIndex: number = 0

  timer: number = 0

  constructor({
    textboxVisable,
    textName,
    textScript,
    bgImgSrc,
    charcterSrc,
    effectClass
  }: Props) {
    this.textboxVisable = textboxVisable
    this.textName = textName
    this.textScript = textScript
    this.bgImgSrc = bgImgSrc
    this.charcterSrc = charcterSrc
    this.effectClass = effectClass
  }
  init() {
    this.textboxVisable.value = false
    this.textName.value = null
    this.textScript.value = ''
    this.bgImgSrc.value = ''
    this.effectClass.value = ''

    return this
  }
  addSinarioEvents(sinario: any) {
    this.sinarioList.push(sinario)
    return this
  }

  setTextboxVisable(visable: boolean) {
    this.textboxVisable.value = visable
    return this
  }

  setEffectClass(effectClass: string) {
    this.sinarioList.push(() => {
      this.effectClass.value = effectClass
      nextTick(() => {
        this.next()
      })
    })

    return this
  }
  setCharcterSrc(charcterSrc: string) {
    this.sinarioList.push(() => {
      this.charcterSrc.value = charcterSrc
      nextTick(() => {
        this.next()
      })
    })

    return this
  }

  addTextEvents(name: String | null, msg: String) {
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

  addBGSrc(src: string) {
    this.sinarioList.push(() => {
      this.bgImgSrc.value = src
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