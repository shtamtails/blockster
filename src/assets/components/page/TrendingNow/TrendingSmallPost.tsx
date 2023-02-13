import { BsBookmark } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { ActionIcon } from "../../reusable/ActionIcon/ActionIcon";
import { PostProps } from "./TrendingBigPost";

export const TrendingSmallPost: React.FC<PostProps> = (props) => {
  return (
    <div className="small-post">
      <a href={props.link} className="small-post-image">
        <img src={props.img} />
      </a>

      <div className="small-post-info">
        <div className="tags-container">
          <div className="tags">{props.tag && <div className="tag">{props.tag}</div>}</div>
          <ActionIcon icon={<BsBookmark size={20} />} />
        </div>

        <a href={props.link} className="post-title">
          {props.title}
        </a>

        <div className="post-info">
          <div className="post-author">
            <ActionIcon icon={<FiUser />} />
            {props.user}
          </div>
          <span>·</span>
          <div className="post-date">{props.date}</div>
        </div>
      </div>
    </div>
  );
};
