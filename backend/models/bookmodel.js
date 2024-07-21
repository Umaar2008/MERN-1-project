const mongoose = require("mongoose")


const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
      }

})

const Books = mongoose.model('Books', bookSchema);

module.exports = Books ;