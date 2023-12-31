import Link from 'next/link';
import React from 'react';

interface NavItemsProps {
    items: {
        name: string;
        link: string;
    }[];
}

const NavItems = (props: NavItemsProps) => {
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {props.items.map((item, index) => {
                return (
                    <li className="nav-item" key={index}>
                        <Link className="nav-link active" aria-current="page" href={item.link}>{item.name}</Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default NavItems;