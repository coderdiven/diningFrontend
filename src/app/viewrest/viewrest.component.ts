import { Component } from '@angular/core';
import { ResturantService } from '../resturant.service';
import Restaurant from '../models/rest';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import City from '../models/city';
import State from '../models/state';
import Register from '../models/register';
import Table from '../models/table';
import Item from '../models/item';
import Category from '../models/category';
@Component({
  selector: 'app-viewrest',
  templateUrl: './viewrest.component.html',
  styleUrls: ['./viewrest.component.css']
})
export class ViewrestComponent {

  restaurant: Restaurant[] = [];
  userId: number | null = null; // or initialize it to a default value
  table: any[] =[];
  items: Item[]=[];
  category:Category[]=[];

  constructor(private router:Router,private route: ActivatedRoute,private restaurantService: ResturantService) {
    this.viewRest();
  }

  
  isTableAvailable(): boolean {
    return this.table.some(t => t?.status === 1);
  }

   getTableData(id: number): void {
    this.restaurantService.getTable(id).subscribe(
      (result:any) => {
        this.table = result;
        console.log("plz",result);
      },
      (error) => {
        console.error(error);
      }
    );
  }

   LoadBooking(id: number): void {
    this.restaurantService.getRestaurant(id).subscribe(
      data => {
        console.log("done",data); 
        this.router.navigate(["/booking",id]);
      },
      error => {
        console.error(error); 
      }
    );
  }
   viewRest() {
      this.route.params.subscribe(params => {
        const id = +params['id'];
    
        this.restaurantService.getRestaurant(id).subscribe(
          data => {
            this.restaurantService.getCity(data['cityid'] ?? 0).subscribe(
              (city: City) => {
                if (this.restaurant.length > 0) {
                  this.restaurant[0].cityname = city.cityname;
                }
              },
              error => {
                console.error('Error fetching city:', error);
              }
            );
    
            // Fetch state information
            this.restaurantService.getState(data['stateid'] ?? 0).subscribe(
              (state: State) => {
                if (this.restaurant.length > 0) {
                  this.restaurant[0].statename = state.statename;
                }
              },
              error => {
                console.error('Error fetching state:', error);
              }
            );
              
            // Fetch User Information

            this.restaurantService.getUser(data['userid'] ?? 0).subscribe(
              (user: Register) => {
                if (this.restaurant.length > 0) {
                  this.restaurant[0].username = user.username! as string;
                }
              },
              error => {
                console.error('Error fetching user:', error);
              }
            );

            // For Category 

            this.restaurantService.getcategories(id).subscribe((Result:any)=>{
              this.category=Result;
            });

            this.getTableData(id);

            console.log(data);
            this.restaurant = [data];

          },
          error => {
            console.error('Error fetching restaurant:', error);
          }
        );
      });
    }
    
    viewItemsByCatid(catid:number){
        this.route.params.subscribe(params=>{
          const id = +params['id'];
          this.restaurantService.getitemsBycat(id,catid).subscribe((result:any)=>{
            this.items=result;
            console.log(result);
          })
        })
        
    }
  }
  

