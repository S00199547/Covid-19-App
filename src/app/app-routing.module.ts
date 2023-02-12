import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo:'main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    loadChildren: ()=> import('./main/main.module').then(m => m.MainModule )
  },
  {
    path: 'country',
    loadChildren: ()=> import('./country/country.module').then(m => m.CountryModule )
  },
  {
    path: 'live',
    loadChildren: ()=> import('./live/live.module').then(m => m.LiveModule )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
