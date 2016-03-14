// No Copyright 2016 https://github.com/MRokas
// Inspired by this imgur picture - http://i.imgur.com/3XvPstB.jpg
// Author unknown, I would be more than glad to credit him.
(function(name, definition) {
    if (typeof module != 'undefined') module.exports = definition();
    else if (typeof define == 'function' && typeof define.amd == 'object') define(definition);
    else this[name] = definition();
}('SmartDebug', function() {
    function SmartDebug(arg1) {
        var _run = typeof arg1 === 'object' && typeof arg1.run !== 'undefined' ? arg1.run : typeof arg1 === 'function' ? arg1 : undefined ;
        var _cb = typeof arg1 === 'object' && typeof arg1.callback !== 'undefined' ? arg1.callback : SmartDebug.callback;
        var _link = typeof arg1 === 'object' && typeof arg1.link !== 'undefined' ? arg1.link : SmartDebug.link;
        _cb = typeof _cb === 'boolean'
            ? _cb
                ? (SmartDebug.callback !== false ? SmartDebug.callback : console.log.bind(console))
                : false
            : typeof _cb === 'function'
                ? _cb
                : false;
        	try {
        		_run();
        	} catch(ex) {
        		_link += ex.message;
        		!_cb ? (window.location.href = _link) : (_cb(_link));
        	}
    }
    SmartDebug.callback = false;
    SmartDebug.link = "http://stackoverflow.com/search?q=[js] + ";
    return SmartDebug;
}));
