<demo>
Use dialog via regular component usage
</demo>
<template>
  <Button @click="toggle">toggle</Button>
  <Dialog
    v-model:visible="x"
    :closeOnClickOverlay="false"
    :ok="f1"
    :cancel="f2"
  >
    <template v-slot:content>
      <div>Hello</div>
      <div>Hi</div>
    </template>
    <template v-slot:title>
      <h1>Title</h1>
    </template>
  </Dialog>
</template>
<script>
import Button from "../lib/Button.vue";
import Dialog from "../lib/Dialog.vue";
import { ref } from "vue";
export default {
  components: {
    Button,
    Dialog,
  },
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const f1 = () => console.log("f1");
    const f2 = () => console.log("f2");
    return {
      f1,
      f2,
      x,
      toggle,
    };
  },
};
</script>
