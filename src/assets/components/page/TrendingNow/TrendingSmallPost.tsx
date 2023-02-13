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
        <div className="tags">
          {props.tag && <div className="tag">{props.tag}</div>}
          <div className="bookmark">
            <ActionIcon icon={<BsBookmark size={20} />} />
          </div>
        </div>
        <a href={props.link} className="post-title">
          {props.title}
        </a>
        <div className="post-info">
          <div className="post-user-icon">
            <ActionIcon icon={<FiUser />} />
          </div>
          {props.user} <span> · {props.date}</span>
        </div>
      </div>
    </div>
  );
};
