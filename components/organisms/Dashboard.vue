<template>
  <div class="row">
    <div class="col-8">
      <div class="row">
        <div class="col-12 mb-4">
          <cm-banner />
        </div>
        <div class="col-12 mb-4">
          <div class="row mb-4">
            <div v-for="(item, x) in 3" :key="x" class="col-4">
              <b-card
                bg-variant="success"
                text-variant="white"
                header="Primary"
                class="text-center"
                style="height: 100%"
              >
                <b-card-text
                  >Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.</b-card-text
                >
              </b-card>
            </div>
          </div>
          <div class="row">
            <div v-for="(item, y) in 2" :key="y" class="col-6">
              <b-card
                bg-variant="info"
                text-variant="white"
                header="Primary"
                class="text-center"
                style="height: 100%"
              >
                <b-card-text
                  >Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.</b-card-text
                >
              </b-card>
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="row">
            <div class="col-12 mb-4" style="height: 170px">
              <b-card
                bg-variant="warning"
                text-variant="white"
                header="Primary"
                class="text-center"
                style="height: 100%"
              >
                <b-card-text
                  >Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.</b-card-text
                >
              </b-card>
            </div>
            <div class="col-12" style="height: 170px">
              <b-card
                bg-variant="warning"
                text-variant="white"
                header="Primary"
                class="text-center"
                style="height: 100%"
              >
                <b-card-text
                  >Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.</b-card-text
                >
              </b-card>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-4">
      <div class="row mb-4" style="height: 202px">
        <div v-for="(item, k) in 2" :key="k" class="col-6">
          <b-card
            bg-variant="secondary"
            text-variant="white"
            header="Primary"
            class="text-center"
            style="height: 100%"
          >
            <b-card-text
              >Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.</b-card-text
            >
          </b-card>
        </div>
      </div>
      <div class="row mb-4" style="height: 301px">
        <div class="col-12">
          <b-card
            bg-variant="danger"
            text-variant="white"
            header="Primary"
            class="text-center"
            style="height: 100%"
          >
            <b-card-text
              >Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.</b-card-text
            >
          </b-card>
        </div>
      </div>
      <div class="row" style="height: 365px">
        <div class="col-12">
          <b-card
            bg-variant="dark"
            text-variant="white"
            header="Primary"
            class="text-center"
            style="height: 100%"
          >
            <b-card-text
              >Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.</b-card-text
            >
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {}
  },

  mounted() {
    this.fetchData()
  },

  methods: {
    async fetchData() {
      const data = await this.$axios.$get('static/dashboard.json')
      console.log('data? ', data)
    },
  },
}
</script>

<style scoped></style>
