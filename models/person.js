const mongoose = require('mongoose');

// Define the schema
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: Number,
  favoriteFoods: [String]
});

// Create the model
const Person = mongoose.model('Person', personSchema);

// Export the model to use it in other files
module.exports = Person;
