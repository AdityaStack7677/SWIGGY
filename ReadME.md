Npm is not an abbrevation for node package manager.

Package.json is a configuration for npm

To build our app and pushed it to the production we use bundler

^ - Carret sign in package.json. So if new version get released, parcel will automatically be updated version.

~ - Tilde it will just install the major version

package lock.json keeps the track of every version for that particular package and the transitive dependencies

Node modules is like database for all our packages

If we have package and package-lock.json we can regenerate the node_modules

npx - is excuting the package

# Parcel

- Dev Build
- Local Server (Hoisted it to local server)
- HMR (Hot Module Replacement)
- File watching alogrithm written in C++
- It gives faster Builds because of caching
- Image Optimization
- Bundling
- Minification
- Compress
- Consistent hashing
- Code Splitting
- HTTPs
- Tree Shaking -removes unused code for you
- Different dev and prod builds

# For production build

- npx parcel build index.html

# For Development build

- npx parcel index.html

# browserslist

- To tell our app on which specific browser versions it should work.

# JSX

- It is a javascript syntax thorugh which it is easier to create react elements
- Its not HTML in JS, it is HTML or XML like syntax

// Passing a prop to a component is just like passing an argument to a function

# food ordering app

// Header
// - Logo
// - Nav Items

// Body
// - Search Bar
// - RestaurantContainer
// - RestaurantCard
// - Img
// - Name of Res, Star Rating, cuisine, delivery time

// Footer
// - Copyright
// - Links
// - Address
// - Contact

# We cannot have multiple default exports in one file/module

# Two Types of Export/Import

- Default Export/Import:
  export default Component;
  import Component from "path";

- Named Export/Import:
  export const Component;
  import {Component} from "path";

## React hook is a prebuilt normal javascript utility function

- useState(): Used to generate superpowerful state variables in react. Maintains the state of the component. Whenever a state variable updates react re-render the component

- useEffect()

# Routing in web apps

- Client side routing
- server sider Routing

# Redux Toolkit

- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- Slice (cartSlice)
- dispatch(action)
- read the data using Selector

# Types of testing (developer)

- Unit Testing
- Integration Testing
- End to End Testing - e2e testing (Cypress puppeteer)

# Setting up Testing in our app

- Install React Testing library
- Installed jest
- Installed Babel Dependencies
- Configure Babel
- Configure Parcel Config file to disable default babel transpilation
- Jest -npx jest --init
- Install jsdom library
- Install @babel/preset-react - to make JSX work in test cases
- Include @babel/preset-react inside my babel config
- Install @testing-library/jest-dom
