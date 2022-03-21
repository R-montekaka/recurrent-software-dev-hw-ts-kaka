import { NextApiRequest, NextApiResponse } from "next";
import datapoints from "../../../../fixtures/data_points.json";

interface DataPoint {
  vin: string;
  charge_reading: number;
  range_estimate: number;
  odometer: number;
  plugged_in: boolean;
  charging: boolean;
  created_at: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const matching_datapoints : DataPoint[] = datapoints.filter((dp:DataPoint) => dp.vin === req.query.vin);
  !!matching_datapoints ? res.status(200).json(matching_datapoints) : res.status(404);
}