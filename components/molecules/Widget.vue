<template>
  <b-card
    bg-variant="white"
    text-variant="dark"
    header-bg-variant="white"
    :header="header"
    class="text-center card-corp"
    style="height: 100%"
  >
    <b-card-text class="widget-body">
      <div class="widget-text">
        <span>
          {{ usage }}<span v-if="showPercent">{{ '%' }}</span>
        </span>
        <b-icon :variant="widgetIconVariant" :icon="widgetIcon"></b-icon>
      </div>
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  name: 'Widget',
  props: {
    header: {
      type: String,
      default: 'Local CPU Usage %',
      required: false,
    },
    usage: {
      type: [Number, String],
      default: 50,
      required: false,
    },
  },

  computed: {
    widgetIcon() {
      if (['Server Status', 'Cloud Storage Status'].includes(this.header)) {
        return this.usage === 'Online' ? 'arrow-up' : 'arrow-down'
      }
      return this.usage >= 60
        ? 'arrow-up'
        : this.usage >= 45
        ? 'dash'
        : 'arrow-down'
    },

    showPercent() {
      if (['Server Status', 'Cloud Storage Status'].includes(this.header)) {
        return false
      }
      return true
    },

    widgetIconVariant() {
      if (['AI Accuracy %', 'Upload Speed', 'Download Speed', 'Server Uptime'].includes(this.header)) {
        return this.usage >= 60
          ? 'success'
          : this.usage >= 45
          ? 'info'
          : 'danger'
      }
      if (['Server Status', 'Cloud Storage Status'].includes(this.header)) {
        return this.usage === 'Online' ? 'success' : 'danger'
      }
      return this.usage >= 60
        ? 'danger'
        : this.usage >= 45
        ? 'warning'
        : 'success'
    },
  },
}
</script>

<style scoped>
.card-crop {
  border-color: transparent;
  border-radius: 8px;
}
.widget-text {
  font-size: 24px;
  font-weight: bold;
}

.widget-body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
