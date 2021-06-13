# Project title

Weather-Journal App Project


## Table of Contents

* [Project title] (#Project title)
* [Overview]      (#Overview)
* [Instructions]  (#Instructions)
* [Description]   (#Description)
* [Installation]  (#Installation) 
* [Credits]       (#Credits)

# Overview
Created an asynchronous web app that uses Web API and user data to dynamically update the UI. 


# Instructions
Modified the `server.js` file and the `website/app.js` file.
 

# Description

 -Set up project environment. Installed the packages Express, Body-Parser, and Cors from the terminal and then included them in server.js file.

 -Created a server running on the port 8000 and added a console.log() to the server callback function, to test that the server is running. 

 -In the server.js file, added a GET route that returns the projectData object and a POST route that adds incoming data to projectData.

 -Acquired API credentials from OpenWeatherMap website to use to create global variables at in the app.js code.

 -Wrote an async function in app.js that uses fetch() to make a GET request to the OpenWeatherMap API.

 -Wrote another async function to make the POST request to add the API data.

 -Wrote another async function that is called after the completed POST request. This function will retrieve data from the app, select the necessary elements in the index.html file, and then update their necessary values to reflect the dynamic values for:
        - Temperature
        - Date
        - Content (user response)

 -Created an event listener for the button, with a callback function to execute when it is clicked:
        -After the retrieval of the weather data, chained another Promise that makes a POST request to add the API data, as well as data entered by the user, to your app.
        -Chain another Promise that updates the UI dynamically 



# Installation
No preInstallation required 


# Credits:

https://w3bits.com/rainbow-text/