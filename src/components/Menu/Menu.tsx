import React, {useState} from 'react';
import classes from './Menu.module.scss';
import Link from "next/link";
import {useRouter} from "next/router";

interface MenuProps {
    menu: any;
    title: string;
}

const Menu = ({title, menu}: MenuProps) => {
    const router = useRouter();

    return (
        <div className={classes.menu}>
            <h3>{title}</h3>
            <ul className={classes.box}>
                {menu.map((m, idx: number) => (
                    <li
                        className={m.link === router.pathname ? classes.active : ""} key={idx}>
                        <Link href={`${m.link}`}>
                            {m.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Menu;