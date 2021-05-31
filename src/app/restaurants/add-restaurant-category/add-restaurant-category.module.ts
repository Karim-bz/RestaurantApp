import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddRestaurantCategoryPageRoutingModule } from './add-restaurant-category-routing.module';

import { AddRestaurantCategoryPage } from './add-restaurant-category.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    AddRestaurantCategoryPageRoutingModule,
  ],
  declarations: [AddRestaurantCategoryPage],
})
export class AddRestaurantCategoryPageModule {}
