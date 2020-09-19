<demo>
Disabled buttons
</demo>
<template>
  <div>
    <Button disabled>Disabled</Button>
    <Button :disabled="true">Disabled</Button>
    <br />
    <br />
    <Button theme="link" level="main" disabled>Main Link</Button>
    <Button theme="link" level="danger" disabled>Danger Link</Button>
    <br />
    <br />
    <Button theme="text" level="main" disabled>Main Text</Button>
    <Button theme="text" level="danger" disabled>Danger Text</Button>
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
