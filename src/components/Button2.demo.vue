<demo>
Different sizes
</demo>
<template>
  <div>
    <Button size="big">Big Button</Button>
    <Button size="normal">normal</Button>
    <Button size="small">sm</Button>
    <br />
    <br />
    <Button size="big" theme="link">Big Button</Button>
    <Button size="normal" theme="link">normal</Button>
    <Button size="small" theme="link">sm</Button>
    <br />
    <br />
    <Button size="big" theme="text">Big Button</Button>
    <Button size="normal" theme="text">normal</Button>
    <Button size="small" theme="text">sm</Button>
  </div>
</template>
<script>
import Button from "../lib/Button.vue";
export default {
  components: {
    Button,
  },
};
</script>
