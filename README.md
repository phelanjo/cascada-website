# Cascada

**[Cascada](http://project-cascada.herokuapp.com/)** is a simple CRUD web application built with HTML, CSS, JavaScript and JQuery that allows users to view a list of waterfalls in the great state of Oregon. Users are also able to add, edit and delete these waterfalls from a AWS RDS PostgreSQL instance using a Python API (located [here](https://github.com/phelanjo/cascada-server))

Cascada can be run locally by cloning this repo and accessing the index.html file in your browser.

> To clone, navigate to a directory of your choice and enter:
> ```
> git clone https://github.com/phelanjo/cascada-website.git
> ```

## How It Works
* Adding a waterfall 
  * Users can press the "Add Waterfall" button to be taken to a form where they can add a waterfall. All fields in this form are required, and omitting an input in any of these fields provides the user with an error message. 
  * After successfully adding a waterfall, the waterfall is added into a PostgreSQL database, and the user is taken back to the main screen where the newly created waterfall resides in a table below the map. 
  * The table includes each waterfall's name, height, latitude and longitude, along with edit and delete buttons. 
  
* Editing a waterfall
  * Pressing the edit button takes the user to a form where they can edit the information that was provided about the waterfall.
  * After submitting this form, the waterfall is updated in the database, and the user is taken back to the main screen where the edited waterfall is shown. 
  * This form is also validated in the same way as the form that adds a waterfall in that all fields must have input. 
  
* Deleting a waterfall
  * Pressing the delete button dynamically removes the waterfall from the table, and the database.
  
* AJAX Requests
  * All AJAX GET, POST, UPDATE, and DELETE requests are served from a Python API hosted on an AWS EC2 instance.

## Dependencies
**Cascada** utilizes a few key dependencies, which include:
* [Bootstrap CSS](https://getbootstrap.com/docs/4.5/getting-started/download/): A CSS framework that provides design templates for front-end web development.
* [JQuery](https://jquery.com/download/): A lightweight JavaScript library that makes traversing and manipulating HTML elements much easier.
* [JQuery Validation](https://jqueryvalidation.org/): A JQuery plugin used for form validation.
* [Leaflet](https://leafletjs.com/download.html): An open-source JavaScript library that provides interactive maps.
* [FontAwesome](https://fontawesome.com/): A CSS toolkit that makes inserting icons into your HTML a breeze.
* [Google Fonts](https://fonts.google.com): Font library.

## The Future of Cascada
Continuing with this project, I have a list of features I would like to implement in the near future.
- [ ] Map pins that show the location of each waterfall on the provided map.
- [ ] User authentication and personal accounts.
- [ ] Version 2 of the website, written in React.
