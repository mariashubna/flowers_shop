import css from "./Team.module.css";
import SimpleCarousel from "../SimpleCarousel/SimpleCarousel";

const Team = () => {
  return (
    <section className={`section ${css.team}`}>
      <div className={`container ${css.wrap}`}>
        <h2> Our Team</h2>
        <p>Behind every petal, there’s a person who cares</p>
        <p>
          Meet the ForU family – a creative team of florists, designers, and
          dreamers who bring each bouquet to life
        </p>
        <SimpleCarousel />
      </div>
    </section>
  );
};
export default Team;
