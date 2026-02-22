const mongoose = require('mongoose');

const connectDB =async()=>{
try{
    await mongoose.connect('mongodb://localhost:27017/APIs/DBs');
    console.log('MongoDB connected successfully');
}
catch(error){
 console.log('Error in connecting DB: ', error);
}
}

module.exports= connectDB;