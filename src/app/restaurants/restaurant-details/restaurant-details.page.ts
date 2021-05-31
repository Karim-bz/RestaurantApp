import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../services/restaurant.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.page.html',
  styleUrls: ['./restaurant-details.page.scss'],
})
export class RestaurantDetailsPage implements OnInit {
  Restaurent: any = [];
  id: any;
  category: any;
  categoryImage:any;
  constructor(
    private restaurantService: RestaurantService,
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.restaurantService.getRestaurantById(this.id).subscribe((response) => {
      this.Restaurent = response;
      this.category =this.Restaurent.category.name;
      this.categoryImage =this.Restaurent.category.image;
    });
  }

  deleteRestaurant(id){
    this.restaurantService.deleteRestaurant(id).subscribe(
      (response) => {
        this.location.back();
    });
  }
}
