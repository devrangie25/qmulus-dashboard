<template>
    <div>
      <Doughnut
        :chart-options="chartOptions"
        :chart-data="chartData"
        :chart-id="chartId"
        :dataset-id-key="datasetIdKey"
        :plugins="plugins"
        :css-classes="cssClasses"
        :styles="styles"
        :width="width"
        :height="height"
      />
    </div>
  </template>
  
  <script>
  import { Doughnut } from 'vue-chartjs/legacy'
  
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    CategoryScale,
  } from 'chart.js'
  
  ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)
  
  export default {
    name: 'doughnut-chart',
  
    components: {
      Doughnut,
    },
  
    props: {
      chartData: {
        default: () => ({
          labels: [],
          datasets: [
            {
              label: 'My First Dataset',
              data: [300, 50, 100],
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
              ],
              hoverOffset: 4,
            },
          ],
        }),
        required: false,
        type: Object,
      },
      chartOptions: {
        default: () => ({
          responsive: true,
          maintainAspectRatio: false,
        }),
        required: false,
        type: Object,
      },
      chartId: {
        type: String,
        default: 'doughnut-chart',
      },
      datasetIdKey: {
        type: String,
        default: 'label',
      },
      width: {
        type: [Number, String],
        default: 400,
      },
      height: {
        type: [Number, String],
        default: 400,
      },
      cssClasses: {
        default: '',
        type: String,
      },
      styles: {
        type: Object,
        default: () => {},
      },
      plugins: {
        type: Array,
        default: () => [],
      },
    },
  }
  </script>
  