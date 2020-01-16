(function(){var P$=Clazz.newPackage("org.scijava.util"),I$=[[0,'java.util.regex.Pattern','java.text.DecimalFormatSymbols','StringBuilder','java.io.File','StringBuffer']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "StringUtils");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'splitUnquoted$S$S', function (s, separator) {
return s.split$S$I($I$(1).quote$S(separator) + "(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)", -1);
}, 1);

Clazz.newMeth(C$, 'sanitizeDouble$S', function (value) {
value=value.replaceAll$S$S("[^0-9,\\.]", "");
var separator=Clazz.new_($I$(2,1)).getDecimalSeparator$();
var usedSeparator=separator == "." ? "," : ".";
value=value.replace$C$C(usedSeparator, separator);
try {
Double.parseDouble$S(value);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
value=value.replace$C$C(separator, usedSeparator);
} else {
throw e;
}
}
return value;
}, 1);

Clazz.newMeth(C$, 'stripNulls$S', function (toStrip) {
var s=Clazz.new_($I$(3,1));
for (var i=0; i < toStrip.length$(); i++) {
if ((toStrip.charCodeAt$I(i)) != 0 ) {
s.append$C(toStrip.charAt$I(i));
}}
return s.toString().trim$();
}, 1);

Clazz.newMeth(C$, 'samePrefix$S$S', function (s1, s2) {
if (s1 == null  || s2 == null  ) return false;
var n1=s1.indexOf$S(".");
var n2=s2.indexOf$S(".");
if ((n1 == -1) || (n2 == -1) ) return false;
var slash1=s1.lastIndexOf$S($I$(4).pathSeparator);
var slash2=s2.lastIndexOf$S($I$(4).pathSeparator);
var sub1=s1.substring$I$I(slash1 + 1, n1);
var sub2=s2.substring$I$I(slash2 + 1, n2);
return sub1.equals$O(sub2) || sub1.startsWith$S(sub2) || sub2.startsWith$S(sub1)  ;
}, 1);

Clazz.newMeth(C$, 'sanitize$S', function (s) {
if (s == null ) return null;
var buf=Clazz.new_($I$(5,1).c$$S,[s]);
for (var i=0; i < buf.length$(); i++) {
var c=buf.charAt$I(i);
if (c != "\t" && c != "\n"  && (c < " " || c > "~" ) ) {
buf=buf.deleteCharAt$I(i--);
}}
return buf.toString();
}, 1);

Clazz.newMeth(C$, 'isNullOrEmpty$S', function (s) {
return s == null  || s.isEmpty$() ;
}, 1);

Clazz.newMeth(C$, 'padEnd$S$I', function (s, length) {
return C$.padEnd$S$I$C(s, length, " ");
}, 1);

Clazz.newMeth(C$, 'padEnd$S$I$C', function (s, length, padChar) {
if (s == null ) {
return null;
}var builder=Clazz.new_($I$(3,1).c$$S,[s]);
var padding=length - s.length$();
for (var i=0; i < padding; i++) {
builder.append$C(padChar);
}
return builder.toString();
}, 1);

Clazz.newMeth(C$, 'padStart$S$I', function (s, length) {
return C$.padStart$S$I$C(s, length, " ");
}, 1);

Clazz.newMeth(C$, 'padStart$S$I$C', function (s, length, padChar) {
if (s == null ) {
return null;
}var builder=Clazz.new_($I$(3,1));
var padding=length - s.length$();
for (var i=0; i < padding; i++) {
builder.append$C(padChar);
}
return builder.append$S(s).toString();
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
