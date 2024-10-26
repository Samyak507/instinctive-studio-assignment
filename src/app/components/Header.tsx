import Image from 'next/image';
import styles from '../styles/Home.module.css';
import logo from '../assets/logo.png';

interface HeaderProps {
  userName: string;
}

const Header: React.FC<HeaderProps> = ({ userName }) => {
  return (
    <header className="">
      <div className=''>
        <div className='flex flex-row justify-evenly gap-10 lg:gap-56 items-center py-8 bg-[#6669FE]'>
          <Image src={logo} className=' h-[45.3px] w-[92px]  left-10 lg:h-[49.03px] lg:w-[96.67px] ' alt='logoPng' />
          <h1 className='font-bold lg:text-4xl text-[#FFFFFF] ' >Student Portal</h1>
          <div className="hidden lg:block userNameDetails right-10">
            <p className='font-semibold text-right text-[23.33px] text-[#FFFFFF] '>Hello, {userName}!</p>
            <p className='font-normal text-right text-[12px] text-[#FFFFFF] '>Class 7, Math + Science</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
/* Header */
