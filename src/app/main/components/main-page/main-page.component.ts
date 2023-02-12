import { Component , OnInit} from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  implements OnInit {
  covidData: any={};
  constructor(private dataService:DataService) {}

  ngOnInit(): void{
this.dataService.getSummaryData().subscribe(
  (data: any)=>{
    this.covidData =data;
   
  }
)
  }

}
