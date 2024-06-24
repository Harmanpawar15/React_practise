import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";


export class Service {
    client= new Client;
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)

        this.databases=new Databases(this.client);
        this.bucket=new Storage(this.client);
    }

    // method to create post:
    async createPost({title, slug, content, featuredImage, status, userId})
    {

        try{
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug ,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
    
                }

            )

        }
catch (error){
    console.log("Appwrite serive :: createPost :: error", error)

}

    }

    // method to Update Post:
    // We wont use userId here -> as permission will be given to user who created that post so we emitting that part
    async updatePost (slug,{title, content, featuredImage, status})
    {
        try{
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,

                }

            )

        }

        catch(error){
            console.log("Appwrite service :: updatePost :: error", error)
        }

    }

    // method to Delete Post:

    async deletePost ({slug}){
        try{
            return await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug , // our UniqueId
            )
            return true ;

        }

    catch(error){
        console.log("Appwrite service :: deletePost :: error", error)
        return false ;
    }

    }

    // method to get Single Post:

    async getPost ({slug}){

        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug 
    
            )
            
        }
        catch(error){
            console.log("Appwrite service :: getPost :: error", error)
             return false 
        }
    }

    // method to get all posts :

    async getPosts ({queries=[Query.equal("status", ["active"])]}){

        try{
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries

            )

        }
        catch(error){
            console.log("Appwrite service :: getPosts :: error", error)
            return false
        }
    }


    // file upload service

    // Upload File

    async uploadFile(file){

        try{
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file,
            )

        }
        catch (error){
            console.log("Appwrite service :: uploadFile :: error", error)
            return false
        }
    }


    //  Delete File 
    
    async deleteFile (fileId){
        try{

            return await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId

            )
            return true 
        }

        catch(error){
            console.log("Appwrite service :: deleteFile :: error", error)
            return false

        }
    }


    // To get file Preview :

    async getFilePreview(fileId){
        try{
            return await this.bucket.getFilePreview(
                conf.appwriteBucketId,
                fileId
            )

        }

        catch(error){
            console.log("Appwrite service :: getFilePreview :: error", error)
            return false
        }

    }




}

const service= new Service();

export default service ;