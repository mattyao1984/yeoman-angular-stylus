##What we have here?
####AngularJS
AngularJS is a toolset for building the framework most suited to your application development.
For more information, please check [here](https://angularjs.org/).

####Stylus
Stylus is expressive, robust, feature-rich CSS preprocessor
For more information, please check [here](http://learnboost.github.io/stylus/).

####Behat
Behat is an open source behavior-driven development framework for PHP 5.3 and 5.4.
For more information, please check [here](http://docs.behat.org/en/v2.5/).

####Grunt
In one word: automation. The less work you have to do when performing repetitive tasks like minification, compilation, unit testing, linting, etc, the easier your job becomes.
For more information, please check [here](http://gruntjs.com/).

####Karma
Spectacular Test Runner for JavaScript.
For more information, please check [here](http://karma-runner.github.io/0.12/index.html).


##Install & Run
1. Download from github [here](https://github.com/mattyao1984/yeoman-angular-stylus), or you can do "git clone https://github.com/mattyao1984/yeoman-angular-stylus.git"

2. Install Node.js. If you don't have Node.js installed on your machine, you need to install it first. Download it [here](http://nodejs.org/).

3. Run "npm update -g bower" to update your bower and then run "bower update" in your project folder.

4. Install Grunt command line tool. If you don't have grunt installed on your machine, you need to install it first. Run this command in your terminal "npm install -g grunt-cli". It will install grunt command line on your machine globaly.

5. Run "npm install" for dependecies.

6. Run "grunt build"

7. Run "grunt serve" in your terminal. The server will be run on localhost:9000 by default.

8. You will see your changes in real-time without refreshing the browser!


##What can I do with it now?
####Edit css files with Stylus
* You can edit desktop.styl and mobile.styl
* You can add more .styl files as you like
* All .styl will be built into .css when you make changes

####Edit js and follow Angular way
* Add new controllers in /scripts/controllers
* Add new directives in /scripts/directives
* Add new templates in /app/views

####Edit Gruntfile.js
* If you have more packages to include

##E2E Test with Behat & Selenium2 (optional)
1. Download Selenium2 server from [here](http://selenium-release.storage.googleapis.com/2.44/selenium-server-standalone-2.44.0.jar).

2. Run the Selenium server "java -jar selenium-server-standalone-2.44.0.jar". You need to config your Java on your machine first.

3. Download composer [here](https://getcomposer.org/download/)

4. Run "composer install" and then "composer update" to install Behat packages.

5. Config behat.yml and write your tests. For more information, please check [here](http://docs.behat.org/en/v2.5/quick_intro.html#installation).

##Demo
Please check [here](http://yeoman-angular-stylus.herokuapp.com). 
