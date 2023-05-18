// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
export const config = { runtime: 'edge' }

type Data = {
  name: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

  const fetchData = await axios.get('http://localhost:3001/api/anilist/trending')

  res.status(200).json(fetchData?.data as any)
}
