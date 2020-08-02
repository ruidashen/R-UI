<template>
  <div>
    <div class="topnav">
      <div class="logo">Logo</div>
      <ul class="menu">
        <li>item 1</li>
        <li>item 2</li>
      </ul>
    </div>
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

<style lang="scss" scoped>
.topnav {
  background: pink;
  display: flex;
  padding: 16px;

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
    }
  }
}
</style>
