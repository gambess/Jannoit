$.getPos = function (e)
{
	var l = 0;
	var t  = 0;
	var w = $.css(e,'width');
	var h = $.css(e,'height');
	while (e.offsetParent){
		l += e.offsetLeft + (e.currentStyle?$.intval(e.currentStyle.borderLeftWidth):0);
		t += e.offsetTop  + (e.currentStyle?$.intval(e.currentStyle.borderTopWidth):0);
		e = e.offsetParent;
	}
	l += e.offsetLeft + (e.currentStyle?$.intval(e.currentStyle.borderLeftWidth):0);
	t  += e.offsetTop  + (e.currentStyle?$.intval(e.currentStyle.borderTopWidth):0);
	return {x:l, y:t, w:w, h:h};
}
$.getClient = function(e)
{
	if (e) {
		w = e.clientWidth;
		h = e.clientHeight;
	} else {
		w = (window.innerWidth) ? window.innerWidth : (document.documentElement && document.documentElement.clientWidth) ? document.documentElement.clientWidth : document.body.offsetWidth;
		h = (window.innerHeight) ? window.innerHeight : (document.documentElement && document.documentElement.clientHeight) ? document.documentElement.clientHeight : document.body.offsetHeight;
	}
	return {w:w,h:h}
}
$.getScroll = function (e) 
{
	if (e) {
		t = e.scrollTop;
		l = e.scrollLeft;
	} else  {
		if (document.documentElement && document.documentElement.scrollTop) {
			t = document.documentElement.scrollTop;
			l = document.documentElement.scrollLeft;
		} else if (document.body) {
			t = document.body.scrollTop;
			l = document.body.scrollLeft;
		}
	}
	return { t: t, l: l };
};
$.intval = function (v)
{
	v = parseInt(v);
	return isNaN(v) ? 0 : v;
}