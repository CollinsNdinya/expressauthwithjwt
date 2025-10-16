Express.js JWT Authentication

This repository contains two implementations of authentication using Express.js and JWT (JSON Web Tokens) — organized into separate folders for clarity and learning progression.

Project Structure
expressauthwithjwt/
├── accessTokenOnly/          # Simple version using access tokens only
├── refreshTokenVersion/      # Advanced version using both access and refresh tokens
├── .env                      # Environment variables
├── .gitignore
└── README.md
Features
Access Token Only

Located in: accessTokenOnly/

Basic authentication with JWT.

Generates a single access token upon login.

Access token is valid for a short duration (example: 15 seconds).

Middleware protects routes by verifying the token.


Refresh Token Version

Located in: refreshTokenVersion/

Includes both Access and Refresh tokens.

When the access token expires, a new one can be generated using the refresh token.

Securely handles token verification and invalidation (logout).

Demonstrates real-world authentication flow.

Environment Variables

In your .env file (located in the root folder):

PORT=8000
ACCESS_TOKEN_SECRET=your_access_token_secret_here
REFRESH_TOKEN_SECRET=your_refresh_token_secret_here


To generate secure secrets:

node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"

API Endpoints
Authentication Routes
Method	Endpoint	Description
POST	/api/user/login	Logs in a user and returns tokens
POST	/api/user/token	Generates a new access token using a refresh token
DELETE	/api/user/logout	Logs out and invalidates the refresh token


Technologies Used

Node.js

Express.js

jsonwebtoken

dotenv

Postman (for API testing)


Author

Collins Ndinya
Backend Developer | 💡 Passionate about clean architecture & REST APIs
onyangocollins543@gmail.com
