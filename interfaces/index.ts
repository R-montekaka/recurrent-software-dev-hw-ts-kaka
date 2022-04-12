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

export interface DataPoint {
  vin: string;
  charge_reading: number;
  range_estimate: number;
  odometer: number;
  plugged_in: boolean;
  charging: boolean;
  created_at: string;
}

export interface VehicleDataPoint {
  has_charge_above: boolean;
  created_at: string;
  odometer: number;
}