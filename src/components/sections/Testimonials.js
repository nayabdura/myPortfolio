const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-container flex-column-mobile">
        {/* TESTIMONIAL ITEM STARTS */}
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span className="quote">
                " I worked with Abdullah, he was very helpful and fast to respond
                to my inquiry to help with React website issues and all
                technical problems. "
              </span>
              <span className="person">Malik Shahzaib</span>
              <span className="job">Director - Malik Pharmacy</span>
            </p>
          </div>
        </div>
        {/* TESTIMONIAL ITEM ENDS */}
        {/* TESTIMONIAL ITEM STARTS */}
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span className="quote">
                "Abdullah is a great help managing a very out of date website.
                Everything we ask him to do is done quickly and efficiently, we
                would be lost without him. "
              </span>
              <span className="person">Ahmad</span>
              <span className="job">Manager - Ahamd Associates</span>
            </p>
          </div>
        </div>
        {/* TESTIMONIAL ITEM ENDS */}
      </div>
      <img
        alt=""
        className="z-1 hide-mobile opposite-separator"
        src="assets/separator-opposite.png"
      />
    </section>
  );
};
export default Testimonials;
