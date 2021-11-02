/*Midtern test, COM229
This midterm test created and designed by Omar Khesruf"
 Student name: Omar Khesruf
 Student number: 301163767
 date: 2 Nov 2021*/
 
let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
