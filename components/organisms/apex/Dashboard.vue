<template>
  <div>
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
      <div class="col-lg-4">
        <cm-apexjs-apex-chart-dynamic
          :series="chartSeries2"
          :chartOptions="chartOptions2"
          height="280"
          type="bar"
        />
      </div>
      <div class="col-lg-4">
        <cm-apexjs-apex-chart-dynamic
          :series="chartSeries3"
          :chartOptions="chartOptions3"
          type="bar"
          height="280"
        />
      </div>
      <div class="col-lg-4">
        <cm-apexjs-apex-chart-dynamic
          :series="chartSeries4"
          :chartOptions="chartOptions4"
          type="radialBar"
        />
        <!-- <b-card
          text-variant="dark"
          class="text-center card-corp"
          style="height: 100%"
        >
          <div class="row mt-2">
            <div class="col-6">
              <ApexCharts
                type="radialBar"
                :height="'280'"
                :options="chartOptions4A"
                :series="chartSeries4A"
              ></ApexCharts>
            </div>
            <div class="col-6">
              <ApexCharts
                type="radialBar"
                :height="'280'"
                :options="chartOptions4A"
                :series="chartSeries4A"
              ></ApexCharts>
            </div>
          </div>
        </b-card> -->
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
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
            <div v-for="i in 4" :key="i" class="col-lg-3">
              <b-card
                text-variant="white"
                class="text-center widget-card"
                style="height: 290px; width: 100%"
              >
                <div class="widget-card-text-container">
                  <div class="widget-card-text">12.98%</div>
                </div>
              </b-card>
            </div>
          </div>
        </b-card>
        <!-- <cm-apexjs-apex-chart-dynamic height="280" /> -->
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
          name: 'South',
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
          name: 'North',
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
          name: 'Central',
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
        colors: ['#008FFB', '#00E396', '#f9b018'],
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
          name: 'A',
          data: [44, 55, 41, 67, 22, 43],
        },
        {
          name: 'B',
          data: [13, 23, 20, 8, 13, 27],
        },
        {
          name: 'C',
          data: [11, 17, 15, 15, 21, 14],
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
          position: 'right',
          offsetY: 40,
        },
        fill: {
          opacity: 1,
        },
      },

      chartSeries3: [
        {
          name: 'Marine Sprite',
          data: [44, 55, 41, 37, 22, 43, 21],
        },
        {
          name: 'Striking Calf',
          data: [53, 32, 33, 52, 13, 43, 32],
        },
        {
          name: 'Tank Picture',
          data: [12, 17, 11, 9, 15, 11, 20],
        },
        {
          name: 'Bucket Slope',
          data: [9, 7, 5, 8, 6, 9, 4],
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
        title: {
          text: 'Compare Sales Strategy',
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
          position: 'right',
          offsetY: 40,
        },
      },

      // chartSeries4A: [70],
      chartSeries4: [76, 67, 61, 90],

      chartOptions4: {
        chart: {
          background: '#363841',
          height: 390,
          type: 'radialBar',
        },
        theme: {
          mode: 'dark'
        },
        tooltip: {
          theme: 'dark',
        },
        plotOptions: {
          radialBar: {
            offsetY: 15,
            startAngle: 0,
            endAngle: 270,
            hollow: {
              margin: 5,
              size: '30%',
              background: 'transparent',
              image: undefined,
            },
            dataLabels: {
              name: {
                show: false,
              },
              value: {
                show: false,
              },
            },
          },
        },
        colors: ['#4ecdc4', '#c7f463', '#39539E', '#fd6a6a'],
        labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
        legend: {
          show: true,
          floating: true,
          fontSize: '16px',
          horizontalAlign: 'center', 
          position: 'left',
          offsetX: 40,
          offsetY: 15,
          labels: {
            useSeriesColors: true,
          },
          markers: {
            size: 0,
          },
          formatter: function (seriesName, opts) {
            return seriesName + ':  ' + opts.w.globals.series[opts.seriesIndex]
          },
          itemMargin: {
            vertical: 3,
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                show: false,
              },
            },
          },
        ],
      },

      chartSeries5: [
        {
          name: 'TEAM A',
          type: 'column',
          data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
        },
        {
          name: 'TEAM B',
          type: 'area',
          data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
        },
        {
          name: 'TEAM C',
          type: 'line',
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
        stroke: {
          width: [0, 2, 5],
          curve: 'smooth',
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
          '01/01/2003',
          '02/01/2003',
          '03/01/2003',
          '04/01/2003',
          '05/01/2003',
          '06/01/2003',
          '07/01/2003',
          '08/01/2003',
          '09/01/2003',
          '10/01/2003',
          '11/01/2003',
        ],
        markers: {
          size: 0,
        },
        xaxis: {
          type: 'datetime',
        },
        yaxis: {
          title: {
            text: 'Points',
          },
          min: 0,
        },
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter: function (y) {
              if (typeof y !== 'undefined') {
                return y.toFixed(0) + ' points'
              }
              return y
            },
          },
        },
      },
    }
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

.widget-card-text-container {
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
</style>
