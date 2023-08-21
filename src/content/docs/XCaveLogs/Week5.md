---
title: Weekly Log - [Week 5]
description: Sixth and last weekly log of my internship at XCaveLLC.
---
# Goals for the Week

- Goal 1: Write any API routes that are missing that was built by the frontend team
- Goal 2: Finalize the MVP of the project for production
- Goal 3: Fix any bugs that are present in the project post production, now on jobs-lounge.com

## Accomplishments

- Accomplishment 1: Created a working API route for Google OAuth, autheticating users with their credentials 
- Accomplishment 2: Refined the existing scrappers as they are not working properly and prepped to have it all be done in a single process in one file that can be ran periodically

## Challenges Faced

- Challenge 1: Reverse proxying the frontend and backend for the ports to be correct and not have CORS issues, and for the frontend to be able to access the backend properly 
- Challenge 2: Getting elasticsearch to work on my device (was only working on Tina's device previously), and then getting it to work on the production server
- Challenge 3: Google authetication API route was doing both the account creation and login, so I had to split it into two separate routes or else there will be SQL error

## Lessons Learned

- Lesson 1: By going into next_config.js, you can change the port that the frontend is running on, and by changing the port in the backend, you can have the frontend and backend running on the same port (reverse proxying)
- Lesson 2: Picking your stack ahead of time is very important, because we chose to work with SQLite at the start, switching over the using Primsa + PostgreSQL proved to be too complicated to refactor almost every API route we have previously written
- Lesson 3: You can use curl to test API routes, and it is very useful for debugging, especially when you are not sure if the frontend is the issue or the backend

## Additional Notes

This has been a great experience for me, and I am very grateful for the opportunity to work with Tina, Ray and the rest of the team. I have learned a lot about web scrapping, data science, and way more software engineering then I had expected. I hope to see the project grow and become successful in the future even as my internship comes to a close. Special thanks for Adarsh for helping me with all my issues and questions, teaching me so much about software engineering and web development!