import mongoose from "mongoose"

export const connectDB = async()=>{
await mongoose.connect('mongodb+srv://22b01a12a5:22b01a12a5@cluster.wuctez6.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}