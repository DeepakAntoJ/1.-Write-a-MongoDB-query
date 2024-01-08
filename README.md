# Step:1
Fork this project into your github account

# Step:2
Clone it to your local computer

# Step:3 
make sure you're in the backend folder.

create a .env file in the backend folder.

Write these two lines
PORT="The Port number of your choice"

MONGO_URI="Paste your mongodb secret connection string , i've used mongodb atlas you can get it from there"

# Step:4 
install all the dependencies

run this command 

npm install

# Step:5 
now run

nodemon server.js

# Step:6 
open up postman or create a frontend application to provide input.
To input the values into the database , i've used postman so add a new POST request to 

http://localhost:"PORT-NUMBER"/api/find/.

don't forget to provide the port number here as well.

The json format must look something like this 

{
    "salary":10000
}

# Step:7 
now a get/query to the database

The json format must look something like this for a given value 
{
    "Tsalary":5000
}

the database will return all the salary values greater than Tsalary.

