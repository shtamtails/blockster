import { ReactElement } from "react";
import { IconType } from "react-icons";
import { ActionIcon } from "../../../reusable/ActionIcon/ActionIcon";

interface AsidePostProps {
  srcIcon: string;
  srcName: string;
  src: string;
  time: string;
  srcSocialIcon: ReactElement<IconType>;
  content: string;
}

export const AsidePost: React.FC<AsidePostProps> = (props) => {
  return (
    <div className="aside-post">
      <div className="post-header">
        <div className="post-source">
          <div className="post-icon">
            <ActionIcon img={props.srcIcon} borderRadius="round" />
          </div>
          <a href={props.src} className="post-source-name">
            {props.srcName} <span className="post-time"> · {props.time}</span>
          </a>
        </div>

        <div className="post-social">
          <ActionIcon icon={props.srcSocialIcon} />
        </div>
      </div>
      <a href={props.src} className="post-body">
        {props.content}
      </a>
    </div>
  );
};
