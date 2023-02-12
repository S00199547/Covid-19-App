import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainPageComponent } from './components/main-page/main-page.component';
import { MainCardsComponent } from './components/main-cards/main-cards.component';
import { TopCountriesComponent }  from'./components/topcountries/topcountries.component';


@NgModule({
  declarations: [
    MainPageComponent,
    MainCardsComponent,
    TopCountriesComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
