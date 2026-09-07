# 📍 Bangalore Pincode Explorer

A simple full-stack web application that allows users to search **Bangalore pincodes by area name or pincode**.

The project is built with **React, Tailwind CSS, Node.js and Express.js** and demonstrates frontend-backend communication through REST APIs.

---

## 🚀 Features

* 🔎 Search by **pincode**
* 📍 Search by **area name**
* 📋 Display all available Bangalore locations
* ⚡ Fast REST API responses
* 🔄 Loading and error states
* 🎯 Quick search suggestions
* 📱 Responsive design
* 🌑 Modern dark/neon UI
* 🔌 Separate frontend and backend architecture
* 🌐 REST API integration

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* Axios
* JavaScript

### Backend

* Node.js
* Express.js
* CORS
* dotenv
* JSON-based data storage

---

## 📂 Project Structure

```text
pincode/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── PincodeCard.jsx
│   │   │   └── SearchBar.jsx
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── controllers/
│   │   └── pincode.controller.js
│   │
│   ├── routes/
│   │   └── pincode.routes.js
│   │
│   ├── data/
│   │   └── pincodes.json
│   │
│   ├── app.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ How It Works

The application follows a simple client-server architecture:

```text
User
 │
 ▼
React Frontend
 │
 │ HTTP Request
 ▼
Express REST API
 │
 ▼
pincodes.json
 │
 ▼
Search / Filter Data
 │
 ▼
JSON Response
 │
 ▼
React UI
```

For example, when a user searches for:

```text
Indiranagar
```

the frontend sends:

```http
GET /api/pincodes/search?q=Indiranagar
```

The backend searches the pincode dataset and returns matching locations.

---

# 🖥️ Running the Project Locally

## 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Then:

```bash
cd pincode
```

---

## 2. Start the Backend

Open a terminal:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The backend will run on:

```text
http://localhost:5000
```

You can also check:

```text
http://localhost:5000/
```

You should receive:

```json
{
  "message": "Bangalore Pincode Explorer API is running"
}
```

---

## 3. Start the Frontend

Open another terminal:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the Vite development server:

```bash
npm run dev
```

The frontend will normally be available at:

```text
http://localhost:5173
```

Open the URL in your browser.

---

# 🔌 API Documentation

## Get All Pincodes

### Request

```http
GET /api/pincodes
```

### Example

```text
http://localhost:5000/api/pincodes
```

### Response

```json
{
  "success": true,
  "count": 34,
  "data": [
    {
      "pincode": "560038",
      "area": "Indiranagar"
    }
  ]
}
```

---

## Get Pincode by Exact Pincode

### Request

```http
GET /api/pincodes/:pincode
```

### Example

```text
http://localhost:5000/api/pincodes/560038
```

### Response

```json
{
  "success": true,
  "data": {
    "pincode": "560038",
    "area": "Indiranagar"
  }
}
```

---

## Search by Pincode or Area

### Request

```http
GET /api/pincodes/search?q=SEARCH_TERM
```

### Example: Search by Area

```text
http://localhost:5000/api/pincodes/search?q=Indiranagar
```

### Example: Search by Pincode

```text
http://localhost:5000/api/pincodes/search?q=560
```

### Response

```json
{
  "success": true,
  "count": 1,
  "data": [
    {
      "pincode": "560038",
      "area": "Indiranagar"
    }
  ]
}
```

---

# 🔍 Search Logic

The backend supports searching using both:

* Pincode
* Area name

The search is case-insensitive for area names.

For example:

```text
indiranagar
```

and:

```text
Indiranagar
```

will return the same result.

Partial searches are also supported.

For example:

```text
560
```

can return multiple locations whose pincodes contain `560`.

---

# 🎨 UI

The frontend uses a modern dark interface with:

* Responsive layout
* Red neon accent design
* Search interface
* Quick search buttons
* Location cards
* Loading animation
* Error messages
* Hover effects
* Responsive grid

---

# 📦 Dependencies

### Backend

```text
express
cors
dotenv
nodemon
```

### Frontend

```text
react
react-dom
axios
vite
tailwindcss
@tailwindcss/vite
```

---

# 🧪 Testing the API

The backend API can be tested using:

* Browser
* Postman
* Thunder Client
* REST Client

Example:

```http
GET http://localhost:5000/api/pincodes/search?q=Koramangala
```

---

# 🔐 Environment Variables

Currently, the application does not require any sensitive API keys.

If environment variables are added in the future, create:

```text
server/.env
```

Example:

```env
PORT=5000
```

Do not commit sensitive credentials to GitHub.

Add `.env` to `.gitignore`:

```text
.env
```

---

# 📈 Future Improvements

The project can be extended with:

* 🗺️ Google Maps integration
* 📍 More detailed location information
* 🏙️ Support for cities other than Bangalore
* 🔎 Advanced filtering
* 📊 Location statistics
* 🗄️ MongoDB database
* ❤️ Save favorite locations
* 👤 User authentication
* 🌐 Production deployment
* 📱 Progressive Web App support

---

# 📚 What I Learned

This project helped demonstrate practical full-stack development concepts including:

* Building REST APIs with Express.js
* Creating API routes and controllers
* Handling query parameters
* Connecting React with a backend API
* Using Axios for HTTP requests
* Managing React state
* Handling loading and error states
* Creating reusable React components
* Building responsive interfaces with Tailwind CSS
* Structuring a full-stack project
* Working with Git and GitHub

---

# 👨‍💻 Author

**Amaan Ali**

B.Tech Computer Science Engineering

Full Stack Developer | MERN Stack

---

## ⭐ If You Like This Project

If you found this project useful, consider giving the repository a ⭐ on GitHub.

---

## 📄 License

This project is created for learning and demonstration purposes.
