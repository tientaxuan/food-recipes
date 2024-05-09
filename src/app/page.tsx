import AppCarousel from '@/components/pages/app-carousel';
import ClientLog from '@/components/pages/client-log';
import FetchClient from '@/fetch-client';

export default async function Home() {
  const beefAndMilkPicks = await FetchClient.getRecipe({
    params: {
      number: 12,
      includeTags: ['beef', 'milk'],
    },
  });

  const popularPicks = await FetchClient.getRecipe({
    params: {
      number: 12,
    },
  });

  return (
    <main>
      <div className="space-y-10">
        <section>
          <AppCarousel
            recipes={Array.from(beefAndMilkPicks.recipes)}
            title="Our Beef and Milk Picks"
          />
        </section>

        <section>
          <AppCarousel
            recipes={Array.from(popularPicks.recipes)}
            title="Popular Picks"
          />
        </section>
      </div>

      <ClientLog data={beefAndMilkPicks.recipes} />
    </main>
  );
}
