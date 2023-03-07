import style from './styles.module.sass'
import Image from "next/image";
import RemoveBtn from '../../../public/icons/remove-icon.png'
import {MouseEvent} from "react";

 export interface FavoriteProps {
    id: string;
    image: string;
    price: string;
}

interface FavoriteCardProps extends FavoriteProps {
    onFav: (e: MouseEvent<HTMLButtonElement>) => void
}

export default function FavoriteCard({image, price,onFav}: FavoriteCardProps) {

    return (
        <div className={style.favoriteCard}>
            <div className={style.favoriteCardImage}>
                <Image fill src={image} alt={"item"}/>
            </div>
            <button onClick={onFav}>
                <Image src={RemoveBtn} alt={"remove"} width={16} height={16} />
            </button>

            <div className={style.favoriteCardPrice}>
                <p>AED {price}</p>
            </div>
        </div>
    );
}
