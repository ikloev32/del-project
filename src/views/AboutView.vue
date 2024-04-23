<template>
  <div class="bg-box"><img v-if="bgImg" :src="bgImg"></div>
  <div id="text-box" v-if="textBox !== null" @click="next">
    <div id="name">
      <div class="name-box">
        {{ textBox.name }}
      </div>
    </div>
    <div class="txt">{{ textBox.msg }}</div>
    <div class="marker">▼</div>
  </div>
</template>
<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue';
const sinarioIndex = ref(0)
const sinario = ref<Function[]>([])
const bgImg = ref<string | null>(null)
const textBox = ref<any>(null)

const next = () => {
  if (sinario.value.length <= sinarioIndex.value) {
    return
  }
  sinario.value[sinarioIndex.value]()
  sinarioIndex.value++
}

const setText = (name: string, msg: string) => {
  const eventFunction = () => {
    textBox.value = {
      name,
      msg
    }
  }
  sinario.value.push(eventFunction)
}
const setBG = (src:string) => {
  const eventFunction = () => {
    bgImg.value = src
    nextTick(() => {
      next()
    })
  }
  sinario.value.push(eventFunction)
}
const setAudio = (src:string) => {
  const eventFunction = () => {
    // audioSrc.value = src
    // audioRef.value.play()
    const audio = new Audio(src);
    audio.play();
    nextTick(() => {
      next()
    })

  }
  sinario.value.push(eventFunction)
}
const init = () => {
  setText("...", "...")
  setBG("/public/K-1.png")
  setAudio("/public/audio/Bird.mp3")
  setText("...", "아침에 자고 일어난 윌동, 무언가 기시감을 느낀다.")
  setText("...", "자신의 아랫도리가 묵직한 것을 느끼고… 황급히 화장실로 간 그(녀였음)은 \n 그토록 바라던 남성이 되었음을 알게 된다.")
  setText("...", "기쁜 마음에 델리만쥬 전문점으로 달려가 사람들을 찾는 윌동. 그런데 어쩐지 모두의 상태가 이상하다?")
  setText("...", "무언가 이상함을 느끼는 윌동에게 가장 먼저 말을 건 것은 미미, 근데 윌동이 알던 미미가 아닌 것 같은데…")
  next()
  // setTimeout(() => {
  //   next()
  // }, 1000);
}

onMounted(() => {
  // const audio = new Audio('/public/audio/Bird.mp3');
  // audio.play();

  init()


})
</script>

<style>
.bg-box {
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
}

.bg-box>img {
  width: 100%;
  height: 100%;
}


#text-box {
  position: absolute;
  width: calc(100% - 120px);
  margin: 0 60px;
  background: rgba(225, 221, 233, .8);
  border: 1px solid #333;
  box-sizing: border-box;
  bottom: 50px;
  padding: 20px;
}

#name {
  position: relative;
  top: -5vh;
}

#name .name-box {
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  background-color: #212d3a;
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}

#text-box .txt {
  padding: 20px 0px;
  position: relative;
  top: -5vh;
  user-select: none;
}

.marker {
  position: absolute;
  right: 40px;
  bottom: 40px;
}
</style>
