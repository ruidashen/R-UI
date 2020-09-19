<demo>
Different levels
</demo>
<template>
  <div>
    <Button>Normal</Button>
    <Button level="main">Main</Button>
    <Button level="danger">Danger</Button>
    <br />
    <br />
    <Button theme="link">Normal</Button>
    <Button theme="link" level="main">Main Link</Button>
    <Button theme="link" level="danger">Danger Link</Button>
    <br />
    <br />
    <Button theme="text">Normal</Button>
    <Button theme="text" level="main">Main Text</Button>
    <Button theme="text" level="danger">Danger Text</Button>
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
