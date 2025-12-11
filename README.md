📌 User Authentication System (Node.js + Express + MongoDB + EJS)

This project is a User Authentication System built using Node.js, Express, MongoDB, and EJS as a template engine.
It includes features like User Registration, Login, and Profile View.

🚀 Features

✔ User Registration

✔ User Login

✔ Password Validation

✔ EJS Template Engine for Views

✔ MongoDB Database Integration

✔ Environment Variables using .env

✔ Clean MVC Folder Structure

✔ Nodemon for Auto Server Restart

📁 Project Structure
|-- Model
|   └── User.js
|
|-- views
|   ├── login.ejs
|   ├── register.ejs
|   └── profile.ejs
|
|-- .gitignore
|-- Server.js
|-- package.json
|-- package-lock.json

🛠 Technologies Used

Node.js

Express.js

MongoDB (Mongoose)

EJS (Template Engine)

Nodemon

dotenv

🔧 Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

2️⃣ Install dependencies
npm install

3️⃣ Create a .env file in the root folder
MONGO_URL=your_mongodb_connection_string
PORT=5000

4️⃣ Start the server
nodemon Server.js


Your project will now run on:
👉 http://localhost:5000

🔐 Available Routes
Route	Method	Description
/register	GET	Show register page
/register	POST	Register new user
/login	GET	Show login page
/login	POST	Authenticate user
/profile	GET	Profile page (after login)
🧩 Screens

📝 Register Page

🔑 Login Page

👤 User Profile Page

🛡 Git Ignore Note

The following files are ignored:

node_modules/
.env

🤝 Contributing

Contributions are welcome!
Feel free to create issues or submit pull requests.
