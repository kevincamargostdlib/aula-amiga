import { code } from "./util.models"

export interface linkCourse {
    code?: number,
    cxs_id:number
    s_id: number,
    c_id: number,
}

export interface unLinkCourse {

    code: number,
    cxs_id: number,
}