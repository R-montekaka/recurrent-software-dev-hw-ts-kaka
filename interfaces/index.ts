export interface Vehicle {
  id: number;
  vin: string;
  mmy: {
    model: string;
    make: string;
    year: number;
  };
  color: string | null;
  created_at: string;
}
