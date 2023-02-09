import { BsBookmark } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { ActionIcon } from "../ActionIcon/ActionIcon";

export const TrendingBigPost = () => {
  return (
    <div className="big-post">
      <div>
        <div className="big-post-image">
          <img src="https://files.erasmusmagazine.nl/app/uploads/sites/8/2022/02/24152013/NFT-art-bitcoins-illustratie-groot-Esther-Dijkstra-1-scaled-2-1280x905.jpg" />
        </div>
        <div className="tags">
          <div className="tag">Business Spotlight</div>
          <div className="bookmark">
            <ActionIcon icon={<BsBookmark size={20} />} />
          </div>
        </div>

        <div className="post-title">COOP Network Spotlight</div>
      </div>

      <div className="post-info">
        <div className="post-user-icon">
          <ActionIcon icon={<FiUser />} />
        </div>
        Alexander Robertson <span> · 22 May, 2022</span>
      </div>
    </div>
  );
};
