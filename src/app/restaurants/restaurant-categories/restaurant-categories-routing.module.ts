import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantCategoriesPage } from './restaurant-categories.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurantCategoriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantCategoriesPageRoutingModule {}
