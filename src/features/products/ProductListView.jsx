import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./productSlice";

const ProductListView = () => {
  const { products, isLoading, error } = useSelector(
    (state) => state.productsR
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && products && products.length > 0 && (
        <section className="products">
          {products.map((product) => {
            return (
              <article key={product.id} className="product">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
              </article>
            );
          })}
        </section>
      )}
    </div>
  );
};

export default ProductListView;
