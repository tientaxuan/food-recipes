'use client';

import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';

import { SearchRecipes200Response } from '@/fetch-client/types';

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Skeleton } from '../ui/skeleton';
import AppPagination from './pagination';

interface GridRecipesProps {
  searchResults: SearchRecipes200Response;
}

const GridRecipes = ({ searchResults }: GridRecipesProps) => {
  const recipes = Array.from(searchResults?.results ?? []).length
    ? Array.from(searchResults.results)
    : [];

  return (
    <div className="my-5">
      <div className="grid grid-cols-[repeat(_auto-fill,_minmax(280px,_1fr))] gap-8">
        {recipes?.length
          ? recipes.map((recipe) => (
              <Link
                className="selection-none relative inline-block cursor-pointer overflow-hidden rounded-md [&:hover_.overlay]:opacity-30"
                href={'/'}
                key={recipe.id}
              >
                <AspectRatio ratio={312 / 231}>
                  <Avatar className="size-full rounded-none">
                    <AvatarImage
                      className="rounded-none object-cover"
                      src={recipe.image}
                    />
                    <AvatarFallback className="rounded-none">
                      <Skeleton />
                    </AvatarFallback>
                  </Avatar>
                </AspectRatio>
                <div className="overlay absolute inset-0 z-10 bg-image-overlay transition-opacity duration-150" />

                <Balancer className="absolute bottom-5 left-1/2 z-30 -translate-x-1/2 text-lg font-normal text-white">
                  {recipe.title}
                </Balancer>
              </Link>
            ))
          : null}
      </div>

      <div className="my-5">
        <AppPagination total={searchResults.totalResults} />
      </div>
    </div>
  );
};

export default GridRecipes;
