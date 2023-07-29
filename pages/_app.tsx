import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/global.css';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Router from "next/router";
import PageLoader from "@/components/ui/pageLoader";
config.autoAddCss = false;



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Pratishthan software ventures',
    description: 'Pratishthan Software Ventures Pvt. Ltd. provides engineering and architectural services for niche enterprise products in the area of financial services. Over last few years, team has architected and engineered Next Generation B2B and B2C Payment platform which allows all different types of payment including subsidy payments. For another customer, team has also developed a next generation mobile assistant platform. For another customer team is working on a live streaming platform. For another customer, team is also working on next generation notification system which allows large banks to send across different notifications via different channels.',
    icons: '../public/logo.png',
}

export const fonts = [inter]

interface Props {
    Component: any
    pageProps: any
}



const RootLayout = ({ Component, pageProps }: Props) => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
        const start = () => {
            setLoading(true)
        }
        const end = () => {
            setLoading(false)
        }
        Router.events.on("routeChangeStart", start)
        Router.events.on("routeChangeComplete", end)
        Router.events.on("routeChangeError", end)
        return () => {
            Router.events.off("routeChangeStart", start)
            Router.events.off("routeChangeComplete", end)
            Router.events.off("routeChangeError", end)
        }
    }, []);
    return loading ? <PageLoader /> : <Component {...pageProps} />
}



export default RootLayout 