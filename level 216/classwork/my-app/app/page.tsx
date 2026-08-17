import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>მთავარი გვერდი</h1>
      <p>გადადით დოკუმენტაცის სექციაში</p>
      
      <ul>
        <li><Link href="/docs">/docs მთავარი</Link></li>
        <li><Link href="/docs/javascript">/docs/javascript</Link></li>
        <li><Link href="/docs/javascript/functions">/docs/javascript//functions</Link></li>
        <li><Link href="/docs/nextjs/routing/dynamic-routes">/docs/nextjs</Link></li>
      </ul>
    </main>
  );
}