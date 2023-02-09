import { ReactElement } from "react";
import { IconType } from "react-icons";

import { ActionIcon } from "../ActionIcon/ActionIcon";

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
    <div className="post">
      <div className="post-header">
        <div className="post-icon">
          <ActionIcon img={props.srcIcon} borderRadius="round" />
        </div>
        <div className="post-source">
          {props.srcName} · <span className="post-time">{props.time}</span>
        </div>
        <div className="post-social">
          <ActionIcon icon={props.srcSocialIcon} />
        </div>
      </div>
      <div className="post-body">{props.content}</div>
    </div>
  );
};
