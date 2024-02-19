import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { HouseResponse } from '@models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HouseService {
  private http = inject(HttpClient);
  private URL = 'assets/db.json';

  getHouses = () =>
    this.http
      .get<HouseResponse>(this.URL)
      .pipe(map((response) => response.houses));

  getHouse = (id: number) =>
    this.http
      .get<HouseResponse>(this.URL)
      .pipe(
        map((response: HouseResponse) =>
          response.houses.find((house) => house.id === id),
        ),
      );

  filterHouses = (city: string) =>
    this.http
      .get<HouseResponse>(this.URL)
      .pipe(
        map((response: HouseResponse) =>
          response.houses.filter(
            (house) => house.city.toLowerCase() === city.toLowerCase(),
          ),
        ),
      );
}
