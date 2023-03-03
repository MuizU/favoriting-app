import { NextApiRequest, NextApiResponse } from "next";
import posts from '@/data/posts.json'

export default async function getFavorites(
    _req: NextApiRequest,
    res: NextApiResponse
){
    const favorites = posts.filter(({isFavorite}: any) => isFavorite);
    return res.status(200).json(favorites);
}