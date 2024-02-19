import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { House } from '@models';

@Component({
  selector: 'app-house-card',
  standalone: true,
  imports: [RouterLink],
  template: `
    @if (house) {
      <section class="flex flex-col rounded-lg bg-main">
        <img
          class="object-cover h-[250px] w-full rounded-t-lg"
          src="{{ baseImage + house.photo }}"
        />
        <div class="flex flex-col gap-5 p-5">
          <h2>{{ house.name }}</h2>
          <p class="location">{{ house.city }},{{ house.state }}</p>
          <a routerLink="/house/{{ house.id }}">Learn more...</a>
        </div>
      </section>
    }
  `,
  styles: `
    .location::before {
      content: '📍';
    }
  `,
})
export class HouseCardComponent {
  @Input() house: House | undefined = undefined;
  baseImage = 'https://angular.io/assets/images/tutorials/faa/';
}
