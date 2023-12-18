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
import Item from './models/item';
import Category from './models/category';

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

  createCust(cust: Customer): Observable<Customer> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<Customer>(`${this.RegisterUrl}/addcust`, JSON.stringify(cust), { headers });
  }

  // For resturant login and register

  private userloginurl = 'https://localhost:7288/api/RestLogin'; // Replace with your API base URL


  userlogin(user: Login): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(`${this.userloginurl}`, JSON.stringify(user), { headers });
  }

  getRestId(userid:number):Observable<any>{
    return this.http.get<any>(`${this.userloginurl}/${userid}`);
  }

  private RegisterRestUrl = 'https://localhost:7288/api/User';

  createUser(user: Register): Observable<Register> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<Register>(`${this.RegisterRestUrl}/adduser`, JSON.stringify(user), { headers });
  }

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

// update status
private statusurl="https://localhost:7288/api/Table"

updateTableStatus(tableid: number): Observable<any> {
  const url = `${this.statusurl}/tables/${tableid}`;  
  return this.http.put(url, null); // pass null or an empty object as the body, as your API endpoint doesn't expect a request body
}

// Display category

private caturl="https://localhost:7288/api/Category"

getcategories(restid:number):Observable<Category>{
  return this.http.get<Category>(`${this.caturl}/${restid}`);
}

getcategoriesByID(catid:number):Observable<Category>{
  return this.http.get<Category>(`${this.caturl}/getcat/${catid}`);
}

// Crud Items

private itemurl="https://localhost:7288/api/Item";

addItem(item:Item):Observable<Item>{
  const headers=new HttpHeaders({'Content-Type':'application/json'});
  return this.http.post<Item>(`${this.itemurl}/AddItem`,JSON.stringify(item),{headers});
}

delItem(itemid:number):Observable<Item>{
  return this.http.delete<Item>(`${this.itemurl}/${itemid}`);
}


getitemsBycat(restid:number,catid:number):Observable<Item>{
  return this.http.get<Item>(`${this.itemurl}/${restid}/${catid}`);
}

getItemsbyRest(restid:number):Observable<Item>{
  return this.http.get<Item>(`${this.itemurl}/getitem/${restid}`);
}

// Crud Category

private crudcaturl="https://localhost:7288/api/Category";

AddCat(cat:Category):Observable<Category>{
  const headers=new HttpHeaders({"Content-Type":"application/json"});
  return this.http.post<Category>(`${this.crudcaturl}/AddCategory`,JSON.stringify(cat),{headers});
}
getcatbyRest(restid:number):Observable<Category>{
  return this.http.get<Category>(`${this.crudcaturl}/${restid}`);
}
delCat(catid:number):Observable<Category>{
  return this.http.delete<Category>(`${this.crudcaturl}/${catid}`);
}
}
