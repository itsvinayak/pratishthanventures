
import Image from 'next/image';
import NavItems from './navItem';
import React from 'react';
import Link from 'next/link';
import logo from '../../public/logo.png';

const navOptions = [
    { 'name': 'Home', 'link': '/' },
    { 'name': 'About', 'link': '/about' },
    { 'name': 'Contact', 'link': '/contact' },
    { 'name': 'Life', 'link': '/life' },
    { 'name': 'Blog', 'link': '/blog' }
];

const NavBar = () => {
    return (
        <nav
            className="navbar navbar-expand-lg navbar-light bg-light shadow-sm bg-body rounded fixed-top"
        >
            <div className="container-fluid">
                <Link className="navbar-brand" href="/">
                    <Image
                        src={logo.src}
                        width={50}
                        height={50}
                        alt="Pratishthan Software Ventures"
                        className="header-icon img-fluid"
                    />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <NavItems items={navOptions} />
                    <form className="d-flex">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-dark" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
};


export default NavBar;