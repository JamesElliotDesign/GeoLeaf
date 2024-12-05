import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import { motion } from 'framer-motion';

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Home', href: '#home-section', current: false },
    { name: 'About', href: '#about', current: false },
    { name: 'Roadmap', href: '#roadmap-section', current: false },
    { name: 'Team', href: '#meet-the-team-section', current: false },
    { name: 'Buy', href: '#marketplaces', current: false },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <motion.nav 
            className="navbar"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <Disclosure as="div" className="navbar">
                <>
                    <div className="mx-auto max-w-7xl p-3 md:p-4 lg:px-8">
                        <div className="relative flex h-12 sm:h-20 items-center">
                            <div className="flex flex-1 items-center sm:justify-between">
                                {/* LOGO */}
                                <div className="flex flex-shrink-0 items-center">
                                    <img
                                        className="block h-10 w-20px lg:hidden"
                                        src={'/images/Logo/logo.png'}
                                        alt="GEOLEAF"
                                    />
                                    <img
                                        className="hidden h-48px w-48px lg:block"
                                        src={'/images/Logo/logo.png'}
                                        alt="GEOLEAF"
                                    />
                                </div>

                                {/* LINKS */}
                                <div className="hidden lg:flex items-center border-right ">
                                    <div className="flex justify-end space-x-4">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? 'bg-gray-900' : 'navlinks text-white hover:text-offwhite hover-underline',
                                                    'px-3 py-4 rounded-md text-lg font-normal'
                                                )}
                                                aria-current={item.href ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                                <button className='hidden lg:flex justify-end text-xl font-semibold py-4 px-6 lg:px-12 navbutton text-white'>Launch dApp</button>
                            </div>

                            {/* DRAWER FOR MOBILE VIEW */}
                            {/* DRAWER ICON */}
                            <div className='block lg:hidden'>
                                <Bars3Icon className="block h-6 w-6 text-white" aria-hidden="true" onClick={() => setIsOpen(true)} />
                            </div>

                            {/* DRAWER LINKS DATA */}
                            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                                <Drawerdata />
                            </Drawer>
                        </div>
                    </div>
                </>
            </Disclosure>
        </motion.nav>
    );
}

export default Navbar;