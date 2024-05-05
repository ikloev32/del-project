<template>
  <div class="txt" v-html="msg"></div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps({
  text: {
    type: String,
    required: true
  }
})

const msg = ref('')
const minTime = 100

let i = 0;
const ViewText = () => {
  if (i < props.text.length) {
    msg.value += props.text.charAt(i);
    i++;
    const time = 1000 / props.text.length
    setTimeout(ViewText, time > minTime ? 50 : time);
  }
}
watch(props, () => {
  i = 0
  msg.value = ''
  ViewText()
})
</script>
<style scoped>
.txt {
  min-height: 3rem;
  line-height: 3rem;
}
</style>