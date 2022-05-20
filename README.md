# project-catwalk

## Table of Content
- [Overview](#Overview)
- [Tech Stack](#Tech-Stack)
- [Module Description](#Module-Description)
- [Product Demo](#Product-Demo)
- [Installation](#Installation)
- [Team Members](#Team-Members)
- [Engineering Journal](https://gist.github.com/ZiyeS123/65e925e9690ccb0591cc5a888dd88d57)

## Overview
Project catwalk is Front End Capstone project for HackReactor. This project comprises a complete redesign of the retail portal designed to address the concern of an outdated UI. The requirements provided in the given Business Requirement Documentation define the new user interface required for customers to browse items in our retail catalog.


## Tech Stack
### Front-End Development
<img width="15%" src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg"> <img width="15%" src="https://www.vectorlogo.zone/logos/netlifyapp_watercss/netlifyapp_watercss-ar21.svg"> <img width="15%" src="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png">

### Back-End Development
 <img width="15%" src="https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.svg"><img width="15%" src="https://www.vectorlogo.zone/logos/nodemonio/nodemonio-ar21.svg"><img width="15%" src="https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg"><img width="15%" src="https://user-images.githubusercontent.com/8939680/57233884-20344080-6fe5-11e9-8df3-0df1282e1574.png">

### Compiler
 <img width="15%" src="https://www.vectorlogo.zone/logos/js_webpack/js_webpack-ar21.svg"><img width="15%" src="https://www.vectorlogo.zone/logos/babeljs/babeljs-ar21.svg">

### Code Formatter
<img width="15%" src="https://www.vectorlogo.zone/logos/eslint/eslint-ar21.svg"> <img width="15%" src="https://raw.githubusercontent.com/prettier/prettier-logo/master/images/prettier-banner-light.png">


### Testing
 <img width="15%" src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-ar21.svg">

### Project Management
 <img width="15%" src="https://www.vectorlogo.zone/logos/trello/trello-ar21.svg">

### Deployment
<img width="15%" src="https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-ar21.svg">


---

## Module Description

### Related Product & Outfit List

#### { Overview Module }
*The Overview module will be the top-most module on the Product Detail page. The functionality contained within this module can be divided into several pieces:*
 - Image gallery 
 - Product information
 - Style selector
 - Add to cart

*This component will guide the customer through selecting a specific style and size to add to their cart. As such, portions of the Overview module, such as the image gallery and cart selection, will be specific to a SKU chosen as opposed to the overarching product.*


#### { Ratings & Reviews }
*The Ratings & Reviews module will allow viewing and submission of reviews for the product selected. The functionality contained within this module can be divided into several pieces:*
 - Write new review
 - Reviews List
 - Sorting 
 - Rating Breakdown
 - Product Breakdown

*This component extends the ability to write, read, and browse through reviews for the current product.*
*All reviews will be saved per product. Specific styles will not be accounted for within the review module.*

#### { Questions & Answers }
*The Questions & Answers module will allow asking and answering of questions for the product selected. The functionality contained within this module can be divided into several pieces:*
 - View questions
 - Search for a question
 - Asking a question
 - Answering a question
 - This component extends the ability to view and search questions, ask questions, answer questions and provide feedback on questions about the current product. 

*All questions will be asked and answered per product. Specific styles will not be accounted for within the Questions & Answers module.*




## Installation
Fork the repo and clone to your local machine. After completion, follow these steps to install.

1. Make a copy of the file `server/config/config.example.js` and rename to `config.js`
2. Assign the `API_KEY` variable to your GitHub token. You can read more about API token [here](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).
3. Install dependencies

    ```bash
    npm install
    ```

4. In one terminal, build the webpack bundle

    ```bash
    npm run react-dev
    ```

5. In another terminal, start the server

    ```bash
    npm run server-dev
    ```

6. Visit [localhost:3000](http://localhost:3000) in the browser


## Team Members 
- Teresa Nguyen
- Tim Liaw
- Rufus Jin
- Nicholas Anich