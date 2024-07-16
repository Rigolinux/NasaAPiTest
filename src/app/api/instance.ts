import axios from "axios";



export const instance = axios.create({
    baseURL: "https://images-assets.nasa.gov/",
    headers: {
        "Content-Type": "application/json",
    },
});


export const instance2 = axios.create({
    baseURL: "https://images-api.nasa.gov/",
    headers: {
        "Content-Type": "application/json",
    },
});