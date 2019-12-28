import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { feateritem } from './featureitem..module';

@Component({
  selector: 'featernews',
  templateUrl: './featernews.component.html',
  styleUrls: ['./featernews.component.css']
})
export class FeaternewsComponent implements OnInit {

  featers:feateritem[]=[];

  constructor(private _httpClient:HttpClient) { }

  ngOnInit() {
    this._httpClient.get("http://api.mohamed-sadek.com/News/FeaturedNews").subscribe(
      response => {this.featers = response as feateritem[]},
      err => {alert("error")}
    )
     
    }

}
