<template>
  <div id="app">
    <div id="nav">
      <router-link class="nav-item" to="/">Home</router-link> |
      <router-link class="nav-item" to="/projects">Projects</router-link> |
      <router-link class="nav-item" to="/cv">Curriculum vitae</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.nav-item {
  display: flex;
  padding-left: 2px;
  padding-right: 2px;
}

.button {
  padding: 2px;
}
</style>
