import mongoose, { Schema } from "mongoose";

const jobSchema = new mongoose.Schema({
    company:{
        type: String, 
        required: [true,'Please provide your Company name'],

    },
    position:{
        type:String,
        required:[true,"Position field cannot be  empty"],
        maxlength:100
        },
    status: {
        type: String,
        enum: ['Pending', 'reject', 'Accepted','Interview'],
        default: 'Pending'
      },
    workType:{
        type: String,
        //required: true,
        enum:['Full Time','Part Time',"Internship",'Freelance','Contract'],
        default: 'Full Time'
    },
    workLocation:{
        type: String,
        default:'Banglore',
        required: [true, 'Work Location is required'],
    },
    
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: "User",
      },

},{
    timestamps: true
});



export default  mongoose.model("Job", jobSchema);