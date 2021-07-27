# MicrofrontendWorkspace

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.1.

We use [Angular Workspaces](https://angular.io/guide/file-structure), it's not mandatory. But, I like it becouse it improves scafolding distribution and helps us to manage many microfrontend in the same repository and share utils  (the demo hasn't that deep example).

Review [here](https://github.com/danidelgadoz/angular-weather-elements) for the simpliest and default angular project without workspace.

## Prerequisites

Make sure you have installed the latest LTS version of Node.js from https://nodejs.org, then:

## Development server

1. Open terminal on **microfrontend-workspace** directory.

1. Run `npm i`.

1. Run `npm run start:weather-microfront`.

1. Navigate to `http://localhost:4201/`.

## Build

Run `bundle:weather-microfront` to build the **weather-microfront** project. The `dist/weather-microfront/main.js` artifact is the microfrontend bundle to distribute to the host application.



