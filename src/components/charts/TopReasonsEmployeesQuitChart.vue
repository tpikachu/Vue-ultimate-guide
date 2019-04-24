<template>
  <figure class="figure">
    <figcaption class="figure__title">{{chartConfig.options.title.text}}</figcaption>
    <canvas :id="chartId" class="figure__chart"></canvas>
  </figure>
</template>

<script>
import Chart from 'chart.js';
import 'chartjs-plugin-labels';

export default {
  data() {
    return {
      chartId: this.generateId(),
      chartConfig: {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [3, 12, 5, 5, 8, 14, 21, 21, 12],
            backgroundColor: [
              '#F2C9C9',
              '#E8A6A6',
              '#FA5C66',
              '#42AB7D',
              '#8FCCB0',
              '#D9EBE3',
              '#4F969E',
              '#176B73',
              '#0D4A4F'
            ],
            borderWidth: 0
          }],
          labels: [
            'overwhelmed',
            'not fun',
            'under qualified',
            'felt neglected',
            'under appreciated',
            'boss is a jerk',
            'changed mind on work type',
            'different work than expected',
            'not enough training',
          ]
        },
        options: {
          responsive: true,
          aspectRatio: (window.outerWidth <= 320) ? 1 : (window.outerWidth <= 960) ? 1.5 : 2,
          cutoutPercentage: 60,
          legend: (window.outerWidth <= 960) ? false : {
            position: 'right',
            labels: {
              fontSize: 16,
              usePointStyle: true,
              padding: 16,
            },
            onClick: (e) => e.stopPropagation()
          },
          title: {
            display: false,
            text: 'Top Reasons Employees Quit',
            fontSize: 20,
            lineHeight: 1.5,
            fontFamily: "'Belbo-Book', sans-serif",
            fontStyle: 'normal'
          },
          tooltips: {
            intersect: true,
            callbacks: {
              label: function(tooltipItem, data) {
                const dataset = data.datasets[tooltipItem.datasetIndex];
                const value = dataset.data[tooltipItem.index];
                const label = data.labels[tooltipItem.index];

                return label + ': ' + value + "%";
              }
            }
          },
          plugins: {
            labels: {
              render: 'percentage',
              fontSize: 16,
              fontStyle: 'bold',
              fontColor: '#FFFFFF'
            }
          }
        }
      }
    }
  },
  mounted() {
    this.createChart(this.chartId, this.chartConfig);
  },
  methods: {
    createChart(chartId, chartData) {
      const ctx = document.getElementById(chartId);
      new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options,
      });
    },
    generateId() {
      return '_' + Math.random().toString(36).substr(2, 9);
    }
  }
}
</script>

