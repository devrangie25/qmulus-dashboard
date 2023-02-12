<template>
  <div>
    <div class="row">
      <div class="col-lg-8 mb-4">
        <b-card text-variant="light" class="hero-card card-corp">
          <div class="hero-title">Welcome, Rangie!</div>
          <div> Qmulus Solutions Front End Developer Assessment </div>
        </b-card>
      </div>
      <div class="col-lg-4 mb-4">
        <b-card
          text-variant="white"
          class="text-center card-corp"
          style="height: 100%;"
        >
          <b-card-text class="center-text">
            <div>
              {{ currentTime }}
            </div>
          </b-card-text>
        </b-card>
      </div>
    </div>
    <div class="row mb-4">
      <div class="col">
        <cm-apexjs-apex-chart-dynamic
          type="area"
          :chartOptions="chartOptions1"
          :series="chartSeries1"
          height="280"
        />
      </div>
    </div>
    <div class="row mb-4">
      <div
        class="col-lg-4"
        :class="['sm', 'xs', 'md'].includes(screenSize) ? 'mb-4' : ''"
      >
        <cm-apexjs-apex-chart-dynamic
          :series="chartSeries2"
          :chartOptions="chartOptions2"
          height="280"
          type="bar"
        />
      </div>
      <div
        class="col-lg-4"
        :class="['sm', 'xs', 'md'].includes(screenSize) ? 'mb-4' : ''"
      >
        <cm-apexjs-apex-chart-dynamic
          :series="chartSeries3"
          :chartOptions="chartOptions3"
          type="bar"
          height="280"
        />
      </div>
      <div class="col-lg-4">
        <cm-apexjs-apex-chart-dynamic
          v-if="false"
          :series="chartSeries4"
          :chartOptions="chartOptions4"
          type="radialBar"
          :height="'315'"
        />
        <b-card
          text-variant="dark"
          class="text-center card-corp"
          style="height: 100%"
        >
          <div class="row mt-3">
            <div class="col-lg-6">
              <ApexCharts
                :series="chartSeries4A"
                :options="chartOptions4A"
                type="radialBar"
                :height="'280'"
                :width="'100%'"
              />
            </div>
            <div class="col-lg-6">
              <ApexCharts
                :series="chartSeries4B"
                :options="chartOptions4B"
                type="radialBar"
                :height="'280'"
                :width="'100%'"
              />
            </div>
          </div>
        </b-card>
      </div>
    </div>
    <div class="row">
      <div
        class="col-lg-6"
        :class="['sm', 'xs', 'md'].includes(screenSize) ? 'mb-4' : ''"
      >
        <cm-apexjs-apex-chart-dynamic
          type="line"
          :chartOptions="chartOptions5"
          :series="chartSeries5"
          :height="'280'"
        />
      </div>
      <div class="col-lg-6">
        <b-card
          text-variant="dark"
          class="text-center card-corp"
          style="height: 100%"
        >
          <div class="row">
            <div
              v-for="(item, i) in statuses"
              :key="i"
              class="col-lg-3"
              :class="['sm', 'xs', 'md'].includes(screenSize) ? 'mb-4' : ''"
            >
              <b-card
                text-variant="white"
                class="text-center widget-card"
                style="height: 290px; width: 100%"
              >
                <div class="widget-card-text-container">
                  <div class="widget-card-text">{{ item.status }}</div>
                  <div class="widget-card-text-subtitle">{{ item.title }}</div>
                </div>
              </b-card>
            </div>
          </div>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Apex-Dashboard',
  data() {
    return {
      chartSeries1: [
        {
          name: 'CPU Usage %',
          data: this.generateDayWiseTimeSeries(
            new Date('11 Feb 2017 GMT').getTime(),
            20,
            {
              min: 10,
              max: 60,
            }
          ),
        },
        {
          name: 'Memory Usage %',
          data: this.generateDayWiseTimeSeries(
            new Date('11 Feb 2017 GMT').getTime(),
            20,
            {
              min: 10,
              max: 20,
            }
          ),
        },
        {
          name: 'Array Usage(HDD Storage) %',
          data: this.generateDayWiseTimeSeries(
            new Date('11 Feb 2017 GMT').getTime(),
            20,
            {
              min: 10,
              max: 15,
            }
          ),
        },
        {
          name: 'Cloud Storage Usage %',
          data: this.generateDayWiseTimeSeries(
            new Date('11 Feb 2017 GMT').getTime(),
            20,
            {
              min: 10,
              max: 15,
            }
          ),
        },
      ],

      chartOptions1: {
        chart: {
          background: '#363841',
          type: 'area',
          height: 350,
          stacked: true,
          events: {
            selection: function (chart, e) {
              console.log(new Date(e.xaxis.min))
            },
          },
        },
        colors: ['#008FFB', '#00E396', '#f9b018', '#4dcdc4'],
        dataLabels: {
          enabled: false,
        },
        theme: {
          mode: 'dark',
        },
        stroke: {
          curve: 'smooth',
        },
        tooltip: {
          theme: 'dark',
        },
        fill: {
          type: 'solid',
          gradient: {
            opacityFrom: 0.6,
            opacityTo: 0.8,
          },
        },
        legend: {
          position: 'top',
          horizontalAlign: 'left',
        },
        xaxis: {
          type: 'datetime',
        },
      },

      chartSeries2: [
        {
          name: 'Total Video Downloaded',
          data: [44, 55, 41, 67, 22, 43],
        },
        {
          name: 'Total Video Archived',
          data: [13, 23, 20, 8, 13, 27],
        },
      ],

      chartOptions2: {
        chart: {
          background: '#363841',
          type: 'bar',
          height: 350,
          stacked: true,
          toolbar: {
            show: true,
          },
          zoom: {
            enabled: true,
          },
        },
        theme: {
          mode: 'dark',
        },
        tooltip: {
          theme: 'dark',
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0,
              },
            },
          },
        ],
        plotOptions: {
          bar: {
            horizontal: false,
            dataLabels: {
              total: {
                enabled: true,
                style: {
                  fontSize: '13px',
                  fontWeight: 900,
                },
              },
            },
          },
        },
        xaxis: {
          type: 'datetime',
          categories: [
            '01/01/2011 GMT',
            '01/02/2011 GMT',
            '01/03/2011 GMT',
            '01/04/2011 GMT',
            '01/05/2011 GMT',
            '01/06/2011 GMT',
          ],
        },
        legend: {
          position: 'bottom',
          offsetY: 10,
        },
        fill: {
          opacity: 1,
        },
      },

      chartSeries3: [
        {
          name: 'No. of Malware Detected',
          data: [44, 55, 41, 37, 22, 43, 21],
        },
        {
          name: 'No. of Objects Detected',
          data: [53, 32, 33, 52, 13, 43, 32],
        },
      ],

      chartOptions3: {
        chart: {
          background: '#363841',
          type: 'bar',
          height: 350,
          stacked: true,
          dropShadow: {
            enabled: true,
            blur: 1,
            opacity: 0.25,
          },
        },
        tooltip: {
          theme: 'dark',
        },
        theme: {
          mode: 'dark',
        },
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: '60%',
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: 2,
        },
        xaxis: {
          categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
        },
        yaxis: {
          title: {
            text: undefined,
          },
        },
        tooltip: {
          shared: false,
          y: {
            formatter: function (val) {
              return val + 'K'
            },
          },
        },
        fill: {
          type: 'solid',
          opacity: 1,
        },
        states: {
          hover: {
            filter: 'none',
          },
        },
        legend: {
          position: 'bottom',
          offsetY: 10,
        },
      },

      chartSeries4A: [80],

      chartOptions4A: {
        chart: {
          height: 350,
          background: '#363841',
          type: 'radialBar',
        },
        colors: ['#008FFB'],
        theme: {
          mode: 'dark',
        },
        tooltip: {
          theme: 'dark',
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '70%',
            },
          },
        },
        labels: ['AI Accuracy'],
      },

      chartSeries4B: [60],

      chartOptions4B: {
        chart: {
          height: 350,
          background: '#363841',
          type: 'radialBar',
        },
        colors: ['#008FFB'],
        theme: {
          mode: 'dark',
        },
        tooltip: {
          theme: 'dark',
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '70%',
            },
          },
        },
        labels: ['Cloud Stoage Usage'],
      },

      chartSeries5: [
        {
          name: 'Uptime',
          type: 'area',
          data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
        },
        {
          name: 'Downtime',
          type: 'area',
          data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
        },
      ],

      chartOptions5: {
        chart: {
          background: '#363841',
          height: 350,
          type: 'line',
          stacked: false,
        },
        colors: ['#4dcdc4', '#f9b018'],
        title: {
          text: 'Server Uptime',
        },
        stroke: {
          width: [0, 2, 5],
          curve: 'straight',
        },
        theme: {
          mode: 'dark',
        },
        tooltip: {
          theme: 'dark',
        },
        plotOptions: {
          bar: {
            columnWidth: '50%',
          },
        },

        fill: {
          opacity: [0.85, 0.25, 1],
          gradient: {
            inverseColors: false,
            shade: 'light',
            type: 'vertical',
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 100, 100, 100],
          },
        },
        labels: [
          '01/01/2022',
          '02/01/2022',
          '03/01/2022',
          '04/01/2022',
          '05/01/2022',
          '06/01/2022',
          '07/01/2022',
          '08/01/2022',
          '09/01/2022',
          '10/01/2022',
          '11/01/2022',
        ],
        markers: {
          size: 0,
        },
        xaxis: {
          type: 'datetime',
        },
        yaxis: {
          title: {
            text: 'Milliseconds',
          },
          min: 0,
        },
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter: function (y) {
              if (typeof y !== 'undefined') {
                return y.toFixed(0) + ' ms'
              }
              return y
            },
          },
        },
      },

      statuses: [
        {
          title: 'Server',
          status: 'Online',
        },
        {
          title: 'Cloud',
          status: 'Online',
        },
        {
          title: 'Download Speed',
          status: '75%',
        },
        {
          title: 'Upload Speed',
          status: '50%',
        },
      ],

      screenSize: '',
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

  methods: {
    generateDayWiseTimeSeries(baseval, count, yrange) {
      var i = 0
      var series = []
      while (i < count) {
        var x = baseval
        var y =
          Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min

        series.push([x, y])
        baseval += 86400000
        i++
      }
      return series
    },
  },
}
</script>

<style scoped>
.hero-card {
  background-color: #363841;
}
.hero-title {
  font-size: 24px;
  font-weight: bold;
}
.card-corp {
  border-color: transparent;
  border-radius: 8px;
  background-color: #363841;
}

.widget-card {
  border-color: transparent;
  border-radius: 8px;
  background-color: #202430;
}

.widget-card-text-container, .center-text {
  display: grid;
  place-content: center;
  height: 100%;
}

.widget-card-text {
  font-size: 20px;
  font-weight: bold;
}

.pie-graph {
  display: grid;
  place-content: center;
  height: 100%;
}

.widget-card-text-subtitle {
  font-size: 14px;
}
</style>
