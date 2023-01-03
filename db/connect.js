
const mongoose =  require('mongoose');

const connectMongo =  (mongoUrl)=>{
    mongoose.connect(mongoUrl)
}

module.exports = connectMongo;
