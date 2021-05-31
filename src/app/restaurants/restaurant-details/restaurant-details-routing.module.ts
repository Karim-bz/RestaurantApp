import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantDetailsPage } from './restaurant-details.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurantDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantDetailsPageRoutingModule {}
