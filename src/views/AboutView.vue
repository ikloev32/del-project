<template>
  <img class="charcter" :class="{
      'on': !isEmpty(charcterSrc)
    }" :src="charcterSrc">
  <div class="bg-box" :class="effectClass"><img v-if="bgImgSrc" :src="bgImgSrc"></div>
  <div id="text-box" v-if="textboxVisable" @click="nextEvent">
    <div id="name">
      <div class="name-box">
        {{ textName }}
      </div>
    </div>
    <!-- <div class="txt" v-html="textScript"></div>-->
    <textTyper :text="textScript" />
    <!-- <VueTyper class="txt" text='Hello World! I was registered locally!'></VueTyper> -->
    <div class="marker">▼</div>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import { useScenario } from '@/module/App';
import textTyper from '@/components/textTyper.vue';
import { isEmpty } from 'lodash'
const {
  textName,
  textScript,
  bgImgSrc,
  textboxVisable,
  charcterSrc,
  effectClass,
  startChapter,
  addChpter,
  nextEvent,
  createChapter
} = useScenario()

onMounted(() => {
  const chapter1 = createChapter()
    .init()
    // .setEffectClass('vibration')
    //.addTextEvents('윌동', '이, 이건…!! <strong class="asd">남근(男根)</strong>!?')

    .addBGSrc('/del-project/bg/bg-sample1.jpg')
    .addAudioSrc('/del-project/audio/Bird.mp3')
    .setTextboxVisable(true)
    .addTextEvents('윌동', '평화로운 아침이다. 아, 윌리엄에게 박고 싶은 하루의 시작이구나.')
    .addTextEvents('윌동', '음? 뭔가 아랫도리가 이상한데…')
    .addTextEvents('윌동', '기시감이 느껴져 이불을 들추자, 남산이 솟아나 나를 반기고 있었다.')
    .setEffectClass('vibration')
    .addTextEvents('윌동', '이, 이건…!! <strong class="asd">남근(男根)</strong>!?')
    .addTextEvents('윌동', '내가 드디어 남자가 된 건가? 드디어…?! 그토록 바래오던…!!')
    .addTextEvents('윌동', '우, 우오오옷…!! 당장 이 사실을 사람들에게 알려야겠어…!! ')
    // chapter2
    .addBGSrc('/del-project/bg/bg-smaple2.jpg')
    .addTextEvents('윌동', '이런, 너무 기쁜 마음에 5초만에 델리만쥬 전문점에 도착했다…')
    .addTextEvents('윌동', '저 멀리 미미님이 보인다. 미미님에게 이 소식을 알려야지!')
    .addTextEvents('윌동', '그런데…')
    .addTextEvents('윌동', '미미님의 모습이 평소랑 어딘가 좀 다른 걸…? 말을 걸어봐야겠다.')
    .setCharcterSrc('/del-project/character/sample1.png')
    .addTextEvents('미미', '뭐야, 윌동님 왜 변태 모브같은 표정을 짓고 있어요? 또 윌리엄 희롱하는 생각했어요?')
    .addTextEvents('윌동', '미미님 왜 좃냥까칠키작남이 되신 거예요!?')
    .addTextEvents('미미', '...타임아웃 먹고 싶어요? 이 사람 뭐라는 거야!')
  addChpter(chapter1)

  startChapter()
})
</script>

<style scoped>
.bg-box {
  top: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  background-color: #000;
}

.bg-box>img {
  width: 100%;
  height: 100%;
}

.charcter {
  height: 90%;
  position: relative;
  z-index: 4;
  bottom: -55%;
  left: 50%;
  opacity: 0;
  transition: 0.6s;
  transform: translate(-50%, -50%);
}

.charcter.on {
  opacity: 1;
}

#text-box {
  z-index: 5;
  position: absolute;
  width: calc(100% - 30%);
  margin: 0 15%;
  background: rgba(225, 221, 233, 1);
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
