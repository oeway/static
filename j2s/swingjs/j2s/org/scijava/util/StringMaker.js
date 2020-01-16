(function(){var P$=Clazz.newPackage("org.scijava.util"),p$1={},I$=[[0,'StringBuilder']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "StringMaker");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['builder','StringBuilder']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.builder=Clazz.new_($I$(1,1));
}, 1);

Clazz.newMeth(C$, 'c$$S', function (s) {
;C$.$init$.apply(this);
this.builder=Clazz.new_($I$(1,1).c$$S,[s]);
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return this.builder.toString();
});

Clazz.newMeth(C$, 'append$S', function (s) {
if (this.builder.length$() > 0) this.builder.append$S(", ");
this.builder.append$S(s);
});

Clazz.newMeth(C$, 'append$S$O', function (key, value) {
this.append$S$O$O(key, value, null);
});

Clazz.newMeth(C$, 'append$S$O$O', function (key, value, defaultValue) {
if (value == null  || value.equals$O(defaultValue) ) return;
var s=p$1.makeString$O.apply(this, [value]);
if (s == null ) return;
if (this.builder.length$() > 0) this.builder.append$S(", ");
this.builder.append$S(key + "=" + s );
});

Clazz.newMeth(C$, 'makeString$O', function (value) {
if (value == null ) return null;
if (Clazz.instanceOf(value, "java.lang.String")) {
var s=value;
if (s.isEmpty$()) return null;
return "'" + s + "'" ;
}if (Clazz.instanceOf(value, "java.lang.Class")) {
var c=value;
return c.getSimpleName$();
}if (Clazz.instanceOf(value, "java.util.Collection")) {
var c=value;
if (c.isEmpty$()) return null;
var sb=Clazz.new_($I$(1,1));
var iter=c.iterator$();
while (iter.hasNext$()){
if (sb.length$() > 0) sb.append$S(", ");
var o=iter.next$();
sb.append$S(p$1.makeString$O.apply(this, [o]));
}
return "{" + sb.toString() + "}" ;
}return value.toString();
}, p$1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
