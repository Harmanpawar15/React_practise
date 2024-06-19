import conf from "../conf/conf";
import{Client, ID, Account} from 'appwrite'


// new class:

export class AuthService{
    client=new Client();
    account ;

    // constructor for both :

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)

        this.account=new Account(this.client);
    }


    // method to create Acoount:

    async createAccount ({email, password, name}){
        try{
           const userAccount= await this.account.create(ID.unique(),name,email,password)

           if(userAccount){
            // calls other method

           }
           else {
            return userAccount;

           }

        }
  catch(error){
    throw error ;
  }
    }

    // method to login:
    async login({email,password}){
        try{
           return   await this.account.createEmailPasswordSession(email,password)

        }
 catch(error){
    throw error ;

 }
    }


    // method to  get current use:
    async getCurrentUser(){
        try{
            await this.account.get()
        }
        catch (error){

            console.log("Appwrite serive :: getCurrentUser :: error", error);

        }

        return null
    }

    async logout (){
        try{
            await this.account.deleteSessions()   // deleteseissions will delete all active sessions 

        }
        catch(error){
            console.log("Appwrite serive :: logout :: error", error);
        }
    }




}


// Variable for that class:
const authService= new AuthService();

export default authService