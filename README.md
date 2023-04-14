# ANI-MANGO

Ani-Mango is an application that allows users to search and save their favorite anime titles for future reference. All data is sourced from the Jikan API. The primary reason why I decided to build this app is because I am an avid manga reader who now wants to explore anime. I will be constructing this app so that I can not only save anime titles I'd like to eventually watch, but also be able to see whats popular and get information about any anime with a click of a button.

## Tech Stack
- Built using `React JS` , `Tailwind CSS`, `Firebase`
## Demo

Here's a walkthrough of how the app functions:

![](https://github.com/Tanzil748/ani-man_go/blob/main/ani-mango_display.gif)

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
 http://127.0.0.1:5173/ani-man_go/
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
└── GIF
</pre>
