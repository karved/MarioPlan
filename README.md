# MarioPlan
A simple Blog WebApp which uses Cloud services for authentication, storage, database, and hosting. It can be run on a web browser as well as a native application by adding it to the home-screen of all available platforms.  
Followed the [React, Redux & Firebase App Tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9iWstfXntcj8f-dFZ4UtlN3) by **The Net Ninja**.

## Description
Users must register prior to logging in to the portal. After setting up an account, users will have access to view all the existing blogs posted by every user. Every blog will contain details like Title, Description, Date added and Author details. The portal also indicates the details of logged in user. Additionally, users can create and post their own blog by providing a Title and Description. Date and author details will be automated by the portal. Lastly, users have the feature of deleting a blog, provided they are an author to the respective blog.  


### WebApp deployed at : https://dk-mario-plan.web.app/  
  
 
## Technology
* React JS
* Redux
* Firebase - **Cloud Firestore**
* Styling- [Materialize](https://materializecss.com/)

## Screenshots
|||
|--|--|
|![alt text](https://github.com/karved/MarioPlan/blob/master/pics/open.jpeg)|![alt text](https://github.com/karved/MarioPlan/blob/master/pics/login.jpeg)|
|![alt text](https://github.com/karved/MarioPlan/blob/master/pics/sign.jpeg)|![alt text](https://github.com/karved/MarioPlan/blob/master/pics/dash.jpeg)|
|![alt text](https://github.com/karved/MarioPlan/blob/master/pics/desc1.jpeg)|![alt text](https://github.com/karved/MarioPlan/blob/master/pics/create.jpeg)|
|![alt text](https://github.com/karved/MarioPlan/blob/master/pics/dash2.jpeg)|![alt text](https://github.com/karved/MarioPlan/blob/master/pics/del.jpeg)|  

![alt text](https://github.com/karved/MarioPlan/blob/master/pics/laptop.png)  

## Setup
1. Clone this Repository or Download zip. 
   
2. Navigate to project folder in terminal and type  

    ```
    npm install 
    ```

3. Create your Firebase project at FIrebase [console](https://console.firebase.google.com/u/0/).  

4. Replace Firebase credentials in ```/src/config/fbConfig.js``` with your credentials from Firebase console.  

5. Navigate to project folder in terminal and type  

   ```
    npm start 
   ```  

6. All set.

