(function(){var P$=Clazz.newPackage("org.apache.logging.log4j.util"),I$=[[0,'org.apache.logging.log4j.util.PropertiesUtil','java.util.Objects','StringBuilder','java.util.Locale']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Strings");

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.LINE_SEPARATOR=$I$(1).getProperties$().getStringProperty$S$S("line.separator", "\n");
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['S',['EMPTY','LINE_SEPARATOR']]]

Clazz.newMeth(C$, 'dquote$S', function (str) {
return "\"" + str + "\"" ;
}, 1);

Clazz.newMeth(C$, 'isBlank$S', function (s) {
return s == null  || s.trim$().isEmpty$() ;
}, 1);

Clazz.newMeth(C$, 'isEmpty$CharSequence', function (cs) {
return cs == null  || cs.length$() == 0 ;
}, 1);

Clazz.newMeth(C$, 'isNotBlank$S', function (s) {
return !C$.isBlank$S(s);
}, 1);

Clazz.newMeth(C$, 'isNotEmpty$CharSequence', function (cs) {
return !C$.isEmpty$CharSequence(cs);
}, 1);

Clazz.newMeth(C$, 'join$Iterable$C', function (iterable, separator) {
if (iterable == null ) {
return null;
}return C$.join$java_util_Iterator$C(iterable.iterator$(), separator);
}, 1);

Clazz.newMeth(C$, 'join$java_util_Iterator$C', function (iterator, separator) {
if (iterator == null ) {
return null;
}if (!iterator.hasNext$()) {
return "";
}var first=iterator.next$();
if (!iterator.hasNext$()) {
return $I$(2).toString$O$S(first, "");
}var buf=Clazz.new_($I$(3,1).c$$I,[256]);
if (first != null ) {
buf.append$O(first);
}while (iterator.hasNext$()){
buf.append$C(separator);
var obj=iterator.next$();
if (obj != null ) {
buf.append$O(obj);
}}
return buf.toString();
}, 1);

Clazz.newMeth(C$, 'left$S$I', function (str, len) {
if (str == null ) {
return null;
}if (len < 0) {
return "";
}if (str.length$() <= len) {
return str;
}return str.substring$I$I(0, len);
}, 1);

Clazz.newMeth(C$, 'quote$S', function (str) {
return "\'" + str + "\'" ;
}, 1);

Clazz.newMeth(C$, 'trimToNull$S', function (str) {
var ts=str == null  ? null : str.trim$();
return C$.isEmpty$CharSequence(ts) ? null : ts;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'toRootUpperCase$S', function (str) {
return str.toUpperCase$java_util_Locale($I$(4).ROOT);
}, 1);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:58 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
