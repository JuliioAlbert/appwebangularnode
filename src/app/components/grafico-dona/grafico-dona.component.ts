
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

  

import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styleUrls: []
})
export class GraficoDonaComponent implements OnInit {


  @Input('ChartLabels') doughnutChartLabels: string[] = [];
  @Input('ChartData') doughnutChartData: number[] = [];
  @Input('ChartType') doughnutChartType: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
