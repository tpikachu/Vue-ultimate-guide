<template>
  <figure class="figure">
    <figcaption class="figure__title">Why do customers stop frequenting a restaurant?</figcaption>
    <div class="md-layout">
      <div class="md-layout-item md-small-size-100">
        <figure class="figure my-0">
          <canvas :id="chartId"></canvas>
          <figcaption class="figure__title mb-large-0">{{chartConfig.options.title.text}}</figcaption>
        </figure>
      </div>
      <div class="md-layout-item md-small-size-100">
        <figure class="figure my-0">
          <canvas :id="secondChartId"></canvas>
          <figcaption class="figure__title mb-large-0">{{secondChartConfig.options.title.text}}</figcaption>
        </figure>
      </div>
    </div>
  </figure>
</template>

<script>
import Chart from 'chart.js';
import 'chartjs-plugin-labels';

export default {
  data() {
    return {
      chartId: this.generateId(),
      secondChartId: this.generateId(),
      chartConfig: {
        type: 'pie',
        data: {
          datasets: [{
            data: [73, 27],
            backgroundColor: [
              '#076A73',
              '#D9EBE3'
            ],
            borderWidth: 0
          }],
          labels: ['', '']
        },
        options: {
          responsive: true,
          aspectRatio: (window.outerWidth <= 320) ? 1 : (window.outerWidth <= 960) ? 1.5 : 2,
          legend: {
            position: 'bottom',
            labels: false,
            onClick: (e) => e.stopPropagation()
          },
          title: {
            display: false,
            text: '73% cited rude staff as issue.'
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
              fontFamily: "'Belbo-Book', sans-serif",
              fontColor: '#FFFFFF',
              fontStyle: 'bold',
              fontSize: 24
            }
          }
        }
      },
      secondChartConfig: {
        data: {
          datasets: [{
            data: [55, 45],
            backgroundColor: [
              '#076A73',
              '#D9EBE3'
            ],
            borderWidth: 0
          }],
          labels: ['', '']
        },
        options: {
          title: {
            text: '55% cited issues that weren\'t resolved in timely manner.'
          }
        }
      }
    }
  },
  mounted() {
    this.createChart(this.chartId, this.chartConfig);
    let secondChartConfig = this.chartConfig;
    secondChartConfig.data = this.secondChartConfig.data;
    this.createChart(this.secondChartId, secondChartConfig);
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


