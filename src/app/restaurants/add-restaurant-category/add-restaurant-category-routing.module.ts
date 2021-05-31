import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddRestaurantCategoryPage } from './add-restaurant-category.page';

const routes: Routes = [
  {
    path: '',
    component: AddRestaurantCategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddRestaurantCategoryPageRoutingModule {}
