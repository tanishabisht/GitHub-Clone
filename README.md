# GitHub Clone

- An initial page with a input box that accepts a GitHub username and a submit/search button
- On submit, show the list of repositories returned from above API for the username entered in the input box.

* Display some useful user info above the repository list.

- Clicking on any of the repositories should take us to a page which shows description
  about that repository

* Also on the repository list page near the user info, add a button / link that should lead to
  a page with followers of the current user. (Design not given, you are free to choose any
  simple design or you may follow a design similar to the repository list)
* Clicking on any follower should display the repository list page of that user
* Also there has to be a way to go back to the repository list page with the input box

## How to run it locally

1. Firstly make sure your have the following installed in your system
   - node version: v16.13.2
   - npm version: 8.19.2
2. Clone the repository and Open in your suitable development environment (e.g. VS Code)
3. Open the terminal of the editor and type:
   - `npm install` to install all the node packages and dependancies from [`package.json`](/package.json)
   - `npm start` or `node app.js` to run the server

## Deployment

The application is deployed using GitHub pages

## Tech Stacks Used

`React JS` `axios` `date-fns` `node-sass` `react-loading` `react-toastify` `gh-pages`

### Important Notes:

- Use only React hooks to build the app.

* You may use Redux or store everything in React, structure your code appropriately

- For any images use owner.avatar_url

* Don’t call the GitHub API again for any information you already have. Eg. Do not make
  API call again in the repository details page. Do not make API call again to get
  repositories or followers info for a user if that info has already been fetched earlier for
  that user.
* For the pages with design images given, try to style it as close as possible to the given
  images in terms of layout and presentation but beautification is not important

- Do not use any CSS/UI frameworks
- You do not need to manage browser history i.e all the pages can be on the same url
- Submit the code by pushing repository to GitHub or any hosting platform of your choice.
  Maintaining a reasonable commit history is recommended.
