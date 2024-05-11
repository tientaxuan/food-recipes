import React from 'react';
import Balancer from 'react-wrap-balancer';

import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Skeleton } from '@/components/ui/skeleton';
import { GetRecipeInformation200Response } from '@/fetch-client/types';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../accordion';

interface RecipeDetailProps {
  data: GetRecipeInformation200Response;
}

const RecipeDetail = ({ data }: RecipeDetailProps) => {
  return (
    <div className="space-y-5 md:grid md:grid-cols-2 md:space-x-10">
      <div className="space-y-2">
        <h3 className="text-lg md:text-xl">{data.title}</h3>
        <AspectRatio ratio={556 / 370}>
          <Avatar className="size-full rounded-none">
            <AvatarImage
              className="rounded-none object-cover"
              src={data?.image}
            />
            <AvatarFallback className="rounded-none">
              <Skeleton className="size-full" />
            </AvatarFallback>
          </Avatar>
        </AspectRatio>
      </div>

      <div className="md:pt-3 [&_*]:leading-7 md:[&_*]:text-[16px]">
        <Accordion
          className="space-y-5"
          defaultValue={['item-1', 'item-2', 'item-3']}
          type="multiple"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>Summary</AccordionTrigger>
            <AccordionContent>
              <div dangerouslySetInnerHTML={{ __html: data.summary }} />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Instructions</AccordionTrigger>
            <AccordionContent>
              <div dangerouslySetInnerHTML={{ __html: data.instructions }} />
            </AccordionContent>
          </AccordionItem>

          {data.extendedIngredients &&
          Array.from(data.extendedIngredients).length > 0 ? (
            <AccordionItem value="item-3">
              <AccordionTrigger>Ingredients</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-5">
                  {Array.from(data.extendedIngredients)?.map((item) => (
                    <div key={item.id}>
                      <Balancer>{item.original}</Balancer>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ) : null}
        </Accordion>
      </div>

      <div />
    </div>
  );
};

export default RecipeDetail;
