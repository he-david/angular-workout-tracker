import { Injectable } from '@angular/core';
import { Workout } from '../models/workout.model';

@Injectable()
export class WorkoutService {
  workouts: Workout[] = [
    {
      id: 1,
      name: 'First',
      duration: 100,
      date: new Date(),
      description: 'not really much',
      src: 'https://he-david.github.io/angular-workout-tracker/assets/images/no-image.png',
    },
    {
      id: 2,
      name: 'Second',
      duration: 100,
      date: new Date(),
      description: 'not really much',
      src: 'https://he-david.github.io/angular-workout-tracker/assets/images/stretch.png',
    },
    {
      id: 3,
      name: 'Third',
      duration: 100,
      date: new Date(),
      description: 'not really much',
      src: 'https://he-david.github.io/angular-workout-tracker/assets/images/gym.png',
    },
  ];

  addWorkout(workout: Workout) {
    if (['gym', 'stretch', 'swimming', 'yoga'].includes(workout.src)) {
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
  }
}
