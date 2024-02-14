import { Component, Input } from '@angular/core';
import { House } from '@models';

@Component({
  selector: 'app-house-card',
  standalone: true,
  imports: [],
  template: `
    @if (house) {
      <section class="flex flex-col rounded-lg">
        <img
          src="{{ baseImage + house.photo }}"
          class="object-cover h-[250px] w-full rounded-lg"
        />
        <div class="flex flex-col gap-5">
          <h2>{{ house.name }}</h2>
          <p>{{ house.city }}</p>
        </div>
      </section>
    }
  `,
})
export class HouseCardComponent {
  @Input() house: House | undefined = undefined;
  baseImage = 'https://angular.io/assets/images/tutorials/faa/';
}
