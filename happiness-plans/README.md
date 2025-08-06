# Happiness Plans Project

## Overview
Happiness Plans is a luxury travel planning service that crafts bespoke itineraries for discerning travelers. This project consists of a frontend application built with React and a backend server using Node.js and Express.

## Project Structure
The project is organized into two main directories: `frontend` and `backend`.

### Frontend
- **Location**: `frontend/`
- **Technology**: React
- **Main Files**:
  - `public/index.html`: The main HTML file for the frontend application.
  - `src/index.js`: The entry point for the React application.
  - `src/App.js`: The main application component that sets up routing.
  - `src/components/`: Contains reusable components like Header, Footer, and Logo.
  - `src/pages/`: Contains individual page components for Home, About, Services, Destinations, Planner, and Contact.

### Backend
- **Location**: `backend/`
- **Technology**: Node.js, Express
- **Main Files**:
  - `src/app.js`: Entry point of the backend application, sets up the Express server and middleware.
  - `src/routes/index.js`: Defines the API routes for the application.
  - `src/controllers/index.js`: Contains the logic for handling requests.
  - `package.json`: Lists dependencies and scripts for the backend application.

## Setup Instructions

### Frontend
1. Navigate to the `frontend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```

### Backend
1. Navigate to the `backend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the server:
   ```
   node src/app.js
   ```

## Features
- Responsive design for optimal viewing on various devices.
- Themed logos and branding for a cohesive look.
- Subpages for detailed information about services, destinations, and contact options.
- Backend implementation for handling data and API requests.

## License
This project is licensed under the MIT License.