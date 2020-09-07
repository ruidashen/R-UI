<template>
  <div>Tabs Demo</div>
  <h1>Demo 1</h1>
  <Tabs v-model:selected="x">
    <Tab title="nav1">Content 1</Tab>
    <Tab title="nav22222222222222222">Content 2</Tab>
  </Tabs>
</template>2

<script>
import Tab from "../lib/Tab.vue";
import Tabs from "../lib/Tabs.vue";
import { ref } from "vue";
export default {
  components: {
    Tabs,
    Tab,
  },
  setup() {
    const x = ref("nav1");
    return { x };
  },
};
</script>