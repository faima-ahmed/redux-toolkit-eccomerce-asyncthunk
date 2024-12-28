import { useState } from "react";
import ProductForm from "./features/products/ProductForm";
import ProductListView from "./features/products/ProductListView";

const App = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [productToEdit, setProductToEdit] = useState({});

  const handleSetProductToEdit = (product) => {
    setProductToEdit(product);
    setIsEdit(true);
  };

  return (
    <div>
      <ProductForm productToEdit={productToEdit} isEdit={isEdit}/>
      <ProductListView onHandleSetProductToEdit={handleSetProductToEdit} />
    </div>
  );
};

export default App;
