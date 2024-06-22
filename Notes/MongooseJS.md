### Supported SchemaTypes
- string
- number
- buffer
- date
- boolean
- mixed
- objectid
- array
- decimal128
- map
- schema
- uuid
- bigint

#### Mongoose Virtuals
```javascript
const mongoose = require("mongoose");

  

const personSchema = mongoose.Schema(

  {

    name: {

      first: String,

      last: String,

    },

  },

  {

    virtuals: {

      fullName: {

        get() {

          return this.name.first + " " + this.name.last;

        },

      },

    },

  }

);

  

personSchema.virtual("fullName").get(function () {

  return this.name.first + " " + this.name.last;

});

  

const Person = mongoose.model("Person", personSchema);

const rupom = new Person({

  name: {

    first: "Rakib",

    last: "Talukder",

  },

});

  

console.log(rupom.fullName);
```

```javascript
const mongoose = require("mongoose");

  

const schema = mongoose.Schema(

  {

    name: String,

  },

  {

    capped: { size: 1024 },

    bufferCommands: false,

    autoCreate: false,

  }

);

  

const Model = mongoose.model("Model", schema);

  

await Model.createCollection();
```


#### Multi Connection in Mongoose
```javascript
const { Schema } = require("mongoose");

  

const userSchema = new Schema({

  name: String,

  email: String,

});

  

module.exports = userSchema;
// page view page
const mongoose = require("mongoose");

  

const pageSchema = mongoose.Schema({

  name: String,

  visitors: Number,

  admin: String,

});

  

module.exports = pageSchema;

// connection 
const mongoose = require("mongoose");

  

const conn = mongoose.createConnection("mongodb://localhost:27017/");

  

conn.model("User", require("./schema3"));

conn.model("PageView", require("./pageView"));

  

module.exports = conn;
```

#### Basic Validation
```javascript
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
```

#### Custom Validation
