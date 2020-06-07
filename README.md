# Lockdown Kitchen

## Third Milestone Project

## Code Institute / Data Centric Development

Lockdown Kitchen is an online cookbook, where the user can browse, add, edit and delete recipes. These recipes are lockdown-friendly, because there are just a couple of ingredients needed, so they are easy to make nobody have to go out for shopping to eat something tasty.

![AmIresponsive](https://github.com/krisztinatxt/lockdown-kitchen-ms3/blob/master/static/images/amiresponsive.JPG "Responsive")
## Table of Contents

1. [UX](https://github.com/krisztinatxt/lockdown-kitchen-ms3#ux)
    - [Project Goals](https://github.com/krisztinatxt/lockdown-kitchen-ms3#project-goals)
    - [User Stories](https://github.com/krisztinatxt/lockdown-kitchen-ms3#user-stories)
    - [Developer Goals](https://github.com/krisztinatxt/lockdown-kitchen-ms3#developer-goals)
    - [Design](https://github.com/krisztinatxt/lockdown-kitchen-ms3#design)
        - [Color Scheme](https://github.com/krisztinatxt/lockdown-kitchen-ms3#color-scheme)
        - [Fonts](https://github.com/krisztinatxt/lockdown-kitchen-ms3#fonts)
        - [Wireframes](https://github.com/krisztinatxt/lockdown-kitchen-ms3#wireframes)
3. [Features](https://github.com/krisztinatxt/lockdown-kitchen-ms3#features)
    - [Existing Features](https://github.com/krisztinatxt/lockdown-kitchen-ms3#existing-features)
    - [Features Left to Implement](https://github.com/krisztinatxt/lockdown-kitchen-ms3#features-left-to-implement)
4. [Testing](https://github.com/krisztinatxt/lockdown-kitchen-ms3#testing)
5. [Deployment](https://github.com/krisztinatxt/lockdown-kitchen-ms3#deployment)
    - [How to deploy the site](https://github.com/krisztinatxt/lockdown-kitchen-ms3#how-to-deploy-the-site)
    - [How to deploy locally](https://github.com/krisztinatxt/lockdown-kitchen-ms3#how-to-deploy-locally)
6. [Technologies Used](https://github.com/krisztinatxt/lockdown-kitchen-ms3#technologies-used)
7. [Credits](https://github.com/krisztinatxt/lockdown-kitchen-ms3#credits)
    - [Content](https://github.com/krisztinatxt/lockdown-kitchen-ms3#content)
    - [Media](https://github.com/krisztinatxt/lockdown-kitchen-ms3#media)
    - [Code](https://github.com/krisztinatxt/lockdown-kitchen-ms3#code)
    - [Acknowledgements](https://github.com/krisztinatxt/lockdown-kitchen-ms3#acknowledgements)

## UX

### Project Goals

Lockdown Kitchen is part of my Code Institute Full Stack Software Development studies, the Data Centric Development module. The scope for this milestone project is to "Create a web application that allows users to store and easily access cooking recipes", using the CRUD operations of Create, Read, Update, and Delete for their recipes.
This cook book is for people who are working from home or spending most of their time at home during the quarantine ordained because of the pandemic, but they want to cook or bake something easy and tasty from a couple of ingredients.
All of the foods are made from a couple of ingredient anyobody can find in their kitchen. 
The target audience is people around age 18-40, preferring to reach out online resources compared to paper cookbooks,  stuck at home during pandemic, trying to keep social distancing, open to try out new tastes achieved by using basic ingredients.

### User Stories

As a User I would like to:

 - [x] easily acces recipes from different kind of devices.
 - [x] information I am presented with to be positioned in a way that is easy for me to navigate and find things.
 - [x] browse recipes by categories.
 - [x] find recipes by ingredients I have at home.
 - [x] share recipes by adding them to database.
 - [x] edit existing recipes when I find a mistake or I have a better version of the recipe.
 - [x] delete recipes. 
 - [x] see the details about a partical recipe.
 - [x] send a feedback to the developer, so she can fix the bugs faster.
 - [x] get success or error message to know if my feedback is successfully submitted. 
 
### Developer Goals

* Provide a nice, easy to use online cook book where the user can create, edit, delete recipes, and filter them by categories and ingredients.
* Learn by practice about databases, Jinja templating, Materialize, and how to use Python with JavaScript.
* Get an insight into Heroku's platform.

### Design

To make an integrated design for this site, I used Materializecss, and Materialize Icons.
The cards with borders, the logo with angled forms and locked dishes are the reflection of the "lockdown feeling".
The best-used components are cards. I choosed cards as container of the infos, recipes, and detailed descriptions because the structure of a card helps me to organize the information in a user-friendly way.
For providing feedback and adding recipe I used forms with simply put placeholders.

#### Color Scheme

To find out, what colors would match with the cookbook's feeling, I used [ColorSpace](https://mycolor.space/).
I also used [Eye Dropper Chrome Extension](https://chrome.google.com/webstore/detail/eye-dropper/hmdcmlfkchdmnmnmheododdhjedfccka) to make sure that colors on my page are consistent.
The two most important colors are blue and aliceblue (almost white). To make the site easy to read, I used these two colors for almost everything.
For Categories and Browse recipes link I used orange. At the Delete button I set red background color as a convention. 

Colors I used: 

- ![#00766B](https://placehold.it/15/00766B/000000?text=+) `#00766B - blue, primary color`
- ![#f0f8ff](https://placehold.it/15/f0f8ff/000000?text=+) `#f0f8ff - aliceblue, secondary color`
- ![#ffab46](https://placehold.it/15/ffab46/000000?text=+) `#ffab46 - orange for category name and browse recipe`
- ![#ff0000](https://placehold.it/15/#ff0000/000000?text=+) `#ff0000 - red used once at the Delete button`

#### Fonts

![Welcometo](https://github.com/krisztinatxt/lockdown-kitchen-ms3/blob/master/static/images/welcomto.JPG "Fonts")

The font I selected to this page is Roboto Slab from [GoogleFonts](https://fonts.google.com/), because it fits perfectly to playful and clear-out theme of the site.

### Wireframes

I created my wireframes during the Scope Plane of this project. 
I made wireframes for each page of the site from three different type of devices:
1. [Desktop](https://github.com/krisztinatxt/lockdown-kitchen-ms3/tree/master/wireframes/laptop)
2. [Tablet](https://github.com/krisztinatxt/lockdown-kitchen-ms3/tree/master/wireframes/tablet)
3. [Mobile](https://github.com/krisztinatxt/lockdown-kitchen-ms3/tree/master/wireframes/mobile)

The implementation ended up slightly different.

## Features

### Existing Features

#### Search recipes

- the user can search for recipes sorting the results by ingredients.
- if there are no results found for the keyword, the user can quickly add a new recipe, or browse for recipes.

#### Get all recipes

- the user can reach the list of all recipes on one page, so if they are clueless, they can simply browse.

#### Sort recipes

- the user can easily sort recipes by categories from the menu or from the recipe card itself.

#### Edit, Update and delete recipes

- when the user clicks on the detailed recipe page, at the bottom, they can see a dropdown menu with More options, where they can choose between editing or deleting the recipe.
- if the user choose to edit the recipe, it will pop up a form with the data of the selected recipe in an editable version.
- by hitting the delete button, the recipe will be removed from the database.

#### Add new recipe

- the user can add a new recipe by using a form.
- the placeholders set in the form help the user how to fill it out.
- a dropdown menu contains the categories, so they can easily choose one.

#### Send feedback

- in the footer the user can find a feedback form which allows them to send their bug report, so I can fix them as fast as possible.
- to get the feedback I used EmailJS. 
- after submitting the feedback, they get an success or an error message depending on the successfulness of the action.
- messages are set with timeOut. 

### Features Left to Implement

- As we haven't learnt yet, and it's not part of the requirements I didn't implement authentication, but in the future I would like to add to this site.
- When the user can create a profile, I would like to build some other features like _Add to your favorites_ or _Share this recipe_.

## Testing

### Homepage

When You open the Lockdown Kitchen, on the homepage you can see some re-entrant component of the app which you can find on each page:
- the navigation bar with the name of the app, and the menu.
- the footer with the copyright, my GitHub profile and the Feedback form.

#### Navigation

On the navigation bar You can find the name of the site. If you click on it, it always leads you to the homepage.
The menu consists four component:
1. Home: it leads You to the index.html.
2. All recipes: it loads all of the recipes as a list of cards.
3. Browse by categories: a dropdown menu containing the categories of the recipes.
4. Add My Recipe: a form with the components of the recipe and placeholders to help the user to fill it out.

All links of the navigation bar are provided by using Jinja templating. All of the links work, they load fast.
When you are browsing from small devices, the navigation bar transform to a collapsable side navigation to make the site easy to use. 

![SideNav](https://github.com/krisztinatxt/lockdown-kitchen-ms3/blob/master/static/images/sidenav.JPG "SideNav")

#### Footer

- contains the developer's name, her GitHub account and a Feedback form.
- the GitHub page opens in a new tab, using `target:"_blank"` and `rel="noopener"` attribute. 
- the Feedback Form is a modal with three `required` fields and a submit button:
    - Name;
    - Email Address;
    - Feedback.
- when the user submitted their feedback they will get a success or an error message both with timeOut. 
    - Form is tested from multiple devices, message sent to the developer's mailbox, success message received; 
    - I deleted a letter from the emailjs ID to test the error message, also works well.

#### Logo

The logo is positioned to the center of the homepage. The picture is responsive. You can find the logo also as the Favicon of the page.

#### Info box

When the user lands to the homepage, they can find a card with the description of the cook book.
At the bottom of the box you can find a link to the list of the recipes. The link is tested, works without problem.

#### Searchbar

The user can search for recipes based on what do they have at home. The search is build with regex method.
When the search was successfull, a list of recipes will load, when there are no results for the keyword, the user get redirected to an error page with two links:
1. one to lead them the Add My Recipe page,
2. one to lead them to All Recipes page. 
Links and search are tested, both working correctly. 

### All Recipes

This page is a list of all recipes of the database. Recipes are stored in cards with this structure:
- Recipe Image provided by an URL;
- Recipe Title;
- View Recipe;
- Category.
The image, the title and the view recipe anchor tag are all clickable. When the user click at any of them, the full page of the respective recipe loads.
When the user click on the name of the category, they get a list of the recipes in the same category. 
Links are tested, everything worked.

### Browse by Category

Contains a dropdown menu with the four categories:
1. Main Course;
2. Soup;
3. Bites;
4. Bread.

Navigation works without problem, the sidenav pop up when the window get resized. 

### Add My Recipe

![AddNew]( "AddNew")



## Deployment

### How to deploy the site

### How to deploy locally

## Technologies Used

- [GitHub](https://github.com/);

- [GitPod](https://gitpod.io/);

- [Heroku](https://dashboard.heroku.com/);

- [MongoDB](https://www.mongodb.com/);

- [HTML](https://en.wikipedia.org/wiki/HTML5);

- [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)

- [JavaScript](https://en.wikipedia.org/wiki/JavaScript);

- [Jquery](https://jquery.com/);

- [Materialize](https://materializecss.com/);

- [Python](https://www.python.org/download/releases/3.0/);

- [EmailJS](https://www.emailjs.com/);

- [MarkDownLit](https://dlaa.me/markdownlint/);

- [HatchFul](https://hatchful.shopify.com/);

- [Balsamiq](https://balsamiq.com/);

- [HTMLValidator](https://validator.w3.org/);

- [CSSValidator](https://jigsaw.w3.org/css-validator/)

- [JavaScriptValidator](https://esprima.org/demo/validate.html);

- [HTMLFormatter](https://htmlformatter.com/);

- [CSSBeautifier](https://www.freeformatter.com/css-beautifier.html);

- [JSHint](https://jshint.com/);

- [PythonCodeChecker](https://extendsclass.com/python-tester.html);

- [Favicon](https://www.favicon-generator.org/);

- [ColorSpace](https://mycolor.space/);

- [GoogleFonts](https://fonts.google.com/);

- [AmIResponsive](http://ami.responsivedesign.is/);

- [Flask](https://flask.palletsprojects.com/en/1.1.x/);

- [Jinja](https://jinja.palletsprojects.com/en/2.10.x/);

- [PyMongo](https://pymongo.readthedocs.io/en/stable/)

## Credits

### Content

All text was written by me. The recipes are from [BBCGoodFood](https://www.bbcgoodfood.com/recipes/collection/five-ingredients-or-less), [Northjersey](https://eu.northjersey.com/story/life/food/2020/04/20/easy-bread-recipes-make-during-coronavirus-quarantine/2993376001/) and [BuzzFeed](https://www.buzzfeed.com/lindsayhunt/easy-3-ingredient-dinners-that-are-actually-delicious).

### Media

- To create a logo I used [HatchFul](https://hatchful.shopify.com/).
- To convert the logo to a favicon, I used [Favicon](https://favicon.io/).

### Code

- I learned a lot from the Code Institute Data Centric Development Mini Project.
- The base of the code for split method is from [W3Schools](https://www.w3schools.com/python/ref_string_split.asp).
- Threads from [Stackoverflow](https://stackoverflow.com/) about how to fix diverse bugs.

## Acknowledgements

Special thanks to:

- Code Institute Tutor Team, they helped a lot during this project.
- My mentor, [Aaron Sinnott](https://github.com/aaronsnig501) for his advices.
- Everybody who did take time to test this page, and gave me feedback.

This site is for educational use.

Krisztina Szabó

Code Institute
2020

