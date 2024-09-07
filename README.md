# Dynamic User Availability and Event Scheduling System

## Overview

This project is a web application designed to allow users to dynamically set their availability and for admins to schedule sessions based on this availability. Built using the MERN stack (MongoDB, Express.js, React, Node.js), the application supports flexible user scheduling and intuitive session management.

## Features

- **User Authentication**: Register and log in with email.
- **Dynamic Availability Input**: Users can set their availability with flexible intervals.
- **Admin Scheduling**: Admins can view user availability and schedule sessions.
- **Session Management**: Create, update, or delete sessions with automatic conflict prevention.
- **Responsive Design**: Fully responsive UI for various devices.

## Technology Stack

- **Frontend**: React.js
- **Backend**: Node.js with Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token)

## Folder Structure

### Backend (`/backend`)
- **/controllers**
  - **authController.js**: Handles user authentication (registration, login).
  - **availabilityController.js**: Manages user availability (CRUD operations).
  - **sessionController.js**: Manages session scheduling and management.
  
- **/models**
  - **User.js**: MongoDB schema for user data.
  - **Availability.js**: MongoDB schema for user availability slots.
  - **Session.js**: MongoDB schema for scheduled sessions.

- **/routes**
  - **authRoutes.js**: API routes for authentication.
  - **availabilityRoutes.js**: API routes for availability management.
  - **sessionRoutes.js**: API routes for session scheduling and management.

- **server.js**: Entry point for the backend server, sets up middleware and routes.

### Frontend (`/frontend`)
- **/src/components**
  - **AvailabilityInput.js**: Component for users to input their availability.
  - **AdminDashboard.js**: Component for admins to view and manage user availability and sessions.
  - **ScheduleSession.js**: Component for admins to schedule sessions.

- **/src/pages**
  - **Login.js**: Login page component.
  - **Dashboard.js**: User dashboard to view availability and upcoming sessions.

- **App.js**: Main React application component that sets up routing.
- **index.js**: Entry point for the frontend, renders the React app.

## Installation & Setup

### Prerequisites
- **Node.js** (v12 or above)
- **npm** or **yarn**
- **MongoDB** (local or MongoDB Atlas)

### Backend Setup
1. Clone the repository:
   ```bash
   git clone "url"
   cd to repo
Navigate to the backend directory:

bash
Copy code
cd backend
Install backend dependencies:

bash
Copy code
npm install

Start the backend server:

bash
Copy code
npm run dev
The server will run on http://localhost:5000.

Frontend Setup
Navigate to the frontend directory:

bash
Copy code
cd frontend
Install frontend dependencies:

bash
Copy code
npm install
Start the frontend development server:

bash
Copy code
npm start
The app will run on http://localhost:3000.

API Endpoints
User Routes
POST /api/auth/register - Register a new user
POST /api/auth/login - Log in and receive a JWT token
GET /api/availability/
- Retrieve user availability
POST /api/availability - Add or update availability
Admin Routes
GET /api/admin/availability - View all users' availability
POST /api/admin/session - Schedule a new session
Usage
User Flow:

Register and log in using email.
Input your availability for specific time slots.
View upcoming sessions scheduled by admins.
Admin Flow:

View all users' availability.
Schedule sessions by selecting available slots.
Manage (reschedule or delete) scheduled sessions.
Screenshots
1. Login Screen

2. User Dashboard

3. Admin Dashboard
