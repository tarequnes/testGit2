import style from "./Home.module.css"
import {brands} from "../data/brand";
import {families} from "../data/families";
// import {products } from "../data/product";
function Home() {
    return (
        <section id="home" className={style.home}>
         <div className={style.slogan}>
          <h1>Hello Welcom to our store Mate !</h1>
          <p>
            You're here because of the quality of our products and the trust that you have <br />
            on us, it's a pleasure to work with you !!
          </p>
         </div>
         <div className={style.news}>
        <div>
            <h1> Nos meilleurs marquers </h1>
                <div className={style.grid}>
            {
                brands.slice(0,3).map(brand => (
                    <div key={brand.id} className={style.card}>
                     <img src={brand.image}/>
                     <h3>{brand.name}</h3>
                    </div>
                ))
            }
          </div>


        </div>
                  <div>
            <h1> Nos meilleurs families </h1>
                <div className={style.grid}>
            {
                families.slice(0,3).map(f => (
                    <div key={f.id} className={style.card}>
                     <img src={f.image}/>
                     <h3>{f.name}</h3>
                    </div>
                ))
            }
          </div>
        </div>
            
         </div>
        </section>
    )
}
export default Home;