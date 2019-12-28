import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { newitem } from './collectionnews/collection.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my-first-app';

  tops:newitem[]=[];
  featers:newitem[]=[];



  constructor(private _httpClient:HttpClient) { }

  ngOnInit() {
    this._httpClient.get("http://api.mohamed-sadek.com/News/TopNews").subscribe(
      response => {this.tops = response as newitem[]},
      err => {alert("error")}
    );
    this._httpClient.get("http://api.mohamed-sadek.com/News/FeaturedNews").subscribe(
      response => {this.featers = response as newitem[]},
      err => {alert("error")}
    )
     
    }
}
