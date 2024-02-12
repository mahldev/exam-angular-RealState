import { Component, Input } from '@angular/core';
import { House } from '@models';

@Component({
  selector: 'app-house-card',
  standalone: true,
  imports: [],
  template: `
    @if (house) {
      <div class="flex flex-col">
        <img src="{{ this.baseImage + house.photo }}" />
        <div>
          <p>{{ house.name }}</p>
          <p>{{ house.city }}</p>
        </div>
      </div>
    }
  `,
  styles: ``,
})
export class HouseCardComponent {
  @Input() house: House | undefined = undefined;
  baseImage = 'https://angular.io/assets/images/tutorials/faa/';
}
