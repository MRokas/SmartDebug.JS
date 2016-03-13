// No Copyright 2016 https://github.com/MRokas
// Inspired by this imgur picture - http://i.imgur.com/3XvPstB.jpg
// Author unknown, I would be more than glad to credit him.
(function(name, definition) {
    if (typeof module != 'undefined') module.exports = definition();
    else if (typeof define == 'function' && typeof define.amd == 'object') define(definition);
    else this[name] = definition();
}('SmartDebug', function() {
    function SmartDebug(obj) {
        var _run = typeof obj !== 'undefined' && typeof obj.run !== 'undefined' ? obj.run : undefined;
        var _cb = typeof obj !== 'undefined' && typeof obj.callback !== 'undefined' ? obj.callback : SmartDebug.callback;
        var _link = typeof obj !== 'undefined' && typeof obj.link !== 'undefined' ? obj.link : SmartDebug.link;
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
