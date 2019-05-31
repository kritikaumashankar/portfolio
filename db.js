const MongoClient = require("mongodb").MongoClient;
const ObjectID = require("mongodb").ObjectID;
const urlProd = process.env.MONGODB_URI
const urlDev = "mongodb://localhost:27017";
const mongoOptions = {useNewUrlParser : true};

const state = {
  db:null
}

const connect =(cb)=>{
  let url ="";
  let dbname ="";
    if(state.db)
      cb();
    else{
      let env = process.env.NODE_ENV || 'dev';
      if(env==='production')
        url = urlProd;
      else
        url = urlDev;
      MongoClient.connect(url,mongoOptions,(err,client)=>{
        if(err)
          cb(err);
        else{
          if(env==='production')
            dbname = "heroku_blkbtlcz";
          else
          dbname = "portfolio";
          state.db = client.db(dbname);
          cb();
        }
      });
    }
}

const getDB =()=>{
  return state.db;
}

module.exports = {getDB, connect};