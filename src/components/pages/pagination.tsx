'use client';

import { ReadonlyURLSearchParams, useSearchParams } from 'next/navigation';
import queryString from 'query-string';
import { isInt } from 'radash';

import { paginationConfig } from '@/fetch-client/pagination-config';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../ui/pagination';

interface AppPaginationProps {
  total: number;
}

function getQueries(page: number, searchParams: ReadonlyURLSearchParams) {
  return queryString.stringify({
    ...queryString.parse(searchParams.toString()),
    page,
  });
}

function getPageViews(_current: number, _total: number, _radius: number) {
  const current = isInt(_current) ? _current : Math.floor(_current);
  const total = isInt(_total) ? _total : Math.floor(_total);
  let radius = isInt(_radius) ? _radius : Math.floor(_radius);
  if (!radius || radius > total) {
    radius = 2;
  }

  const views: number[] = [];

  views.push(current);

  //add left views page
  for (let i = 0; i <= radius; i++) {
    if (i === 0) {
      continue;
    }

    if (current - 1 < 1) {
      continue;
    }
    views.unshift(current - i);
  }

  //add right views page

  for (let i = 0; i <= radius; i++) {
    if (i === 0) {
      continue;
    }

    if (current + 1 > total) {
      continue;
    }
    views.push(current + i);
  }

  return views;
}

const AppPagination = ({ total }: AppPaginationProps) => {
  const totalPages = Math.ceil(total / paginationConfig.numberPerPage);

  const searchParams = useSearchParams();

  let currentPage = searchParams.get('page')
    ? Math.round(Number(searchParams.get('page')))
    : 1;

  if (currentPage > totalPages) {
    currentPage = 1;
  }

  const pageViews = getPageViews(
    currentPage,
    totalPages,
    totalPages > 4 ? 1 : 2,
  );

  return totalPages > 1 && currentPage <= totalPages && currentPage >= 1 ? (
    <Pagination>
      <PaginationContent>
        {currentPage > 1 && totalPages > 4 ? (
          <PaginationItem>
            <PaginationPrevious
              href={`?${getQueries(currentPage - 1, searchParams)}`}
            />
          </PaginationItem>
        ) : null}

        {currentPage > paginationConfig.radius + 1 ? (
          <PaginationItem className="hidden md:block">
            <PaginationEllipsis />
          </PaginationItem>
        ) : null}

        {pageViews.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              href={`?${getQueries(page, searchParams)}`}
              isActive={currentPage === page}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        {currentPage < totalPages - paginationConfig.radius ? (
          <PaginationItem className="hidden md:block">
            <PaginationEllipsis />
          </PaginationItem>
        ) : null}

        {currentPage < totalPages && totalPages > 4 ? (
          <PaginationItem>
            <PaginationNext
              href={`?${getQueries(currentPage + 1, searchParams)}`}
            />
          </PaginationItem>
        ) : null}
      </PaginationContent>
    </Pagination>
  ) : null;
};

export default AppPagination;
