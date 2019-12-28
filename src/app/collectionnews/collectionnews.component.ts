import { Component, OnInit } from '@angular/core';
import { newitem } from './collection.model';
import { Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'collectionnews',
  templateUrl: './collectionnews.component.html',
  styleUrls: ['./collectionnews.component.css']
})
export class CollectionnewsComponent implements OnInit {

  @Input() news:newitem[] = [];

  constructor() { }

  ngOnInit() {
  }

}
