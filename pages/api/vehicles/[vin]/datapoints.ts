import { NextApiRequest, NextApiResponse } from "next";
import datapoints from "../../../../fixtures/data_points.json";
import { DataPoint } from "interfaces";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const matching_datapoints: DataPoint[] = datapoints.filter(
    (dp: DataPoint) => dp.vin === req.query.vin
  );
  !!matching_datapoints
    ? res.status(200).json(matching_datapoints)
    : res.status(404);
}
