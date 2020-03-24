import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { TasksContainerComponent } from './tasks-container/tasks-container.component';
import { AddTaskDialogComponent } from './add-task-dialog/add-task-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksContainerComponent,
    AddTaskDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  providers: [],
  entryComponents: [AddTaskDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
