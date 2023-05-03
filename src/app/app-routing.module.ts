import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddWorkoutComponent } from './add-workout/add-workout.component';
import { WorkoutListComponent } from './workout-list/workout-list.component';
import { EditWorkoutComponent } from './edit-workout/edit-workout.component';

const routes: Routes = [
  { path: 'new', component: AddWorkoutComponent },
  { path: 'edit/:id', component: EditWorkoutComponent },
  { path: '', component: WorkoutListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
