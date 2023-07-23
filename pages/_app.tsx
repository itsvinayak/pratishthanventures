import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Pratishthan software ventures',
    description: '',
    icons: '../public/logo.png',
}

export const fonts = [inter]


const RootLayout = ({ Component, pageProps }) => {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);
    return <Component {...pageProps} />
}

export default RootLayout