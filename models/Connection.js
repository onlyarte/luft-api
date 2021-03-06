const mongoose = require('mongoose');

const { Schema } = mongoose;

const ConnectionSchema = new Schema({
  originAirport: {
    type: Schema.Types.ObjectId,
    ref: 'Airport',
    required: true,
  },
  destinationAirport: {
    type: Schema.Types.ObjectId,
    ref: 'Airport',
    required: true,
  },
  departureTime: {
    type: Schema.Types.String,
    required: true,
    validate: {
      validator: time => /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]/.test(time),
      message: 'Departure time is wrong!',
    },
  },
  arrivalTime: {
    type: Schema.Types.String,
    required: true,
    validate: {
      validator: time => /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]/.test(time),
      message: 'Arrival time is wrong',
    },
  },
  __v: {
    type: Schema.Types.Number,
    select: false,
  },
});

module.exports = mongoose.model('Connection', ConnectionSchema);
