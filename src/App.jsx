import { useState } from "react";
import ProductForm from "./features/products/ProductForm";
import ProductListView from "./features/products/ProductListView";

const App = () => {
  const [isEdit, setIsEdit] = useState();
  const [productToEdit, setProductToEdit] = useState(null);

  const handleSetProductToEdit = (product) => {
    setProductToEdit(product);
  };

  return (
    <div>
      <ProductForm productToEdit={productToEdit}/>
      <ProductListView onHandleSetProductToEdit={handleSetProductToEdit} />
    </div>
  );
};

export default App;
