<template>
  <svg
    :class="svgClass"
    :style="{
      color: color,
      width: size,
      height: size,
    }"
  >
    <use :xlink:href="iconName" />
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Home extends Vue {
  // name
  @Prop({ default: "" }) name!: string;

  // 颜色
  @Prop({ default: "" }) color!: string;

  // 大小
  @Prop({ default: "16px" }) size!: string;

  /**
   * 获取名称
   */
  get iconName(): string {
    return `#icon-${this.name}`;
  }

  /**
   * 获取class
   */
  get svgClass() {
    return this.name ? `svg-icon icon-${this.name}` : "404";
  }
}
</script>
<style lang="scss">
.svg-icon {
  fill: currentColor;
  vertical-align: middle;
}
</style>
