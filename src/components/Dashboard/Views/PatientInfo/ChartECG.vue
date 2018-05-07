<template>
  <div>
    <vue-highcharts :options="options" ref="lineCharts"></vue-highcharts>
  </div>
</template>

<script>
import VueHighcharts from 'vue2-highcharts';
export default {
  components: {
    VueHighcharts
  },
  props: ['ecg'],
  data () {
    return {
      options: {
        chart: {
          type: 'spline'
        },
        title: {
          text: 'ECG'
        },
        yAxis: {
          title: {
            text: 'Amplitud (mVolts)'
          }
        },
        xAxis: {
          title: {
            text: 'Tiempo (segs)'
          },
          minorTickInterval: 1,
          labels: {
            formatter: function () {
              return ((this.value * 10) / 3600).toFixed(2);
            }
          }
        },
        tooltip: {
          crosshairs: true,
          shared: true
        },
        credits: {
          enabled: false
        },
        series: [{
          name: 'Amplitud (mVolts)',
          data: this.ecg,
          color: '#e74c3c',
          lineWidth: 0.9,
          showInLegend: false
        }]
      }
    };
  }
};
</script>
