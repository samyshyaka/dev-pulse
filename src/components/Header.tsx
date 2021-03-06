import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon, SunIcon } from '@heroicons/react/outline';
import { MoonIcon } from '@heroicons/react/solid';
import Logo from '../assets/logo.svg';
import LogoWhite from '../assets/logoWhite.svg';
import useDarkMode from '../hook/useDarkMode';

const Header = () => {
  const [colorTheme, setTheme] = useDarkMode();
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="w-screen h-[60px] z-10 bg-white dark:bg-dark-bg border-b">
      <div className="px-3 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <Link to="/">
            {colorTheme === 'dark' ? (
              <img
                className="w-full lg:px-5 cursor-pointer"
                src={Logo}
                alt="logo"
              />
            ) : (
              <img
                className="w-full cursor-pointer"
                src={LogoWhite}
                alt="logoWhite"
              />
            )}
          </Link>
          <Link to="/">
            <h1 className="text-3xl font-bold m-4 px-3 text-primary dark:text-dark-text-fill">
              PULSE
            </h1>
          </Link>
          <ul className="hidden lg:flex cursor-pointer">
            <Link to="/">
              <li className="px-5 dark:text-dark-text-fill">Home</li>
            </Link>
            <Link to="/pricing">
              <li className="px-5 dark:text-dark-text-fill">Pricing</li>
            </Link>
            <li className="px-5 dark:text-dark-text-fill">Product</li>
          </ul>
        </div>
        <div className="hidden lg:flex">
          <div className="px-4 mt-1" onClick={() => setTheme(colorTheme)}>
            {colorTheme === 'dark' ? (
              <MoonIcon className="w-8" />
            ) : (
              <SunIcon className="w-8 text-dark-text-fill" />
            )}
          </div>
          <Link to="/org-login">
            <button className="border-none w-24 h-10 mr-4 cursor-pointer bg-primary text-white rounded-md">
              Sign In
            </button>
          </Link>
          <Link to="/register-organization">
            <button className="px-4 py-2 mr-8 h-10 bg-transparent cursor-pointer text-primary dark:text-dark-text-fill border border-primary dark:border-dark-text-fill rounded-md">
              Register an organization
            </button>
          </Link>
        </div>
        <div className="flex px-5 lg:hidden">
          <div className="px-3" onClick={() => setTheme(colorTheme)}>
            {colorTheme === 'dark' ? (
              <MoonIcon className="w-6 mr-2" />
            ) : (
              <SunIcon className="w-6 mr-2 text-dark-text-fill" />
            )}
          </div>
          <div onClick={handleClick}>
            {!nav ? (
              <MenuIcon className="w-7 dark:text-dark-text-fill" />
            ) : (
              <XIcon className="w-7 dark:text-dark-text-fill" />
            )}
          </div>
        </div>
      </div>
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute bg-white dark:bg-dark-bg w-1/8 justify-end px-8 cursor-pointer m-1 right-0 lg:hidden'
        }
      >
        <Link to="/">
          <li className="p-2 w-full mt-2 dark:text-dark-text-fill text-primary">
            Home
          </li>
        </Link>
        <Link to="/pricing">
          <li className="p-2 w-full dark:text-dark-text-fill">Pricing</li>
        </Link>
        <li className="p-2 w-full dark:text-dark-text-fill">Product</li>
        <Link to="/org-login">
          <li className="p-2 w-full dark:text-dark-text-fill mt-6 mb-2 bg-primary text-white rounded-md px-[35%]">
            Sign In
          </li>
        </Link>
        <Link to="/register-organization">
          <li className="p-2 w-full mb-4 dark:text-dark-text-fill bg-transparent border border-primary dark:border-dark-text-fill rounded-md">
            Register Organization
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
