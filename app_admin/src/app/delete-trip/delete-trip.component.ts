import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TripDataService } from '../services/trip-data.service';
import { Trip } from '../models/trip';


@Component({
  selector: 'app-delete-trip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete-trip.component.html',
  styleUrl: './delete-trip.component.css'
})
export class DeleteTripComponent implements OnInit {
  tripCode: string = '';

  constructor(private router: Router,
    private tripService: TripDataService) { }

  ngOnInit(): void {

    // Retrieve stashed trip ID
    this.tripCode = localStorage.getItem("tripCode") || '';
    console.log("in delete-trip, tripcode: ", this.tripCode);
    if (!this.tripCode) {
      this.router.navigate(['']);
      return;
    }
  }

  public confirmDelete() {
    console.log('confirm delete...');
    this.tripService.deleteTrip(this.tripCode).then((data) => {
      console.log('deleted trip...')
      this.router.navigate(['list-trips']);
    });
  }

  public cancelDelete() {
    console.log('cancel delete...')
    this.router.navigate(['list-trips']);
  }
}
