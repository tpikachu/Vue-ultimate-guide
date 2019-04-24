<template>
  <figure class="figure">
    <figcaption class="figure__title">{{chartConfig.options.title.text}}</figcaption>
    <canvas :id="chartId" class="figure__chart"></canvas>
    <div class="md-layout">
      <div class="md-layout-item md-small-size-100">
        <small class="figure__note">Note: This is a representation of total waste generated and does not depict what is diverted from landfill through recycling and/or composting.</small>
      </div>
      <div class="md-layout-item md-small-size-100">
        <cite class="figure__source">Source: <a target="_blank" rel="nofollow" href="https://possector.com/">possector.com</a></cite>
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
      chartConfig: {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [9, 4, 10, 10, 67],
            backgroundColor: [
              '#F2C9C9',
              '#E8A6A6',
              '#FA5C66',
              '#42AB7D',
              '#8FCCB0',
              '#D9EBE3',
              '#176B73',
              '#4F969E',
              '#176B73',
              '#0D363B'
            ],
            borderWidth: 0
          }],
          labels: [
            'Recyclable Paper \nProducts & Packaging',
            'Commingled Recycling \nBottle and Cans',
            'Waste',
            'Cardboard',
            'Organics'
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
              padding: 24
            },
            onClick: (e) => e.stopPropagation()
          },
          title: {
            display: false,
            text: 'Restaurant Waste Profile',
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
              precision: 2,
              fontColor: (data) => (data.index === 6 ? 'transparent' : '#FFFFFF'),
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

