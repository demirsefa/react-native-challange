import {LoginRequestModel} from "../../models/login.request.model";
import {UserModel} from "../../models/user.model";

export default class FakeBackendAuthService {
    public static login(requestModel: LoginRequestModel) :Promise<UserModel>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if(requestModel.username.toLowerCase()==="hakan"&&requestModel.password==="123321"){
                    resolve({
                        username:"Hakan",
                        name:"Hakan Demir"
                    });
                }else{
                    reject("Username or password wrong")
                }
            },1000);
        })

    }
}
