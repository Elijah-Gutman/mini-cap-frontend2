export function ProductsShow({ product, onUpdate }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    0;
    onUpdate();
  };
  return (
    <div>
      <h1>Product information</h1>
      <p>Name: {product.name}</p>
      <p>
        Image: <img src={product.primary_image_url} alt="" />
      </p>
      <p>Description: {product.description}</p>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input defaultValue={product.name} name="name" type="text" />
        </div>
        <div>
          Image: <input defaultValue={product.product_image_url} name="product_image_url" type="text" />
        </div>
        <div>
          description: <input defaultValue={product.description} name="description" type="text" />
        </div>

        <button type="submit">Update</button>
      </form>
    </div>
  );
}
