import css from "./Team.module.css";
import SimpleCarousel from "../SimpleCarousel/SimpleCarousel";

const Team = () => {
  return (
    <section className={`section ${css.team}`}>
      <div className={`container ${css.wrap}`}>
        <h2 className={`section_title ${css.title}`}> Our Team</h2>
        <div className={css.info}>
          <p className={`section-info ${css.description}`}>
            Behind every petal, there’s a person who cares
          </p>
          <p className={`section-info ${css.description}`}>
            Meet the ForU family – a creative team of florists, designers, and
            dreamers who bring each bouquet to life
          </p>
        </div>
        <SimpleCarousel />
      </div>
    </section>
  );
};
export default Team;
