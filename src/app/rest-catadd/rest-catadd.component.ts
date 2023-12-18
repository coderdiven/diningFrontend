import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ResturantService } from '../resturant.service';
import Category from '../models/category';

@Component({
  selector: 'app-rest-catadd',
  templateUrl: './rest-catadd.component.html',
  styleUrls: ['./rest-catadd.component.css']
})
export class RestCataddComponent {
  constructor(private router: Router,private ResturantService: ResturantService) 
  {
    
   
  }
    

  catname: string = "";
  restid: number | null=null;

     createCat() {
      const restid=localStorage.getItem("restid");
      const newcat: Category = {
        restid: restid? +restid : null,
        catname: this.catname
      };
  
      this.ResturantService
      .AddCat(newcat).subscribe(
        (result) => {
          this.router.navigate(['/restcat']);
          console.log('category created successfully:', result);
        },
        (error) => {
          console.error('Error creating category:', error);
        }
      );
  }
}
