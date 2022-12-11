import { code } from "./util.models"

export interface student {
    code?:code
    s_id: number,
    first_name: String,
    last_name: String,
    lv_id: number,
    group: String,
    email: String,
    phone_number: String,
    geolocation: number,
    status: 0|1;
}