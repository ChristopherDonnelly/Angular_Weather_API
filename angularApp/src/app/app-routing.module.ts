import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeattleComponent } from './seattle/seattle.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { BurbankComponent } from './burbank/burbank.component';
import { DallasComponent } from './dallas/dallas.component';
import { DcComponent } from './dc/dc.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'seattle',component: SeattleComponent },
  { path: 'sanjose',component: SanjoseComponent },
  { path: 'burbank',component: BurbankComponent },
  { path: 'dallas',component: DallasComponent },
  { path: 'dc',component: DcComponent },
  { path: 'chicago',component: ChicagoComponent },
  { path: '', pathMatch: 'full', redirectTo: '/seattle' },
  { path: '**', redirectTo: '/seattle' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
