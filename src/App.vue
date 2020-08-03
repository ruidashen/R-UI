<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import { ref, provide } from "vue";
import { router } from "./router";
export default {
  name: "App",
  setup() {
    // show aside by default on large device.
    const deviceWidth = document.documentElement.clientWidth;
    const asideVisible = ref(deviceWidth <= 500 ? false : true);
    provide("asideVisible", asideVisible);

    // Hide aside after each route switch on mobile
    router.afterEach(() => {
      if (deviceWidth <= 500) {
        asideVisible.value = false;
      }
    });
  },
};
</script>
