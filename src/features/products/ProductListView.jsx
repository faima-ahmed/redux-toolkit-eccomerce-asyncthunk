import { useEffect } from "react";
import axios from 'axios';

const productListView = () => {

    const fetchProducts = async()=>{
        const res= await axios.get('http://localhost:3003/products');
        console.log(res.data);
      }
       useEffect(()=>{
      fetchProducts();
        }, []);

    return (
        <div>
            List of products
        </div>
    );
};

export default productListView;