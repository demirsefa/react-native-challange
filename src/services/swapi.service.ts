import axios from "axios";
const apiKey="cd59bbb8";
export default class SwapiService {

    public static getList(){
        return axios.get("https://swapi.dev/api/films",{
            params:{format:"json"}
        }).then(res=>res.data);
    }

}