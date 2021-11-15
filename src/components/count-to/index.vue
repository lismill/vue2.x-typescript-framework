<template>
  <countTo :startVal="count.start" :endVal="count.end" :duration="count.duration"></countTo>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class extends Vue {
  // 开始数值
  @Prop() startVal = 0;
  // 结束数值
  @Prop() endVal = 0;
  // 滚动时间
  @Prop() duration = 1000;
}
</script>
