export function ProductsShow({ product }) {
  return (
    <div>
      <h1>Product information</h1>
      <p>Name: {product.name}</p>
      <p>
        Url: <img src={product.primary_image_url} alt="" />
      </p>
      <p>Description: {product.description}</p>
    </div>
  );
}
