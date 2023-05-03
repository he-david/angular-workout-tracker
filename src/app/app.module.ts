import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkoutListComponent } from './workout-list/workout-list.component';
import { WorkoutService } from './services/workout.service';
import { AddWorkoutComponent } from './add-workout/add-workout.component';
import { FormsModule } from '@angular/forms';
import { EditWorkoutComponent } from './edit-workout/edit-workout.component';

@NgModule({
  declarations: [AppComponent, WorkoutListComponent, AddWorkoutComponent, EditWorkoutComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [WorkoutService],
  bootstrap: [AppComponent],
})
export class AppModule {}
