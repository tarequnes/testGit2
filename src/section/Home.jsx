import style from "./Home.module.css";
import { brands } from "../data/brand";
import { families } from "../data/families";

function Home() {
  return (
    <section id="home" className={style.home}>
      <div className={style.slogan}>
        <h1>Welcome to our store</h1>
        <p>
          We offer high-quality products with a premium shopping experience.
          Discover top brands and the best performance families in one place.
        </p>
      </div>

      <div className={style.news}>
        <div className={style.block}>
          <h2>Nos meilleures marques</h2>
          <div className={style.grid}>
            {brands.slice(0, 3).map((brand) => (
              <div key={brand.id} className={style.card}>
                <img src={brand.image} alt={brand.name} />
                <h3>{brand.name}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className={style.block}>
          <h2>Nos meilleures familles</h2>
          <div className={style.grid}>
            {families.slice(0, 3).map((family) => (
              <div key={family.id} className={style.card}>
                <img src={family.image} alt={family.name} />
                <h3>{family.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;