# Random Joke Generator

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
If the API server is down, you will get an Error 500, but it should work after the API is up.
