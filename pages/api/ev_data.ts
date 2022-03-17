import { NextApiRequest, NextApiResponse } from "next";
import EVData from "../../fixtures/ev_data.json";

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(EVData);
};

export default handler;
