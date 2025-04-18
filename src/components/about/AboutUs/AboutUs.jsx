import css from "./AboutUs.module.css";
import photo1 from "../../../images/photo1.png";
import photo2 from "../../../images/photo2.png";

const AboutUs = () => {
  return (
    <section className={`section ${css.about}`}>
      <div className={`container ${css.wrap}`}>
        <h2 className={`section_title ${css.title}`}>
          Welcome to ForU – where every bloom tells a story
        </h2>
        <div className={css.about_main}>
          <div className={css.description}>
            <div className={css.description_text}>
              <p className="section-info">
                At ForU, we believe that flowers are more than just beautiful
                gifts – they’re messages from the heart. Whether it's a joyful
                celebration, a romantic gesture, or a moment of comfort, our
                thoughtfully curated arrangements are designed to speak volumes.
              </p>
              <p className="section-info">
                Founded with love and creativity, ForU is a modern flower
                boutique that brings nature’s elegance to your everyday life.
                Each bouquet is handcrafted by our passionate florists who blend
                color, texture, and fragrance into one-of-a-kind floral art.
              </p>
            </div>
            <div className={css.img_wrap}>
              <img
                className={css.img}
                src={photo1}
                alt="girl"
                width="568"
                height="530"
              />
            </div>
          </div>
          <div className={css.focus}>
            <div className={css.img_wrap}>
              <img
                className={css.img}
                src={photo2}
                alt="girl"
                width="568"
                height="530"
              />
            </div>
            <div className={`section-info ${css.focus_info}`}>
              <h3 className={css.sub_title}>We focus on:</h3>
              <ul className={css.about_list}>
                <li>
                  Freshness & Quality – Sourcing the finest seasonal flowers
                  from trusted growers.
                </li>
                <li>
                  Personalized Service – Helping you find the perfect bouquet
                  for any occasion.
                </li>
                <li>
                  Sustainable Practices – Using eco-friendly packaging and
                  supporting local suppliers.
                </li>
              </ul>
              <p className={css.sub_title}>
                Our mission is simple: to make people smile, one flower at a
                time
              </p>
              <p className={css.sub_title}>
                Let’s create something beautiful – just For U
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutUs;
