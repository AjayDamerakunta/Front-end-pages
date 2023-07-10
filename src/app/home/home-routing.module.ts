import { NgModule } from '@angular/core';// Imports the NgModule decorator from the '@angular/core' module. NgModule is used to define Angular modules.
import { RouterModule, Routes } from '@angular/router';//Imports the RouterModule and Routes classes from the '@angular/router' module. RouterModule provides routing functionality in Angular, and Routes define the routes for the application.
import { HomePage } from './home.page';//Imports the HomePage component from the './home.page' file. This assumes that there is a file named 'home.page.ts' in the same directory as the current file.
import { Home2Page } from '../home2/home2.page';//Imports the Home2Page component from the '../home2/home2.page' file. This assumes that there is a file named 'home2.page.ts' in the 'home2' directory that is one level above the current directory.
//import { Router } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },//Defines a route with an empty path ('') that maps to the HomePage component. This means that when the root URL of the application is accessed, the HomePage component will be displayed.
  { path: 'home2', component: Home2Page },//Defines a route with the path 'home2' that maps to the Home2Page component. This means that when the URL '/home2' is accessed, the Home2Page component will be displayed.
];
//constructor(private router: Router) { }

//goBack() {
  //this.router.navigate(['path-to-back-page']);
//}
@NgModule({
  imports: [RouterModule.forChild(routes)],//Imports the RouterModule and registers the routes defined in the 'routes' variable using the forChild() method. This ensures that the routes are available within the module where this routing module is imported.
  exports: [RouterModule]// Makes the RouterModule available for other modules to import and use.
})
export class HomePageRoutingModule {}// Exports the HomePageRoutingModule class to be used by other modules. This allows other modules to import and use the routing configuration defined in this module.
