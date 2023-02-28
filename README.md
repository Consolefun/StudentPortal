StudentPortal was a group project developed by 
1.	William D Hoang
2.	Khalid Dhabbah


# Introduction

We have created a multi-page responsive student portal where we are able to create logins/passwords using MongoDB and FireBase databases, linking different pages together using Angular CLI, and being able to use html, css styling, bootstrap, typescript, and some other libraries to create different web pages. 

# Objectives

We needed to create a student portal that included student logins/passwords, single student information, different courses students can enroll into, a search engine to find books, a calendar, several subcategory web pages, and to use as many widgets as possible.

# Approaches

For the student logins/passwords, single student information, and courses we used MongoDB and FireBase databases.

For the search engine to find books, we used Angular CLI to pull data from the free to use Google Books Api that can be found here (https://developers.google.com/books/docs/v1/using). We worked with volumes using this (https://www.googleapis.com/books/v1/volumes?q=search+terms). By taking out "search+terms" and using typescript in books.component.ts, we declared an empty array to store what we search. The search button was created in html. When the user enters a value (this.bookTitle) to search it is appended to end of "volumes?q=" and the data is pulled using a for loop. The data is displayed in the html by using this format "{{book.title}}". We did this for retrieving the title, author, and thumbnail of the book that is searched.

For the calendar, it was quite simple. We used a package to retrieve date and time. The user is able to pick the year and day of the month.

For the subcategory pages, we only used html and css styling. The subcategories was linked in the side navigation. Once we are in the "All subcategories" web page, each image is clickable which will take the user to another web page. 

# Workflow
The below image display our client and Angular CLI as our front end and NodeJs and Express as our backend frameworks and running server. We used Fire base for user's login and registration and MongoDB as our database for online courses.
![image1](https://raw.githubusercontent.com/Consolefun/Lab1_Web_Development/master/Documentation/Capture.PNG)

# Login and Registration
Implemented by using Firebase database to stored and retrieve user's information and also authentications checks.
![image1](https://raw.githubusercontent.com/Consolefun/Lab1_Web_Development/master/Documentation/output/1.PNG)
![image1](https://raw.githubusercontent.com/Consolefun/Lab1_Web_Development/master/Documentation/output/2.PNG)
# Update user's information
Let user update their information and store user's information in the database
![image1](https://raw.githubusercontent.com/Consolefun/Lab1_Web_Development/master/Documentation/output/3.PNG)
# Online Courses
Let users add courses to their own account. Data is pull from MongoDB Database to display on the online course page. Whenever user click add button the course will be add to user's account.
![image1](https://raw.githubusercontent.com/Consolefun/Lab1_Web_Development/master/Documentation/output/4.PNG)
# Courses add to user's account
After user add a course to their account it will be display on their homepage. data of the courses from MongoDb is added into user's database and display on the homepage
![image1](https://raw.githubusercontent.com/Consolefun/Lab1_Web_Development/master/Documentation/output/5.PNG)
# Subcategories
Subcategories display different images which link to different Html pages which have relevant information to the images
![image1](https://raw.githubusercontent.com/Consolefun/Lab1_Web_Development/master/Documentation/output/6.PNG)
# Calendar
Display Months/date/year and time so user can set reminders for their classes.
![image1](https://raw.githubusercontent.com/Consolefun/Lab1_Web_Development/master/Documentation/output/7.PNG)
# Update user's information
User can update their information and store them in FireBase
![image1](https://raw.githubusercontent.com/Consolefun/Lab1_Web_Development/master/Documentation/output/8.PNG)


# Implementing

Note: Screenshots do not represent the entire code. 

This is a function that we write for the signup. We have if condition to prevent errors from occurring. Then We are using create a user with email and password from Firebase to create the database and the collection. Then store the data into the collection.

![image1](https://raw.githubusercontent.com/Consolefun/Lab1_Web_Development/master/Documentation/output/code1.PNG)

The below code is the HTML code for the calendar.
![image1](https://raw.githubusercontent.com/Consolefun/Lab1_Web_Development/master/Documentation/output/code2.PNG)

The following code is about updating the student information, but first, it checks if there is an error. Then it will update the data in the collection.
![image1](https://raw.githubusercontent.com/Consolefun/Lab1_Web_Development/master/Documentation/output/code3.PNG)


Here is how the google books API for loop was implemented in the "books.component.ts" file.

![booksforloop](https://user-images.githubusercontent.com/46879948/66644840-8b62ee00-ebe7-11e9-9330-f24d9c9a1b50.png)

Below is a screenshot of how the books were displayed in html 

![bookshtml](https://user-images.githubusercontent.com/46879948/66644933-d3821080-ebe7-11e9-865e-c6e83ad7459b.png)

 All subcategories HTML is displayed in a screenshot below.

![alldesignhtml](https://user-images.githubusercontent.com/46879948/66646116-dcc0ac80-ebea-11e9-9e03-b194cd32617a.png)

# Evaluation and Discussion

Using a student portal is efficient (saves time and money) and makes accessing things much easier.

# Conclusion

This project was aimed to make us apply everything we learned in Module 1 for web development into one project. The student portal used everything we learned so far from complex databases to html and css styling.




# Team Contribution:

- User Account Details (Sign-In, Sign-Up) was done by Khalid Dhabbah -100%
- Single Student Details was done by Khalid Dhabbah -100%
- Courses were done by William D Hoang -100%
- Books were done by William D Hoang -100%
- The calendar was done by William D Hoang -100%
- Subcategories were done by William D Hoang -100%
- Profile update (setting) was done by Khalid Dhabbah -100%
- Connecting to Firebase and MongoDB was done by William D Hoang and Khalid Dhabbah -100%
- The report and the Wiki were done by William D Hoang -100%



