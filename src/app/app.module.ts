import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LifeCalculatorComponent } from './life-calculator/life-calculator.component';
import { CounterButtonsComponent } from './simple-counter/counter/counter-buttons/counter-buttons.component';
import { CounterOutputComponent } from './simple-counter/counter/counter-output/counter-output.component';
import { CounterComponent } from './simple-counter/counter/counter/counter.component';
import { counterReducer } from './simple-counter/counter/state/counter.reducer';
import { SimpleCounterComponent } from './simple-counter/simple-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    LifeCalculatorComponent,
    SimpleCounterComponent,
    CounterComponent,
    CounterOutputComponent,
    CounterButtonsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot({ counter: counterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
