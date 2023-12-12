import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResturantComponent } from './resturant/resturant.component';
import { ViewrestComponent } from './viewrest/viewrest.component';
import { BookingComponent } from './booking/booking.component';

const routes: Routes = [
 {
  path:"login",
  component:LoginComponent
 },
 {
  path:"register",
  component:RegisterComponent
 },
 {
  path:"getallrest",
  component:ResturantComponent
 },
 {
  path:"viewrest/:id",
  component:ViewrestComponent
 },
 {
  path:"booking/:id",
  component:BookingComponent
 }
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
