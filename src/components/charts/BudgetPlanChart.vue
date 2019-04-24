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
            data: [30, 25, 3, 10, 32],
            backgroundColor: [
              '#FC5E69',
              '#FC737D',
              '#FC8C94',
              '#FCA3A8',
              '#076A73',
            ],
            borderWidth: 0
          }],
          labels: [
            'food and supplies',
            'payroll',
            'utilities',
            'rent or morgage',
            'profit'
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
            text: 'The 68 Percent Formula Budget Plan',
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
              fontSize: 18
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

