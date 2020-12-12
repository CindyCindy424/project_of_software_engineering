import axios from 'axios';
import AuthStore from '../mobx/stores/AuthStore';


const BASE_URL = 'http://mockjs.docway.net/mock/1anTtSjfMYb';

export function addAddr(Addr){
    const body = {
        "sessionId":AuthStore.sessionId,
        "reciever":Addr.Name,
        "phone":Addr.Phone,
        "country":Addr.Country,
        "province": Addr.Province,
        "city": Addr.City,
        "district": Addr.District,
        "postCode": Addr.PostCode,
        "location": Addr.Location
    }

    return axios.post(BASE_URL+'/api/AddAddr',body);
}

export function getAddr(){
    return axios.get(BASE_URL+'/api/GetAddr?sessionId='+AuthStore.sessionId);
}