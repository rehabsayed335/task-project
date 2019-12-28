import { Injectable } from '@angular/core';
import { Task } from './task.module';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }
  IsExit(title:string,tasks:Task[])
    {
        return tasks.some(tit => tit.Title==title);
    }
    IsEmpty(title:string)
    {
        if(title == '')
        {
            return true;
        }
        else
        {
            return false
        }

    }
}
