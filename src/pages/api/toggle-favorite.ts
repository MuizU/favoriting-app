import { NextApiRequest, NextApiResponse } from "next";
import { promises as fs } from 'fs';
import posts from '@/data/posts.json'


export default async function toggleFavorite(
    req: NextApiRequest,
    res: NextApiResponse
){
    const { id } = req.query;
    if(!id){
        return res.status(400).json({message: 'No id provided'});
    }
    const updatedPosts = posts.map((post: any) => {
        if(post.id === id){
            const count = post.isFavorite ? post.likes-- : post.likes++;
            return {
                likes: count,
                ...post,
                isFavorite: !post.isFavorite
            }
        }
        return post;
    })
    try {
        await fs.writeFile('src/data/posts.json', JSON.stringify(updatedPosts, null, 4));
    } catch (error) {
        return res.status(400).json({message: 'Update failed'});
    }
    return res.status(200).json(updatedPosts.find((post: any) => post.id === id));
}