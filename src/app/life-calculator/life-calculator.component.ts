import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-life-calculator',
  templateUrl: './life-calculator.component.html',
  styleUrls: ['./life-calculator.component.scss']
})
export class LifeCalculatorComponent implements OnInit {

  constructor() { }

  title = 'angular-app';

  public year: number;
  public month: number;
  public day:number;
  public result:string;
  public hour: number;
  public minute:number;
  public second: number = 0; //we take seconds as 0 by default

  calculatorForm = new FormGroup({
    birthDate: new FormControl(''),
    birthTime: new FormControl(''),
  });

  ngOnInit(){

  }
  onSubmit(){
    //console.log(this.calculatorForm.value)
    let birthDate = this.calculatorForm.value.birthDate.split("-");
    let birthTime = this.calculatorForm.value.birthTime.split(':');

    this.year = birthDate[0];
    this.month = birthDate[1];
    this.day = birthDate[2];

    this.hour = birthTime[0];
    this.minute = birthTime[1];

    let date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth() + 1;  //month info:I added +1 as the month information is shown between 0-11.
      let day = date.getDate();

      let hour = date.getHours();
      let minute = date.getMinutes();
      let second = date.getSeconds();

      let currentYear = 0;   //remaining year
      let currentMonth = 0; //remaining month
      let currentDay = 0;  //remaining day

      let currentHour = 0;
      let currentMinute = 0;
      let currentSecond = 0;

      if(day < this.day) {
        currentDay = (30 + day) - this.day;
        month--; //I take out what I borrowed
      } else {
        currentDay = day - this.day;
      }

      if(month < this.month) {
        currentMonth = (12 + month) - this.month;
        year--;
      } else {
        currentMonth = month - this.month;
      }

      currentYear = year - this.year;  //you don't need it this year. I always subtract the smaller date from the larger date

      if(second < this.second) {
      	currentSecond = (60 + second) - this.second;
        minute--;
      } else {
      	currentSecond = second - this.second;
      }

      if(minute < this.minute) {
      	currentMinute = (60 + minute) - this.minute;
        hour--;
      } else {
      	currentMinute = minute - this.minute;
      }

      currentHour = Math.abs(hour - this.hour) //The hours remains at the end. I subtracted it out directly.

      let textYear = currentYear !== 0 ? `${currentYear} year ` : null;  //If I didn't write this, it would show 0 years 0 months x days, so I did it like this
      let textMonth = currentMonth !== 0 ? `${currentMonth} month `  : null; //I applied the same logic to the others.
      let textDay = currentDay !== 0 ? `${currentDay} daz `: null;

      let textHour = currentHour !== 0 ? `${currentHour} hours `  : null;
      let textMinute = currentMinute !== 0 ? `${currentMinute} minutes ` : null;
      let textSecond = currentSecond !== 0 ? `${currentSecond} second`  : null;


     this.result = `Lifetime: ${textYear !== null ? textYear : ""}${textMonth !== null ? textMonth : ""}${textDay !== null ? textDay : ""}${textHour !== null ? textHour : ""}${textMinute !== null ? textMinute : ""}${textSecond !== null ? textSecond : ""} `;
    }

}
