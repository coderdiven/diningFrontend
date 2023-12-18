import { Component } from '@angular/core';
import Login from '../models/login';
import { Router } from '@angular/router';
import { ResturantService } from '../resturant.service';
import Restaurant from '../models/rest';

@Component({
  selector: 'app-rest-login',
  templateUrl: './rest-login.component.html',
  styleUrls: ['./rest-login.component.css']
})
export class RestLoginComponent {
   user: Login = { email: '', password: '' };
   constructor(private router: Router,private ResturantService: ResturantService) { }

   restId: number | undefined;

  onSubmit() {
    if(this.user.email=="" && this.user.password=="")
    {
      var msg="Please enter email and password";
      alert(msg);
      console.log("Please enter email and password");
    }
    else
    {
      this.ResturantService.userlogin(this.user).subscribe(
        (result) => {
          this.ResturantService.getRestId(result.userid).subscribe((data:number[])=>{
            if (data && data.length > 0) {
              localStorage.setItem('userid', result.userid);
              this.router.navigate(['resthome']);
              this.restId = data[0];
              localStorage.setItem('restid', result.userid);
              console.log('Login successful:', result,localStorage.getItem('restid'));

            } else {
              console.log("Nathi avti");
            }
            
          })
         
        },
        (error) => {
          var msg="Invalid input,Login failed:";
          alert(msg);
          console.error('Invalid input,Login failed:', error);
          // Handle the login error
        }
      );
    }
    
  }
  goToRegister() {
    this.router.navigate(['/register']);
  }
}
