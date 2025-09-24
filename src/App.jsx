import React from "react";
import "./App.css";

function App() {
  return (
    <div className="body_container">
      <div className="container">
        {/* Header */}
        <header className="header_container">
          <h1 className="header_title">CodeHelp Blogs</h1>
          <p className="header_desc">
            Utilize this space to incorporate a captivating subheading crafted
            by ChatGPT, adding depth and intrigue to your blog.
          </p>
        </header>

        {/* Main cards section */}
        <main className="main_container">

          {/* Card 1 */}
          <div className="card_container">
            <a href="#" className="card_image_container">
              <img
                src="https://picsum.photos/600/400"
                alt="card 1"
                className="card_image"
                loading="lazy"
              />
            </a>
            <div className="card_title_container">
              <a href="#" className="card_title_anchor">
                <h2 className="card_title">New Gadgets Released</h2>
              </a>
              <p className="card_desc">
                Check out the latest tech gadgets hitting the market, from
                smartphones to smartwatches.
              </p>
            </div>
            <div className="card_footer_container">
              <div className="author_container">
                <div className="author_avatar_container">
                  <img
                    src="https://api.dicebear.com/7.x/notionists/svg?seed=John?size=64"
                    loading="lazy"
                    className="author_avatar"
                    alt="avatar 1"
                  />
                </div>
                <div className="author_info_container">
                  <span className="author_name">John Doe</span>
                  <span className="author_date">Sept 19, 2021</span>
                </div>
              </div>
              <div>
                <span className="card_tag_container">Technology</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card_container">
            <a href="#" className="card_image_container">
              <img
                src="https://picsum.photos/600/400"
                alt="card 2"
                className="card_image"
                loading="lazy"
              />
            </a>
            <div className="card_title_container">
              <a href="#" className="card_title_anchor">
                <h2 className="card_title">Latest Smartphone Trends</h2>
              </a>
              <p className="card_desc">
                Explore the innovations in smartphone technology and designs.
              </p>
            </div>
            <div className="card_footer_container">
              <div className="author_container">
                <div className="author_avatar_container">
                  <img
                    src="https://api.dicebear.com/7.x/notionists/svg?seed=Jane?size=64"
                    loading="lazy"
                    className="author_avatar"
                    alt="avatar 2"
                  />
                </div>
                <div className="author_info_container">
                  <span className="author_name">Jane Smith</span>
                  <span className="author_date">Oct 01, 2021</span>
                </div>
              </div>
              <div>
                <span className="card_tag_container">Gadgets</span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card_container">
            <a href="#" className="card_image_container">
              <img
                src="https://source.unsplash.com/random/600x400?travel"
                alt="card 3"
                className="card_image"
                loading="lazy"
              />
            </a>
            <div className="card_title_container">
              <a href="#" className="card_title_anchor">
                <h2 className="card_title">Travel on Budget</h2>
              </a>
              <p className="card_desc">
                Tips and tricks for traveling the world without breaking the
                bank.
              </p>
            </div>
            <div className="card_footer_container">
              <div className="author_container">
                <div className="author_avatar_container">
                  <img
                    src="https://api.dicebear.com/7.x/notionists/svg?seed=Alex?size=64"
                    loading="lazy"
                    className="author_avatar"
                    alt="avatar 3"
                  />
                </div>
                <div className="author_info_container">
                  <span className="author_name">Alex Brown</span>
                  <span className="author_date">Oct 10, 2021</span>
                </div>
              </div>
              <div>
                <span className="card_tag_container">Travel</span>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="card_container">
            <a href="#" className="card_image_container">
              <img
                src="https://source.unsplash.com/random/600x400?productivity"
                alt="card 4"
                className="card_image"
                loading="lazy"
              />
            </a>
            <div className="card_title_container">
              <a href="#" className="card_title_anchor">
                <h2 className="card_title">Boost Productivity</h2>
              </a>
              <p className="card_desc">
                Learn the best strategies to stay productive and manage your
                time effectively.
              </p>
            </div>
            <div className="card_footer_container">
              <div className="author_container">
                <div className="author_avatar_container">
                  <img
                    src="https://api.dicebear.com/7.x/notionists/svg?seed=Sara?size=64"
                    loading="lazy"
                    className="author_avatar"
                    alt="avatar 4"
                  />
                </div>
                <div className="author_info_container">
                  <span className="author_name">Sara Lee</span>
                  <span className="author_date">Nov 02, 2021</span>
                </div>
              </div>
              <div>
                <span className="card_tag_container">Productivity</span>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="card_container">
            <a href="#" className="card_image_container">
              <img
                src="https://source.unsplash.com/random/600x400?mindfulness"
                alt="card 5"
                className="card_image"
                loading="lazy"
              />
            </a>
            <div className="card_title_container">
              <a href="#" className="card_title_anchor">
                <h2 className="card_title">Mindfulness Practices</h2>
              </a>
              <p className="card_desc">
                Daily mindfulness practices to reduce stress and increase
                happiness.
              </p>
            </div>
            <div className="card_footer_container">
              <div className="author_container">
                <div className="author_avatar_container">
                  <img
                    src="https://api.dicebear.com/7.x/notionists/svg?seed=Mike?size=64"
                    loading="lazy"
                    className="author_avatar"
                    alt="avatar 5"
                  />
                </div>
                <div className="author_info_container">
                  <span className="author_name">Mike Johnson</span>
                  <span className="author_date">Nov 15, 2021</span>
                </div>
              </div>
              <div>
                <span className="card_tag_container">Lifestyle</span>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="card_container">
            <a href="#" className="card_image_container">
              <img
                src="https://source.unsplash.com/random/600x400?healthy"
                alt="card 6"
                className="card_image"
                loading="lazy"
              />
            </a>
            <div className="card_title_container">
              <a href="#" className="card_title_anchor">
                <h2 className="card_title">Healthy Living Tips</h2>
              </a>
              <p className="card_desc">
                Improve your health with simple diet and exercise habits.
              </p>
            </div>
            <div className="card_footer_container">
              <div className="author_container">
                <div className="author_avatar_container">
                  <img
                    src="https://api.dicebear.com/7.x/notionists/svg?seed=Lily?size=64"
                    loading="lazy"
                    className="author_avatar"
                    alt="avatar 6"
                  />
                </div>
                <div className="author_info_container">
                  <span className="author_name">Lily Evans</span>
                  <span className="author_date">Dec 01, 2021</span>
                </div>
              </div>
              <div>
                <span className="card_tag_container">Health</span>
              </div>
            </div>
          </div>

          {/* Card 7 */}
          <div className="card_container">
            <a href="#" className="card_image_container">
              <img
                src="https://source.unsplash.com/random/600x400?sustainability"
                alt="card 7"
                className="card_image"
                loading="lazy"
              />
            </a>
            <div className="card_title_container">
              <a href="#" className="card_title_anchor">
                <h2 className="card_title">Sustainable Living</h2>
              </a>
              <p className="card_desc">
                Learn how to live sustainably and reduce your carbon footprint.
              </p>
            </div>
            <div className="card_footer_container">
              <div className="author_container">
                <div className="author_avatar_container">
                  <img
                    src="https://api.dicebear.com/7.x/notionists/svg?seed=Chris?size=64"
                    loading="lazy"
                    className="author_avatar"
                    alt="avatar 7"
                  />
                </div>
                <div className="author_info_container">
                  <span className="author_name">Chris Green</span>
                  <span className="author_date">Dec 10, 2021</span>
                </div>
              </div>
              <div>
                <span className="card_tag_container">Environment</span>
              </div>
            </div>
          </div>
             {/* Card 8 */}
          <div className="card_container">
            <a href="#" className="card_image_container">
              <img
                src="https://source.unsplash.com/random/600x400?mindfulness"
                alt="card 8"
                className="card_image"
                loading="lazy"
              />
            </a>
            <div className="card_title_container">
              <a href="#" className="card_title_anchor">
                <h2 className="card_title">Mindfulness Practices</h2>
              </a>
              <p className="card_desc">
                Daily mindfulness practices to reduce stress and increase
                happiness.
              </p>
            </div>
            <div className="card_footer_container">
              <div className="author_container">
                <div className="author_avatar_container">
                  <img
                    src="https://api.dicebear.com/7.x/notionists/svg?seed=Mike?size=64"
                    loading="lazy"
                    className="author_avatar"
                    alt="avatar 5"
                  />
                </div>
                <div className="author_info_container">
                  <span className="author_name">Mike Johnson</span>
                  <span className="author_date">Nov 15, 2021</span>
                </div>
              </div>
              <div>
                <span className="card_tag_container">Lifestyle</span>
              </div>
            </div>
          </div>

        
          
        </main>
      </div>
    </div>
  );
}

export default App;
