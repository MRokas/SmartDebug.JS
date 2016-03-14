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

```import SmartDebug from "js/smartdebug"; ```

```SmartDebug = require("js/smartdebug"); ```

## Usage

Basic usage using default settings:

    SmartDebug(function() { console.log(a); });
    // redirects to http://stackoverflow.com/search?q=[js] + a is not defined

Basic usage with redirecting to stackoverflow:

    SmartDebug({
        run: function() { console.log(a); }
    });
    // redirects to http://stackoverflow.com/search?q=[js] + a is not defined

If you prefer to use callback function, provide function or use ```true``` to use default function

    SmartDebug({
        run: function() { console.log(a); },
        callback: true
    });
    // Console output: http://stackoverflow.com/search?q=[js] + a is not defined

Using your own callback functions is just as simple:

    var errors = [];

    SmartDebug({
        run: function() { console.log(a); },
        callback: function (arg1) { errors.push(arg1); }
    });

    console.log(errors);
    // Console output: Array [ "http://stackoverflow.com/search?q=[js] + a is not defined" ]

If you prefer to always use same callback function, just set default one:

    var errors = [];
    SmartDebug.callback = function (arg1) { errors.push(arg1); };
    SmartDebug({
        run: function() { console.log(a); }
    });

    console.log(errors);
    // Console output: Array [ "http://stackoverflow.com/search?q=[js] + a is not defined" ]

And if stackoverflow isn't your prefered site to search for errors, provide it:

    SmartDebug({
        run: function() { console.log(a); },
        link: "https://www.google.com/search?q=javascript "
    });
    // redirects to https://www.google.com/search?q=javascript a is not defined

Or you can provide default one:

    var errors = [];

    SmartDebug.link = "https://www.google.com/search?q=javascript ";
    SmartDebug({
        run: function() { console.log(a); },
        callback: function (arg1) { errors.push(arg1); }
    });

    console.log(errors);
    // Console output: Array [ "https://www.google.com/search?q=javascript a is not defined" ]

## TODO

_Nothing - post issue or send PR!_

## DISCLAIMER

This is just a satire, enjoy.
