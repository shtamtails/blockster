import { BsBookmark } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { ActionIcon } from "../ActionIcon/ActionIcon";

export const TrendingSmallPost = () => {
  return (
    <div className="small-post">
      <div className="small-post-image">
        <img src="https://uk.sganalytics.com/assets/uploads/fcimages/images/NFT%20digital%20art.jpg" />
      </div>
      <div className="small-post-info">
        <div className="tags">
          <div className="tag">Business Spotlight</div>
          <div className="bookmark">
            <ActionIcon icon={<BsBookmark size={20} />} />
          </div>
        </div>
        <div className="post-title">How realistic is a $400,000 Bitcoid asd asn?</div>
        <div className="post-info">
          <div className="post-user-icon">
            <ActionIcon icon={<FiUser />} />
          </div>
          Alexander Robertson <span> · 22 May, 2022</span>
        </div>
      </div>
    </div>
  );
};
