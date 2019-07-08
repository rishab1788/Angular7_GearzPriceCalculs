import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


@NgModule({
  imports: [
    CommonModule,
    FormsModule      //<----------make sure you have added this.
  ]})
export class AppComponent {
  title = 'GearzPriceCalculator';
}
