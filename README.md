# GitHub User Search

A simple React application that allows users to search for GitHub profiles by username, displaying key user information with error handling and a clean UI. Hosted on GitHub Pages.

## Features

- **Search Input**: Enter a GitHub username to fetch user data from the GitHub API.
- **User Profile**: Displays avatar, name, bio, public repositories, followers, and a link to the GitHub profile.
- **Error Handling**: Shows loading states and handles errors (e.g., "User not found") gracefully.
- **Responsive Design**: Works on desktop and mobile with TailwindCSS styling.

## Tech Stack

- **React**: For building reusable UI components.
- **Vite**: Fast build tool for development and production.
- **TailwindCSS**: Utility-first CSS for responsive, minimal styling.
- **Axios**: For making API requests to `https://api.github.com/users/{username}`.

## Setup

### Prerequisites

- Node.js (v16+)
- Git
- GitHub account

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/github-user-search.git
   cd github-user-search
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run locally:

   ```bash
   npm run dev
   ```

   Open `http://localhost:5173` to view the app.

   ## Usage

4. Enter a GitHub username (e.g., "Sochuks") in the input field.
5. View the user’s profile details or error messages (e.g., "User not found").
6. Click the search button to visit the user’s GitHub page.

## Thought Process

- **Functionality First**: Prioritized meeting requirements (search, profile display, error handling) over aesthetics due to time constraints.
- **Beginner-Friendly**: Used simple React hooks (`useState`) and clear component structures to make the code approachable.
- **Scalability**: Organized components (`SearchForm`, `UserProfile`, `ErrorMessage`) and services (`fetchUser.js`) for reusability and future enhancements (e.g., repo fetching).
- **Efficiency**: Chose Vite for fast development, TailwindCSS for quick styling, and Axios for robust API calls.
- **GitHub Pages**: Selected for quick, free hosting, with `gh-pages` for automated deployment to align with the urgent timeline.
