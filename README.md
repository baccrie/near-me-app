# **Near Me Web Application**

A **location-based service discovery platform** that helps users find nearby organizations, businesses, and service providers. Built with **React** and **ExpressJS**, this app offers an intuitive interface to browse businesses, view detailed profiles, read reviews, and communicate with businesses in real-time.

---

## **Table of Contents**

1. [Project Description](#project-description)
2. [Key Features](#key-features)
3. [Technologies Used](#technologies-used)
4. [API Endpoints](#api-endpoints)
5. [Installation](#installation)
6. [Usage](#usage)
7. [Contributing](#contributing)
8. [License](#license)

---

## **Project Description**

The "Near Me" web application allows users to discover businesses and organizations near their location. The app features an **interactive map** to visualize nearby businesses, and includes detailed business information such as ratings, reviews, CEO details, amenities, and galleries. Users can also leave reviews and chat with businesses in real-time.

The app is powered by **React** for the frontend and **ExpressJS** with **MongoDB** for the backend. It utilizes **Socket.IO** for real-time messaging and **Google Maps API** for geolocation and map integration.

---

## **Key Features**

- **Geolocation Integration**: Automatically detect user location and find businesses within proximity.
- **Business Search & Filtering**: Search businesses by name, category, rating, and location.
- **Business Profiles**: View detailed profiles for each business, including a gallery, amenities, reviews, and CEO information.
- **Interactive Maps**: View businesses on an interactive map and get directions to the selected business.
- **Real-Time Chat**: Communicate directly with businesses via live chat powered by **Socket.IO**.
- **Ratings & Reviews**: Leave ratings and reviews for businesses, helping other users make informed decisions.

---

## **Technologies Used**

### **Frontend**

- **React**: JavaScript library for building the user interface.
- **CSS/SASS**: For styling and creating a responsive design.
- **React Router**: For routing between pages.
- **Axios**: For making HTTP requests to the backend API.
- **Google Maps API**: For displaying maps and geolocation services.

### **Backend**

- **ExpressJS**: Web framework for Node.js to build the server-side application.
- **MongoDB**: NoSQL database to store user and business data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB to interact with the database.
- **JWT Authentication**: JSON Web Tokens for secure user authentication.
- **Socket.IO**: For real-time, bidirectional communication between clients and server.

### **Other Tools**

- **Heroku**: For deploying the backend server.
- **Vercel/Netlify**: For deploying the frontend React app.

---

## **API Endpoints**

### **User Authentication**

- **POST /api/auth/register**: Register a new user.
- **POST /api/auth/login**: Log in an existing user.
- **GET /api/auth/profile**: Get the authenticated user's profile.

### **Business Data**

- **GET /api/businesses**: Retrieve a list of businesses.
- **GET /api/businesses/:id**: Retrieve detailed information for a specific business.
- **POST /api/businesses**: Add a new business (Admin only).
- **PUT /api/businesses/:id**: Update business information (Admin only).
- **DELETE /api/businesses/:id**: Delete a business (Admin only).

### **Reviews & Ratings**

- **POST /api/reviews**: Add a review for a business.
- **GET /api/reviews/:businessId**: Get reviews for a specific business.

### **Real-Time Chat**

- **WebSocket (Socket.IO)**: Connect to the server to initiate real-time chat between users and businesses.

---

## **Installation**

### **Prerequisites**

- Node.js and npm installed (for both frontend and backend).
- MongoDB account or a local MongoDB instance running.

### **Clone the Repository**

```bash
git clone https://github.com/yourusername/near-me-app.git
cd near-me-app
```

### **Setup Backend**

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install the necessary dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and add your environment variables:
   ```bash
   PORT=5000
   MONGO_URI=your_mongo_connection_string
   JWT_SECRET=your_jwt_secret
   ```
4. Start the server:
   ```bash
   npm start
   ```

### **Setup Frontend**

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install the necessary dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

The app will be running at `http://localhost:3000` for the frontend and `http://localhost:5000` for the backend.

---

## **Usage**

- Navigate to the **Home page** where you can enter your location and search for nearby businesses.
- Browse the business listings and click on any business to view its detailed profile.
- Use the **interactive map** to view businesses on the map and get directions.
- Leave a review for any business, and chat with businesses in real-time using the live chat feature.

---

## **Contributing**

Contributions are welcome! If you want to help improve this project, feel free to fork the repository and submit a pull request. Here are some ways you can contribute:

- Report bugs or suggest new features.
- Help with documentation.
- Submit bug fixes or enhancements.

Please make sure to follow the coding standards and write tests for any new features.

---

## **License**

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---
