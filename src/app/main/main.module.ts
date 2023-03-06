import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainPageComponent } from './components/main-page/main-page.component';
import { MainCardsComponent } from './components/main-cards/main-cards.component';
import { TopCountriesComponent }  from'./components/topcountries/topcountries.component';
import { ConfirmedByCountryComponent } from './components/confirmed-by-country/confirmed-by-country.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MainPageComponent,
    MainCardsComponent,
    TopCountriesComponent,
    ConfirmedByCountryComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ]
})
export class MainModule { }
