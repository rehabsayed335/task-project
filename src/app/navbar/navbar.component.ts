import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { department } from './department.module';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  departments:department[]=[];

  constructor(private _httpClient:HttpClient) { }

  ngOnInit() {
    this._httpClient.get("http://api.mohamed-sadek.com/News/Departments").subscribe(

      response => {this.departments = response as department[]; 
      this.departments = this.departments.filter(item => item.ShowInMainMenu== true)}
      ,
      err => {alert("error")}
    )
     
    }


  
     
    

  

}
