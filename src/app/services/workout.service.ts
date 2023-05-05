import { Injectable } from '@angular/core';
import { Workout } from '../models/workout.model';

@Injectable()
export class WorkoutService {
  workouts: Workout[] = localStorage.getItem('workouts')
    ? JSON.parse(localStorage.getItem('workouts')!)
    : [];

  getWorkouts(): Workout[] {
    const workoutsStr = localStorage.getItem('workouts');

    return workoutsStr
      ? (JSON.parse(workoutsStr) as Workout[]).sort((a, b) => b.id - a.id)
      : [];
  }

  addWorkout(workout: Workout) {
    if (
      [
        'gym',
        'stretch',
        'swimming',
        'triatlon',
        'bodybuilding',
        'yoga',
        'golf',
      ].includes(workout.src)
    ) {
      workout.src = `https://he-david.github.io/angular-workout-tracker/assets/images/${workout.src}.png`;
    } else {
      workout.src =
        'https://he-david.github.io/angular-workout-tracker/assets/images/no-image.png';
    }
    workout.id =
      this.workouts.reduce(
        (max, workout) => (workout.id > max ? workout.id : max),
        -1
      ) + 1;
    this.workouts.push(workout);

    localStorage.removeItem('workouts');
    localStorage.setItem('workouts', JSON.stringify(this.workouts));
  }

  editWorkout(edited: Workout) {
    if (['gym', 'stretch', 'swimming', 'yoga'].includes(edited.src)) {
      edited.src = `https://he-david.github.io/angular-workout-tracker/assets/images/${edited.src}.png`;
    } else {
      edited.src =
        'https://he-david.github.io/angular-workout-tracker/assets/images/no-image.png';
    }
    const index = this.workouts.findIndex(
      (workout) => workout.id === edited.id
    );
    this.workouts.splice(index, 1)[0];
    this.workouts.push(edited);

    localStorage.removeItem('workouts');
    localStorage.setItem('workouts', JSON.stringify(this.workouts));
  }

  deleteWorkout(id: number) {
    const index = this.workouts.findIndex((workout) => workout.id === id);
    this.workouts.splice(index, 1)[0];
    localStorage.removeItem('workouts');
    localStorage.setItem('workouts', JSON.stringify(this.workouts));
  }
}
