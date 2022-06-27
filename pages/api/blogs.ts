// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// http://localhost:3000/api/getblog?q=how-js

import type { NextApiRequest, NextApiResponse } from 'next'
import * as fs from 'fs';

type Data = {
    data?: JSON;
    error?: string;
    key?: any
} | string | any



export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    fs.readdir(`dummy`, (err, data) => {
        if (err) {
            return res.status(404).json({
                "error": "no found"
            });
        }
        res.status(200).json(data);
    })
}
