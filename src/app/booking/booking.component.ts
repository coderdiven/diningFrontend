import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ResturantService } from '../resturant.service';
import { ActivatedRoute, Router } from '@angular/router';
import Booking from '../models/booking';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  constructor(private route: ActivatedRoute,private router: Router,private ResturantService: ResturantService) { }

  tablelist: any;

  ngOnInit() {
    
    this.route.params.subscribe(params => {
      const id = +params['id'];
    this.ResturantService.getTable(id).subscribe(
      (tables) => {
        this.tablelist = tables;
      },
      (error) => {
        console.error('Error fetching tables:', error);
      }
    );
    });
  }

  custid: number | null=null;
  tableid: number | null=null;
   noperson: number | null=null;
   occasion:String="";
   datetime:Date |null=null;
   restid:number|null=null;

   BookingTable(){
    this.route.params.subscribe(params => {
      const id = +params['id'];
      const custid=localStorage.getItem('cust');
      console.log(this.tableid);

      const newBooking:  Booking={
        custid: custid ? +custid : null,         
        tableid:this.tableid,
        noperson:this.noperson,
        occasion:this.occasion,
        datetime:this.datetime,
        restid:id
      }
  
      this.ResturantService
      .bookingTable(newBooking).subscribe(
        (result) => {
          
          console.log('Booking successfully:');
        },
        (error) => {
          console.error('Error in Booking:', error);
        }
      );
    });
    
   }

   
}
