import { Component } from '@angular/core';
import { ResturantService } from '../resturant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rest-category',
  templateUrl: './rest-category.component.html',
  styleUrls: ['./rest-category.component.css']
})
export class RestCategoryComponent {
  cat: any[] = [];

  constructor(private rs: ResturantService, private router: Router) {}

  ngOnInit() {
    const restidString = localStorage.getItem('restid');
        if (restidString !== null) {
      const restid = parseInt(restidString, 10);
      this.getAllcat(restid);
    } else {
      console.error('Restid not found in localStorage');
    }
  }

  getAllcat(restid: number) {
    this.rs.getcatbyRest(restid).subscribe(
      (data:any) => {
        this.cat = data;
        console.log(data);
        // You can perform additional actions here if needed
      },
      error => {
        console.error('Error fetching data:', error);
      }
    );
  }

  DeleteCat(id:number){
    this.rs.delCat(id).subscribe((data)=>{
      var msg="Category Removed";
      alert(msg);
    },
    error=>console.error(error)
    )
  }
}
