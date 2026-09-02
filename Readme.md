# AI Code Reviewer

An AI-powered code review application that analyzes source code and provides feedback on bugs, code quality, security, performance, and possible improvements.

## 🚀 Live Demo

**Frontend:** https://ai-code-reviewer-fawn-seven.vercel.app/

**Backend:** https://ai-code-reviewer-backend-183742218571.asia-south1.run.app

## ✨ Features

- AI-powered code review
- Detects potential bugs and code issues
- Code quality suggestions
- Security issue identification
- Performance improvement suggestions
- Provides corrected/improved code
- Syntax highlighting in the code editor
- Markdown-formatted AI responses
- Error handling for API failures and rate limits
- Dockerized backend
- Backend deployed on Google Cloud Run

##  Tech Stack

### Frontend

- React
- Vite
- Axios
- PrismJS
- React Simple Code Editor
- React Markdown
- Rehype Highlight

### Backend

- Node.js
- Express.js
- Google Gemini API

### Deployment & Infrastructure

- Docker
- Google Artifact Registry
- Google Cloud Run
- Vercel
- GitHub


##  Local Setup

### 1. Clone the Repository

```bash
git clone https://github.com/bhumikakanel/AI-Code-Reviewer.git
cd AI-Code-Reviewer
```

### 2. Backend Setup

Navigate to the backend directory:

```bash
cd backend
npm install
```

```env
GOOGLE_GEMINI_KEY=your_gemini_api_key
```

Start the backend server:

```bash
npm start
```

The backend will run on:

```text
http://localhost:3000
```

### 3. Frontend Setup

```bash
cd frontend
npm install
```

```env
VITE_BACKEND_URL=http://localhost:3000
```

Start the frontend:

```bash
npm run dev
```

The frontend will run on the local URL provided by Vite, usually:

```text
http://localhost:5173
```

### 4. Use the Application

1. Open the frontend URL in your browser.
2. Enter or paste your code into the editor.
3. Click **Review Code**.
4. The application sends the code to the backend.
5. Gemini analyzes the code and generates a review.
6. The review is displayed on the frontend.



## 🐳 Docker

The backend is containerized using Docker so that the application and its dependencies can be packaged into a consistent environment and deployed to Google Cloud Run.

### Create a Dockerfile

Inside the `backend` directory, create a file named:

```text
Dockerfile
```

Add the required Docker configuration to:

- Use a Node.js base image
- Set the working directory
- Copy and install dependencies
- Copy the backend source code
- Expose the application port
- Start the application using `npm start`


### Build the Docker Image

```bash
docker build -t ai-code-reviewer-backend .
```

### Run the Container Locally

```bash
docker run --rm -p 8080:3000 --env-file .env ai-code-reviewer-backend
```

The backend will then be accessible at:

```text
http://localhost:8080
```

##  Deployment

The backend is deployed using Docker and Google Cloud Run.

### Deployment Flow

```text
Source Code
     ↓
Docker Build
     ↓
Docker Image
     ↓
Google Artifact Registry
     ↓
Google Cloud Run
```

The frontend is deployed separately using Vercel.

##  Environment Variables

### Backend

```env
GOOGLE_GEMINI_KEY=your_gemini_api_key
```

### Frontend

```env
VITE_BACKEND_URL=http://localhost:3000
```


##  Project Structure

```text
AI-Code-Reviewer/
│
├── backend/
│   ├── src/
│   ├── Dockerfile
│   ├── .dockerignore
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
├── .gitignore
└── README.md
```

##  Error Handling

The application handles common API failures, including:

- Invalid requests
- Gemini API errors
- Gemini rate limits
- Server-side errors

For example, when Gemini is temporarily rate-limited, the frontend displays:

```text
Gemini is temporarily rate-limited. Please try again in a moment.
```

## 🔮 Future Improvements

- User authentication
- Review history
- Code quality scoring
- Support for additional programming languages
- Streaming AI responses
- Save and compare previous reviews
- More detailed code analysis
- Improved rate-limit handling

##  Author

**Bhumika Kanel**

---

 If you find this project useful, consider giving it a star!