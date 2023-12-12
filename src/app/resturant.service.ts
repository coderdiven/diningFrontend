import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import  Login from './models/login'; // Import your Login model
import Register from './models/register';
import Restaurant from './models/rest';
import State from './models/state';
import City from './models/city';
import Customer from './models/cust';
import Table from './models/table';
import Booking from './models/booking';

@Injectable({
  providedIn: 'root'
})
export class ResturantService {
  
  // For Customer Login
  private loginurl = 'https://localhost:7288/api/Login'; // Replace with your API base URL

  constructor(private http: HttpClient) { }

  login(cust: Login): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(`${this.loginurl}`, JSON.stringify(cust), { headers });
  }
  
  // For Register Customer

  private RegisterUrl = 'https://localhost:7288/api/Customer';

  createUser(cust: Customer): Observable<Customer> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<Customer>(`${this.RegisterUrl}/addcust`, JSON.stringify(cust), { headers });
  }

  // For User
  private UserUrl = 'https://localhost:7288/api/User';

  getUser(id: number): Observable<Register> {
    const url = `${this.UserUrl}/${id}`;
    return this.http.get<Register>(url);
 }
  // Display Resturants
  private RestUrl = 'https://localhost:7288/api/Resturant';

  getAllRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`${this.RestUrl}`);
   }

  getRestaurant(id: number): Observable<Restaurant> {
     const url = `${this.RestUrl}/${id}`;
     return this.http.get<Restaurant>(url);
  }

  // For City and State

  private Cityurl='https://localhost:7288/api/City';

  getAllCities():Observable<City[]>{
    return this.http.get<City[]>(`${this.Cityurl}`);
  }

  getCity(id: number): Observable<City> {
    const url = `${this.Cityurl}/${id}`;
    return this.http.get<City>(url);
 }

 private Stateurl='https://localhost:7288/api/State';

 getAllStates():Observable<State[]>{
   return this.http.get<State[]>(`${this.Stateurl}`);
 }

 getState(id: number): Observable<State> {
   const url = `${this.Stateurl}/${id}`;
   return this.http.get<State>(url);
}

// For Checking Avability of Table

private tblurl="https://localhost:7288/api/Table";

getTable(id:number):Observable<Table>{
  return this.http.get<Table>(`${this.tblurl}/${id}`);
}

// For Booking

private bookurl="https://localhost:7288/api/Booking"

bookingTable(book:Booking):Observable<Booking>{
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  return this.http.post<Booking>(`${this.bookurl}/booking`,JSON.stringify(book),{headers});
}
}
