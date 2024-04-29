# Assignment - JS Form

**Due: Thu Feb 29, 11:59pm PT** 

# Goal

Build an `index.html` page in `public/` that contains a form that is validated by JS
- The validation messages will appear in certain situations and be cleared in response to certain steps
- The form will show a layout in 1 column format for a "mobile" size
- The form will show a layout in 2 column format for a "desktop" size
  - Remember that 1-column/2-column for form layout refers to labels and fields, NOT the total number of columns in a row!
- You can use EITHER the "validation after an event changes classes/text on existing elements" OR "validation after event changes state and replaces the innerHTML based on current state" approach.
  - However, replacing form fields gets complicated because it will lose the data in that field, it will lose any cursor position in that field - I recommend NOT replacing form fields just yet.  Replace any validation text instead

The code is usable by:
- Running `npm install` **in this directory** 
  - Only needs to run **in this directory** once per computer
- Running `npm start` **in this directory**
  - Visiting http://localhost:3000/

## Form Details

- The page will have a visually distinct header and footer
- The page will contain a registration form that will submit to "/register" using POST
- The form will collect these fields
  - Name
  - Email
  - Confirm Email
  - A checkbox with name attribute of "wants-spam"
    - Label of your choice
  - A select menu with name attribute of "tier"
    - Label and options and values of your choice
- Each form field will have label text that meaningfully identifies the field being collected
- The fields will have the following validations
  - Name is required
  - Email is required
    - There is no validating the content of the email for this assignment!
  - Confirm Email must match the Email
- The validations must NOT be done with HTML validations
  - This is to confirm your understanding of JS validation, not because HTML validation is good or bad
  - No "required" attributes
  - No "pattern" attributes
  - No `type="email"` 
    - Use `type="text"` (the default for input elements) instead
- All "required" fields will be indicated to the user as required before they fill the form out
  - This is separate and in addition to the validation message.  This is the same as the "\* Required" (or similar) that we had previously.
- Any field validation failures will be shown by extra text in addition to any required indication
  - Color alone is not sufficient to indicate an error, but color should be used
- All failed validations will be indicated to the user when the validations fail as described below
  - The Name field will inform the user they need to fill out the field if they have not
    - This validation will occur when the "input" event occurs on the field OR the user attempts to submit the form (meaning you have listeners for both events)
    - This error message will not be shown if this error is fixed (the field is provided)
  - The Email field will inform the user they need to fill out the field if they have not
    - This validation will occur when the user goes to submit the form
    - This error message will be removed if this error is fixed (the field has characters) and the user attempts to submit
  - The Confirm Email field will inform the user the field needs to match Email if it does not
    - This validation will occur when the user goes to submit the form
    - This error message will be removed if this error is fixed (the field matches) and the user attempts to submit
  - All fields are validated when the form is submitted
    - If a validation is failed the form will not submit

## Accessibility Requirements
- The form can be navigated and used with keyboard (using tab, typing, and space) or mouse
- Required fields are labeled as such in a way that do not require color-sightedness
  - This means you CAN use color and/or bolding, but should not ONLY use color/bolding.  You want something that a screen reader or other assistive technology would notice
  - Errors are indicated with additional text that do not require color-sightedness to read
- The page will have an adaptive breakpoint at 40rem
  - Above this breakpoint the form will use a 2 column layout
  - Below this breakpoint the form will use a 1 column layout
    - Remember that 1-column/2-column for form layout refers to labels and fields, not the total number of columns in a row!
  - The column requirements do not apply to checkboxes - use whatever formatting looks good
- The page should have a reasonable layout for a range of widths, from 360px to 1000px (with normal text-size)

## Additional Requirements
- All CSS class names should be semantic kebab-case or BEM style (or a mix of the two)
- Do not use var
- Use let and const as described in class
- Load your JS as described in class
- Use meaningful and helpful variable names as described in class
- Use consistent indentation and helpful whitespace to make your JS, HTML, and CSS easy to read
- Use semicolons appropriately 
- Add event listener(s) as described in class
- Do not use float for layout
- Do not use tables or table-layouts
- Follow the best practices shared to date in this course

## Submission Instructions

* start from the up-to-date main branch (`git checkout main; git pull origin main`)
* Create a feature branch named 'js-form' (`git checkout -b js-form`)
* add the necessary files to have the required features
* add, commit, and push the branch to github
* Create a PR to merge to main
* Be sure to include the TA(s) and myself reviewer(s)



