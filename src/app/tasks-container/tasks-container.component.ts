import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../shared/models';

@Component({
  selector: 'app-tasks-container',
  templateUrl: './tasks-container.component.html',
  styleUrls: ['./tasks-container.component.scss']
})
export class TasksContainerComponent {

  @Input() title: string;
  @Input() tasks: Task[];
  @Input() done: boolean;
  @Output() progressTask = new EventEmitter<Task>();

  remove(index: number) {
    this.tasks.splice(index, 1);
  }

  moveTask(task: Task) {
    this.progressTask.emit(task);
  }
}
