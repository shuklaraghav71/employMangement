import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {Employee } from '../employee'
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] | undefined;
  constructor(private api:ApiService) { }
  ngOnInit(): void {
    this.api.getList().subscribe((response:any) =>{
      console.log(response)
      this.employees = response}
      )
  }
}
