<template>
  <figure class="figure">
    <figcaption class="figure__title">{{chartConfig.options.title.text}}</figcaption>
    <canvas :id="chartId" class="figure__chart"></canvas>
    <cite class="figure__source">Source: Government of Canada 2014-15 Statistics</cite>
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
        type: 'bar',
        data: {
          labels: ['Full-time chefs', 'Executive chefs', 'Sous chefs', 'Personal Chefs'],
          datasets: [{
            backgroundColor: '#076A73',
            borderWidth: 0,
            data: [33280, 57000, 40000, 35000],
          }, {
            backgroundColor: '#4F969E',
            borderWidth: 0,
            data: [18720, 23000, 13000, 10000]
          }]

        },
        options: {
          responsive: true,
          aspectRatio: (window.outerWidth < 960) ? .8 : 2,
          legend: {
            position: 'bottom',
            labels: false,
            onClick: (e) => e.stopPropagation()
          },
          title: {
            display: false,
            text: 'Average Chef Salaries by position (in Can$)',
            fontSize: 20,
            lineHeight: 1.5,
            fontFamily: "'Belbo-Book', sans-serif",
            fontStyle: 'normal'
          },
          tooltips: {
            intersect: true
          },
          scales: {
            yAxes: [{
              stacked: true,
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: false
              }
            }],
						xAxes: [{
              stacked: true,
              gridLines: {
                display: false
              }
						}],
          },
          plugins: {
            labels: {
              render: function(args) {
                if (args.index === 0) return '33,280-52k';
                if (args.index === 1) return '57k-80k';
                if (args.index === 2) return '40k-53k';
                if (args.index === 3) return '35k-45k';
              },
              fontColor: '#FFFFFF',
              fontStyle: 'bold'
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

