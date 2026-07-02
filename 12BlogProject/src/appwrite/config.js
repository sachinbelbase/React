import conf from "../conf/Conf";
import { Client, Account, ID, Databases, Storage, Query } from "appwrite";

export class Services {
  client = new Client(); 
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appWriterUrl)
      .setProject(conf.appWriterProjectID);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appWriterDatabaseID,
        conf.appWriterCollectionID,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        },
      );
    } catch (error) {
      console.log("Appwrite Service :: createPost :: error", error);
    }
  }

  async updatePost(slug, { title, content, featuredImage, status, userId }) {
    try {
      return await this.databases.updateDocument(
        conf.appWriterDatabaseID,
        conf.appWriterCollectionID,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        },
      );
    } catch (error) {
      console.log("Appwrite Service :: updatePost :: error", error);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appWriterDatabaseID,
        conf.appWriterCollectionID,
        slug,
      );
      return true;
    } catch (error) {
      console.log("Appwrite Service :: createPost :: error", error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appWriterDatabaseID,
        conf.appWriterCollectionID,
        slug,
      );
    } catch (error) {
      console.log("Appwrite Service :: getPost :: error", error);
      return false;
    }
  }

  async getPosts(List = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appWriterDatabaseID,
        conf.appWriterCollectionID,
        List,
      );
    } catch (error) {
      console.log("Appwrite Service :: getPosts :: error", error);
      return false;
    }
  }

  // file upload service || method

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appWriterBucketID,
        ID.unique(),
        file,
      );
    } catch (error) {
      console.log("Appwrite Service :: uploadFile :: error", error);
      return false;
    }
  }

  async deleteFile(fileID) {
    try {
      await this.bucket.deleteFile(conf.appWriterBucketID, ID.unique(), fileID);
      return true;
    } catch (error) {
      console.log("Appwrite Service :: deleteFile :: error", error);
      return false;
    }
  }

  getFilePreview(fileID) {
    return this.bucket.getFilePreview(
      conf.appWriterBucketID,
      ID.unique(),
      fileID,
    );
  }
}

const service = new Services();
export default service;
