import { AiOutlineUser } from "react-icons/ai";
import { BsPlay, BsPlayCircle } from "react-icons/bs";
import { ActionIcon } from "../../../reusable/ActionIcon/ActionIcon";

interface PodcastProps {
  img: string;
  author: string;
  title: string;
  duration: string;
  src: string;
  listeners: string;
}

export const Podcast: React.FC<PodcastProps> = (props) => {
  return (
    <div className="podcast">
      <div className="podcast-img">
        <div className="play-btn">
          <ActionIcon icon={<BsPlay />} />
        </div>
        <img src={props.img} />
      </div>

      <div className="podcast-body">
        <a href={props.src} className="podcast-author">
          {props.author}
        </a>

        <a href={props.src} className="podcast-title">
          {props.title}
        </a>

        <div className="podcast-footer">
          <div className="podcast-play">
            <ActionIcon icon={<BsPlayCircle />} />
            <div className="podcast-duration">{props.duration}</div>
          </div>

          <div className="podcast-listeners">
            {props.listeners}
            <AiOutlineUser />
          </div>
        </div>
      </div>
    </div>
  );
};
