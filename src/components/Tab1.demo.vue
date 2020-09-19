<demo>
Tabs demo
</demo>
<template>
  <Tabs v-model:selected="x">
    <Tab title="nav1">Content 1</Tab>
    <Tab title="nav22222222222222222">Content 2</Tab>
  </Tabs>
</template>
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
