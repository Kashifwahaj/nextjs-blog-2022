// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// http://localhost:3000/api/getblog?q=how-js

import type { NextApiRequest, NextApiResponse } from 'next'
import * as fs from 'fs';

type Data = {
    data?: JSON;
    error?: string;
    key?: any
} | string | any | any[]



export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    try {
        const data = await fs.promises.readdir('dummy');
        let allBlogs: any = [];
        for (let i = 0; i < data.length; i++) {
            const fileData = await fs.promises.readFile('dummy/' + data[i], 'utf-8');
            allBlogs.push(JSON.parse(fileData))
        }

        res.status(200).json(allBlogs);
    } catch (error) {
        return res.status(404).json({
            "error": "no found"
        });
    }
   
  
}
