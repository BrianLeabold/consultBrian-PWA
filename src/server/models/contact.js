const mongoose = require('mongoose')
const Schema = mongoose.Schema

const contactSchema = new Schema({
        name: String,
        // street: String,
        city: String,
        // state: String,
        // postalCode: String,
        email: String,
        phone: String,
        topic: String,
        comment: String,
        timePreference: String,
        subscribe: Boolean,
})

module.exports = mongoose.model('contact', contactSchema, 'contacts')
