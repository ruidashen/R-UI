<template>
  <button @click="toggle" class="rui-switch" :class="{'rui-checked':value}">
    <span></span>
  </button>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  props: {
    value: Boolean,
  },
  setup(props, context) {
    const toggle = () => {
      context.emit("update:value", !props.value);
    };
    return {
      toggle,
    };
  },
};
</script>


<style lang="scss">
$h: 22px;
$h2: $h - 4px;

.rui-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background-color: grey;
  border-radius: $h / 2;
  position: relative;

  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2 / 2;
    transition: all 250ms;
  }
}

.rui-switch.rui-checked {
  background-color: #1890ff;

  > span {
    left: calc(100% - #{$h2} - 2px);

    &:active {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}

.rui-switch:focus {
  outline: none;

  > span:active {
    width: $h2 + 4px;
  }
}
</style>