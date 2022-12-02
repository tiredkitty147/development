# Development

### Link to Deployed Website
If you used the stencil code, this is `https://<your GitHub username>.github.io/<name of your repository>`

My deployed website (I used the stencil) would be https://tiredkitty147.github.io/development/

### Goal and Value of the Application

The application I created is an interface that includes a list of items of a bakery for purchase and a favorites list that totals the price of the favorite items. It is an interface for users to select items out of the bakery's list. The theme of my application is a Turkish bakery and there is an aggregator that totals the price of the favorite items. The goal of my application is to filter and sort the items using the sidebar, to add items to the favorites list, or to remove items from the favorites list. The filtering/sorting helps users reduce the number of options by 'Type' or 'Dietary Restriction' of the item.

### Usability Principles Considered

Some of the principles I considered where efficiency, effectivity, customisability and consistency.
For effectivity, I wanted to be sure that the user reached their goal when they are using my application. My application provides suitable functionality and this allows the users to do tasks effectively. I only put necessary widgets and buttons on my webpage and avoided including unneccesarry functionalities so that the user is not overwhelmed or distracted. 

For efficieny, I made sure that the user can reach their goal as quickly as possible. I wanted the user to accomplish their tasks in a short amount of time. Therefore, I designed my application so that it requires a minimal time to execute an action on the website. I designed my interface widgets such as the sidebar and the aggregator simple so that it is easy to use. I added default options so that the user can go back to start when they want to.

Moreover, I made my webpage customizable so that everything on the interface suits the user and the user has the power. My application is flexible enough to support different ways for completing a task. Combinations of sorting and filtering work together so that the user can try different approaches when they are reaching their goal. The users can also add and remove items to/from the favorites list as they wish. 

Lastly, I considered consistency when I was designing by webpage. I made sure that I followed a consistent simple design and everything fits well together on my application. By implementing consistency, I wanted the user to easily reuse a pattern once learned. When using the application, the user would know what 'Add to Favorites' or 'Remove from Favorites' buttons do. They would know how the filtering/sorting buttons work. 

### Organization of Components

I have created two components. The first component is for the items and it is called BakeryItem.js. In this component, I create a bakery item and add the image, name, type, diet, description, price and the button to add/remove. This component retuns the bakery item and its values. 
The second one, called Aggregator.js, is the aggregator component that shows the items and the aggregtor value. This returns the name of the item that is added to the favorites list.

### How Data is Passed Down Through Components

I provide my BakeryItem component with a props parameter. This allows me to make my component dynamic and change its behaviour based on what I pass in. This also allows me to access and call addToCart function in BakeryItem component by using props.addToCart. Calling props.addToCart in the BakeryItem component calls the function addToCart in App.js. To access the bakery items, I use bakeryData that I get from bakery-data.json and map it to BakeryItem components to list my items. I also pass props parameter to my Aggregator component. In Aggregator component, I return props.name. This allows me to return the name of the bakery item. In App.js, I map cartItems and set 'name' variable of Aggregator.js equal to item.name. With this, when props.name is returned in Aggregator.js, it returns item.name. 

### How the User Triggers State Changes



