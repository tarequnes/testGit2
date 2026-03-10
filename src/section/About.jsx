import style from "./About.module.css";
import { brands } from "../data/brand";
import { families } from "../data/families";

function About() {
  return (
    <section id="aboutUS" className={style.about}>
      <div className={style.slogan}>
        <h1>About Us</h1>
        <p>
          Our e-commerce platform is designed to offer a secure, smooth, and
          modern shopping experience. We bring together top brands and premium
          product families in one place.
        </p>
      </div>

      <div className={style.news}>
        <div>
          <h1>Nos marques</h1>
          <div className={style.grid}>
            {brands.map((brand) => (
              <div key={brand.id} className={style.card}>
                <img src={brand.image} alt={brand.name} />
                <h2>{brand.name}</h2>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h1>Nos familles</h1>
          <div className={style.grid}>
            {families.map((f) => (
              <div key={f.id} className={style.card}>
                <img src={f.image} alt={f.name} />
                <h2>{f.name}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
