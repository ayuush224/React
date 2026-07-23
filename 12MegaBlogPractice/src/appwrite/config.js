import conf from "../conf/conf";
import { Client, ID, Databases, Query, Storage } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProductId);
        
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument({
                databaseId: conf.appwriteDatabaseId,
                collectionId: conf.appwriteCollectionId,
                documentId: slug,
                data: {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            });
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error);
            return null;
        }
    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument({
                databaseId: conf.appwriteDatabaseId,
                collectionId: conf.appwriteCollectionId,
                documentId: slug,
                data: {
                    title,
                    content,
                    featuredImage,
                    status
                }
            });
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error", error);
            return null;
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument({
                databaseId: conf.appwriteDatabaseId,
                collectionId: conf.appwriteCollectionId,
                documentId: slug
            });
            return true;
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error", error);
            return false;
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument({
                databaseId: conf.appwriteDatabaseId,
                collectionId: conf.appwriteCollectionId,
                documentId: slug
            });
        } catch (error) {
            console.log("Appwrite service :: getPost :: error", error);
            return null;
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments({
                databaseId: conf.appwriteDatabaseId,
                collectionId: conf.appwriteCollectionId,
                queries
            });
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error", error);
            return null;
        }
    }

    // File Upload Services
    async uploadFile(file) {
        try {
            return await this.bucket.createFile({
                bucketId: conf.appwriteBucketId,
                fileId: ID.unique(),
                file
            });
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error", error);
            return null;
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile({
                bucketId: conf.appwriteBucketId,
                fileId
            });
            return true;
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error", error);
            return false;
        }
    }

    getFilePreview(fileId) {
        try {
            // getFilePreview is synchronous and returns a URL string, so no 'await' is needed
            return this.bucket.getFilePreview({
                bucketId: conf.appwriteBucketId,
                fileId
            });
        } catch (error) {
            console.log("Appwrite service :: getFilePreview :: error", error);
            return null;
        }
    }
}

const service = new Service();
export default service;