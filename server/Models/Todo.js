
const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb://localhost:27017/Todolist");


connect.then(() =>  {
    console.log("Database connected sucessfully");
})

.catch(()  => {
    console.log("Database connot be connnected");
});

const TodoSchema = new mongoose.Schema({
    todo : String
    }
);

const Collection = new mongoose.model("test",TodoSchema);

module.exports = Collection;