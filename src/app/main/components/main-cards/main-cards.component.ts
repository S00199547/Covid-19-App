import { Component, Input,OnChanges,OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-main-cards',
  templateUrl: './main-cards.component.html',
  styleUrls: ['./main-cards.component.css']
})
export class MainCardsComponent implements OnInit, OnChanges {
  @Input() covidData: any;
  summaryData: any={};

  constructor() {}

  ngOnInit(): void {
    
    
  }

  ngOnChanges(): void {
  this.summaryData=this.covidData.Global;
    
  }

}
