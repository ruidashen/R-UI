<template>
  <div>Dialog Demo</div>
  <h1>Demo 1</h1>
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

  <h1>Demo 2</h1>
  <Button @click="showDialog">Show Dialog</Button>
</template>

<script>
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { openDialog } from "../lib/openDialog";
import { ref } from "vue";
export default {
  components: {
    Dialog,
    Button,
  },
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const f1 = () => {
      console.log("f1");
    };
    const f2 = () => {
      console.log("f2");
    };
    const showDialog = () => {
      openDialog({
        title: "Title",
        content: "Hello There",
        ok() {
          console.log("ok");
        },
        cancel() {
          console.log("cancel");
        },
      });
    };
    return { x, toggle, f1, f2, showDialog };
  },
};
</script>
