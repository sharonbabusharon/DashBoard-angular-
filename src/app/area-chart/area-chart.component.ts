import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.css']
})
export class AreaChartComponent {
  Highcharts=Highcharts
  chartOptions={}

  constructor(){
    this.chartOptions= {
      chart: {
          type: 'area'
      },
      title: {
          text: 'Yearly Placement Evaluation 2022-2023',
          align: 'center'
      },
      subtitle: {
          text: 'Google Academy',
          align: 'left'
      },
      xAxis:{
          categories:['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec']
      },
      yAxis: {
          title: {
              useHTML: true,
              text: 'Number Of Placements'
          }
      },
      credits:{
          enabled:false,
      },
      tooltip: {
          shared: true,
          headerFormat: '<span style="font-size:12px"><b>{point.key}</b></span><br>'
      },
      plotOptions: {
       
          area: {
              stacking: 'normal',
              lineColor: '#666666',
              lineWidth: 1,
              marker: {
                  lineWidth: 1,
                  lineColor: '#666666'
              }
          }
      },
      series: [{
          name: 'MEARN',
          data: [13234, 12729, 11533, 17798, 10398, 12811, 15483, 196, 162,113,1341,1413]
      }, {
          name: 'Python',
          data: [6685, 6535, 6389, 6384, 6251, 5725, 5631, 5047, 5039,1312,1321,123]
  
      }, {
          name: 'Testing',
          data: [4752, 4820, 4877, 4925, 5006, 4976, 4946, 4911, 4913,343,52,242]
      }, {
          name: 'Big-data',
          data: [3164, 3541, 3898, 4115, 3388, 3569, 3887, 4593, 1550,24,4565,465]
  
      }, {
          name: '.net',
          data: [2019, 2189, 2150, 2217, 2175, 2257, 2344, 2176, 2186,6,75,67]
      }, {
        name: 'ML',
        data: [2019, 2189, 2150, 2217, 2175, 2257, 2344, 2176, 2186,676,757,434]
    }]
  }
  HC_exporting(Highcharts);

  }

}
