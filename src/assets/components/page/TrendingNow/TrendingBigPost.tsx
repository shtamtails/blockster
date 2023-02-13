import { BsBookmark } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { ActionIcon } from "../../reusable/ActionIcon/ActionIcon";

export interface PostProps {
  img: string;
  title: string;
  tag?: string;
  link: string;
  user: string;
  date: string;
}

export const TrendingBigPost: React.FC<PostProps> = (props) => {
  return (
    <div className="big-post">
      <div>
        <a href={props.link} className="big-post-image">
          <img src={props.img} />
        </a>
        <div className="tags-container">
          <div className="tags">{props.tag && <div className="tag">{props.tag}</div>}</div>
          <ActionIcon icon={<BsBookmark size={20} />} />
        </div>

        <a href={props.link} className="post-title">
          {props.title}
        </a>
      </div>

      <div className="post-info">
        <div className="post-author">
          <ActionIcon icon={<FiUser />} />
          {props.user}
        </div>
        <span>·</span>
        <div className="post-date">{props.date}</div>
      </div>
    </div>
  );
};
