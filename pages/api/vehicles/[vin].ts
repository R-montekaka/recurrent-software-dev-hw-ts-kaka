import { NextApiRequest, NextApiResponse } from "next";
import vehicles from "../../../fixtures/vehicles.json";
import { Vehicle } from "interfaces";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const vehicle: Vehicle | undefined = vehicles.find(
    (v: Vehicle) => v.vin === req.query.vin
  );
  !!vehicle ? res.status(200).json(vehicle) : res.status(404);
}
