const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: {
        type: String,
        require: true,
        max: 120
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    carModel: {
        type: String,
        require: true,
        max: 50
    },
    carType: {
        type: String,
        max: 25
    },
    departureTime: {
        type: Date
    },
    arrivalTime: {
        type: Date
    },
    price: {
        type: Number,
        require: true
    },
    contactInfo: {
        type: Schema.Types.Mixed,
        require: true
    },
    capacity: {
        type: Number,
        require: true
    },
    availableSeats: {
        type: Number
    },
    isRepeated: {
        type: Boolean,
        default: false
    }
});

module.exports = Post = mongoose.model("carpoolPost", PostSchema);
