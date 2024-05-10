import CarouselRecipes from '@/components/pages/carousel-recipes';
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
    <main className="mg:mt-7 mt-5 lg:mt-8">
      <div className="space-y-4 lg:space-y-10">
        <section>
          <CarouselRecipes
            recipes={Array.from(beefAndMilkPicks.recipes)}
            title="Our Beef and Milk Picks"
          />
        </section>

        <section>
          <CarouselRecipes
            recipes={Array.from(popularPicks.recipes)}
            title="Popular Picks"
          />
        </section>
      </div>
    </main>
  );
}
