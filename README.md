# Vega-Chat

### Description
A real-time chat application built using Vite React, Firebase, and Tailwind CSS. The app allows users to authenticate with their Google account and participate in live chat conversations.

### Technologies Used
- Vite React: A fast and lightweight development server and build tool for React applications.
- Firebase: A backend-as-a-service platform that provides authentication and real-time database functionality.
- Tailwind CSS: A utility-first CSS framework for Rapid UI development.

### Key Features
- Google user authentication: Users can sign in using their Google account for a personalized experience.
- Real-time messaging: Messages are sent and received in real-time, creating a seamless chat experience.
- Firebase integration: The app leverages Firebase's authentication and real-time database features for user management and live messaging.

### Project Structure
- `src` folder: Contains the source code for the vega-chat app.
  - `components` folder: Contains reusable UI components used throughout the app.
  - `pages` folder: Contains the main pages/routes of the application, including the login page and chat room page.
  - `firebase` folder: Contains Firebase configuration and helper functions for authentication and database operations.
  - `App.js`: The main entry point of the application.
  - `main.js`: Initializes the React app and renders the root component.

### How to Run the Project
1. Clone the repository: `git clone https://github.com/azacdev/vega-chat.git`
2. Install dependencies: `cd vega-chat` and `npm install`
3. Configure Firebase: Add your Firebase project credentials to the Firebase configuration file in the `firebase` folder.
4. Start the development server: `npm run dev`
5. Open the app in your browser: Visit `http://http://localhost:5173/` to access the chat app.

### Demo and Live Deployment
- Demo: [Link to Demo](https://vega-chat.vercel.app)
- Live Deployment: [Link to Live App](https://vega-chat.vercel.app)

### Conclusion
This React chat app showcases the use of Vite React, Firebase, and Tailwind CSS to build a real-time chat application with user authentication. It provides a seamless messaging experience and demonstrates the power of modern web technologies.

Feel free to explore the code and project structure on GitHub to learn more about the implementation details and customize the app according to your requirements.
