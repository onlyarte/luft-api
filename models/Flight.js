const mongoose = require('mongoose');

const { Schema } = mongoose;

const FlightSchema = new Schema({
  connectionId: {
    type: Schema.Types.ObjectId,
    ref: 'Connection',
    required: true,
  },
  date: {
    type: Schema.Types.Date,
    required: true,
  },
  __v: {
    type: Schema.Types.Number,
    select: false,
  },
});

module.exports = mongoose.model('Flight', FlightSchema);
