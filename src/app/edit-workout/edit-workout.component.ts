import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../services/workout.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Workout } from '../models/workout.model';

@Component({
  selector: 'app-edit-workout',
  templateUrl: './edit-workout.component.html',
})
export class EditWorkoutComponent implements OnInit {
  invalidForm = false;
  id: number = -1;

  name: string = '';
  duration?: number;
  date?: Date;
  description?: string;

  constructor(
    private workoutService: WorkoutService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id')!);
    const workout = this.workoutService.workouts.find(
      (workout) => this.id === workout.id
    )!;
    this.name = workout.name;
    this.duration = workout.duration;
    this.date = workout.date;
    this.description = workout.description;
  }

  onEditWorkout() {
    if (!this.valid()) {
      this.invalidForm = true;
      return;
    }

    const editedWorkout: Workout = {
      id: this.id,
      name: this.name,
      duration: this.duration!,
      date: this.date!,
      src: this.name.toLowerCase().trim(),
      description: this.description,
    };
    this.workoutService.editWorkout(editedWorkout);
    this.router.navigateByUrl('');
  }

  private valid() {
    return this.name.length > 0 && this.duration && this.date;
  }
}
