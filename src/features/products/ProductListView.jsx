import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./productSlice";

const productListView = () => {

    const dispatch= useDispatch();

       useEffect(()=>{
      dispatch(fetchProducts());
        }, []);

    return (
        <div>
            List of products
        </div>
    );
};

export default productListView;