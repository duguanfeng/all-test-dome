import React, { useState,useEffect } from "react";
import {global,detailInfo} from '../context/globalContext';
import {getItemsInfo} from '../api/index';
import {Child} from '../components/Child';
const initDetail = detailInfo().detail;
export const Father = () => {
    const [detail, setDetail] = useState(initDetail);

    useEffect(() => {
        getItemsInfo({itemsId:10078170}).then(res => {
            setDetail(res.data.data);
            console.log(res.data.data);
        })
    }, [])


    return (
    <global.Provider value={{detail}}>
        <Child/>
    </global.Provider>
    );
};
