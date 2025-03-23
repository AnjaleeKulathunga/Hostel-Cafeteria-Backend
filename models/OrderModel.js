const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    StudentID:{
        type:String,  //data type
        required:true //validate
    },
    Name:{
        type:String,
        required:true
    },
    Contact:{
        type:String,
        required:true 
    },
    items:[{
        foodItem:{
            type:String,
            required:true 
        },
        quantity:{
            type:Number,
            required:true
        },
        customization:{
            type:String,
            required:false
        }
    }],

    totalPrice:{
        type:Number,
        required:true
    },
    specialInstructions:{
        type:String,
        required:false
    },
    //status:{
       // type:String,
        //enum:['Pending','Preparing','Completed','Cancelled'],
        //default:'Pending'
   // },
    orderDate:{
        type:Date,
        default:Date.now
    }


});

module.exports = mongoose.model(
    "OrderModel",
    orderSchema
);