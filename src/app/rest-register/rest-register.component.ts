import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ResturantService } from '../resturant.service';
import Register from '../models/register';

@Component({
  selector: 'app-rest-register',
  templateUrl: './rest-register.component.html',
  styleUrls: ['./rest-register.component.css']
})
export class RestRegisterComponent {
  email:String="";
  password:String="";
  gender:String="";
  username:String="";
  profilepic:String="";
  contactnumber:String="";

  constructor(private router: Router,private ResturantService: ResturantService) { }

  createUser() {
    const newUser: Register = {
      username: this.username,
      gender: this.gender,
      password: this.password,
      email: this.email,
      profilepic: this.profilepic,
      contactnumber: this.contactnumber,
    };

    this.ResturantService
    .createUser(newUser).subscribe(
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
