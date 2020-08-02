<template>
  <div>
    <Topnav />
    <div class="content">
      <aside v-if="asideVisible">
        <h2>Components</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs</router-link>
          </li>
        </ol>
      </aside>
      <main>Main</main>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
import { Ref, inject } from "vue";
export default {
  components: {
    Topnav,
  },
  setup() {
    const asideVisible = inject<Ref<boolean>>("xxx");
    console.log("Doc's aside visible: " + asideVisible.value);
    return { asideVisible };
  },
};
</script>

<style lang="scss" scoped>
aside {
  background-color: lightblue;
  width: 160px;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  > h2 {
    margin-bottom: 4px;
  }

  > ol {
    > li {
      padding: 4px;
    }
  }
}
</style>