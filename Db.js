const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Swaroop:Swaroop219@swaroop.omff73x.mongodb.net/?retryWrites=true&w=majority',{
    useUnifiedTopology:true,
    useNewUrlParser:true,
}
)
.then((response)=>{
    console.log("Connected to Database");
})
.catch((error)=>{
    console.log(error);
});