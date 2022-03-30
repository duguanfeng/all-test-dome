import React,{useEffect,useContext} from "react";
import {global} from '../context/globalContext';
import {Item} from './Item';
import style from '../style/index.module.css';
export const Child = () => {
    const {detail} = useContext(global);
    return (<div>
        Child:{detail.name}
        <div className={style.list}>
            {detail.subSkuList.map(v => <Item info={v} key={v.subSkuId}/>)}
        </div>
    </div>);
};
