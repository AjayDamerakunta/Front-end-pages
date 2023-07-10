import { Component } from '@angular/core';
import {NavController} from '@ionic/angular';//class provides navigation functionality for Ionic applications.

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {//This line defines the HomePage class and exports it so that it can be used in other files.

  
  constructor(private navCtrl: NavController) {}//This is the constructor for the HomePage class. It takes an instance of the NavController class as a parameter and assigns it to the navCtrl property of the class.

  gotoNextPage() {//This is a method within the HomePage class that is called when the user wants to navigate to the next page. It is triggered by an action, such as a button click.
    this.navCtrl.navigateForward(['home2']);//This line uses the navCtrl object to navigate to the 'home2' page. It uses the navigateForward() method to navigate to the specified page. The argument passed to navigateForward() is an array containing the route or page name.

  }
}
//goBack() {

//this.navCtrl.navigateBack(['']); 

//}
//}