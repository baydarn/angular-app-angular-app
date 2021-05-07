import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LifeCalculatorComponent } from './life-calculator/life-calculator.component';
import { SimpleCounterComponent } from './simple-counter/simple-counter.component';

const routes: Routes = [
  {
    path: 'life-calculator',
    component: LifeCalculatorComponent,
  },
  {
    path: 'simple-counter',
    component: SimpleCounterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
