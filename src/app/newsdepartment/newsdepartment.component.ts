import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { department } from '../navbar/department.module';

@Component({
  selector: 'app-newsdepartment',
  templateUrl: './newsdepartment.component.html',
  styleUrls: ['./newsdepartment.component.css']
})
export class NewsdepartmentComponent implements OnInit {
  departitem:department = new department();
  departments: department[] = [];

  constructor(private _ActivatedRoute:ActivatedRoute, private _httpClient:HttpClient) { }

  ngOnInit() {
    this._ActivatedRoute.paramMap.subscribe(params =>
      {
        this.departitem.ID =+ params.get('id');
        this._httpClient.get(`http://api.mohamed-sadek.com/News/Department/${this.departitem.ID}`).subscribe(
          response => {this.departments = response as department[] }, 
          err => {alert("error")}
        )
      }
    );
  }

}
