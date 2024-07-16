import { instance, instance2 } from "./instance";
import { currentYear } from "../utils/dates";
import { AxiosResponse } from "axios";
import { Response } from "../Interfaces/Global";

export const getGroupImages = async (script: string) => {
    try {
       
        const response: AxiosResponse<Response> = await instance.get(script);
        console.log(response.data);
        return response.data;
    } catch (error) {
        // handle error here
    }
    
    return null; 
};

export const getQueryImages = async (script: string) => {
    try {
        const response: AxiosResponse<Response> = await instance2.get('search?q=' + script);
        console.log(response.data);
        return response.data;
    } catch (error) {
        // handle error here
    }
    
    return null; 
};


