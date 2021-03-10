import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LifeCalculatorComponent } from './life-calculator/life-calculator.component';

const routes: Routes = [
  {
    path: 'life-calculator',
    component : LifeCalculatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
