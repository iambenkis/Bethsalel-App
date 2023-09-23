import React from 'react';
import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { CiUser } from 'react-icons/ci'

import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";

export default function NavbarDefault() {
  const [isActive, setActive] = useState(false)

  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Services
        </a>
      </Typography>
      <Button variant="gradient" size="sm" fullWidth className="mb-2">
          <Link to="/booking">Book Now</Link>
        </Button>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          <CiUser className="text-xl cursor-pointer" />
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="fixed top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-40 lg:py-4">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          className="mr-4 cursor-pointer py-1.5 font-bold text-2xl uppercase"
        >
          <Link to="/">betsalel ships</Link>
        </Typography>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <MobileNav open={openNav}>
        {navList}
      </MobileNav>
    </Navbar>

    //   className="fixed z-100 left-0 top-0 flex w-full bg-white justify-between items-center px-40 py-5 pl-40"
    //   style={{
    //     zIndex: '100',
    //   }}
    // >
    //   <a href="/" className="font-bold text-4xl uppercase">
    //     betsalel <span className="font-light ">ships</span>
    //   </a>
    //   <ul className="flex ml-[5%] mr-[10%]">
    //     <li
    //       className={`${
    //         isActive ? 'bg-blue-400 text-white' : ''
    //       } px-4 border rounded-md`}
    //     >
    //       <NavLink
    //         to="/booking"
    //         style={({ isActive, isPending }) => {
    //           setActive(isActive)
    //         }}
    //       >
    //         Booking
    //       </NavLink>
    //     </li>
    //     <li className="mx-6">
    //       <NavLink to="/" href="#service">
    //         Services
    //       </NavLink>
    //     </li>
    //     <li className="ml-3 mr-6">
    //       <NavLink to="/" href="#contact">
    //         Contact
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="/" href="#about">
    //         About
    //       </NavLink>
    //     </li>
    //   </ul>
    //   <div>
    //     <CiUser className="text-xl cursor-pointer" />
    //   </div>
    // </div>
  )
}
