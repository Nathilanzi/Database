Youth Database Project
This project is a Youth Database Web Application designed to store user data along with uploaded CVs to Firebase. It enables users to enter personal details, upload documents, and store everything securely in Firebase’s Firestore database and Firebase Storage. The app provides a persistent experience by leveraging localStorage to retain data across sessions.

Features
User Form: Collects personal details such as name, surname, email, phone number, address, and community chief.
File Upload: Allows users to upload CVs (PDF, DOC, DOCX).
Data Persistence: Stores user data both in localStorage and Firebase Firestore.
Cloud Storage: Uploads and retrieves CV files from Firebase Storage.
Responsive Design: Works seamlessly across different devices.
Tech Stack
Frontend: React.js, TailwindCSS for styling
Backend: Firebase (Firestore, Storage)
Hosting: Firebase (optional)
Setup and Installation
Clone the Repository

bash
Copy code
git clone https://github.com/Nathilanzi/<your-repo>.git
cd <your-repo>
Install Dependencies
Ensure you have node and npm installed. Then run:

bash
Copy code
npm install
Configure Firebase

Create a new project at Firebase Console.
Enable Firestore Database and Firebase Storage.
Add a new web app in Firebase and copy the Firebase configuration.
Create a .env file and add the Firebase config:
env
Copy code
VITE_FIREBASE_API_KEY=<your-api-key>
VITE_FIREBASE_AUTH_DOMAIN=<your-auth-domain>
VITE_FIREBASE_PROJECT_ID=<your-project-id>
VITE_FIREBASE_STORAGE_BUCKET=<your-storage-bucket>
VITE_FIREBASE_MESSAGING_SENDER_ID=<your-sender-id>
VITE_FIREBASE_APP_ID=<your-app-id>
Run the Application
Start the development server:

bash
Copy code
npm run dev
Build for Production
If deploying, build the app with:

bash
Copy code
npm run build
Firebase Rules Configuration
Make sure your Firestore and Storage rules allow secure access. Example rules for development:

Firestore Rules:
js
Copy code
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;  // Adjust for production security
    }
  }
}
Storage Rules:
js
Copy code
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if request.auth != null;
    }
  }
}
Usage
Fill the Form: Users enter personal details.
Upload CV: Attach a PDF or Word document.
Submit: On submission, the data is stored in Firebase Firestore and the CV is uploaded to Firebase Storage.
LocalStorage: Previously entered data is auto-filled from localStorage on page reload.
Potential Issues
CORS Errors: Ensure Firebase Storage rules are correctly set.
File Size Limit: Make sure the uploaded CVs are within Firebase’s upload limits.
Network Errors: Handle any failed requests gracefully with alerts or retries.
Folder Structure
php
Copy code
├── src
│   ├── components
│   │   ├── Navbar.jsx
│   │   ├── Home.jsx
│   ├── firebase.js   # Firebase configuration
│   └── App.jsx       # Main Application Entry Point
├── public
│   └── index.html    # HTML template
├── package.json      # Dependencies and scripts
└── tailwind.config.js  # TailwindCSS Configuration
Contributing
Fork the repository
Create a new branch
bash
Copy code
git checkout -b feature-branch
Make changes and commit
Push to your fork
Create a pull request
License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements
React.js
Firebase
TailwindCSS
Vite
