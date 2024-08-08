const Copyright = () => {
  return (
    <section className="copyright">
      <img
        alt=""
        className="z-1 hide-mobile"
        src="assets/separator-copyright.png"
      />
      <div>
        <span>© {new Date().getFullYear()} Abdullah Imran</span>
        <span>
          Designed By{" Abdulah "}
        </span>
        <ul>
          <li>
            <a href="https://github.com/nayabdura">
              <i className="fa-brands fa-github" />
            </a>
          </li>
          <li>
            <a href="https://x.com/nayab_474">
              <i className="fa-brands fa-twitter" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/minsaimran13">
              <i className="fa-brands fa-facebook" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Copyright;
