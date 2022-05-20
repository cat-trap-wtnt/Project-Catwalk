# project-catwalk

## Table of Content
- [Overview](#Overview)
- [Tech Stack](#Tech-Stack)
- [Module Description](#Module-Description)
- [Installation](#Installation)
- [Team Members](#Team-Members)

## Overview
*Project Catwalk is a Front End Capstone project during our time at HackReactor. This project comprises a complete redesign of the retail portal designed to address the concern of an outdated UI. Utilizing API's and RESTful integration for this project allowed the team to revamp, enhance features and deploy a better user experience.*

 <br />

## Tech Stack
### Front-End Development
<div style="display: flex; align-items: center">
<img width="15%" src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg">
<img width="15%" src="https://www.vectorlogo.zone/logos/w3_css/w3_css-ar21.svg"> 
<img width="10%" src="https://mui.com/static/logo.png">
</div>

 <br />

### Back-End Development
<div style="display: flex; align-items: center">
 <img width="15%" src="https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.svg">
 <img width="15%" src="https://www.vectorlogo.zone/logos/nodemonio/nodemonio-ar21.svg">
 <img width="15%" src="https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg">
 <img width="15%" src="https://user-images.githubusercontent.com/8939680/57233884-20344080-6fe5-11e9-8df3-0df1282e1574.png">
 </div>

 <br />

### Compiler
<div style="display: flex; align-items: center">
 <img width="15%" src="https://www.vectorlogo.zone/logos/js_webpack/js_webpack-ar21.svg">
 <img width="10%" src="https://www.vectorlogo.zone/logos/babeljs/babeljs-ar21.svg">
 </div>

 <br />

### Code Formatter
<div style="display: flex; align-items: center">
<img width="15%" src="https://www.vectorlogo.zone/logos/eslint/eslint-ar21.svg">
<img width="15%" src="https://raw.githubusercontent.com/prettier/prettier-logo/master/images/prettier-banner-light.png">
</div>

 <br />

### Testing
 <img width="15%" src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-ar21.svg">

### Project Management
 <img width="15%" src="https://www.vectorlogo.zone/logos/trello/trello-ar21.svg">

### Deployment
<img width="15%" src="https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-ar21.svg">


---

## Module Description

### { Overview }
*The Overview module will be the top-most module on the Product Detail page. The functionality contained within this module can be divided into several pieces:*
 - Image gallery 
 - Product information
 - Style selector
 - Add to cart

*This component will guide the customer through selecting a specific style and size to add to their cart. As such, portions of the Overview module, such as the image gallery and cart selection, will be specific to a SKU chosen as opposed to the overarching product.*

<br />

### { Ratings & Reviews }
*The Ratings & Reviews module will allow viewing and submission of reviews for the product selected. The functionality contained within this module can be divided into several pieces:*
 - Write new review
 - Reviews List
 - Sorting 
 - Rating Breakdown
 - Product Breakdown

*This component extends the ability to write, read, and browse through reviews for the current product.*
*All reviews will be saved per product. Specific styles will not be accounted for within the review module.*

<br />

### { Questions & Answers }
*The Questions & Answers module will allow asking and answering of questions for the product selected. The functionality contained within this module can be divided into several pieces:*
 - View questions
 - Search for a question
 - Asking a question
 - Answering a question
 - This component extends the ability to view and search questions, ask questions, answer questions and provide feedback on questions about the current product. 

*All questions will be asked and answered per product. Specific styles will not be accounted for within the Questions & Answers module.*

<br />

### { Related Items & Comparison }
*The Related Items & Comparison module will display two sets of related products. The first set will be a list of products, determined internally, that are related to the product currently being viewed. The second set will be a list, custom created by the user, of products which the user has grouped with the current product into an ‘outfit’.*

**Related Product Cards**
  - *The related product lists will consist of cards. Each card will display the information for a single product.*
  - *The card itself will be clickable. Clicking the card will navigate to the detail page for that product.* 

<p align="center"><img src="./Readme_Pictures/CatWalk Carousel Component.png"/ width="50%"></p>

*The following information will appear on the card. This information will all be read-only and will not have any interactivity associated.*

- Product Category 
- Product Name
- Price - As the price is not actually derived from the product, the price displayed should be that for the default style. Sale prices should be reflected. If the style is currently discounted, then the sale price should appear in red, followed by the original price which is struckthrough.
- Star Rating (# of Reviews) - Each product has an average rating based on its reviews. The average rating of the product will be displayed in the format of solid or outlined stars, where the solid stars represent the review score. A total of 5 stars should always appear, and the amount filled in should correspond to the average score. 

**Your Outfit List**

 - *A second list of products will appear below the standard Related Products section. It will contain products which the user has selected to group together as an outfit. This list will have the same format as the related products section, and will display the same product cards in a carousel like list. This list will be titled “Your Outfit”.*


## Installation
*This Repo is outdated and is not advisable to Fork, Download or Install at this point in time. Thank You Very Much!*


## Team Members 
- Teresa Nguyen
- Tim Liaw
- Rufus Jin
- Nicholas Anich