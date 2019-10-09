var mongoose = require('mongoose');

var CourseSchema = new mongoose.Schema({
  courseId: String,
  courseName: String,
  courseDescription: String,
  courseTaken: Boolean,
  updated_date: {type: Date, default: Date.now},
});


const Course = mongoose.model('course',CourseSchema);
module.exports = Course;
