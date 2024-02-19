import { AfterViewInit, Component, Input } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  template: ` <div id="map" class="w-[500px] h-[500px]"></div> `,
})
export class MapComponent implements AfterViewInit {
  @Input() lat: number | undefined;
  @Input() lng: number | undefined;
  map: L.Map | undefined;

  ngAfterViewInit(): void {
    if (this.lat && this.lng)
      this.initMap({
        lat: this.lat,
        lng: this.lng,
        zoom: 16,
      });
  }

  initMap({
    lat,
    lng,
    zoom,
  }: {
    lat: number;
    lng: number;
    zoom: number;
  }): void {
    this.map = L.map('map').setView([lat, lng], zoom);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(this.map);

    L.marker([lat, lng]).addTo(this.map).openPopup();
  }
}
