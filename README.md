# SmartDebug.JS
Next-generation debugging for javascript!

## Inspired by

Sadly, I do not know original author of image - but I would be more than glad to credit him for this awesome idea.

![Inspiration](https://github.com/MRokas/SmartDebug.JS/blob/master/Inspiration.jpg?raw=true)

## Getting started

First clone git:

```git clone http://github.com/MRokas/SmartDebug.JS.git```

And then include it by using your preferred method: 

```<script src="js/smartdebug.js"></script> ```

```import tryit from "js/smartdebug" ```
    
```require("js/smartdebug") ```

## Usage

Basic usage with redirecting to stackoverflow:

    tryit(function() {  
        console.log(a);  
    });
    // redirects to http://stackoverflow.com/search?q=[js] + a is not defined

If you don't want to be redirected, you can print link to the console:

    tryit(function() {  
        console.log(a);  
    }, true);
    // Console output: http://stackoverflow.com/search?q=[js] + a is not defined

Or provide your own function to deal with link:

    var errors = [];
    tryit(function() {  
        console.log(a);  
    }, function (arg1) {
        errors.push(arg1)
    });

    console.log(errors);
    // Console output: Array [ "http://stackoverflow.com/search?q=[js] + a is not defined" ]


## TODO

* User provided link for searching
* Set default action by using ```tryit.con``` variable
 
## DISCLAIMER

This is just a satire, enjoy.
