import { Component } from '@angular/core';
import Restaurant from '../models/rest';
import { ResturantService } from '../resturant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resturant',
  templateUrl: './resturant.component.html',
  styleUrls: ['./resturant.component.css']
})
export class ResturantComponent {
  restaurants: Restaurant[] = [];

  constructor(private router:Router,private restaurantService: ResturantService) {
    this.getAllRest();
   }

  
   getAllRest(){
    this.restaurantService.getAllRestaurants().subscribe(
      data => {
        this.restaurants = data;
        console.log(this.restaurants); // Log data to the console for debugging
      },
      error => console.error(error)
    );
  }
  
  getRest(id: number): void {
    this.restaurantService.getRestaurant(id).subscribe(
      data => {
        this.router.navigate(["/viewrest",id]);
        console.log(data); 
      },
      error => {
        console.error(error); 
      }
    );
  }
}
