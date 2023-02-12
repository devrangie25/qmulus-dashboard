<template>
  <div>
    <b-card
      text-variant="dark"
      class="text-center card-corp"
      style="height: 100%"
    >
      <ApexCharts
        :type="type"
        :width="width"
        :height="height"
        :options="chartOptions"
        :series="series"
        class="apex"
      ></ApexCharts>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'Dynamic-Chart-Apex',

  props: {
    type: {
      type: String,
      default: 'area',
    },
    height: {
      type: String,
      default: '300',
    },
    width: {
      type: String,
      default: '100%',
    },
    series: {
      type: Array,
      default: () => [
        {
          name: 'sales',
          data: [
            {
              x: '2019/01/01',
              y: 400,
            },
            {
              x: '2019/04/01',
              y: 430,
            },
            {
              x: '2019/07/01',
              y: 448,
            },
            {
              x: '2019/10/01',
              y: 470,
            },
            {
              x: '2020/01/01',
              y: 540,
            },
            {
              x: '2020/04/01',
              y: 580,
            },
            {
              x: '2020/07/01',
              y: 690,
            },
            {
              x: '2020/10/01',
              y: 690,
            },
          ],
        },
      ],
    },
    chartOptions: {
      type: Object,
      default: () => ({
        chart: {
          type: 'bar',
          height: 380,
        },
        xaxis: {
          type: 'category',
          labels: {
            formatter: function (val) {
              return val
            },
          },
          group: {
            style: {
              fontSize: '10px',
              fontWeight: 700
            },
            groups: [
              { title: '2019', cols: 4 },
              { title: '2020', cols: 4 },
            ],
          },
        },
        title: {
          text: 'Grouped Labels on the X-axis',
        },
        tooltip: {
          x: {
            formatter: function (x) {
              if (typeof x !== 'undefined') {
                return x.toFixed(0) + ' points'
              }
              return x
            },
          },
          theme: 'dark'
        },
      }),
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

</style>
