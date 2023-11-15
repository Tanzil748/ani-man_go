# ANI-MANGO

Ani-Mango is an application that allows users to search and save their favorite anime titles for future reference. All data is sourced from the Jikan API. The primary reason why I decided to build this app is because I am an avid manga reader who now wants to explore anime. I will be constructing this app so that I can not only save anime titles I'd like to eventually watch, but also be able to see whats popular and get information about any anime with a click of a button.

## Tech Stack

- Built using `React JS` , `Tailwind CSS`, `Firebase`

## Demo

Here's a walkthrough of how the app functions:

- The user enters the home page and can scroll through the many categories displayed. Each card is clickable and the slider has a button for more details.
  ![](https://github.com/Tanzil748/ani-man_go/blob/main/gif/ani-mango_display.gif)
  <br/>
- A user registers an account to save anime titles to bookmark list. No registered email results in fail popup. User can also search anime titles (does not need to be signed in).
  ![](https://github.com/Tanzil748/ani-man_go/blob/main/gif/ani-mango_display.gif)
  <br/>

- User can now see their list. All cards are clickable and redirect to information page. Firestore updates in real-time as user adds/delete titles.
  ![](https://github.com/Tanzil748/ani-man_go/blob/main/gif/secondPart.gif)

- Application also has a light mode if user prefers.
  ![](https://github.com/Tanzil748/ani-man_go/blob/main/gif/secondPart.gif)

## Firebase

- Here is how the firebase database looks like. We are able to see all registered users & can do a variety of actions (delete account, disable account, reset password).
  ![](https://github.com/Tanzil748/ani-man_go/blob/main/gif/authPic.png)
  <br/>

- In the firestore, we can view all the users & their favorited anime list:
  ![](https://github.com/Tanzil748/ani-man_go/blob/main/gif/fireStorePic.png)

## Deployment

Clone this repository and install all dependencies via the terminal:

```bash
  npm install
```

Then, to deploy this project run the following:

```bash
  npm run dev
```

The app will run on port 5173 as below:

```bash
 http://localhost:5173/
```

## Project Structure

<pre>
.
├── README.md
├── index.html
├── github/workflows
├── .gitignore
├── package-lock.json
├── package.json
├── postcss.config.cjs
├── tailwind.config.cjs
├── vite.config.js
├── <strong>src</strong>
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── firebase.jsx
│   ├── <strong>context</strong>
│       ├── AuthContext.jsx
│       └── ThemeContext.jsx
│   ├── <strong>pages</strong>
│       ├── HomePage.jsx
│       ├── MyListPage.jsx
│       ├── RegisterPage.jsx
│       └── SignInPage.jsx
│   └── <strong>components</strong>
│       ├── AnimeCard.jsx
│       ├── Footer.jsx
│       ├── Header.jsx
│       ├── Home.jsx
│       └── Sidebar.jsx
├── <strong>public</strong>
│   └── favicon.png
└── <strong>GIF</strong>
</pre>
