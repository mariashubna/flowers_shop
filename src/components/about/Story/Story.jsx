import css from "./Story.module.css";
import shop from "../../../images/shop.png";

const Story = () => {
  return (
    <section className={`section ${css.story}`}>
      <div className={`container ${css.wrap}`}>
        <h2 className={`section_title ${css.title}`}>Our Story</h2>
        <img
          className={css.img}
          src={shop}
          alt="shop"
          width="568"
          height="530"
        />

        <p className={`section-info ${css.story_info}`}>
          It all started with a simple idea – to spread happiness through
          flowers. ForU began as a small dream in a home studio, where love for
          nature and design blossomed into a full-fledged boutique. From day
          one, our mission has been to create floral moments that feel personal,
          thoughtful, and unforgettable. With every bouquet we send out, we
          share a piece of that original spark – something beautiful, made with
          heart.
        </p>
      </div>
    </section>
  );
};
export default Story;
