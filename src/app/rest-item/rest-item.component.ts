import { Component, OnInit } from '@angular/core';
import { ResturantService } from '../resturant.service';
import { Router } from '@angular/router';
import Item from '../models/item';

@Component({
  selector: 'app-rest-item',
  templateUrl: './rest-item.component.html',
  styleUrls: ['./rest-item.component.css']
})
export class RestItemComponent implements OnInit {
  items: any[] = [];

  constructor(private rs: ResturantService, private router: Router) {}

  ngOnInit() {
    const restidString = localStorage.getItem('restid');
        if (restidString !== null) {
      const restid = parseInt(restidString, 10);
      this.getAllItems(restid);
    } else {
      console.error('Restid not found in localStorage');
    }
  }

  getAllItems(restid: number) {
    this.rs.getItemsbyRest(restid).subscribe(
      (items:any) => {
        this.items = items;
        console.log(items);
        // You can perform additional actions here if needed
      },
      error => {
        console.error('Error fetching items:', error);
      }
    );
  }

  DeleteItem(id:number){
    this.rs.delItem(id).subscribe((data)=>{
      var msg="Item Removed";
      alert(msg);
    },
    error=>console.error(error)
    )
  }
}
