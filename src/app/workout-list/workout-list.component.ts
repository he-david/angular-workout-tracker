import { Component, OnInit } from '@angular/core';
import { Workout } from '../models/workout.model';
import { WorkoutService } from '../services/workout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
})
export class WorkoutListComponent implements OnInit {
  workouts: Workout[] = [];
  workoutNames: string[] = [];

  constructor(private workoutService: WorkoutService, private router: Router) {}

  ngOnInit(): void {
    this.workouts = JSON.parse(
      JSON.stringify(this.workoutService.workouts.sort((a, b) => b.id - a.id))
    );
    this.workouts.forEach((workout) => {
      if (!this.workoutNames.includes(workout.name.toLowerCase())) {
        this.workoutNames.push(workout.name.toLowerCase());
      }
    });
  }

  onNavigateToEdit(workout: Workout) {
    this.router.navigate(['/edit', workout.id]);
  }

  onFilter(target: any) {
    const selected: string = target.value;
    if (selected === 'all') {
      this.workouts = JSON.parse(
        JSON.stringify(this.workoutService.workouts.sort((a, b) => b.id - a.id))
      );
      return;
    }
    const allWorkout: Workout[] = JSON.parse(
      JSON.stringify(this.workoutService.workouts.sort((a, b) => b.id - a.id))
    );
    this.workouts = allWorkout.filter(
      (workout) => workout.name.toLowerCase() === selected
    );
  }
}
