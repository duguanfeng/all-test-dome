import React from "react";
import style from "../style/index.module.css";
interface itemProps {
    info: {
        name?: any;
        [key: string]: any;
    };
}
export const Item = (props: itemProps) => {
    const {info} = props
    return (<div className={style.item}>
        <img src={'https:'+info.imageUrl} className={style.img}/>
        Item:{info.name}

    </div>);
};
