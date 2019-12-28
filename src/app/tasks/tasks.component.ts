import { Component, OnInit } from '@angular/core';
import { Task } from './task.module';
import { TasksService } from './tasks.service';
import { HttpClient } from '@angular/common/http';
import { tasks } from '../employee/tasks';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks:Task[] = [];
  name:string="Rehab sayed";
  isloaded:boolean=false;

  constructor(private taskservice:TasksService,private _httpClient:HttpClient) { }

  ngOnInit() {
    this._httpClient.get("http://api.mohamed-sadek.com/Task/Get").subscribe(
      response =>{this.tasks = response as Task[];
      this.isloaded=true},
      err => {alert("error")}
    )

  }

  getnumbertask():number
  {
      return this.tasks.filter(item =>!item.Done).length;
  }

  add(title:string)
  {
    let task:Task=new Task();
    task.Title = title;
    if(!this.taskservice.IsExit(title,this.tasks) && this.taskservice.IsEmpty(title) == false)
    {
        this._httpClient.post("http://api.mohamed-sadek.com/Task/Post",task).subscribe(
        response =>{task.ID= response as number;
        this.tasks.unshift(task);
        },
        err => {alert("error")});
    }
    else
    {
      alert("not allow add this task")
    }
   
  }
  
  delete(index:number)
  {
    let task = this.tasks[index];
    task.IsDeleteing=true;

    this._httpClient.delete(`http://api.mohamed-sadek.com/Task/Delete/${task.ID}`).subscribe(
        response =>{this.tasks.splice(index,1)},
        err => {task.IsDeleteing=false});
  }
  update(task:Task)
  {
     task.Done=!task.Done
  }

}
