/*

DynaCloud v5

A dynamic JavaScript tag/keyword cloud with jQuery.

<http://johannburkard.de/blog/programming/javascript/dynacloud-a-dynamic-javascript-tag-keyword-cloud-with-jquery.html>

MIT license.

Johann Burkard
<http://johannburkard.de>
<mailto:jb@eaio.com>

*/

jQuery.dynaCloud = {

 max: 150,
 sort: true,
 auto: true,
 single: true,
 wordStats: true,
 scale: 4,

// Adapted from <http://www.perseus.tufts.edu/Texts/engstop.html>

 stopwords: [ "a", "about", "above", "accordingly", "after",
  "again", "against", "ah", "all", "also", "although", "always", "am", "among", "amongst", "an",
  "and", "any", "anymore", "anyone", "are", "as", "at", "away", "be", "been",
  "begin", "beginning", "beginnings", "begins", "begone", "begun", "being",
  "below", "between", "but", "by", "ca", "can", "cannot", "come", "could",
  "did", "do", "doing", "during", "each", "either", "else", "end", "et",
  "etc", "even", "ever", "far", "ff", "following", "for", "from", "further", "furthermore",
  "get", "go", "goes", "going", "got", "had", "has", "have", "he", "her",
  "hers", "herself", "him", "himself", "his", "how", "i", "if", "in", "into",
  "is", "it", "its", "itself", "last", "lastly", "less", "many", "may", "me",
  "might", "more", "must", "my", "myself", "near", "nearly", "never", "new",
  "next", "no", "not", "now", "o", "of", "off", "often", "oh", "on", "only",
  "or", "other", "otherwise", "our", "ourselves", "out", "over", "perhaps",
  "put", "puts", "quite", "s", "said", "saw", "say", "see", "seen", "shall",
  "she", "should", "since", "so", "some", "such", "t", "than", "that", "the",
  "their", "them", "themselves", "then", "there", "therefore", "these", "they",
  "this", "those", "though", "throughout", "thus", "to", "too",
  "toward", "unless", "until", "up", "upon", "us", "ve", "very", "was", "we",
  "were", "what", "whatever", "when", "where", "which", "while", "who",
  "whom", "whomever", "whose", "why", "with", "within", "without", "would",
  "yes", "your", "yours", "yourself", "yourselves", "centralNotice", "wikipedia", "MediaWiki" ]

};

jQuery(function() {
 jQuery.dynaCloud.stopwords = new RegExp("\\s((" + jQuery.dynaCloud.stopwords.join("|") + ")\\s)+", "gi");
 if (jQuery.dynaCloud.auto) {
  jQuery('.dynacloud').dynaCloud();
 }
});

jQuery.fn.dynaCloud = function(outElement) {
 var cloud = {};
 return this.each(function() {

  var cl = [];
  var max = 0;

  if (jQuery.wordStats && jQuery.dynaCloud.wordStats) {
   jQuery.wordStats.computeTopWords(jQuery.dynaCloud.max, this);
   for (var i = 0, j = jQuery.wordStats.topWords.length; i < j && i <= jQuery.dynaCloud.max; ++i) {
    var t = jQuery.wordStats.topWords[i].substring(1);
    if (typeof cloud[t] == 'undefined') {
     cloud[t] = { count: jQuery.wordStats.topWeights[i], el: t };
    }
    else {
     cloud[t].count += jQuery.wordStats.topWeights[i];
    }
    max = Math.max(cloud[t].count, max);
   }
   jQuery.wordStats.clear();
  }
  else {
   //var elems = jQuery(this).text().replace(/[^A-Z\xC4\xD6\xDCa-z\xE4\xF6\xFC\xDF0-9_]/g, ' ').replace(jQuery.dynaCloud.stopwords, ' ').split(' ');
   //var word = /^[a-z\xE4\xF6\xFC]*[A-Z\xC4\xD6\xDC]([A-Z\xC4\xD6\xDC\xDF]+|[a-z\xE4\xF6\xFC\xDF]{3,})/;
	var elems = jQuery(this).text().replace(/[^A-Z\xC4\xD6\xDCa-z\xE4\xF6\xFC\xDF0-9_\xF1\xD1\xE1\xE9\xED\xF3\xFA\x5C]/g, ' ').replace(jQuery.dynaCloud.stopwords, ' ').split(' ');
    var word = /^[a-z\xE4\xF6\xFC\xF1\xE1\xE9\xED\xF3\xFA]*[A-Z\xC4\xD6\xDC\xD1]([A-Z\xC4\xD6\xDC\xDF\xD1]+|[a-z\xE4\xF6\xFC\xDF\xF1\xE1\xE9\xED\xF3\xFA]{3,})/;
   jQuery.each(elems, function(i, n) {
    if (word.test(n)) {
     var t = n.toLowerCase();
     if (typeof cloud[t] == 'undefined') {
      cloud[t] = { count: 1, el: n };
     }
     else {
      cloud[t].count += 1;
     }
     max = Math.max(cloud[t].count, max);
    }
   });
  }

  jQuery.each(cloud, function(i, n) {
   cl[cl.length] = n;
  });

  if (jQuery.dynaCloud.sort) {
   cl.sort(function(a, b) {
    if (a.count == b.count) {
     return a.el < b.el ? -1 : (a.el == b.el ? 0 : 1);
    }
    else {
     return a.count < b.count ? 1 : -1;
    }
   });
  }

  var out;
  if ((out = jQuery(outElement ? outElement : '#dynacloud')).length == 0) {
   jQuery(document.body).append('<p id="dynacloud"><\/p>');
   out = jQuery('#dynacloud');
  }

  out.empty();

  var l = jQuery.dynaCloud.max == -1 ? cl.length : Math.min(jQuery.dynaCloud.max, cl.length);

  for (var n = 0; n < l; ++n) {
   out.append("<a class='dyna' href='javascript: void(toggleDynaCloud(\"" + cl[n].el + "\"))' style= 'font-size: " + Math.ceil((cl[n].count / max) * jQuery.dynaCloud.scale) + "em'><span>" + cl[n].el +"</span></a> &nbsp;");
  }
  
  var target = this;

  jQuery('a', out).click(function() {

    if (jQuery.dynaCloud.single) {
     toggleDynaCloud($(this).text());
	 $(this).toggleClass('t10');
    }
    return false;
   });

 });
};
