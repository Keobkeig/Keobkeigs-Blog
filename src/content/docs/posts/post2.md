---
title: Post 2
description: Finally a break from senior year and college applications.
---

# What Has Happened Since Post 1?
It's been a while since I last posted, but I have been busy with school and college applications. However, I have finally finished all my early college applications (praying for the Cornell ED acceptance!) and even though I have a Macroeconomics test tomorrow, I have decided to take a break from studying and write this post. 

## Updates on Projects from Post 1:
A basic update on the projects I have worked on since Post 1 as well provide a summary regarding my internship at XCave LLC. 

### Linear Algebra Library Reforged
Since my last post, I have been working on my linear algebra library in JavaScript, and I have finished the *Matrix* and *Vector* classes along with their respective methods. I plan to start working on the *ComplexNum* class and its methods. However, before I begin with those classes, I intend to recode the entire library in a low-level language like C, C++, or Rust. The purpose of starting this project at the beginning of the summer was to become familiar with the syntax of JavaScript as well as the npm package manager. Now that I have a better understanding of the language, I want to rewrite the library in a low-level language to improve performance. I also want to take advantage of the portability of a language like C, making the library usable by other languages.

I plan on using tools like Emscripten[https://emscripten.org/] and SWIG[http://www.swig.org/] to port the library to JavaScript, Python, and Java for now. I am using this as a learning experience for these tools as well as the low-level language I choose to rewrite the library in.

### RT Translator Discord Bot Shutdown (for now)
I have put a hiatus on the RT Translator Discord Bot project for now. I have been running into issues with the translation API I was using (LibreTranslate) as I wanted to host my local instance of the API for it to be free. However, I have been unable to get it to work. I have also been looking into using the Google Translate API, but while it works, the limits of the paid API model make me wary about releasing this to the public. I will be putting this project on hold until I can find a solution to this issue. However, this has been a great learning experience for me as I have learned a lot about APIs,
JavaScript syntax, and the DiscordJS library. I plan to revisit this project in the future.

## Update on XCave Internship
Having finished my internship at XCave LLC this August, I am proud to have said that I have learned more in these last two months about web development, data engineering, and data science than I have ever had the chance to learn. I worked with amazing colleagues while working such as my coworkers Ray and Tina, as well as my boss, Adarsh. 

Having worked at XCave LLC for about 2 months, I have learned a lot about web scraping and data engineering (details about [my tasks](https://keobekigs-blog.vercel.app/xcavelogs/week0/)). The early weeks had been mini-projects to get us familiar with the basic scrapping and data analysis tools (Selenium, Pandas, etc) and the later weeks had been working on a project for the company. Our team's project was to create a job aggregation website similar to that of Indeed.com or LinkedIn Jobs. 

### What I learned to use from Jobs Lounge (https://jobs-lounge.com/)
We had to scrape data from multiple job posting websites and organize them into a MySQL database, which later evolved into using PostgreDB + ElasticSearch database. While I had created MVP versions of pages via straight HTML, CSS, and JavaScript, the final front end of the website was done using React and TailwindCSS for styling. The backend was done using both Flask(Python) as well as NextJS(JavaScript). The reason for this was my lack of experience with JavaScript frameworks, so I suggested to Adarsh that I would start creating the product using Flask and then later on, I would rewrite the backend using NextJS as I learned. However, by the time I had grown comfortable enough to start rewriting the backend, the project was already in its final stages and all of the routing and database calls were already done in Flask. However, we were able to take advantage of Flask's built-in Werkzeug library in conjunction with Redis for security and authentication, so it was not a complete waste. This was my first experience ever using Docker and Kubernetes to deploy a website, so I learned a lot about containerization and deployment. All in all, I am very proud of the work I have done and I am excited to see how the website will grow in the future. 

## What Am I Working On?
Now that school has started, I am back to fully dedicating my time to school as well as my extracurricular activities, namely my job as Director of Software Education at [StuyPulse Robotics](https://stuypulse.com/). I have been heavily involved in the team's recent projects, which include:

### Newbie ED Curriculum (http://github.com/StuyPulse/newbie-ed)
I have been working on a brand new curriculum for new members of the team. The curriculum is for Java on the [WPILib's version of Visual Studio Code](https://docs.wpilib.org/) and includes topics such as Git, GitHub, Java, and the WPILib library. The curriculum has currently 13 lessons, and I plan to have around 16-20 lessons by the end of the year. Anyone can access the slides as well as the code for the lessons in the [**newbie-ed**] (http://github.com/StuyPulse/newbie-ed) GitHub repository.

### ShooterLabs (https://github.com/Keobkeig/ShooterLabs)
I have also been working on a shooter lab for the team. It is a series of challenges meant to get someone who has no experience in Robotics programming familiar with writing FRC code. By completing the lab, you will be creating a Shooter subsystem in both its logic as well as hardware behaviors, while learning how to work with every part of the robot coding process (creating constants, writing commands, configuring RobotContainer, etc.). If you wish to attempt it, fork from the [**ShooterLabs**] (http://github.com/Keobkeig/ShooterLabs) GitHub repository and follow the instructions in the README.md file.

### Physics Drag Force Simulation ((https://www.glowscript.org/#/user/Richie_Xue/folder/MyPrograms/program/Lab1))
Using Python's VPython library, I have created a simulation of a ball being thrown in the air with drag force. The simulation is based on the equations of motion for a projectile with drag force. The simulation is meant to be used as a tool to help students understand the effects of drag force on a projectile. By adjusting the fields in the simulation, students can see which variables affect the projectile's motion and come out with an ansatz for the drag force equation. The simulation can be found in the [**DragForceSim**] (https://www.glowscript.org/#/user/Richie_Xue/folder/MyPrograms/program/Lab1) folder in my GlowScript account.

## What Am I Planning to Work On?
While I am busy with school and extracurriculars, I still have a few projects I want to work on. For example, I want to learn a system-level language like C, C++, or Rust. I also want to learn more about machine learning and data science, as there are certain prediction model ideas I have. There is a bunch of other stuff I want to work on, but I will update you guys on that in the next post.

## Farewell
That's all for now. The upcoming months will be finals and exams season for me, so I will be busy studying for them (gotta work on my Physics grades 😭). I feel like the quality of these blog posts is marginally improving, maybe the next post might have media elements too?! I will try to post again sometime during Winter Break perhaps. Until then, peace!