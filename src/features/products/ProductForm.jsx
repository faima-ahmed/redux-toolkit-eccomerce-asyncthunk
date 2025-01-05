const ProductForm = () => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input name="title" value={ProductForm.title} onChange={handleChange} />
      </div>
      <div>
        <label>Price</label>
        <input name="price" value={ProductForm.price} onChange={handleChange} />
      </div>
      <div>
        <label>Description</label>
        <input name="description" value={ProductForm.description} onChange={handleChange} />
      </div>
      <div>
        <label>Title</label>
        <input name="title" value={ProductForm.title} onChange={handleChange} />
      </div>
    </form>
  );
};

export default ProductForm;
