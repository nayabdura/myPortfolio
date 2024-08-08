import { Fragment, useEffect } from "react";

const BlogPost = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("blog-page");
  }, []);

  return (
    <Fragment>
      <a href="/" className="back-btn">
        <i className="fa-solid fa-arrow-left"></i>
      </a>
      <div className="blog-content">
        <h1>My Blog</h1>
        {/* ARTICLE STARTS */}
        <div className="main-post">
          {/* META STARTS */}
          <div className="meta d-flex align-items-center">
            <div className="d-flex align-items-center">
              <i className="fa-regular fa-calendar" />
              <span>9 Apr 2024</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="fa-solid fa-tag" />
              <span>Software Engineering</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="fa-regular fa-comments" />
              <span>17 comments</span>
            </div>
          </div>
          {/* META ENDS */}
          {/* CONTENT STARTS */}
          <h3>
            The Power of Networking: Building Professional Relationships in
            Software Engineering
          </h3>
          {/* <img src="assets/blog/power.png" alt="Blog image" /> */}
          <div className="post-content">
            <p>
              In the world of software engineering, technical skills are
              essential, but the power of networking should not be
              underestimated. Building professional relationships can open doors
              to new opportunities, provide support and mentorship, and help you
              stay connected with industry trends. As a self-taught software
              engineer, BSCS student, and entrepreneur, I've experienced
              firsthand how networking can significantly impact your career.
            </p>
            <p>
              Why Networking Matters Networking goes beyond just meeting new
              people. It involves building meaningful relationships that can
              provide mutual support, collaboration, and growth. Here are some
              key reasons why networking is crucial for software engineers: 1.
              Access to Opportunities Many job openings and projects are not
              advertised publicly. Networking can give you access to these
              hidden opportunities through referrals and recommendations from
              your professional contacts. 2. Knowledge Sharing Networking allows
              you to share knowledge and learn from others. Engaging with peers,
              mentors, and industry experts can provide valuable insights, new
              perspectives, and practical advice. 3. Career Development
              Professional relationships can play a significant role in your
              career development. Mentors can guide you, peers can provide
              support, and industry leaders can offer advice on navigating your
              career path. 4. Staying Updated Networking helps you stay informed
              about the latest industry trends, technologies, and best
              practices. Being part of a professional community ensures you are
              always in the loop. 5. Collaboration and Innovation Building a
              strong network enables collaboration on projects, research, and
              initiatives. Working with others can spark innovation and lead to
              creative solutions that you might not have achieved on your own.
            </p>
          </div>
          {/* CONTENT ENDS */}
        </div>
        {/* ARTICLE ENDS */}
      </div>
    </Fragment>
  );
};
export default BlogPost;
