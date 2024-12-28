/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { nanoid } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createProducts, updateProducts } from "./productSlice";

const ProductForm = ({ productToEdit = {}, isEdit = false }) => {
  const dispatch = useDispatch();

  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
  });

  useEffect(() => {
    if (productToEdit) {
      setProduct({
        title: productToEdit.title ?? '',
        price: productToEdit.price ?? '',
        description: productToEdit.description ?? '',
        category: productToEdit.category ?? '',
      });
    }
  }, [productToEdit]);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   if(isEdit){
    dispatch(updateProducts({id: productToEdit.id, product: product}));
    isEdit(false);
   }
   else{
    dispatch(createProducts({ ...product, id: nanoid() }));
   }
  };


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input name="title" value={product.title} onChange={handleChange} />
      </div>
      <div>
        <label>Price</label>
        <input name="price" value={product.price} onChange={handleChange} />
      </div>
      <div>
        <label>Description</label>
        <input
          name="description"
          value={product.description}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Category</label>
        <input
          name="category"
          value={product.category}
          onChange={handleChange}
        />
      </div>
      <button type="submit">{isEdit ? "Update Product" : "Add Product"}</button>
    </form>
  );
};

export default ProductForm;
