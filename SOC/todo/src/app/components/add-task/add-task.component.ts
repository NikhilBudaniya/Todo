import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],

})
export class AddTaskComponent implements OnInit {
  task: Task = {
    title: '',
    description: '',
    completed: false,
    date_created: ''
  };
  submitted = false;
  constructor(private taskService: TaskService,) {

  }
  ngOnInit(): void {
  }
  saveTask(): void {
    const data = {
      title: this.task.title,
      description: this.task.description,
      date_created: this.task.date_created
    };
    this.taskService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }
  newTask(): void {
    this.submitted = false;
    this.task = {
      title: '',
      description: '',
      completed: false,
      date_created: ''
    };
  }

}
