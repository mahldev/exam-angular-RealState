import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HouseCardComponent } from '@components';
import { HouseService } from 'app/services/house.service';

@Component({
  selector: 'app-main-route',
  standalone: true,
  imports: [AsyncPipe, HouseCardComponent],
  template: `
    <div class="flex gap-3">
      <input
        type="text"
        class="rounded-md border-gray-300 shadow-sm
          focus:border-indigo-300
          focus:ring focus:ring-indigo-200
          focus:ring-opacity-50 w-full
          py-2 px-3 sm:text-sm border-2"
        placeholder="Filter by city"
        (input)="handleFilter($event)"
      />
    </div>
    @if (houses | async; as response) {
      <div class="grid grid-cols-3 gap-5 mt-3">
        @for (house of response; track house.id) {
          <app-house-card [house]="house" />
        }
      </div>
    }
  `,
})
export class MainRouteComponent {
  private houseServive = inject(HouseService);
  houses = this.houseServive.getHouses();

  filterHouses = (city: string) =>
    (this.houses = this.houseServive.filterHouses(city));

  handleFilter = (event: Event) => {
    const city = (event.target as HTMLInputElement).value;
    console.log(city);
    city === ''
      ? (this.houses = this.houseServive.getHouses())
      : this.filterHouses(city);
  };
}
