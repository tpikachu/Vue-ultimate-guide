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
            data: [33, 32, 9, 6, 6, 5, 5, 4],
            backgroundColor: [
              '#076A73',
              '#42A678',
              '#FC5E69',
              '#FC737D',
              '#FC8C94',
              '#FCA3A8',
              '#FFBDBF',
              '#FFD9D9'
            ],
            borderWidth: 0
          }],
          labels: [
            'labor',
            'food & beverage',
            'misc',
            'benefits',
            'rent',
            'net profit',
            'energy',
            'paper'
          ]
        },
        options: {
          responsive: true,
          aspectRatio: (window.outerWidth <= 320) ? 1 : (window.outerWidth <= 960) ? 1.5 : 2,
          cutoutPercentage: 60,
          legend: (window.outerWidth <= 960) ? false : {
            position: 'right',
            labels: {
              fontFamily: "'Belbo-Book', sans-serif",
              fontSize: 16,
              usePointStyle: true,
              padding: 16
            },
            onClick: (e) => e.stopPropagation()
          },
          title: {
            display: false,
            text: 'Typical Restaurant Expenses',
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
              fontColor: '#FFFFFF',
              fontStyle: 'bold',
              fontSize: 14
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

