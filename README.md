# SmartDebug.JS
Next-generation debugging for javascript!

## Inspired by

Sadly, I do not know original author of image - but I would be more than glad to credit him for this awesome idea.

![Inspiration](https://github.com/MRokas/SmartDebug.JS/blob/master/Inspiration.jpg?raw=true)

## Usage

    tryit(function() {  
        console.log(a);  
    });
    
Incase of a being undefined it will redirect you to [http://stackoverflow.com/search?q=[js] + a is not defined](http://stackoverflow.com/search?q=[js]%20+%20a%20is%20not%20defined)

And if you don't rather to print link to the console (Node.JS environment, or gathering bunch of links), just set second argument to true!

    tryit(function() {  
        console.log(a);  
    }, true);
    
    // console output: http://stackoverflow.com/search?q=[js] + a is not defined
    
You can also set static property `tryit.con = true;` so it will use print to console without using second argumen.

## TODO

* Improve *Usage* section
 
## DISCLAIMER

This is just a satire, enjoy.
