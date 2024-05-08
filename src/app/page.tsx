import AppCarousel from '@/components/pages/app-carousel';
import ClientLog from '@/components/pages/client-log';
import FetchClient from '@/fetch-client';

export default async function Home() {
  const res = await FetchClient.getRecipe();
  return (
    <main>
      <AppCarousel recipes={Array.from(res.recipes)} />
      <ClientLog data={res.recipes} />
    </main>
  );
}
