import Link from 'next/link';
import { products } from './data/products';

export default function HomePage() {
  return (
    <main>
      <h1> ონლაინ მაღაზია</h1>
      
      
      <div>
        {products.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <h3>{product.name}</h3>
            <p>ფასი: ${product.price}</p>
            <p>დეტალურად </p>
          </Link>
        ))}
      </div>
    </main>
  );
}