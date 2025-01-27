# User-Management
 A full-stack web application built using **Node.js**, **Express.js**, and **MongoDB** to manage user registration, login, and profiles. The application includes secure authentication and authorization mechanisms.

 ![Screenshot (165)](https://github.com/user-attachments/assets/5616d6a7-795f-4fc4-99df-4b29672c401b)

## Features  
- **User Registration**: New users can sign up with secure form validation.  
- **Login System**: Existing users can log in with email and password.  
- **User Profiles**: Each user has a personalized profile page.  
- **Authentication**: Sessions-based authentication for user login.  
- **Authorization**: Access control to restrict unauthorized actions.  
- **Database**: Data storage and management with **Mongoose** and **MongoDB**.

- ![Screenshot (166)](https://github.com/user-attachments/assets/057c456f-1a03-4d0b-9b8b-1e4622d79143)


## Installation  

1. **Clone the Repository**  
   ```bash  
   git clone https://github.com/Faizan-Pathan/User-Management.git  
   cd User-Management
   ```  

2. **Install Dependencies**  
   ```bash  
   npm install  
   ```  

3. **Set Up Environment Variables**  
   Create a `.env` file in the root directory and add the following:  
   ```env  
   PORT=3000 
   MONGO_URI= "mongodb://127.0.0.1:27017/loginform"
   SESSION_SECRET= "hola hola nhola gbfgdosdf" 
   ```  

4. **Run the Application**  
   ```bash  
   npm start  
   ```  
   The application will run on `http://localhost:3000`.  

## API Endpoints  

| Method | Endpoint           | Description              | Authentication Required |  
|--------|--------------------|--------------------------|--------------------------|  
| POST   | `/api/register`    | Register a new user      | No                       |  
| POST   | `/api/login`       | Log in a user            | No                       |  
| GET    | `/api/profile`     | Get user profile         | Yes                      |  

## Tech Stack  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB, Mongoose  
- **Authentication**: Sessions-based authentication  
- **Environment Variables**: dotenv
- 
![Screenshot (168)](https://github.com/user-attachments/assets/05cc8afe-0ff0-48fc-a0c9-a968477bd686)

![Screenshot (167)](https://github.com/user-attachments/assets/1ae04115-72f2-44bd-9da3-6ab6ca61eaea)

 
## Contributing  
Contributions are welcome! Feel free to submit a Pull Request or open an Issue.  

## Contact  
If you have any questions or feedback, feel free to reach out:  
- LinkedIn: https://www.linkedin.com/in/faizankhan-pathan-5b5147238/
- Email: faizan.pathan459@gmail.com

  