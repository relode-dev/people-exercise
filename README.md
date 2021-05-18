# Relode Developer Exercise

The People app was originally created by one of our junior developers who is no longer with the company. In your first week with Relode you are given the task of completing this small application. The previous developer may have made mistakes or left something out. Very likely the existing code could be improved. Please feel free to make any modification to the existing code that you feel necessary.

This sample project was created using the Create React App, so there should be nothing additional needed in order to get up and running to start.

It is our hope that you would be able to complete this in a few hours. If you run out of time please leave comments indicating where you would have made certain changes or implementations.

## Getting started

You will need to fork this repository and do your work there. Once you are complete you will need to push your changes up to your Github repo (and if able submit it as a PR against our original). Once you've cloned it locally all you need to get started is `npm install` then `npm start`.

## Guidelines

- We want to keep the dependencies on outside npm packages to a minimum. While we use [Material-UI](https://material-ui.com/) and [Formik](https://formik.org/) internally, there is no expectation that you would use those in this project.
- One npm package we use, that you may find useful is [React Router](https://reactrouter.com/) so feel free to bring it into the app.
- We **do not** Redux, so we would ask that it not be used in this sample.
- State management pattern is your option given that "built-in" react patterns are used.
  - We do use the reducer pattern a lot along with simple local state.
  - How/if state is shared through out the app is your preference. (e.g. prop drilling vs context). Be prepared to discuss the pros/cons of each.
- We prefer functional components over class components.
- The project has some simple styling using Sass (scss) modules. The purpose of this exercise is **not** intended to judge your artistic abilities, but rather your knowledge of CSS and at least have the UI not look awful.
- You will also notice that the application is written in TypeScript, this is a requirement.
- In an effort to keep the sample straightforward we have opted not to use an actual API. Instead, we have provided a simple mock up of an API in the `dataServices.ts` file. There you will find simple CRUD functions that operate on a simple, in-memory array.

## The People App

Currently the people app simply shows a list of people with some data fields on each one. As part of this upgrade the user needs to be able to add/remove/edit people. Additionally, we need the ability to capture a note for each person. When adding a new person we need that to be its own screen as there may be a fair amount of marketing or instructional text that will get added later. However, the edit should be inline with the grid. We would prefer that the user explicitly initiate an edit. Deleting a person simply needs a confirmation.
