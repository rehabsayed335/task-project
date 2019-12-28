import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { news } from './news.model';

@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  newitem: news= new news();
  new:news[]=[];

  constructor(private _ActivatedRoute:ActivatedRoute,private _httpClient:HttpClient) { }

  ngOnInit() {
    this._ActivatedRoute.paramMap.subscribe(params =>
      {
        this.newitem.ID =+ params.get('id');
        console.log(this.newitem.ID);
        this._httpClient.get(`http://api.mohamed-sadek.com/News/item/${this.newitem.ID}`).subscribe(
          response => {this.new = response as news[];
          /*this.new = this.new.filter(item => item.ID == this.newitem.ID)*/},
          err => {alert("error")}
        )
      }
    );
  }

}
