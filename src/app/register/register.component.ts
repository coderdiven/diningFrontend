import { Component } from '@angular/core';
import { ResturantService } from '../resturant.service';
import Register from '../models/register';
import { Router } from '@angular/router';
import Customer from '../models/cust';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email:String="";
  password:String="";
  gender:String="";
  custname:String="";
  profilepic:String="";
  contactnumber:String="";
  address:String="";

  constructor(private router: Router,private ResturantService: ResturantService) { }

  createUser() {
    const newCust: Customer = {
      custname: this.custname,
      gender: this.gender,
      password: this.password,
      email: this.email,
      profilepic: this.profilepic,
      contactnumber: this.contactnumber,
      address:this.address
    };

    this.ResturantService
    .createUser(newCust).subscribe(
      (result) => {
        this.router.navigate(['/login']);
        
        console.log('User created successfully:', result);
      },
      (error) => {
        console.error('Error creating user:', error);
      }
    );
}
}