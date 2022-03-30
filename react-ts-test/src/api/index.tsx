import axios from 'axios';
interface ItemsInfoParams {
    itemsId: number
}
interface ResData{
    data: Res
    [key:string]:any
}
interface Res {
    data: Detail,
    code: number,
    message: string,
    errtag: number
}
export interface Detail {
    name: string
    subSkuList: any[]
    [key:string]:any
}
export const getItemsInfo = (params:ItemsInfoParams) : Promise<ResData> => {
    return axios.get('http://127.0.0.1:4523/mock/786765/mall-c-search/blind_box/info?itemsId='+params.itemsId)
}