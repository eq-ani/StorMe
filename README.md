# Welcome to StorMe

<video src="https://vimeo.com/1028150155" width="300">

 - May of those who do not live nearby campus end up paying exorbitant prices over summer break a storage unit. Enter StorMe. StorMe is a smart storage solution by students for students. Rather than renting a unit, you can now rent space in another students house, providing cheaper options, shorter drives, and the opportunity to earn passive income for those offering storage. 

 <img width="911" alt="Screenshot 2024-10-13 at 7 53 48 AM" src="\frontend\public\assets\images\Untitled.png">

 - The above image illustrates how we may provide security to the customer by providing them with bags and custom zip ties they write their information on to prevent tampering.

## Prerequisites
 - PostgreSQL
 - Docker
 - Azure Data Studio (or some other database tool)
 - Node.js
 
## Running Directions
1. Run `docker-compose up -d` in the root directory.
2. In a terminal, navigate to the `backend` directory:
   - Run `npm install`
   - Start the backend server with `npm start` or `node server.js`
3. Open a new terminal, navigate to the `frontend` directory:
   - Run `npm install`
   - Start the frontend with `npm start`
