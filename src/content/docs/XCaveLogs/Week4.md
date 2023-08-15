---
title: Weekly Log - [Week 4]
description: Fifth weekly log of my internship at XCaveLLC.
---
# Goals for the Week

List the goals and objectives you set for yourself at the beginning of the week. These can be specific tasks, projects, or skills you aimed to accomplish or improve upon during the week.

- Goal 1: To add multiple methods of signing in to the website (Google OAuth, Facebook OAuth, etc)
- Goal 2: To get User Sessions to get user profile & password resetting working
- Goal 3: Clean up codebase + as adding comments on what to change for production

## Accomplishments

Reflect on what you achieved during the week. Highlight the tasks or projects you completed, skills you developed, and any notable accomplishments.

- Accomplishment 1: Created a HTML email template for the company to use and added Google OAuth sign in
- Accomplishment 2: Setup route.js to plan on using NextJS's NextAuth.js for OAuth sign in with other providers
- Accomplishment 3: Added API routes and logic for a forgot password page and a reset password page 

## Challenges Faced

Identify any challenges or obstacles you encountered during the week. This can include technical difficulties, time management issues, or any other difficulties you faced in your internship responsibilities.

- Challenge 1: Figuring out how to use NextAuth.js with the flask backend since NextAuth.js is meant to used with the built in routing system of NextJS
- Challenge 2: Learning about smtp and how to send emails using flask 
- Challenge 3: Setting up developer accounts for Google, Facebook, LinkedIn to use their OAuth services

## Lessons Learned

Share any lessons or insights you gained from your experiences during the week. This can include new knowledge, skills, or personal growth.

- Lesson 1: Creating .env files to store sensitive information like API keys & passwords 
- Lesson 2: When creating a new OAuth app, you need to set the callback url to the url of the website and the redirect url to the url of the website + /api/auth/callback/provider
- Lesson 3: Prisma is a ORM that can be used to interact with the database and is used to create the database schema 

## Goals for Next Week

Outline your goals and objectives for the upcoming week. These can be continuations of the previous week's goals or new targets you want to achieve.

- Goal 1: Fix any bugs that may arise from the deployment on the test server 
- Goal 2: Add more OAuth providers to the website
- Goal 3: Figure out how to use PrismaClient with SqLite for local development and PostgreSQL for production

## Action Items

List any specific actions or tasks you need to take to progress towards your goals for the next week. This can include research, assignments, or any preparations required.

- Action Item 1: Read the documentation for NextAuth.js and Prisma
...

## Additional Notes

Include any additional notes, reminders, or relevant information that might be helpful for future reference.