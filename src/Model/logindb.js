const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://athulcherukunnath:Pjgm0UqF4VzUVV9Q@athulck.pkqf2.mongodb.net/BooksDB?retryWrites=true&w=majority' || 'mongodb://localhost:27017/Book').then((succ)=> {
    console.log('DB connected')
}).catch((err)=> {
    console.log('Connection failed', err.message)
});

const Schema = mongoose.Schema;

var NewProductSchema = new Schema({
    uFname : String,
    uLname : String,
    uEmail : String,
    uPhone : Number,
    uPassword : String
});

var logindata = mongoose.model('login', NewProductSchema); //UserData is the model and NewBookData is the schema

module.exports = logindata;