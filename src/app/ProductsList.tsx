import { Product } from "./product-data";
import Image from "next/image";
const ProductsList = ({ products }: { products: Product[] }) => {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <Image
            src={"/" + product.imageUrl}
            alt="Product image"
            width={150}
            height={150}
          />
          <h2>{product.name}</h2>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
