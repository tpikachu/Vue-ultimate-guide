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
        type: 'pie',
        data: {
          datasets: [{
            data: [29, 28, 43],
            backgroundColor: [
              '#ff3641',
              '#D9EBE3',
              '#076A73',
            ],
            borderWidth: 10
          }],
          labels: [
            'FOOD \nCOST',
            'LABOR \nCOST',
            'OTHER \nOPERATING \nCOSTS',
          ]
        },
        options: {
          responsive: true,
          aspectRatio: (window.outerWidth <= 375) ? 1 : (window.outerWidth <= 960) ? 1.2 : 2,
          legend: {
            position: 'bottom',
            labels: false,
            onClick: (e) => e.stopPropagation()
          },
          title: {
            display: false,
            text: 'Average Restaurant Operating Costs',
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
            labels: [
              {
                render: 'label',
                fontFamily: "'Belbo-Book', sans-serif",
                fontColor: '#FFFFFF',
                fontStyle: 'bold',
                fontSize: (window.outerWidth <= 375) ? 12 : 16
              },
              {
                render: 'percentage',
                position: 'outside',
                fontFamily: "'Belbo-Book', sans-serif",
                fontSize: (window.outerWidth <= 320) ? 18 : (window.outerWidth <= 375) ? 22 : 32,
                fontStyle: 'bold',
                fontColor: '#212121'
              }
            ]
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

