import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./productSlice";

const ProductListView = () => {
  const {products, isLoading, error}= useSelector((state)=>
    state.productsR
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && products && products.length>0 && 
      products.map((product)=>{
        return <article key={product.id}>
          <h3>{product.title}</h3>
        </article>
      })}
    </div>
  );
};

export default ProductListView;
