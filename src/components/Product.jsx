import style from "./Product.module.css";

function Product({ product }) {
  return (
    <div className={style.card}>
      <img src={product.image} alt={product.name} className={style.image} />
      <h3>{product.name}</h3>

      <p className={style.price}>
        <span className={style.oldPrice}>{product.oldPrice} Dh</span>
        <span className={style.newPrice}>{product.newPrice} Dh</span>
      </p>

      <p className={style.desc}>
        {product.brand}
        <br />
        {product.family}
      </p>
    </div>
  );
}

export default Product;