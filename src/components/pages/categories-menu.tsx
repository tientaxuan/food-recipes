'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { BiSolidSushi } from 'react-icons/bi';
import { FaHamburger, FaPizzaSlice } from 'react-icons/fa';
import { GiNoodles } from 'react-icons/gi';
import Balancer from 'react-wrap-balancer';

import { cn } from '@/lib/utils';

const CategoriesMenu = () => {
  const searchParams = useSearchParams();
  const cuisine = searchParams.get('cuisine');
  return (
    <nav>
      <ul className="flex items-center justify-center space-x-6 text-sm lg:space-x-10 lg:text-lg">
        <li className="hover:opacity-80">
          <Link
            className="flex flex-col items-center justify-normal"
            href="/search?cuisine=vietnamese"
            shallow
          >
            <span
              className={cn(
                'flex size-11 items-center justify-center rounded-full text-accent',
                cuisine?.toString()?.toLowerCase() === 'vietnamese'
                  ? 'bg-orange-500'
                  : 'bg-foreground',
              )}
            >
              <GiNoodles size={20} />
            </span>
            <Balancer
              className={cn(
                cuisine?.toString()?.toLowerCase() === 'vietnamese'
                  ? 'text-orange-500'
                  : '',
              )}
            >
              Vietnamese
            </Balancer>
          </Link>
        </li>

        <li className="hover:opacity-80">
          <Link
            className="flex flex-col items-center justify-normal"
            href="/search?cuisine=american"
            shallow
          >
            <span
              className={cn(
                'flex size-11 items-center justify-center rounded-full text-accent',
                cuisine?.toString()?.toLowerCase() === 'american'
                  ? 'bg-orange-500'
                  : 'bg-foreground',
              )}
            >
              <FaHamburger size={20} />
            </span>
            <Balancer
              className={cn(
                cuisine?.toString()?.toLowerCase() === 'american'
                  ? 'text-orange-500'
                  : '',
              )}
            >
              American
            </Balancer>
          </Link>
        </li>

        <li className="hover:opacity-80">
          <Link
            className="flex flex-col items-center justify-normal"
            href="/search?cuisine=italian"
            shallow
          >
            <span
              className={cn(
                'flex size-11 items-center justify-center rounded-full text-accent',
                cuisine?.toString()?.toLowerCase() === 'italian'
                  ? 'bg-orange-500'
                  : 'bg-foreground',
              )}
            >
              <FaPizzaSlice size={20} />
            </span>
            <Balancer
              className={cn(
                cuisine?.toString()?.toLowerCase() === 'italian'
                  ? 'text-orange-500'
                  : '',
              )}
            >
              Italian
            </Balancer>
          </Link>
        </li>

        <li className="hover:opacity-80">
          <Link
            className="flex flex-col items-center justify-normal"
            href="/search?cuisine=japanese"
            shallow
          >
            <span
              className={cn(
                'flex size-11 items-center justify-center rounded-full text-accent',
                cuisine?.toString()?.toLowerCase() === 'japanese'
                  ? 'bg-orange-500'
                  : 'bg-foreground',
              )}
            >
              <BiSolidSushi size={20} />
            </span>
            <Balancer
              className={cn(
                cuisine?.toString()?.toLowerCase() === 'japanese'
                  ? 'text-orange-500'
                  : '',
              )}
            >
              Japanese
            </Balancer>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default CategoriesMenu;
