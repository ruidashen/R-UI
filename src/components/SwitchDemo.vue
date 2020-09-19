<template>
  <div>
    <h1>Switch</h1>
    <Demo :component="Switch1" />
    <Demo :component="Switch2" />
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
import Switch1 from "./Switch1.demo.vue";
import Switch2 from "./Switch2.demo.vue";
import Demo from "./Demo.vue";
import { ref } from "vue";
export default {
  components: {
    Button,
    Demo,
  },
  setup() {
    const bool = ref(false);
    return {
      bool,
      Switch1,
      Switch2,
    };
  },
};
</script>
