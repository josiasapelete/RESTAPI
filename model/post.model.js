const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
    {
        type:{
            type: String,
            required:true
        },
        question :{
            type : String,
            required: true
        },
        optionA :{
            type : String,
            required :true
        },
        optionB :{
            type : String,
            required :true
        },
       
        answer :{
            type : String,
            required: true
        } ,
        options :{
            type :[String]
        }


    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('post',postSchema)