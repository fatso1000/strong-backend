export const PORT = 4040;
export const CORS_URL = process.env.CORS_URL;
export const DB = {
  PASSWORD: process.env.DB_PASSWORD,
  NAME: process.env.DB_NAME,
  USER: process.env.DB_USER,
};
export const URI = `mongodb+srv://${DB.USER}:${encodeURIComponent(
  DB.PASSWORD!
)}@cluster0.laqyg.mongodb.net/${DB.NAME}?retryWrites=true&w=majority`;
