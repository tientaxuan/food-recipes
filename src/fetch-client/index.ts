'use server';

import queryString from 'query-string';

import { paginationConfig } from './pagination-config';
import type {
  GetRandomRecipes200Args,
  GetRandomRecipes200Response,
  SearchRecipes200Args,
  SearchRecipes200Response,
} from './types';

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
    if (this.config.host && this.config.apiKey) {
      const bufferPath = path.startsWith('/') ? path : `/${path}`;

      const bufferHost = this.config?.host?.endsWith('/')
        ? this.config.host.slice(0, -1)
        : this.config.host;

      const search = `?${queryString.stringify(
        {
          ...params,
          apiKey: this.config.apiKey,
        },
        {
          skipNull: true,
          skipEmptyString: true,
          encode: true,
          strict: true,
        },
      )}`;

      return bufferHost + bufferPath + search;
    }
    return '';
  }

  static async getRecipe({
    params,
  }: GetRandomRecipes200Args): Promise<GetRandomRecipes200Response> {
    const res = await fetch(
      this.url({
        path: 'recipes/random',
        params: {
          limitLicense: params.limitLicense ?? true,
          includeNutrition: params.includeNutrition ?? true,
          'include-tags': params.includeTags?.join(',') ?? '',
          'exclude-tags': params.excludeTags?.join(',') ?? '',
          number: params.number ?? 1,
        },
      }),
    );

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json();
  }

  static async searchRecipes({
    params,
  }: {
    params: SearchRecipes200Args['params'] & {
      page?: number;
    };
  }): Promise<SearchRecipes200Response> {
    const res = await fetch(
      this.url({
        path: 'recipes/complexSearch',
        params: {
          ...params,
          number: paginationConfig.numberPerPage,
          offset:
            (Number(params?.page ?? 1) - 1 ?? 0) *
            paginationConfig.numberPerPage,
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
