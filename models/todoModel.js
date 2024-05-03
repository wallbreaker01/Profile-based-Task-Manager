const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name"],
    },
    todo: {
      type: String,
      required: [true, "add task"],
    },
    time: {
      type: String,
      required: [true, "add time"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Contact", contactSchema);
