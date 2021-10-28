<template>
  <div class="home p-20">
    <!-- Hello -->
    <fieldset class="m-b20">
      <legend>微信公众号/小程序授权</legend>
      <div>Hello, {{ name }}</div>
    </fieldset>

    <!-- Router -->
    <fieldset class="m-b20">
      <legend>Router</legend>
      <div>
        <router-link to="/login">login</router-link> -
        <router-link to="/about">about</router-link>
      </div>
    </fieldset>

    <!-- SVG -->
    <fieldset class="m-b20">
      <legend>SVG</legend>
      <div>
        <svg-icon name="斜塔" color="#e74e3d" size="30"></svg-icon>
        <svg-icon color="#e74e3d" size="30"></svg-icon>
      </div>
    </fieldset>

    <!-- Style -->
    <fieldset class="m-b20">
      <legend>Style</legend>
      <div class="p-20">
        <div>1</div>
        <div>2</div>
      </div>
    </fieldset>
    <img style="border-radius: 50%" src="http://student.ouchn.cn/assets/images/placeholder/course.jpg" alt="" />
    <p>text</p>
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
