import { NextApiRequest, NextApiResponse } from "next";
import datapoints from "../../fixtures/data_points.json";

export default function handler(_: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(datapoints);
}