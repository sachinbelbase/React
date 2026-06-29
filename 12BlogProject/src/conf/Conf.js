const conf = {
  appWriterUrl: String(import.meta.env.VITE_APPWRITER_URL),

  appWriterProjectID: String(import.meta.env.VITE_APPWRITER_PROJECT_ID),

  appWriterDatabaseID: String(import.meta.env.VITE_APPWRITER_DATABASE_ID),

  appWriterCollectionID: String(import.meta.env.VITE_APPWRITER_COLLECTION_ID),

  appWriterBucketID: String(import.meta.env.VITE_APPWRITER_BUCKET_ID),
};

console.log(import.meta.env)
export default conf;
