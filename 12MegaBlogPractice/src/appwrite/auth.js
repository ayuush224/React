import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf.js";

export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProductId);

        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}){
        try {
            const user = await this.account.create({
                userId : ID.unique(),
                email,
                password,
                name,
            })
            if(user){
                //call another method(login)
                return this.login({email, password});
            }
            else{
                return null;
            }
        } catch (error) {
            console.log("Account creation caused error in AuthService : ", error);
            return null;
        }
    }

    async login({email, password}){
        try {
            return await this.account.createEmailPasswordSession({
                email,
                password
            })
        } catch (error) {
            console.log("Not able to login user : ", error);
            return null;
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Got error during fetching user : ", error);
            return null;
        }
    }

    async logout(){
        try {
            return this.account.deleteSessions();
        } catch (error) {
            console.log("Error occured during logout : ", error);
            return null;
        }
    }
}

const authService = new AuthService();
export default authService;