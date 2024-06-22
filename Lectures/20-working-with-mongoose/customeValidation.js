const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  phone: {
    type: String,
    validate: {
      validator: function (v) {
        return /\d{3}-\d{3}-\d{4}/.test(v);
      },
      message: (props) => `${props.value} is not a valid phone number`,
    },
    required: [true, "User phone number required"],
  },
});

const User = mongoose.model("User", userSchema);
const user = new User();
let error = user.validateSync();
console.log(error);
