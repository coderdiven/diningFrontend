import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { ResturantComponent } from './resturant/resturant.component';
import { ViewrestComponent } from './viewrest/viewrest.component';
import { BookingComponent } from './booking/booking.component';
import { RestLoginComponent } from './rest-login/rest-login.component';
import { RestRegisterComponent } from './rest-register/rest-register.component';
import { RestHomeComponent } from './rest-home/rest-home.component';
import { RestItemComponent } from './rest-item/rest-item.component';
import { RestCategoryComponent } from './rest-category/rest-category.component';
import { RestItemAddComponent } from './rest-item-add/rest-item-add.component';
import { RestItemEditComponent } from './rest-item-edit/rest-item-edit.component';
import { RestCataddComponent } from './rest-catadd/rest-catadd.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ResturantComponent,
    ViewrestComponent,
    BookingComponent,
    RestLoginComponent,
    RestRegisterComponent,
    RestHomeComponent,
    RestItemComponent,
    RestCategoryComponent,
    RestItemAddComponent,
    RestItemEditComponent,
    RestCataddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
