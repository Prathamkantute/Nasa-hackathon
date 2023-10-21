const mongoose = require("mongoose")

const oceanSchema = new mongoose.Schema( {
    "name": String,
    "Surface_area": String,
    "Avg_Depth": String,
    "Max_Depth": String,
    "Max_Depth_Location": String,
    "Avg_temperature": String,
    "coordinates": [Number, Number],
    "description": String,
    "species": [
        {
            "Name": String,
            "Scientific_name": String,
            "description": String,
            "Status": String,
            "Pop_status": String,
            "Sub_area": String,
            "Zinc_content": String
        }
    ]
})

const Ocean = mongoose.model('Ocean', oceanSchema)

module.exports = Ocean