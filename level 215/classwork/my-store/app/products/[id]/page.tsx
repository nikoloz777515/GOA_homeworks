'use client';

import { useRouter, useParams } from 'next/navigation';
import { products } from '../../data/products';

export default function ProductDetailPage() {
  const router = useRouter();
  const params = useParams();
  
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return (
      <div>
        <h2>პროდუქტი ვერ მოიძებნა </h2>
        <button onClick={() => router.push('/')}>მთავარზე დაბრუნება</button>
      </div>
    );
  }

  return (
    <main>
      <h2>{product.name}</h2>
      <p><strong>ფასი:</strong> ${product.price}</p>
      <p><strong>აღწერა:</strong> {product.description}</p>

      <hr />
      <div>
        <button onClick={() => router.back()}>
           უკან
        </button>

        <button onClick={() => router.push('/')}>
           მთავარი
        </button>

        <button onClick={() => router.forward()}>
          წინ 
        </button>
      </div>
    </main>
  );
}