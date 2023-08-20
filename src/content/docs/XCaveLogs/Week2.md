---
title: Weekly Log - [Week 2]
description: Third weekly log of my internship at XCaveLLC.
---
# Goals for the Week

- Goal 1: Scrap data from various job sites such as indeed, ziprecruiter, etc
- Goal 2: Create a job aggregator website that will use the data scrapped from the job sites
- Goal 3: Building a create/sigin system for the website

## Accomplishments

- Accomplishment 1: Scrapped over 500 jobs from ziprecruiter 
- Accomplishment 2: Compiled a sitemap for the website to be used for scrapping beyond the tri-state area
- Accomplishment 3: Built a create/signin system for the website with password hashing and salting as well as a session system

## Challenges Faced

- Challenge 1: By passing cloudflare's anti-bot system when attempting to scrap from websites
- Challenge 2: Realizing that the passwords are being stored in the sqlite db already hashed, so they have to be hashed again when checking for the correct password
- Challenge 3: Creating an sqlite db that can be used by multiple files and contains multiple tables

## Lessons Learned

- Lesson 1: How to create a sqlite db that can be used by multiple files and contains multiple tables
- Lesson 2: Hashing and salting passwords to store in the db, keeping it secure
- Lesson 3: You can sometimes bypass the anti-bot system by using a headless browser and changing the user agent

## Goals for Next Week

- Goal 1: To refactor the html websites into React components to be more easily used

## Action Items

- Action Item 1: Learn React as well as how to connect said componenets with the flask backend
