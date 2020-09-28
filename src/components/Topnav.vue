<template>
  <div class="topnav" :class="{ 'with-background': isInDocs }" ref="topnav">
    <router-link to="/" class="logo">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-shanguang" />
      </svg>
    </router-link>
    <ul class="menu">
      <li>
        <router-link to="/doc/switch">Docs</router-link>
      </li>
    </ul>
    <svg v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleMenu">
      <use xlink:href="#icon-menu" />
    </svg>
  </div>
</template>

<script lang="ts">
import { inject, onMounted, ref, Ref, watchEffect } from "vue";
export default {
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const topnav = ref<HTMLDivElement>(null);
    const asideVisible = inject<Ref<boolean>>("asideVisible");
    const toggleMenu = () => {
      asideVisible.value = !asideVisible.value;
    };
    const isInDocs = ref(false);
    onMounted(() => {
      console.log(topnav);
      isInDocs.value = topnav.value.getBoundingClientRect().width <= 500;
    });

    return { toggleMenu, isInDocs, topnav };
  },
};
</script>

<style lang="scss" scoped>
.topnav.with-background {
  background: rgb(85, 77, 171);
  background: linear-gradient(
    0deg,
    rgba(85, 77, 171, 1) 0%,
    rgba(99, 85, 250, 1) 100%
  );
}
.topnav {
  .with-background {
    background: rgb(85, 77, 171);
    background: linear-gradient(
      0deg,
      rgba(85, 77, 171, 1) 0%,
      rgba(99, 85, 250, 1) 100%
    );
  }
  .logo svg {
    width: 32px;
    height: 32px;
    color: #fea701;
  }
  display: flex;
  padding: 16px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      margin: 0 1em;
      > a {
        color: #fea701;
      }
    }
  }

  > .toggleAside {
    display: inline-block;
    width: 32px;
    height: 24px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
    background: white;
  }

  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>
