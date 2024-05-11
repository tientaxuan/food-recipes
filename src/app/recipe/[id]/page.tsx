import ClientLog from '@/components/pages/client-log';
import RecipeDetail from '@/components/pages/recipe/recipe-detail';
import FetchClient from '@/fetch-client';
import { PageProps } from '@/types';

const RecipePage = async ({ params }: PageProps) => {
  const res = await FetchClient.getRecipeInfo({
    params: {
      id: (params?.id ?? '') as string | number,
    },
  });
  return (
    <div className="my-5">
      <RecipeDetail data={res} />
      <ClientLog data={res} />
    </div>
  );
};

export default RecipePage;
