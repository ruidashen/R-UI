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
    const asideVisible = ref(false);
    provide("asideVisible", asideVisible);
  },
};
</script>
