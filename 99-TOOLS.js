////////////////////////////////////////////////

// VSCODE: MongoDB Extension

// IDE: MongoDB Compass (FREE)

// Studio 3T (FREMIUM (readonly) + PAID)

////////////////////////////////////////////////
// Mongoose (Operational Data Model [ODM] for NodeJS)
// https://mongoosejs.com
////////////////////////////////////////////////

import mongoose from "mongoose";
const { Schema } = mongoose;

const EventSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  eventType: {
    type: String,
    enum: {
      values: ['online', 'in-person'],
      message: '{VALUE} is not supported'
    }
  },
  handler: String,
  city: String,
  quantity: {
    type: Number,
    min: [6, 'Min 6 people'],
    max: 12

  },
  view: Number,
  date: {
    type: Date,
    default: () => new Date(),
  },
  tags: {
    type: [String],
    required: function() {
        return this.quantity > 6;
    }
  
  }
});

const EventModel = mongoose.model("event", EventSchema);

await EventModel.insert({
  name: "MUG",
  handler: "brisbane",
  city: "Brisbane",
  limit: 2,
  date: new Date("2024-07-19T08:00:00Z"),
});
