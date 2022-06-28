// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// http://localhost:3000/api/getblog?q=how-js

import type { NextApiRequest, NextApiResponse } from 'next'
import * as fs from 'fs';

type Data = {
  data?: JSON;
  error?: string
}

type RData = {
  q?: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const query: RData = req.query;
  fs.readFile(`dummy/${query.q}.json`, 'utf-8', (err, data) => {
    if (err) {
      return res.status(404).json({
        "error": "no blog found",
      });
    }
    res.status(200).json(JSON.parse(data))
  })
}
