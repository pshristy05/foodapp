const mongoose = require('mongoose');
const mongoURL = 'mongodb+srv://goFood:Shristy@cluster0.rrcr5jw.mongodb.net/gofoodmern?retryWrites=true&w=majority';
const mongoDB =() =>{
    mongoose.connect(mongoURL, {dbName: "gofoodmern", useNewUrlParser : true, useUnifiedTopology: true}, async(err, result) =>{
        if(err) console.log(err);
        else{
        console.log('connected');
        const feteched_data = await mongoose.connection.db.collection("food_items");
        feteched_data.find({}).toArray(async function(err,data){
            const foodCategory = await mongoose.connection.db.collection("foodCategory");
            foodCategory.find({}).toArray(function(err, catData){
                if(err) console.log(err);
                else {
                  global.food_items = data;
                  global.foodCategory = catData;
                }
                
            });
            // if(err) console.log(err);
            // else {
            //     global.food_items = data;
            //     // console.log(global.food_items);
            // }
        }) 
    }
})};

module.exports = mongoDB;