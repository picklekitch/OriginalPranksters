### Code Fellows Bootcamp - Final Project - Original Pranksters


#### Original Pranksters - Summary
+ This is project allows you to prank your friends with 4 different pranks: 1) Fake Pizza Order, 2) Fake Amazon Order, 3) Fake Fantasy Sports Catastrophic Injury, and 4) Fake Dr. Apt.
+ It was important to us to keep this fun, and not mean. We control that by making each prank a Mad Lib like template, where the user submits information about their friend that they want to prank.
+ HOW THIS WORKS: It's pretty simple. We take data input from the user, in a Mad-Lib type form, we do something with it, and we render that content in a mock email message that the user can review prior to being sent.
+ The recipient would then click on one of the links within the mock email message, and it would take them to a page that shows them that it's just a practical joke.


#### JS Functionality:
+ We got ideas from our Donut Shop and Kitty War projects.
+ We essentially took a modular approach, setting up each joke in its own js, but in many ways using very similar logic.
+ The program utilizes getElementById to grab user input from the prank form. Then, in the Pizza and Amazon prank, we complete some calculations, and in all cases, we render to the DOM the elements of a mock prank email message. We relied heavily on [jQuery](https://jquery.com/) to render DOM elements to the page.
+ During the project, we build an object constructor with several prototypes to complete the actions, but we ran into issues of scoping, where the console log was telling us that the prototypes were not functions. We got around this in a dirty programming way (to meet our MVP goal) by declaring all the variables in the global scope; so, we could call them within any function. This is not the ideal way to do it, but it does work, and working code > than pretty, DRY code that does not work.
+ It really helped our project that we used a consistent branch naming convention. This prevented merge conflicts until the last day, and that was unavoidable.
+ One of the harder problems was rendering the date in JS in a manner similar to how Amazon does it. We had to use [Moment.js](http://momentjs.com/) and [Bower](http://bower.io/) to achieve this.


### CSS & HTML:
+ We are using [Google Font - Special Elite cursive](https://fonts.googleapis.com/css?family=Special+Elite|Gochi+Hand|Chelsea+Market|Kite+One|Happy+Monkey|Indie+Flower|Bevan) on our index.html and throughout our site.
+ Steven Washington and Anson Menzie are largely responsible for the look and feel of this website.
+ Following instructions and suggestions from [Wowslider.com](http://wowslider.com/), we installed a carousel for our home page, giving it a nice effect.
+ We also leveraged [Code Pen - Letter Rain](http://codepen.io/y6nH/pen/uxgBD) as inspiration on our reveal page to make the text rain effect.
+ Essentially, every prank is its own HTML page with some of its own CSS and its own JS. This modular style also helped prevent merge conflicts.
+ We also Googled images to use for educational purposes in representing the functionality of our app.
+ We also used stylistic elements from Amazon.com and Papa John's Pizza to arrange the look & feel of our Pizza and Amazon pranks.
+ We also pulled in Star Wars images from a Google search for our About Us page.


#### Future Functionality:
+ We decided that there were some things that we originally wanted to do, which were beyond the scope of our Code Fellows Bootcamp Final Project.
+ This app needs functionality to authenticate users on the front end. We had envisioned that people could use a verifiable social media account to authenticate. The point is that we want users to be real people.
+ Eventually, we'd like to add the functionality where you could actually send an email or text to your friend.
+ If you were the recipient of the prank, you'd have the ability to either prank your friend back and/or use information to find out who pranked you.
+ The app needs back-end server-side funcationality that protects sensitive user data (email address and phone numbers) and only uses the information to complete the prank, but does not store it. We don't want to be responsible for PII.
+ We could re-code the js to make it more DRY, including an object constructor with prototypes, and possibly one main prank object that is used and called by all pranks with only specific prototypes for the additional functionality that would be needed to pull off that prank.


#### Final Project Haiku:
+ Final Project Week
+ It May Not Be DRY; It Works!
+ Original Pranksters


#### Final Parting Shot:
+ It was a pleasure working together as a team. The Original Pranksters team rocks!
