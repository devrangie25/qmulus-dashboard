<template>
  <div class="row">
    <div class="col-lg-8">
      <div class="row">
        <div class="col-12 mb-4">
          <cm-banner />
        </div>
        <div class="col-12 mb-4">
          <div class="row mb-4">
            <div v-if="['sm', 'xs'].includes(screenSize)" class="col-12" :class="['sm', 'xs'].includes(screenSize) ? 'mb-4' : ''">
              <b-card
                text-variant="white"
                header="Current Time"
                class="text-center card-corp"
                style="height: 100%; background-color: #439a97"
              >
                <b-card-text>
                  <div>
                    {{ currentTime }}
                  </div>
                </b-card-text>
              </b-card>
            </div>
            <div class="col-md-4" :class="['sm', 'xs'].includes(screenSize) ? 'mb-4' : ''">
              <cm-widget header="Local CPU Usage %" :usage="20" />
            </div>
            <div class="col-md-4" :class="['sm', 'xs'].includes(screenSize) ? 'mb-4' : ''">
              <cm-widget header="Local Memory Usage %" :usage="80" />
            </div>
            <div class="col-md-4" :class="['sm', 'xs'].includes(screenSize) ? 'mb-4' : ''">
              <cm-widget header="Local Array Usage %" :usage="45" />
            </div>
            <div v-if="['sm', 'xs'].includes(screenSize)" class="col-12" :class="['sm', 'xs'].includes(screenSize) ? 'mb-4' : ''">
              <cm-widget header="Upload Speed" :usage="90" />
            </div>
            <div v-if="['sm', 'xs'].includes(screenSize)" class="col-12" :class="['sm', 'xs'].includes(screenSize) ? 'mb-4' : ''">
              <cm-widget header="Download Speed" :usage="60" />
            </div>
            <div v-if="['sm', 'xs'].includes(screenSize)" class="col-12" :class="['sm', 'xs'].includes(screenSize) ? 'mb-4' : ''">
              <cm-widget header="Server Uptime" :usage="90" />
            </div>
            <div v-if="['sm', 'xs'].includes(screenSize)" class="col-12" :class="['sm', 'xs'].includes(screenSize) ? 'mb-4' : ''">
              <cm-widget header="Server Status" :usage="'Online'" />
            </div>
            <div v-if="['sm', 'xs'].includes(screenSize)" class="col-12">
              <cm-widget header="Cloud Storage Status" :usage="'Online'" />
            </div>
          </div>
          <div class="row">
            <div class="col-md-6" :class="['sm', 'xs'].includes(screenSize) ? 'mb-4' : ''">
              <cm-widget header="Cloud Storage Usage %" :usage="80" />
            </div>
            <div class="col-md-6">
              <cm-widget header="AI Accuracy %" :usage="80" />
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="row">
            <div class="col-12 mb-4" style="height: 400px">
              <b-card
                text-variant="dark"
                class="text-center card-corp"
                style="height: 100%"
              >
                <cm-chartjs-line
                  :chartData="lineChartData"
                  :chartOptions="lineChartOptions"
                  :height="350"
                  :width="350"
                />
              </b-card>
            </div>
            <div class="col-12" :class="['sm', 'xs'].includes(screenSize) ? 'mb-4' : ''" style="height: 400px">
              <b-card
                text-variant="dark"
                class="text-center card-corp"
                style="height: 100%"
              >
                <cm-chartjs-bar
                  :chartData="barChartData"
                  :chartOptions="barChartOptions"
                  :height="350"
                  :width="350"
                />
              </b-card>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-4">
      <div v-if="!['sm', 'xs'].includes(screenSize)" class="row mb-4" style="height: 120px">
        <div class="col-12">
          <b-card
            text-variant="white"
            header="Current Time"
            class="text-center card-corp"
            style="height: 100%; background-color: #439a97"
          >
            <b-card-text>
              <div>
                {{ currentTime }}
              </div>
            </b-card-text>
          </b-card>
        </div>
      </div>
      <div v-if="!['sm', 'xs'].includes(screenSize)" class="row mb-4" style="height: 130px">
        <div class="col-6">
          <cm-widget header="Upload Speed" :usage="90" />
        </div>
        <div class="col-6">
          <cm-widget header="Download Speed" :usage="60" />
        </div>
      </div>
      <div v-if="!['sm', 'xs'].includes(screenSize)" class="row mb-4" style="height: 130px">
        <div class="col-6">
          <cm-widget header="Server Uptime" :usage="90" />
        </div>
        <div class="col-6">
          <cm-widget header="Server Status" :usage="'Online'" />
        </div>
      </div>
      <div v-if="!['sm', 'xs'].includes(screenSize)" class="row mb-4" style="height: 130px">
        <div class="col-12">
          <cm-widget header="Cloud Storage Status" :usage="'Online'" />
        </div>
      </div>
      <div class="row mb-4" style="height: 360px">
        <div class="col-12">
          <b-card
            text-variant="dark"
            class="text-center card-corp"
            style="height: 100%"
          >
            <cm-chartjs-doughnut
              :chartData="doughnutChartData"
              :chartOptions="doughnutChartOptions"
              :height="300"
              :width="300"
            />
          </b-card>
        </div>
      </div>
      <div class="row" style="height: 360px">
        <div class="col-12">
          <b-card
            text-variant="dark"
            class="text-center card-corp"
            style="height: 100%"
          >
            <cm-chartjs-pie
              :chartData="pieChartData"
              :chartOptions="pieChartOptions"
              :height="300"
              :width="300"
            />
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
    return {
      pieChartData: {
        labels: ['Online', 'Offline'],
        datasets: [
          {
            backgroundColor: ['#4FA095', '#f87979'],
            data: [80, 20],
          },
        ],
      },
      pieChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'Overall Server Status',
          },
        },
      },
      lineChartData: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ],
        datasets: [
          {
            label: 'Objects',
            backgroundColor: '#f87979',
            data: [40, 70, 15, 40, 39, 80, 40, 42, 32, 42, 23, 75],
            fill: false,
            tension: 0.5,
          },
        ],
      },
      lineChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'Number of Objects Detected',
          },
        },
      },
      barChartData: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ],
        datasets: [
          {
            label: 'Downloaded Video',
            backgroundColor: '#f87979',
            data: [30, 20, 12, 25, 57, 80, 10, 60, 40, 20, 12, 43],
          },
          {
            label: 'Archived Video',
            backgroundColor: '#4FA095',
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 20, 11],
          },
        ],
      },
      barChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'Total Mins of Video Downloaded/Archived',
          },
        },
      },
      doughnutChartData: {
        labels: ['Online', 'Offline'],
        datasets: [
          {
            backgroundColor: ['#4FA095', '#f87979'],
            data: [80, 20],
          },
        ],
      },
      doughnutChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'Overall Cloud Storage Status',
          },
        },
      },
      screenSize: ''
    }
  },

  created() {
    this.$root.$on('screen-size-changed', (screenSize) => {
      this.screenSize = screenSize
    })
  },

  computed: {
    currentTime() {
      return this.$dayjs().format('HH:mm A - MMMM DD, YYYY')
    },
  },
}
</script>

<style scoped>
.card-corp {
  border-color: transparent;
  border-radius: 8px;
}
</style>
