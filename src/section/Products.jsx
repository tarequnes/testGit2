import style from "./Products.module.css";
import {products} from "../data/product";
import Product from "../components/Product";

function Products() {
    return(
        <section id="products">
         <h2>Our Products</h2>
       <div className={style.grid}>
    {
       products.map(p => (
        <Product key={p.id} product={p} />
       ))
    }
       </div>
     </section>
    )
}

export default Products;