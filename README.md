# Github Repository Explorer

This project built with React 19 + TypeScript + Vite

## Major Dependencies

- Shadcn UI
- Tailwind
- Redux Thunk
- Axios
- React Hook Form

## Intro

This application use:

- node : >= 16 (Recommended for using LTS version)

---

## Project Introduction

This application use DDD pattern. Here you can learn a little about DDD pattern, [Visit me](https://www.geeksforgeeks.org/domain-driven-design-ddd)

---

## Installation

1; Install dependencies using pnpm

```shell
pnpm
```

2; Change **.env.example** to **.env**

You must change the .env.example to .env and match it with you local machine.

3; Run project for development

```shell
pnpm run dev
```

---

## Build The App

1. Build the app

```shell
pnpm build
```

2. (Optional) If you want to check the preview of build

```shell
pnpm preview
```

---

## Folder Structure

Project structure:

```javascript
/github-repository-explorer
├── /public
│   ├── index.html          # The main HTML file that is the entry point to the application
│   └── /assets             # Folder containing static assets (e.g., images, fonts)
├── /src
│   ├── /api                # API service layer for interacting with GitHub API
│   │   └── github.ts       # Functions for making GitHub API calls (e.g., getUsersSearch)
│   ├── /components         # Reusable components across the app
│   │   ├── /ui             # UI component library (Input, Button, etc.)
│   │   └── /root           # Root-level components like Home, UserList, etc.
│   ├── /redux              # Redux related files (actions, reducers, store)
│   │   ├── /actions        # Redux action creators (e.g., setUsers, clearAll)
│   │   ├── /reducers       # Redux reducers to handle state updates
│   │   ├── /store          # Redux store configuration
│   │   └── /types          # TypeScript types for Redux actions and state
│   ├── /interfaces         # TypeScript interfaces used in the app
│   │   ├── github.interfaces.ts   # Interfaces for GitHub user and repository data
│   │   └── redux.interfaces.ts    # Interfaces for Redux actions and state
│   ├── /assets             # Folder containing images, icons, and other static resources
│   ├── /styles             # Global styles for the app (CSS or SCSS files)
│   ├── /utils              # Utility functions (e.g., formatters, helpers)
│   ├── /App.tsx            # Main React component that holds the routes and layout
│   ├── /index.tsx          # Entry point of the app, renders the App component
│   └── /vite.config.ts     # Vite configuration file for bundling and running the app
├── .env                    # Environment variables for the application (e.g., API URL)
├── package.json            # Project dependencies, scripts, and metadata
├── tsconfig.json           # TypeScript configuration file
└── README.md               # Project documentation and setup instructions
```

---

2. Router, just like common routes, this project using [react router v7](https://reactrouter.com/home):

---

## Credits

Rafli Jatnika
