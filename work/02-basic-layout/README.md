# Assignment - Basic Layout

**Due: Thu Jan 25, 11:59pm PT** 

## Goal

You will fill in the matching stylesheet for the provided HTML so that the rendered page matches the provided mockup image (differences due to browser window size are expected - your page should work for a wide range of desktop window sizes, but is not expected to work at mobile sizes yet).

## Submission Instructions

* Start from the up-to-date main branch (`git checkout main; git pull origin main`)
    - Make sure you switch to main first!  
    - If you get an error message when switching, do NOT just continue with later commands!
* Create a feature branch named 'basic-layout' (`git checkout -b basic-layout`)
* Add the necessary file in this directory (Hint: or in a subdirectory) to have the required features
* Add, commit, and push the branch to github
    - You pick the commit message, but it should summarize your work in this commit
    - Do NOT use "Adds MYNAME", that was the commit message for assignment 1 only
    - See [/readings/git/commit-messages.md](/readings/git/commit-messages.md) for more info on commit message
    - The push should be to this feature branch name (`git push origin basic-layout`) 
* Create a PR to merge to main
* Be sure to include the TA(s) and myself as Reviewer(s)

## Special Notes

- As mentioned in class, NORMALLY you will want your CSS selectors to be based on class names
    - Because you can't modify the HTML, that's not much of an option this time
    - This is intentional - This assignment is practicing creating and understanding selectors
    - But be sure to understand that what you do for this assignment will often be UNDESIRABLE for future assignments and real-world work
- Of particular note: Be sure to add padding/margins as needed to match the reference images
    - These show the highlight colors and behaviors, as well as behavior at different sizes
    - Most common mistake is to add a background color but no padding/margins, leaving the text feeling very cramped
    - Another common issue is failing to get the padding to work with the `<a>` elements.  Remember that `<a>` elements are `display: inline;` by default, and that limits how padding/margin/etc can impact the text flow as shown in class.
        - Notice the cursor to click is active over the entire area with a background color!

## Requirements

- Do NOT modify the html file
- A trick is that you can put a border on just one side: `border-bottom: 1px solid black;` or `border-right: 1px solid black;`
- The left-side menu is set to 20% of the page width - at different window sizes it will be different sizes
- The colors used are all named colors: black, plum, rebeccapurple, and pink. 
- You must view the file using `npx serve` (run in THIS directory, the one containing this README) and by visiting `http://localhost:3000/homepage.html` in the browser
    - If you use File->Open in your browser, the page will fail to load the styles.  This is intentional to force you to get used to using a web server to actually serve your files
    - Notice the "homepage.html" in the url - that matches the filename
- The links in the page are not going to work if you try to follow them - that's fine, they are not part of the assignment

