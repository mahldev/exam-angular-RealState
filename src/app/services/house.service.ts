import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { HouseResponse } from '@models';

@Injectable({
  providedIn: 'root',
})
export class HouseService {
  private http = inject(HttpClient);
  private URL = 'assets/db.json';

  getHouses = () => this.http.get<HouseResponse>(this.URL);
}
