---
title: Weekly Log - [Week 3]
description: Fourth weekly log of my internship at XCaveLLC.
---
# Goals for the Week

- Goal 1: Refactor the current website to use React components with Next.js instead of html
- Goal 2: Figure out how to send http requests to the flask backend from the React components using axios
- Goal 3: Begin implementing elastic search to the website

## Accomplishments

- Accomplishment 1: Refactor every single page into HTML components as well as adding a navbar
- Accomplishment 2: Added helper apifunctions to the flask backend to be used by the React components
- Accomplishment 3: Helped Tina get elastic search working while keeping the aggragations information 

## Challenges Faced

- Challenge 1: Figuring out how app router works in next.js (page.js inside folders that are meant to be the url)
- Challenge 2: Establishing a connection to the database from the React components when it comes to displaying jobs
- Challenge 3: Understanding how tools like Docker and redis work to store local data as opposed to cookies and JS local sessions

## Lessons Learned

- Lesson 1: You have to do `npm run build` before you can do `npm run dev` when using next.js
- Lesson 2: You need to run both the flask backend and the next.js frontend at the same time, and access the website through next.js's localhost
- Lesson 3: What a REST API is and how to use it with flask, as well as writing them in general (return status codes, etc)

## Goals for Next Week

- Goal 1: Storing local data using redis 

## Action Items

- Action Item 1: Understand docker, kubernetes, and redis better so I know how it works in the project

