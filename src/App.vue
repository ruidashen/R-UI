<template>
  <div>
    Nav Bar |
    <router-link to="/">Ruida</router-link>|
    <router-link to="/doc">Ruida 2</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
