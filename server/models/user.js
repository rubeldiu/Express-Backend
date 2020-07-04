const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    address: {
      type: String,
      min: 3,
      max: 500,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
