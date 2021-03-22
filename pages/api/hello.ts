import { NextApiRequest, NextApiResponse } from "next/types";

export default (_req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ text: "Hello" });
};
