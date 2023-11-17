import React from 'react';
import classes from "./Title.module.scss";

type Props = {
    children: React.ReactElement
}
const Title = ({children}:Props) => {
    return (
        <div className={classes.title}>
            <h2>
                {children}
            </h2>
        </div>
    );
};

export default Title;