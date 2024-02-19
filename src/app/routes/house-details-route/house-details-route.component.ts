import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HouseDetailsFormComponent } from '@components';
import { HouseService } from '@services';

@Component({
  selector: 'app-house-details-route',
  standalone: true,
  imports: [AsyncPipe, HouseDetailsFormComponent, RouterLink],
  template: `
    @if (house | async; as house) {
      <article>
        <img
          class="listing-photo"
          src="{{ baseImage + house?.photo }}"
          alt="Exterior photo of {{ house?.name }}"
        />
        <section class="listing-description">
          <h2 class="listing-heading">{{ house.name }}</h2>
          <p class="listing-location">{{ house.city }}, {{ house.state }}</p>
        </section>
        <section class="listing-features">
          <h2 class="section-heading">About this housing location</h2>
          <ul>
            <li>Units available: {{ house?.availableUnits }}</li>
            <li>Does this location have wifi: {{ house.wifi }}</li>
            <li>Does this location have laundry: {{ house.laundry }}</li>
            <li><a routerLink="map">See on map view</a></li>
          </ul>
        </section>
        <app-house-details-form />
      </article>
    }
  `,
  styles: `
    .listing-photo {
      height: 600px;
      width: 50%;
      object-fit: cover;
      border-radius: 30px;
      float: right;
    }

    .listing-heading {
      font-size: 48pt;
      font-weight: bold;
      margin-bottom: 15px;
    }

    .listing-location::before {
      content: url('/assets/location-pin.svg') / '';
    }

    .listing-location {
      font-size: 24pt;
      margin-bottom: 15px;
    }

    .listing-features > .section-heading {
      font-size: 24pt;
      margin-bottom: 15px;
    }

    .listing-features {
      margin-bottom: 20px;
    }

    .listing-features li {
      font-size: 14pt;
    }

    li {
      list-style-type: none;
    }

    .listing-apply .section-heading {
      font-size: 18pt;
      margin-bottom: 15px;
    }

    label,
    input {
      display: block;
    }
    label {
      color: var(--secondary-color);
      font-weight: bold;
      text-transform: uppercase;
      font-size: 12pt;
    }
    input {
      font-size: 16pt;
      margin-bottom: 15px;
      padding: 10px;
      width: 400px;
      border-top: none;
      border-right: none;
      border-left: none;
      border-bottom: solid 0.3px;
    }
    @media (max-width: 1024px) {
      .listing-photo {
        width: 100%;
        height: 400px;
      }
    }
  `,
})
export class HouseDetailsRouteComponent {
  private houseService = inject(HouseService);
  private activedRoute = inject(ActivatedRoute);
  baseImage = 'https://angular.io/assets/images/tutorials/faa/';

  houseId = Number(this.activedRoute.snapshot.params['id']);
  house = this.houseService.getHouse(this.houseId);
}
