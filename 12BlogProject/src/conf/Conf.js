const conf = {
  appWriterUrl: String(import.meta.env.VITE_APPWRITER_URL),

  appWriterProjectID: String(import.meta.env.VITE_PROJECT_ID),

  appWriterDatabaseID: String(import.meta.env.VITE_DATABASE_ID),

  appWriterCollectionID: String(import.meta.env.VITE_COLLECTION_ID),

  appWriterBucketID: String(import.meta.env.VITE_BUCKET_ID),
};

export default conf;
