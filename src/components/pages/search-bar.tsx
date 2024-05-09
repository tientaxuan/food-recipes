'use client';
import { useFocusTrap } from '@mantine/hooks';
import { Search } from 'lucide-react';

interface SearchBarProps extends React.FormHTMLAttributes<HTMLFormElement> {}

const SearchBar = ({ className, ...props }: SearchBarProps) => {
  const focusTrapRef = useFocusTrap();
  return (
    <form className={className} {...props}>
      <label
        className="mx-auto flex min-h-10 max-w-[680px] items-center justify-start space-x-4 rounded-sm bg-secondary-foreground px-3 text-accent"
        ref={focusTrapRef}
      >
        <Search />
        <input className="block flex-1 border-none bg-transparent shadow-none outline-none" />
      </label>
    </form>
  );
};

export default SearchBar;
