'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import type { GetRandomRecipes200ResponseRecipesInner } from '@/types/models/GetRandomRecipes200ResponseRecipesInner';

interface AppCarouselProps {
  recipes: GetRandomRecipes200ResponseRecipesInner[];
}

const AppCarousel = ({ recipes }: AppCarouselProps) => {
  return (
    <Carousel
      opts={{
        align: 'start',
        dragFree: true,
      }}
    >
      <CarouselContent>
        {Array.from(recipes).map((recipe) => (
          <CarouselItem className="basis-1/3" key={recipe.id}>
            <div>{recipe.title}</div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default AppCarousel;
