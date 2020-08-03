<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import { ref, provide } from "vue";
export default {
  name: "App",
  setup() {
    // show aside by default on large device.
    const deviceWidth = document.documentElement.clientWidth;
    const asideVisible = ref(deviceWidth <= 500 ? false : true);
    provide("asideVisible", asideVisible);
  },
};
</script>
