import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ResturantService } from '../resturant.service';
import Item from '../models/item';

@Component({
  selector: 'app-rest-item-add',
  templateUrl: './rest-item-add.component.html',
  styleUrls: ['./rest-item-add.component.css']
})
export class RestItemAddComponent {
  constructor(private router: Router,private ResturantService: ResturantService) 
  {
    const restidString = localStorage.getItem('restid');
        if (restidString !== null) {
      const restid = parseInt(restidString, 10);
      this.getallcat(restid);     } else {
      console.error('Restid not found in localStorage');
    }

   
  }
    

     catid: number | null=null;
     itemname:String="";
     description:String="";
     price:number|null=null;
     status:number|null=null;

     createItem() {
      const restid=localStorage.getItem("restid");
      const newItem: Item = {
        restid: restid? +restid : null,
        catid: this.catid,
        itemname: this.itemname,
        price: this.price,
        status: this.status,
        description:this.description
      };
  
      this.ResturantService
      .addItem(newItem).subscribe(
        (result) => {
          this.router.navigate(['/restitem']);
          console.log('Item created successfully:', result);
        },
        (error) => {
          console.error('Error creating user:', error);
        }
      );
  }
  
  cat:any[]=[];
  getallcat(id:number)
  {
    this.ResturantService.getcategories(id).subscribe((data:any)=>{
      this.cat=data;
    },
    error=>console.error(error)
    )
  }
}
