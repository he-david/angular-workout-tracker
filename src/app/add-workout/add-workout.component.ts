import { Component } from '@angular/core';
import { WorkoutService } from '../services/workout.service';
import { Workout } from '../models/workout.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-workout',
  templateUrl: './add-workout.component.html',
})
export class AddWorkoutComponent {
  invalidForm = false;

  name: string = '';
  duration?: number;
  date?: Date;
  description?: string;

  constructor(private workoutService: WorkoutService, private router: Router) {}

  onAddWorkout() {
    if (!this.valid()) {
      this.invalidForm = true;
      return;
    }

    const newWorkout: Workout = {
      id: -1,
      name: this.name,
      duration: this.duration!,
      date: this.date!,
      src: this.name.toLowerCase().trim(),
      description: this.description,
    };
    this.workoutService.addWorkout(newWorkout);
    this.router.navigateByUrl('');
  }

  private valid() {
    return this.name.length > 0 && this.duration && this.date;
  }
}
