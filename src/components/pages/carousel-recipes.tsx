'use client';

import Balancer from 'react-wrap-balancer';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import type { GetRandomRecipes200ResponseRecipesInner } from '@/types/models/GetRandomRecipes200ResponseRecipesInner';

import { AspectRatio } from '../ui/aspect-ratio';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Skeleton } from '../ui/skeleton';

interface AppCarouselProps {
  recipes: GetRandomRecipes200ResponseRecipesInner[];
  title?: string;
}

const CarouselRecipes = ({ recipes, title }: AppCarouselProps) => {
  return (
    <div>
      {title && <h3 className="mb-3 text-lg lg:text-xl">{title}</h3>}

      <Carousel
        opts={{
          align: 'start',
          dragFree: true,
        }}
      >
        <CarouselContent className={cn('lg:-ml-10 -ml-5')}>
          {Array.from(recipes).map((recipe) => (
            <CarouselItem
              className={cn(
                'basis-[66%] sm:basis-[55%] lg:basis-[30%] xl:basis-[27%]',
                'pl-5 lg:pl-10',
              )}
              key={recipe.id}
            >
              <div
                className={cn(
                  'relative cursor-pointer select-none',
                  '[&:hover_.overlay]:opacity-30 overflow-hidden rounded-lg',
                )}
              >
                <AspectRatio className="z-10" ratio={556 / 370}>
                  <Avatar className="size-full rounded-none">
                    <AvatarImage
                      className="rounded-none object-cover"
                      src={recipe.image}
                    />
                    <AvatarFallback className="rounded-none">
                      <Skeleton className="size-full" />
                    </AvatarFallback>
                  </Avatar>
                </AspectRatio>

                <div className="overlay absolute inset-0 z-10 bg-image-overlay transition-opacity duration-150" />

                <Balancer className="absolute bottom-2 left-1/2 z-30 -translate-x-1/2 text-sm font-normal text-white md:bottom-4 md:text-[16px] lg:bottom-5 lg:text-lg">
                  {recipe.title}
                </Balancer>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CarouselRecipes;
