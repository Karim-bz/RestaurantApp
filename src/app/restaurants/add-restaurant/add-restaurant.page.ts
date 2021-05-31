import { Component, NgZone, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../services/restaurant.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.page.html',
  styleUrls: ['./add-restaurant.page.scss'],
})
export class AddRestaurantPage implements OnInit {
  idCat: any;
  restaurantForm = new FormGroup({
    name: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    adress: new FormControl('', Validators.required),
  });

  constructor(
    private restaurantService: RestaurantService,
    private zone: NgZone,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.idCat = this.route.snapshot.paramMap.get('id');
  }

  addRestaurant() {
    if (!this.restaurantForm.valid) {
      return false;
    } else {
      const values = this.restaurantForm.value;
      this.restaurantService
        .createRestaurant(this.idCat, values)
        .subscribe((response) => {
          this.zone.run(() => {
            this.restaurantForm.reset();
            this.location.back();
          });
        });
    }
  }
}
