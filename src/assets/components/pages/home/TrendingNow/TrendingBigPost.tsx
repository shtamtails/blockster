import { BsBookmark } from "react-icons/bs";
import { ActionIcon } from "../../../reusable/ActionIcon/ActionIcon";
import { Tag } from "../../../reusable/Tag/Tag";
import { TagsContainer } from "../../../reusable/Tag/TagsContainer";
import { PostProps } from "../Post/Post";

export const TrendingBigPost: React.FC<PostProps> = (props) => {
  return (
    <div className="big-post" style={{ width: `${props.imgWidth}`, height: `${props.imgHeight}` }}>
      <div className="big-post-body">
        <a href={props.link} className="big-post-image">
          <img src={props.img} style={{ width: `${props.imgWidth}`, height: `${props.imgHeight}` }} />
        </a>
        <div className="tags-container">
          {props.tags && (
            <TagsContainer>
              <>
                {props.tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </>
            </TagsContainer>
          )}
          <ActionIcon icon={<BsBookmark size={20} />} />
        </div>
        <div className="big-post-title">
          <a href={props.link} className="big-post-title">
            {props.title}
          </a>
        </div>
      </div>

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
  );
};
