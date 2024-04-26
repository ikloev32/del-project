<template>
  <div class="bg-box"><img v-if="bgImgSrc" :src="bgImgSrc"></div>
  <div id="text-box" v-if="textboxVisable" @click="nextEvent">
    <div id="name">
      <div class="name-box">
        {{ textName }}
      </div>
    </div>
    <div class="txt">{{ textScript }}</div>
    <div class="marker">▼</div>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import { useScenario } from '@/module/App';

const {
  textName,
  textScript,
  bgImgSrc,
  textboxVisable,
  startChapter,
  addChpter,
  nextEvent,
  createChapter
} = useScenario()

onMounted(() => {
  const chapter1 = createChapter()
    .addTextEvents('윌동', '평화로운 아침이다. 아, 윌리엄에게 박고 싶은 하루의 시작이구나.')
    .addTextEvents('윌동', '음? 뭔가 아랫도리가 이상한데…')
    .addTextEvents('윌동', '기시감이 느껴져 이불을 들추자, 남산이 솟아나 나를 반기고 있었다.')
    .addTextEvents('윌동', '이, 이건…!! 남근(男根)!?')
    .addTextEvents('윌동', '내가 드디어 남자가 된 건가? 드디어…?! 그토록 바래오던…!!')
    .addTextEvents('윌동', '우, 우오오옷…!! (화면 진동) 당장 이 사실을 사람들에게 알려야겠어…!! ')

  addChpter(chapter1)
  startChapter()
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
