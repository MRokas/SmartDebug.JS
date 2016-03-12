// No Copyright 2016 https://github.com/MRokas
// Inspired by this imgur picture - http://i.imgur.com/3XvPstB.jpg
// Author unknown, I would be more than glad to credit him.
(function(name, definition) {
    if (typeof module != 'undefined') module.exports = definition();
    else if (typeof define == 'function' && typeof define.amd == 'object') define(definition);
    else this[name] = definition();
}('tryit', function() {
    function tryit(fn, con) {
        var con = typeof con !== 'undefined' ? con : tryit.con;
    	try {
    		fn();
    	} catch(ex) {
    		var link = ("http://stackoverflow.com/search?q=[js] + " + ex.message);
    		!con ? (window.location.href = link) : (console.log(link));
    	}
    }
    tryit.con = false;
    return tryit;
}));
