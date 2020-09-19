<template>
  <div class="top-nav-and-banner">
    <Topnav />
    <div class="banner">
      <h1>R UI</h1>
      <h2>A super impressive UI library</h2>
      <p class="actions">
        <a href="https://github.com/ruidashen/R-UI">GitHub</a>
        <router-link to="/doc/">Get Started</router-link>
      </p>
    </div>
  </div>
  <div class="features">
    <ul>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-Vue" />
        </svg>
        <h3>Based on Vue 3.0</h3>
        <p>Prodly using Vue 3 Composition APIs.</p>
      </li>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-typescript" />
        </svg>
        <h3>Based on TypeScript</h3>
        <p>Source code is entirely written in TypeScript (non-strict mode).</p>
      </li>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-dengpao" />
        </svg>
        <h3>Easy readablity</h3>
        <p>Clean and understandable source code and docs.</p>
      </li>
    </ul>
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
$border-radius: 4px;
.top-nav-and-banner {
  background: rgb(85, 77, 171);
  background: linear-gradient(
    0deg,
    rgba(85, 77, 171, 1) 0%,
    rgba(99, 85, 250, 1) 100%
  );
  clip-path: ellipse(80% 60% at 50% 40%);
}
.banner {
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 100px 0;

  h1,
  h2 {
    margin: 0.5rem;
  }

  .actions {
    padding: 8px 0;

    a {
      margin: 0 8px;
      background: #fea701;
      display: inline-block;
      border-radius: $border-radius;
      padding: 8px 24px;
      &:hover {
        text-decoration: none;
      }
    }
  }
}

.features {
  margin: 64px auto;
  padding: 0 16px;
  h3,
  p {
    color: black;
  }

  > ul {
    display: flex;
    flex-wrap: wrap;
    > li {
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;

      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      > h3 {
        grid-area: title;
        font-size: 28px;
      }

      > p {
        grid-area: text;
      }
    }
  }

  @media (min-width: 800px) {
    width: 800px;

    > ul {
      > li {
        width: 50%;
      }
    }
  }
  @media (min-width: 1200px) {
    width: 1200px;

    > ul {
      > li {
        width: 33.3333%;
      }
    }
  }
}
</style>
