import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import { Location } from '@angular/common';
@Component({
  selector: 'app-home2',
  templateUrl: './home2.page.html',
  styleUrls: ['./home2.page.scss'],
})
export class Home2Page implements OnInit {

  constructor(private navCtrl: NavController, private location: Location) {}
  // Class declaration for Home2Page component with constructor accepting NavController and Location dependencies.
  ngOnInit() {
    // Lifecycle hook that is called after the component is initialized.
  }

  gotoNextPage() {
    this.navCtrl.navigateForward(['home3']);
    // Method to navigate to the 'home3' page using NavController to move forward in the navigation stack.
  }
    goBack() {
      this.location.back();
      // Method to go back to the previous page using the Location service.

  }
}



