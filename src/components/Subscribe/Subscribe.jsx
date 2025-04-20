import css from "./Subscribe.module.css";
const Subscribe = () => {
  return (
    <div className={css.wrap}>
      <div>
        <h2>Subscribe to our blooming newsletter</h2>
        <p className={css.info}>
          Be the first to know about fresh floral collections, seasonal
          bouquets, and tips on flower care & styling. Let beauty bloom in your
          inbox!
        </p>
      </div>
      <div>
        <form className={css.form}>
          <label>
            Stay in bloom
            <input placeholder="Enter your email" />
          </label>

          <button> Subscribe</button>
        </form>
        <div className={css.policy}>
          <p> By subscribing, you agree to our</p>{" "}
          <a className={css.link} href="#">
            Privacy Policy.
          </a>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
