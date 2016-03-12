# SmartDebug.JS
Next-generation debugging for javascript!

## Usage

    tryit(function() {  
        console.log(a);  
    });
    
Incase of a being undefined it will redirect you to http://stackoverflow.com/search?q=[js] + a is not defined

And if you don't rather to print link to the console (Node.JS environment, or gathering bunch of links), just set second argument to true!

    tryit(function() {  
        console.log(a);  
    }, true);
    
    // console output: http://stackoverflow.com/search?q=[js] + a is not defined
    
You can also set static property `tryit.con = true;` so it will use print to console without using second argumen.

## TODO

* AMD & CommonJS
