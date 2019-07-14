

# Welcome to the Progressive Web Cat Repository.

## Contact Info

Patrick Witbrod
email: pwitbrod@valorem.com
twitter: @pkwitbrod

  
## Instructions
  
You should have a text editor. I used [VS Code](https://code.visualstudio.com/download) in my demo. You can also use Github's [atom](https://atom.io/), [Sublime Text](https://www.sublimetext.com/), or any other number of programs you would like.

 
In order to run this project you will need to install [NodeJs and NPM](https://nodejs.org/en/). Download and run the install file and add it to your path if asked. Also a quick GitHub tutorial might be helpful or just download the zip file. :) For more info on NPM [Read This](https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/)

  

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Facebook's template for starting a react project.

  

For more info on reactJs you can check out [the documentation](https://reactjs.org/docs/getting-started.html) or this more step by step written [tutorial.](https://hackernoon.com/react-js-a-better-introduction-to-the-most-powerful-ui-library-ever-created-ecd96e8f4621) There are also a lot of videos sites like pluralsight, udemy, Team Treehouse, and [Code Academy](https://www.codecademy.com/courses/react-101). I have only tried the first two but Team Treehouse and code academy have helped me in the past.
  

## To run this

  

-- Download the things above (Maybe watch a tutorial or two as well)

-- Open the code in your editor and from a command line navigate to the root (Same level as package.json)

-- Type the following commands

  

```sh

$ npm install

```

  

This installs everything needed to run the app. The g means you are installing it globally because it's not just for this project.

  

```sh

$ npm npm install -g serve

```

  

This installs what you need to simulate a web server without one.

  
  

```sh

$ npm run build

```

  

This builds the production code just like what you would deploy to production for your app.

  

```sh

serve -s build

```

  

This runs the app on your computer like it was a web server.

  
  

More info on some of these below.

  

## Available Scripts

  

In the project directory, you can run:

  

### `npm start`

  

Runs the app in the development mode.<br>

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

  

The page will reload if you make edits.<br>

You will also see any lint errors in the console.<br>

This will not run the service worker required to run the app offline.

  

### `npm run build`

  

Builds the app for production to the `build` folder.<br>

It correctly bundles React in production mode and optimizes the build for the best performance.<br>

You will need to do this to run the service worker to test the offline capabilities.

  

The build is minified and the filenames include the hashes.<br>

Your app is ready to be deployed!

  

After you run this run npm

  

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

  

### `npm run eject`

  

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

  

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

  

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

  

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

  
  

### Progressive Web App Info

  

Create React App PWA info: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

  

Google PWA Info: https://developers.google.com/web/progressive-web-apps/

  

Mozilla: https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps

  

PWA Builder: https://www.pwabuilder.com/