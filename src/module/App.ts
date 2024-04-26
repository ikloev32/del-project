import { ref, onMounted, onUnmounted, type Ref } from 'vue'
import Chapter from '@/module/Chapter'
import Sinario from './Sinario'

export function useScenario() {
  const chapterList: Ref<Chapter[]> = ref([])
  const chapterIndex = ref(0)
  const textboxVisable = ref<boolean>(true)
  const textName = ref<String | null>(null)
  const textScript = ref<String | null>(null)
  const bgImgSrc = ref(null)
  const audioSrc = ref(null)


  const addChpter = (chapter: Chapter) => {
    chapterList.value.push(chapter)
    return chapter
  }
  const nextEvent = () => {
    const isNotEnd = chapterList.value[chapterIndex.value]?.next()
    console.log(isNotEnd)
    if (isNotEnd) {

    } else {
      chapterIndex.value++
    }
  }
  const startChapter = (index = chapterIndex.value) => {
    chapterList.value[index]?.next()
  }

  const createChapter = function () {
    return new Chapter({
      textboxVisable,
      textName,
      textScript,
      bgImgSrc,
      audioSrc
    })
  }

  // 관리 상태를 반환 값으로 노출

  return { textName, textScript, bgImgSrc, textboxVisable, audioSrc, createChapter, addChpter, nextEvent, startChapter }
}