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
  description?: string;
  imgWidth?: string;
  imgHeight?: string;
}

export const Post: React.FC<PostProps> = (props) => {
  return (
    <div className="post">
      <a href={props.link} className="post-image">
        <img src={props.img} style={{ width: `${props.imgWidth}`, height: `${props.imgHeight}` }} />
      </a>

      <div className="post-body">
        <div className="tags-container">
          <div className="tags">{props.tag && <div className="tag">{props.tag}</div>}</div>
          <ActionIcon icon={<BsBookmark size={20} />} />
        </div>
        <a href={props.link} className="post-title">
          {props.title}
        </a>
        {props.description && <div className="post-description">{props.description}</div>}
        <div className="post-info">
          <div className="post-author">
            <ActionIcon
              img="https://www.artnews.com/wp-content/uploads/2022/01/unnamed-2.png?w=631"
              borderRadius="round"
            />
            {props.user}
          </div>
          <span>·</span>
          <div className="post-date">{props.date}</div>
        </div>
      </div>
    </div>
  );
};
