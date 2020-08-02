<template>
  <div>
    <Topnav />
    <div class="banner">
      <h1>Rei UI</h1>
      <h2>A super impressive UI library</h2>
      <p class="actions">
        <a>GitHub</a>
        <a>Get Started</a>
      </p>
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

<style lang="scss" scoped>
$h: 28px;

.banner {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: lightgreen;
  padding: 100px 0;

  h1,
  h2 {
    margin: 0.5rem;
  }

  .actions {
    padding: 8px 0;

    a {
      margin: 0 8px;
      background: #fff;
      display: inline-block;
      height: $h;
      line-height: $h;
      border-radius: $h / 2;
      padding: 0 8px;
    }
  }
}
</style>


