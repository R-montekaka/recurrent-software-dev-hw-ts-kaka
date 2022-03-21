import { NextApiRequest, NextApiResponse } from "next";
import vehicles from "../../../fixtures/vehicles.json";

interface Vehicle {
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

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const vehicle : Vehicle | undefined = vehicles.find((v:Vehicle) => v.vin === req.query.vin);
  !!vehicle ? res.status(200).json(vehicle) : res.status(404);
}