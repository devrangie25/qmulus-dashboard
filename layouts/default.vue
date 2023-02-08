<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <div class="col-auto sidebar-container p-4">
        <div class="d-flex min-vh-100">
          <b-nav vertical justified class="nav">
            <b-nav-item active>Active</b-nav-item>
            <b-nav-item>Link</b-nav-item>
            <b-nav-item>Another Link</b-nav-item>
            <b-nav-item disabled>Disabled</b-nav-item>
          </b-nav>
        </div>
      </div>
      <div class="col p-4">
        <Nuxt />
      </div>
    </div>
    <div v-if="false" class="row flex-nowrap">
      <cm-frame-side-bar-left />

      <div class="col px-4">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<style scoped>
#app {
  background-color: #f5f5fc;
}
.sidebar-container {
  background-color: #fefefe;
}

.nav {
  width: 14rem;
}
</style>
