Here’s the updated **README.md** file tailored to match your application:

---

# Subreddit Explorer

This is a Subreddit Explorer which was made with with React, it resembles the UI of Reddit and helps navigate users through a posts from 20 subreddits. There is a searchbar that helps user find a Subreddit that they want to explore. This was made with the help of a lot of Youtube Tutorials and Prompt Engineering. I hope you like it!

---

## Features

- **Sidebar**: Displays a list of subreddits. Clicking on a subreddit loads its posts in the main section.
- **Search Bar**: A pill-shaped search bar at the top allows users to search for subreddits.
- **Post Viewer**: Displays one post at a time, with the caption on top and an image covering most of the screen.
- **Dark Theme**: A visually appealing dark gray background with white text for a Reddit-like aesthetic.

---

## Installation and Setup

### Prerequisites

- [Node.js](https://nodejs.org) (v16 or later recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Steps to Install and Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/Disco-Danny/Subreddit-Explorer.git
   cd subreddit-explorer
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## Libraries and Tools Used

- **React**: For building the user interface.
- **Redux**: For state management.
- **Axios**: For making HTTP requests to Reddit's API.
- **React Router**: For handling navigation.
- **CSS**: For styling the application with a custom dark theme.

---

## How It Works

1. **Sidebar Navigation**: The sidebar lists popular subreddits. Clicking a subreddit displays its posts in the main section.
2. **Search Functionality**: Use the pill-shaped search bar to find specific subreddits. The results dynamically update as you type.
3. **Post Display**: Posts from the selected subreddit are displayed one at a time, with the image taking up most of the screen for an immersive viewing experience.

---

## Favorite Subreddits

Here is a list of 20 popular subreddits integrated into the sidebar by default:

1. [r/technology](https://www.reddit.com/r/technology/)
2. [r/science](https://www.reddit.com/r/science/)
3. [r/programming](https://www.reddit.com/r/programming/)
4. [r/gaming](https://www.reddit.com/r/gaming/)
5. [r/webdev](https://www.reddit.com/r/webdev/)
6. [r/javascript](https://www.reddit.com/r/javascript/)
7. [r/reactjs](https://www.reddit.com/r/reactjs/)
8. [r/AITAH](https://www.reddit.com/r/AITAH/)
9. [r/dataisbeautiful](https://www.reddit.com/r/dataisbeautiful/)
10. [r/PCMasterRace](https://www.reddit.com/r/PCMasterRace/)
11. [r/movies](https://www.reddit.com/r/movies/)
12. [r/fiftyfifty](https://www.reddit.com/r/fiftyfifty/)
13. [r/ATBGE](https://www.reddit.com/r/ATBGE/)
14. [r/jazz](https://www.reddit.com/r/jazz/)
15. [r/aww](https://www.reddit.com/r/aww/)
16. [r/space](https://www.reddit.com/r/space/)
17. [r/startups](https://www.reddit.com/r/startups/)
18. [r/music](https://www.reddit.com/r/music/)
19. [r/history](https://www.reddit.com/r/history/)
20. [r/learnprogramming](https://www.reddit.com/r/learnprogramming/)

---

## API Reference

This application uses the [Reddit API](https://www.reddit.com/dev/api/) to fetch subreddit and post data.


# Subreddit-Explorer
