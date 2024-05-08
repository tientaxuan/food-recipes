/* eslint-disable no-console */
import FetchClient from '@/fetch-client';
import ClientLog from '@/pages-components/client-log';

export default async function Home() {
  const res = await FetchClient.getRecipe();

  return (
    <main>
      Hello to me
      <ClientLog data={res.recipes} />
    </main>
  );
}
