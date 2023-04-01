import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {
  Highcharts=Highcharts
  chartOptions={}

  constructor(){
    this.chartOptions= {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
      },
      title: {
          text: 'Average Admission Rate in 2022',
          align: 'center'
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
          point: {
              valueSuffix: '%'
          }
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b>: {point.percentage:.1f} %'
              }
          }
      },
      series: [{
          name: 'MEARN',
          colorByPoint: true,
          data: [{
              name: 'Flutter',
              y: 70.67,
              sliced: true,
              selected: true
          }, {
              name: 'Python',
              y: 14.77
          },  {
              name: 'BigData',
              y: 4.86
          }, {
              name: 'Java',
              y: 2.63
          }, {
              name: '.NET',
              y: 1.53
          },  {
              name: 'Testing',
              y: 1.40
          }, {
              name: 'PHP',
              y: 0.84
          }, {
              name: 'Security',
              y: 0.51
          }, {
              name: 'C++',
              y: 2.6
          }]
      }],
      credits:{
        enabled:false
      }
  }
  }

}
