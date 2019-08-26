import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getInfo() {
    return this.http.get('http://localhost:3000/info').toPromise();
  }
  editRecords(record) {
    return this.http.put('http://localhost:3000/record',record,httpOptions).toPromise();
  }
}
