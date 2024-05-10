import { pick } from 'radash';

import ClientLog from '@/components/pages/client-log';
import GridRecipes from '@/components/pages/grid-recipes';
import FetchClient from '@/fetch-client';
import type { SearchRecipes200Args } from '@/fetch-client/types';
import { pickingParams } from '@/fetch-client/types';
import type { PageProps } from '@/types';

const SearchPage = async ({ searchParams }: PageProps) => {
  const data = await FetchClient.searchRecipes({
    params: {
      ...pick(
        searchParams as unknown as SearchRecipes200Args['params'],
        pickingParams as (keyof SearchRecipes200Args['params'])[],
      ),
      number: 30,
    },
  });
  return (
    <div className="mt-5">
      <GridRecipes searchResults={data} />
      <ClientLog data={{ query: searchParams?.query, data }} />
    </div>
  );
};

export default SearchPage;
