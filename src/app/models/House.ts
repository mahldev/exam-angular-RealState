export type House = {
  id: number;
  name: string;
  city: string;
  state: string;
  photo: string;
  availableUnits: number;
  wifi: boolean;
  laundry: boolean;
  location: {
    lat: number;
    lng: number;
  };
};
