# TokTok

![Screenshot_1](https://user-images.githubusercontent.com/73827472/196044144-abf56468-d571-4dfd-aeb0-5506aa0a3c6a.png)
![Screenshot_2](https://user-images.githubusercontent.com/73827472/196044145-9c42db64-00d0-491c-8ac2-742a3f2643d5.png)
![Screenshot_4](https://user-images.githubusercontent.com/73827472/196044146-e0347cc9-344f-4b5d-b39e-44519436d706.png)


## Table of Contents

- [Introduction](#prerequisites)
- [Link to website demo](#installation)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the application](#running-the-application)

## Introduction

A responsive fullstack TikTok clone application built using Sanity.io and React framework Next.js, with modern design, Google Auth, the ability to upload, publish, share, comment on and like the videos as well as being able to filter by categories and have advanced search functionalities, profile pages and suggested accounts.

## Link to website demo

[TokTok](https://toktok-pc.vercel.app/)

## Tech Stack

- [TypeScript](https://www.typescriptlang.org/)
- [Next.js](https://nextjs.org/)
- [Sanity.io](https://www.sanity.io/)
- [Zustand](https://github.com/pmndrs/zustand/)
- [Tailwind CSS](https://tailwindcss.com/)

## Prerequisites

Install the following prerequisites:

1. [Node.js 18.17.0 or higher](https://nodejs.org/en/)
2. [Visual Studio Code](https://code.visualstudio.com/download)

## Installation

### Backend

#### 1. Install dependencies

From the **root** directory run:

```bash
cd sanity-backend
npm install
``` 

#### 2. Start Sanity

From the **root** directory run:

```bash
sanity start
```

#### 3. Get your project API key

1. Go to [manage.sanity.io](https://manage.sanity.io/)
2. Click on your project
3. Click on the **Settings** tab
4. Click on **API** on the left
5. Click on **Create new token**
6. Copy the token
7. Paste it into the required variable inside the .env file

### Frontend

#### 1. Install dependencies

From the **root** directory run:

```bash
cd frontend
npm install
```

#### 2. Get Google Auth credentials API key

1. Go to [console.developers.google.com](https://console.developers.google.com/)
2. Click on **Create Project**
3. Go to that project
4. Click on the left sidebar
5. Go to **APIs and services**
6. Go to **Credentials**
7. Click on **Configure OAuth consent screen**
8. Choose external
9. Enter the name of your application
10. Enter your email
11. Click on **Save**
12. Click on **Credentials** on the left
13. Click on **Create Credentials**
14. Choose **OAuth client ID**
15. Choose **Web application**
16. Enter the name of your application
17. Enter the following in the **Authorized redirect URIs** and **Javascript origins** field: http://localhost http://localhost:3000/
18. Click on **Create**
19. Copy the **Client ID**
20. Paste it into the required variable inside the .env file

## Running the application

Since you already started sanity, all you need to do is run the frontend:

```bash
cd frontend
npm run dev
```
