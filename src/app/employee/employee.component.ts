import { Component, OnInit } from '@angular/core';
import { tasks } from './tasks';

@Component({
  selector: 'employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
   task1:tasks = new tasks();
   taskarray:tasks[]=[];
   count:number=0;
   settasks(title:string)
   {
     let task2 :tasks=new tasks();
     task2.title=title;
      let check = this.taskarray.some(tit => tit.title==title);
      
      if(title =='' || check == true)
      {
        return false;
      }
  
      else
      {
        this.taskarray.push(task2);
        this.count = this.taskarray.length;

      }
      
   }

   setdone(task:tasks)
   {
     task.done =!task.done;
     if(task.done == false)
     {
       this.count = (this.count -1)
     }
     else
     {
       this.count = (this.count +1)
     }
   }
   deleteitem(task:tasks)
   {
     const index:number=this.taskarray.indexOf(task);
     if(task.done == false)
     {
      this.taskarray.splice(index,1);

     }
     else
     {
     this.taskarray.splice(index,1);
     this.count = (this.count -1)
     }

  }
 
}
