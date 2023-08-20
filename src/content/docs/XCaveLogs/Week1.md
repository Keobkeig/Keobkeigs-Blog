---
title: Weekly Log - [Week 1]
description: Second weekly log of my internship at XCaveLLC.
---
# Goals for the Week

- Goal 1: To finish the first project, Newsfeed generator
- Goal 2: Scrap data from new sources (The Conversation and The Guardian)

## Accomplishments

- Accomplishment 1: Finished the first project and built a newsfeed generator website
- Accomplishment 2: Learned how to work with sqlite3 

## Challenges Faced

- Challenge 1: Going through the pagination of The Conversation and The Guardian to get articles to then individually scrape
- Challenge 2: Verifying if an article was released in the past two weeks via scrapping
- Challenge 3: Dealing with popups when scrapping The Guardian

## Lessons Learned

- Lesson 1: Often times, the data you need will be in the meta tags of the html and not in the body itself
- Lesson 2: ```poetry add <package>``` is the same as ```pip install <package>``` but for poetry and allows you to use the package in your code without having to import it in the file
- Lesson 3: sqlite3 databases are structured like a tree, with the root being the database, the branches being the tables and the leaves being the rows as opposed to a csv file which is just a table

## Goals for Next Week

- Goal 1: To start the second project, Job Aggregator

## Action Items

- Action Item 1: Learn how to bypass certain anti-bot systems such as cloudflare when scrapping
