<template>
  <h1>Button</h1>
  <Demo :component="Button1" />
  <Demo :component="Button2" />
  <Demo :component="Button3" />
  <Demo :component="Button4" />
  <Demo :component="Button5" />
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
import Button1 from "./Button1.demo.vue";
import Button2 from "./Button2.demo.vue";
import Button3 from "./Button3.demo.vue";
import Button4 from "./Button4.demo.vue";
import Button5 from "./Button5.demo.vue";
import Demo from "./Demo.vue";
export default {
  components: {
    Button,
    Demo,
  },
  setup() {
    return {
      Button1,
      Button2,
      Button3,
      Button4,
      Button5,
    };
  },
};
</script>
