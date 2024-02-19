import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { WheaterAPI } from '@models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private http = inject(HttpClient);
  private BASE_URL = 'https://api.weatherapi.com/v1/current.json';
  private API_KEY = '15535478b297463a80d191436241902';

  getWeather = (lat: number, lng: number) =>
    this.http
      .get<WheaterAPI>(`${this.BASE_URL}?key=${this.API_KEY}&q=${lat},${lng}`)
      .pipe(map((response) => response.current));
}
