import Image, { ImageLoaderProps } from "next/image";
import style from "./styles.module.sass";
import likeBtn from "../../../public/icons/heart-white-outline.png";
import likeBtnWhiteFill from '../../../public/icons/heart-filled-white.png'
import likeBtnFill from "../../../public/icons/heart-blue-fill.png";
import {MouseEvent} from "react";

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
interface CardProps extends PostProps{
  onFav: (e:MouseEvent<HTMLButtonElement>)=>void

}

const profileLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `https://robohash.org/${src}?w=${width}&q=${quality || 75}`;
};

function wrapHashtagsInSpan(input: string): string {
  return input.replace(/#\w+/g, (match) => {
    return `<span>${match}</span>`;
  });
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
  onFav
}: CardProps) {
    return (
    <div className={style.card}>
      <div className={style.cardHeader}>
        <div className={style.cardHeaderImage}>
          <Image
            fill
            loader={profileLoader}
            src={id}
            alt="dp"
          />
        </div>
        <span className={style.cardHeaderName}>{user}</span>
      </div>
      <div className={style.cardBody}>
        <div className={style.cardBodyImage}>
          <Image fill src={image} alt={"item"} />
        </div>
        <div className={style.cardBodyHeader}>
          <div className={style.cardBodyHeaderLeft}>
            <div className={style.cardBodyHeaderLeftTitle}>
              <p>{title}</p>
            </div>
            <div className={style.cardBodyHeaderLeftPrice}>
              <p>AED {price}</p>
            </div>
          </div>
          <div className={style.cardBodyHeaderRight}>
            <button onClick={onFav}>
              { isFavorite? <Image src={likeBtnWhiteFill} alt="liked" width={24} height={24} /> : <Image src={likeBtn} width={24} height={24} alt={""} />}
            </button>
          </div>
        </div>
        <div className={style.cardBodyContent}>
          <div className={style.cardBodyContentLikes}>
            <div className={style.cardBodyContentLikesIcon}>
              <Image
                src={likeBtnFill}
                width={24}
                height={24}
                alt={"like-btn-fill"}
              />
            </div>
            <p className={style.cardBodyContentLikesText}>{likes} likes</p>
          </div>
          <div className={style.cardBodyContentCaption}>
            <p
              dangerouslySetInnerHTML={{ __html: wrapHashtagsInSpan(caption) }}
            />
          </div>
          <div className={style.cardBodyContentComments}>
            <p>View 12 comments</p>
          </div>
        </div>
      </div>
    </div>
  );
}
