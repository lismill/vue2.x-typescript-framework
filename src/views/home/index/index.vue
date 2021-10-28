<template>
  <div class="home">
    <!-- Hello -->
    <fieldset>
      <legend>Hello</legend>
      <div>Hello, {{ name }}</div>
    </fieldset>

    <!-- Router -->
    <fieldset>
      <legend>Router</legend>
      <div>
        <router-link to="/login">login</router-link> -
        <router-link to="/about">about</router-link>
      </div>
    </fieldset>

    <!-- SVG -->
    <fieldset>
      <legend>SVG</legend>
      <div>
        <svg-icon name="斜塔" color="#e74e3d" size="30"></svg-icon>
        <svg-icon color="#e74e3d" size="30"></svg-icon>
      </div>
    </fieldset>

    <!-- Style -->
    <fieldset>
      <legend>Style</legend>
      <div class="p-20">
        <div>1</div>
        <div>2</div>
      </div>
    </fieldset>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import { GetConfig, SetConfig } from "@/api/home/index";

@Component({
  components: {},
})
export default class Home extends Vue {
  private name: any = "Lean";
  mounted(): void {
    console.log(123);
    console.log(process.env);
    GetConfig({ id: 1 })
      .then((res: any) => {
        console.log(res);
      })
      .catch((error: any) => console.log(error));
    SetConfig({ id: 1 })
      .then((res: any) => {
        console.log(res);
      })
      .catch((error: any) => console.log(error));
  }
}
</script>
<style scoped lang="scss">
fieldset {
  margin-top: 20px;
}
</style>
