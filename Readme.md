# Survey Management System: Comprehensive Survey Solution

**Live Demo Link:** https://survey-form-mern.vercel.app/

**Demo Credentials:**

- Username: sahilgarg@1
- Password: sahil

## Project Overview

The Survey Management System is a comprehensive web application that streamlines the process of creating, managing, and analyzing surveys. With its user-friendly interface and robust features, this system empowers survey administrators and participants alike, making it an ideal tool for collecting and visualizing data.

## Key Features

- **Admin Login and Registration**: Admins can conveniently register and log in to the system, gaining access to powerful survey management tools.
- **Survey Form Creation**: Administrators can craft custom survey forms with ease, defining questions, answer options, and demographic information sections.
- **Survey Response Collection**: The system efficiently gathers responses from participants who complete the survey forms, capturing their answers, demographics, and timestamps.
- **Survey Response Visualization**: Responses are visually represented with interactive charts and graphs, enabling administrators to effortlessly identify trends and patterns.
- **Report Generation**: Administrators can generate detailed reports based on survey responses, including comprehensive statistics, cross-tabulations, and correlations.
- **Responsive Design**: The system's user interface seamlessly adapts to various screen sizes, ensuring an optimal experience across devices.

## Technology Stack

- **Front-end:** React.js, React Router, Tailwind-Css
- **Back-end:** Node.js, Express.js, MongoDB
- **Deployment:** Vercel, Render

## Usage Guide

1. Clone the project repository: `git clone https://github.com/your-username/survey-management-system.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
4. Open the project in your browser at `localhost:3000`
5. Admins can log in or register using the provided interface.
6. Admins can create surveys, view responses, and generate reports.

## Contribute to the Project

Contributions are welcomed and encouraged! To contribute to the codebase, follow these steps:

1. Fork the repository: `git clone https://github.com/your-username/survey-management-system.git`
2. Create a branch for your changes: `git checkout -b my-new-branch`
3. Implement your changes and commit them: `git commit -m "My changes"`
4. Push your changes to your forked repository: `git push origin my-new-branch`
5. Create a pull request to merge your changes.

## API Endpoints

### 1. Create Survey Form

**Route**: `/survey`

**Method**: POST

**Request Body**:

```json
{
  "name": "string",
  "gender": "string",
  "nationality": "string",
  "email": "string",
  "phoneNumber": "string",
  "address": "string",
  "message": "string"
}
```

**Response**:

```json
{
  "success": true,
  "message": "Successfully registered."
}
```

### 2. Get All Survey Forms

**Route**: `/admin/forms`

**Method**: GET

**Request Body**:

```json
{}
```

**Response**:

```json
{
  "success": true,
  "data": [
    {
      "name": "string",
      "gender": "string",
      "nationality": "string",
      "email": "string",
      "phoneNumber": "string",
      "address": "string",
      "message": "string",
      "_id": "string",
      "createdAt": "string",
      "updatedAt": "string"
    }
  ]
}
```

### 3. Admin Signup

**Route**: `/admin/signup`

**Method**: POST

**Request Body**:

```json
{
  "username": "string",
  "password": "string"
}
```

**Response**:

```json
{
  "success": true,
  "message": "Registerd Succesfully"
}
```

### 4. Admin Login

**Route**: `/admin/login`

**Method**: POST

**Request Body**:

```json
{
  "username": "string",
  "password": "string"
}
```

**Response**:

```json
{
  "success": true,
  "token": "string",
  "message": "Welcome back string"
}
```

### 5. Admin Logout

**Route**: `/admin/logout`

**Method**: GET

**Request Body**:

```json
{}
```

**Response**:

```json
{
  "success": true,
  "message": "session finish / Logout succesfull"
}
```

## Error Handling

The API uses a custom error middleware to handle errors that may occur during API calls. The error middleware returns a JSON response with the following format:

```json
{
  "success": false,
  "message": "string"
}
```

## Authentication

The API uses JWT (JSON Web Token) for authentication. When an admin successfully logs in, a JWT token is generated and sent back to the client in the response. The client should store this token securely and include it in the Authorization header of subsequent requests to authenticated endpoints.

## Database

The API uses MongoDB as its database. The database is named "Survey-Form" and contains the following collections:

- **Admins**: Stores the admin users.
- **SurveyForms**: Stores the survey forms and their responses.

## Deployment

The API is deployed on a server running Node.js and Express.js. The server is configured to listen on port 3000.

## Usage

To use the API, you can send requests to the API endpoints using a REST client such as Postman or Insomnia. Alternatively, you can use the API from your own code by making HTTP requests to the API endpoints.

## Conclusion

The Survey Management System is a powerful and versatile tool that revolutionizes the way survey data is collected, analyzed, and presented. Its user-friendly design and extensive features make it an ideal choice for a wide range of survey needs, from market research to customer feedback collection. With its robust API and responsive design, the system is adaptable to various use cases and platforms.
