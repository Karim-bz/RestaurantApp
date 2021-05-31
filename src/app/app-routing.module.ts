import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'restaurant-categories',
    pathMatch: 'full'
  },
  {
    path: 'restaurant-categories',
    loadChildren: () => import('./restaurants/restaurant-categories/restaurant-categories.module').then( m => m.RestaurantCategoriesPageModule)
  },
  {
    path: 'restaurant-list/:id',
    loadChildren: () => import('./restaurants/restaurant-list/restaurant-list.module').then( m => m.RestaurantListPageModule)
  },
  {
    path: 'restaurant-details/:id',
    loadChildren: () => import('./restaurants/restaurant-details/restaurant-details.module').then( m => m.RestaurantDetailsPageModule)
  },
  {
    path: 'add-restaurant-category',
    loadChildren: () => import('./restaurants/add-restaurant-category/add-restaurant-category.module').then( m => m.AddRestaurantCategoryPageModule)
  },
  {
    path: 'add-restaurant/:id',
    loadChildren: () => import('./restaurants/add-restaurant/add-restaurant.module').then( m => m.AddRestaurantPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
