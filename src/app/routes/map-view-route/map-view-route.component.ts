import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MapComponent, WeatherComponent } from '@components';
import { HouseService } from '@services';

@Component({
  selector: 'app-map-view-route',
  standalone: true,
  imports: [MapComponent, AsyncPipe, WeatherComponent],
  template: `
    @if (selectedHouse | async; as house) {
      <div class="flex w-full gap-8">
        <app-map [lat]="house.location.lat" [lng]="house.location.lng" />
        <app-weather />
      </div>
    }
  `,
})
export class MapViewRouteComponent {
  private activatedRoute = inject(ActivatedRoute);
  private houseService = inject(HouseService);
  houseId = Number(this.activatedRoute.snapshot.params['id']);
  selectedHouse = this.houseService.getHouse(this.houseId);
}
