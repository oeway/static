(function(){var P$=java.util,p$1={},I$=[[0,'sun.util.ResourceBundleEnumeration','java.util.HashMap']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ListResourceBundle", null, 'java.util.ResourceBundle');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.lookup=null;
}, 1);

C$.$fields$=[['O',['lookup','java.util.Map']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'handleGetObject$S', function (key) {
if (this.lookup == null ) {
p$1.loadLookup.apply(this, []);
}if (key == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}return this.lookup.get$O(key);
});

Clazz.newMeth(C$, 'getKeys$', function () {
if (this.lookup == null ) {
p$1.loadLookup.apply(this, []);
}var parent=this.parent;
return Clazz.new_($I$(1,1).c$$java_util_Set$java_util_Enumeration,[this.lookup.keySet$(), (parent != null ) ? parent.getKeys$() : null]);
});

Clazz.newMeth(C$, 'handleKeySet$', function () {
if (this.lookup == null ) {
p$1.loadLookup.apply(this, []);
}return this.lookup.keySet$();
});

Clazz.newMeth(C$, 'loadLookup', function () {
if (this.lookup != null ) return;
var contents=this.getContents$();
var temp=Clazz.new_(1,{K:"String",V:"java.lang.Object"},$I$(2,1).c$$I,[contents.length]);
for (var i=0; i < contents.length; ++i) {
var key=contents[i][0];
var value=contents[i][1];
if (key == null  || value == null  ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}temp.put$TK$TV(key, value);
}
this.lookup=temp;
}, p$1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:49:57 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1