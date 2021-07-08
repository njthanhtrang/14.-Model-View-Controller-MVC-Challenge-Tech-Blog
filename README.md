# 14.-Model-View-Controller-MVC-Challenge-Tech-Blog
## Description 
This application is a CMS-style blog site that allows users to publish articles and blog posts and the latest technologies and comment on other developers' posts as well. This application follows the Model View Controller (MVC) architectural structure, uses Handlebars.js as the templating language, Sequelize as the ORM, and express-session npm package for authentication.

The user is presented with the homepage, which includes existing blog posts if any have been posted, navigation links for the homepage and the dashboard, and the option to log in.

Acceptance criteria include:

When clicking the homepage, the user is taken to the homepage.

When clicking on any other links in the navigation, the user is prompted to either sign up or sign in.

When signing up, the user is prompted to create a username and password.

When clicking on the sign-up button, user credentials are saved and the user is logged into the site.

When revisiting the site at a later time and choosing to sign in, the user is prompted to enter their username and password.

When signed in to the site, users see navigation links for the homepage, the dashboard, and the option to log out.

When clicking on the homepage option in the navigation, the user is taken to the homepage and presented with existing blog posts that include the post title and the date created.

When clicking on an existing blog post, the user is presented with the post title, contents, post creator’s username, and date created for that post and has the option to leave a comment.

When entering a comment and clicking on the submit button while signed in, the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created.

When clicking on the dashboard option in the navigation, the user is taken to the dashboard and presented with any blog posts already created and the option to add a new blog post.

When clicking on the button to add a new blog post, the user is prompted to enter both a title and contents for the blog post.

When clicking on the button to create a new blog post, the title and contents of the post are saved and the user is taken back to an updated dashboard with the new blog post.

When clicking on one of the existing posts in the dashboard, the user is able to delete or update the post and taken back to an updated dashboard.

When clicking on the logout option in the navigation, the user is signed out of the site.

When the user is idle on the site for more than a set time, the user is able to view comments but is prompted to log in again before they can add, update, or delete comments.

Future implementations include resizing the input area for a better UI experience.

## Table of Contents
​
If your README is very long, add a table of contents to make it easy for users to find what they need.
​
* [Installation](#installation)
* [Usage](#usage)
* [Packages](#packages)
* [Credits](#credits)
* [Questions](#questions)
* [License](#license)
​
## Installation
​
Clone the repository, navigate to the project folder on your CLI and run the following command to install Node.js:

```npm install```
## Usage 
Run the following command on your CLI to run the application:

```node server.js```

Or, view the deployed application on Heroku at https://techblog302.herokuapp.com/.
​
<img width="1060" alt="Screen Shot 2021-07-08 at 10 56 36 AM" src="https://user-images.githubusercontent.com/77700824/124969108-2b2af700-dfdb-11eb-95cc-eefad746769a.png">
<img width="1057" alt="Screen Shot 2021-07-08 at 10 56 56 AM" src="https://user-images.githubusercontent.com/77700824/124969151-37af4f80-dfdb-11eb-8e38-05efe1e44d42.png">
<img width="1197" alt="Screen Shot 2021-07-08 at 11 34 20 AM" src="https://user-images.githubusercontent.com/77700824/124973495-71368980-dfe0-11eb-812a-91fb96a90aca.png">

## Packages

* express-handlebars https://www.npmjs.com/package/express-handlebars to use Handlebars.js for Views
* MySQL2  https://www.npmjs.com/package/mysql2 to connect to a MySQL database for Models
* Sequelize https://www.npmjs.com/package/sequelize to create an Express.js API for Controllers
* dotenv https://www.npmjs.com/package/dotenv to use environmental variables
* bcrypt https://www.npmjs.com/package/bcrypt to hash passwords
* express-session https://www.npmjs.com/package/express-session for authentication, storing session data on client side in a cookie. When idle on the site for more than a set time, the cookie expires and the user is required to log in again to start a new session.
* connect-session-sequelize https://www.npmjs.com/package/connect-session-sequelize for authentication

​
## Credits

Created by Jennifer Nguyen.

## Questions
For additional questions and information, please visit my [GitHub profile](github.com/njthanhtrang/)
or reach out via email at njthanhtrang@gmail.com.

## License
​
MIT License

Copyright (c) [2021] [Jennifer Nguyen]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
