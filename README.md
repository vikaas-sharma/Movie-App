# 🎬 Movie Library
Welcome to the Movie Library WebApp! This project is a web application that allows users to search for movies, view details, and manage a personal playlist.

## 🚀 Installation
### Step 1: Download Node.js
To run the Web Application on your local system, download Node.js from [here](https://nodejs.org/en/download/package-manager/). This will give you access to the Node Package Manager (npm), which is essential to run the project.
### Step 2: Install Dependencies
Open the terminal and type in the following command to install all the dependencies:

`npm install`
### Step 3: Start the Application
Run the application with:

`npm start`

Then, open http://localhost:8000 to view it in your browser.

## 🛠️ Building the Project

### Step 1: Initialize Project

Initialize the project using:

`npm init`

### Step 2: Install Express

`npm install express`

### Step 3: Install EJS:
`npm install ejs`

Include the following lines in index.js to use EJS:

`app.set('view engine', 'ejs');
app.set('views', './views');
`
### Step 4: Install Express-EJS-Layouts:
`npm install express-ejs-layouts`
Include the following lines in index.js:
`const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
`
### Step 5: Install Mongoose:
`npm install mongoose`

### Step 6: Install Cookie-Parser:
`npm install cookie-parser`

### Step 7: Install Passport:
`npm install cookie-parser`

### Step 8: Install Passport-Local:
`npm install passport`

### Step 9: Install Express-Session:
`npm install express-session`

### Step 10: Install Connect-Mongo:
`npm install connect-mongo`

### Step 11: Install Dotenv:
`npm install dotenv`

## 📋 Prerequisites
### System Requirements
* Any system with a basic configuration.
* Operating System: Windows / Linux / Mac.
### Software Requirements
* Updated browser
* Node.js installed (Download it [here](https://nodejs.org/en/download/package-manager/))
* Any text editor of your choice
### 🛠️ Technologies Used
* Javascript
* NodeJS, ExpressJS
* MongoDB for the database
* passport.js library for authentication
* OMDB API
* HTML, CSS, EJS
### ✨ Features
* Sign In and Sign Up Authentication
* Built using MVC Architecture
* Users can search for a movie name and get details of that movie
* Details of movies are fetched from an API
* Users can add a movie to a playlist
* Playlists are completely private and can be viewed after logging in
* Users can search for movies and view details without signing in, but cannot add to the playlist
