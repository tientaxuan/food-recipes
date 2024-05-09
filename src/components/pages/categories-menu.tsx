import { BiSolidSushi } from 'react-icons/bi';
import { FaHamburger, FaPizzaSlice } from 'react-icons/fa';
import { GiNoodles } from 'react-icons/gi';
import Balancer from 'react-wrap-balancer';

const CategoriesMenu = () => {
  return (
    <nav>
      <ul className="flex items-center justify-center space-x-10">
        <li className="hover:opacity-80">
          <a className="flex flex-col items-center justify-normal" href="">
            <span className="flex size-14 items-center justify-center rounded-full bg-foreground text-accent">
              <GiNoodles size={30} />
            </span>
            <Balancer>Vietnamese</Balancer>
          </a>
        </li>

        <li className="hover:opacity-80">
          <a className="flex flex-col items-center justify-normal" href="">
            <span className="flex size-14 items-center justify-center rounded-full bg-foreground text-accent">
              <FaHamburger size={30} />
            </span>
            <Balancer>American</Balancer>
          </a>
        </li>

        <li className="hover:opacity-80">
          <a className="flex flex-col items-center justify-normal" href="">
            <span className="flex size-14 items-center justify-center rounded-full bg-foreground text-accent">
              <FaPizzaSlice size={30} />
            </span>
            <Balancer>Italian</Balancer>
          </a>
        </li>

        <li className="hover:opacity-80">
          <a className="flex flex-col items-center justify-normal" href="">
            <span className="flex size-14 items-center justify-center rounded-full bg-foreground text-accent">
              <BiSolidSushi size={30} />
            </span>
            <Balancer>Japanese</Balancer>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default CategoriesMenu;
