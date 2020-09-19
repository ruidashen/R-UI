<template>
  <h1>Tabs</h1>
  <Demo :component="Tab1" />
</template>

<script>
import Demo from "./Demo.vue";
import Tab1 from "./Tab1.demo.vue";
export default {
  components: {
    Demo,
  },
  setup() {
    return {
      Tab1,
    };
  },
};
</script>
