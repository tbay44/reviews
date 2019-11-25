# Project Name

tBay Reviews component

## Related Projects

  - https://github.com/tbay/carousel
  - https://github.com/tbay/personal-carousel
  - https://github.com/tbay/product-seller-description
  - https://github.com/tbay/search-bar
  - https://github.com/tbay/image-gallery
 
## Application information

This app is an independent microservice providing persistent reviews and ratings and providing review and rating submits for the products listed in the tbay website, an ebay item details page clone.

This app utilizes React, Express, MongoDB and Node.js

## Usage

My component listens for an event emitted when a user makes a product selection on a different microservice to inform it what product to look up corresponding data object from my database. Upon recieving, it uses the data to inform the sub components displays (stars, pie graphs, star rating breakdown) and renders each of the reviews individually. A user can click the 'write review' button to bring up a modal with a form for the user to fill out. When a user clicks submit it writes to the database and then rerenders the reviews component to reflect the new data and display the new review.

## Challenges

Connecting my service to those of my teammates and distributing data between components while still maintaining a service oriented architecture.

Styling my component to perfectly match eBay's pages.

Dynamically rendering styles such as the pie graphs, stars reflecting rating and the 'progress bars' of the breakdown of rating by number of stars.

Finding an appropriate deployment service and properly staging my component.

Designing a reverse proxy to display all the tbay components.

## Learnings
Throughout the design of this application I gained a lot of experience in these areas:

Seeing the ins and outs of how complex and sometimes convoluted styling on a major website can be.

Witnessing first hand the strengths (modularity, flexibility and stability in the event of a microservice being down) and weaknesses (additional overhead in deployment, intercomponent communication and data storage) of service oriented architecture.

Utilizing AGILE methodology, effective communication and proper workflow management on a team of four developers.

## Demo
https://drive.google.com/file/d/1vlXLFU8WEKq86h0QY7C9B5mSeBi4075c/view
