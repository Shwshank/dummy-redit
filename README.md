This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

I've used [json-server](https://www.npmjs.com/package/json-server) for backend API services. <br>

Install and run json-server <br>
`npm i -g json-server` <br>

By default, json-server runs on port 3000, same as react. So, json-server needs to e run on a diffrent port eg. 5000 <br>

`cd json/` <br>

`json-server --p 5000 db.json --watch` <br>

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!
