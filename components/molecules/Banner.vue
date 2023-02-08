<template>
  <div>
    <b-card text-variant="white" class="card-banner">
      <b-card-text>
        <div class="row">
          <div class="col-8">
            <div class="font-weight-bold title">
              Hello Rangie! Welcome back.
            </div>
            <div v-if="false" class="mt-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
              veniam sunt quasi suscipit totam non reiciendis ullam.
            </div>
          </div>
          <div class="col-4 d-flex justify-content-center">
            <b-img src="@/static/bighead.svg" height="160" />
          </div>
        </div>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.card-banner {
  background-color: #5066fd;
  border-color: transparent;
  border-radius: 8px;
}

.title {
    font-size: 28px;
}
</style>
