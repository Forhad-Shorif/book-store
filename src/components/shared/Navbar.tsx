import React from 'react';
import Image from 'next/image'
import Logo from '@/assets/book.ico'
import Link from 'next/link';
import { FiAlignJustify } from "react-icons/fi";

const Navbar = () => {

    const Links = <>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/books">Books</Link></li>
        <li><Link href='/listed-books'>Listed Book</Link></li>
        <li><Link href='/read-books'>Read Books</Link></li>
        <li>
            <Link href='allbooks'>All Books</Link>
        </li>
    </>

    return (
        <nav className='bg-base-100 sticky top-0 z-50 shadow-sm'>

            <div className="navbar bg-base-100 container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <FiAlignJustify className="h-8 w-8" />
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {Links}
                        </ul>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <Image src={Logo} alt='Logo'></Image>
                        Book VIbe
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {Links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-info">Sign in</button>
                    <button className="btn btn-success">Sign up</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;