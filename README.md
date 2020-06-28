# Using Firestore on Vercel w/ NEXTjs

An example on how to use firestore inside vercel using Nextjs

## Devlopment Setup
### Setting up the dev environment. 

First replace `project_id` inside `.firebaserc` and `.env.development` with your firebase project id.

Next we are going to install packages
```bash
# For yarn
yarn install
# For npm 
npm i
```
### Starting a dev Server
In Order to start development first we need to start the firestore emulator.
```bash
firebase emulators:start --only firestore
```
Simultaneously we also want to run the next dev server
```bash
next dev
```

## Production Setup

First we need to setup google cloud on vercel. We can do this by setting up the built in [google cloud integration](https://vercel.com/integrations/gcloud). 

Then add an env named `PROJECT_ID` with the project id of the associated firebase project

## Contributing
I want to keep this small so it is easy to understand. That said if you find any problems with the way I am doing something feel free to open an issue.
