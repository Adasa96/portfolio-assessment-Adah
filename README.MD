create my protfolio webpage using HTML,CSS, and Bootsrtap

## HTML
head- contains the title of my portfolio which is not visible
 The viewport meta tag, which makes the site to be responsive.
Bootstrap, CSS and JavaScript links, which help with layout, buttons, and styling.
A link to an external CSS file (style.css) where custom styles are stored.

## NAVBAR
This creates a navigation bar using Bootstrap classes.
Inside, there are navigation links that shows Home, About Me, and Contact.
Improves movement within the website

## PORTFOLIO CONTAINER
This section divides the page into two parts:
        Profile Section (Left) which shows your photo and a “Toggle Theme” button.
        Content Section (Right) which displays your welcome text, about information, and  contact form.

## PROFILE SECTION
Displays your profile photo in a rounded shape using Bootstrap’s rounded-circle class.
Includes a button that lets switching between light and dark themes (using JavaScript).
 
## MAIN CONTENT
This part holds the main content.
        The <div> with ID animatedText displays a welcoming message (you can animate it using CSS).
The paragraph introduces who you are and what you do.
The “Click Me!” button can trigger a fun message or animation when clicked.

## CONTACT FORM
This form collects an email, phone number, and full name.
The input fields have validation:
     required ensures the user cannot leave the field empty.
     pattern="[0-9]{10}" checks that the phone number has exactly 10 digits.
When the user clicks “Submit,” JavaScript will handle the form and show a thank-you message.

## FOOTER
Shows copyright

## JAVASCRIPT
This links to JavaScript file (script.js), where all the interactive features are coded.
You can include:
        Theme toggling (light/dark mode)
        Click button actions
        Form submission handling
       

## EXTERNAL FILES
The external files used are:
      css/style.css this is for custom design and layout.
      js/script.js this is for interactivity and animations.

This keeps your HTML clean and organized.