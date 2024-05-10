'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFocusTrap } from '@mantine/hooks';
import { Search } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import queryString from 'query-string';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Form, FormControl, FormField, FormItem } from '../ui/form';

interface SearchBarProps
  extends Omit<React.FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> {}

const formSchema = z.object({
  search: z.string(),
});

const SearchBar = ({ className, ...props }: SearchBarProps) => {
  const focusTrapRef = useFocusTrap();

  const searchParams = useSearchParams();

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    router.push(
      `/search?${queryString.stringify({ ...queryString.parse(searchParams.toString()), query: values.search })}`,
    );
  }

  return (
    <Form {...form}>
      <form
        className={className}
        onSubmit={form.handleSubmit(onSubmit)}
        {...props}
      >
        <FormField
          control={form.control}
          name="search"
          render={({ field }) => {
            return (
              <FormItem>
                <FormControl>
                  <label
                    className="mx-auto flex min-h-10 max-w-[680px] items-center justify-start space-x-4 rounded-sm bg-secondary-foreground px-3 text-accent"
                    ref={focusTrapRef}
                  >
                    <Search />
                    <input
                      className="block flex-1 border-none bg-transparent shadow-none outline-none"
                      {...field}
                    />
                  </label>
                </FormControl>
              </FormItem>
            );
          }}
        />
      </form>
    </Form>
  );
};

export default SearchBar;
