import { AiFillTwitterCircle } from "react-icons/ai";
import { BsBookmark, BsFacebook, BsLinkedin } from "react-icons/bs";
import { ActionIcon } from "../../reusable/ActionIcon/ActionIcon";
import { Tag } from "../../reusable/Tag/Tag";
import { TagsContainer } from "../../reusable/Tag/TagsContainer";
import { Title } from "../../reusable/Title/Title";
import { Post } from "../home/Post/Post";
import { TrendingBigPost } from "../home/TrendingNow/TrendingBigPost";
import "./PostPage.scss";
import "../home/TrendingNow/TrendingNow.scss";

export const PostPage = () => {
  return (
    <div className="content">
      <Title>Author / Post title</Title>
      <div className="post-page-image">
        <img src="https://miro.medium.com/max/1024/1*Dn5je5NOqqM3Mt6-nAmhKg.png" />
      </div>
      <div className="post-page-author-mobile">
        <Title hr>Published by</Title>
        <div className="post-page-author">
          <div className="post-page-author-header">
            <div className="post-page-author-publisher">
              <div className="post-page-author-img">
                <img src="https://this-person-does-not-exist.com/img/avatar-111c276c3589ed87c43c3d11bdfad9e4.jpg" />
              </div>
              <div className="post-page-author-publisher-info">
                <div className="post-page-author-publisher-name">Alexander Robertson</div>
                <div className="post-page-author-publisher-followers">77k followers</div>
              </div>
            </div>
            <div className="post-page-author-follow-btn">
              <button>Follow</button>
            </div>
          </div>
          <div className="post-page-author-body">Editor-in-chiewf of UX Planet</div>
        </div>
      </div>

      <div className="post-page-content">
        <div className="post-page-main">
          <div className="tags-container">
            {true && (
              <TagsContainer>
                <>
                  <Tag>Tag</Tag>
                </>
              </TagsContainer>
            )}

            <ActionIcon icon={<BsBookmark size={20} />} />
          </div>
          <div className="post-page-main-content">
            <h2>Lorem ipsum dolor sit amet.</h2>
            <hr></hr>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam facere molestiae est aut recusandae
            suscipit dicta <p></p>
            temporibus explicabo. Non asperiores quibusdam, a quisquam qui similique, soluta architecto in autem aut la
            <p></p>borum quasi obcaecati eius saepe ipsum, nulla excepturi ullam. Repellendus blanditiis ad sint eum!
            Culpa facilis magnam dignissimos consectetur cupiditate obcaecati hic odit harum qui in voluptate provident
            nulla, explicabo possimus numquam libero reiciendis dolore optio neque mollitia ipsa quam unde. Praesentium
            voluptatibus ducimu<p></p>s optio officiis, consequatur fugiat earum, aliquid alias quis assumenda, ipsam
            consectetur libero temporibus veniam
            <p></p>
            <img src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2022/10/18224526/Web3-social-graph.png" />
            <p></p>
            molestiae maiores unde neque. Necessitatibus tempore impedit rerum at id quas unde libero repudiandae nobis
            quia recusandae tenetur sint vero aliquam quasi eligendi saepe aut, voluptas h<p></p>arum perferendis rem
            sapiente eum dignissimos culpa. Itaque iusto inventore culpa accusantium, nobis modi veritatis est ipsum,
            distinctio dolorem fugiat dolore quis maiores a excepturi nihil. Vel, eaque neque! Dolor aperiam ex
            assumenda delectus nemo.
            <h3>How to do?</h3>
            <p></p>
            <img src="https://s3.cointelegraph.com/uploads/2022-02/03ff1d6e-568a-46a5-96a4-b14010e0707d.png" />
            <p></p>
            <h3>Sample text!</h3>
            <p></p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, ratione mollitia cupiditate ut ipsum
            numquam dolores aspernatur officiis suscipit beatae eligendi quia accusantium possimus harum odit maiores
            consectetur adipisci tenetur.
          </div>
          <div className="post-page-main-content-socials">
            Share:
            <ActionIcon icon={<AiFillTwitterCircle size={28} />} />
            <ActionIcon icon={<BsFacebook size={24} />} />
            <ActionIcon icon={<BsLinkedin size={24} />} />
          </div>
          <a href="#" className="main-ad">
            <img src="https://i.ibb.co/XpZ3H6K/Untitled-12.png" />
          </a>
          <div className="post-page-main-read-more">
            <Title>Read More</Title>
            <div className="post-page-read-more">
              <div className="post-page-read-more-left-block">
                <Post
                  img="https://images.lifestyleasia.com/wp-content/uploads/sites/2/2022/01/24163853/Right-Click-and-Save-guy-1.gif?tr=w-1200,h-900"
                  title="The most expensive NFT artworks sold till date"
                  tags={["Business Spotlight"]}
                  user="Maksim Yudzin"
                  date="23 February"
                  link="#"
                />
                <Post
                  img="https://images.lifestyleasia.com/wp-content/uploads/sites/2/2022/01/24163853/Right-Click-and-Save-guy-1.gif?tr=w-1200,h-900"
                  title="The most expensive NFT artworks sold till date"
                  tags={["Business Spotlight"]}
                  user="Maksim Yudzin"
                  date="23 February"
                  link="#"
                />
                <Post
                  img="https://images.lifestyleasia.com/wp-content/uploads/sites/2/2022/01/24163853/Right-Click-and-Save-guy-1.gif?tr=w-1200,h-900"
                  title="The most expensive NFT artworks sold till date"
                  tags={["Business Spotlight"]}
                  user="Maksim Yudzin"
                  date="23 February"
                  link="#"
                />
              </div>
              <div className="post-page-read-more-right-block">
                <Post
                  img="https://images.lifestyleasia.com/wp-content/uploads/sites/2/2022/01/24163853/Right-Click-and-Save-guy-1.gif?tr=w-1200,h-900"
                  title="The most expensive NFT artworks sold till date"
                  tags={["Business Spotlight"]}
                  user="Maksim Yudzin"
                  date="23 February"
                  link="#"
                />
                <Post
                  img="https://images.lifestyleasia.com/wp-content/uploads/sites/2/2022/01/24163853/Right-Click-and-Save-guy-1.gif?tr=w-1200,h-900"
                  title="The most expensive NFT artworks sold till date"
                  tags={["Business Spotlight"]}
                  user="Maksim Yudzin"
                  date="23 February"
                  link="#"
                />
                <Post
                  img="https://images.lifestyleasia.com/wp-content/uploads/sites/2/2022/01/24163853/Right-Click-and-Save-guy-1.gif?tr=w-1200,h-900"
                  title="The most expensive NFT artworks sold till date"
                  tags={["Business Spotlight"]}
                  user="Maksim Yudzin"
                  date="23 February"
                  link="#"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="post-page-aside">
          <Title hr>Published by</Title>
          <div className="post-page-author">
            <div className="post-page-author-header">
              <div className="post-page-author-publisher">
                <div className="post-page-author-img">
                  <img src="https://this-person-does-not-exist.com/img/avatar-111c276c3589ed87c43c3d11bdfad9e4.jpg" />
                </div>
                <div className="post-page-author-publisher-info">
                  <div className="post-page-author-publisher-name">Alexander Robertson</div>
                  <div className="post-page-author-publisher-followers">77k followers</div>
                </div>
              </div>
              <div className="post-page-author-follow-btn">
                <button>Follow</button>
              </div>
            </div>
            <div className="post-page-author-body">Editor-in-chiewf of UX Planet</div>
          </div>
          <div className="post-page-aside-author-articles">
            <Title
              hr
              end={
                <a href="#" className="title-see-all">
                  See all
                </a>
              }
            >
              Authors articles
            </Title>
            <Post
              img="https://images.lifestyleasia.com/wp-content/uploads/sites/2/2022/01/24163853/Right-Click-and-Save-guy-1.gif?tr=w-1200,h-900"
              title="The most expensive NFT artworks sold till date"
              tags={["Business Spotlight"]}
              user="Maksim Yudzin"
              date="23 February"
              link="#"
            />
            <Post
              img="https://images.lifestyleasia.com/wp-content/uploads/sites/2/2022/01/24163853/Right-Click-and-Save-guy-1.gif?tr=w-1200,h-900"
              title="The most expensive NFT artworks sold till date"
              tags={["Business Spotlight"]}
              user="Maksim Yudzin"
              date="23 February"
              link="#"
            />
            <Post
              img="https://images.lifestyleasia.com/wp-content/uploads/sites/2/2022/01/24163853/Right-Click-and-Save-guy-1.gif?tr=w-1200,h-900"
              title="The most expensive NFT artworks sold till date"
              tags={["Business Spotlight"]}
              user="Maksim Yudzin"
              date="23 February"
              link="#"
            />
          </div>
          <a href="#" className="aside-ad">
            <img src="https://i.ibb.co/sbDrhKp/Untitled-1.png" />
          </a>
        </div>
      </div>
    </div>
  );
};
