const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  firstname: {
    type: Schema.Types.String,
    required: true,
  },
  surname: {
    type: Schema.Types.String,
    required: true,
  },
  birth: {
    type: Schema.Types.Date,
    required: true,
  },
  email: {
    type: Schema.Types.String,
    required: true,
    unique: true,
  },
  password: {
    type: Schema.Types.String,
    required: true,
  },
  __v: {
    type: Schema.Types.Number,
    select: false,
  },
});

module.exports = mongoose.model('User', UserSchema);
