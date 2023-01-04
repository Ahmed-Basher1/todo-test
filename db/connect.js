
const mongoose =  require('mongoose');

const connectMongo =  (mongoUrl)=>{
    mongoose.set('strictQuery', true);
    mongoose.connect(mongoUrl)
}

module.exports = connectMongo;
