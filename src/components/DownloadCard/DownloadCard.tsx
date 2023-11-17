import React from 'react';
import Download from "@/assets/svg/download.svg";
import classes from './DownloadCard.module.scss';


type Props = {
    title: any,
    date?: string
}
const DownloadCard = ({title, date}:Props) => {
    return (
        <div className={classes.download}>
            {date ? (
                <span>{date}</span>
            ) : null}
            <div>
                <Download/>&nbsp;
                <p>{title}</p>
            </div>
        </div>
    );
};

export default DownloadCard;