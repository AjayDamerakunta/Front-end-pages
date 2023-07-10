import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Home2Page } from './home2.page';

import {Home3Page} from '../home3/home3.page'

const routes: Routes = [
  {
    path: '',
    component: Home2Page
  },
  {
    path: 'home3',
    component: Home3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Home2PageRoutingModule {}
