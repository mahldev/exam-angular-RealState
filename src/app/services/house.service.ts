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

  housesStatic = [
    {
      id: 0,
      name: 'Acme Fresh Start Housing',
      city: 'Chicago',
      state: 'IL',
      photo: 'bernard-hermant-CLKGGwIBTaY-unsplash.jpg',
      availableUnits: 4,
      wifi: true,
      laundry: true,
      location: {
        lat: 41.8781,
        lng: -87.6298,
      },
      score: 3,
    },
    {
      id: 1,
      name: 'A113 Transitional Housing',
      city: 'Santa Monica',
      state: 'CA',
      photo: 'brandon-griggs-wR11KBaB86U-unsplash.jpg',
      availableUnits: 0,
      wifi: false,
      laundry: true,
      location: {
        lat: 34.0194,
        lng: -118.4912,
      },
      score: 10,
    },
    {
      id: 2,
      name: 'Warm Beds Housing Support',
      city: 'Juneau',
      state: 'AK',
      photo: 'i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg',
      availableUnits: 1,
      wifi: false,
      laundry: false,
      location: {
        lat: 58.3019,
        lng: -134.4197,
      },
      score: 5,
    },
    {
      id: 3,
      name: 'Homesteady Housing',
      city: 'Chicago',
      state: 'IL',
      photo: 'ian-macdonald-W8z6aiwfi1E-unsplash.jpg',
      availableUnits: 1,
      wifi: true,
      laundry: false,
      location: {
        lat: 41.8781,
        lng: -87.6298,
      },
      score: 7,
    },
    {
      id: 4,
      name: 'Happy Homes Group',
      city: 'Gary',
      state: 'IN',
      photo: 'krzysztof-hepner-978RAXoXnH4-unsplash.jpg',
      availableUnits: 1,
      wifi: true,
      laundry: false,
      location: {
        lat: 41.5934,
        lng: -87.3464,
      },
      score: 2,
    },
    {
      id: 5,
      name: 'Hopeful Apartment Group',
      city: 'Oakland',
      state: 'CA',
      photo: 'r-architecture-JvQ0Q5IkeMM-unsplash.jpg',
      availableUnits: 2,
      wifi: true,
      laundry: true,
      location: {
        lat: 37.8044,
        lng: -122.2711,
      },
      score: 9,
    },
    {
      id: 6,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: 'phil-hearing-IYfp2Ixe9nM-unsplash.jpg',
      availableUnits: 5,
      wifi: true,
      laundry: true,
      location: {
        lat: 37.8044,
        lng: -122.2711,
      },
      score: 6,
    },
    {
      id: 7,
      name: 'Hopeful Housing Solutions',
      city: 'Oakland',
      state: 'CA',
      photo: 'r-architecture-GGupkreKwxA-unsplash.jpg',
      availableUnits: 2,
      wifi: true,
      laundry: true,
      location: {
        lat: 37.8044,
        lng: -122.2711,
      },
      score: 8,
    },
    {
      id: 8,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: 'saru-robert-9rP3mxf8qWI-unsplash.jpg',
      availableUnits: 10,
      wifi: false,
      laundry: false,
      location: {
        lat: 37.8044,
        lng: -122.2711,
      },
      score: 2,
    },
    {
      id: 9,
      name: 'Capital Safe Towns',
      city: 'Portland',
      state: 'OR',
      photo: 'webaliser-_TPTXZd9mOo-unsplash.jpg',
      availableUnits: 6,
      wifi: true,
      laundry: true,
      location: {
        lat: 45.5051,
        lng: -122.675,
      },
      score: 9,
    },
  ];

  getHouseStatic = (id: number) =>
    this.housesStatic.find((house) => house.id === id);

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

  changeScoreStatic = (id: number, score: number) => {
    const house = this.housesStatic.find((house) => house.id === id);
    if (house) house.score = score;
  };
}
