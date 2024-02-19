import { AsyncPipe } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { WeatherService } from '@services';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    @if (currentWeather | async; as weather) {
      <section class="weather">
        <h2 class="text-3xl">Current Weather</h2>
        <p>Temperature: {{ weather.temp_c }}°C</p>
        <p>Condition: {{ weather.condition.text }}</p>
        <p>Wind: {{ weather.wind_kph }} kph</p>
      </section>
    }
  `,
})
export class WeatherComponent {
  private weatherService = inject(WeatherService);
  @Input() lng: number = 0;
  @Input() lat: number = 0;

  currentWeather = this.weatherService.getWeather(this.lat, this.lng);
}
