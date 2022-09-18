import axios from "axios";
const apiKey="cd59bbb8";
export default class OmdbService {

    public static get(imdbId:string){
        return axios.get("https://www.omdbapi.com",{
            params:{i:imdbId,apiKey}
        }).then(res=>res.data);
    }

}