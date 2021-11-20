# 11248group5

Member1: Justin Rossiter @Jumiro1.
Member2: Thomas Pena @thomaspr1205.
Member3: Quinton Wiebe @qwiebe100.
Member4: Mitchell Thanath @mstriker64.

# energy-optimizer-frontend

## About This Project
The intent of this project is to optimize energy production using **machine learning** models.
This specific repository serves as the **frontend service**, handling the interface between the [backend](https://github.com/qwiebe100/energy-optimizer-backend) server and the users.

## Documentation
One of the goals in this project was to make the code simple, well-structured, and easy to understand.  Most of the documentation and functionality can be found in the code's comments.
In the future, as functionality increases, the inherent increase in complexity may warrant more thorough, independent documentation.  That said, below are the things you should know before diving-in; specific details on functionality are left to in-line comments.
### Getting Started - Prerequisites for Development
#### Getting Started with Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
#### Scripts to run locally
Use these [scripts](https://github.com/Jumiro1/11248group5/blob/main/Energy-Optimizer/frontend/README.md) to run the application and for any additional information on react
#### Environment Variables
To access the heatmap functionality, you will need to connect to Google Maps API. This project uses a private key with the credentials stored in a .env file. Copy 
```
REACT_APP_MAP_KEY=
```
and insert the appropriate credentials in your .env file.

### Component Functionality - File-by-File Description

#### App.js
This is the main hub where all the routes are handled.  Functions within app.py directly call one of the services. The Nav Bar and the Footer are located here.

#### Account.js
Displays users information, account modification to account-specific, go here.

#### BarChart.js
Bar chart specifics, labels and appearance is defined here.

#### LineChart.js
Line chart specifics, labels and appearance is defined here.

#### ChartsMenu.js
Menu and controls to manipulate the graphs go here.

#### Dashboard.js
Layout and desgin of the page that displays the map, the graphs, and side menu go here.

#### Login.js
Design of the login form goes here, it also displays the register form.

#### Register.js
Design of the register form goes here.

#### Services.js
Design of homepage, team and services offered goes here.

#### SideBar.js
Side menu that allows navigation in the dabshoard page is desgined and implemented here.

#### UserFunctions.js
login and addding new users functionlity goes here.

### Styling

### App.css
The styling and general aspect of the app is defined here

### Dashboard.css
The styling and general aspect of the dashboard is defined here.

### Login.css
The styling and general aspect of the Login and Register forms is defined here

### Services.css
The styling and general aspect of the homepage is defined here

## Visuals

### Home Page
![image](https://user-images.githubusercontent.com/60591404/142709826-c516dae9-1ac6-456c-9ea1-3cf19b750ed7.png)
![image](https://user-images.githubusercontent.com/60591404/142709801-23528485-bdc5-44b3-abed-f7ff3a5ade44.png)
![image](https://user-images.githubusercontent.com/60591404/142709783-55f3b72a-5196-406a-94ae-9ec0461c02dc.png)

### Dashboard
![image](https://user-images.githubusercontent.com/60591404/142709862-f1093c44-d32f-40e9-9190-d14897083be3.png)
![image](https://user-images.githubusercontent.com/60591404/142709867-67fad042-deb4-4b80-89c0-dc8aafe488b9.png)
![image](https://user-images.githubusercontent.com/60591404/142709846-c5e2e11c-5e29-4c5c-8a14-766b67a5eaa5.png)
![image](https://user-images.githubusercontent.com/60591404/142709855-9ad02820-080f-4009-b7c5-5dd6bc206e40.png)

### Analysis
![image](https://user-images.githubusercontent.com/60591404/142710027-89eb1d3a-ee5e-42dd-a5ad-3396ab767a84.png)

### Login
![image](https://user-images.githubusercontent.com/60591404/142709936-5fc469ab-e66e-4767-828c-e8644ff84005.png)

### Account
![image](https://user-images.githubusercontent.com/60591404/142709931-6332abdf-3f69-4f42-a6db-7d4ce2c03dcc.png)
