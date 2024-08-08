import Link from "next/link";
const Learning = () => {
  return (
    <section className="blog main-section flex-column-mobile" id="blog">
      {/* TITLE STARTS */}
      <div className="custom-title">
        {/* MAIN TITLE STARTS */}
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              Latest Posts
            </span>
          </span>
        </h3>
        {/* MAIN TITLE ENDS */}
      </div>
      {/* TITLE ENDS */}
      {/* LATEST POSTS STARTS */}
      <div className="latestposts flex-column-mobile">
        {/* POST ITEM STARTS */}
        <div className="animated-layer fade-in-right-animation fadeInUp wow">
          <Link href="/blog-post" legacyBehavior>
            <a>
              <span className="img-holder">
                <img src="assets/blog/power.png" alt="" />
              </span>
              <div className="content">
                <span className="category">Software Engineering</span>
                <span className="title">
                  The Power of Networking: Building Professional Relationships
                  in Software Engineering
                </span>
                <p>
                  In the world of software engineering, technical skills are
                  essential, but the power of networking should not be
                  underestimated...
                </p>
                <div className="meta d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-calendar" />
                    <span>9 Apr 2022</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-comments" />
                    <span>2 comments</span>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </div>
        {/* POST ITEM ENDS */}
        {/* POST ITEM STARTS */}
        <div className="animated-layer fade-in-right-animation fadeInUp wow">
          <Link href="/learning-blog-post" legacyBehavior>
            <a>
              <span className="img-holder">
                <img src="assets/blog/learning.jpeg" alt="" />
              </span>
              <div className="content">
                <span className="category">Learning</span>
                <span className="title">
                  Continuous Learning: The Key to Staying Relevant in Software
                  Engineering
                </span>
                <p>
                  In the rapidly evolving world of technology, continuous
                  learning is not just an advantage—it’s a necessity...
                </p>
                <div className="meta d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-calendar" />
                    <span>01 Aug 2024</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-comments" />
                    <span>34 comments</span>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </div>
      </div>
      {/* LATEST POSTS ENDS */}
    </section>
  );
};
export default Learning;
