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
