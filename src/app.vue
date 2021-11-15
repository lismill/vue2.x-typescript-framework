<template>
  <div id="app">
    <!-- 缓存的视图组件 -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <!-- 不被缓存的视图组件-->
    <router-view v-if="!$route.meta.keepAlive" />
  </div>
</template>
