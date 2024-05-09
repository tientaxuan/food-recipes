import AppCarousel from '@/components/pages/app-carousel';
import ClientLog from '@/components/pages/client-log';
import FetchClient from '@/fetch-client';

export default async function Home() {
  const res = await FetchClient.getRecipe({
    params: {
      number: 12,
      includeTags: ['beef', 'milk'],
    },
  });
  return (
    <main>
      <AppCarousel
        recipes={Array.from(res.recipes)}
        title="Our Beef and Milk Recipes"
      />
      <ClientLog data={res.recipes} />
    </main>
  );
}
