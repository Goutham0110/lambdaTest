require('dotenv').config();

const config = {
"username": process.env.DB_USER_NAME || "admin",
"password": process.env.DB_PASSWORD || "admin123456",
"database": process.env.DB_NAME || "database2",
"host": process.env.DB_HOST || "database-2.cctiazq3bybd.us-east-1.rds.amazonaws.com",
"dialect": "mysql",
"time":5000,
"pool": {
    max: 5,
    min: 0,
    idle: 20000,   //15s
    acquire:60000, 
  }
};
  
  
module.exports = config;