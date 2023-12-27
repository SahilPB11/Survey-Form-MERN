# Survey Form API Documentation

## Introduction

This API provides a platform for users to create and manage survey forms. Survey administrators can create new forms, add questions, and collect responses from users. Users can fill out survey forms and submit their responses to the server.

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

This API provides a comprehensive platform for creating and managing survey forms. It is easy to use and can be integrated with other applications. For more information, please refer to the API documentation or contact the API developers.
