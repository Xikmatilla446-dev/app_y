"use client";

import Link from "next/link";
import classNames from "classnames";
import React, {useState} from "react";

import {Container} from "@/components";
import classes from "./Navbar.module.scss";
import ArrowDown from "@/assets/svg/arrow-down.svg";


const Navbar = () => {
    const [open, setopen] = useState(false);
    const [subMenu, setSubMenu] = useState<any>({});

    const toggle = () => {
        setopen(!open);
        setSubMenu({});
    };

    function t(text: any) {
        return text;
    }


    const links = [
        {
            title: t("Shahar hokimligi"),
            href: "/",
            submenu: [
                {
                    title: t("Rahbariyat"),
                    href: "/info/leadership"
                },
                {
                    title: t("Markaziy apparat"),
                    href: "/info/central"
                },
                {
                    title: t("Tashkiliy tuzilma"),
                    href: "/info/structure"
                },
                {
                    title: t("Bo’sh ish o’rinlari"),
                    href: "/info/vacancies"
                },
                {
                    title: t("Shahar hokimligi nizomi"),
                    href: "/info/charter"
                }
            ]
        },
        {
            title: t("Iqtisodiyot"),
            href: "/",
            submenu: [
                {
                    title: t("Yashil makon"),
                    href: "/economy/green"
                },
                {
                    title: t("Temir daftar"),
                    href: "/economy/underprivileged"
                },
                {
                    title: t("Yoshlar daftari"),
                    href: "/economy/young"
                },
                {
                    title: t("Ayollar daftari"),
                    href: "/economy/woman"
                },
                {
                    title: t("Istiqbolli loyihalar"),
                    href: "/economy/prospectus"
                },
                {
                    title: t("Mahalliy byudjet"),
                    href: "/economy/budget"
                },
                {
                    title: t("Infratuzulma loyihalari"),
                    href: "/economy/projects"
                },
                {
                    title: t("Eksport"),
                    href: "/economy/export"
                },
                {
                    title: t("Import"),
                    href: "/economy/import"
                },
                {
                    title: t("Mahalliylashtirish ko'rsatkichlari"),
                    href: "/economy/indicators"
                },
                {
                    title: t("Chet el sarmoyasi hisobidan moliyalashtiriladigan loyihalar"),
                    href: "/economy/investment"
                }
            ]
        },
        {
            title: t("Qurilish"),
            href: "/news",
            submenu: [
                {
                    title: t("Ichimlik suvi"),
                    href: "/"
                },
                {
                    title: t("Ijtimoiy soha obyektlari"),
                    href: "/"
                },
                {
                    title: t("Oqava suvi (kanalizatsiya)"),
                    href: "/"
                },
                {
                    title: t("Yo'lsozlik"),
                    href: "/"
                },
                {
                    title: t("Uy-joy"),
                    href: "/"
                }
            ]
        },
        {
            title: t("Matbuot xizmati"),
            href: "/services",
            submenu: [
                {
                    title: t("Brifing"),
                    href: "/"
                },
                {
                    title: t("Infografika"),
                    href: "/"
                },
                {
                    title: t("Matbuot anjumani"),
                    href: "/"
                },
                {
                    title: t("OAVi biz haqimizda"),
                    href: "/"
                },
                {
                    title: t("Ommaviy tadbirlar"),
                    href: "/"
                },
                {
                    title: t("Press-reliz"),
                    href: "/"
                },
                {
                    title: t("Press-tur"),
                    href: "/"
                },
                {
                    title: t("Rasmiy bayonot"),
                    href: "/"
                },
                {
                    title: t("Taqdimotlar"),
                    href: "/"
                },
                {
                    title: t("Xorij OAVda e'lon qilingan materiallar"),
                    href: "/"
                }
            ]
        },
        {
            title: t("Korrupsiyaga qarshi kurashish"),
            href: "/",
            sub: 2,
            submenu: [
                {
                    title: t("Xodimlarning korrupsiyaga qarshi kurashish bo‘yicha ichki tartib-taomillaridan xabardorligi"),
                    href: "/"
                },
                {
                    title: t("Kadrlarga oid masalalarda korrupsiyaga qarshi kurashish"),
                    href: "/"
                },
                {
                    title: t("Korrupsiyaga qarshi kurashish bo‘yicha ichki idoraviy hujjatlar"),
                    href: "/"
                },
                {
                    title: t("Korrupsiyaviy xavf-xatarlarni aniqlash, ularning oldini olish choralarini ko‘rish va natijalari"),
                    href: "/"
                },
                {
                    title: t("Korrupsiyaga nisbatan murosasizlik munosabatini belgilovchi hujjatlar"),
                    href: "/"
                },
                {
                    title: t("Korrupsiyaga nisbatan murosasiz munosabatni shakllantirish borasida tayyorlangan targ‘ibot materiallar"),
                    href: "/"
                },
                {
                    title: t("Keng jamoatchilik va ommaviy axborot vositalarii ishtirokida otkazilgan press tadbirlar"),
                    href: "/"
                },
                {
                    title: t("Manfaatlar to‘qnashuvi holatlari haqida jamoatchilik oldida hisobdorlik"),
                    href: "/"
                }
            ]
        },
        {
            title: t("Jamoatchilik kengashi"),
            href: "/",
            sub: 2,
            submenu: [
                {
                    title: t("Jamoatchilik kengashi haqidagi ma’lumotlar"),
                    href: "/"
                },
                {
                    title: t(
                        "Jamoatchilik kengashining ochiqlikni ta’minlash, korrupsiyaga qarshi kurashish va davlat organi faoliyatini takomillashtirish"
                    ),
                    href: "/"
                },
                {
                    title: t("Jamoatchilik kengashining tashkiliy va huquqiy asoslari"),
                    href: "/"
                },
                {
                    title: t("Jamoatchilik kengashi tarkibini shakllantirish bo‘yicha belgilangan talablar"),
                    href: "/"
                }
            ]
        },
        {
            title: t("Ijtimoiy-madaniy hayot"),
            href: "/",
            submenu: [
                {
                    title: t("Madaniyat"),
                    href: "/"
                },
                {
                    title: t("Ma'naviyat"),
                    href: "/"
                },
                {
                    title: t("Sog'liqni saqlash"),
                    href: "/"
                },
                {
                    title: t("Sport"),
                    href: "/"
                },
                {
                    title: t("Ta'lim"),
                    href: "/"
                },
                {
                    title: t("Turizm"),
                    href: "/"
                }
            ]
        },
        {
            title: t("Ochiq ma’lumotlar"),
            href: "/",
            submenu: [
                {
                    title: t("PF-6247"),
                    href: "/"
                },
                {
                    title: t("Normativ hujjatlar"),
                    href: "/"
                }
            ]
        }
    ];

    return (
        <div className={classes.main_navbar}>
            <Container>
                <div className={classNames(classes.navbar, open ? classes.open : "")}>
                    <div className={classes.menu_icon}>
                        <div onClick={toggle}/>
                    </div>
                    {links?.map((item: any, k) => (
                        <>
                            {item?.submenu?.length > 0 ? (
                                <div
                                    key={k}
                                    onClick={() => setSubMenu({[k]: subMenu[k] ? false : true})}
                                    className={classNames(classes.link, subMenu[k] ? classes.link_open : "")}>
										<span className={classes.innerWithIcon}>
											{item.title}
                                            <ArrowDown/>
										</span>

                                    {item?.submenu?.length > 0 ? (
                                        <div
                                            onClick={(event: any) => event.stopPropagation()}
                                            className={classNames(classes.sub_menu_wrap, item.sub === 2 ? classes.sub : "")}>
                                            <ul className={classes.sub_menu}>
                                                {item?.submenu?.map((sub: any, indx: number) => (
                                                    <li key={indx}>
                                                        <Link href={`${sub.href}`}>{sub.title}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ) : null}
                                </div>
                            ) : (
                                <Link href={`${item?.path ?? ""}`} key={k} className={classes.link}>
                                    <span className={classes.inner}>{item.title}</span>
                                    {item?.submenu?.length > 0 ? (
                                        <div
                                            className={classNames(classes.sub_menu_wrap, item.sub === 2 ? classes.sub : "")}>
                                            <ul className={classes.sub_menu}>
                                                {item?.submenu?.map((sub: any, indx: number) => (
                                                    <li key={sub?.path + indx}>
                                                        <Link href={`${sub?.href ?? ""}`}>{sub.title}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ) : null}
                                </Link>
                            )}
                        </>
                    ))
                    }
                </div>
            </Container>
        </div>
    );
};

export default Navbar;
