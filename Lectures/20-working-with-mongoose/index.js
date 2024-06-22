const mongoose = require("mongoose");

// const personSchema = mongoose.Schema({
//   firstName: String,
//   lastName: String,
//   email: String,
//   age: Number,
//   bio: String,
//   single: Boolean,
// });

/**
 * @alias {personSchaema} mongoose.Schema
 */

const personSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: [3, "minimum 3 chars"],
    maxlength: [5, "maximum 10 chars"],
  },
  lastName: {
    type: String,
    required: true,
    minlength: [3, "minimum 3 chars"],
    maxlength: [5, "maximum 10 chars"],
  },
  email: {
    type: String,
    minlength: [5, "minimum 5 chars"],
    maxlength: [20, "maximum 10 chars"],
    validate: {
      validator: function (v) {
        return v.endsWith(".com");
      },
    },
  },
  age: Number,
  bio: String,
  single: Boolean,
});

const Person = mongoose.model("Person", personSchema);

mongoose
  .connect("mongodb://localhost:27017/mongoose-demo")
  .then(async () => {
    console.log("Database connection established");
    const person = new Person({ firstName: "11" });
    await person.save();
    // const people = await Person.find({ firstName: "Rakib" });
    // console.log(people);
    // const person = new Person({
    //   firstName: "Rakib",
    //   lastName: "Talukder",
    //   email: "rakib@gmail.com",
    //   age: 23,
    //   bio: "Backend Developer",
    //   single: true,
    // });
    // await person.save();
    // console.log("Person created");
    // console.log(person);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    mongoose.connection.close();
  });
