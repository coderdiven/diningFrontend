import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ResturantService } from '../resturant.service';
import  Login  from '../models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent  {
  cust: Login = { email: '', password: '' };
 constructor(private router: Router,private ResturantService: ResturantService) { }

  

  onSubmit() {
    if(this.cust.email=="" && this.cust.password=="")
    {
      console.log("bhul che");
    }
    else
    {
      console.log("ganta thtu nathi");
      this.ResturantService.login(this.cust).subscribe(
        (result) => {
          localStorage.setItem('cust', result.custid);
           this.router.navigate(['/getallrest']);
           console.log('Login successful:', result);
          // Handle the successful login, e.g., store the token in local storage
        },
        (error) => {
          console.error('Login failed:', error);
          // Handle the login error
        }
      );
    }
    
  }
  goToRegister() {
    this.router.navigate(['/register']);
  }

  
}
