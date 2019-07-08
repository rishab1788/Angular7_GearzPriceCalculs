import { GearzBike } from './../gearz-bike';
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule, Time, WeekDay } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.css']
})

@NgModule({
 
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ]
})
export class BikeListComponent implements OnInit {
  gearzBike: GearzBike[] = [];
  dateOfpick: Date;
  dateOfdrop: Date;
  picktime: Date;
  droptime: Date;
  BikeName: string;
  Kilometers: number;
  Submit = false;
  totaldays: number;
  weekDay = 0;
  weekEnd = 0;
  total = 0;




  onSubmit() {
    //  console.log(this.BikeName+this.dateOfpick.getDay()+this.dateOfdrop.getDay()+this.Kilometers);
    let datecheck: Date;
    datecheck = this.dateOfpick;
    this.weekDay = 0;
    this.weekEnd = 0;
    var oneDay = 1000 * 60 * 60 * 24;
    var onemin = 60000;
    var onehour = onemin * 60;
    var picktime = this.picktime.getHours() * onehour + this.picktime.getMinutes() * onemin;
    var droptime = this.droptime.getHours() * onehour + this.droptime.getMinutes() * onemin;
    var diffTime = Math.round((picktime - droptime) / onehour);
    var diffDays = Math.round(Math.abs((this.dateOfpick.getTime() - this.dateOfdrop.getTime()) / (oneDay)));
    this.totaldays = diffDays;
    if(diffTime<-7  ){
this.totaldays++;
this.weekDay++;
    }
    console.log(diffTime);
    console.log(this.picktime);
    console.log(diffDays);
    let i = this.dateOfpick.getDay();
    while (diffDays--) {
      if (i % 7 == 0 || i % 7 == 6) {
        this.weekEnd++;
      }
       else { 
         this.weekDay++; 
        }
      i++;
    }
    console.log('number of weekend' + this.weekEnd);

    console.log('number of weekday' + this.weekDay);

    for (let j = 0; j < this.gearzBike.length; j++) {

      if (this.gearzBike[j].bikeName == this.BikeName) {


        console.log(this.gearzBike[j].bikeName);
        this.total = this.weekEnd * this.gearzBike[j].weekendPrice;
        this.total += this.weekDay * this.gearzBike[j].weekdDayPrice;

        if ((this.Kilometers) > (this.gearzBike[j].KmLimit * this.totaldays)) {
   this.total += (this.Kilometers - this.gearzBike[j].KmLimit * this.totaldays) * 4;
        }
        console.log('total price-' + this.gearzBike[j].bikeName + ' ' + this.total);
      }//use i instead of 0
    }

    this.Submit = true;


  }
  constructor() { }

  ngOnInit() {

    let date: Date = new Date();
    let bike1 = new GearzBike("SuzukiGixxerSFFI2017", "mh14c1548", 800, 900, 200);
    let bike2 = new GearzBike("Avenger220", "mh10c1589", 800, 900, 200);
    let bike3 = new GearzBike("HondaDio", "mh10c1589", 400, 500, 100);
    let bike4 = new GearzBike("Avenger180", "mh10c1589", 800, 900, 200);
    let bike5 = new GearzBike("HondaActiva", "mh10c1589", 400, 500, 100);
    let bike6 = new GearzBike("Jupiter", "mh10c1589", 400, 500, 100);
    let bike7 = new GearzBike("Passion", "mh10c1589", 500, 600, 200);

    this.gearzBike.push(bike1);
    this.gearzBike.push(bike2);
    this.gearzBike.push(bike3);
    this.gearzBike.push(bike4);
    this.gearzBike.push(bike5);
    this.gearzBike.push(bike6);
    this.gearzBike.push(bike7);

  }

}
