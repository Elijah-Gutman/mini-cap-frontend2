export function ProductsShow({ product, onDestroy, onEdit }) {
  return (
    <div>
      <h1>Product information</h1>
      <p>Name: {product.name}</p>
      <p>
        Image: <img src={product.primary_image_url} alt="" />
      </p>
      <p>Description: {product.description}</p>

      <button onClick={() => onDestroy(product)}>Destroy</button>
      <button onClick={() => onEdit(product)}>Edit</button>
    </div>
  );
}
