import Link from 'next/link';
import { GiForkKnifeSpoon } from 'react-icons/gi';

const Logo = () => {
  return (
    <div className="flex items-center justify-center md:block">
      <Link
        className="flex size-max flex-col items-center justify-center bg-foreground px-7 py-4 text-accent"
        href={'/'}
        style={{
          clipPath: 'ellipse(50% 40% at 50% 50%)',
        }}
      >
        <GiForkKnifeSpoon size={25} />
        <p className="text-[12px] md:text-sm">Delicious</p>
      </Link>
    </div>
  );
};

export default Logo;
