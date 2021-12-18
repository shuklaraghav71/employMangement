import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService implements OnInit{

  constructor(private http: HttpClient) { }
  ngOnInit() {
    console.log("in api.service.ts")

  }
  getList() {
  return this.http.get("http://localhost:8080/api/v1/employeesList")
}
}
