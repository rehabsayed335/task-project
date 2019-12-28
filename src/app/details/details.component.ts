import { Component, OnInit } from '@angular/core';
import { Task } from '../tasks/task.module';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  task:Task = new Task();

  constructor( private _activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(params=>{
      this.task.ID =+ params.get('id')
    })
  }

}
