import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Task, TaskType } from './shared/models';
import { AddTaskDialogComponent } from './add-task-dialog/add-task-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tasks';
  newTask = {} as Task;
  newTasks: Task[] = [];
  inProgressTasks: Task[] = [];
  doneTasks: Task[] = [];

  // tasks: Task[] = [
  //   {
  //     title: 'Do this',
  //     type: TaskType.Done
  //   },
  //   {
  //     title: 'Something to do',
  //     type: TaskType.InProgress
  //   },
  //   {
  //     title: 'Have to do this',
  //     type: TaskType.New
  //   },
  //   {
  //     title: 'Washing',
  //     type: TaskType.Done
  //   },
  //   {
  //     title: 'Cook dinner',
  //     type: TaskType.Done
  //   },
  //   {
  //     title: 'wash up',
  //     type: TaskType.Done
  //   }
  // ];

  constructor(public dialog: MatDialog) { }

  // ngOnInit() {
  //   this.tasks.map(x => this.mapTask(x));
  // }

  openAddTaskModal() {
    const dialogRef = this.dialog.open(AddTaskDialogComponent, {
      width: '250px',
      data: { task: this.newTask }
    });

    dialogRef.afterClosed().subscribe(res => {
      console.log(res)
      if (res !== undefined) {
        this.newTask.title = res;
        this.newTask.type = TaskType.New;
        this.newTasks.push(this.newTask);
        this.newTask = {} as Task;
      }
    });
  }

  moveToInProgress(task: Task) {
    const index = this.newTasks.indexOf(task);
    this.newTasks.splice(index, 1);
    task.type = TaskType.InProgress;
    this.inProgressTasks.push(task);
  }

  moveToDone(task: Task) {
    const index = this.inProgressTasks.indexOf(task);
    this.inProgressTasks.splice(index, 1);
    task.type = TaskType.Done;
    this.doneTasks.push(task);
  }

  // private mapTask(task: Task) {
  //   switch (task.type) {
  //     case TaskType.New:
  //       this.newTasks.push(task);
  //       break;
  //     case TaskType.InProgress:
  //       this.inProgressTasks.push(task);
  //       break;
  //     case TaskType.Done:
  //       this.doneTasks.push(task);
  //       break;
  //     default:
  //       break;
  //   }
  // }
}

