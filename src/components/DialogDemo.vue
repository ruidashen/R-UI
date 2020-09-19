<template>
  <h1>Dialog</h1>
  <Demo :component="Dialog1" />
  <Demo :component="Dialog2" />
</template>

<script>
import Dialog1 from "./Dialog1.demo.vue";
import Dialog2 from "./Dialog2.demo.vue";
import Demo from "./Demo.vue";
export default {
  components: {
    Demo,
  },
  setup() {
    return {
      Dialog1,
      Dialog2,
    };
  },
};
</script>
