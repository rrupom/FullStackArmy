const mongoose = require("mongoose");

const breakfaseSchema = mongoose.Schema({
  eggs: {
    type: Number,
    min: [6, "Too few eggs"],
    max: 12,
  },
  bacon: {
    type: Number,
    required: [true, "Why no bacon?"],
  },
  drink: {
    type: String,
    enum: ["Coffee", "Tea"],
    required: function () {
      return this.bacon > 3;
    },
  },
});

const Breakfast = mongoose.model("Breakfast", breakfaseSchema);

const badBreakfast = new Breakfast({
  eggs: 2,
  bacon: 0,
  drink: "Milk",
});

let error = badBreakfast.validateSync();
console.log(error);
