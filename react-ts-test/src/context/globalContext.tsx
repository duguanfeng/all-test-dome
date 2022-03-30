import { createContext } from "react";
import {Detail} from '../api/index';

export function detailInfo():{detail:Detail} {
    return {
        detail: {
            name: '',
            subSkuList: [{}]
        }
    }
}

export const global =  createContext(detailInfo())