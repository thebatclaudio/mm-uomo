import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private timeLeft;

  constructor() {
    this.timeLeft = parseInt(moment('2019-03-08 00:00:00').format('X')) - parseInt(moment().format('X'));
  }

  ngOnInit() {
  }

}
