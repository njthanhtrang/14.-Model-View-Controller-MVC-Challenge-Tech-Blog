# 14.-Model-View-Controller-MVC-Challenge-Tech-Blog
## Description 
This application is a CMS-style blog site that allows users to publish articles and blog posts and the latest technologies and comment on other developers' posts as well. This application follows the Model View Controller (MVC) architectural structure, uses Handlebars.js as the templating language, Sequelize as the ORM, and express-session npm package for authentication.

This application is deployed to Heroku at .

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



​
 explain and showcase what your application does, justify the technologies used, and even talk about some of the challenges you faced and features you hope to implement in the future. A good README helps you stand out among the large crowd of developers putting their work on GitHub.
​
At a minimum, your project README needs a title and a short description explaining the what, why, and how. What was your motivation? Why did you build this project? (Note: The answer is not "Because it was a homework assignment.") What problem does it solve? What did you learn? What makes your project stand out? 
​
## Table of Contents (Optional)
​
If your README is very long, add a table of contents to make it easy for users to find what they need.
​
* [Installation](#installation)
* [Usage](#usage)
* [Packages](#packages)
* [Credits](#credits)
* [License](#license)
​
​
## Installation
​
What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
​
​
## Usage 
​
Provide instructions and examples for use. Include screenshots as needed.

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

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

## License
​
The last section of a good README is a license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, use [https://choosealicense.com/](https://choosealicense.com/)
​
## Badges
​
![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
​
Badges aren't _necessary_, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
​
## Features
​
If your project has a lot of features, consider adding a heading called "Features" and listing them there.