import { Component, OnInit } from '@angular/core';
import { Workout } from '../models/workout.model';
import { WorkoutService } from '../services/workout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
})
export class WorkoutListComponent implements OnInit {
  potentiallyDeleted?: number;
  workouts: Workout[] = [];
  workoutNames: string[] = [];

  constructor(private workoutService: WorkoutService, private router: Router) {}

  ngOnInit(): void {
    this.workouts = this.workoutService.getWorkouts();
    this.workoutNames = this.setWorkoutNames();
  }

  onNavigateToEdit(workout: Workout) {
    this.router.navigate(['/edit', workout.id]);
  }

  onFilter(target: any) {
    const selected: string = target.value;
    if (selected === 'all') {
      this.workouts = this.workoutService.getWorkouts();
      return;
    }
    const allWorkout: Workout[] = this.workoutService.getWorkouts();
    this.workouts = allWorkout.filter(
      (workout) => workout.name.toLowerCase().trim() === selected
    );
  }

  onDeleteWorkout(id: number) {
    this.workoutService.deleteWorkout(id);
    this.potentiallyDeleted = undefined;
    this.workouts = this.workoutService.getWorkouts();
    this.workoutNames = this.setWorkoutNames();
  }

  private setWorkoutNames(): string[] {
    const names: string[] = [];
    this.workouts.forEach((workout) => {
      if (!names.includes(workout.name.toLowerCase().trim())) {
        names.push(workout.name.toLowerCase().trim());
      }
    });
    return names;
  }
}
