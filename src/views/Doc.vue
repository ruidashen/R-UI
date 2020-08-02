<template>
  <div>
    <Topnav />
    <div class="content">
      <aside>Aside</aside>
      <main>Main</main>
    </div>
  </div>
</template>

<script>
import Topnav from "../components/Topnav.vue";
export default {
  components: {
    Topnav,
  },
};
</script>