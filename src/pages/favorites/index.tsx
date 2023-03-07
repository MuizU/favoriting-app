import style from './styles.module.sass'
import { server } from "@/config";
import FavoriteCard, { FavoriteProps } from "@/components/FavoriteCard";
import { MouseEvent } from "react";
import { useRouter } from "next/router";
import { InferGetServerSidePropsType } from 'next';

export async function getServerSideProps() {
    const data = await fetch(`${server}/api/get-favorites`);
    const posts = await data.json();
    if(!posts){
        return {
            notFound: true
        }
    }
    return { props: { posts } };
}

export default function Favorites({ posts }: InferGetServerSidePropsType<typeof getServerSideProps>) {

    const router = useRouter()

    const handleFav = async (e: MouseEvent<HTMLButtonElement>, id: string) => {
        e.preventDefault()
        try {
            await fetch(`${server}/api/toggle-favorite?id=${id}`, {
                method: 'PUT',

            })
            await router.replace(router.asPath)

        } catch (e) {
            console.log(e)
        }
    }
    return (
        <div className={style.favorites}>
            <h1>Favorites</h1>
            <div className={style.favoritesList}>
                {
                    posts.map(({ id, image, price }: FavoriteProps) => (
                        <FavoriteCard onFav={(e: MouseEvent<HTMLButtonElement>) => handleFav(e, id)} key={id} id={id}
                            image={image} price={price} />))
                }
            </div>
        </div>
    )
}