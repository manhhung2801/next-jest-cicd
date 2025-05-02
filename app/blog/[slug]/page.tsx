type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Params) {
  return { title: `Post: ${params.slug}` };
}

export default function Page({ params }: Params) {
  const { slug } = params;
  if (!slug) {  // Handle the case where slug is not provided
    return <h1>Slug not provided</h1>;  
  }
  // You can also handle the case where slug is an empty string or invalid value
  return <>
  <h1>Slug: {slug}</h1>  
  <p>TestCase</p>
  <p>Welcome to Ho Chi Minh</p>
  </>;
}
