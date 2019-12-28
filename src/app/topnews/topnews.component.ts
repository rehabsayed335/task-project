import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { newsitem } from './topnews.module';

@Component({
  selector: 'topnews',
  templateUrl: './topnews.component.html',
  styleUrls: ['./topnews.component.css']
})
export class TopnewsComponent implements OnInit {

  news:newsitem[]=[];

  constructor(private _httpClient:HttpClient) { }

  ngOnInit() {
    this._httpClient.get("http://api.mohamed-sadek.com/News/TopNews").subscribe(
      response => {this.news = response as newsitem[]},
      err => {alert("error")}
    )
     
    }

}
