const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const empSchema = new Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        validate: (email)=>{
            return /^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
          }
    },
    description:{
        type: String
    },
    phone:{
        type: Number,
        required:true,
    },
    created_date:{
        type:Date,
        default:Date.now
    }
});

 const Employee = mongoose.model('Employees',empSchema);
 module.exports=Employee;