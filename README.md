# Final Project: Notes for the grader

## Basic App Info
- Website name: takeabreak.com
- API used: https://rapidapi.com/LemmoTresto/api/joke3?endpoint=apiendpoint_2b453b32-13e8-4c7b-bbae-ec17b35b9045
- Purpose: A website where people can take a break from work and laugh/relax.
- Website is responsive.

## Functionalities
Users can:
- Get a random joke by clicking the button
- Like or unlike a joke by clicking the appropriate icons
- Read news from The Dodo by clicking on the title of the news box 

Users cannot:
- Submit their own joke, because the API doesn't let them
- Send their suggestions to me 
- But I still did the front-end for these because, based on a Piazza post, it still counts toward the interactive portion

## Creative Portion
- Sending info to API when user likes/dislikes a joke (via POST request)
- Designed React app with multiple pages using HashRouter
- Animations using the Framer Motion library:
    - Emojis/icons move on page load
    - Buttons/icons get larger and change color on hover
- Website works on almost all screens (the dropdown in navbar can be opened and closed by clicking on it)

## Sources Used
- All news images and the emoji picture are taken from Google Images
- Google Fonts used for the logo
- Fontawesome used for icons

## Potential Issues:
Once, the API server was down and I got 500 error, but the API worked everytime after that, so I'm worried that it might not work at the time of grading. If this happens, please know that this is a problem with the API and not my code! If you do it another day, it will work. Thank you so much :)