import Axios from "axios";
import { BASE_URL } from "../constant";

const instance = Axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "c7396936-96da-47b7-b8e8-a78259e1e0e5"
    },
    baseURL: BASE_URL
});

export const followAPI = {
    outFollow(id) {
        return instance.delete(`follow/${id}`)
            .then(res => res.data)
    },
    getFollow(id) {
        return instance.post(`follow/${id}`)
            .then(res => res.data)
    }
};