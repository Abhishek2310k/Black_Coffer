const mongoose = require("mongoose")

const DataSchema = new mongoose.Schema({
    end_year:Number,
    intensity:Number,
    sector:String,
    topic:String,
    insight:String,
    url:String,
    region:String,
    start_year:String,
    impact:String,
    added:String,
    published:String,
    country:String,
    relevance:Number,
    pestle:String,
    source:String,
    title:String,
    likelihood:Number  
})

const DataModel = mongoose.model("Blackcoffer",DataSchema)
module.exports = DataModel