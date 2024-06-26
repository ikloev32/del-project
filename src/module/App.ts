import { ref, onMounted, onUnmounted, type Ref } from 'vue'
import Chapter from '@/module/Chapter'
import Sinario from './Sinario'

export function useScenario() {
  const chapterList: Ref<Chapter[]> = ref([])
  const chapterIndex = ref(0)
  const textboxVisable = ref<boolean>(true)
  const textName = ref<string | null>(null)
  const textScript = ref<string>('')
  const charcterSrc = ref<string>('')
  // /del-project/K-1.png
  const bgImgSrc = ref('')
  const effectClass = ref('')
  const addChpter = (chapter: Chapter) => {
    chapterList.value.push(chapter)
    return chapter
  }
  const nextEvent = () => {
    const isNotEnd = chapterList.value[chapterIndex.value]?.next()
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
      charcterSrc,
      effectClass
    })
  }

  return { textName, textScript, bgImgSrc, textboxVisable, charcterSrc, effectClass, createChapter, addChpter, nextEvent, startChapter }
}