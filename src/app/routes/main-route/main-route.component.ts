import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HouseCardComponent } from '@components';
import { HouseService } from 'app/services/house.service';

@Component({
  selector: 'app-main-route',
  standalone: true,
  imports: [AsyncPipe, HouseCardComponent],
  template: `
    @if (housesResponse | async; as response) {
      <div class="grid grid-cols-3 gap-5 p-5">
        @for (house of response.houses; track house.id) {
          <app-house-card [house]="house" />
        }
      </div>
    }
  `,
})
export class MainRouteComponent {
  private houseServive = inject(HouseService);
  housesResponse = this.houseServive.getHouses();
}
