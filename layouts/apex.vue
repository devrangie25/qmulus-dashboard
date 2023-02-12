<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <div
        v-if="!['sm', 'xs', 'md'].includes(screenSize)"
        class="col-auto sidebar-container p-4"
      >
        <div class="d-flex min-vh-100">
          <cm-frame-apex-side-bar-left />
        </div>
      </div>
      <div class="col p-4">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      window: {
        width: 0,
        height: 0,
      },
      screenSize: '',
    }
  },

  created() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },

  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },

  watch: {
    window: {
      handler: function (val) {
        let screenSize = this.getScreenSize(val.width)
        this.screenSize = screenSize
        this.$root.$emit('screen-size-changed', screenSize)
      },
      deep: true,
    },
  },

  methods: {
    handleResize() {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
    },

    getScreenSize(width) {
      if (width < 576) {
        return 'xs'
      }
      if (width >= 576 && width < 768) {
        return 'sm'
      }
      if (width >= 768 && width < 992) {
        return 'md'
      }
      if (width >= 992 && width < 1200) {
        return 'lg'
      }
      if (width >= 1200) {
        return 'xl'
      }
    },
  },
}
</script>

<style scoped>
#app {
  background-color: #282b33;
}
.sidebar-container {
  /* background-color: #282A3A; */
  /* background-color: #202430; */
  background-color: #363841;
}

.nav {
  width: 3rem;
  text-align: center;
}
</style>
