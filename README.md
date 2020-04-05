# Chameleon Sheets

Deployed link: (https://chameleon-sheets.herokuapp.com/)

Demo Video: (https://youtu.be/2pRWXtuPae4). Please watch our demo video for a brief overview of what our application does!
- Video script and recording made by Brennan, as well as the background music!

While the application doesn't allow users to freely create accounts and test the app themselves in an effort to protect student information, we would be happy to provide a more technical demo to anyone interested! Please reach out to us at chameleon.sheets@gmail.com!

Contributors (GitHub usernames in parentheses):

- Frontend Team
    - Kyle Betlach (kbetlach)
    - Jacob Rosenbaum (JacobRosenbaum)
    - Brennan Spicer (brennancodes)

- Backend Team
    - James Botham (Jkbotham)
    - Ben Honken (BenHonken)

<img width="1132" alt="Screen Shot 2020-03-13 at 12 21 29 PM" src="https://user-images.githubusercontent.com/53587397/76644577-3d9b3a80-6525-11ea-91bd-653c512050aa.png">

## Introduction and Inspiration

Welcome to Chameleon Sheets!

The idea behind this application came from Brennan, who works with students with disabilities, as he was seeking digitized alternatives to the materials he was using day to day to complete his work.

As a paraprofessional, Brennan and his colleagues use sheets of paper with a grid to record student behavior in 15 minute increments. Student behavior scores range from 1 - 5, five being the best, and one the opposite. Each student had their own sheet of paper, and at the end of the day, paras would compile this data into a digital spreadsheet.

Brennan realized his school was going through tons of paper, and creating a digital version of this would not only save his school paper, but streamline and simplify the entire process.

## Application Use

PLEASE NOTE: Users cannot register straight off of the landing page. Since there is sensitive information about students in the data grid, the application is set so admins have the sole power adding users. The admin is able to send an email (through Nodemailer), where the user receives a hyper link to complete their registration. Once complete, the user can log in like normal.

The application has three user roles - Admin, Teacher, and Guardian. The teacher role has access to the behavior grid and history page, where student scores are available by date. The admin role has the ability to create students, teachers, and guardians, as well as delete them. The admin can also view the behavior grid and history pages. Guardians are linked to the single student or students they are the guardian of so they can view the grid and history, but they do not have the ability to edit anything.

Teachers have the ability to add any student in the database to their grid with the use of a plus button modal which displays all students available. Clicking any student adds that name to their navtab, and clicking between students will dynamically load that students behavior chart for the day. Using Moment.js, the application always knows what day it is and displays it appropriately. 

<img width="1405" alt="grid" src="https://user-images.githubusercontent.com/53587397/76648156-214ecc00-652c-11ea-9fe5-64106d8bda0e.png">

On the history page, all students in the database are displayed in cards, with a list of their average score by day, and the ability to export a CSV of that data with the simple click of the mouse. This makes for easy use and analysis of student behavior data outside of the application.

## Technologies Utilized

- MERN Stack
    - MongoDB
    - ExpressJS
    - React.js
    - Node.js
- HTML5 / CSS / JavaScript
- Bootstrap
- Passport.js
- React Moment.js
- Font Awesome
- Export to CSV
- Toasted Notes
- Nodemailer

## Directions for Future Development

- We would like to make the app a progressive web application (PWA). That way if a device or school loses internet connection, use of the app can continue.

- Fully customizable columns and rows so the data sheet can be used in any context, hence the name "chameleon sheets," so the app can be adapated to tracking anything, like company inventory, etc.

- User customization options like background theme, colors, a profile picture, etc.
Customization options by school or company.

- Add a comment / note section for each student on the grid page to record behavior.

- Increase performance metrics through file minifying.
