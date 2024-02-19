import { Routes } from '@angular/router';
import {
  HouseDetailsRouteComponent,
  MainRouteComponent,
  MapViewRouteComponent,
} from '@routes';

export const routes: Routes = [
  { path: '', component: MainRouteComponent },
  {
    path: 'house/:id',
    component: HouseDetailsRouteComponent,
  },
  { path: 'house/:id/map', component: MapViewRouteComponent },
];
