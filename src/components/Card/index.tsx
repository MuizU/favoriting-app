import Image from "next/image";
import style from "./styles.module.sass";
export interface PostProps {
  id: string;
  user: string;
  likes: number;
  title: string;
  caption: string;
  image: string;
  price: number;
  isFavorite: boolean;
}

const profileLoader = ({ src, width, quality }:any) => {
  return `https://robohash.org/${src}?w=${width}&q=${quality || 75}`
}

export default function Card({
  id,
  user,
  likes,
  title,
  caption,
  image,
  price,
  isFavorite,
}: PostProps) {
  return (
    <div className={style.card}>
      <div className={style.cardHeader}>
        <div className={style.cardheaderImage}>
          <Image
            width={24}
            loader={profileLoader}
            height={24}
            src={id}
            alt="img"
          />
        </div>
        <p className={style.cardHeaderName}>{user}</p>
      </div>
      <div className={style.cardBody}>
      <Image
        width={300}
        height={300}
        src={image} alt={""}    />

      </div>
    </div>
  );
}
