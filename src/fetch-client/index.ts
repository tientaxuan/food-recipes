'use server';

import queryString from 'querystring';

import type { GetRandomRecipes200Response } from '@/types/models/GetRandomRecipes200Response';

interface ClientConfig {
  host: string;
  apiKey: string;
}

interface UrlArgs {
  path: string;
  params?: {
    [key: string]: string | number | boolean;
  };
}

class FetchClient {
  private static config: ClientConfig = {
    host: process.env.API_HOST as string,
    apiKey: process.env.API_KEY as string,
  };

  constructor() {}

  static url({ path, params = {} }: UrlArgs): string {
    const bufferPath = path.startsWith('/') ? path : `/${path}`;

    const bufferHost = this.config.host.endsWith('/')
      ? this.config.host.slice(0, -1)
      : this.config.host;

    const search = `?${queryString.stringify({
      ...params,
      apiKey: this.config.apiKey,
    })}`;

    return bufferHost + bufferPath + search;
  }

  static async getRecipe(): Promise<GetRandomRecipes200Response> {
    const res = await fetch(
      this.url({
        path: 'recipes/random',
        params: {
          number: 10,
        },
      }),
    );

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json();
  }
}

export default FetchClient;
