import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantCategoriesPageRoutingModule } from './restaurant-categories-routing.module';

import { RestaurantCategoriesPage } from './restaurant-categories.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantCategoriesPageRoutingModule
  ],
  declarations: [RestaurantCategoriesPage]
})
export class RestaurantCategoriesPageModule {}
