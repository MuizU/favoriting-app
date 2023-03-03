import { NextApiRequest, NextApiResponse } from "next";
import posts from '@/data/posts.json'

export default async function getFavorites(
    _req: NextApiRequest,
    res: NextApiResponse
){
    return res.status(200).json(posts);
}