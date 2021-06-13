/* Global Variables */
let baseURL = "http://api.openweathermap.org/data/2.5/weather?zip=";
let APIkey = "&units=metric&appid=50cad967ed3c808b110f530438a02e3b";

const dateToday = document.getElementById("date");
const tempRequested = document.getElementById("temp");
const contentEntered = document.getElementById("content");

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();

//Async GET request to OpenWeatherMap API
const retrieveData = async (baseURL, zipCode, APIkey) => {
  const request = await fetch(baseURL + zipCode + APIkey);
  try {
    // Transform into JSON
    const data = await request.json();
    return data;
  } catch (error) {
    console.log("error", error);
    // appropriately handle the error
  }
};

// Async POST to add the API data
const postData = async (url = 'baseURL' + 'zipCode' + 'APIkey', data = {}) => {
  console.log(data); //To show data in the console
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" },
    // body data type must match "Content-Type" header
    body: JSON.stringify(data),
  });

  try {
    const newData = await response.json();
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};

// async function that will be called after the completed POST request to retrieve data from our app, and then update the necessary elements on the DOM
const updateUI = async () => {
  const request = await fetch("/all");
  try {
    const allData = await request.json();

    dateToday.innerHTML = "Today's date: " + allData.date;

    tempRequested.innerHTML = "Temperature: " + allData.temp + " °C";

    contentEntered.innerHTML = "You're feeling: " + allData.content;
  } catch (error) {
    console.log("error", error);
  }
};

const button = document.getElementById("generate");

// Create an event listener for the element with the id: generate, with a callback function to execute when it is clicked
button.addEventListener("click", callBack);

function callBack(event) {
  const zipCode = document.getElementById("zip").value;
  const feelings = document.getElementById("feelings").value;
  // Inside that callback function call your async GET request with the parameters
  retrieveData(baseURL, zipCode, APIkey)
    // chain another Promise that adds the API data, as well as data entered by the user
    .then(function (data) {
      postData("/add", {
        date: newDate,
        temp: data.main.temp,
        content: feelings,
      });
    })
    // chain another Promise that updates the UI dynamically
    .then(function (newData) {
      updateUI();
    });
}
