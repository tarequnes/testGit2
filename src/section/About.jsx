import style from "./About.module.css";
import {brands} from "../data/brand";
import {families} from "../data/families";
function About () {

 return(
   <section className={style.about}>
    <div id="aboutUS" className={style.slogan}>
        <h1>About Us</h1>
        <p>An effective e-commerce site is a secure online platform—using platforms like Shopify, Webflow, or WooCommerce—that allows businesses to showcase, sell, and ship products directly to consumers via web or mobile. Key components include a user-friendly interface,</p>
    </div>
    <div className={style.news}>
        <h1>Nos marques</h1>

        <div className={style.grid}>
         { 
            brands.map(brand => (
                <div key={brand.id} className={style.card}>
                 <img src={brand.image} />
                 <h2>{brand.name}</h2>
                </div>
            ))
        
         }
        </div>
    </div>
     <div className={style.news}>
    <h1>Nos families</h1>
        <div className={style.grid}>
         { 
            families.map(f => (
                <div key={f.id} className={style.card}>
                 <img src={f.image} />
                 <h2>{f.name}</h2>
                </div>
            ))
        
         }
        </div>
        </div>

   </section>
 )
}

export default About;

