var mongoose = require('mongoose');

var CustomerSchema = new mongoose.Schema({
  studentID: String,
  studentFirstName: String,
  studentLastName: String,
  studentEmail: String,
  studentPhoneNumber: String,
  updated_date: {type: Date, default: Date.now},
});

const Student = mongoose.model('Students',CustomerSchema);
module.exports = Student;
