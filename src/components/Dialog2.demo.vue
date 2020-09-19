<demo>
Use dialog via function
</demo>
<template>
  <Button @click="showDialog">Show Dialog</Button>
</template>
<script>
import Button from "../lib/Button.vue";
import { openDialog } from "../lib/openDialog";
import { ref, h } from "vue";
export default {
  components: {
    Button,
  },
  setup() {
    const showDialog = () => {
      openDialog({
        title: h("strong", {}, "Title"),
        content: "Hello",
        ok() {
          console.log("ok");
        },
        cancel() {
          console.log("cancel");
        },
      });
    };
    return { showDialog };
  },
};
</script>
