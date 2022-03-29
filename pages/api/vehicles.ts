import { NextApiRequest, NextApiResponse } from "next";
import vehicles from "../../fixtures/vehicles.json";
import datapoints from "../../fixtures/data_points.json";
import { DataPoint, Vehicle } from "interfaces";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { chargedAbove },
  } = req;

  if (chargedAbove === undefined || chargedAbove === "") {
    res.status(200).json(vehicles);
  } else if (isNaN(chargedAbove)) {
    res.status(400).json({
      error: `chargedAbove should be a number. Received ${chargedAbove}`,
    });
  } else {
    const matching_datapoints: Observable<String[]> = new Set(
      datapoints.map((dp: DataPoint) => {
        if (dp.charge_reading > chargedAbove) return dp.vin;
      })
    );
    const matchingVehicles = vehicles.filter((vehicle: Vehicle) =>
      matching_datapoints.has(vehicle.vin)
    );
    res.status(200).json(matchingVehicles);
  }
}
