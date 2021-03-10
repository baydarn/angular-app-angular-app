import { Component, OnInit } from '@angular/core';
// import { FormControl,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  // title = 'angular-app';
  // public year: number;
  // public month: number;
  // public day:number;
  // public result:string;
  // public hour: number;
  // public minute:number;
  // public second: number = 0; //default olarak 0 alıyoruz saniyeyi

  // calculatorForm = new FormGroup({
  //   birthDate: new FormControl(''),
  //   birthTime: new FormControl(''),
  // });

  ngOnInit(){

  }

  // onSubmit(){
  //   //console.log(this.calculatorForm.value)
  //   let birthDate = this.calculatorForm.value.birthDate.split("-");
  //   let birthTime = this.calculatorForm.value.birthTime.split(':');

  //   this.year = birthDate[0];
  //   this.month = birthDate[1];
  //   this.day = birthDate[2];

  //   this.hour = birthTime[0];
  //   this.minute = birthTime[1];

  //   let date = new Date();
  //     let year = date.getFullYear();
  //     let month = date.getMonth() + 1;  //ay bilgisi:0-11 arasında gösterildiği için +1 ekledim.
  //     let day = date.getDate();

  //     let hour = date.getHours();
  //     let minute = date.getMinutes();
  //     let second = date.getSeconds();

  //     let currentYear = 0;   //kalan yıl
  //     let currentMonth = 0; //kalan ay
  //     let currentDay = 0;  //kalan gün

  //     let currentHour = 0;
  //     let currentMinute = 0;
  //     let currentSecond = 0;

  //     if(day < this.day) {
  //       currentDay = (30 + day) - this.day;
  //       month--;
  //     } else {
  //       currentDay = day - this.day;
  //     }

  //     if(month < this.month) {
  //       currentMonth = (12 + month) - this.month;
  //       year--;
  //     } else {
  //       currentMonth = month - this.month;
  //     }

  //     currentYear = year - this.year;  //senede buna gerek yok.her zaman büyük olan tarihten,küçüğü çıkardığım için

  //     if(second < this.second) {
  //     	currentSecond = (60 + second) - this.second;
  //       minute--;
  //     } else {
  //     	currentSecond = second - this.second;
  //     }

  //     if(minute < this.minute) {
  //     	currentMinute = (60 + minute) - this.minute;
  //       hour--;
  //     } else {
  //     	currentMinute = minute - this.minute;
  //     }

  //     currentHour = hour - this.hour;

  //     let textYear = currentYear !== 0 ? `${currentYear} yıl ` : null;  //bunu yazmasam 0 sene 0 ay x gün gösterecekti bunu yazmasam
  //     let textMonth = currentMonth !== 0 ? `${currentMonth} ay `  : null; //aynı mantık
  //     let textDay = currentDay !== 0 ? `${currentDay} gün `: null;

  //     let textHour = currentHour !== 0 ? `${currentHour} saat `  : null;
  //     let textMinute = currentMinute !== 0 ? `${currentMinute} dakika ` : null;
  //     let textSecond = currentSecond !== 0 ? `${currentSecond} saniye`  : null;


  //    this.result = `${textYear !== null ? textYear : ""}${textMonth !== null ? textMonth : ""}${textDay !== null ? textDay : ""}${textHour !== null ? textHour : ""}${textMinute !== null ? textMinute : ""}${textSecond !== null ? textSecond : ""} 'dir yaşıyorsun.`;

  // }

}
