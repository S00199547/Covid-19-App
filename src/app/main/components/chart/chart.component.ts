import { Component ,OnInit} from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

barChartData: ChartDataSets[] =[

  {
    data: [65,29,80]
  },
];
barChartOptions: ChartOptions={
  responsive:true
}
barChartLabels: Label[] =['USA','Uk','Brazil']

barChartType: ChartType = 'bar';
barChartLegend = true;
barChartPlugins=[];

  constructor() {}
ngOnInit(): void {
  
}


}
