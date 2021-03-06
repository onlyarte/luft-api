const mongoose = require('mongoose');

const { Schema } = mongoose;

const PriceSchema = new Schema({
  flight: {
    type: Schema.Types.ObjectId,
    ref: 'Flight',
    required: true,
  },
  amount: {
    type: Schema.Types.Number,
    required: true,
  },
  createdAt: {
    type: Schema.Types.Date,
    default: Date.now,
    index: {
      expires: 900,
    },
  },
  __v: {
    type: Schema.Types.Number,
    select: false,
  },
});

module.exports = mongoose.model('Price', PriceSchema);
