import { NextApiRequest, NextApiResponse } from "next";
import vehicles from "../../fixtures/vehicles.json";

export default function handler(_: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(vehicles);
}