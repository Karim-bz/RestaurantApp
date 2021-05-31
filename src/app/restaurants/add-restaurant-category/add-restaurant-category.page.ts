import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-add-restaurant-category',
  templateUrl: './add-restaurant-category.page.html',
  styleUrls: ['./add-restaurant-category.page.scss'],
})
export class AddRestaurantCategoryPage implements OnInit {
  categoryForm = new FormGroup({
    name: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required)
  });

  constructor(
    private categorieService: CategoryService,
    private router: Router
  ) {}

  addCategory() {
    if (!this.categoryForm.valid) {
      return false;
    } else {
      const values = this.categoryForm.value;
      console.log(values);
      this.categorieService.createCategory(values).subscribe((response) => {
        console.log(response);
        this.router.navigate(['/restaurant-categories']);
      },
      (error)=>{
        console.log(error);
      });
    }
  }

  ngOnInit() {}
}
