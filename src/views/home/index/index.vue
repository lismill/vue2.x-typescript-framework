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
    <!-- Vuex -->
    <fieldset class="m-b20">
      <legend>Vuex</legend>
      <div class="p-20">
        <div @click="changeVersion">改变版本信息</div>
        <div @click="changeUser">改变用户信息</div>
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
        this.$store.dispatch("user/changeState", [
          { key: "list", value: res.rows },
          { key: "name", value: "leelean" },
        ]);
        console.log("this.$store.state.user", this.$store.state.user);
      })
      .catch((error: any) => console.log(error));
    SetConfig({ id: 1 })
      .then((res: any) => {
        console.log(res);
      })
      .catch((error: any) => console.log(error));
  }

  changeVersion(): void {
    this.$store.commit("common/CHANGE_STATE", [{ key: "version", value: "1.1.1" }]);
    console.log("this.$store.state.common:::", this.$store.state.common);
  }
  changeUser(): void {
    console.log("this.$store.state.user:::", this.$store.state.user);
  }
}
</script>
