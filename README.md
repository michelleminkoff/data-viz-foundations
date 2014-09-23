A walkthrough of two charts -- a bar chart and a line chart, taking them from one JS file to a modular, organized structure for making charts over and over again. Don't write code more than you have to! Reserve your energy for the fun part!

Each of these folders steps us a bit further through the process, from everything lumped together in step 1 to a cleaner interface by step 7.

What We'll Cover In The Session

-- Introduce concept of libraries

-- We write a lot of repetitive code as programmers

-- What can we pull out to get to the interesting part faster?

-- Other programmers write code called “libraries” that we use often

-- Advantages of making our own library

---- Being able to easily make changes

---- Establish continuity of style in our org’s work

---- Develop specific time-saving plan for things we do every day

---- Make it easy for others to write less code

---- Standardize style of the code

Follow steps of modularization

Step 1: Look at basic example of two charts – get familiar with what we are looking at (example 1)
-- Both include common charting issues such as loading data, formatting data, picking colors, axes, formatting popups

Step 2: Pull out common colors into variables that we access/easily change at top of the code.

Step 3: Pull our data out of the main file, so it's not distracting us. Load it separately in the index page.

Step 4: Determine what big blocks of code are in common between various graphs (multiple lines) and charts (a bar chart and a line chart). Go over what a function is, what arguments it takes in and what it returns. All the code is in one file, but we're reducing extra code.

Step 5: Create functions using functions we already defined. What does it take to make a bar chart? Move functions to top of the code, so the "calling code" is easily readable, with calls to functions that are well-named. Code should now read like a mini-story, once we get past defining our functions, or blocks of code.

Step 6: Pull out our functions into a separate chart.js file. Look carefully at what we are importing back to our main files, and what functions are accessible. Go over the difference between public and private functions.

Step 7: Show how we can make a new chart very easily, needing to write only one line of code for a new one. All the common code is abstracted out into a separate, reusable module. No need to rewrite it!
