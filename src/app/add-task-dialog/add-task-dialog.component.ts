import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Task } from '../shared/models';

@Component({
  selector: 'app-add-task-dialog',
  templateUrl: './add-task-dialog.component.html'
})
export class AddTaskDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<AddTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Task) { }

  cancel() {
    this.dialogRef.close();
  }
}
