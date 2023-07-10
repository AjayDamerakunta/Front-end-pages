import { NgModule } from '@angular/core'; // Importing NgModule from the '@angular/core' module.
import { CommonModule } from '@angular/common'; // Importing CommonModule from the '@angular/common' module.
import { IonicModule } from '@ionic/angular'; // Importing IonicModule from the '@ionic/angular' module.
import { FormsModule } from '@angular/forms'; // Importing FormsModule from the '@angular/forms' module.
import { HomePage } from './home.page'; // Importing the HomePage component from the './home.page' file.

import { HomePageRoutingModule } from './home-routing.module'; // Importing the routing module for HomePage.


@NgModule({
  imports: [
    CommonModule, // Importing CommonModule to use common directives and pipes.
    FormsModule, // Importing FormsModule to use two-way data binding with ngModel.
    IonicModule, // Importing IonicModule to use Ionic UI components.
    HomePageRoutingModule // Importing the routing module for HomePage.
  ], 
  declarations: [HomePage] // Declaring HomePage component in the module.
})
export class HomePageModule {} // Exporting the HomePageModule class.
