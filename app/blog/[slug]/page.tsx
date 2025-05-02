import { Metadata } from 'next';

interface PageParams {
  slug: string;
}

interface SearchParams {
  [key: string]: string | string[] | undefined;
}

interface PageProps {
  params: PageParams;
  searchParams?: SearchParams;
}

export async function generateMetadata({ 
  params 
}: PageProps): Promise<Metadata> {
  return { title: `Post: ${params.slug}` };
}

export default async function Page({ 
  params 
}: PageProps) {
  const { slug } = params;
  if (!slug) {
    return <h1>Slug not provided</h1>;
  }
  
  return (
    <>
      <h1>Slug: {slug}</h1>
      <p>TestCase</p>
      <p>Welcome to Ho Chi Minh</p>
    </>
  );
}