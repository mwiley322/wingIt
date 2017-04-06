var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

    var CitySchema = new Schema({
      name: String,
      imageUrl: String,
      Population: Number,
      isAffordable: Boolean,
      description: String,
    });

    module.exports = mongoose.model('City', CitySchema);
