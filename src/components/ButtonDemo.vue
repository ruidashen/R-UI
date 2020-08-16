<template>
  <div>Button Demo</div>
  <h1>demo 1</h1>
  <div>
    <Button>Button</Button>
    <Button theme="button">Button</Button>
    <Button theme="link">Button</Button>
    <Button theme="text">Button</Button>
  </div>

  <h1>demo 2</h1>
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

  <h1>demo 3</h1>
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

  <h1>demo 4</h1>
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
  <h1>demo 5</h1>
  <div>
    <Button loading>Loading</Button>
    <Button>Loaded</Button>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: {
    Button,
  },
};
</script>