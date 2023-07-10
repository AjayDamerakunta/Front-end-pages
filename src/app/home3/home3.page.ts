import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-home3',
  templateUrl: './home3.page.html',
  styleUrls: ['./home3.page.scss'],
})
export class Home3Page implements OnInit {

  constructor(private navCtrl: NavController, private location: Location) { }

  ngOnInit() {
  }
    goBack() {
      this.location.back();
    }
  }


