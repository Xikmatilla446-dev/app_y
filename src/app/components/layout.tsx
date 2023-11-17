import {Metadata} from 'next';
import * as React from 'react';

import '@/styles/colors.css';

export const metadata: Metadata = {
    title: 'Components',
    description: 'Pre-built components with awesome default',
};


import Footer from "./RooLayout/Footer";
import Header from "./RooLayout//Header";
import classes from "./RooLayout/Style.module.scss";

export default function ComponentsLayout({
                                             children,
                                         }: {
    children: React.ReactNode;
}) {
    return (
        <div className={classes.layout}>
            <Header/>
            <div className={classes.content}>{children}</div>
            <Footer/>
        </div>
    );
}
