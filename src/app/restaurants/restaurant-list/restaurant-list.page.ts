import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.page.html',
  styleUrls: ['./restaurant-list.page.scss'],
})
export class RestaurantListPage implements OnInit {
  Restaurents: any = [];
  idCat: any;
  constructor(
    private restaurantService: RestaurantService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.idCat = this.route.snapshot.paramMap.get('id');
    this.restaurantService.getRestaurants(this.idCat).subscribe((response) => {
      this.Restaurents = response;
    });
  }
  navigateToAdd() {
    this.router.navigate(['/restaurant-list']);
  }
}
