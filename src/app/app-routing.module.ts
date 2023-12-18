import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResturantComponent } from './resturant/resturant.component';
import { ViewrestComponent } from './viewrest/viewrest.component';
import { BookingComponent } from './booking/booking.component';
import { RestLoginComponent } from './rest-login/rest-login.component';
import { RestRegisterComponent } from './rest-register/rest-register.component';
import { RestHomeComponent } from './rest-home/rest-home.component';
import { RestItemComponent } from './rest-item/rest-item.component';
import { RestItemAddComponent } from './rest-item-add/rest-item-add.component';
import { RestCategoryComponent } from './rest-category/rest-category.component';
import { RestCataddComponent } from './rest-catadd/rest-catadd.component';

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
 },
 {
  path:"restlogin",
  component:RestLoginComponent
 },
 {
  path:"restregister",
  component:RestRegisterComponent
 },
 {
  path:"resthome",
  component:RestHomeComponent
 },
 {
  path:"restitem",
  component:RestItemComponent
 },
 {
  path:"restadditem",
  component:RestItemAddComponent
 },
 {
  path:"restcat",
  component:RestCategoryComponent
 },
 {
  path:"restaddcat",
  component:RestCataddComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
