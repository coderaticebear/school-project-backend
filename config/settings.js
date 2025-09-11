require('dotenv').config();
const mongoURL = `${process.env.MONGO_URI}/${process.env.MONGO_DB}?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.0`;
module.exports = {
  mongoURL,
};
