import { BsBookmark } from "react-icons/bs";
import { ActionIcon } from "../../../reusable/ActionIcon/ActionIcon";
import { Tag } from "../../../reusable/Tag/Tag";
import { TagsContainer } from "../../../reusable/Tag/TagsContainer";
import "./Post.scss";

export interface PostProps {
  img: string;
  title: string;
  tags?: string[];
  link: string;
  user: string;
  date: string;
  description?: string;
  postWidth?: string;
  postHeight?: string;
  imgWidth?: string;
  imgHeight?: string;
}

export const Post: React.FC<PostProps> = (props) => {
  return (
    <div className="post">
      <a href={props.link} className="post-image">
        <img src={props.img} style={{ width: `${props.imgWidth}`, height: `${props.imgHeight}` }} />
      </a>

      <div className="post-body" style={{ width: `${props.postWidth}`, height: `${props.postHeight}` }}>
        <div className="tags-container">
          {props.tags && (
            <TagsContainer>
              <>
                {props.tags.map((tag) => (
                  <Tag>{tag}</Tag>
                ))}
              </>
            </TagsContainer>
          )}

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
