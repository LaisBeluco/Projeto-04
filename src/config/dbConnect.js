import mongoose from "mongoose";

mongoose.connect("mongodb+srv://Lais-Beluco:GJHR4672@cluster0.lcdaigk.mongodb.net/lais-node");

let db = mongoose.connection;

export default db;