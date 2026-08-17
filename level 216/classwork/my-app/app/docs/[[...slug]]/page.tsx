

type Props = {
  params: Promise<{
    slug?: string[];
  }>;
};

export default async function Page({ params }: Props) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;



  const Text = ['Docs', ...slug].join(' > ');

  return (
    <main>
      <nav>{Text}</nav>

      <h1>Documentation</h1>

      <div>
        {slug.map((segment, index) => (
          <p key={index}>
            <strong>Section {index + 1}:</strong> {segment}
          </p>
        ))}
      </div>
    </main>
  );
}